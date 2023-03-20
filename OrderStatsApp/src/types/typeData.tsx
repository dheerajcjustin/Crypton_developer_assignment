
export type Widget = {
    type: "Revenue" | "Orders" | "Dine in" | "Take away",
    value: string,
    static: number,
    state: "decrement" | "increment"
}