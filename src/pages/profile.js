import React, { useEffect, useState } from 'react';
// import { supabase } from '../client';
import { useRouter } from 'next/router';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    const profileData = await supabase.auth.user();
    if (!profileData) {
      router.push('/');
    } else {
      setProfile(profileData);
    }
  }

  if (!profile) return null;
  return (
    <div>
      <h1>Hello, {profile.email}</h1>
      <p>User ID: {profile.id}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
