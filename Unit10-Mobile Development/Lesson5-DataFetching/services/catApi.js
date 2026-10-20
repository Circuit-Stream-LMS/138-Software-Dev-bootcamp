

const BASE_URL = 'https://api.thecatapi.com/v1';


const API_KEY = process.env.EXPO_PUBLIC_CAT_API_KEY;

// The Cat API lets us tag votes with our own identifier.
const SUB_ID = 'rn-lesson-6';


async function request(path, { method = 'GET', body } = {}) {
  if (!API_KEY) {
    throw new Error(
      'Missing API key. Copy .env.example to .env, add your key, then restart Expo with: npx expo start -c'
    );
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      // The Cat API reads our key from this header
      'x-api-key': API_KEY,
      // Only needed when we send a JSON body
      ...(body && { 'Content-Type': 'application/json' }),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

/**
 * GET - fetch a page of random-ish cat images.
 * Returns an array like: [{ id: 'abc', url: 'https://...', width, height }]
 */
export function getCatImages({ page = 0, limit = 10 } = {}) {
  return request(`/images/search?limit=${limit}&page=${page}&order=DESC`);
}

/**
 * POST - send a vote for one image.
 * value: 1 = upvote, 0 = downvote
 */
export function postVote({ imageId, value }) {
  return request('/votes', {
    method: 'POST',
    body: { image_id: imageId, value, sub_id: SUB_ID },
  });
}
