import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API = 'http://localhost:8002/bots'

function BotsPage() {
  const [bots, setBots] = useState([])
  const [isRendered, setRendered] = useState(true)

  useEffect(() => {
    fetch(API) 
      .then(res => res.json())
      .then(setBots)
  }, [] )

  function handleRenderBot(id) {
    setBots(
      bots.map((bot) => 
        bot.id === id ? {...bot, rendered: true} : bot 
      )
    )
  }

  function removeBot(id) {
    console.log("removeBot Triggered")
    setBots(bots.filter((bot) => bot.id !== id))
  }


  return (
    <div>
      <YourBotArmy removeBot={removeBot} bots={bots.filter(bot => bot.rendered)} handleRenderBot={handleRenderBot}/>
      <BotCollection removeBot={removeBot} bots={bots} handleRenderBot={handleRenderBot}/>
    </div>
  )
}

export default BotsPage;
