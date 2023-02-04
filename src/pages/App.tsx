import React from 'react'
import { Button } from '../components/Button'
import image from '../assets/img/image.png'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  return (
    <div className="bg-primary h-screen flex justify-center items-center overflow-hidden relative">
      <div className="absolute top-[30%] flex flex-col gap-10 items-center">
        <h1 className="flex font-bold text-[40px] text-darkBrown">
          Scented Candle
        </h1>
        <Button
          title={'View Products'}
          onClick={() => navigate('/product')}
        ></Button>
      </div>

      <div className="object-fill">
        <img src={image} width="400" />
      </div>
    </div>
  )
}

export default App
