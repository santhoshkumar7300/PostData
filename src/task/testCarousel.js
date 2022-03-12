import Carousel from "react-bootstrap/Carousel";

export default function TestCarousel(props) {
  console.log(props, "======carousel");
  return (
    <Carousel>
      {props.data.map((e) => (
        <Carousel.Item indicators={true}>
          <img
            className="d-block w-100"
            src={URL.createObjectURL(e)}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
