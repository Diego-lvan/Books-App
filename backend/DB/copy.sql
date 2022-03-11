CREATE DATABASE uniread;
USE uniread;

CREATE TABLE user(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(80) NOT NULL,
    username VARCHAR(20) NOT NULL,
    img_path VARCHAR(40) NOT NULL
);


CREATE TABLE category(
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(30) NOT NULL
);

CREATE TABLE status(
    status_id INT PRIMARY KEY AUTO_INCREMENT,
    status VARCHAR(20) NOT NULL
);

CREATE TABLE book(
 isbn VARCHAR(13) PRIMARY KEY,
 title VARCHAR(30) NOT NULL,
 filename VARCHAR(70) NOT NULL,
 no_pages INTEGER(5) NOT NULL,
 author VARCHAR(50) NOT NULL,
 synopsis VARCHAR(600) NOT NULL,
 category_id INT NOT NULL,
 FOREIGN KEY (category_id) REFERENCES category(category_id)
);

CREATE TABLE comment(
    comment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    comment VARCHAR(200) NOT NULL,
    created_date DATETIME NOT NULL DEFAULT  now(),
    isbn VARCHAR(13) NOT NULL,
    likes INTEGER(10) DEFAULT  0,
    amount_replies INTEGER(4) DEFAULT  0,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (isbn) REFERENCES book(isbn) ON DELETE CASCADE 
);

CREATE TABLE comments_likes (
    comment_id INT NOT NULL,
    user_id INT NOT NULL,
     isbn VARCHAR(13) NOT NULL,
    PRIMARY KEY(comment_id,user_id),
    FOREIGN KEY (comment_id) REFERENCES comment(comment_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (isbn) REFERENCES book(isbn) ON DELETE CASCADE 
);


CREATE TABLE my_books(
    user_id INT NOT NULL,
    isbn VARCHAR(13) NOT NULL,
    status_id INT NOT NULL,
    score INT NULL,
    PRIMARY KEY(user_id,isbn),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (isbn) REFERENCES book(isbn) ON DELETE CASCADE 
);




 SELECT comment.comment_id, comment.user_id, comment.comment, comment.created_date, 
              comment.likes, comment.amount_replies, user.username 
              FROM comment INNER JOIN user 
              ON user.user_id = comment.user_id AND comment.isbn = ? ORDER BY created_date DESC;

SELECT status.status_id, status.status, my_books.score FROM status
INNER JOIN my_books ON status.status_id = my_books.status_id AND my_books.user_id = 4 AND isbn  = '12324233';




SELECT  user.user_id FROM comments_likes
    FULL OUTER JOIN user ON user.user_id = comments_likes.user_id AND comments_likes.comment_id = 55;


SELECT book.isbn, book.title, book.filename, book.author FROM book INNER JOIN my_books ON my_books.isbn = book.isbn AND my_books.user_id = 4 AND my_books.status_id = 2;