import React from "react";
import { SuperGreetingsTitle,SubTitle } from "../components/title";
import { ChatNav} from "../components/navigation";
import { ChatTextbox} from "../components/inputs";
import { SendButton,CTAButton1,ButtonGo2} from "../components/button";

function ChatPage() {
  return (
    <div className="flex justify-center items-center bg-white h-screen w-screen">
      <>
      <ChatNav title="Support Agent" subtitle="Active now" />
      <div className="p-2.5 w-full px-2 h-full">
        <div className="p-2 w-full min-h-[650px] max-h-full">

<div className="mx-4 mt-28 w-64 space-y-2.5">
<SuperGreetingsTitle text="Feel free to chat. How can I help you today?"/>
<SubTitle text="Powered by A.I" />
<div className="mt-6">
  <CTAButton1 text="Padeliver ng food" />
  <CTAButton1 text="Any suggestions?" />
  <ButtonGo2 text="Browse App" />
</div>
</div>

        </div>
      
<div className="flex justify-between items-center">
    <ChatTextbox />
    <SendButton />
</div>

      </div>
      </>
    </div>
  );
}

export default ChatPage;
