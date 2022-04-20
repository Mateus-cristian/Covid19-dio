import React, { memo } from "react";
import RefreshIcon from "../../../assets/images/refresh.svg";
import {
  Card,
  Typography,
  Button,
  Select,
  MenuItem,
} from "../../../components/index.js";
import COUNTRIES from "../../../commons/constants/countries";
import { CardPanelContentStyled, ItemStyled } from "./style";

const navigatorHasShare = navigator.share;

function Painel({ updateAt, onChange, data, country, getCovidData }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data;

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  );

  const textCovid19 = `País: ${country} - recuperados: ${recovered}`;

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  };

  const shareInfo = () => {
    navigator.share({
      title: `Dados do covid19 - ${country}`,
      text: textCovid19,
      url: "https://covid19dio.netlify.app",
    });
  };

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  );

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Copiar
      </Button>
    </div>
  );

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">
            COVID19
          </Typography>
          <Typography variant="h6" component="span" color="primary">
            Painel Coronavírus
          </Typography>
          <Typography variant="body2" component="span" color="primary">
            Atualizado em: {updateAt}
            <a href="" onClick={() => window.location(true)}>
              <img
                src={RefreshIcon}
                alt="svg refresh"
                style={{ top: "7px", left: "7px", position: "relative" }}
              />
            </a>
          </Typography>
        </div>
        <div className="pt-2">
          <Select onChange={onChange} value={country}>
            {COUNTRIES.map(renderCountries)}
          </Select>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  );
}

export default memo(Painel);
