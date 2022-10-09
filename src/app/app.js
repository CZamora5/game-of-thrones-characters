import API from './services/api.service.js';
import formatNumber from './utils/formatNumber.js'

export default async function run() {
  const gallery = document.querySelector('.gallery');
  const cardTemplate = document.getElementById('card-template').content;
  const frag = document.createDocumentFragment();

  const characters = await API.getCharacters();

  characters.forEach(character => {
    const card = cardTemplate.cloneNode(true);

    card.querySelector('.card__img').style.setProperty('--url', `url(${character.imageUrl})`);
    card.querySelector('.card__name').textContent = character.fullName;
    card.querySelector('.card__title').textContent = character.title;
    card.querySelector('.card__character-id').textContent = '#' + formatNumber(character.id);

    frag.appendChild(card);
  });

  gallery.appendChild(frag);
}