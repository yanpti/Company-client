import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Dropdown, Form, Col, Row, Modal } from 'react-bootstrap';
import { Context } from '../..';
import { createNews, fetchCities, fetchTypes } from '../../http/newsAPI';
import { observer } from 'mobx-react-lite';


const CreateNews = observer(({ show, onHide }) => {
  const { news } = useContext(Context);
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [file, setFile] = useState(null)
  const [info, setInfo] = useState([]);

  useEffect(()=>{
    fetchTypes().then(data=>news.setTypes(data))
    fetchCities().then(data=>news.setCity(data))
  },[])

  const addInfo = () => {
    setInfo([...info, { title: '', text: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number));
  };

  const changeInfo = (key, value, number)=>{
    setInfo(info.map(i=>observer.number===number? {...i, [key]:value}:1))
  }

  const selectFile = e =>
    {
      setFile(e.target.files[0])
    }
  
  const addNews =()=>{
    const formData=new FormData()
    formData.append('name', name)
    formData.append('text', text)
    formData.append('img', file)
    formData.append('typeId', news.setSelectedType.id)
    formData.append('cityId', news.setSelectedCity.id)
    formData.append('info', JSON.stringify(info))
    createNews(formData).then(data=>onHide())
  }


  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новость
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {news.types.map(type =>
                <Dropdown.Item onClick={()=>news.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle>Выберите город</Dropdown.Toggle>
            <Dropdown.Menu>
              {news.city.map(city =>
                <Dropdown.Item onClick={()=>news.setSelectedCity(city)} key={city.id}>{city.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={e=>setName(e.target.value)}
            className='mt-2'
            placeholder='Введите название'
          />
          <Form.Control
            value={text}
            onChange={e=>setText(e.target.value)}
            className='mt-2'
            placeholder='Введите текст'
          />
          <Form.Control
            className='mt-2'
            type='file'
            onChange={selectFile}
          />
          <hr />
          <Button
            variant='outline-dark'
            onClick={addInfo}
          >
            Добавить новое свойство
          </Button>
          {info.map(i =>
            <Row key={i.number} className='mt-3'>
              <Col md={4}>
                <Form.Control
                  placeholder="Введите название свойства"
                  value={i.title}
                  onChange={(e)=> changeInfo('title', e.target.value, i.number)}
                />
              </Col>
              <Col className='mt-2' md={4}>
                <Form.Control
                  placeholder="Введите текст"
                  value={i.text}
                  onChange={(e)=> changeInfo('text', e.target.value, i.number)}
                />
              </Col>
              <Col className='mt-2' md={4}>
                <Button
                  variant='outline-dark'
                  onClick={() => removeInfo(i.number)}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-dark' onClick={onHide}>Закрыть</Button>
        <Button onClick={addNews}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateNews;