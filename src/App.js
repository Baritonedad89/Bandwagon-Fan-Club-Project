import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Slider from  "react-slick";
import ReactModal from 'react-modal';

import { seeds } from "./Data/seeds"


import Card from "./Components/Card";

import { colorPalette, Fonts } from "./Theme/Theme";

const SiteWrapper = styled.div`
  width: 60rem;
  margin: 4rem auto;
`;

const getPortalNode = () => {
  return document.getElementById('portal');
}


function App() {
  // const [rightBtnScale, setRightBtnScale] = useState(false);
  const [data, setData] = useState({ ...seeds });

  
  const settings = {
    dots: true,
  };

  return (
    <ThemeProvider theme={colorPalette}>
      <ThemeProvider theme={Fonts}>
        <SiteWrapper>
        <Slider {...settings}>
        {data.cards.map(({ id, title, svg, totalData, growthRate }) => (
     
         <Card
          // isScaled={rightBtnScale}
          key={id}
          title={title}
          svg={svg}
          totalData={totalData}
          growthRate={growthRate}
        />  
     
        ))}

        </Slider>
        <ReactModal isOpen={true} parentSelector={getPortalNode}/>
        </SiteWrapper>
        
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
