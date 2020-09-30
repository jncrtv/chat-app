import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'

let socket;

const Chat = ({ location }) => {
  const [buyer, setBuyer] = useState('');
  const [seller, setSeller] = useState(''); 
  const ENDPOINT = 'localhost:5002';

  useEffect(() => {
    const { buyer, seller } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setBuyer(buyer);
    setSeller(seller);

    socket.emit('message', { buyer, seller });
     
  }, [ENDPOINT, location.search])

  return (
    <h1>Chat</h1>
  )
}

export default Chat;