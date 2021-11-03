import React, { useState, useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HeaderTab from "../header-tab/HeaderTab";
import Restaurants from "../Restaurants/Restaurants";
import axios from "axios";
import "./SavedDistributors.css";

function SavedDistributors() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        "https://my.api.mockaroo.com/restaurants.json?key=0b54f900"
      );
      setData(response.data);
    }

    fetchData();
  }, []);

  return (
    <div className="savedListContainer">
      <HeaderTab pageTitle="Saved Distributors" returnPath="/usermenu" />
      <hr />
      <div className="searchbar">
        <div className="mt-3">
          <InputGroup>
            <FormControl
              placeholder="Search"
              aria-label="Search"
              id="searchtext"
            />
            <InputGroup.Text id="searchicon">
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>
      <hr />
      <div className="listContent">
        <div className="restaurants">
          {data
            .sort((a, b) => a.restaurant_name.localeCompare(b.restaurant_name))
            .map((item) => (
              <Restaurants
                key={item.id}
                img="https://picsum.photos/200"
                details={item}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SavedDistributors;
