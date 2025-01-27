import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

interface ProdutosState {
  carrinho: Produto[]
}

const initialState: ProdutosState = {
  carrinho: []
}

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const produto = action.payload
      if (!state.carrinho.some((p) => p.id === produto.id)) {
        state.carrinho.push(produto)
      }
    },
    removerDoCarrinho(state, action: PayloadAction<number>) {
      state.carrinho = state.carrinho.filter((p) => p.id !== action.payload)
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho } = produtosSlice.actions
export default produtosSlice.reducer
