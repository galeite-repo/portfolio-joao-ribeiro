import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'sobre',
  title: 'Sobre',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'cargo',
      title: 'Cargo',
      type: 'string',
    }),
    defineField({
      name: 'titulo',
      title: 'Titulo',
      type: 'string',
    }),
    defineField({
      name: 'assinatura',
      title: 'Assinatura',
      type: 'image',
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
    }),
    defineField({
      name: 'destaques',
      title: 'Destaques',
      type: 'array',
      of: [{ type: 'string' }]
    }),
  ],
});
