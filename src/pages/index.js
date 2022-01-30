import React, { useState, useEffect } from 'react';
import supabase from '../client';
import { useUser } from '@auth0/nextjs-auth0';

import Link from 'next/link';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useRouter } from 'next/router';

import theme from '../styles/themes/spartan';
import BackgroundVideo from '../components/backgroundVideo/BackgroundVideo';
import SpartanFont from '../components/typograph/SpartanFont';
import LoginBox from '../components/boxs/LoginBox';
import FrameLoginBox from '../components/boxs/FrameLoginBox';
import FormBox from '../components/boxs/FormBox';
import SubTitle from '../components/typograph/SubTitle';
import { InputBox } from '../components/input/InputText';
import { LoginButton } from '../components/button/LoginButton';
import InfoBox from '../components/boxs/InfoBox';
import Avatar from '../components/avatars/Avatar';

// function Title(props) {
//   const Tag = props.tag || 'h1';
//   return (
//     <>
//       <Tag>{props.children}</Tag>
//       <style jsx>{`
//         ${Tag} {
//           color: ${theme.colors.neutrals[50]};
//           font-family: 'godOfWar';
//           font-size: 28px;
//           font-weight: 400;
//         }
//       `}</style>
//     </>
//   );
// }

export default function HomePage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   checkUser();
  //   window.addEventListener('hashChange', function () {
  //     checkUser();
  //   });
  // }, []);

  // const router = useRouter();

  // async function checkUser() {
  //   const user = supabase.auth.user();
  //   // console.log('User: ', user.user_metadata);
  //   setUser(user);
  // }

  // async function signInWithGithub() {
  //   await supabase.auth.signIn({
  //     provider: 'github',
  //   });
  //   router.push('/chat');
  // }

  // async function signOut() {
  //   await supabase.auth.signOut();
  //   setUser(null);
  // }

  // if (user) {
  //   return (
  //     <div>
  //       <h1>Hello, {user.user_metadata.full_name}</h1>
  //       <img src={user.user_metadata.avatar_url} width="200px" />
  //       <button onClick={signOut}>Sign Out</button>
  //     </div>
  //   );
  // }

  return (
    <div>
      {user ? (
        <p>
          Welcome {user.name}! <img src={user.picture} />
          <Link href="/api/auth/logout">
            <a>Logout</a>
          </Link>
          {console.log(user)}
        </p>
      ) : (
        <Link href="/api/auth/login">
          <a>Login</a>
        </Link>
      )}
    </div>
  );

  // return (
  //   <>
  //     <BackgroundVideo>
  //       <FrameLoginBox>
  //         <LoginBox>
  //           <FormBox>
  //             <SpartanFont>
  //               <label>Hello Spartan!</label>
  //             </SpartanFont>
  //             <SubTitle>{theme.name}</SubTitle>
  //             {/* <InputBox
  //               type="text"
  //               // value={userName}
  //               placeholder="username"
  //               // onChange={handleChangeUserName}
  //             /> */}
  //             <LoginButton>Sign in</LoginButton>
  //           </FormBox>
  //           {/* <InfoBox>
  //           <Avatar src={`https://github.com/${username}.png`} />
  //           <img src="/frameGOW.png" width="100%" max-width="600px"></img>
  //         </InfoBox> */}
  //         </LoginBox>
  //       </FrameLoginBox>
  //     </BackgroundVideo>
  //   </>
  // );

  // const [authenticatedState, setAuthenticatedState] =
  //   useState('not-authenticated');

  // const router = useRouter();

  // useEffect(() => {
  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     (event, session) => {
  //       handleAuthChange(event, session);
  //       if (event === 'SIGNED_IN') {
  //         setAuthenticatedState('authenticated');
  //         router.push('/chat');
  //       }
  //       if (event === 'SIGNED_OUT') {
  //         setAuthenticatedState('not-authenticated');
  //       }
  //     }
  //   );
  //   checkUser();
  //   return () => {
  //     authListener.unsubscribe();
  //   };
  // }, []);

  // async function handleAuthChange() {
  //   await fetch('../api/auth', {
  //     method: 'POST',
  //     headers: new Headers({ 'Content-Type': 'application/json' }),
  //     credentials: 'same-origin',
  //     body: JSON.stringify({ event, session }),
  //   });
  // }

  // async function checkUser() {
  //   const user = await supabase.auth.user();
  //   if (user) {
  //     setAuthenticatedState('authenticated');
  //   }
  // }

  {
    /*return (
    <>
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 200px',
          backgroundColor: theme.colors.primary[100],
          backgroundImage: `url(${theme.background.login})`,
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
        }}
      >
        <Box ==============================
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%',
            maxWidth: '600px',
            borderRadius: '10px',
            padding: '32px',
            margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 50%)',
            backgroundColor: theme.colors.neutrals[700],
          }}
        >

          <Box =========================
            as="form"
            onSubmit={function (event) {
              event.preventDefault();
              router.push('/chat');
            }}
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '100%', sm: '50%' },
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            <Title>Welcome back, Spartan!</Title>
            <Text=============
              variant="body3"
              styleSheet={{
                marginBottom: '32px',
                color: theme.colors.neutrals[300],
              }}
            >
              {theme.name}
            </Text=============>
            <TextField=====================
              value={username}
              onChange={function (event) {
                const value = event.target.value;
                setUsername(value);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: theme.colors.neutrals[200],
                  mainColor: theme.colors.neutrals[900],
                  mainColorHighlight: theme.colors.primary[500],
                  backgroundColor: theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Enter"
              fullWidth
              buttonColors={{
                contrastColor: theme.colors.neutrals[50],
                mainColor: theme.colors.primary[600],
                mainColorLight: theme.colors.primary[500],
                mainColorStrong: theme.colors.primary[700],
              }}
            />
          </Box>

          <Box====================
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: theme.colors.neutrals[900],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: theme.colors.neutrals[200],
                backgroundColor: theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '100px',
              }}
            >
              {username}
            </Text>
          </Box=>
        </Box>
      </Box>
    </>
  );*/
  }
}
