import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categoriesActions } from "../_actions";
import { useParams } from "react-router-dom";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
const API = process.env.REACT_APP_API_PATH;

function CardPage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${API}/json/v1/1/lookup.php?i=${id}`;

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

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <div className="row">
            {data.meals &&
              data.meals.map((data) => (
                <div className="col-md-6 col-xl-4  mb-5">
                  <MDBCard className="mb-5">
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

export { CardPage };
