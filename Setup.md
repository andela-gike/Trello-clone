Mongodb
- Ensure that is placed before all the routes in your index.js file for your routes else ie flag an error that says "MissingSchemaError: Schema hasn't been registered for model "User"."

When using a promise use the following:
```  const title = request.body.title;
     const owner = request.body.owner;

     const board = new Boards();
     board.title = title;
     board.owner = owner;
     board.save()
       .then(() => {
         response.status(201).json(board);
       }, (err) => {
         response.status(500).json({
           message: err,
         });
       }).catch((error) => {
         response.status(500).json({
           message: error,
         });
       });
```

When you are working without a promise:
```
 const title = request.body.title;
 const owner = request.body.owner;

     if (!title || !owner) {
      return response.status(400).json({
        message: 'Your board does not have a title, please enter a board title ',
       });
     }
     const board = new Boards();
     board.title = title;
     board.owner = owner;
     board.save(() => {
       response.status(201).json({
         message: 'The request to create a new board was successfully', board
       });
     });
```
