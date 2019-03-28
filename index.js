require('dotenv').config();

const server = require('./api/server.js');



const greeting = process.env.GREETING;

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n*** ${greeting}, Server Running on http://localhost:${port} ***\n`);
});
