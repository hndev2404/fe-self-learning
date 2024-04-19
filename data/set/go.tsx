import { ICard } from "@/interfaces/flashcard";

const cards: ICard[] = [
    {
        id: 0,
        deskId: 1,
        type: 'basic',
        data: {
            question: 'Difference between := and = operators in Go',
            answer: 'In Go, `:=` is for declaration AND assignment, whereas `=` is for assignment only.\nFor example, `var foo int = 10` is the same as `foo := 10`.',
        }
    },
    {
        id: 1,
        deskId: 1,
        type: 'basic',
        data: {
            question: 'What is Go?',
            answer: `
Go is an open source programming language which makes it easy to build **simple**, **reliable** and **efficient** software. 

Programs are constructed from **packages**, whose properties allow efficient management of dependencies.

***Key Objective***
- **Simplicity**: Go was designed with a minimalistic approach to minimize complexity.
- **Efficiency**: It was crucial for Go to be efficient and expressive in both time and space.
- **Safety**: The creators aimed to make Go a safe, statically-typed language: \`go routines\` and \`channels\`
- **Concurrent Programming**: Go’s design intends to make concurrent programming pragmatic and straigntforward.

***Key Features***
- **Open Source**
- **Statically Typed**: Like Java and C++, Go requires you to specify types of variables and function return values explictly. These types are checked at compile-time for safety and accuracy.
- **Memory Management**: Go developers don’t have to deal with low-level memory operations like C/C++. Instead, Go uses a garbage collector to release memory from objects that aren’t in use.
- **Concurrent Programming**: Go directly supports concurrent operations through the use of goroutines and channels.
- **Portability**: Go was designed to be compatible with multiple systems and architectures.
- **Concise Error Handling**: Go’s single error return value, supplemented by its \`errors\` package, makes error handling compact and straightforward.
- **GoDoc for Documentation**: GoDoc automates code documentation, enhancing code maintainability and developer collaboration.
- **Full Support for Unicode**: Go treats text as Unicode by default, ensuring internationalization and text processing are seamless

            `,
        }
    },
    {
        id: 2,
        deskId: 1,
        categories: "Common",
        type: 'basic',
        data: {
            question: 'What are the differences between GO and other programming languages?',
            answer: `
Go emphasizes **simplicity** and **efficient concurrency**, and its syntax is similar to C. Unlike some other languages, it has a **garbage collector** and **a built-in testing framework**.
            `,
        }
    },
    {
        id: 3,
        deskId: 1,
        categories: "Function",
        type: 'basic',
        data: {
            question: 'Explain the purpose of `defer` in Go',
            answer: `
Go has a special statement called \`defer\` that schedules a function call to be run after the function completes.

**defer** is often used when resources need to be freed in some way. For example, when we open a file, we need to make sure to close it later. With defer:

\`\`\`go
f, _ := os.Open(filename)
defer f.close()
\`\`\`

This has three advantages:
- It keeps our Close all near our Open call so it's easier to understand.
- If our function had multiple return statements, Close will happen before both of them.
- Deferred functions are run even if a runtime \`panic\` occurs
            `,
        }
    },
    {
        id: 4,
        deskId: 1,
        categories: "Function",
        type: 'basic',
        data: {
            question: 'Explain the purpose of `panic` & `recover` in Go',
            answer: `
The \`panic\` function to cause a runtime error.
We can handle a runtime panic with the built-in \`recover\` function. recover stops the \`panic\` and returns the value that was passed to the call to panic.


**Notes**:
- The panic **immediately** stops execution of the function.

\`\`\`go
func main() {
    panic("PANIC")      // Immediately STOPs main function
    str := recover()    // this will never happen
    fmt.Println(str)
}
\`\`\`
            `,
        }
    },
    {
        id: 5,
        deskId: 1,
        categories: "Common",
        type: 'basic',
        data: {
            question: 'What are the advantages/disadvantages of Go?',
            answer: `
**Advantages**:
- Go compiles very quickly
- Go supports concurrency
- Go has garbage collection

**Disadvantages**:

            `,
        }
    },

    {
        id: 6,
        deskId: 1,
        categories: "Common",
        type: 'basic',
        data: {
            question: 'What is Blank Identifier(underscore) in Golang?',
            answer: `
The Go compiler won't allow you to create variables that you never use.

**The blank identifier** is used to tell the compiler that we don't need this.

_(underscore) in Golang is known as the Blank Identifier. 

Identifiers are the user-defined name of the program components used for the identification purpose. 

Golang has a special feature to define and use the unused variable using Blank Identifier. Unused variables are those variables that are defined by the user throughout the program but he/she never makes use of these variables. These variables make the program almost unreadable. As you know, Golang is a more concise and readable programming language so it doesn’t allow the programmer to define an unused variable if you do such, then the compiler will throw an error. 

The real use of Blank Identifier comes when a function returns multiple values, but we need only a few values and want to discard some values. Basically, it tells the compiler that this variable is not needed and ignored it without any error. It hides the variable’s values and makes the program readable. So whenever you will assign a value to Blank Identifier it becomes unusable.
            `,
        }
    },

    {
        id: 7,
        deskId: 1,
        categories: "Datatypes",
        type: 'basic',
        data: {
            question: 'Explain the basic data types in Go?',
            answer: `
Go provides a robust set of data types, addressing various data needs efficiently.

Primary Data Types

- Numberic Type: Integers, Floating-Points, Complex
- String: Unicode charactors encoded in UTF-8.
- Boolean: Represents True/False states.

Composite Data Types

- Arrays: Fixed-size sequences of elements of the same type.
- Slices: Similar to arrays but with dynamic sizing.
- Maps: Key-value
- Structs: Encapsulation of various data types inside a single entity
- Pointers: Holds the memory address of a value.

Derived/Special Types

- Constains: Immutable values known at compile time.
- Functions: First-class citizens, enabling higher-order functionality.
- Channels: Facilitates communication among goroutines in concurrent programs.
- Interfaces: Defines behavior by prescribing a set of method signatures.
- Errors: A built-in interface type to represent without direct inheritance or subclassing.
- User-Defined Types:
    - Named Types: Enhanced readability and type compatibility through custom, user-defined type names.
    - Underlying Types: Primarily one of the built-in types.
`,
        }
    },

    {
        id: 8,
        deskId: 1,
        categories: "Datatypes",
        type: 'basic',
        data: {
            question: 'What is the zero value of a variable in Go?',
            answer: `
In Go, variables automatically initialize to their zero values if not explicity set.

**Basic Types**

- **Bool**: \`false\`
- **Numeric Types** (int, float, and their variations): \`0\`
- **Complex**: \`0 + 0i\`
- **String**: \`""\`

**Slices and Maps**

- **Slice**: \`nil\`
- **Map**: \`nil\`

**Pointers and Interfaces**

- **Pointer**: \`nil\`
- **Interface**: \`nil\`
`,
        }
    },

    {
        id: 9,
        deskId: 1,
        categories: "Datatypes",
        type: 'basic',
        data: {
            question: 'Expain Numbers in Go',
            answer: `
Go has several difference types to represent numbers. Generally, we split numbers into two difference kinds: integers and floating-point number.

### Integers

Go’s integer types are \`unit8\` (\`byte\`), \`unit16\`, \`unit32\` (\`rune\`), \`uint64\`, \`int8\`, \`int16\`, \`int32\`, and \`int64\`.

\`uint\` means **“unsigned integer”**. Unsigned integers only contain positive numbers (or zero).

There are also three machine dependent integer types: \`uint\`, \`int\`, and \`uintptr\`. They are machine dependent because their size depends on the type of architecture you are using.

### Floating-Point Numbers

Floating-point numbers are numbers that contain a decimal component.

**Notes:**

- Floating-point numbers are inexact. Occasionally it is not posible to represent a number. For example, computing \`1.01\` — \`0,99\` using floating-point arithmetic results in \`0,02000000000000000018\` — a number extremely close to what we would expect, but not exactly the same.
- Like integers, floating-point numbers have a certain size (32 bit or 64 bit). Using a larger-sized floating-point number increases its precision.
- In addition to numbers, there are several other values that can be presented: “not a number” (NaN, for things like 0/0) and positive and negative infinity.

Go has two floating-point types: \`float32\` and \`float64\`. It also has two additional types for representing comlex numbers: \`complex64\` and \`complex128\`. Generally, we should stick with \`float64\` when working with floating-point numbers.

Go supports the following standard arithmetic operators:

- \`+\` Addition
- \`-\` Subtraction
- \`*\` Multiplication
- \`\\\` Division
- \`%\` Remainder
`,
        }
    },

    {
        id: 10,
        deskId: 1,
        categories: "Datatypes",
        type: 'basic',
        data: {
            question: 'What difference between double quotes "" and backticks `` in string?',
            answer: `
String literals can be careted using double quotes or backticks.

The difference between these is that double-quoted string cannot contain **newlines** and they allow special escape sequences (\`\\n\`, \`\\t\`).
`,
        }
    },

];

const backend = {
    desk: {
        id: 1,
        name: 'Golang',
    },
    cards
};

export default backend;
