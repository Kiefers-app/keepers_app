import React from "react";
import { GreetingsTitle} from "../components/title";
import { SearchNav} from "../components/navigation";
import { Historycard, ProductCard1 } from "../components/cards";

function SearchPage() {
  return (
    <div className="flex justify-center bg-white h-screen w-screen">
      <SearchNav shadow={true} />
      <div className="w-full px-5 h-auto">
      <div className="h-24"></div>
        <GreetingsTitle text="Recent Searches" />
        <Historycard text="Chaolong ni JC" />
        <Historycard text="Diwata Siken" />
        <Historycard text="Jollibee Siken" />
        <GreetingsTitle text="Suggestions" />
        <ProductCard1 image="https://fruitask.com/assets/file_upload/Jk14xOv2XiiDa67/ZE5oSGk4Y0lWSitEY3Ixdzdsb0Y4bkNnREFTQnFsQjBteFk5SlgxNzhPVzYvZWZzT2JyVmh1L0xoUFJWbHU2dA.jpg" title="JC Fried Chicken San Jose, Puerto Princesa" subtitle="8-9 yummy pieces" />
        <ProductCard1 image="https://fruitask.com/assets/file_upload/Jk14xOv2XiiDa67/ZE1aQmk5SUVDZFNYYWJGeHB4UU84M3FvQWcvQzkxNTZtQjg5Sm5WdDlLM2s2K0w1TmJyRmh1amFqcTBTaUxDZ2taND0.jpg" title="Zeeian Fried Chicken" subtitle="8-9 yummy pieces and so cripes and juicy and more fillin" />
      </div>
      
    
    </div>
  );
}

export default SearchPage;
