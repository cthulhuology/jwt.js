jwt.js - crypto subtle jwt verification
----------------------------------------

This is a minimalistic JWT interface for in browser claims verification.


Getting Started
---------------

Generate a JWK like from an openssl public rsa key.  If you have my erlang jwt module you can use:

	./public test public.pem
	{"kty":"RSA","n":"4tS5GiaTnx3tZm5rTKy8tKA9Na_ZfduQLmF2ap7M3_Ir15do8T4E5lZdqSyp- 
	RTxkOatl-g8PkxIm4iZYaL3wGXJ42U1C1qn7K6cYiV9djsV4FUdKIPCZZsbl9VJL_PVvrOiz4sV5xLO
	5qCzjqV7-X2zjlVbV3BcxvJV4tLHFoFrygxoI-QG0IxPxYQ5QXfZ1zLRpAq8uT6sdrdkSlSJCXi0uZt
	UgZLTOwnrkmk6a-BlYHwZxHrpe-wflrj55wfJv8tnv7FP5OatHT2rMk1MFluMCCoFCTDicqAq5qS4ql
	8Ou4nYUYgAALy86yCWfkkRgesgDxPPW7vdWVTJXzQVuQ","e":"AQAB","alg":"RS256",
	"kid":"test","use":"sig"}

You can embed this key in you webpage, and use it to validate all claims from the servers.	
Then once you get a JWT back from the server you can examine the claims using


	token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIifQ.nkVphKp4R0R9Fd
	LetBiTyp_ddJqHZRnLqOs52urKwuHn7e1uMRTR6EB1zZZh7-WzQhF355Xpbm7nXm47-dhI90ypmyBj
	o2VfXRzUTGZ4Um24wKk-H9GUN8qU6B7xHifrfZhlYDsH2nrukmzK0VWGNPwroN2Vj9yz8yrR_WD1gK
	PijZgYkYAq7u44gLRJomNnzmHcKeISTrAe4bHvuij6-xmZ5Co1W4tx0bEMRwNqGHLEjIsEW7BaY9UK
	Mzi1M_f0wAxxWE8HfMmhDl9a2yIbcF1R8M0gGbsf1I9DL0wUJFQ9ESSjCqatYNZuu4kUQ7CdXLOVMp
	oENXhDp9_QO84rmg" 

	key = {"kty":"RSA","n":"4tS5GiaTnx3tZm5rTKy8tKA9Na_ZfduQLmF2ap7M3_Ir15do8T4E5lZ
	dqSyp-RTxkOatl-g8PkxIm4iZYaL3wGXJ42U1C1qn7K6cYiV9djsV4FUdKIPCZZsbl9VJL_PVvrOiz4
	sV5xLO5qCzjqV7-X2zjlVbV3BcxvJV4tLHFoFrygxoI-QG0IxPxYQ5QXfZ1zLRpAq8uT6sdrdkSlSJC
	Xi0uZtUgZLTOwnrkmk6a-BlYHwZxHrpe-wflrj55wfJv8tnv7FP5OatHT2rMk1MFluMCCoFCTDicqAq
	5qS4ql8Ou4nYUYgAALy86yCWfkkRgesgDxPPW7vdWVTJXzQVuQ","e":"AQAB","alg":"RS256",
	"kid":"test","use":"sig"}

	myClaims = await claims(token,key)



