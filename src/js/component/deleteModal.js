import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const deleteModal = ({ show, setShow, contact, id }) => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className="modal"
      tabIndex="-1"
      style={show ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Borrar contacto</h5>
            <button
              type="button"
              onClick={() => {
                setShow(false);
              }}
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Está seguro de borrar a {contact}?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={() => {
                setShow(false);
              }}
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={() => {
                actions.deleteContact(id);
              }}
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Borrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
