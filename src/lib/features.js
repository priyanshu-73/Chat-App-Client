import moment from "moment";

const fileFormat = (url = "") => {
  const fileExt = url.split(".").pop();

  if (fileExt === "mp4" || fileExt === "webm" || fileExt === "ogg")
    return "video";

  if (fileExt === "mp3" || fileExt === "wav") return "audio";
  if (
    fileExt === "png" ||
    fileExt === "jpg" ||
    fileExt === "jpeg" ||
    fileExt === "gif"
  )
    return "image";

  return "file";
};

const transformImage = (url = "", width = 100) => {
  if (typeof url !== "string") {
    console.error("Expected a string for url but received:", typeof url);
    return ""; // Return an empty string or a default image URL if the input is invalid
  }

  // Ensure that url has a value before performing replace
  if (url) {
    const newUrl = url.replace("upload/", `upload/dpr_auto/w_${width}/`);
    return newUrl;
  }

  return ""; // Return an empty string or a default image URL if the input is empty
};


const getLast7Days = () => {
  const currDate = moment();
  const last7Days = [];
  for(let i = 0; i < 7; i++){
    const dayDate = currDate.clone().subtract(i, "days");

    const dayName = dayDate.format("dddd")

    last7Days.unshift(dayName)
  }
  return last7Days;
}

const getOrSaveFromStorage = ({key, value, get}) => {

  if(get) return localStorage.getItem(key)? JSON.parse(localStorage.getItem(key)) : null;
  else localStorage.setItem(key, JSON.stringify(value));

};

export { fileFormat, transformImage, getLast7Days, getOrSaveFromStorage };