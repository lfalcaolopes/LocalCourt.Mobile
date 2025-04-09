import { IAddress } from './mock';

const getShortAddress = (address: IAddress) => {
	return `${address.street}, ${address.number} - ${address.district}, ${address.city}`;
};

const getFullAddress = (address: IAddress) => {
	return `${address.street}, ${address.number}, ${address.district}, ${address.city}, ${address.state}, ${address.country}`;
};

export { getFullAddress, getShortAddress };
