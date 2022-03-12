import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import img from "../Assets/imageUpload.png";
import Styles from "../Styles/Task4Style.module.css";
import cancel from "../Assets/close_icon.svg";
import Like from "./Like";
import { useDispatch } from "react-redux";
import { setData, SetData } from "../Redux/Action";

export default function Task4() {
  let dispatch = useDispatch();
  const [imageData, setImageData] = useState([]);
  const [msg, setMsg] = useState("");

  const PostHandle = () => {
    let temp = {
      message: msg,
      images: imageData,
      likeType: 0,
      EditShow: 0,
    };
    dispatch(setData(temp));
    setImageData([]);
    setMsg("");
  };

  return (
    <>
      <div className={Styles.ContainerDiv + " container mt-5"}>
        <Form.Control
          type="text"
          style={{ border: "none", fontSize: "20px", boxShadow: "none" }}
          placeholder="Type Something..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <div className={Styles.overallShowImageDiv}>
          {imageData?.map((e, index) => (
            <div
              style={{
                position: "relative",
                width: "60px",
                marginRight: "25px",
              }}
            >
              <img
                className={Styles.showImageDiv}
                src={URL.createObjectURL(e)}
              ></img>
              <img
                className={Styles.cancelImage}
                src={cancel}
                onClick={() => {
                  setImageData(imageData.filter((e, ind) => ind !== index));
                }}
              />
            </div>
          )) || "ft4t4tg4"}
        </div>
        <div className={Styles.imgStyle}>
          <img
            src={img}
            alt="uploadimage"
            onClick={() => document.getElementById("inputTrigger").click()}
            style={{ width: "40px" }}
          />
          <input
            type="file"
            multiple
            id="inputTrigger"
            style={{ display: "none" }}
            onChange={(e) => setImageData([...imageData, ...e.target.files])}
          />
          <button
            onClick={PostHandle}
            type="button"
            class="btn btn-outline-primary"
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
}
