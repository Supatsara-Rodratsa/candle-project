import React from 'react'
import cart from '../assets/img/cart.png'

type CartProps = {
  totalProducts: number
  onClick?: () => void
}

export const Cart = (props: CartProps) => {
  return (
    <div className="relative">
      <div className="rounded-full w-16 h-16 bg-brown flex justify-center items-center drop-shadow-md">
        <img src={cart} width="30" height="30" />
      </div>
      {props.totalProducts > 0 ? (
        <div className="absolute rounded-full w-6 h-6 bg-darkBrown flex items-center justify-center text-white -top-1 right-0">
          <span className="pb-[6px]">{props.totalProducts}</span>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
