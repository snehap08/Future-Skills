const express = require('express')
const app = express();
const cors = require('cors');
const connectDB = require('./db')
const cardModel = require ('./models/Card');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Basic endpoint to check if the server is running
// app.get('/ping', (req, res) => {
//   res.send('Pong!');
// });

//API endpoint for card creation
app.post('/api/cards', async(req, res)=>{
    try {
        console.log("Received card data:", req.body);
        const { title, description } = req.body;
        const card = new cardModel({ title, description });
        await card.save();
        res.status(201).json(card);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

connectDB();

//API endpoint for getting the card
app.get('/api/cards',async (req,res)=> {
  const card = await cardModel.find()
  return res.json({items : card})
});

// API endpoint to get a card by the title
app.get('/api/cards/:title', async (req, res) => {
  try {
    const card = await cardModel.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }
    res.json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
