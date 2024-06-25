import React from "react";
import { BigGreetingsTitle,HyperText, SmallTitleChild } from "../components/title";
import { AdvanceNav} from "../components/navigation";
import { MediumLogo } from "../components/logo";
import { EmailTextbox,PasswordTextbox } from "../components/inputs";
import { ButtonGo,ButtonGuest,PlainButton } from "../components/button";

function LoginPage() {
  return (
    <div className="flex justify-center items-center bg-white h-screen w-screen">
      <>
      <AdvanceNav shadow={true} >
       <PlainButton text="Sign in" />
      </AdvanceNav>
      <div className="p-2.5 w-full px-12">
        <div className="flex justify-center items-center py-4">
        <MediumLogo />
        </div>
      <div className="text-center">
      <BigGreetingsTitle text="Join Kiefers today!" />
      </div>
        <div className="space-y-2.5 mt-8">
          <EmailTextbox />
          <PasswordTextbox />
        </div>
        <div className="group cursor-pointer my-4 flex justify-start items-center space-x-2.5">
          <div className="bg-red-100 group-hover:bg-red-200 p-2 w-6 h-6 rounded-md">
            <div className="bg-red-500 group-hover:bg-red-600 h-2 w-2 rounded-md"></div>
          </div>
          <p>Remember this device</p>
        </div>
        <div>
          <ButtonGo text="Sign up" />
          <div className="my-6"></div>
          <ButtonGuest text="Use as Guest" />
        </div>
       <div className="mt-14">
       <SmallTitleChild>
        By signing your account you agreeing to <HyperText link="" text="Kiefers TOC" /> and <HyperText link="" text="Data Privacy Policy" />.
        </SmallTitleChild>
       </div>
      </div>
      
      </>
    </div>
  );
}

export default LoginPage;
