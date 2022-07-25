const https = require('https')

const data = JSON.stringify({
  todo: 'Buy the milk'
})

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

let datareceived = ''
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
 if(res.statusCode!==201){
     console.log('Error Occured');
     return
 }
 const contentType = res.headers["content-type"];
 if(contentType!== 'application/json'){
     console.log('Cannot handle the data provided');
     return
 }
  res.on('data', chunk => {
    datareceived += chunk.toString('utf8');
    try {
        const json = JSON.parse(datareceived);
        console.log('json data is: ', json);
    }
    catch(error){
        console.log('content was not valid json');
    }
  });
  res.on('end', () => {
      console.log('received data', datareceived);
  })
})

req.write(data, () => {
    console.log('Data has been written')
})

req.on('error', error => {
  console.error(error)
})
req.end()
