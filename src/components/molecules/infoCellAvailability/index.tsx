import React from 'react';

import { convertToSaoPauloTime, formatTimeTo24Hour } from '@/helpers/dateFormating';
import { EFormMode } from '@/helpers/enums';
import { colors } from '@/styles/theme';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Control, Controller, FieldValues } from 'react-hook-form';
import * as Styled from './styles';

interface InfoCellAvailabilityProps<T extends FieldValues> {
	startValue?: Date;
	endValue?: Date;
	control: Control<T>;
	mode?: EFormMode;
}

function InfoCellAvailability<T extends FieldValues>({
	startValue,
	endValue,
	control,
	mode = EFormMode.VIEW
}: InfoCellAvailabilityProps<T>) {
	return (
		<Styled.Container>
			<Styled.Label>Disponibilidade</Styled.Label>

			{mode === EFormMode.VIEW && startValue && endValue && (
				<Styled.Value>{`${formatTimeTo24Hour(startValue)} - ${formatTimeTo24Hour(endValue)}`}</Styled.Value>
			)}
			{mode !== EFormMode.VIEW && (
				<Styled.Fields>
					<Controller
						control={control}
						name={'availabilityStart' as never}
						defaultValue={convertToSaoPauloTime(new Date('2025-02-11T08:00:00-03:00')) as never}
						render={({ field: { onChange, value } }) => (
							<DateTimePicker
								value={new Date(value)}
								mode="time"
								accentColor={colors.acent}
								onChange={(_, selectedDate) => onChange(convertToSaoPauloTime(selectedDate!))}
							/>
						)}
					/>
					<Controller
						control={control}
						name={'availabilityEnd' as never}
						defaultValue={convertToSaoPauloTime(new Date('2025-02-11T22:00:00-03:00')) as never}
						render={({ field: { onChange, value } }) => (
							<DateTimePicker
								value={new Date(value)}
								mode="time"
								accentColor={colors.acent}
								onChange={(_, selectedDate) => onChange(convertToSaoPauloTime(selectedDate!))}
							/>
						)}
					/>
				</Styled.Fields>
			)}
		</Styled.Container>
	);
}

export default InfoCellAvailability;
