import type { ReactNode } from "react"

type AdminProductType={
    tags: ReactNode,
    id: string,
    name:string,
    description:string,
    category: string,
    price: number,
    stock:number

}
export type {AdminProductType}