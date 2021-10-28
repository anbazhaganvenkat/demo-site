import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categoriesActions } from "../_actions";
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
import GifLoader from "react-gif-loader";
import { history } from "../_helpers";

function HomePage() {
  const categories = useSelector((state) => state.categories.items);
  const loading = useSelector((state) => state.categories.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesActions.getAll());
  }, []);

  const redirect = (cat) => {
    history.push(`/category/${cat}`);
  };
  return (
    <div className="row">
      {categories?.categories.map((data) => (
        <div
          className="col-md-6 col-xl-4  mb-5"
          onClick={(e) => redirect(data.strCategory)}
        >
          <MDBCard className="box-shadow mb-5">
            <>
              <MDBCardImage
                src={data.strCategoryThumb}
                position="top"
                alt={data.strCategory}
              />
              <MDBCardBody>
                <MDBCardTitle>
                  <b>{data.strCategory}</b>
                </MDBCardTitle>
                <MDBCardText className="truncate">
                  {data.strCategoryDescription}
                </MDBCardText>
              </MDBCardBody>
            </>
          </MDBCard>
        </div>
      ))}
    </div>
  );
}

export { HomePage };
