const userSeeds = require('./userSeed.json');
const itemSeeds = require('./itemSeed.json');
const db = require('../config/connection');
const { User, Item } = require('../models');

db.once('open', async () => {
    try {
      await Item.deleteMany({});
      await User.deleteMany({});
  
      await User.create(userSeeds);
      await Item.create(itemSeeds);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }

  console.log('all done!');
  process.exit(0);
});