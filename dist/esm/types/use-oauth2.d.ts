import { TAuthTokenPayload, TOauth2Props, TState } from './types';
export declare const useOAuth2: <TData = TAuthTokenPayload>(props: TOauth2Props<TData>) => {
    data: TState;
    loading: boolean;
    error: string | null;
    getAuth: () => () => void;
    logout: () => void;
    isPersistent: boolean;
};
