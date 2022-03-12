export const setData = (data) => {
  return {
    type: "DATA",
    data: data,
  };
};

export const LikeCount = (data) => {
  return {
    type: "LIKE_COUNT",
    data: data,
  };
};

export const TotalCount = (data) => {
  return {
    type: "TOTAL_COUNT",
    data: data,
  };
};

export const deletePost = (data) => {
  return {
    type: "DELETE_INDEX",
    data: data,
  };
};

export const EditMsgData = (data) => {
  return {
    type: "EDIT_MSG",
    data: data,
  };
};

export const EditImgData = (data) => {
  return {
    type: "EDIT_IMAGE",
    data: data,
  };
};
export const EditShow = (data) => {
  console.log(data, "=======EditShow");
  return {
    type: "EDIT_SHOW",
    data: data,
  };
};
