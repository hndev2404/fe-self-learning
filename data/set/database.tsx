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

**OUTER JOIN**: LEFT JOIN + RIGHT JOIN

A \`LEFT JOIN\` is absolutely not faster than an \`INNER JOIN\`. 
In fact, it's slower; by definition, an outer join (\`LEFT JOIN\` + \`RIGHT JOIN\`) has no do all the work of an INNER JOIN plus the extra work of null-extending the result.
It would also be expected to return more rows, further increasing the total execution time simply due to the large size of the result set.
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
| **Data Storage Model**     | Tables with fixed rows and colums        | Document, Key-value, Wide column, Graph                                                            |
| **Schemas**                | Rigid                                    | Flexible                                                                                                                 |
| **Scaling**                | Verical                                  | Horizontal                                                                                                               |

Popular noSQL:
- Document database: MongoDB, CouchDB...
- Key - value store: Redis, LevelDB, RocksDB...
- Wide column: Cassandra, Bigtable, HBase...
- Graph database: JanusGraph, Neo4j, TigerGraph...
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

    {
        id: 11,
        deskId: 2,
        type: 'typing',
        data: {
            question: 'Relation in NoSQL?',
            answer: `
Chúng ta thường nghe và hiểu NoSQL hay no-relational database nghĩa là nói về việc các collections (Document database) không có mối quan hệ nào với nhau (phi quan hệ), 
ngược lại với SQL. 

Vậy nếu mối quan hệ **User - Order - Product** như ví dụ trên với SQL thì thể hiện trong NoSQL như thế nào vì trong thực tế cả 3 vẫn có mối liên quan đến nhau?

Trên lí thuyết, ta vẫn có thể set up relation giữa các document giống như SQL bằng cách thêm foreign key. 

Nhưng vấn đề là không thể sử dụng SQL để join và query data được nên việc tạo FK như vậy làm sai lệch đi bản chất của NoSQL là no-relation.

Idea để giải quyết vấn đề này của NoSQL là gom nhóm các data có liên quan với nhau vào **cùng một chỗ và chấp nhận việc duplicate**.

No silver bullet, chẳng có gì là hoàn hảo, 
và cũng chính **ưu điểm trên là nhược điểm** của NoSQL, 
phải chấp nhận data bị duplicate ở nhiều nơi. Update product data ở Product cũng kéo theo việc update product ở Order.

> Nhưng nếu việc update hiếm khi xảy ra, và là read heavy (read nhiều hơn write) thì nó vẫn là một điều tuyệt vời ông mặt zời.
> Một lưu ý nữa không phải là hoàn toàn không có relation, sẽ có những trường hợp vẫn cần relation nhưng cần hạn chế nhất có thể (no relation or less relation as possible).

            `,
        }
    },

    {
        id: 12,
        deskId: 2,
        type: 'basic',
        data: {
            question: 'Xem xét SQL Query sau đây',
            answer: `
\`\`\`sql
-- #SQL1
SELECT count(*) AS total FROM orders;
-- total=100

-- #SQL2
SELECT count(*) AS cust_123_total FROM orders WHERE customer_id = '123';
-- total=15

-- #SQL3
SELECT count(*) AS cust_123_total FROM orders WHERE customer_id != '123';
-- total=?
\`\`\`


Câu trả lời là 85 (tức là 100 - 15). 

Tuy nhiên, không phải lúc nào đó cũng là câu trả lời đúng. 
Cụ thể, bất kỳ bản ghi nào có customer_id là **NULL** sẽ không được bao gồm trong cả hai **SQL#2 & SQL#3**

Ví dụ: nếu một trong 100 khách hàng có **1** customer_id là NULL, kết quả của truy vấn cuối cùng sẽ là: **85 - 1 = 84** (NULL)

            `,
        }
    },

    {
        id: 13,
        deskId: 2,
        type: 'basic',
        data: {
            question: 'LIKE vs Full-Text Search',
            answer: `
While LIKE offers 100% precision, it may need more recall, meaning it might miss relevant results. In contrast, full-text search allows for more flexibility, offering a trade-off between precision and recall based on configured parameters.Feb 8, 2024


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
