import React, { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({
      company_name: '',
      address: '',
      company_email: '',
      nif: '',
      stat: '',
      logo: '',
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value,
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:8000/api/societies', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          // Reset the form after successful submission
          setFormData({
              company_name: '',
              address: '',
              company_email: '',
              nif: '',
              stat: '',
              logo: '',
          });
      })
      .catch(error => console.error(error));
  };

  return (
      <div>
          <h1>Add Society</h1>
          <form onSubmit={handleSubmit}>
              <label>Company Name</label>
              <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} required />
              <label>Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required />
              <label>Company Email</label>
              <input type="email" name="company_email" value={formData.company_email} onChange={handleChange} required />
              <label>NIF</label>
              <input type="text" name="nif" value={formData.nif} onChange={handleChange} required />
              <label>Stat</label>
              <input type="text" name="stat" value={formData.stat} onChange={handleChange} required />
              <label>Logo</label>
              <input type="text" name="logo" value={formData.logo} onChange={handleChange} />
              <button type="submit">Submit</button>
          </form>
      </div>
  );
}

export default App;
