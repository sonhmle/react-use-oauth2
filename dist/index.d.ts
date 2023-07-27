/// <reference types="react" />
import * as react from 'react';

type Props = {
    Component?: React.ReactElement;
};
declare const OAuthPopup: ({ Component, }: Props) => react.ReactElement<any, string | react.JSXElementConstructor<any>>;

declare const OAUTH_RESPONSE = "react-use-oauth2-response";

type TAuthTokenPayload = {
    token_type: string;
    expires_in: number;
    access_token: string;
    scope: string;
    refresh_token: string;
};
type TResponseTypeBasedProps<TData> = {
    responseType: 'code';
    exchangeCodeForTokenServerURL: string;
    exchangeCodeForTokenMethod?: 'POST' | 'GET';
    onSuccess?: (payload: TData) => void;
} | {
    responseType: 'token';
    onSuccess?: (payload: TData) => void;
};
type TOauth2Props<TData = TAuthTokenPayload> = {
    authorizeUrl: string;
    clientId: string;
    redirectUri: string;
    scope?: string;
    extraQueryParameters?: Record<string, any>;
    onError?: (error: string) => void;
} & TResponseTypeBasedProps<TData>;
type TState<TData = TAuthTokenPayload> = TData | null;
type TMessageData = {
    type: typeof OAUTH_RESPONSE;
    error: string;
} | {
    type: typeof OAUTH_RESPONSE;
    payload: any;
};

declare const useOAuth2: <TData = TAuthTokenPayload>(props: TOauth2Props<TData>) => {
    data: TState;
    loading: boolean;
    error: string | null;
    getAuth: () => () => void;
    logout: () => void;
    isPersistent: boolean;
};

export { OAuthPopup, TAuthTokenPayload, TMessageData, TOauth2Props, TResponseTypeBasedProps, TState, useOAuth2 };
