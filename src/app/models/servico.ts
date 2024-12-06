export interface Servico {
    _createdAt: string
    _rev: string
    _type: string
    _id: string
    _updatedAt: string
    descricao: string
    servicos: ServicoItem[]
  }
  
  export interface ServicoItem {
    _key: string
    icon: Icon
    iconUrl: string
    title: string
    descricao: string
  }
  
  export interface Icon {
    _type: string
    asset: Asset
  }
  
  export interface Asset {
    _ref: string
    _type: string
  }
  