DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS properties;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email varchar(45),
    pw TEXT,
    first_name VARCHAR(45),
    last_name VARCHAR(45)
);


CREATE TABLE properties(
    property_id SERIAL PRIMARY KEY,
    property_name VARCHAR(45),
    acct_sys_id VARCHAR(10)
);