const express = require('express');
const graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
	type Query {
		hello: String
		persons: [Person]
	}
	type Person {
		name: String
		age: Int
	}
`);

var root = { 
	hello: () => 'Hello World!' ,
	persons: (args, context, info) => {
		console.log(context);
		console.log(args);
		const {name,age}=args;
		return [
			{name:"kim", age: 20},
			{name:"kwon", age: 25},
		];
	}
};
const app = express();
const session = {id: "1001", expires: 20000};
app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	context: session,
	graphiql: true,
}));
app.listen(3001, () => console.log('Now browse to 3001/graphql'));
