import React, { useRef } from 'react';

import { TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { s } from './styles';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface TextFieldProps {
	name: string;
	control: Control<FieldValues>;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';
	placeholder?: string;
}

function TextField({icon, name, placeholder, control, iconPosition = 'left'}: TextFieldProps) {
	const inputRef = useRef<TextInput>(null);

	return (
		<TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
			<View style={[s.container, iconPosition === 'left' ? s.iconLeft : s.iconRight]} >
				{icon}
				<Controller
						control={control}
						name={name}
						defaultValue=''
						render={({ field: { onChange, value } }) => (
								<TextInput
										ref={inputRef}
										style={s.input}
										onChangeText={onChange}
										value={value}
										placeholder={placeholder}
								/>
						)}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default TextField;
