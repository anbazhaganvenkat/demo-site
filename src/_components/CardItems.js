import React, { useEffect, useState } from "react";

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

function CardItems({ value }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${API}/json/v1/1/search.php?s=${value}`;

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

export { CardItems };
