interface Foto {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }
  
  export interface Home {
    nome: string;
    _id: string;
    _updatedAt: string;
    descricao: string;
    foto: Foto;
    fotoUrl?: string;
    _type: string;
    _createdAt: string;
    _rev: string;
  }
  