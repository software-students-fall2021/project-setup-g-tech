import Toast from 'react-bootstrap/Toast';
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';
import ToastContainer from 'react-bootstrap/ToastContainer';
import './CancelOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';


const CancelOrder = () => {
    return (
        <div>
            <ToastContainer position='middle-center' className='CancelOrder'>
                <Toast>
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">Cancelled Order</strong>
                    </Toast.Header>
                    <Toast.Body>
                        Your order has been cancelled. Please wait while you are redirected to the main page.
                        <br />
                        <br />
                        <FontAwesomeIcon icon={ faCircleNotch } spin size='5x' className='spinner'/>
                    </Toast.Body>
                </Toast>
            </ToastContainer>

        </div>
    );
}

export default CancelOrder;