export type Emails = string;

export type Numbers = string | undefined;

export interface User {
    email: Emails;
    number?: Numbers;
}