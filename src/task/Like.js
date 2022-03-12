import Styles from "../Styles/Task4Style.module.css";
import unlikeHeart from "../Assets/heart.png";
import likedHeart from "../Assets/LikedHeart.png";
import { useState } from "react";
import Task4 from "./Task4";
import { useDispatch, useSelector } from "react-redux";
import { LikeCount, TotalCount } from "../Redux/Action";

export default function Like(props) {
  let dispatch = useDispatch();

  const likeHandle = () => {
    dispatch(LikeCount(props.index));
    dispatch(TotalCount(1));
  };

  return (
    <div className={Styles.LikeContainer}>
      <img
        className={Styles.likeheart}
        onClick={likeHandle}
        src={props.likeType ? likedHeart : unlikeHeart}
        alt="unlike"
      />
    </div>
  );
}
