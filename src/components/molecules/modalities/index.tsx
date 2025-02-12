import React, { useMemo } from 'react';

import { Chip } from '@/components/atoms';
import { DefaultModalities } from '@/helpers/defaultModalities';
import { EFormMode } from '@/helpers/enums';
import { Control, Controller, FieldValues, Path, PathValue } from 'react-hook-form';
import * as Styled from './styles';

interface ModalitiesProps<T extends FieldValues> {
	control: Control<T>;
	mode?: EFormMode;
	selectedModalities?: string[];
}

function Modalities<T extends FieldValues>({
	control,
	selectedModalities,
	mode = EFormMode.VIEW
}: ModalitiesProps<T>) {
	const displayedModalities = useMemo(
		() =>
			mode === EFormMode.VIEW && selectedModalities
				? DefaultModalities.filter((modality) => selectedModalities.includes(modality.id))
				: DefaultModalities,
		[mode]
	);

	return (
		<Controller
			control={control}
			name={'modalities' as Path<T>}
			defaultValue={[] as PathValue<T, Path<T>>}
			disabled={mode === EFormMode.VIEW}
			render={({ field: { onChange, value, disabled } }) => (
				<Styled.Options>
					{displayedModalities.map((modality) => (
						<Chip
							key={modality.id}
							selected={mode !== EFormMode.VIEW && value.includes(modality.id)}
							icon={modality.icon || undefined}
							onPress={
								disabled
									? undefined
									: () => {
											if (value.includes(modality.id)) {
												onChange(value.filter((v: string) => v !== modality.id));
											} else {
												onChange([...value, modality.id]);
											}
										}
							}
						>
							{modality.name}
						</Chip>
					))}
				</Styled.Options>
			)}
		/>
	);
}

export default Modalities;
