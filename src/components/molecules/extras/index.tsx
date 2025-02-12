import React, { useMemo } from 'react';

import { Chip } from '@/components/atoms';
import { DefaultExtras } from '@/helpers/defaultExtras';
import { EFormMode } from '@/helpers/enums';
import { Control, Controller, FieldValues, Path, PathValue } from 'react-hook-form';
import * as Styled from './styles';

interface ExtrasProps<T extends FieldValues> {
	control: Control<T>;
	mode?: EFormMode;
	selectedExtras?: string[];
}

function Extras<T extends FieldValues>({
	selectedExtras,
	control,
	mode = EFormMode.VIEW
}: ExtrasProps<T>) {
	const displayedExtras = useMemo(
		() =>
			mode === EFormMode.VIEW && selectedExtras
				? DefaultExtras.filter((extra) => selectedExtras.includes(extra.id))
				: DefaultExtras,
		[mode]
	);

	return (
		<Controller
			control={control}
			name={'extras' as Path<T>}
			defaultValue={[] as PathValue<T, Path<T>>}
			disabled={mode === EFormMode.VIEW}
			render={({ field: { onChange, value, disabled } }) => (
				<Styled.Options>
					{displayedExtras.map((extra) => (
						<Chip
							key={extra.id}
							selected={mode !== EFormMode.VIEW && value.includes(extra.id)}
							onPress={
								disabled
									? undefined
									: () => {
											if (value.includes(extra.id)) {
												onChange(value.filter((v: string) => v !== extra.id));
											} else {
												onChange([...value, extra.id]);
											}
										}
							}
						>
							{extra.name}
						</Chip>
					))}
				</Styled.Options>
			)}
		/>
	);
}

export default Extras;
