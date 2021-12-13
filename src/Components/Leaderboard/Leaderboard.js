import React from "react";
import Table from "./Table";
import {
  MainSection,
  HeadingText,
} from "../../Styles/styles";

export default function Leaderboard() {
  
  return (
    <React.Fragment>
      <MainSection className="section-leaderboard">       
          <HeadingText align="center">Weaver Leaderboard</HeadingText>        
           <Table />
        </MainSection>
    </React.Fragment>
  );
}
