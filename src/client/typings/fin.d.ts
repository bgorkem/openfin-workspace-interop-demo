
/** Pull the original fin.me type */
type Fin =import('openfin/_v2/api/fin').default;
type FinMe=Fin['me']
declare namespace fin {
  
    /**Context with id, type and name */
    export type Context = {
        id: Record<string, any>,
        type: string,
        name?: string
    }

    /** subscription returns unsubscribe method*/
    export type Subscription = {
        unsubscribe: ()=>void
    }
    
    type ContextHandler = (context: Context) => void;

    /** Augmented fin.me type with interop*/
    var me: FinMe  & {
        interop: {            
            /** Add context handler experimental */
            addContextHandler: (onContext: ContextHandler, type: string) => Promise<Subscription>,
            
            /** Set context, experimental */
            setContext: (context: Context) => void;
        }
    }




}