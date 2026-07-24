##  Stack Questions

### 1️⃣ Check for Balanced Parentheses
**Problem:**  
You need to check whether a string containing parentheses `()`, curly braces `{}`, and square brackets `[]` is balanced.  
A string is **balanced** if every opening bracket has a matching closing bracket in the correct order.

**Input Parameters:**  
- `input` (string) → A string that may contain `()`, `{}`, `[]`.

**Output:**  
- `true` if the brackets are balanced.  
- `false` otherwise.

**Example Test Cases:**  
| Input         | Expected Output |
|---------------|-----------------|
| `"({[]})"`    | `true`          |
| `"({[})"`     | `false`         |

**Sample Input to Pass to Function:**  
```js
isBalanced("({[]})");  // true
isBalanced("({[})");   // false
```


### 2️⃣ Undo Operation Simulation
**Problem:**  
Simulate an **undo feature** where each user action is added to a stack.  
If the user performs `"UNDO"`, remove the last action from the stack.

**Input Parameters:**  
- `actions` (array of strings) → A list of user actions and `"UNDO"` commands.

**Output:**  
- An array of remaining actions after applying undo operations.

**Example Test Cases:**  
| Input                                 | Expected Output    |
|---------------------------------------|--------------------|
| `["type A", "type B", "UNDO", "type C"]` | `["type A", "type C"]` |

**Sample Input to Pass to Function:**  
```js
processActions(["type A", "type B", "UNDO", "type C"]);
// Output → ["type A", "type C"]
```

## Queue Questions

### 3️⃣ Task Scheduler
**Problem:**  
You are given a list of tasks. Use the queue to process them in **First-In-First-Out (FIFO)** order and return the order in which tasks are completed.

**Input Parameters:**  
- `taskList` (array of strings) → A list of tasks.

**Output:**  
- An array representing the order of completed tasks.

**Example Test Cases:**  
| Input                     | Expected Output           |
|---------------------------|---------------------------|
| `["task1", "task2", "task3"]` | `["task1", "task2", "task3"]` |

**Sample Input to Pass to Function:**  
```js
processTasks(["task1", "task2", "task3"]);
// Output → ["task1", "task2", "task3"]
```

### 4️⃣ Hot Potato Game Simulation
**Problem:**  
Simulate a game where players sit in a circle and pass a "potato".  
After a given number of passes, the player holding the potato is **removed** from the game.  
The process continues until **only one player remains**, who is the winner.

**Input Parameters:**  
- `players` (array of strings) → Names of all players.  
- `numPasses` (number) → Number of passes before a player is removed.

**Output:**  
- The name of the last remaining player.

**Example Test Cases:**  
| Players               | Passes | Expected Output |
|-----------------------|--------|-----------------|
| `["A", "B", "C", "D"]` |   3    | `"B"`           |

**Sample Input to Pass to Function:**  
```js
hotPotato(["A", "B", "C", "D"], 3);
// Output → "B"
```