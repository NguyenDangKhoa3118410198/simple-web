import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

function About() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <p>
        <span>About</span>
        <span> with params {id}</span>
      </p>
      <p>{location.pathname}</p>
      <button onClick={() => navigate('/')}>Navigate to home</button>
    </div>
  );
}

export default About;
