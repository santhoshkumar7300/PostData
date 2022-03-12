import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import img from "../Assets/imageUpload.png";
import { Carousel } from "react-bootstrap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [index, setIndex] = React.useState(props.Itemindex);

  const handleSelect = (item) => {
    setIndex(item);
  };

  console.log(index, "=====index");
  console.log(props, "====modalprops");
  return (
    <div>
      <Modal
        open={props.modal}
        onClose={props.CloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ border: "unset", width: "900px" }}>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {props.data.map((e, index) => (
              <Carousel.Item indicators={true} controls={false}>
                <img
                  className="d-block w-100"
                  src={URL.createObjectURL(e)}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Box>
      </Modal>
    </div>
  );
}
