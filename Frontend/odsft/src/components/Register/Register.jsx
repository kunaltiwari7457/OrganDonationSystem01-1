import React from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegisterFormClick = () => {
    navigate('/', { state: { showLoginModal: true } }); // Redirect with state
  };

  return (
    <>
      <div className="registor section" id="registor">
        <div className="container flex-center">
          <h1 className="section-title-01">&nbsp;</h1>
          <h2 className="section-title-02">Pledge to be an Organ Donor&nbsp;</h2>
        </div>
      </div>

      <div className="registor-content">
        <p>
        Pledging your organs is a simple procedure. Just fill out the online pledge form and we will send you a donor card
         with your unique government registration number. All pledges are registered with the National Organ & Tissue Transplant
          Organisation (NOTTO). Registering as an Organ donor is merely an expression of your intent to be an Organ donor.
           The card that we will send you does not carry any legal weight, however, it is a great way to show everyone your 
          intent.
         So keep it with you at all times and make sure you let your family and friends know about your choice.
        </p>
        <br />
        <p>
        According to Indian law, it is your next of kin who will decide whether to donate your organs or not upon death. Even if you have pledged your organs, no donation will happen unless the next of kin gives their consent. Therefore, when you pledge to be an organ donor, it’s very important that you discuss your wish to donate with your family. This is to enable your family to carry out your wishes in case the need arises
        </p>
        <br />
        <button className="Registorform" onClick={handleRegisterFormClick}>
          Fill The Pledge Form
        </button>
      </div>
    </>
  );
};

export default Register;
