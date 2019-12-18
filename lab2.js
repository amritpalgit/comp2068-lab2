const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
var express = require('express');
var router = express.Router();



  
  
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  var queryString = new String(req.url);
  var keyValuePairs = queryString.split("&"); //  query for sapration value

  // DataValue[0] define method
  var action = keyValuePairs[0].replace("/","").split("=")[1]; // fetching method data from URL
  var fnumber = new String(keyValuePairs[1]).split("=")[1] || "0"; // fetching first value
  var snumber = new String(keyValuePairs[2]).split("=")[1] || "0"; // fetching second value
  // calling the method for result
  var actionrslt = calculate(action, Number(fnumber) , Number(snumber));
  // HTML for display result to user
 
 var htmlContent = "<html><b>(" + fnumber + " " + action + " " + snumber + ") = <b>" + actionrslt + "</b></html>";

  // write the response
  res.end(htmlContent);
  
  
  

});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




function calculate(operation, number1, number2)
{
 var result = 0;

	if(operation == "add")
	{
		result = number1 + number2;
	}
	else
	{
		if(operation == "subtract")
		{
			result = number1 - number2;
		}
		else
		{
			if(operation == "multiply")
			{
				result = number1 * number2;
			}
			else
			{
				if(operation == "divide" && number2 != 0)
				{
					result = number1 / number2;
				}
				else
				{
					result="Method value Wrong";
				}
			}
		}
	}
 

 

 

 return result;
}
