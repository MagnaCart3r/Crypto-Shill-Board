import type { TwitterUser } from '../types';

const TWITTER_API_URL = 'https://api.twitter.com/2/users/by';
const TWITTER_BEARER_TOKEN = import.meta.env.VITE_TWITTER_BEARER_TOKEN;

export async function fetchTwitterUsers(usernames: string[]): Promise<TwitterUser[]> {
  try {
    const cleanUsernames = usernames.map(u => u.replace('@', '')).join(',');
    const response = await fetch(
      `${TWITTER_API_URL}/usernames?usernames=${cleanUsernames}&user.fields=profile_image_url`,
      {
        headers: {
          'Authorization': `Bearer ${TWITTER_BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data.map((user: any) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      profile_image_url: user.profile_image_url,
    }));
  } catch (error) {
    console.error('Error fetching Twitter users:', error);
    throw new Error('Failed to fetch Twitter profiles');
  }
}