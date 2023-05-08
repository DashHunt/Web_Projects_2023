import React from "react";
import CardComponent from "./Card";

import { MdBackHand, MdVolunteerActivism, MdHome } from "react-icons/md";

const CardGroup = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className='row'>
        <CardComponent
          icon={
            <MdVolunteerActivism
              style={{ height: 50, width: 50 }}
            ></MdVolunteerActivism>
          }
          title='Become a volunteer'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
          mattis lorem, a fermentum mi.'
          buttonText='Volunteer'
        ></CardComponent>
        <CardComponent
          icon={<MdBackHand style={{ height: 50, width: 50 }}></MdBackHand>}
          title='Make a donation'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
          mattis lorem, a fermentum mi.'
          buttonText='Donate'
        ></CardComponent>
        <CardComponent
          icon={<MdHome style={{ height: 50, width: 50 }}></MdHome>}
          title='Become a foster parent'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
          mattis lorem, a fermentum mi.'
          buttonText='Foster'
        ></CardComponent>
      </div>
    </div>
  );
};

export default CardGroup;
