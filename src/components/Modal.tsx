import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';



interface EventModal {
  open: boolean;
  handleClose: () => void;
  handleSaveEvent: (data: { email: string; description: string; time: string }) => void;
}

const EventModal = (props: EventModal) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      email: formData.get('email') as string,
      description: formData.get('description') as string,
      time: formData.get('time') as string,
    };

    props.handleSaveEvent(data);

    props.handleClose();
  };

  return (
    <Modal backdrop="static" show={props.open} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Criar evento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control name='email' type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control name='description' as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>Horário:</Form.Label>
            <Form.Control name='time' type="text" placeholder="HH:mm" />
          </Form.Group>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};


export default EventModal;