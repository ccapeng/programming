# Looping

- for
	- for(), for item in items
	
- High order function
	- javascript  : filter(), foreach(), reduce(), map()
	- The difference between `for` loop and high order function.
		For the number calculation, they should be same.  
		But for the DOM manipulation, use high order function.  
		You need to understand javascript disclosure.

- while
	- By condition
	
	- Avoid to use while loop with terminal expression.
		``` javascript
		while (1) {
			if (...) {
				...
				break;
			} else {
				...
			}
		}
		```
		In the above code, you may pretty sure it will break out by inner condition.  
		But, it's risky if not thought completely.  
		
		So change code like this :
		``` javascript
		while (condition expression) {
			if (...) {
				...
			} else {
				...
			}
		}
		```
		If no good condition can be put into while, put a constrain number.

- Recursive
	- Just the same function again and again

- Generator

	- Reactive Programming
	
	- Python
	
	- Javascript
	
- List Comprehension for python

	- It's to encourage to use list comprehension instead of for loop.
		- `for` loop is just in general for all languages.
		- To be professional, you use it when doing python assessment.

	