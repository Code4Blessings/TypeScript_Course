# TypeScript_Course
Inspired by the Udemy Course by Colte Steele

## Type Annotation Basics

### Variable Types
 - Assigning a basic type to a variable is easy just add **:Type** after the variable name.
 (Also called **'Type Annotation'**) 

```
const myAwesomeVariable: string = 'So Awesome'
```

### Numbers
- Some programming languages have many number types - **floats, int**, etc., In TypeScript (as well as JS) numbers are just numbers.
```
let myNumber: number = 42
```

### Boolean
```
let isGameOver: boolean = false;
```

## Type Inference
- Refers to the TypeScript compiler's ability to infer types from certain values in your code.
- TypeScript can remember a value's type even if you didn't provide a type annotation, and it will enforce that type moving forward.

## Any
- '**any**' is an escape hatch! It turns off type checking for this variable so you can do your thing.

Note: It sort of defeats the purpose of TS and types, so use it sparingly
