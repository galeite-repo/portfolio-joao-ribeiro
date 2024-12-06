import { defineField, defineType } from "sanity";


export default defineType({
    name: 'servicos',
    title: 'Serviços',
    type: 'document',
    fields: [

        defineField({
            name: 'descricao',
            title: 'Sub Descrição',
            type: 'string',
        }),
        defineField({
            name: 'servicos',
            title: 'Serviços',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'icon',
                            title: 'icon',
                            type: 'image',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Titulo',
                            type: 'string',
                        }),
                        defineField({
                            name: 'descricao',
                            title: 'Descricao',
                            type: 'string',
                        }),
                    ]
                }
            ]
        }),

    ]
})