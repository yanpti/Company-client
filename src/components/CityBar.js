import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Context } from '..';
import { Card, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'

const City = observer( ()=>{
    const{news} = useContext(Context)
  return(
    <Row className='d-flex'>
        {news.city.map(city =>
        <Col>
        <Card 
        style={{cursor: 'pointer'}}
        key={city.id} 
        className='p-10'
        onClick={() => news.setSelectedCity(city)}
        border={city.id === news.selectedCity.id ? 'dark' : 'light'}
        >
                {city.name}
            </Card>
        </Col>
        )}

    </Row>
  );
});

export default City;
