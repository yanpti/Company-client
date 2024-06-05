import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {useParams} from 'react-router-dom'
import { fetchOneNews } from '../http/newsAPI';

const NewsPage = ()=>{

 const [news, setNews]= useState({info:[]})
 const {id} = useParams()
 useEffect(()=>{
  fetchOneNews(id).then(data=>setNews(data))
},[])
  return(
    <Container className='mt-3'>
      <Col md={4}>
        <Image width={300} height={300} src={process.env.REACT_APP_API_URL + news.img}/>
        <div><h2>{news.name}</h2></div>
      </Col>

      <Col md={4}>
      </Col>
      <div><h5>{news.text}</h5></div>
      <Col md={4}>
      <Row className="d-flex flex-column">
        {news.info.map(info =>
        <Row key={info.id}>
          {info.title}: {info.text}
        </Row>
        )}
      </Row>
      </Col>
    </Container>
  );
};

export default NewsPage;