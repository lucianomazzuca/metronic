import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
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

function UserEditForm({
  saveUser,
  user,
  actionsLoading,
  setShowEditDialog,
}) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={user}
        validationSchema={UserEditSchema}
        onSubmit={(values) => {
          saveUser(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Modal.Body className="overlay overlay-block cursor-default">
              {actionsLoading && (
                <div className="overlay-layer bg-transparent">
                  <div className="spinner spinner-lg spinner-success" />
                </div>
              )}
              <Form className="form form-label-right">
                <div className="form-group row">
                  {/* Nombre */}
                  <div className="col-lg-4">
                    <Field
                      name="name"
                      component={Input}
                      placeholder="Nombre"
                      label="Nombre"
                    />
                  </div>
                  {/* Administrador */}
                  <div className="col-lg-4">
                    <Select name="isAdmin" label="Admin">
                      <option value="true">Si</option>
                      <option value="false">No</option>
                    </Select>
                  </div>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                onClick={() => setShowEditDialog(false)}
                className="btn btn-light btn-elevate"
              >
                Cancelar
              </button>
              <> </>
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="btn btn-primary btn-elevate"
              >
                Guardar
              </button>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </>
  );
}


export function UserEditDialog({ id, show, onHide, setShowEditDialog }) {

  // server request for saving user
  const saveUser = (user) => {
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => setShowEditDialog(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <UserEditForm setShowEditDialog={setShowEditDialog} />
      {/* <UserEditDialogHeader id={id} />
      <UserEditForm
        saveUser={saveUser}
        // actionsLoading={actionsLoading}
        // user={userForEdit || usersUIProps.initUser}
        onHide={onHide}
      /> */}
    </Modal>
  );
}
