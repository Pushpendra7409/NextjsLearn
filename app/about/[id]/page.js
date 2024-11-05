'use client'
import { useParams } from 'next/navigation';

const AboutId = () => {
  const params = useParams();
  const id = params.id; // Access the dynamic route parameter

  return (
    <div>
      <h1>About ID: {id}</h1>
      <p>Yeh dynamic about page hai jo ID {id} ko handle kar raha hai.</p>
    </div>
  );
};

export default AboutId;

