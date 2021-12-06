import HeaderTab from '../header-tab/HeaderTab';
import Input from '../input-field/Input';
import './BusinessMenu.css';
import url from "url";
import axios from "axios"
import React, { useState, useEffect } from "react"

const BusinessMenu = (props) => {
    const jwtToken = localStorage.getItem('token')
    const posturl = url.format({
        pathname: `${process.env.REACT_APP_URL}/menu-submit`,
        headers: { Authorization: `JWT ${jwtToken}` }
    })
    const _id = localStorage.getItem('rest_id')
 

    return (
        <div className="Register">
            {/* {console.log("token id",id)} */}
             <HeaderTab pageTitle="Submit a menu item" returnPath = "/business"/>
             <div className="fields">
                <form action={posturl} method="POST">
                    <div className="form-group form">
                        <label className='title form-label'>Category</label>
                        <div>
                            <select className="form-select dropdown-toggle CategorySelection dropdown-toggle dropdown-toggle-split" name="category" id="cars">
                                <option value="Appetizers">Appetizers</option>
                                <option value="Pizzas">Pizzas</option>
                                <option value="Pastas">Pastas</option>
                                <option value="Fries">Fries</option>
                                <option value="Sides">Sides</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Sauces">Sauces</option>
                            </select>
                        </div>
                    </div>

                    <Input title="Item Name" name="item_name" type='text' placeholder='Buffalo Chicken Burger'/>
                    <Input  name="id" type="hidden" value={_id}/>

                    <Input title="Price" name="price" type='text' placeholder='10'/>
                    <Input title="Quantity" name="quantity" type='text' placeholder='3'/>

                    <div className="form-group form">
                        <label className='title form-label'>Description</label>
                        <div>
                        <textarea className="form-control" name='description' type='text-area' placeholder='Hand-breaded crispy chicken with spicy Buffalo sauce, tomato, lettuce, house-made ranch on a brioche bun' value={props.value}/>
                        </div>
                    </div>

                    <div className='button'>
                        <Input className="submitButton" type="submit" value="SUBMIT ITEM"></Input>
                    </div>
                </form>
             </div>
        </div>
    );
}
// Business first chooses the category:
// Categories are: Appetizers, Pizzas, Pastas, Fries, Sides, Drinks, Sauces
// Name: Item Name
// Price
// Quantity
// Description
// Image (not implemented right now)

export default BusinessMenu;