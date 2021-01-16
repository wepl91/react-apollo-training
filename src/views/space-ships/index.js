import React, { useState, useEffect } from 'react';
import './styles.scss';

import { useQuery, gql } from '@apollo/client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react"

import SpaceShipCard from '../../components/space-ship-card';
import Pagination from '../../components/pagination';

const SpaceShipsView = ({ }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const SPACE_SHIPS = gql`
  query GetSpaceShips($offset: Int!) {
    ships(limit: 9, offset: $offset) {
      id
      image
      name
      type
    }
  }`;
  const { loading, error, data } = useQuery(SPACE_SHIPS, {
    variables: {
      offset: (currentPage - 1) * 9,
    }
  });
  const renderContent = () => {
    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error</p>);
    return data.ships.map(ship => (
      <SpaceShipCard spaceShip={ship} />
    ));
  }
  return (
    <React.Fragment>
      <Breadcrumb spacing="8px" separator="/">
        <BreadcrumbItem>
          <BreadcrumbLink href="/home">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Ships</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <h1 className="space-ship-header">Ships</h1>
      <div className="space-ship-view">
        {renderContent()}
      </div>
      <Pagination 
        key={currentPage}
        currentPage={currentPage} 
        totalPages={totalPages} 
        onChange={(page) => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setCurrentPage(page);
        }}
      />
    </React.Fragment>
  );
}

export default SpaceShipsView;