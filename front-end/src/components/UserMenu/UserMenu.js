import Item from '../Item/Item'
import { InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSort } from '@fortawesome/free-solid-svg-icons'
import userIcon from '../../images/user-icon.png'
import './UserMenu.css'


const UserMenu = () => {
   let nums = []
   for (let i = 0; i < 15; i++) {
      nums.push(i + 1)
   }

   let items = nums.map((n) => <Item key={n} num={n} />)

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
            <img 
               src={userIcon} 
               alt='User Icon' 
               className='user border rounded-circle mt-3' 
            />
         </div>
         <div className='news-title mt-5'>
            <h4>Newsfeed</h4>
            <div className='sort'>
               <h5 id='sorttitle'>Sort</h5>
               <FontAwesomeIcon id='sorticon' icon={faSort} />
            </div>
         </div>
         {items}
      </div>
   );
}

export default UserMenu;
