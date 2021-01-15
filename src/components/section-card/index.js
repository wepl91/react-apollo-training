import React from 'react';
import './styles.scss';

import { withRouter } from 'react-router';

import { Box, Image } from "@chakra-ui/react"

const SectionCard = ({ section, imgUrl, imgAlt = 'Image', sectionPath = '/not-found', history }) => (
  <div className="section-card" onClick={() => history.push(sectionPath)}>
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imgUrl} alt={imgAlt} />
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {section}
        </Box>
      </Box>
    </Box>
  </div>
);

export default withRouter(SectionCard);