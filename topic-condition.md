# Condition

In this section, all the methodologies are just for best practice. That's for most easy to read and maintain.

## Straight forward logic
- Take care the true condition first
	``` javascript
	if (flag) {
	
	} else {
	
	}
	```
	not
	```
	if (!flag) {
	
	} else {
	
	}

	```
	Also, remember to have curly brace, don't omit them even only line of statement.
	
- Use straight logic
	``` python
	if x is not None:
	```
	not
	```
	if not x is None:
	```
	All the code fragments are logic correctly, but please approach best practice.

- Ternary operator
	
	Use it when it's short and simple; otherwise, use if else.
	``` javascript
	var a = flag ? b : "";
	```

## Multiple condition
- Multiple or/not
	- For easy to read, bread down multiple lines
		``` javascript
		if (
			myObjects.length > 0 &&
			flag == true
		) {
		
		}
		```
	- Unless, they are very short
		``` javascript
		if (a > 0 && b > 0) {
		
		}
		```

- Multiple functions
	``` javascript
	if (
		isNew(myObjects) &&
		containsNumber(myObjects)
	) {
	
	}
	```
	In the example, if `isNew()` is false, 
	then `containsNumber()` won't be executed.
	
	You don't do the following code; unless `isNumber` is going to use again.
	``` javascript
	var isNewObjs = isNew(myObjects);
	var isNumber = containsNumber(myObjects);
	if (isNewObjs && isNumber) {
	
	}
	```
	
