import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { RootState } from './store/store'
import {
  setProdutos,
  adicionarAoCarrinho,
  favoritar
} from './store/produtosSlice'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const {
    lista: produtos,
    carrinho,
    favoritos
  } = useSelector((state: RootState) => state.produtos)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => dispatch(setProdutos(res)))
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={(produto) => dispatch(favoritar(produto))}
          adicionarAoCarrinho={(produto) =>
            dispatch(adicionarAoCarrinho(produto))
          }
        />
      </div>
    </>
  )
}

export default App
