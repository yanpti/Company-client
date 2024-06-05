import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import {createCity} from "../../http/newsAPI"

const CreateCity = ({show, onHide })=>{
  const [value, setValue]=useState('')
  const addCity =()=>{
    createCity({name:value}).then(data=>{
      setValue('')
      onHide()
    })
  }
  return(
    <Modal
      show={show}
      onHide ={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
            value={value}
            onChange={e=> setValue(e.target.value)}
            placeholder='Введите название города'
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-dark' onClick={onHide}>Закрыть</Button>
        <Button onClick={addCity}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCity;