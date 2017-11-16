DROP DATABASE IF EXISTS pumpkin;
CREATE DATABASE pumpkin CHARSET=UTF8;
USE pumpkin;
CREATE TABLE comment(
	uname VARCHAR(32),
	context VARCHAR(288),
	avater VARCHAR(128)
);
INSERT INTO comment 
VALUES('tom','good','./images/default/5.jpg'),
('Mary','bad','./images/default/6.jpg'),
('tom','good','./images/default/7.jpg'),
('king','bad','./images/default/8.jpg'),
('mirtal','good','./images/default/tx2_2.png'),
('tom','bad','./images/default/tx2_2.png'),
('koko','good','./images/default/tx2_7.png'),
('linda','good','./images/default/tx2_2.png'),
('tom','bad','./images/default/tx2_7.png');