import React,{useState} from "react";
import { BigGreetingsTitle,HyperText, SmallTitleChild } from "../components/title";
import { AdvanceNav} from "../components/navigation";
import { MediumLogo } from "../components/logo";
import { EmailTextbox,PasswordTextbox } from "../components/inputs";
import { ButtonGo,ButtonGuest,PlainButton } from "../components/button";
import { useNavigate } from 'react-router-dom';


function LoginPage() {

const navigate = useNavigate();
const [remember,setRemember] = useState(true);
const [loginmode,setPageMode] = useState(true); //false is  "Login"

const becomeGuest = () => {
  navigate('/home');
}

const SignInCheck = () =>{
  navigate('/verify');
}

const rememberDevice = () =>{
if(remember){
  setRemember(false);
}else{
  setRemember(true);
  //send post to local
}
}




const switchPage = () =>{
if(loginmode){
setPageMode(false);
}else{
setPageMode(true);
}
}


  return (
    <div className="flex justify-center items-center bg-white h-screen w-screen">
      <>
      <AdvanceNav shadow={true} >
<div onClick={switchPage}>
      {
        loginmode ? (
      <PlainButton text="Login?" />
        ):(
      <PlainButton text="Create Account?" />
        )
      }
</div>
    
      </AdvanceNav>
      <div className="p-2.5 w-full px-12">
        <div className="flex justify-center items-center py-4">
        <MediumLogo />
        </div>
      <div className="text-center">
        {
          loginmode ? (
        <BigGreetingsTitle text="Join Kiefers today!" />
          ):(
        <BigGreetingsTitle text="Welcome Back!" />
          )
        }

      
      </div>
        <div className="space-y-2.5 mt-8">
          <EmailTextbox />
          <PasswordTextbox />
        </div>
        <div onClick={rememberDevice} className="group cursor-pointer my-4 flex justify-start items-center space-x-2.5">
          <div className="bg-red-100 group-hover:bg-red-200 p-2 w-6 h-6 rounded-md">
            {
              remember && (
<div className="bg-red-500 group-hover:bg-red-600 h-2 w-2 rounded-md"></div>
              )
            }
            
          </div>
          <p>Remember this device</p>
        </div>
        <div>
          
          {
             loginmode ? (
          <ButtonGo click={SignInCheck} text="Create" />
             ):(
          <ButtonGo click={SignInCheck} text="Login" />
             )
          }


          <div className="my-6"></div>
          {
             loginmode && (
              <ButtonGuest click={becomeGuest} text="Use as Guest" />
             )
          }
          
        </div>
       <div className="mt-14">
       <SmallTitleChild>
        By proceeding your account you agreeing to <HyperText link="" text="Kiefers TOC" /> and <HyperText link="" text="Data Privacy Policy" />.
        <p>1.1.5</p>
        </SmallTitleChild>
       </div>
      </div>
      
      </>
    </div>
  );
}

export default LoginPage;
