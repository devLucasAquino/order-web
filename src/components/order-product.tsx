import { Minus, Plus, Trash2Icon } from "lucide-react";
import { productInterface } from "../App";
interface OrderProductProps extends productInterface{
    count: number;
    handleSelectedProduct: (id: string) => void;
    handleCountChange: (id: string, newCount: number) => void;
}

export function OrderProduct({
    id,
    img,
    value,
    title,
    count,
    handleCountChange,
    handleSelectedProduct,
}: OrderProductProps){

    const incrementCount = () => {
        handleCountChange(id, count + 1);
    };

    const decrementCount = () => {
        if (count > 1) {
            handleCountChange(id, count - 1);
        }
    };

    return(
        <div className="bg-gray-50 rounded-md w-full font-medium text-xl p-2 relative">
            <div className="flex gap-3">
                <img className="size-32 rounded-md" src={img} />
                <div className="flex flex-col w-full gap-4">
                    <div className="flex justify-between">
                        <h1>{title}</h1>
                        <span className="font-bold text-md">R$ {value}</span>
                    </div>
                    <span className="text-sm text-center text-zinc-400">
                        o melhor brigadeiro da cidade de São Paulo
                    </span>
                    <div className="flex justify-start items-center gap-4">
                        <button 
                            onClick={decrementCount}
                            className="bg-black rounded-full">
                            <Minus className="text-white"/>
                        </button>
                            {count}
                        <button 
                            onClick={incrementCount} 
                            className="bg-black rounded-full"
                            ><Plus className="text-white"/>
                        </button>
                    </div>
                </div>

            </div>
            <button
                onClick={() => handleSelectedProduct(id)}
                className="absolute bottom-2 right-2"
            ><Trash2Icon className="size-5 text-red-600"/>
            </button>

            
        </div>
    )
}