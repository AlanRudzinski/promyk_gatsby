import urls from 'pages/urls';

const {
  abc, about, activities, schedule, gallery, contact,
} = urls.urls;

export default [
  { text: 'O nas', link: about, color: 'red' },
  { text: 'ABC przedszkolaka', link: abc },
  { text: 'Oferta', link: activities },
  { text: 'Nasz dzien', link: schedule },
  { text: 'Galeria', link: gallery },
  { text: 'Kontakt', link: contact },
];
