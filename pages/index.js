import { useState } from 'react'

export default function Home() {
  const [clicks, setClicks] = useState(0)

  return (
    <div style={{textAlign: 'center', padding: '50px 20px', fontFamily: 'Arial', backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh'}}>
      <h1 style={{fontSize: '36px', marginBottom: '20px'}}>Foot Chance ⚽</h1>
      <p style={{fontSize: '18px', marginBottom: '30px'}}>
        {clicks < 5 ? `Offre Gratuite ${clicks}/5` : 'Prêt pour 199 MAD/mois'}
      </p>
      <button
        onClick={() => setClicks(clicks + 1)}
        style={{
          padding: '20px 
