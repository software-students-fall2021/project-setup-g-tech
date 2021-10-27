import Item from '../Item/Item'
import Pick from '../Pick/Pick'
import Avatar from '../Avatar/Avatar'
import { InputGroup, FormControl, Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './UserMenu.css'


const UserMenu = () => {
   let nums = []
   for (let i = 0; i < 15; i++) {
      nums.push(i + 1)
   }

   let picks = nums.slice(0, 6).map((n) => <Pick key={n} num={n} />)
   let items = nums.map((n) => <Item key={n} num={n} />)

   return (
      <div className='contianer'>
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
   );
}

export default UserMenu;
