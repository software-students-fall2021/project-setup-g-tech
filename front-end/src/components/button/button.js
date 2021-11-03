
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
</style>


const ButtonUI = styled(Button)((props) => ({
    color: '#000',
    padding: '6px 16px',
    minWidth: props.width,
    textTransform: 'none',
    fontFamily: 'Josefin Sans',
    fontWeight: 700,
    fontSize: 18,
    borderColor: '#000000',
    backgroundColor: '#21a376',
    borderRadius: props.radius,
    margin:'5px',
    boxShadow: '0px 4px 8px 0 rgba(0,0,0,0.2)',
    fontSize: '20px',

    '&:hover': {
        backgroundColor: '#89dc9f',
    },
  }));


 
export default ButtonUI;