import React, { useState, useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HeaderTab from "../header-tab/HeaderTab";
import axios from "axios";
import OrderHistoryList from "../OrderHistoryList/OrderHistoryList";

function OrderHistoryPage() {
  const jwtToken = localStorage.getItem("token");
  if (!jwtToken) {
    window.location.replace("/");
  }

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL}/orderhistorypage`, {
      headers: { Authorization: `JWT ${jwtToken}` },
    });
    setData(res.data);
  };
  useEffect(fetchData, []);

  const dynamicSearch = () => {
    return data.filter((e) =>
      e.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className="orderHistoryContainer" style={{display: 'flow-root'}}>
      <HeaderTab pageTitle="Past Orders" returnPath={"/usermenu"} />
      <div style={{ marginTop: '16%' }}>
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
                style={{borderRadius: "20px", marginLeft: "7%", marginRight: "7%"}}

              />
              {/* <InputGroup.Text id="searchicon">
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text> */}
                <FontAwesomeIcon icon={faSearch} className="search--icon" style={{color: "#6c757d" }}/>
            </InputGroup>
          </div>
          <div className="pastOrderList">
            <div className="orders">
              <OrderHistoryList list={dynamicSearch()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryPage;
