const dotenv = require('dotenv')
dotenv.config()

// const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

const stripe = require('stripe')(
	'sk_test_51Oaz6oI0ut9kAUXf34iaGezlAqrtY9a9RsoNxg76WEGy3C72rRluO5BHhltP85dDDMU0ApYt6iJGL1yte4Hqh63w00MNbmkRE6'
)

exports.handler = async function (event, context) {
  if(event.body) {
  const { cart, shipping_fee, total_amount } = JSON.parse(event.body)

	const calculateOrderAmount = () => {
		// Replace this constant with a calculation of the order's amount
		// Calculate the order total on the server to prevent
		// people from directly manipulating the amount on the client
		return shipping_fee + total_amount
	}
	try {
		// Create a PaymentIntent with the order amount and currency
		const paymentIntent = await stripe.paymentIntents.create({
			amount: calculateOrderAmount(),
			currency: 'usd',
		})
		return {
			statusCode: 200,
			body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
		}
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: error.message }),
		}
	}
  }
  return {
    statusCode: 200,
    body: 'Create Payment Intent'
  }

}
