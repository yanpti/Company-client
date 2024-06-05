import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap';
import NewsItem from './NewsItem';
import {Context} from "../index";

const NewsList = observer( ()=>{
    const{news} = useContext(Context)
  return(
    <Row className='d-flex'>
        {news.news.map(news =>
        <NewsItem key ={news.id} news={news}/>
        )}

    </Row>
  );
});

export default NewsList;
