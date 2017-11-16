SET NAMES UTF8;
DROP DATABASE IF EXISTS meishijie;
CREATE DATABASE meishijie CHARSET=UTF8;
USE meishijie;

CREATE TABLE msj_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64) UNIQUE,
  phone VARCHAR(16) UNIQUE,
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT,                  #性别  0-女  1-男
  checked INT        #同意
);
INSERT INTO msj_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar.png', '丁伟', '1','1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar.png', '林当', '1','1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar.png', '窦志强', '1','1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar.png', '秦小雅', '0','1');