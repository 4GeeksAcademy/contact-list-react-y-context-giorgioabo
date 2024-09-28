import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";

const Contacts = () => {
    const { store, actions } = useContext(Context);

    

    return (
        <div className="container agenda-container mt-4">
            <div className="row agenda-header align-items-center mb-3 p-3 rounded">
                <div className="col-6">
                  <h2 className="agenda-title">Mis contactos</h2>
                </div>
                <div className="col-6 text-end">
                  <NavLink className="btn btn-success" to="/add">Añadir nuevo contacto</NavLink>
                </div>
            </div>
            <div className="agenda-body row">
                {store.contacts.map((contact, index) => {
                    return (                      
                        <div className="col-12" key={index}>
                          <ContactCard contact={contact} />
                        </div>
                    )
                })}
            </div>            
        </div>
    )    
};

export default Contacts;