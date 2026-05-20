## 1. Why MongoDB is called "schema-less"

MongoDB is often described as schema-less because it does not force all documents in a collection to follow the same structure.

Example:

```js
// Document 1
{
  name: "John",
  age: 25
}

// Document 2
{
  city: "Ottawa",
  hobby: "Gaming"
}
```

Both can exist in the same collection.

However, this does NOT mean schema is unnecessary. It just means MongoDB does not enforce it at the database level.

---

## 2. Why we still need Mongoose (Schema + Models)

Mongoose introduces structure on top of MongoDB.

It provides:
- Schema definition
- Data validation
- Type enforcement
- Defaults
- Middleware/hooks
- Better developer experience

### Example Schema

```js
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});
```

This ensures:
- `name` is a string
- `age` is a number

---

## 3. What happens if you try to add extra fields?

By default, Mongoose uses `strict: true`.

### Example:

```js
await User.create({
  name: "John",
  age: 25,
  city: "Toronto"
});
```

Result stored:

```js
{
  name: "John",
  age: 25
}
```

Extra fields are ignored.

---

## 4. Can we allow flexible schema in Mongoose?

Yes:

```js
const userSchema = new mongoose.Schema(
  {
    name: String
  },
  { strict: false }
);
```

Now extra fields will be stored.

---

## 5. Why not just use SQL + ORM instead?

SQL databases (PostgreSQL, MySQL, SQL Server) are designed for structured data.

They use ORMs like:
- Prisma
- Sequelize
- Entity Framework

SQL is better when:
- Data is highly relational
- Consistency is critical
- You need joins and transactions

MongoDB is better when:
- Data is flexible
- Structure changes often
- You work with JSON-like data
- You want faster iteration

---

## 6. MongoDB vs SQL mindset

| MongoDB | SQL |
|--------|-----|
| Flexible schema | Strict schema |
| Documents (JSON) | Tables (rows/columns) |
| Embedding possible | Normalization preferred |
| Fewer joins | Strong joins |

---

## 7. Embedding vs Referencing in MongoDB

### 7.1 Embedded documents

Data is stored inside a single document.

```js
{
  name: "John",
  addresses: [
    { city: "Ottawa" },
    { city: "Toronto" }
  ]
}
```

#### Pros:
- Faster reads
- Simple queries
- Atomic updates

#### Cons:
- Large documents
- Hard to scale infinite arrays

---

### 7.2 Referenced documents

Data is stored in separate collections.

```js
// User
{
  _id: 1,
  name: "John"
}

// Address
{
  userId: 1,
  city: "Ottawa"
}
```

#### Mongoose example:

```js
const addressSchema = new mongoose.Schema({
  city: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});
```

Use `.populate()` to join data.

---

## 8. When to embed vs reference

### Embed when:
- Data is small
- Data is tightly related
- Data is always read together
- Low growth expected

Examples:
- User settings
- Profile preferences
- Small arrays

---

### Reference when:
- Data grows large
- Data is reused elsewhere
- Data is queried independently
- Data updates frequently

Examples:
- Orders
- Posts
- Messages
- Payments

---

## 10. Why models and schemas still matter in MongoDB

Even though MongoDB is flexible:

### Without schema:
- Data becomes inconsistent
- Hard to maintain
- Bugs increase over time

### With Mongoose schemas:
- Structure is enforced
- Data is predictable
- Validation prevents errors
- Teams can collaborate safely
- Code becomes self-documenting

---


