import Button from '@/components/atoms/button';
import Chip from '@/components/atoms/chip';
import CourtCard from '@/components/atoms/courtCard';
import Divisor from '@/components/atoms/divisor';
import SectionTitle from '@/components/atoms/sectionTitle';
import { DefaultModalities } from '@/helpers/defaultModalities';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function index() {
	const { control, handleSubmit } = useForm();
	return (
		<SafeAreaView style={{ gap: 16, padding: 16 }}>
			<SectionTitle />

			<CourtCard variant="dashboard" styleVariant="horizontal" />
			<CourtCard variant="myCourts" styleVariant="horizontal" />
			<CourtCard variant="myReservations" styleVariant="horizontal" />

			<Controller
				control={control}
				name="modality-radio"
				render={({ field: { onChange, value } }) => (
					<View style={{ flexDirection: 'row', gap: 8 }}>
						<Chip
							icon={DefaultModalities.basketball.icon}
							selected={value === DefaultModalities.basketball.name}
							onPress={() => onChange(DefaultModalities.basketball.name)}
						>
							{DefaultModalities.basketball.name}
						</Chip>
						<Chip
							icon={DefaultModalities.soccer.icon}
							selected={value === DefaultModalities.soccer.name}
							onPress={() => onChange(DefaultModalities.soccer.name)}
						>
							{DefaultModalities.soccer.name}
						</Chip>
					</View>
				)}
			/>

			<Divisor />

			<Controller
				control={control}
				name="modality-checkbox"
				defaultValue={[]}
				render={({ field: { onChange, value } }) => (
					<View style={{ flexDirection: 'row', gap: 8 }}>
						<Chip
							selected={value.includes(DefaultModalities.basketball.name)}
							onPress={() => {
								if (value.includes(DefaultModalities.basketball.name)) {
									onChange(value.filter((v: string) => v !== DefaultModalities.basketball.name));
								} else {
									onChange([...value, DefaultModalities.basketball.name]);
								}
							}}
						>
							{DefaultModalities.basketball.name}
						</Chip>
						<Chip
							selected={value.includes(DefaultModalities.soccer.name)}
							onPress={() => {
								if (value.includes(DefaultModalities.soccer.name)) {
									onChange(value.filter((v: string) => v !== DefaultModalities.soccer.name));
								} else {
									onChange([...value, DefaultModalities.soccer.name]);
								}
							}}
						>
							{DefaultModalities.soccer.name}
						</Chip>
					</View>
				)}
			/>

			<Chip icon={DefaultModalities.basketball.icon} selected>
				{DefaultModalities.basketball.name}
			</Chip>
			<Chip icon={DefaultModalities.soccer.icon}>{DefaultModalities.soccer.name}</Chip>

			<Button color="green" onClick={handleSubmit((data) => console.log(data))}>
				Submit
			</Button>
		</SafeAreaView>
	);
}

export default index;
