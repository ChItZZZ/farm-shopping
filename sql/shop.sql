# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.6.24)
# Database: shop
# Generation Time: 2017-05-01 07:40:28 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table t_admin
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_admin`;

CREATE TABLE `t_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_admin` WRITE;
/*!40000 ALTER TABLE `t_admin` DISABLE KEYS */;

INSERT INTO `t_admin` (`id`, `password`, `username`)
VALUES
	(1,'123456','管理员');

/*!40000 ALTER TABLE `t_admin` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table t_merchant
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_merchant`;

CREATE TABLE `t_merchant` (
  `mid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_merchant` WRITE;
/*!40000 ALTER TABLE `t_merchant` DISABLE KEYS */;

INSERT INTO `t_merchant` (`mid`, `name`, `username`, `password`, `address`, `phone`)
VALUES
	(1,'haha',NULL,NULL,NULL,NULL);

/*!40000 ALTER TABLE `t_merchant` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table t_order
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_order`;

CREATE TABLE `t_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `total_price` double DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKho2r4qgj3txpy8964fnla95ub` (`user_id`),
  CONSTRAINT `FKho2r4qgj3txpy8964fnla95ub` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_order` WRITE;
/*!40000 ALTER TABLE `t_order` DISABLE KEYS */;

INSERT INTO `t_order` (`id`, `address`, `create_time`, `phone`, `status`, `total_price`, `zipcode`, `user_id`)
VALUES
	(1,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*!40000 ALTER TABLE `t_order` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table t_orderitem
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_orderitem`;

CREATE TABLE `t_orderitem` (
  `oid` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `mer_id` int(11) NOT NULL,
  `state` int(5) DEFAULT NULL,
  PRIMARY KEY (`oid`),
  KEY `FK_n7j2urgoicw0qa2b5s2pidind` (`order_id`),
  KEY `FK2yx4lqm9mh15mysa9kppvf77r` (`product_id`),
  KEY `user` (`user_id`),
  KEY `mer` (`mer_id`),
  CONSTRAINT `FK2yx4lqm9mh15mysa9kppvf77r` FOREIGN KEY (`product_id`) REFERENCES `t_product` (`pid`),
  CONSTRAINT `FK_n7j2urgoicw0qa2b5s2pidind` FOREIGN KEY (`order_id`) REFERENCES `t_order` (`id`),
  CONSTRAINT `mer` FOREIGN KEY (`mer_id`) REFERENCES `t_merchant` (`mid`),
  CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_orderitem` WRITE;
/*!40000 ALTER TABLE `t_orderitem` DISABLE KEYS */;

INSERT INTO `t_orderitem` (`oid`, `quantity`, `order_id`, `product_id`, `date`, `user_id`, `mer_id`, `state`)
VALUES
	(1,1,1,1,NULL,1,1,1);

/*!40000 ALTER TABLE `t_orderitem` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table t_product
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_product`;

CREATE TABLE `t_product` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` datetime DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `pic_url` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `mer_id` int(11) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`pid`),
  KEY `merchant` (`mer_id`),
  CONSTRAINT `merchant` FOREIGN KEY (`mer_id`) REFERENCES `t_merchant` (`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_product` WRITE;
/*!40000 ALTER TABLE `t_product` DISABLE KEYS */;

INSERT INTO `t_product` (`pid`, `create_time`, `note`, `pic_url`, `title`, `price`, `mer_id`, `type`)
VALUES
	(1,'2013-07-10 15:01:26','阿斯顿发楼思考点附近啦静安寺离开对方进来看撒经费等楼库萨克警方流口水京东方连空间撒离开的解放路口近代史路口附近','/images/l_pro01.gif','水果',NULL,1,NULL),
	(2,'2013-07-30 15:03:29','士大夫','/images/l_pro02.gif','高级餐具',NULL,NULL,NULL),
	(3,'2013-08-14 15:03:57','进梵蒂冈','/images/l_pro03.gif','红木茶具套装',NULL,NULL,NULL);

/*!40000 ALTER TABLE `t_product` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table t_producttype
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_producttype`;

CREATE TABLE `t_producttype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_producttype` WRITE;
/*!40000 ALTER TABLE `t_producttype` DISABLE KEYS */;

INSERT INTO `t_producttype` (`id`, `name`)
VALUES
	(1,'电子电器'),
	(2,'床上用品'),
	(3,'厨房用具'),
	(4,'运动健身'),
	(5,'儿童用品'),
	(6,'食品保健');

/*!40000 ALTER TABLE `t_producttype` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table t_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_user`;

CREATE TABLE `t_user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(50) DEFAULT NULL,
  `password` varchar(14) NOT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `username` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_user` WRITE;
/*!40000 ALTER TABLE `t_user` DISABLE KEYS */;

INSERT INTO `t_user` (`uid`, `address`, `password`, `phone`, `username`)
VALUES
	(1,'重庆市南岸区万达4栋29-18','1234','13888888888','周文滔'),
	(2,NULL,'123456',NULL,'nicky');

/*!40000 ALTER TABLE `t_user` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table t_useraddress
# ------------------------------------------------------------

DROP TABLE IF EXISTS `t_useraddress`;

CREATE TABLE `t_useraddress` (
  `aid` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `consignee` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`aid`),
  KEY `FK_c0hoxg699yrbg42lrq6738j0n` (`user_id`),
  CONSTRAINT `FK_c0hoxg699yrbg42lrq6738j0n` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`uid`),
  CONSTRAINT `FKivjwmwb9xngrc6ic856ryrb57` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `t_useraddress` WRITE;
/*!40000 ALTER TABLE `t_useraddress` DISABLE KEYS */;

INSERT INTO `t_useraddress` (`aid`, `address`, `consignee`, `phone`, `zipcode`, `user_id`)
VALUES
	(1,'tongji','shzhong','123456','12306',2);

/*!40000 ALTER TABLE `t_useraddress` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
