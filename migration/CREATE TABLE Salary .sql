CREATE TABLE Salary (
	id serial PRIMARY KEY,
	name VARCHAR ( 255 ),
	salary NUMERIC(12,2) DEFAULT 0.00,
	currency VARCHAR ( 10 ) ,
	department VARCHAR ( 255 ) ,
	sub_department VARCHAR ( 255 ) ,
        on_contract BOOLEAN DEFAULT TRUE  
);