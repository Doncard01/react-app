import React from "react";
// import ReactDOM from "react-dom";  // stary sposób dla React 17
import { createRoot } from "react-dom/client";

import "./index.css";

import { books } from "./books";
import Book from "./Book";

const container = document.getElementById("root");
const root = createRoot(container);

function BookList() {
    return (
        <section className="booklist">
            {books.map((book) => {
                const { id, ...rest } = book;
                return <Book key={id} {...rest} />;
            })}
        </section>
    );
}

// const Greeting = () => {
// 	return React.createElement(
// 		'div', {},  React.createElement('h1', {}, 'hello world'));
// }

// ReactDOM.render(<BookList />, document.getElementById("root")); // stary sposób dla React 17
root.render(<BookList tab="home" />);
