import React from 'react';
import './styles.scss';

import { withRouter } from 'react-router';

import { Box, Image } from "@chakra-ui/react"

const SectionCard = ({ spaceShip, history }) => (
  <div className="space-ship-card">
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={spaceShip.image} alt={'space-ship'} />
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {`Nombre: ${spaceShip.name}`}
        </Box>
        <Box
          mt="1"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {`Nombre: ${spaceShip.type}`}
        </Box>
      </Box>
    </Box>
  </div>
);

export default withRouter(SectionCard);