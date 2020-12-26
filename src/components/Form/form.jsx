import React, { useContext, useState, useEffect } from 'react';
import './form.css';
import { StateProvider } from '../../context/state.context';
import { v4 as uuidv4 } from 'uuid';

const initialState = { number: '', name: '', email: '', address: '' };

function Form() {
  const { addContact, edit, updateContactFinal, setEdit } = useContext(
    StateProvider
  );
  const [inputValue, setInputValue] = useState(initialState);

  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (edit) {
      setInputValue({ ...edit });
    }
  }, [edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      updateContactFinal(inputValue);
      setEdit(undefined);
    } else {
      const newContactObj = { ...inputValue, id: uuidv4() };
      addContact(newContactObj);
    }
    setInputValue(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="number">
        <span>Number</span>
        <input
          type="number"
          name="number"
          id="number"
          placeholder="Enter your number"
          onChange={handleInput}
          value={inputValue.number}
        />
      </label>
      <label htmlFor="name">
        <span>Name</span>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          onChange={handleInput}
          value={inputValue.name}
        />
      </label>
      <label htmlFor="email">
        <span>Email</span>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          onChange={handleInput}
          value={inputValue.email}
        />
      </label>
      <label htmlFor="address">
        <span>Address</span>
        <textarea
          id="address"
          cols="30"
          rows="10"
          name="address"
          placeholder="Your Address"
          onChange={handleInput}
          value={inputValue.address}
        ></textarea>
      </label>
      <button>{edit ? 'Edit' : 'Submit'}</button>
    </form>
  );
}

export default Form;
