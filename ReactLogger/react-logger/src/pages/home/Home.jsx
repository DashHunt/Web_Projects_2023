import React from "react";

import handleError from "../../helpers/handlers/handleError";
import Users from "../../data/api/Users";

const Home = () => {
  const user = new Users();

  function error() {
    user.getUser().catch((error) => handleError(error));
  }

  return (
    <div>
      <h2>Home</h2>
      <button type="submit" onClick={() => error()}>
        Salvar
      </button>
    </div>
  );
};

export default Home;
