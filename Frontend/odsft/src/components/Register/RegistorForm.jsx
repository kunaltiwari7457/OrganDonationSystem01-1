// src/RegistrationForm.jsx
import React, { useState } from 'react';
import './Registorform.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mothersName: '',
    fathersName: '',
    address: '',
    city: '',
    district: '',
    state: '',
    pinCode: '',
    mobileNumber: '',
    occupation: '',
    email: '',
    dob: '',
    age: '',
    gender: '',
    bloodGroup: '',
    emergencyContactNumber: '',
    emergencyContactAddress: '',
    identityCard: '',
    identityCardNumber: '',
    organsToDonate: '',
    heardAboutUs: '',
    citizenDeclaration: false,
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className='rf'>
      <form onSubmit={handleSubmit}>
        <p>
          <i>Please be aware that this Organ Donor Card is not a living donor card; there are no such things as living donor cards.</i>
        </p>

        {/* Name */}
        <div>
          <label>Name* (As it appears on government issued identity card)</label>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        </div>

        {/* Mother's/Father's Name */}
        <div>
          <label>Mother's Name</label>
          <input type="text" name="mothersName" value={formData.mothersName} onChange={handleChange} />
          <label>Father's Name</label>
          <input type="text" name="fathersName" value={formData.fathersName} onChange={handleChange} />
        </div>

        {/* Current Residential Address */}
        <div>
          <label>Current Residential Address*</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          <input type="text" name="district" placeholder="District" value={formData.district} onChange={handleChange} required />
          <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
          <input type="text" name="pinCode" placeholder="PIN Code" value={formData.pinCode} onChange={handleChange} required />
        </div>

        {/* Mobile Number */}
        <div>
          <label>Mobile Number</label>
          <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
        </div>

        {/* Occupation */}
        <div>
          <label>Occupation</label>
          <select name="occupation" value={formData.occupation} onChange={handleChange}>
            <option value="">Select Occupation</option>
            <option value="Student">Student</option>
            <option value="Employed">Employed</option>
            <option value="Self-employed">Self-employed</option>
            <option value="Unemployed">Unemployed</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        {/* Date of Birth and Age */}
        <div>
          <label>Date Of Birth (DD/MM/YYYY)</label>
          <input type="text" name="dob" placeholder="DD/MM/YYYY" value={formData.dob} onChange={handleChange} required />
          <label>Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>

        {/* Gender */}
        <div>
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Blood Group */}
        <div>
          <label>Blood Group</label>
          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        {/* Emergency Contact */}
        <div>
          <label>Emergency Contact Number</label>
          <input type="text" name="emergencyContactNumber" value={formData.emergencyContactNumber} onChange={handleChange} required />
          <label>Emergency Contact Address</label>
          <input type="text" name="emergencyContactAddress" value={formData.emergencyContactAddress} onChange={handleChange} required />
        </div>

        {/* Identity Card */}
        <div>
          <label>Choose Identity Card</label>
          <select name="identityCard" value={formData.identityCard} onChange={handleChange}>
            <option value="">Select Identity Card</option>
            <option value="Aadhaar Card">Aadhaar Card</option>
            <option value="PAN Card">PAN Card</option>
            <option value="Voter ID">Voter ID</option>
            <option value="Driving License">Driving License</option>
          </select>
          <label>Identity Card Number</label>
          <input type="text" name="identityCardNumber" value={formData.identityCardNumber} onChange={handleChange} required />
        </div>

        {/* Organs to Donate */}
        <div>
          <label>Organs that I wish to donate:</label>
          <input type="radio" name="organsToDonate" value="All Organs" onChange={handleChange} /> All Organs
          <input type="radio" name="organsToDonate" value="Corneas (Eyes)" onChange={handleChange} /> Corneas (Eyes)
          <input type="radio" name="organsToDonate" value="Kidneys" onChange={handleChange} /> Kidneys
          <input type="radio" name="organsToDonate" value="Heart" onChange={handleChange} /> Heart
          <input type="radio" name="organsToDonate" value="Lungs" onChange={handleChange} /> Lungs
          <input type="radio" name="organsToDonate" value="Liver" onChange={handleChange} /> Liver
          <input type="radio" name="organsToDonate" value="Pancreas" onChange={handleChange} /> Pancreas
          <input type="radio" name="organsToDonate" value="Small Intestine" onChange={handleChange} /> Small Intestine
          <input type="radio" name="organsToDonate" value="Skin" onChange={handleChange} /> Skin
          <input type="radio" name="organsToDonate" value="Hand" onChange={handleChange} /> Hand
        </div>

        {/* Where did you hear about us */}
        <div>
          <label>Where did you hear about us?</label>
          <input type="text" name="heardAboutUs" value={formData.heardAboutUs} onChange={handleChange} required />
        </div>

        {/* Citizen Declaration and Privacy Policy */}
        <div>
          <input type="checkbox" name="citizenDeclaration" checked={formData.citizenDeclaration} onChange={handleChange} required />
          <label>I declare that I am a citizen of India and above 18 years of age.</label>
          <br />
 <input type="checkbox" name="privacyPolicy" checked={formData.privacyPolicy} onChange={handleChange} required />
          <label>I agree to the privacy policy <a href="#" >Read More</a></label>
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default RegistrationForm;