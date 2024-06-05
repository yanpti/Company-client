import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row"
import TypeBar from "../components/TypeBar"
import CityBar from "../components/CityBar"
import NewsItem from '../components/NewsItem';
import NewsList from '../components/NewsList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchCities, fetchTypes, fetchNews } from '../http/newsAPI';
import Pages from '../components/pages';
import LineChart from '../components/chart/LineChart';

const News = observer( ()=>{
  const {news} = useContext(Context)
  useEffect(()=>{
    fetchTypes().then(data=>news.setTypes(data))
    fetchCities().then(data=>news.setCity(data))
    fetchNews(null, null, 1, 2).then(data=>{
      news.setNews(data.rows)
      news.setTotalCount(data.count)
    })
  },[])

useEffect(()=>{
  fetchNews(news.selectedType.id, news.selectedCity.id, news.page, news.limit).then(data=>{
    news.setNews(data.rows)
    news.setTotalCount(data.count)
  })
},[news.page, news.selectedType, news.selectedCity])

  return(
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <TypeBar/>
        </Col>

        <Col md={9}>
        <CityBar/>
        <NewsList/>
        <Pages/>
        </Col>
      </Row>
      <LineChart />

    </Container>
  );
})
export default News;

