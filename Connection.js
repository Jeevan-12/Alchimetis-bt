import { MongoClient } from 'mongodb';
const Connection = async () => {
  try {
    let con = new MongoClient(
      'mongodb+srv://root:root@cluster0.dzjjnon.mongodb.net/'
    );
    let monConnect = await con.connect();
    let dbConnect = await monConnect.db('Alchimetis');
    let collection = await dbConnect.collection('data');
    console.log('Database is succesfully connected');
    return collection;
  } catch (error) {
    console.log('Error while connecting database', error);
  }
};

export default Connection;