
const host 	 = 'https://api.stripe.com/v1/'
const id 	 = 'acct_1BCItzLpikOr1Htc'
const apiKey = 'sk_test_SkzQOwPELomwK36IwecYdX0D'

export default {
	tokens: {
		create: function(data) {
			let url = host + 'tokens' + '?card[number]=' + card.cardNumber
																 + '&card[exp_month]=' + data.expiryMonth
																 + '&card[exp_year]=' + data.expiryYear
																 + '&card[cvc]=' + data.cvv,
					opt = {
						method: 'post',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							'Authorization': 'Bearer ' + apiKey
						}
					}

			return fetch(url, opt)
		}
	},

	customers: {
		create: function(data) {
			let url = host + 'customers' + '?source=' + data.source
																   + '&description=' + data.description
																   + '&email=' + data.email,
					opt = {
						method: 'post',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							'Authorization': 'Bearer ' + apiKey
						}
					}

			return fetch(url, opt)
		}
	},

	charges: {
		create: function(data) {
			let url = host + 'charges' + '?amount=' + data.amount
																 + '&currency=' + data.currency
																 + '&customer=' + data.customer,
					opt = {
						method: 'post',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							'Authorization': 'Bearer ' + apiKey
						}
					}

			return fetch(url, opt)
		}
	},

}
