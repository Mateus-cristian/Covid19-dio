import React, { memo, useCallback, useEffect, useState } from "react";
import Api from "../../Api.js";
import { ContainerStyled } from "./style.js";
import Board from "./components/Board.jsx";
import Painel from "./components/Painel.jsx";

function Main() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("brazil");
  const updateAt = new Date().toLocaleString();

  const getCovidData = useCallback((country) => {
    Api.getCountry(country).then((data) => setData(data));
  }, []);

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country]);

  const handleChange = ({ target }) => {
    const country = target.value;
    setCountry(country);
  };

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Painel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
    </ContainerStyled>
  );
}

export default memo(Main);
