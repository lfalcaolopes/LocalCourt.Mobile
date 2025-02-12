import React, { useRef } from 'react';

import { colors } from '@/styles/theme';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { TextInput, TextInputProps } from 'react-native';
import * as Styled from './styles';

export interface TextFieldProps<T extends FieldValues> extends TextInputProps {
	name: keyof T;
	control: Control<T>;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';
	placeholder?: string;
	showError?: boolean;
	errorMessage?: string;
	formatter?: (value: string) => string;
}

function TextField<T extends FieldValues>({
	icon,
	name,
	placeholder,
	control,
	iconPosition = 'left',
	showError = true,
	errorMessage,
	formatter,
	...props
}: TextFieldProps<T>) {
	const inputRef = useRef<TextInput>(null);

	return (
		<Styled.Container>
			<Styled.TextField onPress={() => inputRef.current?.focus()} iconPosition={iconPosition}>
				{icon}
				<Controller
					control={control}
					name={name as never}
					defaultValue={'' as never}
					render={({ field: { onChange, value } }) => (
						<Styled.TextInput
							ref={inputRef}
							onChangeText={(text: string) => onChange(formatter ? formatter(text) : text)}
							value={formatter ? formatter(value) : value}
							placeholder={placeholder}
							placeholderTextColor={colors.gray[400]}
							{...props}
						/>
					)}
				/>
			</Styled.TextField>
			{showError && <Styled.Error>{errorMessage}</Styled.Error>}
		</Styled.Container>
	);
}

export default TextField;
