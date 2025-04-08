import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type orderTotalsProps ={
    order: OrderItem[],
    tip:number
    placeOrder: () => void
}

export default function OrdersTotals({order, tip, placeOrder} : orderTotalsProps) {

    const subtotalAmount = useMemo (() => order.reduce( 
        (total, item) => total + (item.quantity * item.price), 0 ) ,
        [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])

    return (
        <>
            <div className=" space-y-3">
                <h2 className=" font-black text-2xl">Totals and Tips: </h2>
                <p>Subtotal: {''}
                    <span className=" font-bold">{ formatCurrency(subtotalAmount) }</span>
                </p>
                <p>Tips: {''}
                    <span className=" font-bold">{ formatCurrency(tipAmount) }</span>
                </p>
                <p>Totals: {''}
                    <span className=" font-bold">{ formatCurrency(totalAmount) }</span>
                </p>
            </div>
            <div>
            
            </div>

            <button 
                className="w-full bg-fuchsia-950 p-3 uppercase text-white font-bold mt-10 disabled:opacity-20"
                disabled={totalAmount === 0}
                onClick={placeOrder}>
                Save Order
            </button>
        </>
    )
}
