import { RequestLoginBooks, ResponseLoginBooks, BodyRequestCreateUser, BodyResponseBooks, Book } from '../models/books.model.js'

export class BooksController {
    private domain: string;

    constructor(private urlApi: string) {
        this.domain = urlApi;
    }

    async postLogin(data: RequestLoginBooks): Promise<ResponseLoginBooks> {
        const endpointLogin: string = '/api/v1/auth/login';
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        }
        
        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }
        const url = this.urlApi + endpointLogin;
        const result: Response = await fetch(url, reqOptions);

        console.log(`Status code: ${result.status}`);
        if (result.status !== 201) {
            console.log(`Response body: ${(await result.json()).message}`);
            throw new Error('Not authenticated: ');
        }
        const responseBodyLogin: ResponseLoginBooks = await result.json();
        console.log(`Result token: ${responseBodyLogin.data.token}`);
        return responseBodyLogin;
    }

    async createUser(user: BodyRequestCreateUser, token: string): Promise<void> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(user)
        }
        const url = this.domain + '/api/v1/users';
        const result: Response = await fetch(url, reqOptions);

        console.log(`Status code: ${result.status}`);
        if (result.status !== 201) {
            console.log(`Response body: ${(await result.json()).message}`);
            throw new Error('Failed to create user');
        }
        console.log('User created successfully');
    }
}