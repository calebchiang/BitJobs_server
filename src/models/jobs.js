const { pgTable, serial, text } = require('drizzle-orm/pg-core');


const jobs = pgTable('jobs', {
  id: serial('id').primaryKey(), 
  title: text('title'),           
  company: text('company'),      
  location: text('location'),    
  description: text('description') 
});

module.exports = { jobs };
