import React, { useEffect, useState } from 'react';
import supabase from '../client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import BackgroundStatic from '../components/background/BackgroundStatic';
import ChatContainer from '../components/boxs/ChatContainer';
import MessageContainer from '../components/boxs/MessageContainer';
import Header from '../components/header/Header';
import ListMessagesRender from '../components/listMessagesRender/ListMessagesRender';
import InputText from '../components/inputText/InputText';
import InputBox from '../components/boxs/InputBox';

export default function ChatPage({ user }) {
	const [message, setMessage] = useState('');
	const [listMessages, setListMessages] = useState([]);

	useEffect(() => {
		supabase
			.from('hilaricord_messages')
			.select('*')
			.then(({ data }) => {
				setListMessages(data.reverse());
			});
	}, []);

	const handleNewMessage = async (newMessage) => {
		const message = {
			sender: user.name,
			text_message: newMessage,
			picture: user.picture,
			sub: user.sub,
		};

		try {
			await supabase
				.from('hilaricord_messages')
				.insert([message])
				.then(({ data }) => {
					setListMessages([data[0], ...listMessages]);
				});

			setMessage('');
		} catch (error) {
			console.log('error', error);
		}
	};

	const handleDeleteMessage = async (messageToDeleteId) => {
		try {
			await supabase
				.from('hilaricord_messages')
				.delete()
				.eq('id', messageToDeleteId);

			setListMessages(
				listMessages.filter((message) => message.id != messageToDeleteId)
			);
		} catch (error) {
			console.log('error', error);
		}
	};

	let showInfo = true;

	return (
		<BackgroundStatic>
			<ChatContainer>
				{console.log(user)}
				<Header />
				<MessageContainer>
					<ListMessagesRender
						listMessages={listMessages}
						user={user}
						handleDeleteMessage={handleDeleteMessage}
						showInfo={showInfo}
					/>
					<InputBox>
						<InputText
							value={message}
							placeholder={'Message'}
							onChange={(event) => {
								const value = event.target.value;
								setMessage(value);
							}}
							onKeyPress={(event) => {
								if (event.key === 'Enter') {
									event.preventDefault();
									handleNewMessage(message);
								}
							}}
						/>
					</InputBox>
				</MessageContainer>
			</ChatContainer>
		</BackgroundStatic>
	);
}

export const getServerSideProps = withPageAuthRequired();
