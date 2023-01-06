const encoder = new TextEncoder()
const decoder = new TextDecoder()

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
	],
	attestation: 'direct'
}

document.querySelector('button:first-of-type').onclick = () => {
	navigator.credentials.create({publicKey: options})
	.then(credential => {
		navigator.credentials.store(credential)
		console.log('Success')
	})
	.catch(error => {
		console.log(error)
	})
}

document.querySelector('button:last-of-type').onclick = () => {
	navigator.credentials.get({publicKey: {challenge: encoder.encode('challange')}})
	.then(credential => {
		alert(`Seu ID: ${credential.id}`)
	})
	.catch(error => {
		console.log(error)
	})
}