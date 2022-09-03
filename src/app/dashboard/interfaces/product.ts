export interface AddData {
    id?:number;
    sku: number;
    nombre: string;
    precio: string;
    cantidad: number;
    fechaVencimiento: Date;
    precioVenta:string;
    fechaCompra: Date;
}

export interface SellData {
    id?:number;
    sku: number;
    nombre: string;
    cantidad: number;
    precioVenta:string;
    fechaVenta: string;
}

export interface ElementData {
    name: string;
    position: number;
    symbol: string;
}
