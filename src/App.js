import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar/navbar";
import Form from "./components/Form/form";
import List from "./components/List/list";
import { StateProvider } from "./context/state.context"

function App() {

  const { state } = useContext(StateProvider);

  return (
    <div className="App">
      <Navbar />
      <div className="wrapper">
        <Form />
        <hr />
        <div className="card-wrapper">
          {
            state.length === 0 ? <h1 >Your contact will apper here!</h1> : state.map(rec => {
              return <List rec={rec} key={rec.id} />
            })
          }
        </div>
      </div>
    </div >
  );
}

export default App;
