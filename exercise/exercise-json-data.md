# JSON Data

There are two todo list in the json files : todo-1.json and todo-2.json

```text
[
  {
    "title":"Read chapter 1 ",
    "category":"Studying",
    "tag":"Parser, Data, CS101, CS",
    "completed":"true"
  },
  {
    "title":"Chapter 1 homework",
    "category":"Homework",
    "tag":"Data, Array, CS101, CS",
    "completed":"true"  
  },
  {
    "title":"Lab 101",
    "category":"Lab",
    "tag":"Array, Sorting, Parser, CS101, CS",
    "completed":"false"
  },
  {
    "title":"Breaststroke paractice",
    "category":"Swimming",
    "tag":"Swimming, Breaststroke, Sports",
    "completed":"true"
  },
  {
    "title":"Shop tennis racket",
    "category":"Tennis",
    "tag":"Tennis, Sports",
    "completed":"false"
  }
]
```

```text
[
  {
    "title":"Breaststroke kicking practice",
    "category":"Swimming",
    "tag":"Breaststroke, Swimming",
    "completed":"false"
  },
  {
    "title":"Computer Lab",
    "category":"Lab",
    "tag":"Computer, Lab, CS",
    "completed":"false"  
  },
  {
    "title":"Data Structure",
    "category":"Homework",
    "tag":"Data, CS201, CS",
    "completed":"false"
  },
  {
    "title":"Automata theory",
    "category":"Studying",
    "tag":"Automata, CS301, CS",
    "completed":"false"
  },
  {
    "title":"Tennis team game",
    "category":"Tennis",
    "tag":"Tennis, Game, Sports",
    "completed":"false"
  },
  {
    "title":"Coach Tennis",
    "category":"Tennis",
    "tag":"Tennis, Sports",
    "completed":"false"
  }  
]
```

And, with the following category in tree structure :

```text
[
  {
    "title":"Studying"
  },
  {
    "title":"Reading",
    "parent":"Studying"
  },
  {
    "title":"Lab",
    "parent":"Studying"
  },
  {
    "title":"Homework",
    "parent":"Studying"
  },
  {
    "title":"Group Studing",
    "parent":"Studying"
  },
  {
    "title":"Sports",
  },
  {
    "title":"Swimming",
    "parent":"Sports"
  },
  {
    "title":"Tennis",
    "parent":"Sports"
  }
]
```

1. List all todos \(in both json files\) in title order.
2. List all todos under category structure. 

    Also, in the each node, all children list in title order.

3. Search a particular tag and list all todo in the title order.

