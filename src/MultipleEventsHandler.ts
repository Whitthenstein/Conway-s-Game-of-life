interface Actions {
    [eventName: string]: Function | Array<Function>  
};

const bindEventsToElement = (element: HTMLElement | Document, actions: Actions) => {

    Object.entries(actions).forEach(([eventName, handle]) => {
        const event = eventName as keyof DocumentEventMap;

        if (handle instanceof Array) {
            handle.forEach( handler => {
                const eventHandle = handler as EventListenerOrEventListenerObject;
                element.addEventListener(event, eventHandle);
            })
        } else {
            const eventHandle = handle as EventListenerOrEventListenerObject;
            element.addEventListener(event, eventHandle);
        }
    });
};

export {
    bindEventsToElement
};