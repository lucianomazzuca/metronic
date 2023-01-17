import React, { useMemo } from "react";
import { Formik } from "formik";
import { isEqual } from "lodash";
// import { useCustomersUIContext } from "../CustomersUIContext";

const prepareFilter = (queryParams, values) => {
  const { status, type, searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {};
  // Filter by status
  filter.status = status !== "" ? +status : undefined;
  // Filter by type
  filter.type = type !== "" ? +type : undefined;
  // Filter by all fields
  filter.lastName = searchText;
  if (searchText) {
    filter.firstName = searchText;
    filter.email = searchText;
    filter.ipAddress = searchText;
  }
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function UserFilter({ listLoading }) {
  // Customers UI Context
//   const customersUIContext = useCustomersUIContext();
//   const customersUIProps = useMemo(() => {
//     return {
//       queryParams: customersUIContext.queryParams,
//       setQueryParams: customersUIContext.setQueryParams,
//     };
//   }, [customersUIContext]);

  // queryParams, setQueryParams,
//   const applyFilter = (values) => {
//     const newQueryParams = prepareFilter(customersUIProps.queryParams, values);
//     if (!isEqual(newQueryParams, customersUIProps.queryParams)) {
//       newQueryParams.pageNumber = 1;
//       // update list by queryParams
//       customersUIProps.setQueryParams(newQueryParams);
//     }
//   };

  return (
    <>
      <Formik
        initialValues={{
          status: "", // values => All=""/Susspended=0/Active=1/Pending=2
          type: "", // values => All=""/Business=0/Individual=1
          searchText: "",
        }}
        onSubmit={(values) => {
        //   applyFilter(values);
        }}
      >
        {({
          values,
          handleSubmit,
          handleBlur,
          handleChange,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit} className="form form-label-right">
            <div className="form-group row">
              <div className="col-lg-2">
                <input
                  type="text"
                  className="form-control"
                  name="searchText"
                  placeholder="Buscar"
                  onBlur={handleBlur}
                  value={values.searchText}
                  onChange={(e) => {
                    setFieldValue("searchText", e.target.value);
                    handleSubmit();
                  }}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
