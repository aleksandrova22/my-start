'use client';
import { useStore } from '@nanostores/react';
import { $myaccount } from '@/store/api';


export function ServerSession() {
  const { data, loading, error } = useStore($myaccount);
  if (error) return <>Error!={String(error)}</>;
  if (loading) return <>Loading...</>;
  return <>{JSON.stringify(data)}</>;
}