import React from "react";
import BotCard  from "./BotCard"

function BotCollection({bots, handleClick, dischargeBot}) {

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard 
            key={bot.id}
            bot={bot}
            handleClick={handleClick}
            dischargeBot={dischargeBot}
          />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
