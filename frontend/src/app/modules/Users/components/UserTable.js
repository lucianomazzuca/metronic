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
import { Pagination } from "../../../../_metronic/_partials/controls";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers"
import { UserEditDialog } from "./UsersEditDialog";

// const ActionsColumnFormatter = ({ setShowEditDialog }) => (
//     <>
//       <a
//         // href={() => false}
//         title="Edit customer"
//         className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
//         onClick={setShowEditDialog(true)}
//       >
//         <span className="svg-icon svg-icon-md svg-icon-primary">
//           <SVG
//             src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
//           />
//         </span>
//       </a>
//       <> </>

//       <a
//         // href={() => false}
//         title="Delete customer"
//         className="btn btn-icon btn-light btn-hover-danger btn-sm"
//         // onClick={() => openDeleteCustomerDialog(row.id)}
//       >
//         <span className="svg-icon svg-icon-md svg-icon-danger">
//           <SVG src={toAbsoluteUrl("/media/svg/icons/General/Trash.svg")} />
//         </span>
//       </a>
//     </>
//   );
  

export function UserTable({ entities , showEditDialog, setShowEditDialog}) {

  const editButton = () => {
    return (
      <a
      href={() => false}
      title="Edit customer"
      className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
      onClick={() => setShowEditDialog(true)}
    >
      <span className="svg-icon svg-icon-md svg-icon-primary">
        <SVG
          src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
        />
      </span>
    </a>
    )
  }

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
    {
      dataField: "edit",
      text: "",
      formatter: editButton,
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
      style: {
        width: "10px",
      },
    },
    {
      dataField: "delete",
      text: "",
      formatter: editButton,
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
      style: {
        width: "10px",
      },
    },
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
    </>
  );
}
