import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Checkbox, Grid } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import {
  Input,
  Select,
  DatePickerField,
} from "../../../../_metronic/_partials/controls";

// Validation schema
const UserEditSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Minimo 1 caracter")
    .max(50, "Maximo 30 caracter")
    .required("Nombre es requerido"),
  isAdmin: Yup.boolean().required("Este campo es requerido"),
});

export function UserEditDialog({ id, user, show, onHide, setShowEditDialog, updateUser, reload }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const closeDialog = () => {
    formik.resetForm();
    setShowEditDialog(false)
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: user.name,
      isAdmin: user.isAdmin
    },
    validationSchema: UserEditSchema,
    onSubmit: async (values) => {
      debugger;
      setError(null)
      setLoading(true)
      try {
        await updateUser(user.id, values);
        setLoading(false);
        reload();
      } catch (e) {
        setError("Ha ocurrido un error")
      }
    }
  })

  const editForm = () => {
    return (
      <>
        <div className="form-group row">
          {/* Nombre */}
          <div className="col-lg-4">
            <TextField
              name="name"
              placeholder="Nombre"
              label="Nombre"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={Boolean(formik.errors.name)}
              helperText={formik.errors.name}
            />
          </div>
          {/* Administrador */}
          <div className="col-lg-4" style={{ display: 'flex', alignItems: 'end' }}>
            <label className={(formik.touched.isAdmin && Boolean(formik.errors.isAdmin)) ? 'pf-10 MuiFormLabel-root Mui-error' : 'pf-10'}>Admin</label>
            <Checkbox
              label="Admin"
              name='isAdmin'
              id='isAdmin'
              checked={formik.values.isAdmin}
              onChange={formik.handleChange}
            />
          </div>
        </div>
      </>
    )
  }

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => closeDialog()}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <>
        <Grid container style={{padding:'20px'}}>
          {/* {actionsLoading && (
                <div className="overlay-layer bg-transparent">
                  <div className="spinner spinner-lg spinner-success" />
                </div>
              )} */}
          <form onSubmit={formik.handleSubmit}>
            {editForm()}
          </form>
        </Grid>
        <Modal.Footer>
          { error &&
            <Alert icon={false} severity="error">This is an error alert — check it out!</Alert>
          }
          <button
            type="button"
            onClick={() => closeDialog()}
            className="btn btn-light btn-elevate"
            disabled={loading ? true : false}
          >
            Cancelar
          </button>
          <> </>
          <button
            type="submit"
            onClick={formik.handleSubmit}
            className="btn btn-primary btn-elevate"
            disabled={loading ? true : false}
          >
            Guardar
          </button>
        </Modal.Footer>
      </>
    </Modal>
  );
}
