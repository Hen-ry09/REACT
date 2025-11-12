import React from "react";
import Title from "./Title";
import Description from "./Description";
import Image from "./Image";

class SimpleCard extends React.Component {
render(){
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-yellow-100 rounded-lg shadow-lg overflow-hidden flex">

    <div className="w-1/3">
    <Image url="" />
     </div>

       {/* Text-right */}
       <div className="w-2/3 p-6 flex flex-col justify-center">
                    <Title text="MR SCHANDORF CEO OF COLNETT CREATIVE HUB" />
                    <Description text="We Sell affordable data packages and also offer Software and Graphic Design" />
                </div>
            </div>
        );
    }
}

export default SimpleCard