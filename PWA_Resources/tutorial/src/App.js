import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Students } from "./components/Students";

function App() {
  return (
    <>
      <Header />
      <hr />
      <Form />
      <hr />
      <Students />
    </>
  );
}

export default App;
