import './HeaderTab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const HeaderTab = (props) => {
    return (
        <div className='HeaderTab'>
            <FontAwesomeIcon icon={faChevronLeft} />
            <h1>{props.pageTitle}</h1>
        </div>
    );
}

export default HeaderTab;