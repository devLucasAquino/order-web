import { Frown, X } from "lucide-react";
import { OrderProduct } from "./order-product";
import { productInterface } from "../App";
import { useState } from "react";
import { ConfirmModal } from "./confirm-modal";

interface DrawerOrderProps{
    selectedProduct: productInterface[];
    setOpenDrawerOrder: (e: boolean) => void;
    handleSelectedProduct: (id: string) => void;
}

export function DrawerOrder({
    selectedProduct,
    setOpenDrawerOrder,
    handleSelectedProduct,
}: DrawerOrderProps){

    const [ openConfirmModal, setOpenConfirmModal ] = useState(false);
    const [counts, setCounts] = useState<{ [key: string]: number }>({});

    function handleConfirmBtn(){
        let message = `*PEDIDO* \n\n`;
        selectedProduct.forEach((item) => {
            message += `- *${item.title.toUpperCase()}* \n`;
            message += `  *Valor Unitário*: R$${item.value} \n`;
            message += `  *Quantidade*: ${counts[item.id] || 1} \n\n`;
        });

        message += `*----------------------------*\n`;
        message += `*Valor Final: ${selectedProduct.reduce((accumulator, item) => {
            return accumulator + (item.value * (counts[item.id] || 1));
        }, 0).toFixed(2)}*\n`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/5511976253412/?text=${encodedMessage}`, '_blank');
    };

    const handleCountChange = (id: string, newCount: number) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: newCount,
        }));
    };

    return(
        <article className={`fixed px-5 py-9 bg-red-gradient h-full bg-gray-100 w-[25%] top-0 right-0`}>
            <header className="flex justify-between items-center text-2xl mb-10">
                <h1>Pedidos</h1>
                <button onClick={() => setOpenDrawerOrder(false)}>
                    <X />
                </button>
            </header>
            <main className="grid grid-cols-1 gap-1 mb-10">


                {selectedProduct.length > 0 ? (
                        selectedProduct.map((order, index) => (
                            <div key={index}>
                                <OrderProduct
                                    id={order.id} 
                                    img={order.img}
                                    title={order.title}
                                    value={order.value}
                                    count={counts[order.id] || 1}
                                    handleCountChange={handleCountChange}
                                    handleSelectedProduct={handleSelectedProduct}
                                />
                                <div className="flex justify-center mt-5">
                                    <h1 className="text-xl font-medium">Valor Total: <span className="font-bold text-3xl">R${selectedProduct.reduce((accumulator, item) => {
                                        return accumulator + (item.value * (counts[item.id] || 1));
                                    }, 0).toFixed(2)}</span></h1>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center flex-col text-zinc-500 gap-4">
                            <h1>Infelizmente ainda não temos pedidos...</h1>
                            <Frown />
                        </div>
                    )
                }
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