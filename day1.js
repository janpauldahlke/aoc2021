const http = require('https');
const day1URL = 'https://adventofcode.com/2017/day/1/input';

const grabInput = async () => {
  return http.get(day1URL, (res) => {
    let data = [];

    res.on('data', chunk => { 
      console.log('data chunk transfered')
      data.push(chunk);
    })

    res.on('end', () => {
      console.log('response ended')
      const echos = JSON.parse(Buffer.concat(data).toString());

      return echos ?? null;
    })
  });
}

console.log(grabInput())




// https.get('https://jsonplaceholder.typicode.com/users', res => {
//   let data = [];
//   const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
//   console.log('Status Code:', res.statusCode);
//   console.log('Date in Response header:', headerDate);

//   res.on('data', chunk => {
//     data.push(chunk);
//   });

//   res.on('end', () => {
//     console.log('Response ended: ');
//     const users = JSON.parse(Buffer.concat(data).toString());

//     for(user of users) {
//       console.log(`Got user with id: ${user.id}, name: ${user.name}`);
//     }
//   });
// }).on('error', err => {
//   console.log('Error: ', err.message);
// });





