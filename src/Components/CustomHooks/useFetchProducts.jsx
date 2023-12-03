import { useEffect, useState } from "react";

const UseFetchProducts = (url) => {
  const [data, setData] = useState("default value ran");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => setData(data));
  }, [url]);
  return { data };
};

export default UseFetchProducts;
