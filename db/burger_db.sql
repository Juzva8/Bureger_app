USE burger_db

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (100) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);

