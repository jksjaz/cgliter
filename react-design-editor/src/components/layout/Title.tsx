import React, { Component } from 'react';
import { Flex } from '../flex';

class Title extends Component {
	render() {
		return (
			<Flex
				style={{ background: 'linear-gradient(141deg,#23303e,#404040 51%,#23303e 75%)' }}
				flexWrap="wrap"
				flex="1"
				alignItems="center"
			>
				<Flex style={{ marginLeft: 8 }} flex="0 1 auto">
					<span style={{ color: '#fff', fontSize: 24, fontWeight: 500 }}>Editor</span>
				</Flex>
			</Flex>
		);
	}
}

export default Title;
