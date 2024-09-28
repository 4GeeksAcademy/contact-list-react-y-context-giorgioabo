import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const { store, actions } = useContext(Context);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleOnClick = () => {
    actions.addContact(name, email, phone, address, navigate);

  };

  return (
    <div className="container mt-4">
      <div className="contact-form align-items-center mb-3 p-5 rounded border border-dark">
        <div className="row d-flex mb-3">
          <div className="col-6">
            <h1>Añadir contacto</h1>
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
              placeholder="Giorgio Abdalla Behna Occhipinti"
              onChange={(e) => {setName(e.target.value)}}
              value={name}
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              id="email"
              type="email"
              placeholder="correoelectronico@direccion.com"
              onChange={(e) => {setEmail(e.target.value)}}
              value={email}
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="phone">Teléfono movil:</label>
            <input
              className="form-control"
              id="phone"
              type="text"
              placeholder="+34 000 00 00 00"
              onChange={(e) => {setPhone(e.target.value)}}
              value={phone}
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="address">Dirección:</label>
            <input
              className="form-control"
              id="address"
              type="text"
              placeholder="Dirección"
              onChange={(e) => {setAddress(e.target.value)}}
              value={address}
            />
          </div>
        </form>
      </div>
      <Link to="/">Volver a contactos.</Link>
    </div>
  );
};

export default AddContact;
