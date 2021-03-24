## Simple SQL Query Builder
<hr/>

This SQL query builder accepts:

- A partially built query template
- An queryParams object with values which replace the placeholders with intended values

Example:

```javascript
let queryTemplate =
  "INSERT INTO vegetables (name, quantity) values (@name, @quantity);";

let queryParams = {
  "@name": "apple",
  "@quantity": 2,
};

let query = buildQuery(queryTemplate, queryParams);

// result -> "INSERT INTO vegetables (name, quantity) values(apple, 2);

```
