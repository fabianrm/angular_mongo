export class Productos {
  constructor(
    public nombre: string = '',
    public descripcion: string = '',
    public precio_venta: number = 0,
    public precio_regular: number = 0,
    public slug: string = '',
    public brand: string = '',
    public currency: string = '',
    public status: boolean = false,
    public availability: boolean = false,
    public isBestSeller: boolean = false,
    public isNewArrival: boolean = false,
    public isFeatured: boolean = false,
    public isSpecialOffer: boolean = false,
    public created_at: string = '',
    public categoria: string[] = [],
    public imageUrls: string[] = [],
    public uid: string = ''
  ) {
  }
}
