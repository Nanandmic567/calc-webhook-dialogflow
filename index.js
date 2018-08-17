const functions = require('firebase-functions');
const App = require('actions-on-google').DialogflowApp;


exports.helloWorld = functions.https.onRequest((request,response) => {

	let app = new App({request, response});

	function addNumbers(app)
	{
		let firstNumber = parseInt(app.getArgument('firstNumber'));
		let secondNumber = parseInt(app.getArgument('secondNumber'));
		app.tell('Answer: ' + (firstNumber + secondNumber));
	}


	function addMultiply(app)
	{
		let firstNumber = parseInt(app.getArgument('firstNumber'));
		let secondNumber = parseInt(app.getArgument('secondNumber'));
		app.tell('Answer: ' + (firstNumber * secondNumber));
	}

	function calculating_average(app)
	{
		let var1 = parseInt(app.getArgument('var1'));
		let var2 = parseInt(app.getArgument('var2'));
		let var3 = parseInt(app.getArgument('var3'));

		let average = ((var1 + var2 + var3) / 3);

		if (average >= 12) {
			app.tell('APPROVED\n\nYour avgrage is approved as: ' + average.toFixed(2));
		}else{
			app.tell('DISAPPROVED\n\nYour avgrage is not approved as: ' + average.toFixed(2));
		}


	}

	const actionMap = new Map();
	actionMap.set('add', addNumbers);
	actionMap.set('multiply', addMultiply);
	actionMap.set('calculating_average', calculating_average);


	app.handleRequest(actionMap);
});
