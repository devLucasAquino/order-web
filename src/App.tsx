import { ShoppingCart } from "lucide-react"

function App() {

  return (
    <>
      <div className="h-32 flex justify-center items-center">
        <nav className="flex items-center gap-5 text-xl font-normal text-zinc-500">
          <div>CandyCrush</div>
          <button>
            <ShoppingCart />
          </button>
        </nav>  
      </div>      
    </>
  )
}

export default App
