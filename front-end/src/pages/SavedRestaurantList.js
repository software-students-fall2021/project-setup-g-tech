import React, { useState, useEffect } from "react";
import Restaurants from "../components/Restaurants";
import axios from "axios";
import "./SavedRestaurantList.css";

function SavedRestaurantList() {
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
      <div className="listHeading">
        {/* To go back to the Main Page 
                <a href={}> ARROW </a> 
                ?? how to go back */}
        <p className="backToMainPage">&lt;</p>
        <h1 className="pageTitle"> Saved Distributors </h1>
      </div>
      <hr />
      <div className="listContent">
        <section className="restaurants">
          {data
            .sort((a, b) => a.restaurant_name.localeCompare(b.restaurant_name))
            .map((item) => (
              <Restaurants
                key={item.id}
                img="https://picsum.photos/200"
                details={item}
              />
            ))}
        </section>
      </div>
    </div>
  );
}

export default SavedRestaurantList;
