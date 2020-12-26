import React, { createContext, useReducer, useState } from 'react'
const initalValues = JSON.parse(localStorage.getItem('setContact')) || [];

export const StateProvider = createContext(initalValues);
const reducerFunc = (state, action) => {

    const { type, payload } = action;
    let contactState = [];
    switch (type) {
        case "ADD_CONTACT":
            const checkNum = state.find(num => {
                return num.number === payload.number;
            })
            if (checkNum) {
                alert("Number is already exists!");
                return state;
            }
            contactState = [payload, ...state];
            localStorage.setItem("setContact", JSON.stringify(contactState))
            return contactState;
        case "DELETE_CONTACT":
            contactState = state.filter(doc => {
                return doc.id !== payload;
            })
            localStorage.setItem("setContact", JSON.stringify(contactState))
            return contactState;
        case "UPDATE_CONTACT":
            // console.log(payload)
            contactState = state.map(doc => {
                return doc.id === payload.id ? payload : doc;
            })
            localStorage.setItem("setContact", JSON.stringify(contactState))
            return contactState;
        default:
            console.log("OK default")
            break;
    }
}


export function ProviderValues({ children }) {
    const [state, dispatch] = useReducer(reducerFunc, initalValues);
    const [edit, setEdit] = useState(undefined);

    // console.log("main state: ", state)

    // define actions for reducer function

    const addContact = (obj) => {
        dispatch({ type: "ADD_CONTACT", payload: obj })
    }

    const deleteContact = (id) => {
        dispatch({ type: "DELETE_CONTACT", payload: id })
    }

    const updateContact = (obj) => {

        setEdit({ ...obj })
    }

    const updateContactFinal = (obj) => {
        dispatch({ type: "UPDATE_CONTACT", payload: obj })
    }


    return (
        <StateProvider.Provider value={{ addContact, deleteContact, updateContact, state, edit, setEdit, updateContactFinal }}>
            {children}
        </StateProvider.Provider>
    )
}

