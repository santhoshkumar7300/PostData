import Styles from "../Styles/Task4Style.module.css";
import Like from "./Like";
import { useState } from "react";
import BasicModal from "./Modal";
import DeletePost from "./CURD";
import success from "../Assets/success.png";
import { useDispatch, useSelector } from "react-redux";
import { EditImgData, EditMsgData, EditShow } from "../Redux/Action";
import cancel from "../Assets/close_icon.svg";

export default function Post(props) {
  let dispatch = useDispatch();
  let selector = useSelector((state) => state.post);
  console.log(selector, "======editSelector");

  const [show, setShow] = useState(false);
  const [img, setImg] = useState({});
  const [itemIndex, setItemIndex] = useState(0);
  // const [showEdit, setShowEdit] = useState(false);
  const [editMsg, setEditMsg] = useState(props.data.message);

  // const handleModal = (imgData) => {
  //   console.log(imgData, "======imgData");
  //   setShow(true);
  //   setImg(imgData);
  // };

  const CloseModal = () => {
    setShow(false);
  };

  const editShow = () => {
    console.log("test");
    let temp = { index: props.index, value: 1 };
    dispatch(EditShow(temp));
  };

  const editHandle = () => {
    console.log("test");
    let Edittemp = { index: props.index, value: 0 };
    let temp = { index: props.index, Msg: editMsg };
    dispatch(EditMsgData(temp));
    dispatch(EditShow(Edittemp));
  };

  const imgDeleteHandle = (deleteImgIndex) => {
    console.log(deleteImgIndex, "=========index");
    let temp = {
      DeleteImageIndex: deleteImgIndex,
      PostIndex: props.index,
    };
    dispatch(EditImgData(temp));
  };

  return (
    <div className="container-fluid">
      {/* {show ? <TestCarousel data={props.data.images} /> : null} */}
      <div className={Styles.PostContainer + " container mt-3"}>
        {show ? (
          <BasicModal
            Itemindex={itemIndex}
            CloseModal={CloseModal}
            data={props.data.images}
            modal={show}
          />
        ) : null}

        <DeletePost deleteIndex={props.index} editShow={editShow} />

        <div className={Styles.LoopImageDiv}>
          {props.data.images.map((e, index) => {
            return (
              <div style={{ position: "relative" }}>
                <img
                  className={Styles.postImage}
                  onClick={() => {
                    setShow(true);
                    setItemIndex(index);
                  }}
                  src={URL.createObjectURL(e)}
                />
                {props.data.EditShow === 1 ? (
                  <img
                    className={Styles.cancelImage}
                    onClick={() => imgDeleteHandle(index)}
                    src={cancel}
                  />
                ) : null}

                {props.data.images.length > 4 && index === 3 ? (
                  <div className={Styles.overlayDiv}>
                    <p className={Styles.MoreImageCount}>
                      +{props.data.images.length - 4}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {props.data.EditShow === 1 ? (
          <div>
            <input
              style={{ marginTop: "20px" }}
              type="text"
              value={editMsg}
              onChange={(e) => setEditMsg(e.target.value)}
              placeholder="Edit Message"
            />
            <img
              className={Styles.successImg}
              onClick={editHandle}
              src={success}
              alt="success"
            />
          </div>
        ) : (
          <p className={Styles.postMessage}>{props?.data?.message}</p>
        )}
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Like
            totalLikeCount={props?.data?.totalLikeCount}
            index={props.index}
            likeType={props?.data?.likeType}
          />
        </div>
      </div>
    </div>
  );
}
