import urls from 'config/urls';

const {
  abc, about, activities, schedule, gallery, contact, news,
} = urls;

export default [
  { text: 'O nas', link: about },
  { text: 'Oferta', link: activities },
  { text: 'Nasz dzień', link: schedule },
  { text: 'Galeria', link: gallery },
  { text: 'ABC Przedszkolaka', link: abc },
  { text: 'Aktualności', link: news },
  { text: 'Kontakt', link: contact },
];
