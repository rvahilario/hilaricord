import styled from 'styled-components';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function CreatedBy() {
	return (
		<Container>
			<h2>
				Developed by <br />
				Renan Hilário
			</h2>
			<li>
				<a
					href={'https://www.linkedin.com/in/renan-hilario/'}
					target={'_blank'}
				>
					<div>
						<FaLinkedin />
					</div>
				</a>
				<a href={'https://github.com/rvahilario'} target={'_blank'}>
					<div>
						<FaGithubSquare />
					</div>
				</a>
			</li>
		</Container>
	);
}

export default CreatedBy;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.neutrals._200};
	margin-left: 3%;

	h2 {
		font-size: 0.8rem;
	}

	li {
		margin-top: 0.5rem;
		display: flex;
		flex-direction: row;

		a {
			color: ${({ theme }) => theme.colors.neutrals._200};
			margin: 0.5rem;
			font-size: 2rem;
			transition: 0.3s;

			:hover {
				color: ${({ theme }) => theme.colors.primary._700};
			}
		}
	}
`;
