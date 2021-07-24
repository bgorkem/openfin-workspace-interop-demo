

export function register(onContext: any) {
    console.log('registering context handlers for')
    return fin.me.interop.addContextHandler(onContext, 'instrument');
}

export function setTickerContext(ticker: string) {
    console.log('setting ticker:', ticker);
    fin.me.interop.setContext({ id: { ticker }, type: 'instrument' })
}

