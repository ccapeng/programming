# Parsig Practice

1. 
	Write a simple string parser
	In String 
	```
	https://mydomain/todo?tempId=-1&title=lunch
	```
	replace `tempId=-1` with `id=101`.
		
		a. Write your own parser.
		b. Use regular expression.
		c. Use string replace method

2. 
	Write a url query string parser and save a json file.
	For example, query string 
	```
	https://www.google.com/search?client=firefox-b-1-d&q=curricular
	```
	Output as 
	```
	{
		"client":"firefox-b-1-d",
		"q":"curricular"
	}
	```
		
	a. Write your own string parser.
	b. Use regular exppression.

3. 
	html variable parser.
	In html file,
	```
	<html>
	<head>
	<title>Hellow World</title>
	</head>
	<body>
		Hi {invitee}, <br><br>
		Please come to {event} at {time}.<br><br>
		From {name}
	</body>
	</html>
	```
	Read a data from a json file (data.json)
	```
	{
		"invitee":"John",
		"event":"library",
		"time":"Tomorrow 11 AM",
		"name":"Alex"
	}
	```

## How to submit?
1. Write util API library for all above parsers.
2. All API library must come with documentation.
3. Then write application to test those api library.
4. Save to git :

	a. Create an account in github.
	b. Create your local project. 

		* Must have readme file README .md
			That is markdown for what is it and how to do.
			
		* All data (json files) must in data folder.