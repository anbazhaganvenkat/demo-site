import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categoriesActions } from "../_actions";
import { useParams } from "react-router-dom";
import { history } from "../_helpers";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
const API = process.env.REACT_APP_API_PATH;

function DetailsPage() {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${API}/json/v1/1/filter.php?c=${name}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const redirect = (id) => {
    history.push(`/deatils/${id}`);
  };
  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <h1>{name}</h1>
          <div className="row">
            {data.meals &&
              data.meals.map((data) => (
                <div
                  className="col-md-6 col-xl-4  mb-5"
                  onClick={(e) => redirect(data.idMeal)}
                >
                  <MDBCard className="mb-5" alignment="center">
                    <>
                      <MDBCardImage
                        src={data.strMealThumb}
                        position="top"
                        alt={data.strMeal}
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          <b>{data.strMeal}</b>
                        </MDBCardTitle>
                        <MDBBtn className="btn btn-info">Get Recipe</MDBBtn>
                      </MDBCardBody>
                    </>
                  </MDBCard>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
}

export { DetailsPage };
