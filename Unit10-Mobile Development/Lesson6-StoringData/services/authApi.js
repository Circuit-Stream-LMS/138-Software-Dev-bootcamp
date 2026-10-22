
// A fake login server, so the app works without a backend.
//
// In a real app, login() would send the username and password to YOUR server:
//
//   const response = await fetch('https://api.example.com/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username, password }),
//   });
//   const { token } = await response.json();
//
// ...and the server would reply with a token. Everything the app does with
// that token afterwards (saving it, reading it, deleting it) is the same.

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

// Any username and any password with 4+ characters is accepted
export async function loginRequest(username, password) {
  await wait(800); // pretend the network is slow

  if (!username.trim() || password.length < 4) {
    throw new Error('Enter a username and a password with at least 4 characters.');
  }

  // A real token is a long random string created by the server
  return { token: `fake-token-${Math.random().toString(36).slice(2)}${Date.now().toString(36)}` };
}
