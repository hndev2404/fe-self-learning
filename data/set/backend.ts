import { ICard } from "@/interfaces/flashcard";

const cards: ICard[] = [
    {
        id: 1,
        deskId: 0,
        type: 'typing',
        data: {
            question: 'What is Data Structure & Algorithm ?',
            answer: 'Cấu trúc dữ liệu là cách để tổ chức data trong máy tính để có thể sử dụng một cách hiệu quả. Thuật toán, là một tập hợp hữu hạn của các chỉ thị hay phương cách được định nghĩa rõ ràng cho việc hoàn tất một số sự việc từ một trạng thái ban đầu cho trước',
        }
    },
    {
        id: 2,
        deskId: 0,
        type: 'typing',
        data: {
            question: 'SOLID',
            answer: `SOLID is an acronym that stands for five principles of object-oriented programming and design. These principles were introduced by Robert C. Martin in the early 2000s and are considered fundamental guidelines for writing clean, maintainable, and scalable code. Here's what each letter stands for:

1. **S - Single Responsibility Principle (SRP):** A class should have only one reason to change. This means that a class should have only one responsibility or job, and if there are multiple reasons for it to change, it should be divided into multiple smaller classes, each with its own responsibility.

2. **O - Open/Closed Principle (OCP):** Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. This means that you should be able to extend the behavior of a module without modifying its source code.

3. **L - Liskov Substitution Principle (LSP):** Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program. In other words, derived classes should be substitutable for their base classes without changing the behavior of the program.

4. **I - Interface Segregation Principle (ISP):** Clients should not be forced to depend on interfaces they don't use. This principle states that interfaces should be specific to the needs of the clients that use them, and classes should not be forced to implement interfaces with methods they don't need.

5. **D - Dependency Inversion Principle (DIP):** High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions. This principle encourages decoupling between modules and promotes the use of interfaces or abstract classes to define dependencies.`,
        }
    },
    {
        id: 3,
        deskId: 0,
        type: 'typing',
        data: {
            question: 'Common Data Structure',
            answer: `Common data structures include:

1. **Arrays:** A collection of elements stored at contiguous memory locations. Arrays offer constant-time access to elements based on their index.

2. **Linked Lists:** Elements are stored in nodes where each node contains a data field and a reference (pointer) to the next node in the sequence.

3. **Stacks:** A Last In, First Out (LIFO) structure where elements are inserted and removed from the same end, typically referred to as the "top".

4. **Queues:** A First In, First Out (FIFO) structure where elements are inserted at the rear and removed from the front.

5. **Trees:** Hierarchical data structures composed of nodes where each node has a value and references to its children nodes.

6. **Graphs:** Collections of nodes (vertices) and edges that connect pairs of nodes. Graphs can be directed or undirected.

7. **Hash Tables:** Data structures that implement an associative array abstract data type, where keys are mapped to values using a hash function.

8. **Heaps:** Complete binary trees where each node's value is greater than or equal to (or less than or equal to) the values of its children, making it suitable for priority queue implementations.

9. **Tries:** Also known as prefix trees, they are tree-like data structures that store a dynamic set of strings where each node represents a common prefix.

10. **Sets:** Collections of unique elements with no specific order.

11. **Maps (Dictionaries):** Collections of key-value pairs where each key is associated with a value.`,
        }
    },
    {
        id: 4,
        deskId: 0,
        type: 'typing',
        data: {
            question: 'The Twelve-Factor App',
            answer: `[I. Codebase](https://12factor.net/codebase)
> One codebase tracked in revision control, many deploys

[II. Dependencies](https://12factor.net/dependencies)
> Explicitly declare and isolate dependencies

[III. Config](https://12factor.net/config)
> Store config in the environment

[IV. Backing services](https://12factor.net/backing-services)
> Treat backing services as attached resources

[V. Build, release, run](https://12factor.net/build-release-run)
> Strictly separate build and run stages

[VI. Processes](https://12factor.net/processes)
> Execute the app as one or more stateless processes

[VII. Port binding](https://12factor.net/port-binding)
> Export services via port binding

[VIII. Concurrency](https://12factor.net/concurrency)
> Scale out via the process model

[IX. Disposability](https://12factor.net/disposability)
> Maximize robustness with fast startup and graceful shutdown

[X. Dev/prod parity](https://12factor.net/dev-prod-parity)
> Keep development, staging, and production as similar as possible

[XI. Logs](https://12factor.net/logs)
> Treat logs as event streams

[XII. Admin processes](https://12factor.net/admin-processes)
> Run admin/management tasks as one-off processes`,
        }
    },
    {
        id: 5,
        deskId: 0,
        type: 'typing',
        data: {
            question: 'Authentication & Authorization',
            answer: `Authentication is the process of verifying the identity of a user or system, ensuring they are who they claim to be. This is typically done through credentials like passwords, biometric data, or digital certificates. On the other hand, authorization determines what actions an authenticated user or system is allowed to perform within a system or application. It controls access to resources based on the user's permissions, roles, or other criteria. Together, authentication and authorization form the backbone of access control mechanisms, safeguarding against unauthorized access and misuse of resources.`,
        }
    },
    {
        id: 6,
        deskId: 0,
        type: 'typing',
        data: {
            question: 'Common Design Patterns',
            answer: `Design patterns are reusable solutions to common problems encountered in software design. Here are some popular design patterns:

1. **Singleton Pattern:** Ensures that a class has only one instance and provides a global point of access to it.

2. **Factory Method Pattern:** Defines an interface for creating an object, but lets subclasses alter the type of objects that will be created.

3. **Abstract Factory Pattern:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

4. **Builder Pattern:** Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.`,
        }
    },
    {
        id: 8,
        deskId: 0,
        type: 'typing',
        data: {
            question: 'Authentication in API',
            answer: `* Basic Authentication
* Bearer Authentication
* Api Keys
* OAuth (2.0)`,
        }
    },
    {
        id: 9,
        deskId: 0,
        type: 'typing',
        data: {
            question: 'Question',
            answer: 'Answer',
        }
    },
];

const backend = {
    desks: [
        {
            id: 0,
            name: 'Backend',
        }
    ],
    cards
};

export default backend;
