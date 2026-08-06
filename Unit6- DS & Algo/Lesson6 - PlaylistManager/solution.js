class Node {
    constructor(value) {
        this.value = value; // Data
        this.next = null;   // Pointer to next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // The first node (initially empty)
    }

    // Append a node at the end of the list
    append(value) {
        let newNode = new Node(value); 

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    // Prepend a node at the beginning of the list
    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Delete a node by value
    delete(value) {
        if (!this.head) return; // Empty list

        // If head needs to be removed
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next; // Remove the node
        }
    }

    // Find a node by value
    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }

    // Reverse the linked list
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next; // Save next node
            current.next = prev; // Reverse pointer
            prev = current; // Move prev forward
            current = next; // Move current forward
        }

        this.head = prev; // Update head to new first node
    }

    // insertAfter (Playlist Manager)
    // Inserts a new song right after the song matching `title`.
    insertAfter(title, newSong) {
        let current = this.head;

        // Walk until we find the node whose song title matches
        while (current && current.value.title !== title) {
            current = current.next;
        }

        if (!current) {
            console.log(`"${title}" not found — nothing inserted.`);
            return;
        }

        const newNode = new Node(newSong);
        newNode.next = current.next; // new node points to whatever came after "current"
        current.next = newNode;      // "current" now points to the new node
    }

    // Print the linked list
    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " → ";
            current = current.next;
        }
        console.log(result + "null");
    }

    // Print a playlist (song objects instead of plain values)
    printPlaylist() {
        let current = this.head;
        let result = "";
        while (current) {
            result += `[${current.value.title}, ${current.value.duration}s] → `;
            current = current.next;
        }
        console.log(result + "null");
    }
}


/*
Playlist Manager recursive functions
*/

// Requirement #3: total duration of every song from `node` onward.
function getTotalDuration(node) {
    if (!node) return 0;                                   // base case: empty list = 0 seconds
    return node.value.duration + getTotalDuration(node.next); // this song + everything after it
}

// Requirement #4: find song position
function findSongPosition(node, title, position = 1) {
    if (!node) return null;                    // base case: ran off the end, never found it
    if (node.value.title === title) return position; // found it at this position
    return findSongPosition(node.next, title, position + 1); // check the rest, one position further along
}

// Requirement #5: skipSongs the song sitting `n` steps ahead of `node`.
function skipSongs(node, n) {
    if (!node) return null;           // base case: skipped past the end of the playlist
    if (n === 0) return node.value;   // base case: this is the song we skipped forward to
    return skipSongs(node.next, n - 1); // move one node forward, one fewer song left to skip
}


// --------------- USAGE EXAMPLE ----------------
let playlist = new LinkedList();
playlist.append({ title: "Morning Drive", duration: 30 });
playlist.append({ title: "Neon Nights", duration: 150 });
playlist.append({ title: "Ocean Breeze", duration: 45 });
playlist.append({ title: "City Lights", duration: 60 });

console.log("Starting playlist:");
playlist.printPlaylist();
// [Morning Drive, 30s] → [Neon Nights, 150s] → [Ocean Breeze, 45s] → [City Lights, 60s] → null

console.log("\nTotal duration:", getTotalDuration(playlist.head));
// 285

console.log("Position of 'Ocean Breeze':", findSongPosition(playlist.head, "Ocean Breeze"));
// 3
console.log("Position of 'Sunset Drive':", findSongPosition(playlist.head, "Sunset Drive"));
// null

console.log("Song after skipping 2:", skipSongs(playlist.head, 2));
// { title: 'Ocean Breeze', duration: 45 }

playlist.insertAfter("Neon Nights", { title: "Solo Drift", duration: 40 });
console.log("\nAfter inserting 'Solo Drift' after 'Neon Nights':");
playlist.printPlaylist();
// [Morning Drive, 30s] → [Neon Nights, 150s] → [Solo Drift, 40s] → [Ocean Breeze, 45s] → [City Lights, 60s] → null