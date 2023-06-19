import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import BooksAPI from "../data/api/Books";

import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import SpinnerComponent from "./Spinner";

import { BiArrowBack } from "react-icons/bi";

const BookItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [book, setBook] = useState(false);
  const [loading, setLoading] = useState(true);

  const booksApi = new BooksAPI();

  useEffect(() => {
    // If the id is not undefined, then request from api the book passing the id
    if (id !== undefined) {
      booksApi
      .getById(id)
      .then((result) => {
        setBook({
          autor: result.data.autor,
          titulo: result.data.titulo,
          descricao: result.data.descricao,
        });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        window.alert(error);
      });
    } else {
      setLoading(false);
      setBook({
        autor: "",
        titulo: "",
        descricao: "",
      });
    }
  }, [0]);

  // Insert or update all data to database
  function submitForm() {

    if (id !== undefined) {
      // If id is not undefined then update
      booksApi
        .update(id, book)
        .then((result) => {
          window.alert("Livro atualizado corretamente");
          navigate("/");
        })
        .catch((error) => window.alert(error.response.data.message));
    } else {
      // If id is undefined then insert
      booksApi
        .insert(book)
        .then((result) => {
          window.alert("Livro inserido com sucesso!", result.data);
          navigate("/");
        })
        .catch((error) => window.alert(error.response.data.message));
    }
  }

  // Handle delete information
  function handleDelete(id) {
    const result = window.confirm('Tem certeza que deseja deletar este item?')
    if (result){
      booksApi.deactivate(id).then(result => {
        window.alert(result.data.message)
        navigate('/')
      }).catch(error => window.alert(error.response.data.message))
    }
  }

  // Handle change input fields
  function handleChange(event) {
    const { name, value } = event.target;
    setBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  if (loading) return <div className='container text-center'><SpinnerComponent></SpinnerComponent></div>

  // If id is undefined then add new book
  if (id === undefined) {
    return (
      <div className="container shadow mt-5 rounded-2 bg-light">
        <h5 className="text-center fw-bold">
          <BiArrowBack
            style={{ height: 30, width: 30, cursor: "pointer" }}
            onClick={() => navigate("/")}
          ></BiArrowBack>{" "}
          Adicione um novo livro{" "}
        </h5>
        <div className="mx-2">
          <Form>
            <Form.Group className="mb-3" controlId="titulo">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                name="titulo"
                type="text"
                placeholder="Titulo do livro"
                onChange={handleChange}
                value={book.titulo}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="autor">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                name="autor"
                type="text"
                placeholder="Autor do livro"
                onChange={handleChange}
                value={book.autor}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="autor">
              <Form.Label>Descricao</Form.Label>
              <Form.Control
                name="descricao"
                type="text"
                placeholder="Descricao"
                onChange={handleChange}
                value={book.descricao}
              />
            </Form.Group>
          </Form>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Button
            onClick={() => submitForm()}
            className="mb-3 mx-1"
            variant="primary"
          >
            Save
          </Button>
        </div>
      </div>
    );
  }

  // If is not loading and id is NOT undefined then update book
  return (
    <div className="container shadow mt-5 rounded-2 bg-light">
      <h5 className="text-center fw-bold">
        <BiArrowBack
          style={{ height: 30, width: 30, cursor: "pointer" }}
          onClick={() => navigate("/")}
        ></BiArrowBack>{" "}
        Detalhes para o livro atual: {id}{" "}
      </h5>
      <div className="mx-2">
        <Form>
          <Form.Group className="mb-3" controlId="titulo">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              name="titulo"
              type="text"
              placeholder="Titulo do livro"
              onChange={handleChange}
              value={book.titulo}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="autor">
            <Form.Label>Autor</Form.Label>
            <Form.Control
              name="autor"
              type="text"
              placeholder="Autor do livro"
              onChange={handleChange}
              value={book.autor}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="autor">
            <Form.Label>Descricao</Form.Label>
            <Form.Control
              name="descricao"
              type="text"
              placeholder="Descricao"
              onChange={handleChange}
              value={book.descricao}
            />
          </Form.Group>
        </Form>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Button
          className="mb-3 mx-1"
          variant="primary"
          onClick={() => submitForm()}
        >
          Save
        </Button>
        <Button className="mb-3 mx-1" variant="danger" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default BookItem;
