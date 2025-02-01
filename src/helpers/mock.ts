import { ImageSourcePropType } from 'react-native';
import testImage from '../../assets/test-image.png';

interface IUser {
	id: string;
	name: string;
	email: string;
	phoneNumber: string;
	rating: number;
}

const usersMock: IUser[] = [
	{
		id: '1',
		name: 'John Doe',
		email: 'johndoe@gmail.com',
		phoneNumber: '123456789', // nao existe na entidade
		rating: 4.5
	},
	{
		id: '2',
		name: 'Jane Doe',
		email: 'janedoe@gmail.com',
		phoneNumber: '987654321', // nao existe na entidade
		rating: 4
	}
];

interface IAddress {
	id: string;
	street: string;
	number: number;
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
		street: 'Rua 1',
		number: 123,
		district: 'District 1',
		addressComplement: 'Complement 1',
		zipCode: '12345-678',
		city: 'City 1',
		state: 'State 1',
		country: 'Country 1',
		latitude: -14.861726478362748, // nao existe na entidade
		longitude: -40.827223812375436 // nao existe na entidade
	},
	{
		id: '2',
		street: 'Rua 2',
		number: 456,
		district: 'District 2',
		addressComplement: 'Complement 2',
		zipCode: '87654-321',
		city: 'City 2',
		state: 'State 2',
		country: 'Country 2',
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
		name: 'Court 1',
		price: 50,
		rating: 4.5,
		modalities: ['Futebol', 'Vôlei', 'Basquete', 'Tênis'], // nao existe na entidade (nova entidade?)
		additionals: ['Estacionamento', 'Vestiário'], // nao existe na entidade (nova entidade?)
		status: false, // nao existe na entidade
		availabilityStart: '08:00', // nao existe na entidade (pensar em nomes melhores)
		availabilityEnd: '22:00', // nao existe na entidade (pensar em nomes melhores)
		imagesUrl: [testImage, testImage], // nao existe na entidade
		manager: usersMock[0], // nao existe na entidade
		address: addressesMock[0]
	},
	{
		id: '2',
		name: 'Court 2',
		price: 100,
		rating: 5,
		modalities: ['Futebol', 'Basquete'],
		additionals: ['Vestiário'],
		status: true, // nao existe na entidade
		availabilityStart: '10:00', // nao existe na entidade (pensar em nomes melhores)
		availabilityEnd: '20:00', // nao existe na entidade (pensar em nomes melhores)
		imagesUrl: [testImage, testImage], // nao existe na entidade
		manager: usersMock[1], // nao existe na entidade
		address: addressesMock[1]
	},
	{
		id: '3',
		name: 'Court 3',
		price: 100,
		rating: 5,
		modalities: ['Futebol', 'Basquete'],
		additionals: ['Vestiário'],
		status: true, // nao existe na entidade
		availabilityStart: '10:00', // nao existe na entidade (pensar em nomes melhores)
		availabilityEnd: '20:00', // nao existe na entidade (pensar em nomes melhores)
		imagesUrl: [testImage, testImage], // nao existe na entidade
		manager: usersMock[1], // nao existe na entidade
		address: addressesMock[1]
	},
	{
		id: '4',
		name: 'Court 4',
		price: 100,
		rating: 5,
		modalities: ['Futebol', 'Basquete'],
		additionals: ['Vestiário'],
		status: true, // nao existe na entidade
		availabilityStart: '10:00', // nao existe na entidade (pensar em nomes melhores)
		availabilityEnd: '20:00', // nao existe na entidade (pensar em nomes melhores)
		imagesUrl: [testImage, testImage], // nao existe na entidade
		manager: usersMock[1], // nao existe na entidade
		address: addressesMock[1]
	},
	{
		id: '5',
		name: 'Court 5',
		price: 100,
		rating: 5,
		modalities: ['Futebol', 'Basquete'],
		additionals: ['Vestiário'],
		status: true, // nao existe na entidade
		availabilityStart: '10:00', // nao existe na entidade (pensar em nomes melhores)
		availabilityEnd: '20:00', // nao existe na entidade (pensar em nomes melhores)
		imagesUrl: [testImage, testImage], // nao existe na entidade
		manager: usersMock[1], // nao existe na entidade
		address: addressesMock[1]
	},
	{
		id: '6',
		name: 'Court 6',
		price: 100,
		rating: 5,
		modalities: ['Futebol', 'Basquete'],
		additionals: ['Vestiário'],
		status: true, // nao existe na entidade
		availabilityStart: '10:00', // nao existe na entidade (pensar em nomes melhores)
		availabilityEnd: '20:00', // nao existe na entidade (pensar em nomes melhores)
		imagesUrl: [testImage, testImage], // nao existe na entidade
		manager: usersMock[1], // nao existe na entidade
		address: addressesMock[1]
	},
	{
		id: '7',
		name: 'Court 7',
		price: 100,
		rating: 5,
		modalities: ['Futebol', 'Basquete'],
		additionals: ['Vestiário'],
		status: true, // nao existe na entidade
		availabilityStart: '10:00', // nao existe na entidade (pensar em nomes melhores)
		availabilityEnd: '20:00', // nao existe na entidade (pensar em nomes melhores)
		imagesUrl: [testImage, testImage], // nao existe na entidade
		manager: usersMock[1], // nao existe na entidade
		address: addressesMock[1]
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
		modality: 'Futebol', // nao existe na entidade
		additionals: ['Estacionamento'], // nao existe na entidade (salvar porque o additionals da court pode mudar? [parece errado])
		price: 100, // nao existe na entidade (salvar porque o preco da court pode mudar)
		status: 'AWAITING_PAYMENT' // nao existe na entidade
	},
	{
		id: '2',
		court: courtsMock[1],
		user: usersMock[1],
		startRent: '2024-11-12T14:00:00+00:00',
		duration: 5,
		modality: 'Basquete', // nao existe na entidade
		additionals: ['Vestiário'], // nao existe na entidade (salvar porque o additionals da court pode mudar? [parece errado])
		price: 500, // nao existe na entidade (salvar porque o preco da court pode mudar)
		status: 'CONFIRMED' // nao existe na entidade
	},
	{
		id: '3',
		court: courtsMock[1],
		user: usersMock[1],
		startRent: '2024-11-12T14:00:00+00:00',
		duration: 5,
		modality: 'Basquete', // nao existe na entidade
		additionals: ['Vestiário'], // nao existe na entidade (salvar porque o additionals da court pode mudar? [parece errado])
		price: 500, // nao existe na entidade (salvar porque o preco da court pode mudar)
		status: 'CONFIRMED' // nao existe na entidade
	},
	{
		id: '4',
		court: courtsMock[1],
		user: usersMock[1],
		startRent: '2024-11-12T14:00:00+00:00',
		duration: 5,
		modality: 'Basquete', // nao existe na entidade
		additionals: ['Vestiário'], // nao existe na entidade (salvar porque o additionals da court pode mudar? [parece errado])
		price: 500, // nao existe na entidade (salvar porque o preco da court pode mudar)
		status: 'CONFIRMED' // nao existe na entidade
	}
];

export { addressesMock, courtsMock, rentalsMock, usersMock };
export type { IAddress, ICourt, IRental, IUser };
