import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { history } from "../_helpers";

const redirect = () => {
  history.push("/");
};

function Header({ onChange }) {
  return (
    <>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <img
              src="https://www.themealdb.com/images/logo-small.png"
              height="30"
              alt=""
              loading="lazy"
              onClick={redirect()}
            />
            <div className="mx-auto">
              <form className="input-group d-flex">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              </form>
            </div>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export { Header };
