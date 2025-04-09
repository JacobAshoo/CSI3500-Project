import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import htmlDocx from 'html-docx-js/dist/html-docx';
import { Save, FileText, FileDown } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const printRef = useRef();

  // User Info States
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [address, setAddress] = useState('123 Main St, City, Country');

  // Theme State
  const [theme, setTheme] = useState('light');

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  }, []);

  // Handlers
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-mode', newTheme === 'dark');
  };

  const handleSave = () => {
    localStorage.setItem('theme', theme);
    alert('Information saved!');
  };

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const handleDocExport = () => {
    const content = printRef.current.innerHTML;
    const doc = htmlDocx.asBlob(`<html><body>${content}</body></html>`);
    const link = document.createElement('a');
    link.href = URL.createObjectURL(doc);
    link.download = 'profile.docx';
    link.click();
  };

  return (
    <div className="page-content profile">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      <h2>Profile</h2>

      <div ref={printRef} className="profile-card">
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

        <label className="theme-toggle">
          <input 
            type="checkbox" 
            checked={theme === 'dark'} 
            onChange={handleThemeToggle} 
          />
          Dark Mode
        </label>
      </div>

      <div className="export-buttons">
        <button onClick={handleSave}>
          <Save size={18} style={{ marginRight: '6px' }} />
          Save
        </button>
        <button onClick={handlePrint}>
          <FileText size={18} style={{ marginRight: '6px' }} />
          Export to PDF
        </button>
        <button onClick={handleDocExport}>
          <FileDown size={18} style={{ marginRight: '6px' }} />
          Export to Word
        </button>
      </div>
    </div>
  );
};

export default Profile;
