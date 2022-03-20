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
    amount_replies INTEGER(4) DEFAULT  0,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
    FOREIGN KEY (isbn) REFERENCES book(isbn) ON DELETE CASCADE 
);

CREATE TABLE comments_likes (
    comment_id INT NOT NULL,
    user_id INT NOT NULL,
     isbn VARCHAR(13) NOT NULL,
    PRIMARY KEY(comment_id,user_id),
    FOREIGN KEY (comment_id) REFERENCES comment(comment_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
    FOREIGN KEY (isbn) REFERENCES book(isbn) ON DELETE CASCADE 
);

CREATE TABLE reply(
    reply_id INT AUTO_INCREMENT NOT NULL,
    comment_id INT NOT NULL,
    user_id INT NOT NULL,
    reply VARCHAR(200) NOT NULL,
    PRIMARY KEY (reply_id,comment_id),
    FOREIGN KEY (comment_id) REFERENCES comment(comment_id)  ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
);

CREATE TABLE reply_likes (
    reply_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY(reply_id,user_id),
    FOREIGN KEY (reply_id) REFERENCES reply(reply_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
);


CREATE TABLE my_books(
    user_id INT NOT NULL,
    isbn VARCHAR(13) NOT NULL,
    status_id INT NOT NULL,
    score INT NULL,
    PRIMARY KEY(user_id,isbn),
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
    FOREIGN KEY (isbn) REFERENCES book(isbn) ON DELETE CASCADE 
);
