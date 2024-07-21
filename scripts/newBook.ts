import { BooksController } from "../controllers/books.controller.js";
import { Book } from "../models/books.model.js";


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formUser') as HTMLFormElement;
    const booksController = new BooksController('http://190.147.64.47:5155');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const title = document.getElementById('title') as HTMLInputElement;
        const author = document.getElementById('author') as HTMLInputElement;
        const description = document.getElementById('description') as HTMLInputElement;
        const summary = document.getElementById('summary') as HTMLInputElement;
        const publicationDate = document.getElementById('date') as HTMLInputElement;

        const newBook: Book = {
            title: title.value,
            author: author.value,
            description: description.value,
            summary: summary.value,
            publicationDate: publicationDate.value 
        };

        try {
            // Primero, obtén el token haciendo login
            const loginResult = await booksController.postLogin({
                email: 'prueba@prueba.pru',
                password: 'C0ntr4S3gu++r4'
            });
            const token = loginResult.data.token;

            // Luego, crea el libro
            try {
                await booksController.createBook(newBook, token);
                console.log('Book creation succeeded');
                alert('The book has been created successfully')
                form.reset();
            } catch (error) {
                console.log(`Error creating book: ${error}`);
            }
        }catch (error) {
            console.log(`Error logging in: ${error}`);
        }
    });
})