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
	/* authenticatorSelection: {
		authenticatorAttachment: 'platform'
	}, */
	pubKeyCredParams: [
		{type: 'public-key', alg: -7}
	],
	timeout: 60000,
	attestation: 'direct'
}

document.querySelector('button:first-of-type').onclick = () => {
	navigator.credentials.create({publicKey: options})
	.then(credential => {
		navigator.credentials.get({publicKey: {
			challenge: encoder.encode('challange'),
			allowCredentials: [
				{
					id: credential.rawId,
					transports: ['usb', 'nfc', 'ble', 'internal'],
					type: 'public-key'
				}
			]
		}})
		.then(response => {
			console.log(response)
		})
	})
	.catch(error => {
		console.log(error)
	})
}

document.querySelector('button:nth-of-type(2)').onclick = () => {
	navigator.credentials.get({publicKey: {challenge: encoder.encode('challange')}})
	.then(credential => {
		alert(`Seu ID: ${credential.id}`)
	})
	.catch(error => {
		console.log(error)
	})
}

document.querySelector('button:nth-of-type(3)').onclick = () => {
	credential = new FederatedCredential({id: 1, name: 'lorem', provider: location.origin})
	navigator.credentials.store(credential)
	.then(() => {
		console.log('Success')
	})
	.catch(error => {
		console.log(error)
	})
}

document.querySelector('button:nth-of-type(4)').onclick = () => {
	navigator.credentials.get('required')
	.then(credential => {
		alert(`Seu ID: ${credential.id}`)
	})
	.catch(error => {
		console.log(error)
	})
}