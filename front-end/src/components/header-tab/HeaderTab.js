import './HeaderTab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const HeaderTab = (props) => {
    return (
        <div className='HeaderTab'>
            <section className="row justify-content-center">
                <p className='page-title text-center'>{props.pageTitle}</p>
            </section>
            <FontAwesomeIcon icon={faChevronLeft} className='back-icon' />
        </div>
    );
}

export default HeaderTab;