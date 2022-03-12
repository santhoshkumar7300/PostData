import { useDispatch } from "react-redux";
import deleteIcon from "../Assets/delete.png";
import { deletePost } from "../Redux/Action";
import Styles from "../Styles/Task4Style.module.css";
import edit from "../Assets/pencil.svg";

export default function DeletePost(props) {
  let dispatch = useDispatch();

  const deleteHandle = () => {
    dispatch(deletePost(props.deleteIndex));
  };

  return (
    <div className={Styles.deleteParentContainer}>
      <img
        onClick={deleteHandle}
        className={Styles.deleteImg}
        src={deleteIcon}
        alt="delete"
      ></img>
      <img
        style={{ width: "40px" }}
        onClick={() => props.editShow()}
        src={edit}
        alt="edit"
      />
    </div>
  );
}
