import styled from 'styled-components';

import Avatar from '../avatars/Avatar';
import Nickname from '../typograph/Nickname';
import SelfContainer from '../boxs/SelfContainer';
import SenderContainer from '../boxs/SenderContainer';
import theme from '../../styles/themes/spartan';

function ListMessagesRender(props) {
  return (
    <Container>
      {props.listMessages.map((message) => {
        return props.user.nickname === message.sender ? (
          <SelfContainer message={message} key={message.id}></SelfContainer>
        ) : (
          <SenderContainer message={message} key={message.id}></SenderContainer>
        );
      })}
    </Container>
  );
}

export default ListMessagesRender;

const Container = styled.div`
  /* max-height: 90%; */
  /* height: 100%; */
  /* background-color: red; */
  margin-bottom: 5px;
  display: flex;
  flex: 1;
  flex-direction: column-reverse;
  overflow: auto;
  color: ${theme.colors.neutrals._50};
  margin-bottom: 16px;

  ::-webkit-scrollbar {
    border-radius: 10px;
    width: 15px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 4px 4px ${theme.colors.primary._600};
    border: solid 4px transparent;
  }
`;

// const SenderContainer = styled.div`
//   border-radius: 10px;
//   padding: 6px;
//   margin-bottom: 12px;
//   transition: 0.3s;
//   /* display: flex; */
//   /* flex: 2; */
//   /* flex-direction: row-reverse; */

//   & :hover {
//     background-color: ${theme.colors.primary._600};
//   }
// `;

// const Text = styled.div`
//   display: flex;
//   margin-right: auto;

//   flex-direction: row-reverse;
// `;

// const InfoContainer = styled.div`
//   margin-bottom: 10px;
//   display: flex;
//   flex-direction: row-reverse;
// `;

// const DateContainer = styled.div`
//   /* margin-left: auto; */
//   margin-right: auto;
//   color: ${theme.colors.neutrals._300};
//   font-size: 12px;
// `;
