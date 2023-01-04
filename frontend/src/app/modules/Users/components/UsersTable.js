import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getSelectRow,
  getHandlerTableChange,
  NoRecordsFoundMessage,
  PleaseWaitMessage,
  sortCaret,
  headerSortingClasses,
} from "../../../../_metronic/_helpers";
// import * as uiHelpers from "../CustomersUIHelpers";
// import * as columnFormatters from "./column-formatters";
import { Pagination } from "../../../../_metronic/_partials/controls";

export function UsersTable({ entities }) {
  // Getting curret state of customers list from store (Redux)
  // const { currentState } = useSelector(
  //   (state) => ({ currentState: state.customers }),
  //   shallowEqual
  // );

  // const { totalCount, entities, listLoading } = currentState;

  // Customers Redux state
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  // Table columns
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
    },
    {
      dataField: "name",
      text: "Nombre",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "isAdmin",
      text: "Perfil Administrador",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    // {
    //   dataField: "action",
    //   text: "Actions",
    //   formatter: columnFormatters.ActionsColumnFormatter,
    //   formatExtraData: {
    //     openEditCustomerDialog: customersUIProps.openEditCustomerDialog,
    //     openDeleteCustomerDialog: customersUIProps.openDeleteCustomerDialog,
    //   },
    //   classes: "text-right pr-0",
    //   headerClasses: "text-right pr-3",
    //   style: {
    //     minWidth: "100px",
    //   },
    // },
  ];

  return (
    <>
      <BootstrapTable
        wrapperClasses="table-responsive"
        bordered={false}
        classes="table table-head-custom table-vertical-center overflow-hidden"
        bootstrap4
        remote
        keyField='id'
        data={entities === null ? [] : entities}
        columns={columns}
      />

      {/* <BootstrapTable
        wrapperClasses="table-responsive"
        bordered={false}
        classes="table table-head-custom table-vertical-center overflow-hidden"
        bootstrap4
        remote
        keyField="id"
        data={entities === null ? [] : entities}
        columns={columns}
        // defaultSorted={uiHelpers.defaultSorted}
        // onTableChange={}
        // selectRow={}
        // {...paginationTableProps}
      >
        {/* <PleaseWaitMessage entities={entities} />
        <NoRecordsFoundMessage entities={entities} /> */}
      {/* </BootstrapTable> */}

    </>
  );
}
