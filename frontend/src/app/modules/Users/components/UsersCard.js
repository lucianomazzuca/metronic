import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../_metronic/_partials/controls";

export function UserCard() {
  return (
    <Card>
      <CardHeader title="Listado de usuarios">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            // onClick={}
          >
            Nuevo Usuario
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        {/* <CustomersFilter /> */}
        {/* {customersUIProps.ids.length > 0 && <CustomersGrouping />} */}
        {/* <CustomersTable /> */}
      </CardBody>
    </Card>
  );
}
