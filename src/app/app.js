import API from './services/api.service.js';
import formatNumber from './utils/formatNumber.js';

export default async function run() {
  // Setup
  const gallery = document.querySelector('.gallery');
  const cardTemplate = document.getElementById('card-template').content;
  const cardSkeleton = document.getElementById('skeleton-template').content;
  let frag = document.createDocumentFragment();

  // Adding skeletons while we fetch the data from the API
  for (let i = 0; i < 16; i++) {
    const skeleton = cardSkeleton.cloneNode(true);
    frag.appendChild(skeleton);
  }
  gallery.appendChild(frag);

  const characters = await API.getCharacters();

  // We reassign our fragment and delete all the skeletons from the gallery
  frag = document.createDocumentFragment();
  while (gallery.lastElementChild) {
    gallery.removeChild(gallery.lastElementChild);
  }

  // Adding cards to the html
  characters.forEach(character => {
    const card = cardTemplate.cloneNode(true);

    card.querySelector('.card__img').style.setProperty('--url', `url(${character.imageUrl})`);
    card.querySelector('.card__name').textContent = character.fullName;
    card.querySelector('.card__title').textContent = character.title;
    card.querySelector('.card__character-id').textContent = '#' + formatNumber(parseInt(character.id) + 1);

    frag.appendChild(card);
  });

  gallery.appendChild(frag);
}