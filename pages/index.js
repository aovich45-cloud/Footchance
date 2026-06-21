import { useState } from 'react'

export default function Home() {
  const [clicks, setClicks] = useState(0)

  return (
    <div style={{textAlign: 'center', padding: '50px 20px', fontFamily: 'Arial'}}>
      <h1 style={{fontSize: '36px', marginBottom: '20px'}}>Foot Chance ⚽</h1>
      <p style={{fontSize: '18px', marginBottom: '30px'}}>
        {clicks < 5 ? `Offre Gratuite ${clicks}/5` : 'Prêt pour le paiement!'}
      </p>
      <button 
        onClick={() => setClicks(clicks + 1)}
        style={{
          padding: '20px 40px',
          fontSize: '18px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >
        Get Predictions
      </button>
    </div>
  )
}


