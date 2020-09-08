# Coding

## Coding style
- Naming convention
	- Consistency of camel case/snake case.
		- Camel case : `myFunction`
		- Snake case : `my_function`
	- What is your team standard?
	- For python, you must follow `PEP8`
	- For GO, it's just build-in.
	
## Variable
- Variable name
	- Naming is important. Ambiguous naming is costly. Your may eventually confuse by them.
		
		For example:
		```
		var counter = 0;
		var processCounter = 0;
		```
		When you have complicated codes, it's easy to be confused with those two names.
		
		You need to explicit what each variable for.
		For example:
		```
		var elementCounter = 0;
		var processCounter = 0;
		```
		
	- Make your model clean, give each model a distinguish name.
	
- Variable verbose
	For example :
	Good
	```
	key = "hello"
	value = "world"
	call(key, value)
	```
	No Good
	```
	call("hello", "value")
	```
	
- Variable i, j, k
	Only use in for loop counter.
	``` javascript
	for (var i=0; i <length; i++) {
	
	}
	```
	It's no good to be a variable inside a function.
	``` javascript
	var i = "hello".indexOf("l");
	```
	
- Singular or Plural
	- When a variable is to hold a collection, then name it with Plural.
	
		For examples :
		```
		var books = getBooks()
		```
		or name it as list or array
		```
		var bookList = getBookList()
		```

- Global variable
	- Unless global constant, avoid to use that.
	- Be careful multiple thread

- Typo
	- It's your foe and friend.
	- Turn on your spellChecker.
		- In VS code, [code spell checked](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) can check all words spelling, included camel case and snake case.
	- Read again after typing.
	
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
		You read code from top down with logic connected, not scrolling left right to trace your logic.
		
- Bracket match
	- {} () match
		
		Use 
		```
		if (a > b) {
			a++;
		}
		```
		not in shorter
		```
		if (a > b) a++;
		```
		The bracket symbols may get your codes more verbose, but more organized.
		
- Indentation
	- Tab / Space Consistency
		- My favor : two spaces for a tab key.
	- For Python, follow PEP8 style guide
	- For IDE, please apply lint.
	
## Brain Melting Coding
- With sugar syntax, condense multiple line codes into one line.
	- Make you look smart.
	- Keep your job secure?
	- Modern language trend?
	
- This is a balance between better coding and easy understanding.

- The Rule of thumbnail to use that:
	- As long as you can keep the code 
		- nature
		- short enough 
		- easy to read
	
	
## Best practice

- Team's decision > Yours
- Follow the standard.
	- For example : use PEP8 style for python.