# Practice Project: Playlist Manager

### Ties back to Lesson 2 — Linked Lists & Recursion

## What you're building

A **playlist manager** — songs queued up one after another, just like "Up Next" in a music app. Each song only needs to know what plays after it, which is exactly what a linked list is good at.

Each song should store at least:
```js
{ title: "Song Name", duration: 180 } // duration in seconds
```

You'll reuse the `Node` class from `LLImplementation.js` as-is (a node's `value` is just a song object instead of a number). `append()` is fine to reuse for building your starting playlist. 

---

## Requirements

1. **Build a starting playlist** of 4–5 songs using `append()`.

2. **`insertAfter(title, newSong)`** — insert a new song immediately after a given song. This is what a real "Play Next" button does — it doesn't add to the end of the queue, it slots the song in right after whatever's currently playing. If the given `title` isn't found, do nothing (or log a message — your call).

3. **`getTotalDuration(head)`** — a **recursive** function that adds up every song's duration, so the app can show "total listening time" for the whole playlist.

4. **`findSongPosition(head, title)`** — a **recursive** function that returns which position a song is at (1st, 2nd, 3rd...), or `null` if it isn't in the playlist. Useful for showing "Now playing: song 3 of 8."

5. **`skipSongs(head, n)`** — a **recursive** function that "fast-forwards" `n` songs from the given starting node and returns the song that's now playing. If `n` goes past the end of the playlist, return `null`.

Functions 3–5 should all be recursive — no `while` or `for` loops inside them.

---

## Example

Say your playlist has these 4 songs, in this order:

| Position | Title           | Duration |
|----------|-----------------|----------|
| 1        | Morning Drive   | 30s      |
| 2        | Neon Nights     | 150s     |
| 3        | Ocean Breeze    | 45s      |
| 4        | City Lights     | 60s      |

As a linked list:
```
Head → [Morning Drive, 30s] → [Neon Nights, 150s] → [Ocean Breeze, 45s] → [City Lights, 60s] → null
```

**`getTotalDuration(playlist.head)`** adds up every song's duration, one node at a time:
```
30 + 150 + 45 + 60 = 285
```

**`findSongPosition(playlist.head, "Ocean Breeze")`** walks the list counting positions until it finds a title match:
```
Morning Drive (1) → Neon Nights (2) → Ocean Breeze (3) — found it → returns 3
```
```
findSongPosition(playlist.head, "Sunset Drive"); // not in the list → returns null
```

**`skipSongs(playlist.head, 2)`** moves forward 2 nodes from the head and returns whatever song it lands on:
```
start at Morning Drive → skip 1 → Neon Nights → skip 2 → Ocean Breeze  →  returns the Ocean Breeze song
```

**`insertAfter("Neon Nights", { title: "Solo Drift", duration: 40 })`** slots a new song in right after "Neon Nights," shifting nothing else:
```
Before: Morning Drive → Neon Nights → Ocean Breeze → City Lights
After:  Morning Drive → Neon Nights → Solo Drift → Ocean Breeze → City Lights
```

---

## How to approach it

For the three recursive functions, think about the smallest playlist possible — `head` is `null` — before writing any code. That's your base case every time. Everything else is: handle the current node, then call the function again on `node.next` (adjusting `n` by 1 where relevant).