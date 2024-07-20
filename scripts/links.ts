document.addEventListener('DOMContentLoaded', () => {
    const home = document.querySelector(".home") as HTMLImageElement;
    const register = document.querySelector(".register") as HTMLLIElement;
    const createBook = document.querySelector(".newBook") as HTMLLIElement;
    const editBook = document.querySelector(".updateBook") as HTMLLIElement;
    const deleteBook = document.querySelector(".deleteBook") as HTMLLIElement;

    home.addEventListener("click", (ev:Event) => {
        ev.preventDefault();
        window.location.href = "/index.html"
    })

    register.addEventListener("click", (ev:Event) => {
        ev.preventDefault();
        window.location.href = "/html/register.html"
    })

    createBook.addEventListener("click", (ev:Event) => {
        ev.preventDefault();
        window.location.href = "/html/newBook.html"
    })

    editBook.addEventListener("click", (ev:Event) => {
        ev.preventDefault();
        window.location.href = "/html/editBook.html"
    })

    deleteBook.addEventListener("click", (ev:Event) => {
        ev.preventDefault();
        window.location.href = "/html/deleteBook.html"
    })
});