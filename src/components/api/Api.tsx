import axios from "axios";
const baseUrl = "http://localhost:9002/api/";

export const loginApi = (user: { email: string; password: string }) => {
  try {
    axios.post("login", user).then((res: any) => {
      if (res.statusCode === 200) {
        return res;
      } else {
        console.log(res.error);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
