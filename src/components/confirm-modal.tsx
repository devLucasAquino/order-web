import { X } from "lucide-react";

interface ConfirmModalProps{
    handleConfirmBtn: () => void;
    setOpenConfirmModal: (e: boolean) => void;
}

export function ConfirmModal({
    handleConfirmBtn,
    setOpenConfirmModal,
}: ConfirmModalProps){

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-10">
            <form className="relative bg-white p-7 rounded-lg text-zinc-600">
                <header className="flex gap-4 mb-5 mt-5">
                    <h1>Você será redirecionado ao WhatsApp</h1>
                    <button
                        onClick={() => setOpenConfirmModal(false)}
                        className="absolute right-2 top-2">
                        <X />
                    </button>
                </header>
                <main className="flex flex-col justify-center gap-5">
                    <button
                        onClick={handleConfirmBtn}
                        className="w-auto bg-green-600 hover:bg-green-900 py-2 text-white font-medium"
                    >Confirmar
                    </button>
                </main>
            </form>
        </div>
    )
}