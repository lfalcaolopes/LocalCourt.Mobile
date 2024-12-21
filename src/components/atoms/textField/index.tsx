import React, { useRef } from 'react';

import { Control, Controller, FieldValues } from 'react-hook-form';
import { TextInput, TouchableWithoutFeedback } from 'react-native';
import * as Styled from './styles';

export interface TextFieldProps {
	name: string;
	control: Control<FieldValues>;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';
	placeholder?: string;
}

function TextField({ icon, name, placeholder, control, iconPosition = 'left' }: TextFieldProps) {
	const inputRef = useRef<TextInput>(null);

	return (
		<TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
			<Styled.Container iconPosition={iconPosition}>
				{icon}
				<Controller
					control={control}
					name={name}
					defaultValue=""
					render={({ field: { onChange, value } }) => (
						<Styled.TextInput
							ref={inputRef}
							onChangeText={onChange}
							value={value}
							placeholder={placeholder}
						/>
					)}
				/>
			</Styled.Container>
		</TouchableWithoutFeedback>
	);
}

export default TextField;
