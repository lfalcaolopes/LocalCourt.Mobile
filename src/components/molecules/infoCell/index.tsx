import React from 'react';

import TextField from '@/components/atoms/textField';
import { EFormMode } from '@/helpers/enums';
import { Control, FieldValues } from 'react-hook-form';
import * as Styled from './styles';

interface InfoCellProps<T extends FieldValues> {
	label: string;
	value: string;
	mode?: EFormMode;
	control?: Control<T>;
	formName?: keyof T;
	errorMessage?: string;
}

function InfoCell<T extends FieldValues>({
	label,
	value,
	control,
	formName,
	errorMessage,
	mode = EFormMode.VIEW
}: InfoCellProps<T>) {
	return (
		<Styled.Container>
			<Styled.Label>{label}</Styled.Label>

			{mode === EFormMode.VIEW && <Styled.Value>{value}</Styled.Value>}
			{mode !== EFormMode.VIEW && control && formName && (
				<TextField
					control={control}
					name={formName}
					placeholder={label}
					errorMessage={errorMessage}
				/>
			)}
		</Styled.Container>
	);
}

export default InfoCell;
