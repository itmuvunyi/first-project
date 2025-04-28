import { useState } from "react";
import { Col, Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://locolhost:3000/contact", {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json;charset=utf-8", 
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);

        if (result.code === 200) {
            setStatus({success: true, message: "Message sent successful!"});
        }else {
            setStatus({success: false, message: "Something went wrong, plz try agin later."});
        }
    };

    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contct Us"/>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Enter your First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Enter your Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Enter your Email Adress" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Enter your Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                    </Col>

                                    {
                                        status.message && 
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    }
                                
                            </Row>
                        </form>
                    </Col>
                    <Col md={6}>
                        <h2>Get In touch</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}