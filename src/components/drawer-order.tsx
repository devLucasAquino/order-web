import { X } from "lucide-react";
import { OrderProduct } from "./order-product";
import { productInterface } from "../App";

interface DrawerOrderProps{
    selectedProduct: productInterface[];
    setOpenDrawerOrder: (e: boolean) => void;
}

export function DrawerOrder({
    selectedProduct,
    setOpenDrawerOrder,
}: DrawerOrderProps){
    return(
        <article className={`fixed z-50 px-5 py-9 bg-red-gradient h-full bg-gray-100 w-[25%] top-0 right-0`}>
            <header className="flex justify-between items-center text-2xl mb-10">
                <h1>Pedidos</h1>
                <button onClick={() => setOpenDrawerOrder(false)}>
                    <X />
                </button>
            </header>
            <main className="grid grid-cols-1 gap-1">
            {selectedProduct.map((order, index) => (
                <div key={index}>
                    <OrderProduct 
                        title={order.title}
                        value={order.value}
                    />
                </div>
            ))}

            </main>
        </article>
    )
}