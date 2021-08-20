import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API = 'http://localhost:8002/bots'

function BotsPage() {
  const [bots, setBots] = useState([])

  useEffect(() => {
    fetch(API) 
      .then(res => res.json())
      .then(setBots)
  }, [] )

  function enlistBot(id) {
    setBots(
      bots.map((bot) => 
        bot.id === id ? {...bot, rendered: true} : bot 
      )
    )
  }

  function removeBot(id) {
    setBots(
      bots.map((bot) => 
        bot.id === id ? {...bot, rendered: false} : bot 
      )
    )
  }

  function dischargeBot(id) {
    setBots(bots.filter((bot) => bot.id !== id))
  }

  return (
    <div>
      <YourBotArmy bots={bots.filter(bot => bot.rendered)} handleClick={removeBot} dischargeBot={dischargeBot}/>
      <BotCollection bots={bots} handleClick={enlistBot} dischargeBot={dischargeBot}/>
    </div>
  )
}

export default BotsPage;
