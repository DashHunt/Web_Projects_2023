import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BooksAPI from "../data/api/Books";

import Table from "react-bootstrap/Table";

import SpinnerComponent from "./Spinner";

import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const BookList = () => {
  const navigate = useNavigate();
  
  const [books, setBooks] = useState(false);
  const [loading, setLoading] = useState(false);

  const booksApi = new BooksAPI();

  // Get all books from database
  useEffect(() => {
    booksApi
      .get()
      .then((result) => {
        setBooks(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  });

  // Handle delete option in table
  function handleDelete(id) {
    const result = window.confirm('Tem certeza que deseja deletar este item?')
    if (result){
      booksApi.deactivate(id).then(result => {
        window.alert(result.data.message)
        window.location.reload()
      })
    }
  }

  // Handle view option in table
  function handleView(id) {
    navigate(`/book/${id}`);
  }

  // Handle edit option in table
  function handleEdit(id) {
    navigate(`/book/${id}`);
  }

  // If is loading return a Spinner component
  if (loading) return <div className='container text-center'><SpinnerComponent></SpinnerComponent></div>
  
  // If is not loading and no books were found return a div containing a message
  if (!books) {
    return <div className='mt-2 mb-2'>Nenhum livro disponivel</div>;
  }
  
  // If any book returns from API display a table
  if (books) {
    return (
      <div className="mt-3">
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Autor</th>
              <th>Titulo</th>
              <th>Visualizar</th>
              <th>Editar</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => {
              return (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.autor}</td>
                  <td>{book.titulo}</td>
                  <td onClick={() => handleView(book.id)}>
                    {
                      <AiOutlineEye
                        style={{
                          cursor: "pointer",
                          color: "blue",
                          height: 20,
                          width: 20,
                        }}
                        className="mx-1"
                      ></AiOutlineEye>
                    }
                  </td>
                  <td onClick={() => handleEdit(book.id)}>
                    {
                      <AiOutlineEdit
                        style={{
                          cursor: "pointer",
                          color: "green",
                          height: 20,
                          width: 20,
                        }}
                        className="mx-1"
                      ></AiOutlineEdit>
                    }
                  </td>
                  <td onClick={() => handleDelete(book.id)}>
                    {
                      <AiOutlineDelete
                        style={{
                          cursor: "pointer",
                          color: "red",
                          height: 20,
                          width: 20,
                        }}
                        className="mx-1"
                      ></AiOutlineDelete>
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
};

export default BookList;
