import React from "react";
import {useNavigate} from 'react-router-dom'

import { Button } from "react-bootstrap";

import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="container text-center">
      <div className='mt-5'>
        <TbError404 style={{height: 300, width: 300, color: 'red'}}></TbError404>
        <h3>Pagina não encontrada, retorne ao menu principal:</h3>
        <Button className='mt-3' variant='warning' onClick={() => navigate('/')}>Retornar ao menu principal</Button>
      </div>
    </div>
  );
};

export default NotFound;
