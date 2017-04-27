Setup mongodb:
- Install mongodb with Homebrew
- Start services with "brew services start momngodb"
- Create a server.js file that includes the port of the connection mongodb
- If you want to seed data but default do the follwing:
1. Go to the database in the connection you want to use or create a new database(i.e: use this command "use database_name");
2. To delete a database run this command db.dropDatabase() this database delete the database you are using.
3. To show all the database you have run this command ( show dbs)
4. To insert data manually run this command( db.database_name.insert({ key: values }); )
5. To find a data run this command db.database_name.find({first: 'james', last: 'caan'})
6. To delete a data run this command db.database_name.remove({first: 'james', last: 'caan'});
7. To create a collection run this command db.createCollection(name, options)

React:

- Redux is what gives the action such anytime anything happens action is dispatched by redux.
