import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignIn.css';
function BasicExample() {
  return (
   <div className='Box_SignIn'>
     <Form className='form_email'>
      <h1>SignIn</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Label>Pay</Form.Label>
      <Form.Range />
      <Button variant="primary" type="submit">
        SignIn
      </Button>
    </Form>
   </div>
  );
}

export default BasicExample;