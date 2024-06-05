import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Context } from '..';
import { Pagination } from 'react-bootstrap';


const Pages = observer( ()=>{
    const {news}=useContext(Context)
    const pageCount = Math.ceil(news.totalCount/news.limit)
    const pages=[]

    for(let i=0; i<pageCount; i++){
        pages.push(i+1)
    }
  return(
    <Pagination className='mt-5'>
        {pages.map(page =>
            <Pagination.Item
            key={page}
            active = {news.page===page}
            onClick={()=>news.setPage(page)}
            >
                {page}</Pagination.Item>
        )}
    </Pagination>
  );
});

export default Pages;
