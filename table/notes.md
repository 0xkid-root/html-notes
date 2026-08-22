# HTML Tables — Complete Notes

## 1. What is an HTML Table?
An HTML table is used to display data in rows and columns.
For example:
| Name | Age | City |
|---|---|---|
| Rahul | 20 | Delhi |
| Priya | 22 | Mumbai |
| Amit | 21 | Pune |

In HTML, a table is created using several elements:
- `<table>` → creates the table
- `<tr>` → creates a table row
- `<th>` → creates a header cell
- `<td>` → creates a data cell

## 2. Basic Table Structure
The simplest table:
```html
<table>
    <tr>
        <td>HTML</td>
        <td>CSS</td>
    </tr>
    <tr>
        <td>JavaScript</td>
        <td>React</td>
    </tr>
</table>
```
Think about it like this:
```
<table>
   ↓
<tr> → Row
   ↓
<td> → Cell
```
So:
- `table` → table
- `tr` → table row
- `td` → table data/cell

## 3. `<table>`
`<table>` is the main container.
```html
<table>
    ...
</table>
```
Everything related to the table normally goes inside `<table>`.
Example:
```html
<table>
    <tr>
        <td>Apple</td>
        <td>100</td>
    </tr>
</table>
```

## 4. `<tr>` — Table Row
`<tr>` stands for Table Row.
Every horizontal row is created using `<tr>`.
```html
<table>
    <tr>
        <td>Apple</td>
        <td>100</td>
    </tr>
    <tr>
        <td>Mango</td>
        <td>80</td>
    </tr>
</table>
```
Think:
`<tr>` → one complete horizontal row

## 5. `<td>` — Table Data
`<td>` stands for Table Data.
It represents a normal cell inside a row.
```html
<tr>
    <td>Rahul</td>
    <td>20</td>
    <td>Delhi</td>
</tr>
```
This creates:
Rahul | 20 | Delhi

Each `<td>` represents one cell.

## 6. `<th>` — Table Header
`<th>` stands for Table Header.
It is used for headings of columns or rows.
Example:
```html
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
    </tr>
    <tr>
        <td>Rahul</td>
        <td>20</td>
        <td>Delhi</td>
    </tr>
</table>
```
Conceptually:
**Name** | **Age** | **City**
Rahul | 20 | Delhi

By default, browsers usually display `<th>` text bold and centered.
But remember:
- The appearance can be changed with CSS.
- The main purpose of `<th>` is semantic meaning: this cell is a header.

## 7. `<td>` vs `<th>`
This is very important for students.
- `<th>` : Used for a header. `<th>Name</th>`
- `<td>` : Used for normal data. `<td>Rahul</td>`

Example:
```html
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Rahul</td>
        <td>20</td>
    </tr>
</table>
```
Easy rule:
- `th` = heading
- `td` = data

## 8. Adding Borders
A table may not show visible borders by default.
For learning/demo purposes, you can use:
`<table border="1">`

Example:
```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Rahul</td>
        <td>20</td>
    </tr>
</table>
```
This makes the cells visible.

**Important modern HTML point**
The `border` attribute is an old/legacy way.
In modern websites, borders are normally created with CSS:
```html
<style>
    table, th, td {
        border: 1px solid black;
    }
</style>
```
For your beginner class, you can show `border="1"` quickly so students can immediately see the table, then tell them:
*"Later, CSS will be used to properly style tables."*

## 9. Complete Basic Student Table
```html
<!DOCTYPE html>
<html>
<head>
    <title>Student Table</title>
</head>
<body>
    <h1>Student Information</h1>
    <table border="1">
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
        </tr>
        <tr>
            <td>Rahul</td>
            <td>20</td>
            <td>HTML</td>
        </tr>
        <tr>
            <td>Priya</td>
            <td>21</td>
            <td>CSS</td>
        </tr>
        <tr>
            <td>Amit</td>
            <td>22</td>
            <td>JavaScript</td>
        </tr>
    </table>
</body>
</html>
```
This is the first project I'd make students write.

## 10. How to Understand Rows and Columns
Suppose:
```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
    </tr>
    <tr>
        <td>Rahul</td>
        <td>20</td>
        <td>Delhi</td>
    </tr>
</table>
```
Think:
```
          Column 1   Column 2   Column 3
              ↓          ↓          ↓
           Name        Age        City
Row 1  →   Rahul       20         Delhi
```
- `<tr>` controls rows.
- `<th>` / `<td>` create cells within the row.

## 11. Multiple Rows
You can create as many rows as you need.
```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Rahul</td>
        <td>20</td>
    </tr>
    <tr>
        <td>Priya</td>
        <td>21</td>
    </tr>
    <tr>
        <td>Amit</td>
        <td>22</td>
    </tr>
</table>
```
The important thing is that each row gets its own `<tr>`.

## 12. colspan ⭐
`rowspan` and `colspan` attributes hote hai iska mtlb hota hai kitne cell span kare gee apke td.

Now we move to an important table feature.
`colspan` allows one cell to occupy multiple columns.
Example:
```html
<table border="1">
    <tr>
        <th colspan="3">Student Information</th>
    </tr>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
    </tr>
    <tr>
        <td>Rahul</td>
        <td>20</td>
        <td>Delhi</td>
    </tr>
</table>
```
Here:
`<th colspan="3">` means: This cell covers 3 columns.
Conceptually:
```
+-----------------------------+
|     Student Information     |
+----------+------+-----------+
| Name     | Age  | City      |
+----------+------+-----------+
| Rahul    | 20   | Delhi     |
+----------+------+-----------+
```

Examples:
```html
<table border="1">
    <tr>
        <th colspan="3">Student Information</th>
    </tr>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
    </tr>
    <tr>
        <td colspan="2">Rahul</td> <!-- yaha rahul two column ka space legaa -->
        <td>20</td>
    </tr>
</table>
```

## 13. rowspan ⭐
`rowspan` allows one cell to occupy multiple rows.
`rowspan="2"` means: Merge 2 rows vertically → top to bottom

Example:
```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Subject</th>
    </tr>
    <tr>
        <td rowspan="2">Rahul</td>
        <td>HTML</td>
    </tr>
    <tr>
        <td>CSS</td>
    </tr>
</table>
```
Here:
`<td rowspan="2">` means: This cell covers 2 rows.
`rowspan="2"` means: Gaurav's cell will occupy 2 rows.
So you need to understand that the next row doesn't need another `<td>` for Gaurav, because Gaurav's cell is already occupying that row.

Conceptually:
```
+--------+---------+
| Rahul  | HTML    |
|        +---------+
|        | CSS     |
+--------+---------+
```

## 14. colspan vs rowspan
Very easy way to remember:
- **colspan**: Column → goes horizontally. `colspan="3"`: One cell covers 3 columns.
- **rowspan**: Row → goes vertically. `rowspan="2"`: One cell covers 2 rows.

Memory trick:
- COLspan = columns → horizontal
- ROWspan = rows → vertical

## 15. Table Caption — `<caption>`
Caption tag ke through app table ka caption de sakte ho 
`<caption>` gives the table a title.
```html
<table border="1">
    <caption>Student Information</caption>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Rahul</td>
        <td>20</td>
    </tr>
</table>
```
The caption describes what the table is about.

Table ke ander hum header footer and body v de sakte hai iske help se 
## 16. `<thead>`, `<tbody>`, `<tfoot>`
For more structured tables, HTML provides:
- `<thead>` → table header section
- `<tbody>` → main table body
- `<tfoot>` → table footer section

Data ko group krna ka tarika hai bas 
Example:
```html
<table border="1">
    <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Laptop</td>
            <td>50000</td>
        </tr>
        <tr>
            <td>Mouse</td>
            <td>500</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th>Total</th>
            <th>50500</th>
        </tr>
    </tfoot>
</table>
```
This creates a logical structure:
```
Table
│
├── thead → Header
│
├── tbody → Main data
│
└── tfoot → Footer/summary
```

## 17. Why Use `<thead>`, `<tbody>`, `<tfoot>`?
You might ask: "The table works without them, so why do we need them?"
Because they give the table semantic structure.
They also make it easier to:
- style different sections with CSS
- work with JavaScript
- understand the table structure
- support accessibility
- handle large/complex tables

For beginners, understand the basic concept first. You don't need to go deeply into browser behavior yet.

## 18. `<th scope="">` ⭐
For accessibility, headers can indicate what they describe.
For example:
```html
<table border="1">
    <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">City</th>
    </tr>
    <tr>
        <td>Rahul</td>
        <td>20</td>
        <td>Delhi</td>
    </tr>
</table>
```
`scope="col"` means the header describes a column.
For row headers:
`<th scope="row">Rahul</th>`

scope tells the browser: "This `<th>` heading belongs to which direction?"
There are mainly two values you need to know:
- `scope="col"` → this heading describes a COLUMN
- `scope="row"` → this heading describes a ROW

Exactly — you are thinking correctly. scope does not change the UI. That's why it feels difficult to understand.
The key is: don't think of scope as a styling or layout attribute. Think of it as information for the browser/accessibility tools.

Think about a table like this:
```html
<table border="1">
    <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">City</th>
    </tr>
    <tr>
        <td>Rahul</td>
        <td>20</td>
        <td>Delhi</td>
    </tr>
</table>
```
Visually:
```
      Name       Age       City
        ↓          ↓         ↓
     Column     Column    Column
        ↓          ↓         ↓
      Rahul       20       Delhi
```
The `scope="col"` is basically telling the browser: "Name is the heading for the values below it."
It is like adding an invisible label/relationship.

Why does this matter?
Imagine a screen reader reading the table to a visually impaired user.
Without clear relationships, it may encounter:
Rahul
20
Delhi

But with:
```html
<th scope="col">Name</th>
<th scope="col">Age</th>
<th scope="col">City</th>
```
the relationship is clear:
Rahul → Name
20    → Age
Delhi → City

So scope helps the browser/accessibility technology understand: Which heading belongs to which data?

`scope="row"` is the opposite direction:
```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Math</th>
        <th>English</th>
    </tr>
    <tr>
        <th scope="row">Rahul</th>
        <td>80</td>
        <td>70</td>
    </tr>
</table>
```
Think:
```
         Math     English
            ↓         ↓
Rahul  →    80        70
  ↑
 row heading
```
`scope="row"` says: "Rahul is the heading/label for this entire row."
So:
- `scope="col"` → heading ↓
- `scope="row"` → heading →
That's probably the best mental picture for understanding it.

One important point for your teaching:
You can tell students: scope is not for changing the table's appearance. It is for telling the browser the relationship between a heading and the data.
So if you write: `<th>Name</th>` or `<th scope="col">Name</th>`
the screen may look exactly the same, but the second version gives additional semantic information.
That's why I'd teach scope as advanced/accessibility HTML, not as something students need to see a visual change from.

## 19. Don't Use Tables for Page Layout
This is a very important concept.
Older websites sometimes used tables to create layouts.
Don't do this:
```html
<table>
    <tr>
        <td>Header</td>
    </tr>
    <tr>
        <td>Sidebar</td>
        <td>Main Content</td>
    </tr>
</table>
```
just to design the website.

Tables should be used for tabular data.
For example:
✅ Student marks
✅ Product prices
✅ Employee information
✅ Exam results
✅ Monthly expenses

For page layout, modern websites use:
- CSS Flexbox
- CSS Grid
You can teach those later.

## 20. Real-World Example — Student Marks
This is a great project for students:
```html
<table border="1">
    <caption>Student Marks</caption>
    <tr>
        <th>Name</th>
        <th>HTML</th>
        <th>CSS</th>
        <th>JavaScript</th>
    </tr>
    <tr>
        <td>Rahul</td>
        <td>85</td>
        <td>80</td>
        <td>90</td>
    </tr>
    <tr>
        <td>Priya</td>
        <td>90</td>
        <td>88</td>
        <td>92</td>
    </tr>
    <tr>
        <td>Amit</td>
        <td>75</td>
        <td>82</td>
        <td>80</td>
    </tr>
</table>
```

## 21. Real-World Example — Product Table
```html
<table border="1">
    <caption>Product List</caption>
    <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
    </tr>
    <tr>
        <td>Laptop</td>
        <td>₹50,000</td>
        <td>2</td>
    </tr>
    <tr>
        <td>Mouse</td>
        <td>₹500</td>
        <td>10</td>
    </tr>
    <tr>
        <td>Keyboard</td>
        <td>₹1,000</td>
        <td>5</td>
    </tr>
</table>
```

## 22. Complete Advanced Example
Once students understand the basics, you can show this:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Student Result</title>
</head>
<body>
    <h1>Student Result</h1>
    <table border="1">
        <caption>Class 10 Result</caption>
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">English</th>
                <th scope="col">Math</th>
                <th scope="col">Science</th>
                <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Rahul</td>
                <td>85</td>
                <td>90</td>
                <td>88</td>
                <td>263</td>
            </tr>
            <tr>
                <td>Priya</td>
                <td>92</td>
                <td>95</td>
                <td>90</td>
                <td>277</td>
            </tr>
            <tr>
                <td>Amit</td>
                <td>78</td>
                <td>82</td>
                <td>80</td>
                <td>240</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th colspan="4">Class Average</th>
                <td>260</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```

## 23. Important Table Tags — Quick Revision

| Tag | Meaning | Purpose |
|---|---|---|
| `<table>` | Table | Creates the table |
| `<tr>` | Table Row | Creates a row |
| `<th>` | Table Header | Creates a header cell |
| `<td>` | Table Data | Creates a normal data cell |
| `<caption>` | Caption | Gives the table a title |
| `<thead>` | Table Head | Groups header rows |
| `<tbody>` | Table Body | Groups main data rows |
| `<tfoot>` | Table Foot | Groups footer/summary rows |

And attributes:

| Attribute | Purpose |
|---|---|
| `colspan` | Merge/cover multiple columns |
| `rowspan` | Merge/cover multiple rows |
| `scope` | Defines what a header describes |
