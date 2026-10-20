
// useVote is about SENDING (POST-ing) data.
//
// It also remembers which cats we voted on, so the UI can show it.

import { useState } from 'react';
import { postVote } from '../services/catApi';

export default function useVote() {
  // Votes made in this session, e.g. { 'abc123': 1, 'xyz789': 0 }
  const [votes, setVotes] = useState({});
  // Which cats have a vote in flight, e.g. { 'abc123': true }
  const [pending, setPending] = useState({});

  // value: 1 = upvote, 0 = downvote
  const vote = async (imageId, value) => {
    setPending((previous) => ({ ...previous, [imageId]: true }));

    try {
      await postVote({ imageId, value });
      // Only record the vote once the server confirmed it
      setVotes((previous) => ({ ...previous, [imageId]: value }));
    } finally {
      // Runs on success AND failure, so the buttons are always re-enabled.
      setPending((previous) => ({ ...previous, [imageId]: false }));
    }
  };

  return { vote, votes, pending };
}