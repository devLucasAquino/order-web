import brigadeiroImg from "../assets/brigadeiro.jpg";
import { productInterface } from "../App";

interface ProductCardProps{
    setSelectedProduct: React.Dispatch<React.SetStateAction<productInterface[]>>;
}


export function ProductCard({
    setSelectedProduct,
}: ProductCardProps){

    
    const title = "Brigadeiro"
    const value = 20;

    return(
        <div className="bg-gray-200 rounded-md text-xl box-content px-8 py-5 gap-3 flex flex-col">
            <h1 className="text-center">{title}</h1>
            <img className="rounded-sm" src={brigadeiroImg} />

            

            <h3 className="text-center">R$ {value}</h3>
            <div className="flex justify-center">
              <button 
                onClick={() => setSelectedProduct((prev) => [
                    ...prev, 
                    { title, value }   
                ])}
                className="bg-green-500 text-white font-medium rounded-sm py-2 px-16"
                >Adicionar
              </button>
            </div>
        </div>
    )
}