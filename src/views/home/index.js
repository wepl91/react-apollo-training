import React from 'react';
import './styles.scss';

import { Grid, GridItem } from "@chakra-ui/react"
import SectionCard from '../../components/section-card';

const HomeView = () => (
  <div className="home">
    <h1>React GraphQL & Apollo training</h1>
    <div className="home__sections">
      <SectionCard
        section="Space ships"
        sectionPath="/space-ships"
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/f/f8/BFR_at_stage_separation_2-2018.jpg"
      />
      <SectionCard
        section="Space missions"
        sectionPath="/space-missions"
        imgUrl="https://spacenews.com/wp-content/uploads/2018/10/crewdragon-docking-879x485.jpg" />
      <SectionCard 
        section="Landing pads"
        sectionPath="/landing-pads"
        imgUrl="https://www.teslarati.com/wp-content/uploads/2016/01/SpaceX-Jan17-Drone-Ship-Rocket-Landing.jpg" 
        />
    </div>
  </div>
);

export default HomeView;