import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categoriesActions } from "../_actions";
import { useParams } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import ReactPlayer from "react-player/lazy";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
const API = process.env.REACT_APP_API_PATH;

function CardPage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fillActive, setFillActive] = useState("tab1");
  const [play, setPlay] = React.useState(false);

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

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <div className="row">
            {data.meals &&
              data.meals.map((data) => (
                <>
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
                  <div class="col-md-6">
                    <h5>
                      <b>{data.strMeal}</b>
                    </h5>

                    <p class="pt-1 truncate">{data.strInstructions}</p>

                    <button
                      type="button"
                      class="btn btn-primary btn-md mr-1 mb-2 waves-effect waves-light"
                    >
                      Order Now
                    </button>
                  </div>
                </>
              ))}
          </div>
          {data.meals &&
            data.meals.map((data) => (
              <>
                <MDBTabs fill className="mb-5">
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleFillClick("tab1")}
                      active={fillActive === "tab1"}
                    >
                      Description
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleFillClick("tab2")}
                      active={fillActive === "tab2"}
                    >
                      Information
                    </MDBTabsLink>
                  </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent className="mb-5">
                  <MDBTabsPane show={fillActive === "tab1"}>
                    {data.strInstructions}
                  </MDBTabsPane>
                  <MDBTabsPane show={fillActive === "tab2"}>
                    <b>{data.strMeal}</b>
                    <ReactPlayer url={data.strYoutube} />
                  </MDBTabsPane>
                </MDBTabsContent>
              </>
            ))}
        </>
      )}
    </>
  );
}

export { CardPage };
