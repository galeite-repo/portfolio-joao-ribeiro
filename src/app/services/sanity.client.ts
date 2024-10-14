import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = sanityClient({
  projectId: 'rfnhqp8h', 
  dataset: 'production', 
  apiVersion: '2023-10-14', 
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
  }