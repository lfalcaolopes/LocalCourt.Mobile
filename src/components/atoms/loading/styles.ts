import { colors } from '@/styles/theme';
import styled from 'styled-components/native';

const ActivityIndicator = styled.ActivityIndicator`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	background-color: ${colors.gray[100]};
`;

export { ActivityIndicator };
