import { TotalCount } from "./Action";

const initialValues = {
  post: [],
  total: 0,
};

const LikeFun = (state, action) => {
  let data = [...state.post];
  // data[action.data].likeType === 0
  //   ? (data[action.data].likeType = 1)
  //   : (data[action.data].likeType = 0);
  data[action.data].likeType = data[action.data].likeType === 0 ? 1 : 0;
  return { ...state, post: data };
};

const TotalCountFun = (state, action) => {
  return { ...state, total: state.total + action.data };
};

const deleteHandle = (state, action) => {
  let refData = [...state.post];
  refData = refData.filter((e, index) => index !== action.data);
  return { ...state, post: refData };
};

const editMsgHandle = (state, action) => {
  let ref;
  ref = [...state.post];
  ref[action.data.index].message = action.data.Msg;
  return { ...state, post: ref };
};

const editImgHandle = (state, action) => {
  let deletePostImage = [...state.post];
  let filterImg = deletePostImage[action.data.PostIndex].images.filter(
    (e, index) => index !== action.data.DeleteImageIndex
  );
  deletePostImage[action.data.PostIndex].images = filterImg;
  return { ...state, post: deletePostImage };
};

const editShowHandle = (state, action) => {
  console.log(action.data, "=======reducerEditShow");
  let ref = [...state.post];
  ref.map((e, index) =>
    index === action.data.index
      ? (ref[action.data.index].EditShow = action.data.value)
      : (e.EditShow = 0)
  );

  // console.log(e.EditShow, "======editshow")

  return { ...state, post: ref };
};

export default function Reducer(state = initialValues, action) {
  switch (action.type) {
    case "DATA": {
      return {
        ...state,
        post: [...state.post, action.data],
      };
    }

    case "LIKE_COUNT": {
      // let b = [...state.post];
      // b[action.data].likeType = b[action.data].likeType === 0 ? 1 : 0;
      // console.log({ ...state, post: b });

      return LikeFun(state, action);
    }
    case "TOTAL_COUNT": {
      return TotalCountFun(state, action);
    }

    case "DELETE_INDEX":
      return deleteHandle(state, action);

    case "EDIT_MSG":
      return editMsgHandle(state, action);

    case "EDIT_IMAGE":
      return editImgHandle(state, action);

    case "EDIT_SHOW":
      return editShowHandle(state, action);
  }
  return state;
}
