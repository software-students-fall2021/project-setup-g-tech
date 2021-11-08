import { Card } from 'react-bootstrap'
import './PartnerLogos.css'



const PartnerLogos = (props) => {

    function importAll(r) {
        let images = {};
      r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }
    
    const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

    console.log(images)

    return (
        <div className='container mt-3'>
            <Card className='card' style={{ width: '7em' }}>
                <Card.Img className='image rounded' variant="top" src={images[`partner_logo_${props.number}.png`].default} />
            </Card>
        </div>
    )
}

export default PartnerLogos