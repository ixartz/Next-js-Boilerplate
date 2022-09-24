// interface ConversionData {
//   success: boolean;
//   query: {
//     from: string;
//     to: string;
//     amount: number;
//   };
//   info?: {
//     timestamp: string;
//     rate: number;
//   };
//   date: string;
//   result: number;
// }

// function getConvertedData(): Promise {
// 	return fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP', {
// 		method: 'GET',
// 		headers: {
// 			'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
// 			'x-rapidapi-key': '211f46991fmshd0b1f173f4dc0ccp1e7191jsneec0154c3868',
// 		},
// 	})
// 		.then((response) =&gt; response.json()) // Parse the response in JSON
// 		.then((response) =&gt; {
// 			return response as ConversionData; // Cast the response type to our interface
// 		});
// }

const user = {
  firstName: 'Angela',
  lastName: 'Davis',
  role: 'Professor',
};

console.log(user.firstName);
