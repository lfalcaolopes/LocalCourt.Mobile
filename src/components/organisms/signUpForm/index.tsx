import React from 'react';

import { Button } from '@/components/atoms';
import TextField from '@/components/atoms/textField';
import { zodErrors } from '@/helpers/zodErrors';
import { colors } from '@/styles/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import * as Styled from './styles';

const formSchema = z
	.object({
		name: z.string().nonempty(zodErrors.emptyString('nome')),
		email: z.string().nonempty(zodErrors.emptyString('email')).email(zodErrors.invalidEmail),
		password: z.string().nonempty(zodErrors.emptyString('senha')),
		confirmPassword: z.string().nonempty(zodErrors.emptyString('confirmar senha'))
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: zodErrors.passwordMismatch,
		path: ['confirmPassword']
	});

type formSchemaType = z.infer<typeof formSchema>;

function SignUpForm() {
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<formSchemaType>({
		resolver: zodResolver(formSchema)
	});

	function onSubmit(data: formSchemaType) {
		console.log('data', data);
	}

	return (
		<Styled.Container>
			<Styled.Fields>
				<TextField
					control={control}
					name="name"
					icon={<MaterialIcons name="person-outline" size={24} color={colors.gray[600]} />}
					placeholder="Nome"
					errorMessage={errors.name?.message}
				/>
				<TextField
					control={control}
					name="email"
					icon={<MaterialIcons name="mail-outline" size={24} color={colors.gray[600]} />}
					placeholder="Email"
					errorMessage={errors.email?.message}
				/>
				<TextField
					control={control}
					name="password"
					icon={<MaterialIcons name="lock-outline" size={24} color={colors.gray[600]} />}
					placeholder="Senha"
					errorMessage={errors.password?.message}
					secureTextEntry
				/>
				<TextField
					control={control}
					name="confirmPassword"
					icon={<MaterialIcons name="lock-outline" size={24} color={colors.gray[600]} />}
					placeholder="Confirmar senha"
					errorMessage={errors.confirmPassword?.message}
					secureTextEntry
				/>
			</Styled.Fields>
			<Button color={colors.acent} onClick={handleSubmit(onSubmit)} fullWidth>
				Criar conta
			</Button>
		</Styled.Container>
	);
}

export default SignUpForm;
