create database mydb;

use mydb;

create table employees (
	id int,
    first_name varchar(50),
    last_name varchar(50),
    admin_rights tinyint
	);
    
insert into employees value (1, "Hello", "World", 1);
    
select * from employees;