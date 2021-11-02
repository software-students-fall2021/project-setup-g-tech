import { useState, useEffect } from 'react'
import { InputGroup, FormControl, Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Item from '../Item/Item'
import Pick from '../Pick/Pick'
import Avatar from '../Avatar/Avatar'
import './UserMenu.css'


const UserMenu = () => {
   const [data, setData] = useState([]);

   const fetchData = async () => {
      const response = await axios('http://localhost:3000/usermenu');
      setData(response.data)
   }
   useEffect(fetchData, [])

   let picks = data
      .map((pick) => (<Pick key={pick.id} details={pick} img="https://picsum.photos/200" />))
      .slice(0, 8)

   let items = data
      .map((item) => (<Item key={item.id} details={item} img="https://picsum.photos/200" />))


   return (
      <div>
         <div className='header'>
            <div className='searchbar'>
               <div className='mt-3'>
                  <InputGroup>
                     <FormControl
                        placeholder='Search'
                        aria-label='Search'
                        id='searchtext'
                     />
                     <InputGroup.Text id='searchicon'>
                        <FontAwesomeIcon icon={faSearch} />
                     </InputGroup.Text>
                  </InputGroup>
               </div>
            </div>
            <Avatar />
         </div>
         <div className='content'>
            <h4 className='picks-title mt-3'>Top Picks for You</h4>
            <div className='d-flex flex=row flex-nowrap overflow-auto'>
               {picks}
            </div>
            <div className='news-title mt-3'>
               <h4>Newsfeed</h4>  
                  <Dropdown>
                     <Dropdown.Toggle className='toggle' variant='secondary' align='end'>
                        Sort
                     </Dropdown.Toggle>
                     <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Most Recent</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Most Popular</Dropdown.Item>
                     </Dropdown.Menu>
                  </Dropdown>
            </div>
            {items}
         </div>
      </div>
   );
}

export default UserMenu;
