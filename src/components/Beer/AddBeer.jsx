import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { addBeer } from "../../redux/Beer/BeerAction";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { Button, TextField } from "@material-ui/core";
import { HouzzBeer } from "../../assets/image";

const AddBeer = ({ handleClose, open }) => {
  const initialState = {
    name: "",
    image_url: "",
    genre: "",
    description: "",
    tagline: "Custom tagline",
    id: "",
  };

  const errorData = {
    name: "",
    genre: "",
    description: "",
  };

  const [beerData, setBeerData] = React.useState(initialState);
  const [error, setError] = React.useState(errorData);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.beers);
  const customData = useSelector((state) => state.customBeers);

  const setErrorMessage = () => {
    setError((prevError) => ({
      ...prevError,
      name: beerData.name == "" ? "Please enter name" : null,
      genre: beerData.genre == "" ? "Please enter genre" : null,
      description:
        beerData.description == "" ? "Please enter description" : null,
    }));
  };

  const handleSave = () => {
    if (
      beerData.description == "" ||
      beerData.genre == "" ||
      beerData.name == ""
    ) {
      setErrorMessage();
      return;
    }

    beerData.image_url = HouzzBeer;

    console.log(beerData);

    dispatch(addBeer(beerData));
    setBeerData(initialState);
    handleClose();
  };

  const handleChange = (newValue, field) => {
    beerData[field] = newValue;
    setBeerData((prevData) => ({
      ...prevData,
      id: data?.length + customData?.length,
      field: newValue,
    }));
  };

  return (
    <div className="add_modal_wrapper">
      <Modal show={open} onHide={handleClose}>
        <Modal.Header className="modal_title">
          <Modal.Title>Add a New Beer</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_body">
          <div className="modal_image_wrapper">
            <img alt="image" src={HouzzBeer}></img>
          </div>
          <div className="modal_body_wrapper">
            <div className="modal_input_item">
              <TextField
                className="modal_input_field"
                required={true}
                placeholder="Name*"
                fullWidth
                variant="outlined"
                error={error.name}
                value={beerData.name}
                onChange={(e) => handleChange(e.target.value, "name")}
              />
            </div>
            <div className="modal_input_item">
              <TextField
                className="modal_input_field"
                required={true}
                placeholder="Genre*"
                fullWidth
                variant="outlined"
                name={"genre"}
                error={error.genre}
                value={beerData.genre}
                onChange={(e) => handleChange(e.target.value, "genre")}
              />
            </div>
            <div className="modal_input_item">
              <TextField
                className="modal_input_field"
                placeholder="Description*"
                variant="outlined"
                fullWidth
                multiline
                required={true}
                rows={4}
                error={error.description}
                name={"description"}
                value={beerData.description}
                onChange={(e) => handleChange(e.target.value, "description")}
              />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="modal_footer">
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>

          <button className="modal_save_button" onClick={handleSave}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddBeer;
