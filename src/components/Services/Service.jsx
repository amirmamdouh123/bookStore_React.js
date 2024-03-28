import React from "react"
import { Col } from "react-bootstrap"



function Service({icon  ,name }){
return  <Col xs={3} >
<div className="serviceContainer">
    <div className="serviceIcon">
        {icon}
    </div>
    <p className="serviceName">{name}</p>
</div>
</Col>
   
}

export default Service