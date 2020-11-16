# Coding

## Case style
- Consistency of case styles.
	- camelCase : `myFunction`
	- snake_case : `my_function`
	- PascalCase : `MyFunction`
- What is your team standard?
- For python, you must follow `PEP8`
- For GO, it's just built-in.
	
## Variable
- Variable name
	- Naming is important. Ambiguous naming is costly. Your may eventually confuse by them.
		
		For example:
		``` javascript
		var counter = 0;
		var processCounter = 0;
		```
		When you have complicated codes, it's easy to get confused with those two names.  
		
		You need to explicit what each variable for and to name them equivalent weight.
		For example:
		``` javascript
		var elementCounter = 0;
		var processCounter = 0;
		```
		
	- Make your model clean, give each model a distinguish name.
	
- Variable verbose
	For example :
	Good
	``` python
	key = "hello"
	value = "world"
	call(key, value)
	```
	- Clear variables definition.
	- Easy to understand and maintain. 
	- Easy to debug.
	
	Not wrong, but no Good.
	``` python
	call("hello", "value")
	```
	
- Variable i, j, k
	Only use in for loop counter.
	``` javascript
	for (var i=0; i <length; i++) {
	
	}
	```
	It's no good to be a variable which is implicit.
	``` javascript
	var i = "hello".indexOf("l");
	```
	Try this way :
	``` javascript
	var idx = "hello".indexOf("l");
	```
	
- Singular or Plural
	- When a variable is to hold a collection, then name it with Plural.
	
		For examples :
		
		1. Plural 
			``` javascript
			var books = getBooks()
			```
		
		2. List, Array
			``` javascript
			var bookList = getBookList()
			```
		
		It's to recommend to use 2.  
		- You want to get away `getBook()` and `getBooks()` typo.
		- You want to get away the irregular plural,  
			like `getCategory()` and `getCategories()`

- Global variable
	- Unless global constant, avoid to use that.
	- Be careful multiple threads.

- Typo
	- It's your foe and friend.
	- Turn on your spellChecker.
		- In VS code, [code spell checked](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) can check all words spelling, included camel case and snake case.
	- Read again after typing.
	- In the VSCode, just get used to intelliSense.  
		It's your code hint and pick the variable from the dropdown.  
		If not in there, you have typo.


## Block

- Code block
	
	- Easy to read
		- In a logic section, try to fit in a "visible" screen.
		- Then, you reduce to scroll your screen up/down.
		- You certainly want to focus to work on your code, not lost after jumping around.
	
	- Logical section
		- Avoid long codes in a function.
		- Break into small inner function or make logical section.
		- Space and line break : leave a space line in between logic section
	- For long function, please each argument to each line.
		For example
		```
		call(
			arg1,
			arg2,
			arg3,
			arg4, 
			...
	  )
		```
		not very good
		```
		call(arg1, arg2, arg3, arg4, ...)
		```
		- You read code from top down with logic connected, not scrolling left right to trace your logic.
		- The same rule apply to chaining function.
		
	- Function/Block
		- Define the variable in the beginning.
		- Return the result at the end.
		- Logic in the middle.
		
	- End of line
		- In the javascript, always put ";" at the end of line.
	
- Bracket match
	- {} () match
		Use 
		``` javascript
		if (a > b) {
			a++;
		}
		``` 
		
		Not in shorter
		```
		if (a > b) a++;
		```
		The paired bracket symbols may get your codes more verbose, but more organized.
		
- Indentation
	- Tab / Space Consistency
		- My favor : two spaces for a tab key.
		- I consider this is most important when coding.
	- For Python, follow PEP8 style guide
	- For IDE, please apply lint.
	
## Comment
- Function : write a description and explain all parameters. 
	- If you have very obvious name, still put one line function.
		In the future, you may ask for to delivery document, then you are happy to go.
- Inside code:  
	``` python
	def get_second_high_number(arr):
			''' Get the second large number '''
			# Sort unique list with set
			sorted_set = set(arr)
			# Convert set back to list
			sorted_arr = list(sorted_set)
			second_high_number = 0
			#check if array is more than one item
			if len(sorted_arr) > 1:
				# Get the last second number as second high number
				second_high_number = sorted_arr[-2]
			return second_high_number
	```
	Looking good or something wrong?  
	
	How about regroup comments like this
	``` python
	def get_second_high_number(arr):
			''' Get the second large number '''
			# Sort unique list with set(sorted_set)
			# Convert set back list (sorted_arr)
			# Get the last second number as second high number (second_high_number)
			sorted_set = set(arr)
			sorted_arr = list(sorted_set)
			second_high_number = 0
			if len(sorted_arr) > 1: #check if array is more than one item
				second_high_number = sorted_arr[-2]
			return second_high_number
	```
	Try to got logic connected.  
	
	Actually, it's not really to have such verbose comments if you can all of variable naming clear. 

- TODO:  
	Add `TODO` comment if need further polish.

## Brain Melting Coding
- With sugar syntax, condense multiple line codes into one line.
	- Make you look smart.
	- Keep your job secure?
	- Modern language trend?
	
- This is a balance between better coding and easy understanding.

- The Rule of thumbnail to use that:
	- Debugger can make a stop to this single value 
	- Necessary modern language trend.
	- Good code structure.
	
## Best practice

- Team's decision > Yours
- Follow the standard.
	- For example : use PEP8 style for python.