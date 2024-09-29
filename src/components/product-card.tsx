import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import brigadeiroImg from "../assets/brigadeiro.jpg";

interface ProductCardProps{
    setSelectedProduct: React.Dispatch<React.SetStateAction<{title: string}[]>>;
}


export function ProductCard({
    setSelectedProduct,
}: ProductCardProps){

    const [ count, setCount ] = useState(0);
    const title = "Brigadeiro"

    return(
        <div className="bg-gray-200 rounded-md text-xl box-content px-8 py-5 gap-3 flex flex-col">
            <h1 className="text-center">{title}</h1>
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
              <button 
                onClick={() => setSelectedProduct((prev) => [
                    ...prev, 
                    { title }   
                ])}
                className="bg-green-500 text-white font-medium rounded-sm py-2 px-16"
                >Adicionar
              </button>
            </div>
        </div>
    )
}