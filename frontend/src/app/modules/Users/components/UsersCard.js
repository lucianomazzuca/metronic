import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../_metronic/_partials/controls";
// import { CustomersFilter } from "./customers-filter/CustomersFilter";
// import { CustomersTable } from "./customers-table/CustomersTable";
// import { CustomersGrouping } from "./customers-grouping/CustomersGrouping";
// import { useCustomersUIContext } from "./CustomersUIContext";

export function UsersCard() {
//   const customersUIContext = useCustomersUIContext();
//   const customersUIProps = useMemo(() => {
//     return {
//       ids: customersUIContext.ids,
//       newCustomerButtonClick: customersUIContext.newCustomerButtonClick,
//     };
//   }, [customersUIContext]);

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
