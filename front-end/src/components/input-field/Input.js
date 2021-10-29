import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import './input.css';

const Input = (props) => {
    return (
        <>
        <Form className="Input">
            <Form.Group className="form">
                <Form.Label className='title'>{props.title}</Form.Label>
                <Form.Control type={props.type} placeholder={props.placeholder} />
            </Form.Group>
        </Form>
       </>
    );
}

export default Input;