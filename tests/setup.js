const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/user_service_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});
