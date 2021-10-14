exports.handler = async function (event, context) {
	// your server-side functionality
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: "Go Serverless v1.0! Your function executed successfully!",
			input: event,
		}),
	};
};
