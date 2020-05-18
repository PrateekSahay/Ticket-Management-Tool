export interface IConversations {
    id : string,
    created : string,
    title : string,
    content : string
}

export interface INotes {
    note : string
}

export interface ITicket{
    id : number,
    created : string,
    status : string,
    conversations? : IConversations [],
    notes? : INotes []
}