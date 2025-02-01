import React, { ReactNode, useState } from 'react';
import { Image } from 'react-native';

import LogoAndLettering from '../../../assets/logo/Logo.png';

import SignInForm from '@/components/organisms/signInForm';
import SignUpForm from '@/components/organisms/signUpForm';
import * as Styled from './styles';

interface IActionButton {
	id: string;
	name: string;
	form: ReactNode;
}

const actionButtons = [
	{ id: 'SignIn-Button', name: 'Login', form: <SignInForm /> },
	{ id: 'SignUp-Button', name: 'Criar Conta', form: <SignUpForm /> }
] as IActionButton[];

function Welcome() {
	const [selectedForm, setSelectedForm] = useState(actionButtons[0].id);

	return (
		<Styled.Container>
			<Styled.Header>
				<Image source={LogoAndLettering} style={{ height: 50, width: 200 }} />

				<Styled.Info>
					<Styled.Title>Bem Vindo ao LocalCourt</Styled.Title>
					<Styled.Description>
						Entre ou crie sua conta agora e comece a reservar as melhores quadras da sua região
					</Styled.Description>
				</Styled.Info>
			</Styled.Header>

			<Styled.Buttons>
				{actionButtons.map((button) => (
					<Styled.Button
						key={button.id}
						isSelected={selectedForm === button.id}
						onPress={() => setSelectedForm(button.id)}
					>
						<Styled.ButtonText isSelected={selectedForm === button.id}>
							{button.name}
						</Styled.ButtonText>
					</Styled.Button>
				))}
			</Styled.Buttons>

			<Styled.FormContainer>
				{actionButtons.find((button) => button.id === selectedForm)?.form}
			</Styled.FormContainer>
		</Styled.Container>
	);
}

export default Welcome;
