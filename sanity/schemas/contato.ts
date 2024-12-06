import { defineField, defineType } from "sanity";


export default defineType({
    name: 'contato',
    title: 'Contato',
    type: 'document',
    fields: [
        defineField({
            name: 'telefone',
            title: 'Telefone',
            type: 'string',
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram',
            type: 'string',
        }),
        defineField({
            name: 'endereco',
            title: 'Endereço',
            type: 'string',
        }),
    ]
})