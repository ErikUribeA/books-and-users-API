import { BooksController } from "../controllers/books.controller.js";
import { Book, BodyResponseBooks, ResponseLoginBooks } from "../models/books.model.js";

document.addEventListener('DOMContentLoaded', async () => {
    const booksController = new BooksController('http://190.147.64.47:5155');
    let token: string;
    await login();

    async function login(): Promise<void> {
        try {
            const loginResult: ResponseLoginBooks = await booksController.postLogin({
                email: 'prueba@prueba.pru',
                password: 'C0ntr4S3gu++r4'
            });
            token = loginResult.data.token;
            console.log(token);
            console.log('Login successful');
            await fetchAndRenderBooks();
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    async function fetchAndRenderBooks(): Promise<void> {
        try {
            const booksResponse: BodyResponseBooks = await booksController.getBooks(token);
            console.log('Books:', booksResponse.data);
            const data = booksResponse.data;
            data.forEach(book => {
                renderBooks(book.title, book.author, book.description);
            });
        } catch (error) {
            console.log(`Error fetching books: ${error}`);
        }
    }

    function renderBooks(title: string, author: string, description: string): void {
        const cardsContainer = document.querySelector('.containerCards') as HTMLDivElement;

        const card = document.createElement('div') as HTMLDivElement; 
        card.classList.add('cardBook');
        const bookTitle = document.createElement('h3') as HTMLHeadingElement;
        bookTitle.textContent = title;
        const bookAuthor = document.createElement('h5') as HTMLHeadingElement;
        bookAuthor.textContent = author;
        const bookDescription = document.createElement('p') as HTMLParagraphElement;
        bookDescription.textContent = description;

        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookDescription);

        cardsContainer.appendChild(card);
    }
});

