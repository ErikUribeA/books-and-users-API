"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const home = document.querySelector(".home");
    const register = document.querySelector(".register");
    const createBook = document.querySelector(".newBook");
    const editBook = document.querySelector(".updateBook");
    const deleteBook = document.querySelector(".deleteBook");
    home.addEventListener("click", (ev) => {
        ev.preventDefault();
        window.location.href = "/index.html";
    });
    register.addEventListener("click", (ev) => {
        ev.preventDefault();
        window.location.href = "/html/register.html";
    });
    createBook.addEventListener("click", (ev) => {
        ev.preventDefault();
        window.location.href = "/html/newBook.html";
    });
    editBook.addEventListener("click", (ev) => {
        ev.preventDefault();
        window.location.href = "/html/editBook.html";
    });
    deleteBook.addEventListener("click", (ev) => {
        ev.preventDefault();
        window.location.href = "/html/deleteBook.html";
    });
});
