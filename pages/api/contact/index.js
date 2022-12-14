import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@') || name.trim() === ''
      || !name || !message || message.trim() === '') {
      res.status(422)
        .json({ message: 'Invalid input.' });
    }

    const newMessage = {
      name,
      email,
      message
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@`
    + `${process.env.MONGODB_CLUSTERNAME}.dkrqlak.mongodb.net/?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (e) {
      res.status(500).json({ message: 'Could not connect to database' });
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (e) {
      client.close();
      res.status(500).json({ message: 'Storing failed' });
    }

    client.close();

    res.status(201).json({ message: newMessage });
  }
}

export default handler;
