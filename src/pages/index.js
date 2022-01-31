import React, { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';

import theme from '../styles/themes/spartan';
import BackgroundVideo from '../components/background/BackgroundVideo';
import SpartanFont from '../components/typograph/SpartanFont';
import LoginBox from '../components/boxs/LoginBox';
import FrameLoginBox from '../components/boxs/FrameLoginBox';
import FormBox from '../components/boxs/FormBox';
import SubTitle from '../components/typograph/SubTitle';
import { Button } from '../components/button/Button';
import { FaGoogle, FaGithub } from 'react-icons/fa';

export default function HomePage() {
  const handleLogin = () => router.push('/api/auth/login');
  const handleAfterLogin = () => router.push('/chat');

  const router = useRouter();
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (user) {
      handleAfterLogin();
    }
  }, [user]);

  if (isLoading) return <BackgroundVideo />;
  if (error) return <BackgroundVideo>{error.message}</BackgroundVideo>;

  return !user ? (
    <BackgroundVideo>
      <FrameLoginBox>
        <LoginBox>
          <FormBox>
            <SpartanFont>Welcome Spartan!</SpartanFont>
            <SubTitle>{theme.name}</SubTitle>
            <h3>Login using your</h3>
            <h4>
              <FaGithub /> Github
            </h4>
            <h4>
              <FaGoogle /> Google
            </h4>
          </FormBox>

          <Button onClick={handleLogin}>
            <span>Sign in</span>
          </Button>
        </LoginBox>
      </FrameLoginBox>
    </BackgroundVideo>
  ) : (
    ''
  );
}
