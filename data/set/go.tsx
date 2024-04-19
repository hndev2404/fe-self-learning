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

    {
        id: 11,
        deskId: 1,
        categories: "Workspace",
        type: 'basic',
        data: {
            question: 'Explain packages in Go program?',
            answer: `
Every Go program is made up of packages. The program starts running in package main.
`,
        }
    },

    {
        id: 12,
        deskId: 1,
        categories: "Workspace",
        type: 'basic',
        data: {
            question: 'Golang Workspace Architecture.',
            answer: `
The Go Language uses a simplified workspace architecture that sets it apart from many other programming languages.

The workspace essentially consists of three directories:
- \`src\` This is where the source code resides.
- \`pkg\` The pkg directory houses the package objects created during the build process. This segregation helps establish a clear distinction between the code the build output.
- \`bin\` The directory where the compiled application will be located, once it’s been build.`,
        }
    },

    {
        id: 13,
        deskId: 1,
        categories: "Workspace",
        type: 'basic',
        data: {
            question: 'Explain workspace in Go?',
            answer: `
Inside a workspace Go code must be kept. A workspace is a directory hierarchy with three directories at its root.

The Go Language uses a simplified workspace architecture that sets it apart from many other programming languages.

The workspace essentially consists of three directories:

- \`src\` contians Go source files organized into packages
- \`pkg\` The pkg directory houses the package objects created during the build process. This segregation helps establish a clear distinction between the code the build output.
- \`bin\` The directory where the compiled application will be located, once it’s been build.
`,
        }
    },

    {
        id: 14,
        deskId: 1,
        categories: "Workspace",
        type: 'basic',
        data: {
            question: 'What is $GOPATH?',
            answer: `
The \`$GOPATH\` environment variable determines the location of the workspace. It is the only environment variable that you have to set when developing Go code.

The \`$GOPATH\` environment variable plays a pivotal role. It is the starting point for finding Go code, and all the mentioned  

Under the \`$GOPATH/src\` directory, the Go tool expects to see your application source packages.

`,
        }
    },

    {
        id: 15,
        deskId: 1,
        categories: "Slices & Arrays",
        type: 'basic',
        data: {
            question: 'What are slices in Go, and how do they differ form arrays?',
            answer: `
Arrays have **a fixed size** and cannot be resized at runtime, while slices are dynamic and can be resized as needed.

Slices are **built on top** of arrays and provide a more convenient interface for working with collections of data.

Slices in Go are **dynamic**, **flexible** and **reference-based data structures** that enable efficient list management. 
They are built on top of arrays and offer features such as automatic resizing and ease of use.

Slice Characteristics:
- **Dynamic Sizing**
- **Reference Semantics**: Underneath, slices reference an array, meaning any modifications to the slice apply to the referred array.
`,
        }
    },

    {
        id: 16,
        deskId: 1,
        categories: "Slices & Arrays",
        type: 'basic',
        data: {
            question: 'What mean “Go’s arrays are values” ?',
            answer: `
**An array variable** denotes the entire array; it is **not** a pointer to **the first array element** (as would be the case in C). 
This means that when you assign or pass around an array value you will make a **copy** of its contents. 

To avoid the copy you could pass a pointer to the array, but then that’s a pointer to an array, not an array.

`,
        }
    },

    {
        id: 17,
        deskId: 1,
        categories: "Slices & Arrays",
        type: 'basic',
        data: {
            question: 'What is difference between "length" and "capaity" in slices?',
            answer: `
The \`length\` is the number of elements refered to by the slice.
The \`capacity\` is the number of elements in the underlying array.
`,
        }
    },

    {
        id: 18,
        deskId: 1,
        categories: "Command",
        type: 'basic',
        data: {
            question: '`go get` command',
            answer: `
This command is a critical tool for Golang developers. You can use it to fetch and manage dependencies from remote repositories like GitHub. 
For instance, if you run go get \`github.com/gorilla/mux\`, it will fetch the mux package from GitHub and save it in your \`$GOPATH\`.

Following the Go community’s best practices, ensure that you have \`go.mod\` and \`go.sum\` files at the root of your project.
The \`go.mod\` file maintains module registration and dependency requirements, while the \`go.sum\` file records the version of the dependencies.
`,
        }
    },

    {
        id: 19,
        deskId: 1,
        categories: "Garbage collector",
        type: 'basic',
        data: {
            question: 'Explain how to garbage collector works in Go',
            answer: `
Go's garbage collector automatically frees memory that is no longer needed by the program.

It uses **a mark-and-sweep algorithm** to find and remove unused memory.
`,
        }
    },

    {
        id: 20,
        deskId: 1,
        categories: "Testing",
        type: 'basic',
        data: {
            question: 'How you can do testing in GO?',
            answer: `
It has a lightweight testing framework consists fo the \`go test\` command and the **testing** package.

To write a test you have to create a file with a name ending in \`_testing\`.

Go which contains functions named TestXXX with signature \`func (t *testing T)\` .

The test framwork runs each such function.
`,
        }
    },

    {
        id: 21,
        deskId: 1,
        categories: "Error",
        type: 'basic',
        data: {
            question: 'Error Handling',
            answer: `
Go has a unique approach to error handling compared to other languages. It uses explicit \`error\` return types.
This design choice reduces ambiguity about functions that can potentially fail and obviates the need for try-catch blocks.

The Go philosophy stresses **transparency** and **early reporting of issues**.

In Go, errors are typically handled using the error interface.
Functions that can return errors usually return **a tuple of the result and an error value**.
Developers can then check the error value to see if an error occurred and handle it appropriately.
`,
        }
    },

    {
        id: 22,
        deskId: 1,
        categories: "Variable/Scope",
        type: 'basic',
        data: {
            question: 'Scope',
            answer: `
According to the language specification, **"Go is lexically scoped using blocks."** 

Basically, this means that the variable exists within the nearest curly braces ({}), or block, including any nested curly braces (blocks), but not outside of them. 
`,
        }
    },

    {
        id: 23,
        deskId: 1,
        categories: "Array, Slices, and Map",
        type: 'basic',
        data: {
            question: 'Array',
            answer: `
An array is a numbered sequence of elements of a single type with a fixed length
`,
        }
    },

    {
        id: 24,
        deskId: 1,
        categories: "Array, Slices, and Map",
        type: 'basic',
        data: {
            question: 'Slices',
            answer: `
A slice is a segment of an array. Like arrays, slices are indexable and have a length.
Unlike arrays, this length is allowed to change.

In addition to the indexing operator, Go includes two built-in functions to assist with slices: \`append\` and \`copy\`.

### append

\`append\` adds elements onto the end of a slice. If there's sufficient capacity in the underlying arrray, the element is placed after the last element adn the length is incremented.

However, if there is not sufficient capacity, a new array is created, all of the existing elements are copied over, the new element is added onto the end, and the new slice is returned.

### copy
copy takes two arguments: \`dst\` and \`src\`. All of the entries in \`src\` are copied into \`dst\` overwriting whatever is there.
If the lengths of the two slices are not the same, the smaller of the two will be used.
`,
        }
    },

    {
        id: 25,
        deskId: 1,
        categories: "Array, Slices, and Map",
        type: 'basic',
        data: {
            question: 'Maps',
            answer: `
A *map* is an unordered collection of **key-value pairs** (maps are also sometimes called associative arrays, hash tables, or dictionaries).
Maps are used to look up a value by its associated key.
`,
        }
    },

    {
        id: 26,
        deskId: 1,
        categories: "Functions",
        type: 'basic',
        data: {
            question: 'Variadic Functions',
            answer: `
There is a special form available for the last parameter in a Go functions:

\`\`\`go
func add(args ...int) int {
    total := 0
    for _, v := range args {
        total += v
    }
    return total
}

func main() {
    fmt.Println(add(1, 2, 3))
}
\`\`\`

IN this example, add is allowed to be called with multiple integers. This is known as a *variadic parameter*.

By using an ellipsis (...) before the type name of the last parameter, you can indicate that it takes zero or more of those parameters. In this case, we take zero or more ints.

We invoke the function like any other function except we can pass as many ints as we want.

We can also pass a slice of ints by following the slice with an ellipsis:
\`\`\`go
func main() {
    sx := []int{1, 2, 3}
    fmt.Println(add(xs...))
}
\`\`\`

`,
        }
    },

    {
        id: 27,
        deskId: 1,
        categories: "Functions",
        type: 'basic',
        data: {
            question: 'Closure',
            answer: `
It is possible to create functions inside of functions.

\`\`\`go
func main() {
    add := func(x, y int) int {
        return x + y
    }
    fmt.Println(add(1, 1))
}
\`\`\`

When you create a local function like this, it also has access to other local variables.

One way to use closure is by writing a function that returns another function, which when called, can generate a sequence of numbers.

\`\`\`go
func makeEvenGenerator() func() uint {
    i := uint(0)
    return func() (ret uint) {
        ret = i
        i += 2
        return
    }

    func main() {
        nextEven := makeEvenGenerator()
        fmt.Println(nextEven()) // 0
        fmt.Println(nextEven()) // 2
        fmt.Println(nextEven()) // 4
    }
}
\`\`\`

**makeEvenGenerator** returns a function that generates even numbers. 
Each time it's called, it adds 2 to the local i variable, which - unlike normal local variables - persists between calles.
`,
        }
    },

    {
        id: 28,
        deskId: 1,
        categories: "Concurrency",
        type: 'basic',
        data: {
            question: 'Concurrency',
            answer: `
Concurrency is the ability to execute more than one program or task simultaneously.

Go has rich support for concurrency using \`goroutines\` and \`channels\`.

## Goroutines

A goroutine is a function that is capable of running concurrently with other functions. To create a goroutine, we use the keyword \`go\` foll owed by a function invocation.

## Channels

Channels provide a way for two goroutines to communicate with each other and synchronize their execution.

A channel type is represented with the keyword chan followed by the type of the things that are passed on the channel.

The left arrow operator \`<-\` is used to send and receive messages on the channel.

### Channel Direction

We can specify a direction on a channel type, thus restricting it to either sending or receiving.

\`\`\`go
func pinger(c chan <- string) // Only receiving
func printer(c <- chan string) // Only sending
\`\`\`

A channel that doesn’t have these restrictions is known as bidirectional. 
A bidirectional channel can be passed to a function that takes send-only or receive-only channels, but the reverse is not true.

### Select

Go has a special statement called \`select\` that works like a \`switch\` but not for channels.
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
