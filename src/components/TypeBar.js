import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Context } from '..';
import ListGroup from 'react-bootstrap/ListGroup';

const Type = observer(()=>{
    const{news} = useContext(Context)
  return(
    <ListGroup>
     {news.types.map(type =>
     <ListGroup.Item 
     style={{cursor:'pointer'}}
     active={type.id === news.selectedType.id}
     onClick={()=>news.setSelectedType(type)}
     key = {type.id}>
        {type.name}
     </ListGroup.Item>

     )}
    </ListGroup>
  );
});

export default Type;
