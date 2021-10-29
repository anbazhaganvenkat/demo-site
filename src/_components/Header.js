import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { history } from "../_helpers";

const redirect = () => {
  history.push("/");
};

function Header({ onChange }) {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light" className="fixed-top">
      <MDBContainer fluid>
        <img
          src="https://www.themealdb.com/images/logo-small.png"
          height="30"
          alt=""
          loading="lazy"
          className="cursor-pointor"
          onClick={redirect}
        />

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0"></MDBNavbarNav>

          <form className="d-flex input-group w-100">
            <input
              type="search"
              className="form-control"
              placeholder="Search By Food Eg: Beef"
              aria-label="Search"
              onChange={(e) => {
                onChange(e);
              }}
            />
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export { Header };
