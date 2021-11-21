import HeaderTab from '../header-tab/HeaderTab';
import Input from '../input-field/Input';
import './BusinessMenu.css';

const BusinessMenu = (props) => {
    return (
        <div className="Register">
             <HeaderTab pageTitle="Submit a menu item" returnPath = "/business"/>
             <div className="fields">
                <form action="http://localhost:3001/register-submit" method="POST">

                    <div className="form-group form">
                        <label className='title form-label'>Category</label>
                        <div>
                            <select className="form-select dropdown-toggle CategorySelection dropdown-toggle dropdown-toggle-split" name="category" id="cars">
                                <option value="volvo">Appetizers</option>
                                <option value="saab">Pizzas</option>
                                <option value="mercedes">Pastas</option>
                                <option value="audi">Fries</option>
                                <option value="audi">Sides</option>
                                <option value="audi">Drinks</option>
                                <option value="audi">Sauces</option>
                            </select>
                        </div>
                    </div>

                    <Input title="Item Name" name="item_name" type='text' placeholder='Buffalo Chicken Burger'/>

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