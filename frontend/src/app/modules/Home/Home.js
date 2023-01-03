import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import { Card, CardBody, CardHeader } from "../../../_metronic/_partials/controls";

export const Home = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Inicio");

  return (
      <div className={`card card-custom`}>
        {/* Header */}
        <div className="card-header align-items-center border-0 mt-4">
          <h3 className="card-title align-items-start flex-column">
            <span className="font-weight-bolder text-dark">Inicio</span>
            <span className="text-muted mt-3 font-weight-bold font-size-sm">
              Bienvenido a la aplicación
            </span>
          </h3>
        </div>
      </div>
  )
};
