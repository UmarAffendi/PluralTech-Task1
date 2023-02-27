create table user(
    id int primary key AUTO_INCREMENT,
    firstName varchar(250),
    lastName varchar(250),
    userName varchar(250),
    email varchar(50),
    password varchar(250),
    picture LONGBLOB,
    createdAt DATE,
    updatedAt DATE,
    createdBy varchar(250),
    updatedBy varchar(250),
    noOfAttempts int,
    userStatus BOOLEAN,
    UNIQUE (email)
);

insert into user(firstName, lastName, userName, email, password, createdAt, updatedAt, createdBy, updatedBy, noOfAttempts, userStatus) values('Umar', 'Affendi', 'admin', 'umaraffendi@gmail.com', '123456789', '2023-02-27', '2023-02-27', 'admin', 'admin', 1, true);