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
- node is added to your webpack to contains net and dns because there are packages that json web token has that conflict with the browser.
- Redux uses connect function to link any component to redux.
- Redux logger is used to log information from redux it works like console.log, it log any action and state changes through the browser's console.
- it has various options
```
{
  predicate, // if specified this function will be called before each action is processed with this middleware.
  collapsed, // takes a Boolean or optionally a Function that receives `getState` function for accessing current store state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise.
  duration = false: Boolean, // print the duration of each action?
  timestamp = true: Boolean, // print the timestamp with each action?

  level = 'log': 'log' | 'console' | 'warn' | 'error' | 'info', // console's level
  colors: ColorsObject, // colors for title, prev state, action and next state: https://github.com/evgenyrodionov/redux-logger/blob/master/src/defaults.js#L12-L18
  titleFormatter, // Format the title used when logging actions.

  stateTransformer, // Transform state before print. Eg. convert Immutable object to plain JSON.
  actionTransformer, // Transform action before print. Eg. convert Immutable object to plain JSON.
  errorTransformer, // Transform error before print. Eg. convert Immutable object to plain JSON.

  logger = console: LoggerObject, // implementation of the `console` API.
  logErrors = true: Boolean, // should the logger catch, log, and re-throw errors?

  diff = false: Boolean, // (alpha) show diff between states?
  diffPredicate // (alpha) filter function for showing states diff, similar to `predicate`
}

```
- Redux thunk allows you to write action creators, it dispatch async actions.
- mapStateToProps return the prop of the component to redux.
- React router redux: This library allows you to use React Router's APIs as they are documented. And, you can use redux like you normally would, with a single app state. The library simply enhances a history instance to allow it to synchronize any changes it receives into application state.
- Redux-simple-router is used to store the state of a route url in redux.
- Action work just like your controllers will work on your server side, they can be dispatched to various part of your application, redux receives every action that is carried out.
- Store hold the whole state of the application, it dispatches and receives action.
- The store passes dispatched actions to reducers, which receive the actions and make the appropriate changes to state.
- Component are the thing we see when our magic on client is done. They present our magic to the world, They dsiplay the view, layer of our application.
