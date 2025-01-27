import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

interface ProdutosState {
  lista: Produto[]
  carrinho: Produto[]
  favoritos: Produto[]
}

const initialState: ProdutosState = {
  lista: [],
  carrinho: [],
  favoritos: []
}

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    setProdutos(state, action: PayloadAction<Produto[]>) {
      state.lista = action.payload
    },
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const produto = action.payload
      if (!state.carrinho.some((p) => p.id === produto.id)) {
        state.carrinho.push(produto)
      }
    },
    removerDoCarrinho(state, action: PayloadAction<number>) {
      state.carrinho = state.carrinho.filter((p) => p.id !== action.payload)
    },
    favoritar(state, action: PayloadAction<Produto>) {
      const produto = action.payload
      if (state.favoritos.some((p) => p.id === produto.id)) {
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const {
  setProdutos,
  adicionarAoCarrinho,
  removerDoCarrinho,
  favoritar
} = produtosSlice.actions
export default produtosSlice.reducer
