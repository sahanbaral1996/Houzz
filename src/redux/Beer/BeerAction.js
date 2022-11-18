export const FETCH_BEERS_REQUESTED = "FETCH_BEERS_REQUESTED";
export const FETCH_BEERS_SUCCESS = "FETCH_BEERS_SUCCESS";
export const FETCH_BEERS_FAILURE = "FETCH_BEERS_FAILURE";

export const ADD_BEER = "ADD_BEER";
export const ADD_BEER_REQUESTED = "ADD_BEER_REQUESTED";

export const CLOSE_MODAL = "CLOSE_MODAL";

export function addBeer(beer) {
  return {
    type: ADD_BEER,
    payload: beer,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

export function addBeerRequested() {
  return {
    type: ADD_BEER_REQUESTED,
  };
}

export function fetchBeerRequested() {
  return {
    type: FETCH_BEERS_REQUESTED,
  };
}

export function fetchBeerSuccess(beers) {
  return {
    type: FETCH_BEERS_SUCCESS,
    payload: beers,
  };
}

export function fetchBeerFailure(error) {
  return {
    type: FETCH_BEERS_FAILURE,
    payload: error,
  };
}
