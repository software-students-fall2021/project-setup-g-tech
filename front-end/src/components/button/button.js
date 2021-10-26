
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
// import "./button.css";



const ButtonUI = styled(Button)(() => ({
    color: '#000000',
    fontWeight: 'bold',
    textTransform: 'none',
    borderColor: '#000000',
    backgroundColor: '#89dc9f',
   
    '&:hover': {
        backgroundColor: '#89dc9f',
    },
  }));


 
export default ButtonUI;