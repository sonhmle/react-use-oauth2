import { TMessageData, TOauth2Props } from './types';
export declare const objectToQuery: (object: Record<string, string>) => string;
export declare const queryToObject: (query: string) => {
    [k: string]: string;
};
export declare const formatAuthorizeUrl: (authorizeUrl: string, clientId: string, redirectUri: string, scope: string, state: string, responseType: TOauth2Props['responseType'], extraQueryParameters?: TOauth2Props['extraQueryParameters']) => string;
export declare const generateState: () => string;
export declare const saveState: (state: string) => void;
export declare const removeState: () => void;
export declare const checkState: (receivedState: string) => boolean;
export declare const openPopup: (url: string) => Window | null;
export declare const closePopup: (popupRef: React.MutableRefObject<Window | null | undefined>) => void;
export declare const isWindowOpener: (opener: Window | null) => opener is Window;
export declare const openerPostMessage: (opener: Window, message: TMessageData) => void;
export declare const cleanup: (intervalRef: React.MutableRefObject<string | number | NodeJS.Timeout | undefined>, popupRef: React.MutableRefObject<Window | null | undefined>, handleMessageListener: any) => void;
export declare const formatExchangeCodeForTokenServerURL: (exchangeCodeForTokenServerURL: string, clientId: string, code: string, redirectUri: string, state: string) => string;
