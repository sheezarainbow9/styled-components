import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { Icone } from "../Components/UI";

export default (type) => {
  const Images = {
    Restaurante: <Icone src={alimentacao} alt="Restaurante" />,
    Restaurante: <Icone src={outros} alt="Outros" />,
    Restaurante: <Icone src={saude} alt="Saúde" />,
    Restaurante: <Icone src={transporte} alt="Transporte" />,
    Restaurante: <Icone src={utilidades} alt="Utilidades" />,
  };

  return Images[type] || Images.default;
};
