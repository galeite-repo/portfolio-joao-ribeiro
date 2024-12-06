export interface Galeria {
    _createdAt: string
    categoria: string
    _rev: string
    _type: string
    _id: string
    _updatedAt: string
    fotos: ItemFoto[]
  }
  
  export interface ItemFoto {
    fotoUrl: string
    foto: Foto
    tipo: string
    _key: string
  }
  
  export interface Foto {
    _type: string
    asset: Asset
  }
  
  export interface Asset {
    _ref: string
    _type: string
  }
  