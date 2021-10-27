
import './scroll-bar.css';

const HorizontalMenu = (props) => {
    const items = props.items;
    const menuItems = items.map((item) =>
        <a  className='menuItem' href="#blank">{item}</a>
    );
    return ( 
        <div  className='scrollmenu'>
            <ul className='menuItem02'>{menuItems}</ul>
        </div>


        
     );
}
 
export default HorizontalMenu
;