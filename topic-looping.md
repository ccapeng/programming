# Looping

- for
	- for items    
		``` python
		for item in items
		```
		
		for with index
		``` javascript
		for (var i = 0; i < list.size; i++) {
		
		}
		```
		Make sure no index out of range error.
		
- High order function
	- javascript  : filter(), foreach(), reduce(), map()
		- Some of js high order functions can be hard to read.
		
	- The difference between `for` loop and high order function.
		For the number calculation, they should be same.  
		But for the DOM manipulation, use high order function.  
		You need to understand javascript closure.
	

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

- Infinite Loop  
	What cause infinite loop?
	- Bad logic in the recursion : for, while, recursion function call.  
		The code flow should be able to trace linear; therefore, it should be easy to find out what's going on.
		
	- Same page redirection.
		If you load a page and see the page loading again and again.  
		How to fix it? Just never redirect to self.
		
	- Clustering crash: In a clustering system, one server crash, then all traffic was bounced to next server. And another server crash, traffic bouncing again. Meanwhile, the early on crashed server was restarted. Eventual to the point of whole system failure.  
		How to fix it?  
		- Make sure system have good space : enough storage and memory.
		- Next check the log to see where is the chocking point. This is hard nut to crack.

- Dynamic Programming
	- Actually, this is an advanced topic.
	- In order to get better performance, simplify recursive by solving sub problem first.
	- [Knapsack challenge](topic-dynamic-programming.md)
	- Closure or for loop?
		- In Python : 
			Sample : [fib.py](fib.py)
		- In node.js : 
			Sample : [fib.js](fib.js)
		- Both js/python samples are in the same logic flow.  
			In here, `loop` has better performance than `closure`.  
		- The `loop` in here is a dynamic programming memorization implementation.  
			And, it is to be more efficient.
		- However, in every `closure` a private scope of states are involved.
			And, it is little bit of complication.