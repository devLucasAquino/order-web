import { X } from "lucide-react";

interface DrawerOrderProps{
    selectedProduct: { title: string }[];
    setOpenDrawerOrder: (e: boolean) => void;
}

export function DrawerOrder({
    selectedProduct,
    setOpenDrawerOrder,
}: DrawerOrderProps){
    return(
        <article className={`fixed z-50 px-5 py-9 bg-red-gradient h-full bg-gray-100 w-[20%] top-0 right-0`}>
            <header className="flex justify-between items-center text-2xl">
                <h1>Pedidos</h1>
                <button onClick={() => setOpenDrawerOrder(false)}>
                    <X />
                </button>
            </header>
            <main>
            {selectedProduct.map((order, index) => (
                <h1 key={index}>{order.title}</h1>
            ))}

            </main>
        </article>
    )
}