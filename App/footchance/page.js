export default function Home() {
  return (
    <main style={{
      padding: '40px', 
      fontFamily: 'Arial', 
      textAlign: 'center', 
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)', 
      color: 'white', 
      minHeight: '100vh'
    }}>
      <h1 style={{fontSize: '56px', marginBottom: '10px'}}>⚽ FootChance</h1>
      <p style={{fontSize: '22px', opacity: '0.8'}}>Site dyal prediction dyal matchat</p>
      
      <div style={{
        marginTop: '50px', 
        padding: '40px', 
        background: 'rgba(255,255,255,0.1)', 
        borderRadius: '20px', 
        display: 'inline-block',
        backdropFilter: 'blur(10px)'
      }}>
        <h2>Marhba bik f FootChance! 🔥</h2>
        <p style={{fontSize: '18px', marginTop: '15px'}}>
          Repo dyalna wajd 100% <br/>
          Daba ghadi nzido Supabase bach njibo matchat 7a9i9iyin.
        </p>
        <button style={{
          marginTop: '20px',
          padding: '15px 30px',
          fontSize: '18px',
          background: '#00ff88',
          color: '#0a0a0a',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Bda Prediction
        </button>
      </div>
    </main>
  )
}
