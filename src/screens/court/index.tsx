import React, { useEffect, useRef, useState } from 'react';

import { RootStackParamList } from '@/app';
import { ArrowButton, Button, Divisor } from '@/components/atoms';
import CourtStatusButton from '@/components/atoms/courtStatusButton';
import Extras from '@/components/molecules/extras';
import ImageCarousel from '@/components/molecules/imageCarousel';
import InfoCell from '@/components/molecules/infoCell';
import InfoCellAvailability from '@/components/molecules/infoCellAvailability';
import InfoCellPrice from '@/components/molecules/infoCellPrice';
import Modalities from '@/components/molecules/modalities';
import { EButtonVariant, ECourtStatus, EFormMode } from '@/helpers/enums';
import { formatPrice, formatZipCode } from '@/helpers/valueFormatting';
import { zodErrors } from '@/helpers/zodErrors';
import { colors } from '@/styles/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { z } from 'zod';
import * as Styled from './styles';

type CourtScreenProps = NativeStackScreenProps<RootStackParamList, 'Court'>;

const formSchema = z.object({
	name: z.string().nonempty(zodErrors.requiredField),
	availabilityStart: z.string().nonempty(zodErrors.requiredField),
	availabilityEnd: z.string().nonempty(zodErrors.requiredField),
	price: z.string().nonempty(zodErrors.requiredField),
	modalities: z.array(z.string()),
	extras: z.array(z.string()),
	zipCode: z.string().nonempty(zodErrors.requiredField),
	state: z.string().nonempty(zodErrors.requiredField),
	city: z.string().nonempty(zodErrors.requiredField),
	district: z.string().nonempty(zodErrors.requiredField),
	number: z.string().nonempty(zodErrors.requiredField),
	street: z.string().nonempty(zodErrors.requiredField),
	addressComplement: z.string()
});

type formSchemaType = z.infer<typeof formSchema>;

function Court({ route }: CourtScreenProps) {
	const { court, isAdmin } = route.params;

	const scrollRef = useRef<ScrollView>(null);
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Court'>>();

	const [formMode, setFormMode] = useState<EFormMode>(court ? EFormMode.VIEW : EFormMode.CREATE);

	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors }
	} = useForm<formSchemaType>({
		resolver: zodResolver(formSchema)
	});

	function enableEditMode() {
		setFormMode(EFormMode.EDIT);

		scrollRef.current?.scrollTo({
			y: 0,
			animated: true
		});
	}

	function onSubmit(data: formSchemaType) {
		console.log('data', data);
	}

	useEffect(() => {
		if (court) {
			setValue('name', court.name);
			setValue('availabilityStart', court.availabilityStart);
			setValue('availabilityEnd', court.availabilityEnd);
			setValue('price', formatPrice(court.price));
			setValue('modalities', court.modalities);
			setValue('extras', court.additionals);
			setValue('zipCode', court.address.zipCode);
			setValue('state', court.address.state);
			setValue('city', court.address.city);
			setValue('district', court.address.district);
			setValue('number', court.address.number);
			setValue('street', court.address.street);
			setValue('addressComplement', court.address.addressComplement);
		}
	}, []);

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
		>
			<Styled.Container ref={scrollRef} showsVerticalScrollIndicator={false}>
				<ArrowButton onPress={() => navigation.goBack()} />

				{formMode === EFormMode.VIEW && court && (
					<Styled.Carousel>
						<ImageCarousel images={court.imagesUrl} />
					</Styled.Carousel>
				)}

				<Styled.Info>
					<Styled.InfoRow>
						<InfoCell
							label="Nome"
							value={court?.name}
							formName="name"
							control={control}
							mode={formMode}
							errorMessage={errors.name?.message}
						/>
					</Styled.InfoRow>
					<Styled.InfoRow>
						<InfoCellAvailability
							control={control}
							mode={formMode}
							startValue={court ? new Date(court.availabilityStart) : undefined}
							endValue={court ? new Date(court.availabilityEnd) : undefined}
						/>

						<InfoCellPrice
							value={court ? formatPrice(court.price) : undefined}
							control={control}
							mode={formMode}
							errorMessage={errors.addressComplement?.message}
						/>
					</Styled.InfoRow>
				</Styled.Info>

				<Divisor />

				<Modalities control={control} mode={formMode} selectedModalities={court?.modalities} />

				<Divisor />

				{court?.additionals.length !== 0 && (
					<>
						<Extras control={control} mode={formMode} selectedExtras={court?.additionals} />

						<Divisor />
					</>
				)}

				<Styled.Info>
					<Styled.InfoRow>
						<InfoCell
							label="CEP"
							value={court?.address.zipCode}
							formName="zipCode"
							control={control}
							mode={formMode}
							errorMessage={errors.zipCode?.message}
							inputMaskFormatter={formatZipCode}
						/>
					</Styled.InfoRow>
					<Styled.InfoRow>
						<InfoCell
							label="Estado"
							value={court?.address.state}
							formName="state"
							control={control}
							mode={formMode}
							errorMessage={errors.state?.message}
						/>

						<InfoCell
							label="Cidade"
							value={court?.address.city}
							formName="city"
							control={control}
							mode={formMode}
							errorMessage={errors.city?.message}
						/>
					</Styled.InfoRow>
					<Styled.InfoRow>
						<InfoCell
							label="Bairro"
							value={court?.address.district}
							formName="district"
							control={control}
							mode={formMode}
							errorMessage={errors.district?.message}
						/>

						<InfoCell
							label="Número"
							value={court?.address.number}
							formName="number"
							control={control}
							mode={formMode}
							errorMessage={errors.number?.message}
						/>
					</Styled.InfoRow>
					<Styled.InfoRow>
						<InfoCell
							label="Rua/Avenida"
							value={court?.address.street}
							formName="street"
							control={control}
							mode={formMode}
							errorMessage={errors.street?.message}
						/>

						{formMode === EFormMode.VIEW && (
							<InfoCell label="Contato" value={court?.manager.phoneNumber} />
						)}
					</Styled.InfoRow>
					<Styled.InfoRow>
						<InfoCell
							label="Complemento (opicional)"
							value={court?.address.addressComplement}
							formName="addressComplement"
							control={control}
							mode={formMode}
							errorMessage={errors.addressComplement?.message}
						/>
					</Styled.InfoRow>
				</Styled.Info>

				{formMode === EFormMode.VIEW && court && isAdmin && (
					<Styled.AdminButtons>
						<CourtStatusButton
							status={court.status ? ECourtStatus.ACTIVE : ECourtStatus.INACTIVE}
							courtId={court.id}
						/>
						<Button
							fullWidth
							onClick={enableEditMode}
							color={colors.gray[800]}
							variant={EButtonVariant.OUTLINE}
						>
							Editar
						</Button>
					</Styled.AdminButtons>
				)}
				{formMode === EFormMode.VIEW && !isAdmin && (
					<Button fullWidth onClick={() => console.log('reserva')} color={colors.confirmation}>
						Reservar
					</Button>
				)}
				{formMode !== EFormMode.VIEW && (
					<Button
						fullWidth
						onClick={handleSubmit(onSubmit)}
						color={colors.gray[800]}
						variant={EButtonVariant.OUTLINE}
					>
						Salvar
					</Button>
				)}
			</Styled.Container>
		</KeyboardAvoidingView>
	);
}

export default Court;
