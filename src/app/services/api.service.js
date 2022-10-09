const BASE_URL = 'https://thronesapi.com/api/v2/';

async function getData(url) {
  try {
    const data = await fetch(url).then(res => res.json());
    return data;
  } catch(err) {
    console.error(err);
  }
}

const API = {
  async getCharacters() {
    const data = await getData(`${BASE_URL}characters`);
    return data;
  },
  async getCharacter(id) {
    const data = await getData(`${BASE_URL}characters/${id}`);
    return data;
  },
  async getContinents() {
    const data = await getData(`${BASE_URL}continents`);
    return data;
  },
  async getContinent(id) {
    const data = await getData(`${BASE_URL}continents/${id}`);
    return data;
  }
};

export default API;