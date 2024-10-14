export interface Sobre {
    titulo: string;
    nome: string;
    destaques: string[];
    descricao: string;
    foto: Image;
    fotoUrl?: string;
    assinatura: Image;
    assinaturaUrl?: string;
    cargo: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _id: string;
    _type: string;
}

interface Image {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
}

