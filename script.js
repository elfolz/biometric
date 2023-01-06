const encoder = new TextEncoder()

const options = {
	challenge: encoder.encode('challange'),
	rp: {
		id: location.host,
		name: 'lorem'
	},
	user: {
		id: encoder.encode('123456'),
		name: 'lorem',
		displayName: 'lorem'
	},
	pubKeyCredParams: [
		{
			type: 'public-key',
			alg: -7
		}
	]
}

document.querySelector('button:first-of-type').onclick = () => {
	navigator.credentials.create({publicKey: options})
	.then(credential => {
		console.log(credential)
	})
	.catch(error => {
		console.log(error)
	})
}

document.querySelector('button:last-of-type').onclick = () => {
	navigator.credentials.get({publicKey: {challenge: encoder.encode('challange')}})
	.then(credential => {
		console.log(credential)
	})
	.catch(error => {
		console.log(error)
	})
}