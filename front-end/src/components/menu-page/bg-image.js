import './bg-img.css'


const ImageCont = (props) => {
    return (   
        <div className = 'bg-img-container'>
            <img 
                src = {props.img}

            />  
        </div>  
                       
     );
}
 
export default ImageCont;