        
import { BooksController } from "./controllers/books.controller.js";
import { BodyRequestCreateUser, RequestLoginBooks, ResponseLoginBooks, Book, BodyResponseBooks } from "./models/books.model.js";

async function main(): Promise<void> {
    const booksController: BooksController = new BooksController('http://190.147.64.47:5155');
    
    const dataToLogin: RequestLoginBooks = {
        email: 'prueba@prueba.pru',
        password: 'C0ntr4S3gu++r4'
    }

    try {
        const resultLogin: ResponseLoginBooks = await booksController.postLogin(dataToLogin);
        console.log(resultLogin);

        const token = resultLogin.data.token;

                // Create user
                const newUser: BodyRequestCreateUser = {
                    name: 'luffy',
                    lastName: 'monkey',
                    email: 'kaisoku@orebanaru.com',
                    password: 'vivaelonepiece',
                };
        
                try {
                    await booksController.createUser(newUser, token);
                    console.log('User creation succeeded');
                } catch (error) {
                    console.log(`Error creating user: ${error}`);
                }}

            catch (error) {
                console.log(`Error logging in: ${error}`);
            }
        }