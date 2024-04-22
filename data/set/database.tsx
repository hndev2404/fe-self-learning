import { ICard } from "@/interfaces/flashcard";

const cards: ICard[] = [

    {
        id: 0,
        deskId: 2,
        type: 'typing',
        data: {
            question: 'Performance INNER JOIN and OUTER JOIN',
            answer: `
**INNER JOIN**

**OUTER JOIN**
`,
        }
    },

    {
        id: 1,
        deskId: 2,
        type: 'typing',
        data: {
            question: 'SQL Stored Procedures',
            answer: `
A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again.

So if you have an SQL query that you write over and over agin, save it as a stored procedure, and then just call it to execute it.

You can also pass parameters to a stored procedure, so that the stored procedure can act based on the parameter value(s) that is passed.
`,
        }
    },

    {
        id: 2,
        deskId: 2,
        type: 'typing',
        data: {
            question: 'SQL Performance',
            answer: `
- Using specific field instead \`select * \`
- Avoid storage binary data (img, pdf, ...)
- Using index
- Optiomize SQL Query
`,
        }
    },

    {
        id: 3,
        deskId: 2,
        type: 'typing',
        data: {
            question: 'NoSQL vs SQL',
            answer: `

**Main differences Between SQL and NoSQL Database:**
| **Feature**                | **SQL Database**                         | **NoSQL Databases**                                                                                                      |
|----------------------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| **Fey Focus**              | Reducing data duplication                | Scaling and rapid application change                                                                                     |
| **Data Storage Model**     | Tables with fixed rows and colums        | Document: JSON documents Tables with rows and dynamic columns                                                            |
| **Schemas**                | Regid                                    | Flexible                                                                                                                 |
| **Data to Object Mapping** | Requires ORM (object-relational mapping) | Typically doesn;t required ORMs.  E.g MongoDB documents map directly to data structures in popular programing languages. |
| **Scaling**                | Verical                                  | Horizontal                                                                                                               |

Popular noSQL:
* MongoDB
* Google BigTable
* DynamoDB
* Cassdandra
`,
        }
    },

    {
        id: 4,
        deskId: 2,
        type: 'typing',
        data: {
            question: 'What is ACID in Database?',
            answer: `
**ACID** là một tập hợp các đặc tính đảm bảo tính đồng nhất và an toàn của các transaction trong database.

* **Atomicity (Tính nguyên tử):** Đảm bảo rằng một giao dịch hoặc được thực hiện hoàn toàn, hoặc koong được thực hiện một phần nào cả.
* **Consistency (Tính nhất quán):** Bảo đảm rằng database luôn ở trạng thái hợp lệ trước và sau khi transaction được thực hiện.
* **Isolation (Tính cô lập):** Đảm bảo rằng các giao dịch đang thực hiện không làm ảnh hưởng đến các transaction khác đang điễn ra.
* **Durability (Tính bền vững):** Đảm bảo rằng kết quả của một transaction được lưu trữ và không bị mất, ngay cả khi có sự cố xảy ra sau đó. 

Những đặc tính này đảm bảo tính toàn vẹn và đồng nhất của dữ liệu trong database, giữ cho hệ thống luôn ổn định và an toàn.
`,
        }
    },


    {
        id: 5,
        deskId: 2,
        type: 'typing',
        data: {
            question: 'What is Replica in Database?',
            answer: `

Trong cơ sở dữ liệu, một replica là một bản sao của cơ sở dữ liệu chính (primary database) được tạo ra và đồng bộ hóa định kỳ với cơ sở dữ liệu chính. Mục đích chính của việc tạo replica là để cung cấp tính sẵn sàng cao (high availability) và bảo đảm độ tin cậy của hệ thống. Các replica thường được sử dụng để:

- **Đảm bảo tính sẵn sàng cao**: Nếu cơ sở dữ liệu chính gặp sự cố, replica có thể đảm nhận vai trò của nó để duy trì khả năng truy cập dữ liệu cho ứng dụng.

- **Phân tải tải (Load balancing)**: Replica có thể được sử dụng để phân phối tải làm việc, giảm áp lực cho cơ sở dữ liệu chính và tăng hiệu suất của hệ thống.

- **Sao lưu và khôi phục dữ liệu**: Replica có thể được sử dụng để tạo bản sao lưu (backup) của dữ liệu và trong trường hợp cần thiết, có thể được sử dụng để khôi phục dữ liệu.

Trong một số hệ thống, có thể có nhiều loại replica như replica chỉ đọc (read replica) dùng cho đọc dữ liệu, replica đồng bộ (synchronous replica) hoặc replica không đồng bộ (asynchronous replica) tùy thuộc vào mục đích sử dụng cụ thể và yêu cầu về hiệu suất của hệ thống.
            `,
        }
    },

    {
        id: 6,
        deskId: 2,
        type: 'typing',
        data: {
            question: 'The order of SELECT, FROM, JOIN, WHERE, GROUP BY,  HAVING, ORDER BY, LIMIT',
            answer: `
**Orders:**

* FROM -> JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT
            `,
        }
    },

    {
        id: 7,
        deskId: 2,
        type: 'typing',
        data: {
            question: 'What is SARGABLE in database?',
            answer: `
SARABLE stands for **S**earch **ARG**ument **ABLE**

In relational databases, a condition (or predicate) in a aquery is said to be **sargable** if the DBMS engine can take advantage of an index to speed up the execution of the query. The term is derived from a contraction of Search ARGument ABLE. 
And has come to mean simply **"can be looked up by an index"**.

Effect on WHERE, ORDER BY, GROUP BY, and HAVING clauses. The SELECT clause, on the other hand, can contain non-sargable expressions without adversely affecting the performance.

* Sargable operators: =, >, <, >=, <=, BETWEEN, LIKE, IS [NOT] NULL, IN
* Sargable operators that rarely improve performance: <>, NOT, NOT IN, NOT LIKE

\`\`\`sql
Bad: SELECT ... FROM ... WHERE Year(myDate) = 2008
Fixed: WHERE myDate >= '01-01-2008' AND myDate < '01-01-2009'

Bad: Select ... WHERE isNull(FullName,'Ed Jones') = 'Ed Jones'
Fixed: Select ... WHERE ((FullName = 'Ed Jones') OR (FullName IS NULL))

Bad: Select ... WHERE SUBSTRING(DealerName,4) = 'Ford'
Fixed: Select ... WHERE DealerName Like 'Ford%'

Bad: Select ... WHERE DateDiff(mm,OrderDate,GetDate()) >= 30
Fixed: Select ... WHERE OrderDate < DateAdd(mm,-30,GetDate()) 
\`\`\`

To write sargable queries:
* Avoid using fuctions or calculations on indexed columns in the WHERE clause
* Use direct comparision when possible, instead of wrapping the column in a function
* If we need to use a function on a column, consider creating a computed column or a function-based index, if the database system supports it.
            `,
        }
    },

    {
        id: 8,
        deskId: 2,
        type: 'typing',
        data: {
            question: 'OLTP vs OLAP',
            answer: `
**OLTP (Online Transaction Processing)** and **OLAP (Online Analytical Processing)** are two different approaches to managing and analyzing data in a business environment. 

Here's a comparison of the two:

| Aspect             | OLTP                                         | OLAP                                          |
|--------------------|----------------------------------------------|-----------------------------------------------|
| Purpose            | Manage transactional data in real-time      | Analyze large volumes of data for insights   |
| Database Design    | Normalized                                   | Denormalized or star/snowflake schema        |
| Query Patterns     | Simple, transactional                        | Complex analytical                           |
| Performance        | High throughput, low latency                 | Fast query response times                    |
| Data Volume        | Relatively small                              | Large historical data                        |
| Concurrency        | High concurrency                             | Lower concurrency                            |

`,
        }
    },

    {
        id: 9,
        deskId: 2,
        type: 'typing',
        data: {
            question: 'ORM, props and cons??',
            answer: `
ORM là 1 kỹ thuật lập trình giúp ánh xạ các record dữ liệu trong hệ quản trị cơ sở dữ liệu sang dạng đối tượng đang định nghĩa trong các class 

Cons:
- Với mỗi framework sẽ có 1 thư viện ORM khác nhau, tất nhiên là bạn phải mất thời gian học nó. Và vì chúng là thư viện nên sẽ rất "nặng".
- Performance ổn đối với các truy vấn thông thường, nhưng Raw SQL sẽ luôn làm tốt hơn với các dự án lớn.
- ORM được coi là abstracts của DB. Nếu bạn không quan tâm đến những gì thực sự xảy ra khi sử dụng ORM. Nó có thể là cái bẫy với những bài toán N + 1 query.
            `,
        }
    },

    {
        id: 10,
        deskId: 2,
        type: 'typing',
        data: {
            question: 'N+1 selects problem',
            answer: `
Lấy ví dụ mình muốn lấy danh sách các bài posts và comment mỗi bài post theo userId.

Theo thói quen, mình sẽ viết code xử lý như sau:
\`\`\`go
var result []*Data
posts, err := db.postRepo.GetPostsByUserId(userId)
for _, post := range posts {
     data := &Data{}
     comment, err := db.commentRepo.GetCommentByPostId(post.Id)
     data.Post = post
     data.Comment = comment  
}
\`\`\`
Tốn 1 query để lấy danh sách bài post theo userId:
\`\`\`sql
SELECT * FROM posts WHERE user_id = ...
// Result: posts.id  [1, 2, 3, ... n]
\`\`\`
Tốn N query để lấy comment tương ứng bài post:
\`\`\`sql
SELECT * FROM comments WHERE post_id = 1
SELECT * FROM comments WHERE post_id = 2
SELECT * FROM comments WHERE post_id = 3
...
SELECT * FROM comments WHERE post_id = n
\`\`\`

Như vậy, để lấy được một list kết quả thỏa yêu cầu trên, mình đã phải tốn N+1 câu queries. Tính toán sơ nếu 1 câu query mất tầm 2 - 3ms, lỡ xui N là 10k hay 100k thì cày nát database, thời gian tăng tuyến tính như O(n), hệ thống thì chậm và không mang đến trải nghiệm tốt cho người dùng.

**Solution**
- Using \`WHERE ... IN ...\`
- Joins

**REF:**
- https://blog.appsignal.com/2020/06/09/n-plus-one-queries-explained.html
- https://stackoverflow.com/questions/97197/what-is-the-n1-selects-problem-in-orm-object-relational-mapping

            `,
        }
    },
];

const database = {
    desk: {
        id: 0,
        name: 'Database',
    },
    cards
};

export default database;
