import React from 'react';

import * as Styled from './styles';

interface SectionTitleProps {
	children: React.ReactNode;
}

function SectionTitle({ children }: SectionTitleProps) {
	return (
		<Styled.Container>
			<Styled.Title>{children}</Styled.Title>
			<Styled.Divider />
		</Styled.Container>
	);
}

export default SectionTitle;
