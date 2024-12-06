import { defineField, defineType } from "sanity";


export default defineType({
    name: 'galeria',
    title: 'Galeria',
    type: 'document',
    fields: [

        defineField({
            name: 'categoria',
            title: 'Categoria',
            type: 'string',
        }),
        defineField({
            name: 'fotos',
            title: 'Fotos',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'foto',
                            title: 'Foto',
                            type: 'image',
                        }),
                        defineField({
                            name: 'tipo',
                            title: 'Tipo',
                            type: 'string',
                            placeholder: 'tall = retrato; wide = paisagem; vazio = quadrado;'
                        }),
                    ]
                }
            ]
        }),

    ]
})