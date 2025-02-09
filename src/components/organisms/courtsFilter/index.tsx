import { Button, Chip } from '@/components/atoms';
import ArrowButton from '@/components/atoms/arrowButton';
import TextField from '@/components/atoms/textField';
import CollapsibleSection from '@/components/molecules/collapsibleSection';
import { convertToSaoPauloTime } from '@/helpers/dateFormating';
import { DefaultExtras } from '@/helpers/defaultExtras';
import { DefaultModalities } from '@/helpers/defaultModalities';
import { DefaultRatings } from '@/helpers/defaultRatings';
import { colors } from '@/styles/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BottomSheet, { BottomSheetBackdrop, TouchableOpacity } from '@gorhom/bottom-sheet';
import { zodResolver } from '@hookform/resolvers/zod';
import DateTimePicker from '@react-native-community/datetimepicker';
import Slider from '@react-native-community/slider';
import React, { useEffect, useRef, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { z } from 'zod';
import * as Styled from './styles';

const formSchema = z.object({
	searchTerm: z.string().optional(),
	price: z.number(),
	modalities: z.array(z.string()),
	availability: z.boolean(),
	availabilityDate: z.string().transform((x) => convertToSaoPauloTime(new Date(x))),
	duration: z.string().optional(),
	rating: z.string().optional(),
	extras: z.array(z.string())
});

type formSchemaType = z.infer<typeof formSchema>;

interface CourtsFilterProps {
	isVisible: boolean;
	onClose: () => void;
}

function CourtsFilter({ isVisible, onClose }: CourtsFilterProps) {
	const sheetRef = useRef<BottomSheet>(null);

	const [currentSearchTerm, setCurrentSearchTerm] = useState<string>();

	const { control, handleSubmit, getValues, setValue, reset } = useForm<formSchemaType>({
		resolver: zodResolver(formSchema)
	});

	const [priceWatch, availabilityWatch] = useWatch({
		control,
		name: ['price', 'availability']
	});

	function clearSearchTerm() {
		setValue('searchTerm', undefined);
		setCurrentSearchTerm(undefined);
	}

	function onSubmit(data: formSchemaType) {
		console.log('data', data);
	}

	function onReset() {
		reset();
		setValue('price', 0);
	}

	function closeFilterSheet() {
		sheetRef.current?.close();
		onClose();
	}

	useEffect(() => {
		if (isVisible) {
			sheetRef.current?.snapToIndex(0);
		} else {
			closeFilterSheet();
		}
	}, [isVisible]);

	return (
		<BottomSheet
			ref={sheetRef}
			index={isVisible ? 0 : -1}
			snapPoints={['90%']}
			enableDynamicSizing={false}
			enablePanDownToClose
			backdropComponent={(props) => (
				<BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} opacity={0.3} />
			)}
			onClose={onClose}
			backgroundStyle={{ backgroundColor: colors.gray[100] }}
		>
			<Styled.Container>
				<Styled.Header>
					<ArrowButton onPress={() => closeFilterSheet()} direction="left" />

					<Styled.Title>Filtros</Styled.Title>
					<TouchableOpacity onPress={() => onReset()}>
						<MaterialIcons name="refresh" size={24} color={colors.gray[800]} />
					</TouchableOpacity>
				</Styled.Header>
				<Styled.Body>
					<View>
						<TextField
							control={control}
							name="searchTerm"
							placeholder="Buscar por quadra, bairro ou cidade"
							icon={<MaterialIcons name="search" size={20} color={colors.gray[800]} />}
							iconPosition="right"
							showError={false}
							onBlur={() => setCurrentSearchTerm(getValues('searchTerm'))}
						/>

						{currentSearchTerm && (
							<Styled.SearchTermShield>
								<Styled.SearchTerm>{currentSearchTerm}</Styled.SearchTerm>
								<TouchableOpacity onPress={clearSearchTerm}>
									<MaterialIcons name="close" size={20} color={colors.gray[600]} />
								</TouchableOpacity>
							</Styled.SearchTermShield>
						)}
					</View>

					<Styled.FilterSection>
						<Styled.PriceHeader>
							<Styled.FilterTitle>Preço por hora</Styled.FilterTitle>
							<Styled.PriceDescription>{`Até R$ ${priceWatch || 0}/hora`}</Styled.PriceDescription>
						</Styled.PriceHeader>
						<Controller
							control={control}
							name="price"
							defaultValue={0}
							render={({ field: { onChange, value } }) => (
								<Slider
									value={value}
									onValueChange={onChange}
									step={5}
									minimumValue={0}
									maximumValue={500}
									minimumTrackTintColor={colors.acent}
									maximumTrackTintColor={colors.gray[200]}
									thumbTintColor={colors.gray[700]}
								/>
							)}
						/>
					</Styled.FilterSection>

					<Styled.FilterSection>
						<Styled.FilterTitle>Modalidade</Styled.FilterTitle>
						<Controller
							control={control}
							name="modalities"
							defaultValue={[]}
							render={({ field: { onChange, value } }) => (
								<Styled.Options>
									{DefaultModalities.map((modality) => (
										<Chip
											key={modality.id}
											selected={value.includes(modality.id)}
											icon={modality.icon || undefined}
											onPress={() => {
												if (value.includes(modality.id)) {
													onChange(value.filter((v: string) => v !== modality.id));
												} else {
													onChange([...value, modality.id]);
												}
											}}
										>
											{modality.name}
										</Chip>
									))}
								</Styled.Options>
							)}
						/>
					</Styled.FilterSection>

					<View>
						<Styled.AvailabilityHeader>
							<Styled.FilterTitle>Disponibilidade</Styled.FilterTitle>

							<Controller
								control={control}
								name="availability"
								defaultValue={false}
								render={({ field: { onChange, value } }) => (
									<BouncyCheckbox
										size={22}
										unFillColor={colors.gray[100]}
										fillColor={colors.gray[500]}
										useBuiltInState={false}
										isChecked={value}
										onPress={(isChecked) => onChange(!isChecked)}
										disableText
									/>
								)}
							/>
						</Styled.AvailabilityHeader>

						<CollapsibleSection expanded={availabilityWatch}>
							<Styled.Availability>
								<Controller
									control={control}
									name="availabilityDate"
									defaultValue={convertToSaoPauloTime(new Date())}
									render={({ field: { onChange, value } }) => (
										<DateTimePicker
											value={new Date(value)}
											mode="datetime"
											locale="pt-BR"
											accentColor={colors.acent}
											onChange={(_, selectedDate) => onChange(convertToSaoPauloTime(selectedDate!))}
										/>
									)}
								/>

								<TextField
									control={control}
									name="duration"
									placeholder="Duração"
									keyboardType="numeric"
									maxLength={1}
									showError={false}
								/>
							</Styled.Availability>
						</CollapsibleSection>
					</View>

					<Styled.FilterSection>
						<Styled.FilterTitle>Avaliação</Styled.FilterTitle>
						<Controller
							control={control}
							name="rating"
							defaultValue=""
							render={({ field: { onChange, value } }) => (
								<Styled.Options>
									{DefaultRatings.map((modality) => (
										<Chip
											key={modality.id}
											icon={<MaterialIcons name="star" size={16} color="#EBC351" />}
											selected={value === modality.id}
											onPress={() => onChange(modality.id !== value ? modality.id : undefined)}
										>
											{modality.name}
										</Chip>
									))}
								</Styled.Options>
							)}
						/>
					</Styled.FilterSection>

					<Styled.FilterSection>
						<Styled.FilterTitle>Extras</Styled.FilterTitle>
						<Controller
							control={control}
							name="extras"
							defaultValue={[]}
							render={({ field: { onChange, value } }) => (
								<Styled.Options>
									{DefaultExtras.map((extra) => (
										<Chip
											key={extra.id}
											selected={value.includes(extra.id)}
											onPress={() => {
												if (value.includes(extra.id)) {
													onChange(value.filter((v: string) => v !== extra.id));
												} else {
													onChange([...value, extra.id]);
												}
											}}
										>
											{extra.name}
										</Chip>
									))}
								</Styled.Options>
							)}
						/>
					</Styled.FilterSection>
				</Styled.Body>

				<Button fullWidth color={colors.acent} onClick={handleSubmit(onSubmit)}>
					Aplicar Filtros
				</Button>
			</Styled.Container>
		</BottomSheet>
	);
}

export default CourtsFilter;
