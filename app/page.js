'use client'
import { useState } from 'react'

export default function Home() {
  const [clicks, setClicks] = useState(0)

  const handleClick = async () => {
    const newClicks = clicks + 1
    setClicks(newClicks)
    
    if (newClicks >= 6) {
      const res = await fetch('/api/paytabs', { method: 'POST' })
      const data = await res.json()
      window.location.href = data.url
    }
  }

  return (
    <div style={{textAlign: 'center', padding: '50px 20px', fontFamily: 'Arial', backgroundColor: '#f5f5f5', minHeight: '100vh'}}>
      <h1 style={{fontSize: '36px', marginBottom: '20px', color: '#333'}}>Foot Chance ⚽</h1>
      <p style={{fontSize: '18px', marginBottom: '30px', color: '#666'}}>
        {clicks < 5 ? `Offre Gratuite ${clicks}/5` : 'Prêt pour 199 MAD/mois'}
      </p>
      <button 
        onClick={handleClick}
        style={{
          padding: '20px 50px', 
          fontSize: '20px', 
          backgroundColor: '#00C851', 
          color: 'white', 
          border: 'none', 
          borderRadius: '12px',
          cursor: 'pointer'
        }}
      >
        Get Predictions
      </button>
      <p style={{marginTop: '30px', fontSize: '14px', color: '#999'}}>
        Après 5 essais gratuits
      </p>
    </div>
  )
}
