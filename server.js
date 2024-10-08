const express = require('express');
const cron = require('node-cron');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
  res.send('Cron Job Server is running');
});


cron.schedule('*/10 * * * *', async () => {
  console.log('Running cron job every 10 minutes');
  
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log('API hit successfully:', response.data);
  } catch (error) {
    console.error('Error hitting the API:', error.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
