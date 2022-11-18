import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addBeer, closeModal } from "./redux/Beer/BeerAction";

import Content from "./components/Content/Content";
import Pagination from "./components/Pagination/pagination";
import { getBeers } from "./service/beerService";
import Beer from "./components/Beer/Beer";
import {
  addBeerRequested,
  fetchBeerRequested,
  fetchBeerSuccess,
} from "./redux/Beer/BeerAction";
import AddBeer from "./components/Beer/AddBeer";

function App() {
  const [page, setPage] = useState(1);
  const [screen, setScreen] = useState(1);
  const dispatch = useDispatch();
  const rawData = useSelector((state) => state);
  const data = useSelector((state) => state.beers);
  const customData = useSelector((state) => state.customBeers);
  const modalOpen = useSelector((state) => state.openModal);

  let next = false;
  rawData?.loading ? (next = true) : (next = false);

  useEffect(() => {
    (async () => {
      dispatch(fetchBeerRequested());
      const response = await getBeers(page);
      console.log(response);
      if (response.data) {
        dispatch(fetchBeerSuccess(response.data));
      }
    })();
  }, [page]);

  if (data?.error) {
    throw new Error("THere was an error");
  }

  const handlePagination = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleScreenDec = () => {
    if (screen == 2) {
      setScreen((prevScreen) => prevScreen - 1);
    }
  };

  const handleScreenInc = () => {
    if (screen == 1) {
      setScreen((prevScreen) => prevScreen + 1);
    }
  };

  const handleAddNewBeer = () => {
    dispatch(addBeerRequested());
  };

  return (
    <>
      <div className="app_wrapper">
        {addBeer ? (
          <AddBeer
            open={modalOpen}
            handleClose={() => dispatch(closeModal())}
          />
        ) : null}

        <div className="title_wrapper">
          {data && (
            <button className="content_title" onClick={handleScreenDec}>
              All Beers
            </button>
          )}
          {
            <button className="content_title" onClick={handleScreenInc}>
              My Beers
            </button>
          }
          {screen == 2 ? (
            <button className="add_beer_title" onClick={handleAddNewBeer}>
              Add a new Beer
            </button>
          ) : null}
        </div>
        {screen == 1 ? (
          <>
            <Content data={data} next={next} />
            {data?.length > 0 && (
              <Pagination
                id="page-bottom"
                onClick={handlePagination}
                next={next}
              />
            )}
          </>
        ) : (
          <>{<Beer data={customData ? customData : []}></Beer>}</>
        )}
      </div>
    </>
  );
}

export default App;
