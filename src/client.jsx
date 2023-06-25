import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '9bdhjil1',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "sktbIrEmvAivtCuyb9QGhvUMF0tXwqlbk2vyuRXTLiC4TE1MqMyym0bze2nzUgatEH3IB30uYO8JUf4McnuGYiyY3hXnGAlpIwQnD36ZeLboHFD0keUD6YIUkesTl667r3MVVVhWo44EbqaAPyevKvYHnd0slcdXlKgDRkCsIdUdBHj4Izh3",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);