import styled from 'styled-components';

function Nickname(props) {
	return <StyledFont>{props.children}</StyledFont>;
}

const StyledFont = styled.div`
	color: ${({ theme }) => theme.colors.neutrals._100};
	font-size: 1rem;
	margin-right: 10px;
`;

export default Nickname;
