
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';



const ButtonUI = styled(Button)((props) => ({
    color: '#ffffff',
    padding: '6px 16px',
    minWidth: props.width,
    textTransform: 'none',
    borderColor: '#000000',
    backgroundColor: '#9cc9a8',
    borderRadius: props.radius,
    margin:'5px',
    boxShadow: '0px 4px 8px 0 rgba(0,0,0,0.2)',
    
    '&:hover': {
        backgroundColor: '#89dc9f',
    },
  }));


 
export default ButtonUI;