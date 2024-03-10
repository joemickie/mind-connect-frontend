import * as React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import anxiety from "../assets/anxiety.png";
import breathe from "../assets/breathe.png";
import hopeless from "../assets/hopeless.png";
import mentalhealthb from "../assets/mentalhealthblack.png";
import mentalhealthm from "../assets/mentalhealthmatters.png";
import mentalhealthw from "../assets/mentalhealthwhite.png";
import yougotit from "../assets/yougotthis.png";
import therapist from "../assets/therapy2.png";
import therapy from "../assets/therapy.png";
import dontpanic from "../assets/dontpanic.png";
import hearingvoices from "../assets/hearingvoices.png";
import selfarm from "../assets/selfarm.png";




function Slidepics() {

    // const spanStyle = {
    //     padding: '20px',
    //     background: '#efefef',
    //     color: '#000000'
    //   }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px',
        width: '800px'
      }
      

     const pics =  [ mentalhealthw, anxiety, breathe, hopeless, mentalhealthb, mentalhealthm, yougotit,
                     therapy, therapist, dontpanic, hearingvoices, selfarm ]


     return (

        <div className="slide-container">
        <Slide autoplay={true} duration={1000}>
         {pics.map((pics, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${pics})` }} >
              </div>
            </div>
          ))} 
        </Slide>
      </div>

    );
}
export default Slidepics
