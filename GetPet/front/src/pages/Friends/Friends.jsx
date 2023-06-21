import "./Friends.css";
import React, { useState, useEffect } from "react";
import Lottie from "react-lottie-player";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import lottieJson from "../../assets/lotties/122589-dog-and-man-cute-animation";
import { VscSearch } from "react-icons/vsc";
import { FaForward } from "react-icons/fa";

import PetsAPI from "../../data/api/Pets";

import PetCard from "./Card/Card";
import SpinnerComponent from "../../components/Spinner";
import NavbarComponent from "../../components/Navbar/Navbar";

const Friends = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [serverPets, setServerPets] = useState(null);
  const [displayablePets, setDisplayablePets] = useState(null);
  const [petBreeds, setPetBreeds] = useState(null);
  const [petSizes, setPetSizes] = useState(null);

  const [filters, setFilters] = useState({
    breed: "Select a option",
    size: "Select a option",
    age: null,
  });

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  function FilterComponent() {
    let dataFiltered;
    let filtered = false;

    if (filters.breed != "Select a option") {
      dataFiltered = serverPets.filter((pet) => {
        return pet.breed == filters.breed;
      });
      filtered = true;
    }

    if (filters.size != "Select a option") {
      if (filtered) {
        dataFiltered = dataFiltered.filter((pet) => {
          return pet.size_id == filters.size;
        });
      }
    }
    
    if (dataFiltered === undefined){
      dataFiltered = serverPets
    }

    setDisplayablePets(dataFiltered);
  }

  useEffect(() => window.addEventListener("resize", handleResize));

  useEffect(() => {
    const pets = new PetsAPI();

    pets
      .get()
      .then((result) => {
        setDisplayablePets(result.data);
        setServerPets(result.data);
        if (window.innerWidth < 720) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    pets
      .getBreeds()
      .then((result) => setPetBreeds(result.data))
      .catch((error) => console.error(error));

    pets
      .getSizes()
      .then((result) => setPetSizes(result.data))
      .catch((error) => console.error(error));
  }, []);

  const arrayChunk = (arr, n) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };

  return (
    <NavbarComponent>
      <div className="mt-5">
        <div>
          <section className="container fluid mb-5" style={{ height: "100%" }}>
            <div className="row">
              <div className="col mt-5">
                <h1 className="fw-bold" style={{ fontSize: 90 }}>
                  Find your little{" "}
                  <strong style={{ color: "red" }}>friend!</strong>
                </h1>
                <h6 className="fw-light mt-3" style={{ fontSize: 20 }}>
                  Choose your filters, navigate through all your little friends,
                  and choose your new family member.
                </h6>
                <div className="d-flex mt-3">
                  <Button
                    className="rounded fw-bold align-items-center text-center shadow"
                    style={{
                      backgroundColor: "salmon",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Know more! <FaForward className="mx-1 mb-1"></FaForward>
                  </Button>
                  <Button className="rounded mx-2 shadow" variant="dark">
                    Donate
                  </Button>
                </div>
              </div>
              <div
                className="col shadow mt-5 mx-3 showlarge"
                style={{ borderRadius: "80%", backgroundColor: "salmon" }}
              >
                <Lottie
                  loop
                  play
                  animationData={lottieJson}
                  style={{
                    minWidth: 200,
                    minHeight: 200,
                    maxHeight: 425,
                    maxWidth: 450,
                    marginLeft: 80,
                  }}
                ></Lottie>
              </div>
            </div>
          </section>

          <section className="mt-5">
            <div className="container" style={{ marginTop: 80 }}>
              <div style={{ marginTop: 80 }}>
                <form>
                  <div className="row">
                    <h4 className="fw-bold">Select filters:</h4>
                  </div>
                  <hr className="mb-4" />
                  <div className="row">
                    <div className="col-sm-4 topMargin">
                      {petBreeds === null ? (
                        <SpinnerComponent></SpinnerComponent>
                      ) : (
                        <>
                          <label htmlFor="breed">Breed: </label>
                          <select
                            className="form-select mt-2"
                            name="breed"
                            value={filters.breed}
                            onChange={(e) =>
                              setFilters((prev) => ({
                                ...prev,
                                breed: e.target.value,
                              }))
                            }
                          >
                            <option value="Select a option">
                              Select a option
                            </option>
                            {petBreeds.map((breed) => {
                              return <option value={breed}>{breed}</option>;
                            })}
                          </select>
                        </>
                      )}
                    </div>
                    <div className="col-sm-4 topMargin">
                      {petSizes === null ? (
                        <SpinnerComponent></SpinnerComponent>
                      ) : (
                        <>
                          <label htmlFor="size">Size: </label>
                          <select
                            className="form-select mt-2"
                            name="size"
                            value={filters.size}
                            onChange={(e) =>
                              setFilters((prev) => ({
                                ...prev,
                                size: e.target.value,
                              }))
                            }
                          >
                            <option value="Select a option">
                              Select a option
                            </option>
                            {petSizes.map((sizes) => {
                              return (
                                <option value={sizes.size_id}>
                                  {sizes.size_name}
                                </option>
                              );
                            })}
                          </select>
                        </>
                      )}
                    </div>
                    <div className="col topMargin">
                      <Form.Label>
                        Age : {filters.age != 0 ? filters.age : null}
                      </Form.Label>
                      <Form.Range
                        value={filters.age}
                        onChange={(e) =>
                          setFilters((prev) => ({
                            ...prev,
                            age: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="row mt-3">
                      <div className="col-lg-12">
                        <Button
                          variant="dark"
                          className="shadow-sm rounded"
                          onClick={() => FilterComponent()}
                        >
                          Find Friend{" "}
                          <VscSearch style={{ fontWeight: "bold" }}></VscSearch>
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
                <hr className="mb-4 mt-5" />
              </div>

              <div className="mt-5">
                {displayablePets == null ? (
                  <SpinnerComponent></SpinnerComponent>
                ) : (
                  arrayChunk(displayablePets, isMobile ? 1 : 3).map(
                    (chunk, i) => {
                      {
                        return (
                          <div className="row" key={i}>
                            {chunk.map((pet, index) => {
                              return (
                                <PetCard
                                  id={pet.id}
                                  title={pet.name}
                                  text={pet.surname}
                                  age={pet.age}
                                  i={index}
                                ></PetCard>
                              );
                            })}
                          </div>
                        );
                      }
                    }
                  )
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </NavbarComponent>
  );
};

export default Friends;
