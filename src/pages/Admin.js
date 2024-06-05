import React, {useState} from 'react'
import { Button, Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import CreateCity from '../components/modals/CreateCity';
import CreateType from '../components/modals/CreateType';
import CreateNews from '../components/modals/CreateNews';

const Admin = ()=>{
  const [typeVisible, setTypeVisible]=useState(false)
  const [cityVisible, setCityVisible]=useState(false)
  const [newsVisible, setNewsVisible]=useState(false)
  return(
   <Container className='d-flex flex-column'>
    <Button variant='outline-dark' className='mt-3' onClick={()=> setTypeVisible(true)}> Добавить тип </Button>
    <Button variant='outline-dark' className='mt-3' onClick={()=>setCityVisible(true)}> Добавить город </Button>
    <Button variant='outline-dark'className='mt-3'onClick={()=>setNewsVisible(true)}> Добавить новость </Button>
    <CreateCity show={cityVisible} onHide={()=> setCityVisible(false)}/>
    <CreateType show={typeVisible} onHide={()=> setTypeVisible(false)}/>
    <CreateNews show={newsVisible} onHide={()=> setNewsVisible(false)}/>
   </Container>
  );
};

export default Admin;
