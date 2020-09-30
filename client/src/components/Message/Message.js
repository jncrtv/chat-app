import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Message = (props) => {

  const [buyer, setBuyer] = useState(''); //set to buyer
  const [seller, setSeller] = useState(''); //set to seller

  // SET STATE FOR buyer and seller using props
  // temporarily hardcoded
  setBuyer('BUYER');
  setSeller('SELLER');

  return (
    <div>
      <Link onClick={event => (!buyer || !seller) ? event.preventDefault() : null} to={`/chat?name${buyer}&seller=${seller}`}>
        <button buyer={buyer} seller={seller} className="button" type="submit">Message</button>
      </Link>
    </div>
  )

}

export default Message; 