import { ImageSourcePropType } from 'react-native';
import testImage from '../../assets/test-image.png';

interface IUser {
	id: string;
	name: string;
	email: string;
	phoneNumber: string;
	image: string;
	rating: number;
}

const usersMock: IUser[] = [
	{
		id: '1',
		name: 'Carlos Silva',
		email: 'carlos.silva@example.com',
		phoneNumber: '+5511987654321',
		image: 'https://github.com/lfalcaolopes.png',
		rating: 4.5
	},
	{
		id: '2',
		name: 'Fernanda Oliveira',
		email: 'fernanda.oliveira@example.com',
		phoneNumber: '+5511976543210',
		image: 'https://github.com/lfalcaolopes.png',
		rating: 4.7
	}
];

interface IAddress {
	id: string;
	street: string;
	number: string;
	district: string;
	addressComplement: string;
	zipCode: string;
	city: string;
	state: string;
	country: string;
	latitude: number;
	longitude: number;
}

const addressesMock: IAddress[] = [
	{
		id: '1',
		street: 'Avenida Sete de Setembro',
		number: '1500',
		district: 'Centro',
		addressComplement: 'Prédio A',
		zipCode: '45035-000',
		city: 'Vitória da Conquista',
		state: 'Bahia',
		country: 'Brasil',
		latitude: -14.861726478362748, // nao existe na entidade
		longitude: -40.827223812375436 // nao existe na entidade
	},
	{
		id: '2',
		street: 'Rua Landulfo Alves',
		number: '205',
		district: 'Norte',
		addressComplement: 'Apto 202',
		zipCode: '45040-000',
		city: 'Vitória da Conquista',
		state: 'Bahia',
		country: 'Brasil',
		latitude: -14.860497638060918, // nao existe na entidade
		longitude: -40.82865611193699 // nao existe na entidade
	}
];

interface ICourt {
	id: string;
	name: string;
	price: number;
	rating: number;
	modalities: string[];
	additionals: string[];
	status: boolean;
	availabilityStart: string;
	availabilityEnd: string;
	imagesUrl: ImageSourcePropType[];
	manager: IUser;
	address: IAddress;
}

const courtsMock: ICourt[] = [
	{
		id: '1',
		name: 'Quadra Central',
		price: 50.95,
		rating: 4.2,
		modalities: ['1', '2', '4'],
		additionals: ['1', '3'],
		status: true,
		availabilityStart: '2025-02-11T08:00:00-03:00',
		availabilityEnd: '2025-02-11T20:00:00-03:00',
		imagesUrl: [testImage, testImage, testImage],
		manager: usersMock[0],
		address: addressesMock[0]
	},
	{
		id: '2',
		name: 'Quadra Norte',
		price: 60.0,
		rating: 3.8,
		modalities: ['2', '3', '4', '5'],
		additionals: ['2'],
		status: false,
		availabilityStart: '2025-02-11T09:00:00-03:00',
		availabilityEnd: '2025-02-11T21:00:00-03:00',
		imagesUrl: [testImage],
		manager: usersMock[1],
		address: addressesMock[1]
	},
	{
		id: '3',
		name: 'Quadra Sul',
		price: 70.0,
		rating: 4.9,
		modalities: ['1', '3'],
		additionals: ['1', '2', '3'],
		status: true,
		availabilityStart: '2025-02-11T07:30:00-03:00',
		availabilityEnd: '2025-02-11T23:00:00-03:00',
		imagesUrl: [testImage, testImage, testImage, testImage, testImage],
		manager: usersMock[0],
		address: addressesMock[1]
	},
	{
		id: '4',
		name: 'Quadra Leste',
		price: 55.0,
		rating: 4.0,
		modalities: ['2'],
		additionals: ['3'],
		status: true,
		availabilityStart: '2025-02-11T08:30:00-03:00',
		availabilityEnd: '2025-02-11T18:30:00-03:00',
		imagesUrl: [testImage, testImage],
		manager: usersMock[1],
		address: addressesMock[0]
	},
	{
		id: '5',
		name: 'Quadra Oeste',
		price: 65.0,
		rating: 3.5,
		modalities: ['3', '4'],
		additionals: ['1'],
		status: false,
		availabilityStart: '2025-02-11T10:00:00-03:00',
		availabilityEnd: '2025-02-11T22:00:00-03:00',
		imagesUrl: [testImage, testImage, testImage, testImage],
		manager: usersMock[0],
		address: addressesMock[1]
	},
	{
		id: '6',
		name: 'Quadra VIP',
		price: 80.0,
		rating: 5.0,
		modalities: ['1', '4'],
		additionals: ['2', '3'],
		status: true,
		availabilityStart: '2025-02-11T06:00:00-03:00',
		availabilityEnd: '2025-02-11T20:00:00-03:00',
		imagesUrl: [testImage, testImage],
		manager: usersMock[1],
		address: addressesMock[0]
	}
];
interface IRental {
	id: string;
	court: ICourt;
	user: IUser;
	startRent: string;
	duration: number;
	modality: string;
	additionals: string[];
	price: number;
	status: 'CANCELLED' | 'CONFIRMED' | 'AWAITING_PAYMENT' | 'CONCLUDED';
}

const rentalsMock: IRental[] = [
	{
		id: '1',
		court: courtsMock[0],
		user: usersMock[0],
		startRent: '2024-11-17T08:00:00+00:00',
		duration: 2,
		modality: '1', // nao existe na entidade
		additionals: ['1'], // nao existe na entidade (salvar porque o additionals da court pode mudar? [parece errado])
		price: 100, // nao existe na entidade (salvar porque o preco da court pode mudar)
		status: 'AWAITING_PAYMENT' // nao existe na entidade
	},
	{
		id: '4',
		court: courtsMock[2],
		user: usersMock[0],
		startRent: '2025-03-15T12:00:00+00:00',
		duration: 3,
		modality: '1',
		additionals: ['1', '3'],
		price: 210,
		status: 'CONCLUDED'
	},
	{
		id: '5',
		court: courtsMock[3],
		user: usersMock[1],
		startRent: '2025-03-10T15:00:00+00:00',
		duration: 2,
		modality: '2',
		additionals: ['2'],
		price: 110,
		status: 'CANCELLED'
	},
	{
		id: '6',
		court: courtsMock[5],
		user: usersMock[1],
		startRent: '2025-04-01T08:30:00+00:00',
		duration: 4,
		modality: '1',
		additionals: ['2', '3'],
		price: 320,
		status: 'AWAITING_PAYMENT'
	},
	{
		id: '7',
		court: courtsMock[0],
		user: usersMock[0],
		startRent: '2025-04-02T10:00:00+00:00',
		duration: 1,
		modality: '2',
		additionals: ['1'],
		price: 50,
		status: 'CONFIRMED'
	},
	{
		id: '8',
		court: courtsMock[1],
		user: usersMock[1],
		startRent: '2025-04-05T14:00:00+00:00',
		duration: 2,
		modality: '3',
		additionals: ['1', '2'],
		price: 120,
		status: 'CONCLUDED'
	}
];

export { addressesMock, courtsMock, rentalsMock, usersMock };
export type { IAddress, ICourt, IRental, IUser };
