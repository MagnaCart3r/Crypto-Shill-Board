import useSWR from 'swr';
import { fetchTwitterUsers } from '../lib/twitter';
import type { TwitterUser, ApiError } from '../types';

export function useTwitterProfiles(handles: string[]) {
  const { data, error, isLoading } = useSWR<TwitterUser[], ApiError>(
    handles.length > 0 ? ['twitter-profiles', handles] : null,
    () => fetchTwitterUsers(handles)
  );

  return {
    profiles: data,
    error,
    isLoading,
  };
}