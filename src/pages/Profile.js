import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  // State for storing user information
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [address, setAddress] = useState('123 Main St, City, Country');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  const handleSave = () => {
    // Implement saving user info logic here (e.g., API call)
    alert('Information saved!');
  };

  return (
    <div className="page-content profile">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>

      <h2>Profile</h2>

      <div className="profile-card">
        <h3>Update Your Information</h3>

        <label>
          Name:
          <input 
            type="text" 
            value={name} 
            onChange={handleNameChange} 
          />
        </label>

        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange} 
          />
        </label>

        <label>
          Phone:
          <input 
            type="text" 
            value={phone} 
            onChange={handlePhoneChange} 
          />
        </label>

        <label>
          Address:
          <input 
            type="text" 
            value={address} 
            onChange={handleAddressChange} 
          />
        </label>

        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Profile;

