export async function POST(req: Request) {
  const body = await req.json()
  const { amount, currency, cart_id, cart_description } = body

  const payload = {
    profile_id: 100123,
    tran_type: "sale",
    tran_class: "ecom",
    cart_id: cart_id,
    cart_currency: currency || "MAD",
    cart_amount: amount,
    cart_description: cart_description,
    customer_details: {
      name: "Test User",
      email: "test@test.com",
      phone: "+212600000",
      street1: "Casablanca",
      city: "Casablanca", 
      state: "Casablanca",
      country: "MA",
      zip: "20000"
    },
    callback: `${req.headers.get('origin')}/api/callback`,
    return: `${req.headers.get('origin')}/success`
  }

  const response = await fetch('https://secure.paytabs.com/payment/request', {
    method: 'POST',
    headers: {
      'authorization': 'SJKLYMNYH-DBML2NJMH-H6N22LLKG',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  
  const data = await response.json()
  return Response.json({ redirect_url: data.redirect_url })
}
