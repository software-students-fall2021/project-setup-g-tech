import './Partners.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PartnerLogos from '../PartnerLogos/PartnerLogos'


function Partners(){

    let nums = []
    for (let i = 0; i < 15; i++) {
       nums.push(i + 1)
    }
    let logos = nums.slice(0, 6).map((n) => <PartnerLogos key={n} number={n} />)

    return (
        <div className = "PartnersBlock">
            <div className = "PartnersHeading">
                <h3>Our Partners</h3>
            </div>

            <div className='d-flex flex=row flex-nowrap overflow-auto'>
                {logos}
            </div>

        </div>

    );
};

export default Partners;