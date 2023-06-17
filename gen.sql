-- Создание таблицы Products
CREATE TABLE Products
(
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(255),
    description TEXT,
    price       FLOAT,
    stock       INTEGER
);

-- Создание таблицы Carts
CREATE TABLE Carts
(
    id     SERIAL PRIMARY KEY,
    userId INTEGER
);

-- Создание таблицы Orders
CREATE TABLE Orders
(
    id        SERIAL PRIMARY KEY,
    userId    INTEGER,
    status    VARCHAR(255),
    totalCost FLOAT
);

-- Создание таблицы CartProduct
CREATE TABLE CartProduct
(
    cartId    INTEGER REFERENCES Carts (id),
    productId INTEGER REFERENCES Products (id),
    quantity  INTEGER,
    PRIMARY KEY (cartId, productId)
);

-- Создание таблицы OrderProduct
CREATE TABLE OrderProduct
(
    orderId   INTEGER REFERENCES Orders (id),
    productId INTEGER REFERENCES Products (id),
    quantity  INTEGER,
    PRIMARY KEY (orderId, productId)
);
