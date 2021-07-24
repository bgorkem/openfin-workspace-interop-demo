
import React, { useEffect, useState, useRef } from 'react';

import { register, setTickerContext } from './interop';


function AppComponent() {


  const [ticker, setTicker] = useState(null);
  const tickerInputRef = useRef<HTMLInputElement>(null);

  function onInstrumentContext(contextInfo: fin.Context) {
    const { type, id } = contextInfo;
    console.log('contextInfo for instrument:', contextInfo)
    setTicker(id.ticker);
  }

  function onSubmitTicker(e: any) {
    if (tickerInputRef.current === null) {
      return;
    }
    e.preventDefault();
    setTickerContext(tickerInputRef.current.value);
  }


  useEffect(() => {
    let unsubscribe = ()=>{};
    register(onInstrumentContext).then(s=> {unsubscribe=s.unsubscribe});
    return () => unsubscribe()
  }, [])

  return (
    <div>
      <p>Hello React component</p>
      <p>Ticker: {ticker}</p>

      <form onSubmit={onSubmitTicker}>
        <fieldset>
          <input type="text" ref={tickerInputRef} placeholder="instrument" />
          <button type="submit" >Set</button>
        </fieldset>
      </form>
    </div>
  )
}

export default AppComponent
