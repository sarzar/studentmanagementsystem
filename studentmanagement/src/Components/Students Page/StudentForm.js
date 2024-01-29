import React, { useState } from 'react';
import { app } from '../Firebase';
import { getDatabase, ref, push } from 'firebase/database';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './StudentForm.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    familyName: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.familyName || !formData.dateOfBirth) {
      toast.error('Please fill in all fields.');
      return;
    }

    const birthDate = new Date(formData.dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 10) {
      toast.error('Students must be at least 10 years old.');
      return;
    }
    const database = getDatabase(app);
    const databaseRef = ref(database, 'student-info');
    push(databaseRef, formData);

    setFormData({
      firstName: '',
      familyName: '',
      dateOfBirth: '',
    });

    toast.success('Student added to the database!');
  };

  return (
    <div className="form-div">
      <form className="student-form" onSubmit={handleSubmit}>
        <div className='input-div'>  
          <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>
        </div>
        <div className='input-div'>  
          <label>
            Family Name:
            <input type="text" name="familyName" value={formData.familyName} onChange={handleChange} />
          </label>
        </div>
        <div className='input-div'>  
          <label>
            Date of Birth:
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;



