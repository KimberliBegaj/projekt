
import React from 'react'
import Card from 'react-bootstrap/Card';
import './Style.css';
import image16 from './image16.png';
import image13 from './image13.png';
import image17 from './image17.png';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

function Services() {
    const navigate=useNavigate();

    return (
        <>

        <div >
            <p style={{marginTop:"30px",marginBottom:"25px",marginLeft:"650px",fontFamily:"Coursive",fontSize:"35px",color:"#4D4D4D"}}>Our Services</p>
        </div>
        <div className='Services'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image16} style={{width:"200px",height:"200px",marginTop:"20px",marginLeft:"45px"}} />
                <Card.Body>
                    <Card.Title style={{textAlign:"center",marginTop:"10px",marginBottom:"10px",color:"#32A5D3",fontWeight:"bold"}}>General Dentistry</Card.Title>
                    <Card.Text style={{textAlign:"center",color:"#4D4D4D"}}>
                        Comprehensive oral care for a healthier smile.
                        Regular check-ups,cleanings and preventive treatments.
                    </Card.Text>
                    <Button onClick={()=>navigate("/general-dentistry")} style={{borderRadius:"20px",fontFamily:"coursive",color:"white",borderColor:"#76D7EA",fontWeight:"bold",backgroundColor:"#76D7EA"}} variant="outline-info">Read More</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image13} style={{width:"200px",height:"200px",marginTop:"20px",marginLeft:"45px"}}/>
                <Card.Body>
                    <Card.Title style={{textAlign:"center",marginTop:"10px",marginBottom:"10px",color:"#32A5D3",fontWeight:"bold",}}>Surgical Care</Card.Title>
                    <Card.Text style={{textAlign:"center",color:"#4D4D4D"}}>
                        Advanced dental surgeries including tooth extractions,implantsand gum tratments for optimal oral health.
                    </Card.Text>
                    <Button onClick={()=>navigate("/surgical-care")} style={{borderRadius:"20px",fontFamily:"coursive",color:"white",borderColor:"#76D7EA",fontWeight:"bold",backgroundColor:"#76D7EA"}} variant="outline-info">Read More</Button>
                </Card.Body>
            </Card>

            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={image17} style={{width:"200px",height:"200px",marginTop:"20px",marginLeft:"45px"}} />
                <Card.Body>
                    <Card.Title style={{textAlign:"center",marginTop:"10px",marginBottom:"10px",color:"#32A5D3",fontWeight:"bold"}}>Orthodontic Treatment</Card.Title>
                    <Card.Text style={{textAlign:"center",color:"#4D4D4D"}}>
                        Straighten your teeth with braces or aligners for a perfect smile and improveed bite function.
                    </Card.Text>
                    <Button onClick={()=>navigate("/orthodontic-treatment")} style={{borderRadius:"20px",fontFamily:"coursive",color:"white",borderColor:"#76D7EA",fontWeight:"bold",backgroundColor:"#76D7EA"}} variant="outline-info">Read More</Button>
                </Card.Body>
            </Card>

        </div>

        <div><hr style={{backgroundColor:"#76D7EA",width:"400px",height:"5px",marginLeft:"540px",borderColor:"#76D7EA",marginTop:"45px",marginBottom:"38px"}}></hr></div>
        </>
    )
}

export default Services
