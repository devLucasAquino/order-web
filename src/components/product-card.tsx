import { productInterface } from "../App";

interface ProductCardProps extends productInterface{
    selectedProduct: productInterface[];
    handleSelectedProduct: (id: string) => void;
    setSelectedProduct: React.Dispatch<React.SetStateAction<productInterface[]>>;
}

export function ProductCard({
    id,
    img,
    title,
    value,
    selectedProduct,
    setSelectedProduct,
    handleSelectedProduct,
}: ProductCardProps){

    const isSelected = selectedProduct.some(product => product.id === id);

    return(
        <div className="bg-gray-200 rounded-md text-xl box-content px-8 py-5 gap-3 flex flex-col">
            <h1 className="text-center">{title}</h1>
            <div className="flex justify-center">
                <img className="rounded-sm size-44" src={img} />
            </div>
            <h3 className="text-center">R$ {value}</h3>
            <div className="flex justify-center">
            { isSelected ? (
                <button
                  onClick={() => handleSelectedProduct(id)}
                  className={`w-auto text-white font-medium rounded-sm py-2 px-16 hover:cursor-pointer transition-all bg-red-500 hover:bg-red-700}`}
                  >Remover
                </button>
            ) : (
                <button
                  onClick={() => setSelectedProduct((prev) => [
                      ...prev, 
                      { id, title, value, img }   
                  ])}
                  className={`w-auto text-white font-medium rounded-sm py-2 px-16 hover:cursor-pointer transition-all bg-green-500 hover:bg-green-700}`}
                  >Adicionar
                </button>
            )}
            </div>
        </div>
    )
}