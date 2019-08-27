import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Slider from "react-slick";
import ReactModal from "react-modal";

import { seeds } from "./Data/seeds";

import Card from "./Components/Card/Card";
import Forms from "./Components/Forms/Forms"

import { styles } from "./Theme/ModalStyles";
import { colorPalette, Fonts } from "./Theme/Theme";

const SiteWrapper = styled.div`
  width: 60rem;
  margin: 4rem auto;
`;
// properly hides application from screenreaders
// and other assistive technologies while the modal is open
// basically aria-hidden = true
ReactModal.setAppElement("#root");

const getPortalNode = () => {
  return document.getElementById("portal");
};

function App() {
  const [data, setData] = useState({ ...seeds });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testID, setTestID] = useState();
 
  const settings = {
    dots: true
  };

  useEffect(()=> {
  },[data])

  const handleActionButton = id => {
    let theID;
    theID = id - 1;
    setTestID(theID);
    
  };

  return (
    <ThemeProvider theme={colorPalette}>
      <ThemeProvider theme={Fonts}>
        <SiteWrapper>
          <Slider {...settings}>
            {data.cards.map(({ id, title, svg, totalData, growthRate }) => (
              <Card
                key={id}
                id={id}
                title={title}
                svg={svg}
                totalData={totalData}
                growthRate={growthRate}
                handleActionButton={handleActionButton}
                setIsModalOpen={setIsModalOpen}
              />
            ))}
          </Slider>

          <ReactModal style={styles} isOpen={isModalOpen} parentSelector={getPortalNode}>
            <Forms
              setIsModalOpen={setIsModalOpen}
              id={testID}
              // setdataToEdit={setdataToEdit}
              // dataToEdit={dataToEdit}
              data={data}
              setData={setData}

              // thisTotalData={thisTotalData}
              // setThisTotalData={setThisTotalData}
              // thisGrowthRate={thisGrowthRate}
              // setThisGrowthRate={setThisGrowthRate}
            />
          </ReactModal>
        </SiteWrapper>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
