
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrdersTotals from "./components/OrdersTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {
  
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder() 

  return (
    <>
     <header className=" bg-fuchsia-100 py-5">
        <h1 className=" text-center text-4xl font-black">Tips and Consumption Calculator</h1>
     </header>

     <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className=" text-4xl font-black">Menu</h2>
          <div className=" space-y-3 mt-10">
            {menuItems.map(item=> (
              <MenuItem 
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
          
        </div>
        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">

          {order.length > 0 ? (
            <>
              <OrderContents 
                order={order}
                removeItem={removeItem}
              />

              <TipPercentageForm 
                setTip={setTip}
                tip={tip}
              />

              <OrdersTotals 
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>

          ) : (
            <div className="w-full bg-fuchsia-300 text-white font-bold">
              <p className=" text-center">Empty Order</p>
            </div>
          )}
          

        </div>
     </main>
    </>
  )
}

export default App
