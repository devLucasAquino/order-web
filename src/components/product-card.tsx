import { productInterface } from "../App";

interface ProductCardProps extends productInterface{
    setSelectedProduct: React.Dispatch<React.SetStateAction<productInterface[]>>;
}

export function ProductCard({
    id,
    img,
    title,
    value,
    setSelectedProduct,
}: ProductCardProps){

    return(
        <div className="bg-gray-200 rounded-md text-xl box-content px-8 py-5 gap-3 flex flex-col">
            <h1 className="text-center">{title}</h1>
            <img className="rounded-sm" src={img} />

            

            <h3 className="text-center">R$ {value}</h3>
            <div className="flex justify-center">
              <button 
                onClick={() => setSelectedProduct((prev) => [
                    ...prev, 
                    { id, title, value, img }   
                ])}
                className="bg-green-500 text-white font-medium rounded-sm py-2 px-16 hover:bg-green-700 transition-all"
                >Adicionar
              </button>
            </div>
        </div>
    )
}