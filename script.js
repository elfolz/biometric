const encoder = new TextEncoder()

const challange = encoder.encode('lorem')

const publicKey = {
	challange: challange,
	rp: {
		name: 'lorem'
	},
	user: {
		id: '123456'
	},
	pubKeyCredParams: [
		{
			type: 'public-key',
			alg: -7
		}
	]
}

document.querySelector('button').onclick = () => {
	console.log(0)
	navigator.credentials.create(publicKey)
	.then(response => {
		console.log(response)
		alert(response)
	})
	.catch(error => {
		console.log(error)
		alert(error)
	})
}