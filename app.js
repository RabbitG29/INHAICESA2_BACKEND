const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

const {schema, root} = require('./graphql/schema');

app.get('/',function(req, res, next) {
	res.send("hi");
});

app.use('/graphql',graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}));
app.listen(3001, () => console.log('Server running'));
