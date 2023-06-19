import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";

import BookList from "./BookList";

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='text-center mt-5'>
        <h3 className="fw-bold">CRUD SIMPLES</h3>
      </div>
      <div className="container border shadow text-center mt-5 rounded-2 bg-light">
        <h5 className="fw-bold" style={{ marginTop: 20 }}>
          Lista de livros cadastrados{" "}
        </h5>
        <div className="d-flex justify-content-center align-items-center">
          <BookList />
        </div>
        <Button style={{ marginBottom: 20 }} onClick={() => navigate("/book")}>
          Adicione um novo livro
        </Button>
      </div>
    </>
  );
};

export default App;
