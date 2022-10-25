import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


const initialUserData = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  city: "",
  state: "",
  zipcode: ""
}

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState(initialUserData);

  const updateUserDataHandler = useCallback( (type) => (event) => {
    setUserData({...userData, [type]: event.target.value}, [userData])
  })

  const formHandler = useCallback( (type ) => (event) => {
    event.preventDefault()
    console.log(userData);
    }, 
    [userData]
    
  )
  console.log(userData)
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // setValidated(true);
  




  return (
    <Form noValidate validated={validated} onSubmit={formHandler()}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01" className='Form'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="name"
            onChange={updateUserDataHandler("name")}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomPhoneNumber" className='Form'> 
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@email</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              onChange={updateUserDataHandler("email")}
              required
            />
            <Form.Control.Feedback type="invalid" className="inputFeedback">
              Please enter valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomPhoneNumber" className='Form'>
          <Form.Label>Phone Number</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">#</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              aria-describedby="inputGroupPrepend"
              onChange={updateUserDataHandler("phoneNumber")}
              required
            />
            <Form.Control.Feedback type="invalid" className="inputFeedback">
              Please enter a phone number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustom03" className='Form'>
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" onChange={updateUserDataHandler("address")} required />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03" className='Form'>
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" onChange={updateUserDataHandler("city")} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04" className='Form'>
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" onChange={updateUserDataHandler("state")}required />
          <Form.Control.Feedback type="invalid" className="inputFeedback">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05" className='Form'>
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" onChange={updateUserDataHandler("zipcode")} required />
          <Form.Control.Feedback type="invalid" className="inputFeedback">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          className="inputFeedback"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}


export default ContactForm

// class ContactForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             ContactForm: ''
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this._submitForm}>
//                     <label>
//                         Name: 
//                         <input
//                             type="text"
//                             value={this.state.firstname}
//                         />
//                     </label>
//                     <br />
//                     <label>
//                         Email: 
//                         <input
//                             type="text"
//                             value={this.state.email}
//                         />
//                     </label>
//                     <br />
//                     <label>
//                         Phone Number:
//                         <input
//                             type="text"
//                             value={this.state.phonenumber}
//                         />
//                     </label>
//                     <br />
//                     <label>
//                         Address:
//                         <input
//                             type="text"
//                             value={this.state.address}
//                         />
//                     </label>
//                     <br />
//                     <label>
//                         City:
//                         <input
//                             type="text"
//                             value={this.state.city}
//                         />
//                     </label>
//                     <br />
//                     <label>
//                         State:
//                         <input
//                             type="text"
//                             value={this.state.state}
//                         />
//                     </label>
//                     <br />
//                     <label>
//                         Zip code:
//                         <input
//                             type="text"
//                             value={this.state.zipcode}
//                         />
//                     </label>
//                     <br />
//                     <input type="submit" />
//                 </form>
//             </div>
//         )

//     }
// }