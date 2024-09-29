import {ShoppingCart } from "lucide-react"
import { ProductCard } from "./components/product-card"
import { DrawerOrder } from "./components/drawer-order"
import { useState } from "react"

export interface productInterface{
  title: string,
  value: number,
}

export function App() {

  const [ openDrawerOrder,  setOpenDrawerOrder ] = useState(false);
  const [ selectedProduct, setSelectedProduct ] = useState<productInterface[]>([]);

  return (
    <>
      <header className="h-32 flex justify-center items-center">
        <nav className="flex items-center gap-5 text-xl font-normal text-zinc-800">
          <div>CandyCrush</div>
          <button onClick={() => setOpenDrawerOrder(true)}>
            <ShoppingCart />
          </button>
        </nav>
      </header>      
      <main className="grid grid-cols-3 grid-rows-2 ml-36 mr-36 mt-24 gap-20">
        <ProductCard 
          setSelectedProduct={setSelectedProduct}
        />
      </main>


      {openDrawerOrder && (
        <DrawerOrder
          selectedProduct={selectedProduct}
          setOpenDrawerOrder={setOpenDrawerOrder}
        />
      )}

    </>
  )
}