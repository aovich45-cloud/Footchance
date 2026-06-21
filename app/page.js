{() => {
  const [freeUsed, setFreeUsed] = React.useState(0)
  
  React.useEffect(() => {
    const used = localStorage.getItem('free_offers_used')
    setFreeUsed(used ? parseInt(used) : 0)
  }, [])

  const handleClick = async () => {
    if (freeUsed < 5) {
      const newCount = freeUsed + 1
      localStorage.setItem('free_offers_used', newCount)
      setFreeUsed(newCount)
      alert(`✅ Offre gratuite ${newCount}/5 - Ba9i lik ${5 - newCount} offres`)
      // Hna ghadi n7otto code dyal prediction gratuit
    } else {
      // Mn b3d 5 offres, ybda paiment
      const res = await fetch('/api/paytabs', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          amount: 199,
          currency: 'MAD',
          cart_id: 'footchance_' + Date.now(),
          cart_description: 'Abonnement FootChance 1 mois'
        })
      })
      const data = await res.json()
      window.location.href = data.redirect_url
    }
  }

  return (
    <button 
      onClick={handleClick}
      style={{ marginTop: '20px',
        padding: '18px 40px',
        fontSize: '20px',
        background: freeUsed < 5 ? '#00C851' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer',
        fontWeight: 'bold',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
      }}>
      {freeUsed < 5 ? `🎁 Offre Gratuite ${freeUsed}/5` : '🔥 S\'abonner 199dh/mois'}
    </button>
  )
}}()
