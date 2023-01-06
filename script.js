const encoder = new TextEncoder()

const options = {
	challenge: encoder.encode('challange'),
	rp: {
		id: 'lorem',
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

document.querySelector('button').onclick = () => {
	navigator.credentials.create({publicKey: options})
	.then(response => {
		console.log(response)
		alert(response)
	})
	.catch(error => {
		console.log(error)
		alert(error)
	})
}
