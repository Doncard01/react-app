import React from "react";

const Book = ({ imgUrl, imgAltText, title, author }) => {
    const clickHandler = (e) => {
        alert("aaaaaaaaaaAAAAAAAAAAAAAA");
        console.log(e);
        console.log(e.target);
    };
    const authorName = (author) => {
        console.log(author);
    };
    return (
        <article
            className="book"
            onMouseOver={() => {
                console.log(title);
            }}
        >
            <div className="img-container">
                <img src={imgUrl} alt={imgAltText} />
            </div>
            <h1
                onClick={() => {
                    console.log(imgAltText);
                }}
            >
                {title}
            </h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>
                Guzior
            </button>
            <button
                type="button"
                onClick={() => {
                    authorName(author);
                }}
            >
                Guzior II
            </button>
        </article>
    );
};

export default Book;
