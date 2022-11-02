import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import "./ContactForm.css"

const defaultForm = { name: '', email: '', message: '' };

const ContactForm = () => {
  const [form, setForm] = useState(defaultForm);
  const [id, setId] = useState();

  const changeHandler = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    const db = getFirestore();
    const contactFormCollection = collection(db, 'contactform');
    addDoc(contactFormCollection, form).then((snapshot) => {
      setId(snapshot.id);
    });
  };

  const resetHandler = () => {
    setForm(defaultForm);
    setId('');
  };

  return (
    <div>
        
      {id ? (
        <div>
          <h5>Gracias por Registrarte, te llegara un e mail de confirmacion</h5>
          
          <button className="btn btn-outline-dark" onClick={resetHandler}>Enviar otro mensaje</button>
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              name="name"
              id="name"
              value={form.name}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="message">Agregar Comentario</label>
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={changeHandler}
            ></textarea>
          </div>
          <button className="btn btn-outline-dark">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
