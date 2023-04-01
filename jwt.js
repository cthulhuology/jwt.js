//module jwt
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

function deb64(S) {
	const Cs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
	const Ks = new Uint8Array(Cs.length);
	switch(S.length % 4) {
		case 2: 
			S += '=='
			break
		case 3:
			S += '='
			break
		default:
	}
	for (var i = 0; i < Cs.length; i++) { Ks[i] = Cs.charCodeAt(i) }
	var L = S.length
	var padding = 0
	while(S[--L] === "=") ++padding
	const R = new Uint8Array(((S.length * 3) / 4) - padding)
	var p = 0
	for (var i = 0; i < S.length;) {
		const A = Ks.indexOf(S.charCodeAt(i++));
		const B = Ks.indexOf(S.charCodeAt(i++)); 
		const C = Ks.indexOf(S.charCodeAt(i++));
		const D = Ks.indexOf(S.charCodeAt(i++));
		const X = (A << 2) | (B >> 4);
		const Y = ((B & 15) << 4) | (C >> 2);
		const Z = ((C & 3) << 6) | D&63
		R[p++] = X
		if (C != 64) R[p++] = Y
		if (D != 64) R[p++] = Z
	}
	return R
}

async function claims(Token, JWK) {
	const [H,C,S] = Token.split('.')
	const [Header, Claims, Signature] = [H,C,S].map( (X) => { return deb64(X) })
	if (JSON.parse((new TextDecoder).decode(Header)).alg !== 'RS256') { return undefined }
	const encoder = new TextEncoder()
	const Payload = encoder.encode(H + "." + C)
	const Data = await crypto.subtle.digest("SHA-256", Payload)
	const Key = await crypto.subtle.importKey('jwk',JWK,{name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256'},false,['verify'])
	const V = await crypto.subtle.verify('RSASSA-PKCS1-v1_5',Key,Signature,Payload)
	return V ? JSON.parse((new TextDecoder).decode(Claims)) : "invalid"
}

module.exports = { claims }
