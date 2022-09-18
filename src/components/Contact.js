import React, { useState } from 'react';
// import { validateEmail } from './utils/validate';

function Contact() {
  const [fullName, setFullName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestMessage, setGuestMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'fullName') {
        return setFullName(value)
    }
    if (name === 'guestEmail') {
        return setGuestEmail(value)
    }
    if (name === 'guestMessage') {
        return setGuestMessage(value)
    }
  }
  const handleEmpty = (e) => {
    if (!fullName || !guestMessage) {
    e.target.placeholder = 'this is required.'
    }
  }
  
  const validateEmail = (e) => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const x = (re.test(String(e.target.value).toLowerCase()))
    if (!x || !guestEmail) {
      setGuestEmail('');
      e.target.placeholder = 'a valid email, please.'
    }
    return re.test(String(e).toLowerCase());
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();


    alert(`Comrade ${fullName}, this function still under construction.`);
    setFullName('');
    setGuestMessage('');
    setGuestEmail('');

  };

  return (
    <div className='container-fluid column p-5'>
      <form className="form">
        <input className='row p-2 m-2'
          value={fullName}
          name="fullName"
          onChange={handleInputChange}
          onBlur={handleEmpty}
          type="text"
          placeholder="Name"
        />
        <input className='row p-2 m-2'
          value={guestEmail}
          name="guestEmail"
          onChange={handleInputChange}
          onBlur={validateEmail}
          type="text"
          placeholder="Email"
        />

         <textarea className='row p-2 m-2'
          value={guestMessage}
          name="guestMessage"
          onChange={handleInputChange}
          onBlur={handleEmpty}
          rows={5}
          cols={25}
          placeholder="Message"
        />
        <button className='row p-2 m-2' type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
