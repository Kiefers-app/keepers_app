import React from "react";
import { BigGreetingsTitle,SubTitle } from "../components/title";
import { NormalNav} from "../components/navigation";
import { CodeTextbox} from "../components/inputs";
import { ButtonGo,Button2} from "../components/button";

function VerifyPage() {
  return (
    <div className="flex justify-center items-center bg-white h-screen w-screen">
      <>
      <NormalNav shadow={true} />
      <div className="p-2.5 w-full px-12">
        
      <div className="text-center">
      <BigGreetingsTitle text="Verify OTP" />
      <div>
        <CodeTextbox />
      </div>
      <SubTitle text="We sent 6-digits code to your email. This process is one-time only." />
      </div>
     <div className="my-4">
     <ButtonGo text="Continue" />
     <Button2 text="Back" />
     </div>
      </div>
      
      </>
    </div>
  );
}

export default VerifyPage;
