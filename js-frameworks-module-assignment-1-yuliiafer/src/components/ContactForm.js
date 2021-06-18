import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormText from "react-bootstrap/FormText";

const ContactForm = () => {
  return (
    <Form>
      <FormGroup controlId="formBasicName">
        <FormLabel>Firstname</FormLabel>
        <FormControl type="name" placeholder="Enter your firstname" />
      </FormGroup>
      <FormGroup controlId="formBasiclastname">
        <FormLabel>Lastname</FormLabel>
        <FormControl type="name" placeholder="Enter your lastname" />
      </FormGroup>
      <FormGroup controlId="formBasicEmail">
        <FormLabel>Email address</FormLabel>
        <FormControl type="email" placeholder="Enter email" />
        <FormText className="text-muted">
          We'll never share your email with anyone else.
        </FormText>
      </FormGroup>
      <FormGroup controlId="exampleForm.ControlTextarea1">
        <FormLabel>Your message</FormLabel>
        <FormControl as="textarea" rows={3} />
      </FormGroup>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default ContactForm;
