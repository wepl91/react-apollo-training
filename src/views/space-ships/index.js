import React from 'react';
import './styles.scss';

import { useQuery, gql } from '@apollo/client';

import SpaceShipCard from '../../components/space-ship-card';

const SpaceShipsView = ({ }) => {
  const SPACE_SHIPS = gql`
  query GetSpaceShips {
    ships(limit: 10) {
      id
      image
      name
      type
    }
  }`;
  const { loading, error, data } = useQuery(SPACE_SHIPS);
  const renderContent = () => {
    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error</p>);
    return data.ships.map(ship => (
      <SpaceShipCard spaceShip={ship} />
    ));
  }
  return (
    <div className="space-ship-view">
      {renderContent()}
    </div>
  );
}

export default SpaceShipsView;