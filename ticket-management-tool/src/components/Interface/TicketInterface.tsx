export interface IConversations {
    id : string,
    created : string,
    title : string,
    content : string
}

export interface INotes {
    note : string
}

export interface ICustomer {
        id : string,
        email : string
}

export interface ITicket{
    id : number,
    title : string,
    created : string,
    status : string,
    customer : ICustomer,
    conversations? : IConversations [],
    notes? : INotes []
}