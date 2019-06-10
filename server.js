require('dotenv').config();
require('./lib/utils/connect')();
const app = require('./lib/app'); 

const PORT = process.env.PORT || 7891;

app.use('/api/v1/notes', require('./lib/routes/notes'));

app.listen(PORT, () => {
  console.log(`Listening in on ${PORT}`);
});
