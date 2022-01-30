import React, { useEffect, useState } from 'react';
// import { supabase } from '../client';
import { useRouter } from 'next/router';

import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import theme from '../styles/themes/spartan';

// Key made public only for study purpose

export default function ChatPage() {
  const [message, setMessage] = React.useState('');
  const [listMessages, setListMessages] = React.useState([]);
  const [user, setUser] = useState(null);

  const router = useRouter();

  async function checkUser() {
    const user = supabase.auth.user();
    // console.log('User: ', user.user_metadata);
    setUser(user);
  }

  // useEffect(() => {
  //   supabase
  //     .from('hilaricord_messages')
  //     .select('*')
  //     .then(({ data }) => {
  //       // console.log('Data from request:', data);
  //       setListMessages(data.reverse());
  //     });
  // }, []);

  function handleNewMessage(newMessage) {
    const message = {
      // id: listMessages.length + 1,
      de: 'suyhil',
      texto: newMessage,
    };

    setListMessages([message, ...listMessages]);
    setMessage('');
  }

  // async function signOut() {
  //   await supabase.auth.signOut();
  //   setUser(null);
  // }

  return (
    <div>
      <h1>Hello, </h1>
      {/* <img src={} width="200px" /> */}
      <button /*onClick={signOut}*/>Sign Out</button>
    </div>
  );

  // return;
  // (
  //   <Box
  //     styleSheet={{
  //       display: 'flex',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       backgroundColor: theme.colors.primary[500],
  //       backgroundImage: `url(${theme.background.chat})`,
  //       backgroundRepeat: 'no-repeat',
  //       backgroundSize: 'cover',
  //       backgroundBlendMode: 'multiply',
  //       color: theme.colors.neutrals[50],
  //     }}
  //   >
  //     <Box
  //       styleSheet={{
  //         display: 'flex',
  //         flexDirection: 'column',
  //         flex: 1,
  //         boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
  //         borderRadius: '5px',
  //         backgroundColor: theme.colors.neutrals[700],
  //         height: '100%',
  //         maxWidth: '80vw',
  //         maxHeight: '80vh',
  //         padding: '32px',
  //       }}
  //     >
  //       <Header />
  //       <Box
  //         styleSheet={{
  //           position: 'relative',
  //           display: 'flex',
  //           flex: 1,
  //           height: '90%',
  //           backgroundColor: theme.colors.neutrals[600],
  //           flexDirection: 'column',
  //           borderRadius: '5px',
  //           padding: '16px',
  //         }}
  //       >
  //         <MessagesList listMessages={listMessages} />
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
  //               backgroundColor: theme.colors.neutrals[800],
  //               marginRight: '12px',
  //               color: theme.colors.neutrals[200],
  //             }}
  //           />
  //         </Box>
  //       </Box>
  //     </Box>
  //   </Box>
  // );
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
        color: theme.colors.neutrals[50],
        marginBottom: '16px',
      }}
    >
      {props.listMessages.map((actualMessage) => {
        return (
          <Text
            key={actualMessage.id}
            tag="li"
            styleSheet={{
              borderRadius: '5px',
              padding: '6px',
              marginBottom: '12px',
              hover: {
                backgroundColor: theme.colors.neutrals[700],
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
                src={`https://github.com/${actualMessage.de}.png`}
              />
              <Text tag="strong">{actualMessage.de}</Text>
              <Text
                styleSheet={{
                  fontSize: '10px',
                  marginLeft: '8px',
                  color: theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {actualMessage.texto}
          </Text>
        );
      })}
    </Box>
  );
}
