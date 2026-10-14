import * as axios from "axios";
import { useEffect } from "react";

const getCats = (color: string) => {
  return axios.default.get(`/api/cats`, { params: { color } });
};

function App() {
  useEffect(() => {
    getCats("black").then((res) => {
      console.log(res.data);
    });
  }, []);

  return <>123</>;
}

export default App;
