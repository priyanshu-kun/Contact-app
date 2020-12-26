import React, { useContext } from 'react';
import './list.css';
import { StateProvider } from '../../context/state.context';

function List(props) {
  const { name, number, email, address, id } = props.rec;
  const { deleteContact, updateContact } = useContext(StateProvider);

  const handleDelButton = () => {
    deleteContact(id);
  };

  const handleEditButton = () => {
    updateContact({ name, number, email, address, id });
    // props.editContactFunc({ name, number, email, address, id });
  };

  return (
    <section>
      <div className="inner-wrapper">
        <div className="data-field">
          <div>
            <h1>{name}</h1>
            <p>{number}</p>
          </div>

          <div>
            <p>{email}</p>
            <p>{address}</p>
          </div>
        </div>
        <div>
          <button onClick={handleDelButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-trash-2"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
          <button onClick={handleEditButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(0, 255, 0)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-edit-3"
            >
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default List;
