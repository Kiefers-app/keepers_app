import React from "react";
import {MarkerSolid,HeartIcon,CartIcon,SearchIcon} from "../components/icons"
import { GreetingsTitleWhite, GreetingsTitle } from "../components/title";
import { FeaturedServicesCard2,ExtraServicesCardComing,ExtraServicesCardComingA,HighlightCard } from "../components/cards";
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate();


  const seeLocation = () => {
    //   var AppMessage = {
    //     type: "screen",
    //     path: "setlocation"
    // };
    // var messageString = JSON.stringify(AppMessage);
    // window.ReactNativeWebView.postMessage(messageString);
    navigate("/setlocation");
  }
  
  const goSearch = () =>{
    //   var AppMessage = {
    //     type: "screen",
    //     path: "search"
    // };
    // var messageString = JSON.stringify(AppMessage);
    // window.ReactNativeWebView.postMessage(messageString);
    navigate("/search");
  }



  return (
    <div className="bg-white h-screen w-screen">
      
      <div className="bg-red-500 relative h-32 p-4 w-full">
<div className="flex justify-between items-center">
<div onClick={seeLocation} className="flex justify-start items-center space-x-1">
<MarkerSolid c="#fff" w="20" h="20" />
<p className="text-white font-normal truncate w-auto max-w-48">San Manuel, Villa Manuel, Puerto Princesa City</p>
</div>

<div className="flex justify-center items-center space-x-4">
<button>
<HeartIcon c="#fff" w="25" h="25" />
</button>
<button>
<CartIcon c="#fff" w="25" h="25" />
</button>
</div>






</div>
<div className="my-4">
<GreetingsTitleWhite text="Discover with Kiefers" />
</div>

<div onClick={goSearch} className="shadow-xl border border-gray-300 p-2 rounded-xl flex justify-start space-x-2 items-center bg-white">
<SearchIcon c="#6b7280" w="22" h="22" />
<p className="text-gray-500">Search foods or restaurant</p>
</div>

      </div>


<div className="bg-red-50 px-4 pt-6  grid grid-cols-2 gap-2">
<FeaturedServicesCard2 image="https://fruitask.com/assets/file_upload/Jk14xOv2XiiDa67/ZGQ5Y245SURFcGlJYnF0MXFGQUR0V09sRGc9PQ.png" title="Pa-deliver" subtitle="Crave for food?" />
<div className="space-y-2">
<ExtraServicesCardComingA image="https://fruitask.com/assets/file_upload/Jk14xOv2XiiDa67/ZXM5UGpKa0JGNTQ9.png" title="Pa-palengke" subtitle="Coming Soon" />
<ExtraServicesCardComing image="https://fruitask.com/assets/file_upload/Jk14xOv2XiiDa67/WjhOTms4SUJHNWlXTmFoNnBBPT0.png" title="Pa-pickup" subtitle="Coming Soon" />
</div>

</div>

<div className="bg-red-50 px-4 py-2.5">
  <HighlightCard image="https://fruitask.com/assets/file_upload/Jk14xOv2XiiDa67/WmM5S2xkWWRGWnFRYWF4NnFsTU90V09sRGc9PQ.png" title="Pagrocery" subtitle="Experience the best grocery app"/>
</div>



<div className="px-4 py-2">
    < GreetingsTitle text="Categories"/>
</div>


      
    </div>
  );
}

export default HomePage;
