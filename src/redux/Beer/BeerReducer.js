import {
  ADD_BEER,
  ADD_BEER_REQUESTED,
  CLOSE_MODAL,
  FETCH_BEERS_FAILURE,
  FETCH_BEERS_REQUESTED,
  FETCH_BEERS_SUCCESS,
} from "./BeerAction";

const initialState = {
  beers: [],
  loading: false,
  customBeers: [],
  openModal: false,
  error: "",
};

export function beerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BEERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
      };
    case FETCH_BEERS_SUCCESS:
      return {
        loading: false,
        beers: [...state.beers, ...action.payload],
        error: "",
      };
    case FETCH_BEERS_FAILURE:
      return {
        loading: false,
        beers: [],
        error: action.payload,
      };
    case ADD_BEER:
      return {
        ...state,
        loading: false,
        loading: false,
        customBeers: state.customBeers
          ? [...state.customBeers, action.payload]
          : [action.payload],
      };
    case ADD_BEER_REQUESTED:
      return {
        ...state,
        openModal: true,
      };
    default:
      return state;
  }
}
