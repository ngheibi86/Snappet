import axios from "axios";

export const BASE_URL = "http://localhost:5226/";

export const createAPIEndpoint = (endpoint) => {
  let url = BASE_URL + "api" + "/" + endpoint;
  return {
    fetch: async () => {
      try {
        let res = await axios({
          url: url,
          method: "get",
          timeout: 8000,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status == 200) {
          console.log(res.status);
        }
        return res.data;
      } catch (err) {
        console.error(err);
      }
    },
  };
};
