import React from 'react'
import { useNavigate } from 'react-router';

const NotFoundPage = () => {
    const navigate = useNavigate();
    setTimeout(()=>{
        navigate('/');
    },1000);
  return (
   <h1 style={{color:'red'}}>NotFoundPage</h1>
  )
}

export default NotFoundPage