import React, { useState, useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HeaderTab from "../header-tab/HeaderTab";
import ItemsList from "../ItemsList/ItemsList";
import axios from "axios";
import url from 'url';
import "./SavedDistributors.css";

function SavedDistributors() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const params = new URLSearchParams(window.location.search);
  const user = params.get('id');
  const returnPath = url.format({
    pathname:"/usermenu",
    query: { id: user}
  })

  const fetchData = async () => {
     const res = await axios.get('http://localhost:3001/saveddistributors', {
        params: {
           id: user
        }
     });
     setData(res.data);
  }
  useEffect(fetchData, []);

  const dynamicSearch = () => {
    return data.filter((e) =>
      e.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className="savedListContainer">
      <HeaderTab pageTitle="Saved Distributors" returnPath={returnPath} />
      <hr />
      <div className="searchbar">
        <div className="mt-3">
          <InputGroup>
            <FormControl
              as="input"
              type="text"
              placeholder="Search"
              aria-label="Search"
              id="searchtext"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
          <ItemsList user={user} list={dynamicSearch()} />
        </div>
      </div>
    </div>
  );
}

export default SavedDistributors;
