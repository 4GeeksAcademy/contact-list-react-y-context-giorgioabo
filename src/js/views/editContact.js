import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const EditContact = () => {

    const navigate = useNavigate();
    
    const { store, actions} = useContext(Context);
    const [contact, setContact] = useState(store.contact);

    const handleChange = (event) => {
        setContact({...contact, [event.target.name] : event.target.value})

    };


    const handleOnClick = () => {
        actions.editContact(contact, navigate);
    
    };


    return (
        <div className="container mt-4">
      <div className="contact-form align-items-center mb-3 p-5 rounded border border-dark">
        <div className="row d-flex mb-3">
          <div className="col-6">
            <h1>Editar contacto</h1>
          </div>
          <div className="col-6 text-end">
            <button className="btn btn-primary m-3" onClick={handleOnClick}>
              Guardar contacto
            </button>
          </div>
        </div>
        <form className="col-12">
          <div className="form-group m-3">
            <label htmlFor="fullName" className="me-2">
              Nombre completo:
            </label>
            <input
              className="form-control"
              id="fullName"
              type="text"
              name="name"
              placeholder="Giorgio Behna"
              onChange={(e) => {handleChange(e)}}
              value={contact.name}
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              id="email"
              type="email"
              name="email"
              placeholder="correoelectronico@direccion.com"
              onChange={(e) => {handleChange(e)}}
              value={contact.email}
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="phone">Teléfono movil:</label>
            <input
              className="form-control"
              id="phone"
              type="text"
              name="phone"
              placeholder="+34 000 00 00 00"
              onChange={(e) => {handleChange(e)}}
              value={contact.phone}
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="address">Dirección:</label>
            <input
              className="form-control"
              id="address"
              type="text"
              name="address"
              placeholder="Dirección"
              onChange={(e) => {handleChange(e)}}
              value={contact.address}
            />
          </div>
        </form>
      </div>
      <Link to="/">Volver a contactos.</Link>
    </div>
    )
}