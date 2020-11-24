# Dynamic Programming

## Knapsack

* Inspired by
	* [https://www.byte-by-byte.com/01knapsack/](https://www.byte-by-byte.com/01knapsack/)
	* [youtube video](https://www.youtube.com/watch?v=YRBON9sIZ2Y&feature=emb_logo)
	
* Let's further illustrate the tabulation approach.
	
	``` javascript
	let items = [
		{weight: 1, value: 6},
		{weight: 2, value: 10},
		{weight: 3, value: 12}
	];
	let maxWeight = 5;
	let result = knapsack(items, maxWeight);
	console.log(result); //result is 22.
	```
	
	* Initialize the tabulation chart : (items + 1) * (weights + 1)  
		5 is max weight allowed.
		when move on to the next item, we still calculate the value from weight 1 to 5.  
		arr[items+1][weights+1] = arr[4][6]
    ```
               weights
               0    1    2    3    4    5
    i       ------------------------------
    t    0  |  0    0    0    0    0    0
    e    1  |  0    0    0    0    0    0
    m    2  |  0    6    0    0    0    0
    s    3  |  0    0    0    0    0    0
    ```
	* arr[1][1] : first item, if its weight is 1.  
			> The value of item 1 is 6, so arr[1][1] = 6  
		arr[1][2] : first item, if its weight is 2.  
			> Only weight 1 is allowed, so carry over value 6.  
		arr[1][3] : first item, if its weight is 3.  
			> Only weight 1 is allowed, so carry over value 6.  
		arr[1][4] : first item, if its weight is 4.  
			> Only weight 1 is allowed, so carry over value 6.  
	
    ```
               weights
               0    1    2    3    4    5
    i       ------------------------------
    t    0  |  0    0    0    0    0    0
    e    1  |  0    6    6    6    6    6
    m    2  |  0    0    0    0    0    0
    s    3  |  0    0    0    0    0    0
    ```
		
	* arr[2][1] : second item, and total collected weight is 1.  
			The weight of item 2 is 2, so use previous item value, arr[2][1] = arr[1][1] = 6  
    ```
               weights
               0    1    2    3    4    5
    i       ------------------------------
    t    0  |  0    0    0    0    0    0
    e    1  |  0    6    6    6    6    6
    m    2  |  0    6    0    0    0    0
    s    3  |  0    0    0    0    0    0
    ```
	* arr[2][2] : second item, and total collected weight is 2.  
			The weight of item 2 is 2, so value of arr[2][2] is larger number of  
				1. Upper row value at arr[1][2] = 6
				2. current value + arr[1][2 - (current weight)] = 10 + arr[1][2-2] = 10 + 0 = 10
				>>arr[2][2] = 10
    ```
               weights
               0    1    2    3    4    5
    i       ------------------------------
    t    0  |  0    0    0    0    0    0
    e    1  |  0    6    6    6    6    6
    m    2  |  0    6   10    0    0    0
    s    3  |  0    0    0    0    0    0
    ```
	* arr[2][3] : second item, and total collected weight is 3.  
		Pick one from  
		1. Previous row arr[1][3] = 6  
		2. current value + arr[1][3 - (current weight)] = 10 + arr[1][3-2] = 10 + 6 = 16  
		arr[2][3] = 16  
    ```
               weights
               0    1    2    3    4    5
    i       ------------------------------
    t    0  |  0    0    0    0    0    0
    e    1  |  0    6    6    6    6    6
    m    2  |  0    6   10   16    0    0
    s    3  |  0    0    0    0    0    0
    ```
	* arr[2][4] : Pick larger one from  
		1. Previous row arr[1][3]
		2. current value + arr[2][4 - (second item weight)] = 10 + arr[1][4-2]= 10 + arr[2][2]
    ```
								weights
               0    1    2    3    4    5
    i       ------------------------------
    t    0  |  0    0    0    0    0    0
    e    1  |  0    6    6    6    6    6
    m    2  |  0    6   10   16   16    0
    s    3  |  0    0    0    0    0    0
    ```
		
	* arr[2][5] : 
		Just same way as arr[2][4].
    ```
               weights
               0    1    2    3    4    5
    i       ------------------------------
    t    0  |  0    0    0    0    0    0
    e    1  |  0    6    6    6    6    6
    m    2  |  0    6   10   16   16   16
    s    3  |  0    0    0    0    0    0
    ```
		
	* arr[3][1] = arr[2][1] = 6  
		The third weight is 3 and can't fit.
    ```
               weights
               0    1    2    3    4    5
    i       ------------------------------
    t    0  |  0    0    0    0    0    0
    e    1  |  0    6    6    6    6    6
    m    2  |  0    6   10   16   16   16
    s    3  |  0    6    0    0    0    0
    ```
	* arr[3][2] = arr[2][2] = 10  
		The third weight is 3 and can't fit.
    ```
               weights
               0    1    2    3    4    5
    i       ------------------------------
    t    0  |  0    0    0    0    0    0
    e    1  |  0    6    6    6    6    6
    m    2  |  0    6   10   16   16   16
    s    3  |  0    6    0    0    0    0
    ```
	* arr[3][3], third item weight is 3. Then we have choose larger one  from  
		1. Previous row arr[2][3] = 16
		2. Current value + arr[2][3 - (third item weight)] = 10 + arr[2][0] = 10
		> arr[3][3] = 16
    ```
               weights
               0    1    2    3    4    5
    i       ------------------------------
    t    0  |  0    0    0    0    0    0
    e    1  |  0    6    6    6    6    6
    m    2  |  0    6   10   16   16   16
    s    3  |  0    6   16   16    0    0
    ```
		
	* arr[3][4]. Choose larger one from  
		1. Previous row arr[2][4] = 16
		2. third item value + arr[2][4 - (third item weight)] = 12 + arr[2][1] = 18
		> arr[3][4] = 18
    ```
               weights
               0    1    2    3    4    5
    i       ------------------------------
    t    0  |  0    0    0    0    0    0
    e    1  |  0    6    6    6    6    6
    m    2  |  0    6   10   16   16   16
    s    3  |  0    6   16   16   18    0
    ```
		
	* arr[3][5]. Choose larger one from  
		1. Previous row arr[2][5] = 16
		2. third item value + arr[2][5 - (third item weight)] = 12 + arr[2][2] = 22
		> arr[3][4] = 22
    ```
               weights
               0    1    2    3    4    5
    i       ------------------------------
    t    0  |  0    0    0    0    0    0
    e    1  |  0    6    6    6    6    6
    m    2  |  0    6   10   16   16   16
    s    3  |  0    6   16   16   18   22
    ```