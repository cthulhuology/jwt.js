//module tests for jwt.js
//
// MIT No Attribution  
// Copyright 2023 David J Goehrig <dave@dloh.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy 
// of this software and associated documentation files (the "Software"), to 
// deal in the Software without restriction, including without limitation the 
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
// sell copies of the Software, and to permit persons to whom the Software is 
// furnished to do so.  
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
// IN THE SOFTWARE.


crypto = require('node:crypto').webcrypto
const { claims } = require('./jwt.js')

;( async function() {
	token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIifQ.nkVphKp4R0R9FdLetBiTyp_ddJqHZRnLqOs52urKwuHn7e1uMRTR6EB1zZZh7-WzQhF355Xpbm7nXm47-dhI90ypmyBjo2VfXRzUTGZ4Um24wKk-H9GUN8qU6B7xHifrfZhlYDsH2nrukmzK0VWGNPwroN2Vj9yz8yrR_WD1gKPijZgYkYAq7u44gLRJomNnzmHcKeISTrAe4bHvuij6-xmZ5Co1W4tx0bEMRwNqGHLEjIsEW7BaY9UKMzi1M_f0wAxxWE8HfMmhDl9a2yIbcF1R8M0gGbsf1I9DL0wUJFQ9ESSjCqatYNZuu4kUQ7CdXLOVMpoENXhDp9_QO84rmg"

	key = {"kty":"RSA","n":"4tS5GiaTnx3tZm5rTKy8tKA9Na_ZfduQLmF2ap7M3_Ir15do8T4E5lZdqSyp-RTxkOatl-g8PkxIm4iZYaL3wGXJ42U1C1qn7K6cYiV9djsV4FUdKIPCZZsbl9VJL_PVvrOiz4sV5xLO5qCzjqV7-X2zjlVbV3BcxvJV4tLHFoFrygxoI-QG0IxPxYQ5QXfZ1zLRpAq8uT6sdrdkSlSJCXi0uZtUgZLTOwnrkmk6a-BlYHwZxHrpe-wflrj55wfJv8tnv7FP5OatHT2rMk1MFluMCCoFCTDicqAq5qS4ql8Ou4nYUYgAALy86yCWfkkRgesgDxPPW7vdWVTJXzQVuQ","e":"AQAB","alg":"RS256","kid":"test","use":"sig"}

	console.log(await claims(token,key))
})()


