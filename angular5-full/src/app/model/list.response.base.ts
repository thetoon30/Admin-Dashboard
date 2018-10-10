export class ListResponseBase<T> {
    userMessage : string;
    devMessage : string;
    statusCode: number;
    IsEmpty : boolean;
    items : T[];
    total: number;
}

export class ResponseBase<T> {
    userMessage: string;
    devMessage: string;
    statusCode: number;
    item: T;
}