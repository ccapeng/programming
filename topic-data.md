# Data

In the article, list all the topics, items, and terms related to data.
Please understand what are they and how to apply.

## Data Structure
- Fixed size array
  - Immutable
	- Tuples
- Dynamic size array
	- Call by reference or call by value
	
		``` javascript
		var fruits = ["Apple", "Banana", "Orange"];
		for (var i = 0; i < fruits.length; i++) {
			var fruit = fruits[i];
			if (fruit === "Banana") {
				fruit = "Peach"
			}
		}
		console.log("what are all the fruits?", fruits);
		
		```
		Compare with
		``` javascript
		var fruits = ["Apple", "Banana", "Orange"];
		for (var i = 0; i < fruits.length; i++) {
			var fruit = fruits[i];
			if (fruit === "Banana") {
				fruits[i] = "Peach"
			}
		}
		console.log("what are all the fruits?", fruits);
		
		```

- Hash, Hashtable, Set, Dict

- HasSet, OrdererDict
  Ordering hash

- Object
  
## Data Model

- Database form normalization
  - Understand database key concept.
  - Understand foreign key
  - Understand all kind of join.
  
## Data Format

- Format comparison
  Understand the following data formats :
  - XML
		- With schema, XML is strong type data. Good for enterprise.
		- It is getting legacy due to its verbose.
  - JSON
	- YAML
  - Properties
		- Java build data function.

- Data Validation

  - IDE data formation validation
    - Notepad++ : it's handy to data format. Only in windows.
    
  - Online validation
    - josn
    - xml
  - Schema
    - xsd for xml
  - Lint
    
## Data I/O

- Serialization / Deserialization

- Data Streaming
	- Kafka

## Applicaton

- Database
  Relationship database, NOSQL.

- Configuration
  Application configuration is kind of data structure.
  Kubernets load configuration from yaml file
  
- Application Data
  - Swagger as json/yaml

## State

- State machine
- web client side framework : react

## Virtual grouping
- Namespace
- Tag
- Context
