import { X } from "lucide-react";
import { OrderProduct } from "./order-product";
import { productInterface } from "../App";
import { useState } from "react";
import { ConfirmModal } from "./confirm-modal";

interface DrawerOrderProps{
    selectedProduct: productInterface[];
    setOpenDrawerOrder: (e: boolean) => void;
}

export function DrawerOrder({
    selectedProduct,
    setOpenDrawerOrder,
}: DrawerOrderProps){

    const [ openConfirmModal, setOpenConfirmModal ] = useState(false);

    function handleConfirmBtn(){
        window.open(`https://wa.me/5511949938786/?text=fala ai zé`, '_blank');
    };

    return(
        <article className={`fixed z-50 px-5 py-9 bg-red-gradient h-full bg-gray-100 w-[25%] top-0 right-0`}>
            <header className="flex justify-between items-center text-2xl mb-10">
                <h1>Pedidos</h1>
                <button onClick={() => setOpenDrawerOrder(false)}>
                    <X />
                </button>
            </header>
            <main className="grid grid-cols-1 gap-1 mb-10">
                {selectedProduct.map((order, index) => (
                    <div key={index}>
                        <OrderProduct 
                            img={order.img}
                            title={order.title}
                            value={order.value}
                        />
                    </div>
                ))}
            </main>
            {selectedProduct.length > 0 && (
                <footer className="flex justify-center">
                    <button
                        onClick={() => setOpenConfirmModal(true)}
                        className="bg-green-500 text-white font-medium rounded-sm py-2 px-16 text-xl hover:bg-green-900 transition-all"
                    >Finalizar
                    </button>
                </footer>
            )}

            {openConfirmModal && (
                <ConfirmModal
                    handleConfirmBtn={handleConfirmBtn}
                    setOpenConfirmModal={setOpenConfirmModal}
                />
            )}
        </article>
    )
}