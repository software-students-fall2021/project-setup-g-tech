import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import './input.css';

const Input = (props) => {
    return (
        <>
        {/* <Form className="Input">
            <Form.Group className="form">
                <Form.Label className='title'>{props.title}</Form.Label>
                <Form.Control name={props.name} type={props.type} placeholder={props.placeholder} />
            </Form.Group>
        </Form> */}
        {/* <form className="Input"> */}
        <div className="form-group form">
            <label className='title form-label'>{props.title}</label>
            <div>
            <input className="form-control" name={props.name} type={props.type} placeholder={props.placeholder} value={props.value}/>
            </div>
        </div>
        {/* </form> */}
       </>
    );
}

export default Input;