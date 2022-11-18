import axios from "axios";

export const BASEAPI = "https://api.punkapi.com/v2/beers";

export function getAPIUrl(page, perPage = 10) {
  return `${BASEAPI}?page=${page}&per_page=${perPage}`;
}

export async function getBeers(page) {
  const response = await axios.get(getAPIUrl(page));
  return response;
}
