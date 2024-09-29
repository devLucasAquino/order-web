import { X } from "lucide-react";

interface ConfirmModalProps{
    setOpenConfirmModal: (e: boolean) => void;
}

export function ConfirmModal({
    setOpenConfirmModal,
}: ConfirmModalProps){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-10">
            <form className="relative bg-white p-7 rounded-lg text-zinc-600">
                <header className="flex gap-4 mb-5 mt-5">
                    <h1>Confirme seu número do WhatsApp para finalizar seu pedido</h1>
                    <button
                        onClick={() => setOpenConfirmModal(false)}
                        className="absolute right-2 top-2">
                        <X />
                    </button>
                </header>
                <main className="flex flex-col justify-center gap-5">
                    <input 
                        type="text" 
                        className="border border-zinc-700 outline-none focus:outline focus:outline-1 focus:outline-zinc-400 rounded-sm"
                    />
                    <button
                        className="w-auto bg-red-600 hover:bg-red-800 py-2 text-white font-medium"
                    >Confirmar
                    </button>
                </main>
            </form>
        </div>
    )
}