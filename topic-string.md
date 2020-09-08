# String

Some of the basic string methods you must famililar with in your programming languages.

* Regular Expression
  * For pattern match.
  * String replacement.
  * For example : remove line break.
  
* Position, Index, Search 
  * Beginning of character.
  * String replace without regular expression.
  * For example :
  ```
  var fruitString = "Apple, Banana,Orange";
  if (fruitString.indexOf("Apple") > 0) {
    console.log("Apple is here");
  }
  ```
  or 
  ```
  var fruitString = "Apple, Banana,Orange";
  if (fruitString.indexOf("Apple") != -1) {
    console.log("Apple is here");
  }

* Comparison
  * equal
  * In general, that is ==.
  * object comparison, In java, use like
    ```
    a.equals(b)
    ```
    
* Length
  * Declaration blank or null :
    Be careful to declare a string.
    In C, string is immutable.
    But in the modern languages, java, js, python, go, string can be changed.
  * Is String empty?
    How to check if string is empty?
    Use length, but just need to make sure not null first.
    ```
    if (str != null && str.length > 0) {
    
    }
    ```

* Token Parser
  * Repetitive pattern match
  * Parse to array
  * For example: parse the following string to array:
    ```
    var fruitString = "Apple, Banana,Orange";
    var fruits = fruitString.split(",");
    ```

* Convert
  * String to Number
  * In the web page data submission, those data are just string. Any particular ID need to convert to integer or long.
  * For example :
    ``` js
    var a = "123";
    var i = parseInt(a, 10);
    ```
    
    ``` python
    a = "123"
    i = int(a)
    ```

* Join string
  * Join string array in a string.
  * It's considering to be better performance than string appending.
  * For example :
  ```
    var fruits = ["Apple", "Banana", "Orange"];
    var fruitString = fruits.join(", ");
  
  ```
  * String appending is not the best practice.
  ```
    var fruits = ["Apple", "Banana", "Orange"];
    var fruitString = "";
    furitString += fruits[0] + ", ";
    furitString += fruits[1] + ", ";
    furitString += fruits[2] + ", ";
  ```
  
* Remove extra spacing
  * Remove leading spacing.
  * Remove trailing spacing".
  * For example :
  ```
    var name = "  John Doe ";
    name = name.trim();
  
  ```
  
* To uppercase, lowercase.
  * Most use in case insensitive search pattern match and case insensitive search order.