import { useState, useEffect } from "react";
import { InputGroup, FormControl, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ItemsList from "../ItemsList/ItemsList";
import PicksList from "../PicksList/PicksList";
import Avatar from "../Avatar/Avatar";
import "./UserMenu.css";

const UserMenu = () => {
  const jwtToken = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [saved, setSaved] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await axios.get("http://localhost:3001/usermenu", {
      headers: { Authorization: `JWT ${jwtToken}` },
    });
    setData(res.data);
  };
  useEffect(fetchData, []);

  const fetchSaved = async () => {
    const res = await axios.get("http://localhost:3001/saveddistributors", {
      headers: { Authorization: `JWT ${jwtToken}` },
    });
    const favorites = res.data.map(e => e.name)
    setSaved(favorites);
  };
  useEffect(fetchSaved, []);

  const dynamicSearch = () => {
    return data.filter((e) =>
      e.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div>
      <div className="header">
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
        <Avatar />
      </div>
      <div className="content">
        <h4 className="picks-title mt-3">Top Picks for You</h4>
        <PicksList list={data} />
        <div className="news-title mt-3">
          <h4>Newsfeed</h4>
          <Dropdown>
            <Dropdown.Toggle className="toggle" variant="secondary" align="end">
              Sort
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Most Recent</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Most Popular</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <ItemsList saved={saved} list={dynamicSearch()} />
      </div>
    </div>
  );
};

export default UserMenu;
