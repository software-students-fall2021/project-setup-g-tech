import './HeaderTab.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const HeaderTab = (props) => {
    return (
        <div className='HeaderTab'>
            <section className="custom-row custom-justify-content-center">
                <b><p className='page-title custom-text-center'>{props.pageTitle}</p></b>
            </section>
            <div className="backIcon">
            <Link to={props.returnPath}>
                <FontAwesomeIcon icon={faChevronLeft}  className='back-icon' />
            </Link>
            </div>
        </div>
    );
}

export default HeaderTab;