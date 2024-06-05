import React from 'react'
import Col from 'react-bootstrap/Col'
import { Card, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { useNavigate } from "react-router-dom"
import {NEWSPAGE_ROUTE} from "../utils/consts"

const NewsItem = ({news})=>{
const history = useNavigate()
  return(
   <Col md={3} className={"mt-3"} onClick={() => history(NEWSPAGE_ROUTE+ '/'+ news.id)}>
    <Card style={{width:150, cursor:'pointer'}} border='dark' className='mt-3'>
    <Image width={148} height={148} src={process.env.REACT_APP_API_URL + news.img}/>
        <div>{news.name}</div>
    </Card>
   </Col>
  );
};

export default NewsItem;

