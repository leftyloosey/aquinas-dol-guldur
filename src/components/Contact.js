import React, { useState } from 'react';

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
   
};
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
          type="text"
          placeholder="Name"
        />
        <input className='row p-2 m-2'
          value={guestEmail}
          name="guestEmail"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />

         <textarea className='row p-2 m-2'
          value={guestMessage}
          name="guestMessage"
          onChange={handleInputChange}
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
