import React, { useState, useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HeaderTab from "../header-tab/HeaderTab";
import axios from "axios";
import "./OrderHistoryPage.css";
import OrderHistoryList from "../OrderHistoryList/OrderHistoryList";

function OrderHistoryPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await axios.get("http://localhost:3001/orderhistorypage", {
      params: {
        user: "mockData",
      },
    });
    setData(res.data);
  };
  useEffect(fetchData, []);

  {
    /*
  const dynamicSearch = () => {
    return data.filter((e) =>
      e.name.toLowerCase().includes(search.toLowerCase())
    );
  };
*/
  }
  return (
    <div className="orderHistoryContainer">
      <HeaderTab pageTitle="Past Orders" returnPath="/usermenu" />
      {/*
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
      */}
      <div className="pastOrderList">
        <div className="orders">
          <OrderHistoryList list={data} />
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryPage;
