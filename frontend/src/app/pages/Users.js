import React from "react";
import {useSubheader} from "../../_metronic/layout";

export const Users = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Usuarios");

  return (
    <h1>Hello!</h1>
  )
};
