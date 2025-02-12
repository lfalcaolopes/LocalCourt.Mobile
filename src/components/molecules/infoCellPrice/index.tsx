import React from 'react';

import TextField from '@/components/atoms/textField';
import { EFormMode } from '@/helpers/enums';
import { formatPrice } from '@/helpers/valueFormatting';
import { Control, FieldValues } from 'react-hook-form';
import * as Styled from './styles';

interface InfoCellPriceProps<T extends FieldValues> {
	value: string;
	mode?: EFormMode;
	control?: Control<T>;
	errorMessage?: string;
}

function InfoCellPrice<T extends FieldValues>({
	value,
	control,
	errorMessage,
	mode = EFormMode.VIEW
}: InfoCellPriceProps<T>) {
	return (
		<>
			{mode === EFormMode.VIEW && (
				<Styled.Price>
					<Styled.PriceText>{value}</Styled.PriceText>
					<Styled.PerHour>/ hora</Styled.PerHour>
				</Styled.Price>
			)}
			{mode !== EFormMode.VIEW && control && (
				<Styled.Container>
					<Styled.Label>Preço por Hora</Styled.Label>
					<TextField
						control={control}
						name="price"
						placeholder="R$ 0,00"
						errorMessage={errorMessage}
						formatter={formatPrice}
						keyboardType="numeric"
					/>
				</Styled.Container>
			)}
		</>
	);
}

export default InfoCellPrice;
