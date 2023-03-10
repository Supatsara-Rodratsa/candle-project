import React from 'react'
import { Product } from '../components/Product'
import { candleProducts } from '../mocks/candle.mock'
import { Candle } from '../interfaces/candle.interface'
import { useProductStore } from '../stores/productStore'
import { Cart } from '../components/Cart'

const renderProductItem = (product: Candle) => (
  <div
    key={product.name}
    className="flex flex-col justify-center items-center relative mb-10"
  >
    <Product {...product} />
  </div>
)

function ProductScreen() {
  const total = useProductStore((x) => x.total)

  return (
    <div className="bg-primary overflow-scroll flex flex-col justify-center relative">
      <h1
        data-testid="header"
        className="text-[40px] py-14 w-full text-center font-medium"
      >
        Candle Products
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {candleProducts.map(renderProductItem)}
      </div>
      <div className="fixed bottom-10 right-10">
        <Cart totalProducts={total}></Cart>
      </div>
    </div>
  )
}

export default ProductScreen
