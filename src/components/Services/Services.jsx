import { Row } from 'react-bootstrap'
import Service from './Service'
import './service.css'



function Services(){
    
    return (
        <div className="ServicesContainer">
            <Row>
            <Service icon={<i className="bi bi-truck"></i> } name={"Free Shipping"} />
            <Service icon={<i className="bi bi-gift"></i> } name={"Gift Card"} />
            <Service icon={<i className="bi bi-arrow-clockwise"></i> } name={"7 Days Return"} />
            <Service icon={<i className="bi bi-send"></i> } name={"Contact us"} />
            </Row>
        </div>
    )
}

export default Services