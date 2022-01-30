import React, { useEffect, useState } from 'react';
import supabase from '../client';
import { useRouter } from 'next/router';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import theme from '../styles/themes/spartan';
import BackgroundStatic from '../components/background/BackgroundStatic';
import MessageContainer from '../components/boxs/MessageContainer';

export default function ChatPage({ user }) {
  const [message, setMessage] = React.useState('');
  const [listMessages, setListMessages] = React.useState([]);
  // const [userName, setUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    supabase
      .from('hilaricord_messages')
      .select('*')
      .then(({ data }) => {
        // console.log('Data from request:', data);
        setListMessages(data.reverse());
      });
  }, []);

  function handleNewMessage(newMessage) {
    const message = {
      sender: user.nickname,
      text_message: newMessage,
      picture: user.picture,
    };
    setListMessages([message, ...listMessages]);
    setMessage('');
  }

  return (
    <BackgroundStatic>
      <MessageContainer>
      </MessageContainer>
    </BackgroundStatic>

    // <>
    //   {/* <div>
    //     <h4>Profile</h4>
    //     <div>{user.name}</div>
    //     <pre>{JSON.stringify(user, null, 2)}</pre>
    //     {console.log(typeof user.picture)}

    //     <button onClick={() => router.push('/api/auth/logout')}>
    //       Sign Out
    //     </button>
    //   </div> */}

    //   <Box
    //     styleSheet={{
    //       display: 'flex',
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //       backgroundColor: theme.colors.primary._500,
    //       backgroundImage: `url(${theme.background.chat})`,
    //       backgroundRepeat: 'no-repeat',
    //       backgroundSize: 'cover',
    //       backgroundBlendMode: 'multiply',
    //       color: theme.colors.neutrals._50,
    //     }}
    //   >
    //     <Box
    //       styleSheet={{
    //         display: 'flex',
    //         flexDirection: 'column',
    //         flex: 1,
    //         boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
    //         borderRadius: '5px',
    //         backgroundColor: theme.colors.neutrals._700,
    //         height: '100%',
    //         maxWidth: '80vw',
    //         maxHeight: '80vh',
    //         padding: '32px',
    //       }}
    //     >
    //       {/* <Header /> */}
    //       <Box
    //         styleSheet={{
    //           position: 'relative',
    //           display: 'flex',
    //           flex: 1,
    //           height: '90%',
    //           backgroundColor: theme.colors.neutrals._600,
    //           flexDirection: 'column',
    //           borderRadius: '5px',
    //           padding: '16px',
    //         }}
    //       >
    //         {/* <MessagesList listMessages={listMessages} /> */}
    //         <Box
    //           as="form"
    //           styleSheet={{
    //             display: 'flex',
    //             alignItems: 'center',
    //           }}
    //         >
    //           <TextField
    //             value={message}
    //             onChange={(event) => {
    //               const value = event.target.value;
    //               setMessage(value);
    //             }}
    //             onKeyPress={(event) => {
    //               if (event.key === 'Enter') {
    //                 event.preventDefault();
    //                 handleNewMessage(message);
    //               }
    //             }}
    //             placeholder="Insert your message here..."
    //             type="textarea"
    //             styleSheet={{
    //               width: '100%',
    //               border: '0',
    //               resize: 'none',
    //               borderRadius: '5px',
    //               padding: '6px 8px',
    //               backgroundColor: theme.colors.neutrals._800,
    //               marginRight: '12px',
    //               color: theme.colors.neutrals._200,
    //             }}
    //           />
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Box>
    // </>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: '100%',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}

function MessagesList(props) {
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: theme.colors.neutrals._50,
        marginBottom: '16px',
      }}
    >
      {console.log(props)}
      {props.listMessages.map((message) => {
        return (
          <Text
            key={message.id}
            tag="li"
            styleSheet={{
              borderRadius: '5px',
              padding: '6px',
              marginBottom: '12px',
              hover: {
                backgroundColor: theme.colors.neutrals._700,
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: '8px',
              }}
            >
              <Image
                styleSheet={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '8px',
                }}
                src={message.picture}
              />
              <Text tag="strong">{message.sender}</Text>
              <Text
                styleSheet={{
                  fontSize: '10px',
                  marginLeft: '8px',
                  color: theme.colors.neutrals._300,
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {message.text_message}
          </Text>
        );
      })}
    </Box>
  );
}

// export const getServerSideProps = withPageAuthRequired();
