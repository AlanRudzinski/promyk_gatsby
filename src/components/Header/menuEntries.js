import urls from 'config/urls';

const {
  abc, about, activities, schedule, gallery, contact, news,
} = urls;

export default [
  { text: 'O nas', link: about },
  { text: 'Oferta', link: activities },
  { text: 'Nasz dzien', link: schedule },
  { text: 'Galeria', link: gallery },
  { text: 'ABC przedszkolaka', link: abc },
  { text: 'Aktualnosci', link: news },
  { text: 'Kontakt', link: contact },
];
