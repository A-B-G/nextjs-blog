---
title: 'TypeScript Basics'
date: '2022-02-01'
---

TypeScript is a superset of JavaScript--it adds rules about how different kinds of values can be used.

TypeScript is helpful for:
- **static checking:** detecting errors in code before it is run
- **static type checking:** determining what an error is and is not depending on the kinds of values operated on

TypeScript `types` can be built 2 ways:
1. Interfaces
2. Types

The syntax for an **interface declaration** uses the keyword "interface" followed by the name of the type. Inside curly braces, the name of the type(s) and its value(s) are provided as properties in the form of key-value pairs. For example:

```
interface User {
    name: string;
    id: number;
}
```

The syntax for a type alias is almost identical to the syntax for an interface declaration. The keyword "type" is used instead of "interface" and an assignment operator is added after the type alias name:

```
type Point = {
    name: string;
    id: number
}
```