
declare namespace fin {


    export type Context = {
        id: Record<string, any>,
        type: string,
        name?: string
    }

    export type Subscription = {
        unsubscribe: ()=>void
    }
    
    type ContextHandler = (context: Context) => void;

    /** Augmented, overridden API for interop  */
    var me: {
        interop: {
            /** Add context handler experimental */
            addContextHandler: (onContext: ContextHandler, type: string) => Promise<Subscription>,
            setContext: (context: Context) => void;
        }
    }



}