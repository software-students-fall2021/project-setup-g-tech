import './HeaderTab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const HeaderTab = (props) => {
    return (
        <div className='HeaderTab'>
            <section className="custom-row custom-justify-content-center">
                <p className='page-title custom-text-center'>{props.pageTitle}</p>
            </section>
            <div className="backIcon">
                <FontAwesomeIcon icon={faChevronLeft}  className='back-icon' />
            </div>
        </div>
    );
}

export default HeaderTab;