import * as axios from "axios";
import { useEffect } from "react";
export const getCats = () => {
  return axios.default.get(`/api/cats`);
};

function App() {
  useEffect(() => {
    getCats().then((res) => {
      console.log(res.data);
    });
  }, []);

  return <>123</>;
}

export default App;
