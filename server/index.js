const express = require('express')
const cors = require('cors')
const path = require('path');

const app = express()
const port = 8080

const { 
  Category,
  initializeDb, 
} = require('./models');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.get('/api/ping', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/categories', async (req, res) => {
  try {
    res.send(await Category.findAll());
  } catch (error) {
    res.send(error)
  }
});

app.get('/api/reset', async (req, res) => {
  try {
    await initializeDb();
    res.send('Reset OK');
  } catch (error) {
    res.send(error)
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})