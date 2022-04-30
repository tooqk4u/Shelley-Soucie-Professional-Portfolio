import React, {useState} from 'react'
import { Form } from 'react-bootstrap'
// import { useForm } from 'react-hook-form'

function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [validated, setValidated] = useState(false);
    
    function handleSubmit(event) {
            // email.preventDefault()
            // //email = 1*( atext / "." ) "@" label *( "." label )
            // // label = let-dig [ [ldh-str ] let-dig ] ;
            // const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
            // console.log(regex.test(email));
            // return regex.test(email);

            const form = event.currentTarget
            if (form.checkValidity()=== false) {
                event.preventDefault();

                event.stopPropagation();
            }
            setValidated(true);
    }
    

    return (
        <div className="contactForm" id="contact">
            <h2> CONTACT ME</h2>
            <br></br>
            <Form onSubmit={handleSubmit} validated={validated}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlName1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required 
                        type="text" 
                        placeholder="name" 
                    />
                    <Form.Control.Feedback type="invalid">
                        Enter a name
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlEmail1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required  
                        type="email" 
                        placeholder="name@example.com" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}    
                    />
                    <Form.Control.Feedback type="invalid">
                        Enter an email
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        required 
                        as="textarea" 
                        rows={3} 
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Enter a message
                    </Form.Control.Feedback>
                </Form.Group>
                <button onClick={handleSubmit} type="submit" className="btn btn-light" value="Submit">Submit</button>
            </Form>
        </div>
    )
}

export default Contact;