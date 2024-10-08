import {ShoppingCart } from "lucide-react"
import { ProductCard } from "./components/product-card"
import { DrawerOrder } from "./components/drawer-order"
import { useEffect, useState } from "react"

export interface productInterface{
  id: string,
  title: string,
  value: number,
  img: string,
}

export function App() {

  const [ openDrawerOrder,  setOpenDrawerOrder ] = useState(false);
  const [ allProducts, setAllProducts ] = useState<productInterface[]>([]);
  const [ selectedProduct, setSelectedProduct ] = useState<productInterface[]>([]);

  async function getData(){
    await fetch('http://localhost:3000/products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        return response.json();
    })
    .then(data => {
        setAllProducts(data);
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });
  };

  useEffect(() => { 
      getData();
  }, []);

  function handleSelectedProduct(id: string){
    const updatedProducts = selectedProduct.filter(product => product.id !== id);

    setSelectedProduct(updatedProducts)
  };

  return (
    <>
      <header className="h-32 flex justify-center items-center">
        <nav className="flex items-center gap-5 text-xl font-normal text-zinc-800">
          <div className="text-4xl">CandyCrush</div>
          <button onClick={() => setOpenDrawerOrder(true)}>
            <div className="relative w-auto">
              <div className="absolute p-[1px] w-auto h-auto top-0 right-0 rounded-full bg-white">
                {selectedProduct.length > 0 && (
                  <h6 className="text-sm">{selectedProduct.length}</h6>
                )}
              </div>
              <ShoppingCart className="size-10" />
            </div>
          </button>
        </nav>
      </header>      
      <main className="grid grid-cols-3 grid-rows-2 ml-36 mr-36 mt-24 gap-20">
        {allProducts.map((item) => (
          <div key={item.id}>
            <ProductCard 
              id={item.id}
              img={item.img}
              title={item.title}
              value={item.value}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              handleSelectedProduct={handleSelectedProduct}
            />
          </div>
        ))}
      </main>

      {openDrawerOrder && (
        <DrawerOrder
          selectedProduct={selectedProduct}
          setOpenDrawerOrder={setOpenDrawerOrder}
          handleSelectedProduct={handleSelectedProduct}
        />
      )}

    </>
  )
}