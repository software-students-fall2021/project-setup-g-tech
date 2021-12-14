import './HeaderTab.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const HeaderTab = (props) => {
    const handleLogOut = () => {
         if (localStorage.getItem('rest_id')!= null && props.returnPath!='/menu'){
            localStorage.removeItem('rest_id')
         }
      }
    return (
        <div className='HeaderTab'>
            <section className="custom-row custom-justify-content-center">
                <b><p className='page-title custom-text-center'>{props.pageTitle}</p></b>
            </section>
            <div className="backIcon">
            <Link to={props.returnPath}>
                <FontAwesomeIcon icon={faChevronLeft}  className='back-icon'  onClick={handleLogOut}/>
            </Link>
            </div>
        </div>
    );
}

export default HeaderTab;