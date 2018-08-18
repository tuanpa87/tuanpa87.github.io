import axios from "./axios-orders";
const intervalTime = 15000;

const fetchPost = () => {
  axios
    .get("/")
    .then(response => {
      console.log("fetch data");
      if (Array.isArray(response.data) === false) {
        return;
      }
      let data = response.data.filter(item => {
        return item.title !== null && item.subtitle !== null;
      });
      localStorage.setItem("data", JSON.stringify(data));
    })
    .catch(error => {
      console.log(error);

      // const data = JSON.parse(localStorage.getItem("data"));
      // const updatedData = {
      //   ...data,
      //   Isupdated: false
      // };
      // localStorage.setItem("data", JSON.stringify(updatedData));
    });
};



export const fetchPostUpdate = () => {
  setInterval(() => fetchPost(), intervalTime);
};
