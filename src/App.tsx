import { Minus, Plus, ShoppingCart } from "lucide-react"
import brigadeiroImg from "./assets/brigadeiro.jpg";
import { useState } from "react";

function App() {

  const [ count, setCount ] = useState(0);

  return (
    <>
      <div className="h-32 flex justify-center items-center">
        <nav className="flex items-center gap-5 text-xl font-normal text-zinc-800">
          <div>CandyCrush</div>
          <button>
            <ShoppingCart />
          </button>
        </nav>
      </div>      
        <main className="grid grid-cols-3 grid-rows-2 ml-36 mr-36 mt-24">
          <div className="bg-gray-200 rounded-md text-xl box-content px-8 py-5 gap-3 flex flex-col">
            <h1 className="text-center">Brigadeiro</h1>
            <img className="rounded-sm" src={brigadeiroImg} />

            <div className="flex justify-center items-center gap-4">
              <button 
                onClick={() => setCount((count) => count - 1)}
                className="bg-black rounded-full">
                 <Minus className="text-white"/>
              </button>
                {count}
              <button 
                onClick={() => setCount((count) => count + 1)} 
                className="bg-black rounded-full"
                ><Plus className="text-white"/>
              </button>
            </div>

            <h3 className="text-center">R$ 20,00</h3>
            <div className="flex justify-center">
              <button className="bg-green-500 text-white font-medium rounded-sm py-2 px-16">
                Adicionar
              </button>
            </div>
          </div>
        </main>
    </>
  )
}

export default App
