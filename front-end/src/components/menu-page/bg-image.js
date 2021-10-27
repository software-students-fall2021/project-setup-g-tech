
const ImageCont = (props) => {
    return (   
        <div className = 'bg-img-container'>
            <img 
                src = {props.img}
                height = '100px'

            />  
        </div>  
                       
     );
}
 
export default ImageCont;