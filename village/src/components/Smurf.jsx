import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div>
        <Button onClick={() => props.populateForm(props.id)} color="primary">Update</Button>{'  '}
        <Button color="danger" onClick={props.toggle}>Delete</Button>
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
          <ModalHeader>Delete Smurf</ModalHeader>
          <ModalBody>
            <b>{`Are you sure you want to delete ${props.name}`}</b><br />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={e => {
              props.deleteSmurf(e, props.id);
              props.toggle()
              }}>Delete</Button>{' '}
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

