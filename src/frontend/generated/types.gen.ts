// This file is auto-generated by @hey-api/openapi-ts

export type ChatRequest = {
    query: string;
    history?: Array<Message>;
};

export type ChatResponseEvent = {
    event: StreamEvent;
    data: SearchQueryStream | SearchResultStream | TextChunkStream | RelatedQueriesStream | StreamEndStream | FinalResponseStream;
};

export type FinalResponseStream = {
    event_type?: StreamEvent;
    message: string;
};

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type Message = {
    content: string;
    role: MessageRole;
};

export enum MessageRole {
    USER = 'user',
    ASSISTANT = 'assistant'
}

export type RelatedQueriesStream = {
    event_type?: StreamEvent;
    related_queries?: Array<(string)>;
};

export type SearchQueryStream = {
    event_type?: StreamEvent;
    query: string;
};

export type SearchResult = {
    title: string;
    url: string;
    content: string;
};

export type SearchResultStream = {
    event_type?: StreamEvent;
    results?: Array<SearchResult>;
};

export type StreamEndStream = {
    event_type?: StreamEvent;
};

export enum StreamEvent {
    SEARCH_QUERY = 'search-query',
    SEARCH_RESULTS = 'search-results',
    TEXT_CHUNK = 'text-chunk',
    RELATED_QUERIES = 'related-queries',
    STREAM_END = 'stream-end',
    FINAL_RESPONSE = 'final-response'
}

export type TextChunkStream = {
    event_type?: StreamEvent;
    text: string;
};

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};