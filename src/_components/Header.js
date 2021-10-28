import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";

const onChange = (e) => {
  console.log(e.target.value, "fff");
};

function Header() {
  return (
    <>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">
            <img
              src="https://www.themealdb.com/images/logo-small.png"
              height="30"
              alt=""
              loading="lazy"
            />
            <div className="mx-auto">
              <form className="input-group d-flex">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={onChange}
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
