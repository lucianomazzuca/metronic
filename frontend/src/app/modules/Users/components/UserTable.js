import React, { useEffect, useMemo } from "react";
import MaterialTable from 'material-table'
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers"
import { UserEditDialog } from "./UsersEditDialog";

export function UserTable({ entities, isLoading, setShowEditDialog, setSelectedUser }) {
  const openEditDialog = (rowData) => {
    debugger;
    setSelectedUser(rowData)
    setShowEditDialog(true)
  }

  return (
    <MaterialTable
      title='asdf'
      style={{boxShadow: 'none', paddingLeft: '0 px !important'}}
      columns={[
        { title: 'ID', field: 'id' },
        { title: 'Nombre', field: 'name' },
        { title: 'Administrador', field: 'isAdmin' }
      ]}
      data={entities}
      isLoading={isLoading}
      options={{
        pageSize: 10,
        pageSizeOptions: [10, 25, 50, 100],
        searchFieldAlignment: 'left',
        actionsColumnIndex: -1,
        searchFieldStyle: {paddingLeft: '0 px !important'},
        showTitle: false
      }}
      actions={[
        // {
        //   icon: 'add',
        //   tooltip: intl.formatMessage({ id: "USERS.ACTION.CREATE" }),
        //   isFreeAction: true,
        //   onClick: () => setDialogAction({ actionType: 'create', dialogVisible: true, user: [] }),
        //   position: 'toolbar',
        // },
        {
          icon: 'edit',
          tooltip: 'Editar',
          onClick: (event, rowData) => openEditDialog(rowData)
        }
        // {
        //   icon: 'visibility',
        //   tooltip: intl.formatMessage({ id: "USERS.ACTION.PERMISSION" }),
        //   onClick: (event, rowData) => openPanel(rowData)
        // }
      ]}
      localization={{
        toolbar: {
          searchTooltip: 'Buscar',
          searchPlaceholder: 'Buscar'
        },
        header: {
          actions: ''
        },
        pagination: {
          labelRowsSelect: 'resultados',
          labelRowsPerPage: 'resultados',
          labelDisplayedRows: '{from}-{to} de {count}'
        },
        body: {
          emptyDataSourceMessage: '',
        }
      }}
    />
  );
}
