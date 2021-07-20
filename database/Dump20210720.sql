-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: driver_license_test
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `answer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question_id` int(11) NOT NULL,
  `text` varchar(45) DEFAULT NULL,
  `img` varchar(225) DEFAULT NULL,
  `is_correct` tinyint(1) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `delete_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK8frr4bcabmmeyyu60qt7iiblo` (`question_id`),
  CONSTRAINT `FK8frr4bcabmmeyyu60qt7iiblo` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  CONSTRAINT `fk_answer_question` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (17,1,'burn',NULL,1,NULL,NULL,NULL),(18,1,'hot',NULL,0,NULL,NULL,NULL),(19,2,'ice',NULL,1,NULL,NULL,NULL),(20,2,'cool',NULL,1,NULL,NULL,NULL),(21,3,'black',NULL,0,NULL,NULL,NULL),(22,3,'hard',NULL,0,NULL,NULL,NULL),(23,4,'while',NULL,1,NULL,NULL,NULL),(24,4,'smooth',NULL,0,NULL,NULL,NULL),(25,5,'duck',NULL,1,NULL,NULL,NULL),(26,5,'chiken',NULL,0,NULL,NULL,NULL),(27,5,NULL,'https://c8.alamy.com/comp/2BHG705/colourful-conceptual-images-2BHG705.jpg',0,NULL,NULL,NULL);
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(225) DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `update_date` date DEFAULT NULL,
  `delete_date` date DEFAULT NULL,
  `deleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'stuff',NULL,NULL,NULL,0),(2,'other',NULL,NULL,'2021-07-08',1),(6,'other 3',NULL,NULL,'2021-07-08',1);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historyanswer`
--

DROP TABLE IF EXISTS `historyanswer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `historyanswer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` longtext,
  `img` varchar(255) DEFAULT NULL,
  `is_correct` tinyint(4) DEFAULT NULL,
  `history_question_id` int(11) DEFAULT NULL,
  `is_select` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FKtfqe9le451s2p3d6m231y6el0` (`history_question_id`),
  CONSTRAINT `FKtfqe9le451s2p3d6m231y6el0` FOREIGN KEY (`history_question_id`) REFERENCES `historyquestion` (`id`),
  CONSTRAINT `fk_historyanswer_historyquestion` FOREIGN KEY (`history_question_id`) REFERENCES `historyquestion` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=709 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historyanswer`
--

LOCK TABLES `historyanswer` WRITE;
/*!40000 ALTER TABLE `historyanswer` DISABLE KEYS */;
INSERT INTO `historyanswer` VALUES (1,'fire',NULL,1,1,0),(2,'water',NULL,0,1,0),(3,'earth',NULL,0,2,0),(4,'wind',NULL,1,2,0),(5,'black',NULL,0,3,1),(6,'hard',NULL,0,3,0),(7,'smooth',NULL,0,4,0),(8,'while',NULL,1,4,0),(9,'duck',NULL,1,5,0),(10,'flamingo',NULL,0,5,0),(11,'chiken',NULL,0,5,0),(12,'hard',NULL,0,6,1),(13,'black',NULL,0,6,0),(14,'while',NULL,1,7,0),(15,'smooth',NULL,0,7,1),(16,'burn',NULL,1,8,1),(17,'hot',NULL,0,8,0),(18,'ice',NULL,1,9,0),(19,'cool',NULL,1,9,1),(20,'chiken',NULL,0,10,0),(21,'duck',NULL,1,10,1),(22,'flamingo',NULL,0,10,0),(23,'hard',NULL,0,11,1),(24,'black',NULL,0,11,0),(25,'while',NULL,1,12,0),(26,'smooth',NULL,0,12,1),(27,'ice',NULL,1,13,1),(28,'cool',NULL,1,13,0),(29,'black',NULL,0,14,1),(30,'hard',NULL,0,14,1),(31,'while',NULL,1,15,1),(32,'smooth',NULL,0,15,0),(33,'burn',NULL,1,16,1),(34,'hot',NULL,0,16,1),(35,'black',NULL,0,17,1),(36,'hard',NULL,0,17,0),(37,'burn',NULL,1,18,0),(38,'hot',NULL,0,18,1),(39,'while',NULL,1,19,1),(40,'smooth',NULL,0,19,1),(41,'cool',NULL,1,20,1),(42,'ice',NULL,1,20,0),(43,'smooth',NULL,0,21,0),(44,'while',NULL,1,21,1),(45,'black',NULL,0,22,0),(46,'hard',NULL,0,22,0),(47,'ice',NULL,1,23,1),(48,'cool',NULL,1,23,0),(49,'burn',NULL,1,24,0),(50,'hot',NULL,0,24,1),(51,'hot',NULL,0,25,1),(52,'burn',NULL,1,25,0),(53,'smooth',NULL,0,26,0),(54,'while',NULL,1,26,1),(55,'ice',NULL,1,27,0),(56,'cool',NULL,1,27,1),(57,'black',NULL,0,28,1),(58,'hard',NULL,0,28,0),(59,'while',NULL,1,29,0),(60,'smooth',NULL,0,29,0),(61,'hard',NULL,0,30,0),(62,'black',NULL,0,30,0),(63,'hot',NULL,0,31,0),(64,'burn',NULL,1,31,0),(65,'ice',NULL,1,32,0),(66,'cool',NULL,1,32,0),(67,'ice',NULL,1,33,1),(68,'cool',NULL,1,33,0),(69,'black',NULL,0,34,0),(70,'hard',NULL,0,34,1),(71,'burn',NULL,1,35,0),(72,'hot',NULL,0,35,1),(73,'while',NULL,1,36,1),(74,'smooth',NULL,0,36,0),(75,'duck',NULL,1,37,1),(76,'chiken',NULL,0,37,0),(77,'flamingo',NULL,0,37,1),(78,'hard',NULL,0,38,0),(79,'black',NULL,0,38,1),(80,'while',NULL,1,39,1),(81,'smooth',NULL,0,39,0),(82,'ice',NULL,1,40,1),(83,'cool',NULL,1,40,0),(84,'while',NULL,1,41,1),(85,'smooth',NULL,0,41,1),(86,'hard',NULL,0,42,1),(87,'black',NULL,0,42,0),(88,'hot',NULL,0,43,0),(89,'burn',NULL,1,43,1),(90,'hard',NULL,0,44,1),(91,'black',NULL,0,44,0),(92,'hot',NULL,0,45,0),(93,'burn',NULL,1,45,1),(94,'ice',NULL,1,46,1),(95,'cool',NULL,1,46,0),(96,'smooth',NULL,0,47,0),(97,'while',NULL,1,47,1),(98,'while',NULL,1,48,1),(99,'smooth',NULL,0,48,0),(100,'black',NULL,0,49,0),(101,'hard',NULL,0,49,1),(102,'flamingo',NULL,0,50,1),(103,'duck',NULL,1,50,1),(104,'chiken',NULL,0,50,0),(105,'hot',NULL,0,51,1),(106,'burn',NULL,1,51,0),(107,'ice',NULL,1,52,0),(108,'cool',NULL,1,52,1),(109,'while',NULL,1,53,1),(110,'smooth',NULL,0,53,0),(111,'black',NULL,0,54,0),(112,'hard',NULL,0,54,1),(113,'ice',NULL,1,55,1),(114,'cool',NULL,1,55,0),(115,'hard',NULL,0,56,0),(116,'black',NULL,0,56,1),(117,'hot',NULL,0,57,1),(118,'burn',NULL,1,57,0),(119,'smooth',NULL,0,58,0),(120,'while',NULL,1,58,1),(121,'while',NULL,1,59,1),(122,'smooth',NULL,0,59,0),(123,'duck',NULL,1,60,0),(124,'chiken',NULL,0,60,1),(125,'flamingo',NULL,0,60,1),(126,'hard',NULL,0,61,1),(127,'black',NULL,0,61,0),(128,'hard',NULL,0,62,1),(129,'black',NULL,0,62,0),(130,'duck',NULL,1,63,0),(131,'chiken',NULL,0,63,1),(132,'flamingo',NULL,0,63,1),(133,'while',NULL,1,64,1),(134,'smooth',NULL,0,64,0),(135,'chiken',NULL,0,65,0),(136,'flamingo',NULL,0,65,0),(137,'duck',NULL,1,65,0),(138,'black',NULL,0,66,0),(139,'hard',NULL,0,66,0),(140,'smooth',NULL,0,67,0),(141,'while',NULL,1,67,0),(142,'smooth',NULL,0,68,0),(143,'while',NULL,1,68,0),(144,'flamingo',NULL,0,69,0),(145,'chiken',NULL,0,69,0),(146,'duck',NULL,1,69,0),(147,'black',NULL,0,70,0),(148,'hard',NULL,0,70,0),(149,'hard',NULL,0,71,0),(150,'black',NULL,0,71,0),(151,'while',NULL,1,72,0),(152,'smooth',NULL,0,72,0),(153,'chiken',NULL,0,73,0),(154,'flamingo',NULL,0,73,0),(155,'duck',NULL,1,73,0),(156,'hard',NULL,0,74,0),(157,'black',NULL,0,74,0),(158,'while',NULL,1,75,0),(159,'smooth',NULL,0,75,0),(160,'chiken',NULL,0,76,0),(161,'flamingo',NULL,0,76,0),(162,'duck',NULL,1,76,0),(163,'hard',NULL,0,77,0),(164,'black',NULL,0,77,0),(165,'while',NULL,1,78,0),(166,'smooth',NULL,0,78,0),(167,'chiken',NULL,0,79,0),(168,'flamingo',NULL,0,79,0),(169,'duck',NULL,1,79,0),(170,'hard',NULL,0,80,0),(171,'black',NULL,0,80,0),(172,'while',NULL,1,81,0),(173,'smooth',NULL,0,81,0),(174,'chiken',NULL,0,82,0),(175,'flamingo',NULL,0,82,0),(176,'duck',NULL,1,82,0),(177,'hard',NULL,0,83,0),(178,'black',NULL,0,83,0),(179,'while',NULL,1,84,0),(180,'smooth',NULL,0,84,0),(181,'chiken',NULL,0,85,0),(182,'flamingo',NULL,0,85,0),(183,'duck',NULL,1,85,0),(184,'hard',NULL,0,86,0),(185,'black',NULL,0,86,0),(186,'while',NULL,1,87,0),(187,'smooth',NULL,0,87,0),(188,'chiken',NULL,0,88,0),(189,'flamingo',NULL,0,88,0),(190,'duck',NULL,1,88,0),(191,'hard',NULL,0,89,0),(192,'black',NULL,0,89,0),(193,'while',NULL,1,90,0),(194,'smooth',NULL,0,90,0),(195,'chiken',NULL,0,91,0),(196,'flamingo',NULL,0,91,0),(197,'duck',NULL,1,91,0),(198,'hard',NULL,0,92,0),(199,'black',NULL,0,92,0),(200,'while',NULL,1,93,0),(201,'smooth',NULL,0,93,0),(202,'chiken',NULL,0,94,0),(203,'flamingo',NULL,0,94,0),(204,'duck',NULL,1,94,0),(205,'hard',NULL,0,95,0),(206,'black',NULL,0,95,0),(207,'while',NULL,1,96,0),(208,'smooth',NULL,0,96,0),(209,'chiken',NULL,0,97,0),(210,'flamingo',NULL,0,97,0),(211,'duck',NULL,1,97,0),(212,'hard',NULL,0,98,0),(213,'black',NULL,0,98,0),(214,'while',NULL,1,99,0),(215,'smooth',NULL,0,99,0),(216,'chiken',NULL,0,100,0),(217,'flamingo',NULL,0,100,0),(218,'duck',NULL,1,100,0),(219,'hard',NULL,0,101,0),(220,'black',NULL,0,101,0),(221,'while',NULL,1,102,0),(222,'smooth',NULL,0,102,0),(223,'chiken',NULL,0,103,0),(224,'flamingo',NULL,0,103,0),(225,'duck',NULL,1,103,0),(226,'hard',NULL,0,104,0),(227,'black',NULL,0,104,0),(228,'while',NULL,1,105,0),(229,'smooth',NULL,0,105,0),(230,'chiken',NULL,0,106,0),(231,'flamingo',NULL,0,106,0),(232,'duck',NULL,1,106,0),(233,'hard',NULL,0,107,0),(234,'black',NULL,0,107,0),(235,'while',NULL,1,108,0),(236,'smooth',NULL,0,108,0),(237,'chiken',NULL,0,109,0),(238,'flamingo',NULL,0,109,0),(239,'duck',NULL,1,109,0),(240,'hard',NULL,0,110,0),(241,'black',NULL,0,110,0),(242,'while',NULL,1,111,0),(243,'smooth',NULL,0,111,0),(244,'chiken',NULL,0,112,0),(245,'flamingo',NULL,0,112,0),(246,'duck',NULL,1,112,0),(247,'hard',NULL,0,113,0),(248,'black',NULL,0,113,0),(249,'while',NULL,1,114,0),(250,'smooth',NULL,0,114,0),(251,'chiken',NULL,0,115,0),(252,'flamingo',NULL,0,115,0),(253,'duck',NULL,1,115,0),(254,'hard',NULL,0,116,0),(255,'black',NULL,0,116,0),(256,'while',NULL,1,117,0),(257,'smooth',NULL,0,117,0),(258,'chiken',NULL,0,118,0),(259,'flamingo',NULL,0,118,0),(260,'duck',NULL,1,118,0),(261,'hard',NULL,0,119,0),(262,'black',NULL,0,119,0),(263,'while',NULL,1,120,0),(264,'smooth',NULL,0,120,0),(265,'chiken',NULL,0,121,0),(266,'flamingo',NULL,0,121,0),(267,'duck',NULL,1,121,0),(268,'hard',NULL,0,122,0),(269,'black',NULL,0,122,0),(270,'while',NULL,1,123,0),(271,'smooth',NULL,0,123,0),(272,'chiken',NULL,0,124,0),(273,'flamingo',NULL,0,124,0),(274,'duck',NULL,1,124,0),(275,'hard',NULL,0,125,0),(276,'black',NULL,0,125,0),(277,'while',NULL,1,126,0),(278,'smooth',NULL,0,126,0),(279,'chiken',NULL,0,127,0),(280,'flamingo',NULL,0,127,0),(281,'duck',NULL,1,127,0),(282,'hard',NULL,0,128,0),(283,'black',NULL,0,128,0),(284,'while',NULL,1,129,0),(285,'smooth',NULL,0,129,0),(286,'chiken',NULL,0,130,0),(287,'flamingo',NULL,0,130,0),(288,'duck',NULL,1,130,0),(289,'hard',NULL,0,131,0),(290,'black',NULL,0,131,0),(291,'while',NULL,1,132,0),(292,'smooth',NULL,0,132,0),(293,'chiken',NULL,0,133,0),(294,'flamingo',NULL,0,133,0),(295,'duck',NULL,1,133,0),(296,'hard',NULL,0,134,0),(297,'black',NULL,0,134,0),(298,'while',NULL,1,135,0),(299,'smooth',NULL,0,135,0),(300,'chiken',NULL,0,136,0),(301,'flamingo',NULL,0,136,0),(302,'duck',NULL,1,136,0),(303,'hard',NULL,0,137,0),(304,'black',NULL,0,137,0),(305,'while',NULL,1,138,0),(306,'smooth',NULL,0,138,0),(307,'chiken',NULL,0,139,0),(308,'flamingo',NULL,0,139,0),(309,'duck',NULL,1,139,0),(310,'hard',NULL,0,140,0),(311,'black',NULL,0,140,0),(312,'while',NULL,1,141,0),(313,'smooth',NULL,0,141,0),(314,'chiken',NULL,0,142,0),(315,'flamingo',NULL,0,142,0),(316,'duck',NULL,1,142,0),(317,'hard',NULL,0,143,0),(318,'black',NULL,0,143,0),(319,'while',NULL,1,144,0),(320,'smooth',NULL,0,144,0),(321,'chiken',NULL,0,145,0),(322,'flamingo',NULL,0,145,0),(323,'duck',NULL,1,145,0),(324,'hard',NULL,0,146,0),(325,'black',NULL,0,146,0),(326,'while',NULL,1,147,0),(327,'smooth',NULL,0,147,0),(328,'chiken',NULL,0,148,0),(329,'flamingo',NULL,0,148,0),(330,'duck',NULL,1,148,0),(331,'hard',NULL,0,149,0),(332,'black',NULL,0,149,0),(333,'while',NULL,1,150,0),(334,'smooth',NULL,0,150,0),(335,'chiken',NULL,0,151,0),(336,'flamingo',NULL,0,151,0),(337,'duck',NULL,1,151,0),(338,'hard',NULL,0,152,0),(339,'black',NULL,0,152,0),(340,'while',NULL,1,153,0),(341,'smooth',NULL,0,153,0),(342,'chiken',NULL,0,154,0),(343,'flamingo',NULL,0,154,0),(344,'duck',NULL,1,154,0),(345,'hard',NULL,0,155,0),(346,'black',NULL,0,155,0),(347,'while',NULL,1,156,0),(348,'smooth',NULL,0,156,0),(349,'chiken',NULL,0,157,0),(350,'flamingo',NULL,0,157,0),(351,'duck',NULL,1,157,0),(352,'hard',NULL,0,158,0),(353,'black',NULL,0,158,0),(354,'while',NULL,1,159,0),(355,'smooth',NULL,0,159,0),(356,'chiken',NULL,0,160,0),(357,'flamingo',NULL,0,160,0),(358,'duck',NULL,1,160,0),(359,'hard',NULL,0,161,0),(360,'black',NULL,0,161,0),(361,'while',NULL,1,162,0),(362,'smooth',NULL,0,162,0),(363,'chiken',NULL,0,163,0),(364,'flamingo',NULL,0,163,0),(365,'duck',NULL,1,163,0),(366,'hard',NULL,0,164,0),(367,'black',NULL,0,164,0),(368,'while',NULL,1,165,0),(369,'smooth',NULL,0,165,0),(370,'chiken',NULL,0,166,0),(371,'flamingo',NULL,0,166,0),(372,'duck',NULL,1,166,0),(373,'hard',NULL,0,167,0),(374,'black',NULL,0,167,0),(375,'while',NULL,1,168,0),(376,'smooth',NULL,0,168,0),(377,'chiken',NULL,0,169,0),(378,'flamingo',NULL,0,169,0),(379,'duck',NULL,1,169,0),(380,'hard',NULL,0,170,0),(381,'black',NULL,0,170,0),(382,'while',NULL,1,171,0),(383,'smooth',NULL,0,171,0),(384,'chiken',NULL,0,172,0),(385,'flamingo',NULL,0,172,0),(386,'duck',NULL,1,172,0),(387,'hard',NULL,0,173,0),(388,'black',NULL,0,173,0),(389,'while',NULL,1,174,0),(390,'smooth',NULL,0,174,0),(391,'chiken',NULL,0,175,0),(392,'flamingo',NULL,0,175,0),(393,'duck',NULL,1,175,0),(394,'hard',NULL,0,176,0),(395,'black',NULL,0,176,0),(396,'while',NULL,1,177,0),(397,'smooth',NULL,0,177,0),(398,'chiken',NULL,0,178,0),(399,'flamingo',NULL,0,178,0),(400,'duck',NULL,1,178,0),(401,'hard',NULL,0,179,0),(402,'black',NULL,0,179,0),(403,'while',NULL,1,180,0),(404,'smooth',NULL,0,180,0),(405,'chiken',NULL,0,181,0),(406,'flamingo',NULL,0,181,0),(407,'duck',NULL,1,181,0),(408,'hard',NULL,0,182,0),(409,'black',NULL,0,182,0),(410,'while',NULL,1,183,0),(411,'smooth',NULL,0,183,0),(412,'chiken',NULL,0,184,0),(413,'flamingo',NULL,0,184,0),(414,'duck',NULL,1,184,0),(415,'hard',NULL,0,185,0),(416,'black',NULL,0,185,0),(417,'while',NULL,1,186,0),(418,'smooth',NULL,0,186,0),(419,'chiken',NULL,0,187,0),(420,'flamingo',NULL,0,187,0),(421,'duck',NULL,1,187,0),(422,'hard',NULL,0,188,0),(423,'black',NULL,0,188,0),(424,'while',NULL,1,189,0),(425,'smooth',NULL,0,189,0),(426,'chiken',NULL,0,190,0),(427,'flamingo',NULL,0,190,0),(428,'duck',NULL,1,190,0),(429,'hard',NULL,0,191,0),(430,'black',NULL,0,191,0),(431,'while',NULL,1,192,0),(432,'smooth',NULL,0,192,0),(433,'chiken',NULL,0,193,0),(434,'flamingo',NULL,0,193,0),(435,'duck',NULL,1,193,0),(436,'hard',NULL,0,194,0),(437,'black',NULL,0,194,0),(438,'while',NULL,1,195,0),(439,'smooth',NULL,0,195,0),(440,'chiken',NULL,0,196,0),(441,'flamingo',NULL,0,196,0),(442,'duck',NULL,1,196,0),(443,'hard',NULL,0,197,0),(444,'black',NULL,0,197,0),(445,'while',NULL,1,198,0),(446,'smooth',NULL,0,198,0),(447,'chiken',NULL,0,199,0),(448,'flamingo',NULL,0,199,0),(449,'duck',NULL,1,199,0),(450,'hard',NULL,0,200,0),(451,'black',NULL,0,200,0),(452,'while',NULL,1,201,0),(453,'smooth',NULL,0,201,0),(454,'chiken',NULL,0,202,0),(455,'flamingo',NULL,0,202,0),(456,'duck',NULL,1,202,0),(457,'hard',NULL,0,203,0),(458,'black',NULL,0,203,0),(459,'while',NULL,1,204,0),(460,'smooth',NULL,0,204,0),(461,'chiken',NULL,0,205,0),(462,'flamingo',NULL,0,205,0),(463,'duck',NULL,1,205,0),(464,'hard',NULL,0,206,0),(465,'black',NULL,0,206,0),(466,'while',NULL,1,207,0),(467,'smooth',NULL,0,207,0),(468,'chiken',NULL,0,208,0),(469,'flamingo',NULL,0,208,0),(470,'duck',NULL,1,208,0),(471,'hard',NULL,0,209,0),(472,'black',NULL,0,209,0),(473,'while',NULL,1,210,0),(474,'smooth',NULL,0,210,0),(475,'chiken',NULL,0,211,0),(476,'flamingo',NULL,0,211,0),(477,'duck',NULL,1,211,0),(478,'hard',NULL,0,212,0),(479,'black',NULL,0,212,0),(480,'while',NULL,1,213,0),(481,'smooth',NULL,0,213,0),(482,'chiken',NULL,0,214,0),(483,'flamingo',NULL,0,214,0),(484,'duck',NULL,1,214,0),(485,'hard',NULL,0,215,0),(486,'black',NULL,0,215,0),(487,'while',NULL,1,216,0),(488,'smooth',NULL,0,216,0),(489,'chiken',NULL,0,217,0),(490,'flamingo',NULL,0,217,0),(491,'duck',NULL,1,217,0),(492,'burn',NULL,1,218,1),(493,'hot',NULL,0,218,0),(494,'cool',NULL,1,219,0),(495,'ice',NULL,1,219,1),(496,'black',NULL,0,220,1),(497,'hard',NULL,0,220,0),(498,'smooth',NULL,0,221,0),(499,'while',NULL,1,221,0),(500,'burn',NULL,1,222,1),(501,'hot',NULL,0,222,0),(502,'cool',NULL,1,223,0),(503,'ice',NULL,1,223,1),(504,'black',NULL,0,224,1),(505,'hard',NULL,0,224,0),(506,'smooth',NULL,0,225,0),(507,'while',NULL,1,225,0),(508,'burn',NULL,1,226,1),(509,'hot',NULL,0,226,0),(510,'cool',NULL,1,227,0),(511,'ice',NULL,1,227,1),(512,'black',NULL,0,228,1),(513,'hard',NULL,0,228,0),(514,'smooth',NULL,0,229,0),(515,'while',NULL,1,229,0),(516,'burn',NULL,1,230,1),(517,'hot',NULL,0,230,0),(518,'cool',NULL,1,231,0),(519,'ice',NULL,1,231,1),(520,'black',NULL,0,232,1),(521,'hard',NULL,0,232,0),(522,'smooth',NULL,0,233,0),(523,'while',NULL,1,233,0),(524,'burn',NULL,1,234,1),(525,'hot',NULL,0,234,0),(526,'cool',NULL,1,235,0),(527,'ice',NULL,1,235,1),(528,'black',NULL,0,236,1),(529,'hard',NULL,0,236,0),(530,'smooth',NULL,0,237,0),(531,'while',NULL,1,237,0),(532,'burn',NULL,1,238,1),(533,'hot',NULL,0,238,0),(534,'cool',NULL,1,239,0),(535,'ice',NULL,1,239,1),(536,'black',NULL,0,240,1),(537,'hard',NULL,0,240,0),(538,'smooth',NULL,0,241,0),(539,'while',NULL,1,241,0),(540,'burn',NULL,1,242,1),(541,'hot',NULL,0,242,0),(542,'cool',NULL,1,243,0),(543,'ice',NULL,1,243,1),(544,'black',NULL,0,244,1),(545,'hard',NULL,0,244,0),(546,'smooth',NULL,0,245,0),(547,'while',NULL,1,245,0),(548,'burn',NULL,1,246,1),(549,'hot',NULL,0,246,0),(550,'cool',NULL,1,247,0),(551,'ice',NULL,1,247,1),(552,'black',NULL,0,248,1),(553,'hard',NULL,0,248,0),(554,'smooth',NULL,0,249,0),(555,'while',NULL,1,249,0),(556,'burn',NULL,1,250,1),(557,'hot',NULL,0,250,0),(558,'cool',NULL,1,251,0),(559,'ice',NULL,1,251,1),(560,'black',NULL,0,252,1),(561,'hard',NULL,0,252,0),(562,'smooth',NULL,0,253,0),(563,'while',NULL,1,253,0),(564,'burn',NULL,1,254,1),(565,'hot',NULL,0,254,0),(566,'cool',NULL,1,255,0),(567,'ice',NULL,1,255,1),(568,'black',NULL,0,256,1),(569,'hard',NULL,0,256,0),(570,'smooth',NULL,0,257,0),(571,'while',NULL,1,257,0),(572,'burn',NULL,1,258,1),(573,'hot',NULL,0,258,0),(574,'cool',NULL,1,259,0),(575,'ice',NULL,1,259,1),(576,'black',NULL,0,260,1),(577,'hard',NULL,0,260,0),(578,'smooth',NULL,0,261,0),(579,'while',NULL,1,261,0),(580,'burn',NULL,1,262,1),(581,'hot',NULL,0,262,0),(582,'cool',NULL,1,263,0),(583,'ice',NULL,1,263,1),(584,'black',NULL,0,264,1),(585,'hard',NULL,0,264,0),(586,'smooth',NULL,0,265,0),(587,'while',NULL,1,265,0),(588,'burn',NULL,1,266,1),(589,'hot',NULL,0,266,0),(590,'cool',NULL,1,267,0),(591,'ice',NULL,1,267,1),(592,'black',NULL,0,268,1),(593,'hard',NULL,0,268,0),(594,'smooth',NULL,0,269,0),(595,'while',NULL,1,269,0),(596,'burn',NULL,1,270,1),(597,'hot',NULL,0,270,0),(598,'cool',NULL,1,271,0),(599,'ice',NULL,1,271,1),(600,'black',NULL,0,272,1),(601,'hard',NULL,0,272,0),(602,'smooth',NULL,0,273,0),(603,'while',NULL,1,273,0),(604,'burn',NULL,1,274,1),(605,'hot',NULL,0,274,0),(606,'cool',NULL,1,275,0),(607,'ice',NULL,1,275,1),(608,'black',NULL,0,276,1),(609,'hard',NULL,0,276,0),(610,'smooth',NULL,0,277,0),(611,'while',NULL,1,277,0),(612,'hard',NULL,0,278,0),(613,'black',NULL,0,278,0),(614,'cool',NULL,1,279,0),(615,'ice',NULL,1,279,0),(616,'while',NULL,1,280,0),(617,'smooth',NULL,0,280,0),(618,'hot',NULL,0,281,0),(619,'burn',NULL,1,281,0),(620,'hard',NULL,0,282,1),(621,'black',NULL,0,282,0),(622,'chiken',NULL,0,283,0),(623,'duck',NULL,1,283,1),(624,'flamingo',NULL,0,283,0),(625,'while',NULL,1,284,0),(626,'smooth',NULL,0,284,0),(627,'hard',NULL,0,285,1),(628,'black',NULL,0,285,0),(629,'chiken',NULL,0,286,0),(630,'duck',NULL,1,286,1),(631,'flamingo',NULL,0,286,0),(632,'while',NULL,1,287,0),(633,'smooth',NULL,0,287,0),(634,'while',NULL,1,288,1),(635,'smooth',NULL,0,288,0),(636,'chiken',NULL,0,289,0),(637,'flamingo',NULL,0,289,1),(638,'duck',NULL,1,289,1),(639,'hard',NULL,0,290,0),(640,'black',NULL,0,290,0),(641,'while',NULL,1,291,0),(642,'smooth',NULL,0,291,0),(643,'duck',NULL,1,292,0),(644,'flamingo',NULL,0,292,0),(645,'chiken',NULL,0,292,0),(646,'hard',NULL,0,293,0),(647,'black',NULL,0,293,0),(648,'black',NULL,0,294,0),(649,'hard',NULL,0,294,1),(650,'flamingo',NULL,0,295,1),(651,'chiken',NULL,0,295,1),(652,'duck',NULL,1,295,0),(653,'while',NULL,1,296,0),(654,'smooth',NULL,0,296,0),(655,'hot',NULL,0,297,0),(656,'burn',NULL,1,297,0),(657,'black',NULL,0,298,0),(658,'hard',NULL,0,298,0),(659,'while',NULL,1,299,0),(660,'smooth',NULL,0,299,0),(661,'cool',NULL,1,300,0),(662,'ice',NULL,1,300,0),(663,'hot',NULL,0,301,0),(664,'burn',NULL,1,301,0),(665,'black',NULL,0,302,0),(666,'hard',NULL,0,302,0),(667,'while',NULL,1,303,0),(668,'smooth',NULL,0,303,0),(669,'cool',NULL,1,304,0),(670,'ice',NULL,1,304,0),(671,'cool',NULL,1,305,0),(672,'ice',NULL,1,305,0),(673,'hot',NULL,0,306,0),(674,'burn',NULL,1,306,0),(675,'hard',NULL,0,307,0),(676,'black',NULL,0,307,0),(677,'while',NULL,1,308,0),(678,'smooth',NULL,0,308,0),(679,'smooth',NULL,0,309,1),(680,'while',NULL,1,309,0),(681,'chiken',NULL,0,310,0),(682,NULL,'https://c8.alamy.com/comp/2BHG705/colourful-conceptual-images-2BHG705.jpg',0,310,0),(683,'duck',NULL,1,310,1),(684,'black',NULL,0,311,0),(685,'hard',NULL,0,311,0),(686,'ice',NULL,1,312,1),(687,'cool',NULL,1,312,0),(688,'hot',NULL,0,313,0),(689,'burn',NULL,1,313,1),(690,'hard',NULL,0,314,0),(691,'black',NULL,0,314,0),(692,'while',NULL,1,315,1),(693,'smooth',NULL,0,315,0),(694,'black',NULL,0,316,1),(695,'hard',NULL,0,316,0),(696,'hot',NULL,0,317,0),(697,'burn',NULL,1,317,1),(698,'ice',NULL,1,318,1),(699,'cool',NULL,1,318,0),(700,'while',NULL,1,319,0),(701,'smooth',NULL,0,319,1),(702,'black',NULL,0,320,0),(703,'hard',NULL,0,320,0),(704,'duck',NULL,1,321,0),(705,'chiken',NULL,0,321,0),(706,NULL,'https://c8.alamy.com/comp/2BHG705/colourful-conceptual-images-2BHG705.jpg',0,321,0),(707,'smooth',NULL,0,322,0),(708,'while',NULL,1,322,0);
/*!40000 ALTER TABLE `historyanswer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historyquestion`
--

DROP TABLE IF EXISTS `historyquestion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `historyquestion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` longtext,
  `img` varchar(225) DEFAULT NULL,
  `dead_point` tinyint(4) DEFAULT NULL,
  `history_test_id` int(11) DEFAULT NULL,
  `is_correct` bit(1) DEFAULT NULL,
  `pick_one` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FKl12atgt9lmqxrkc9qh162fqpb` (`history_test_id`),
  CONSTRAINT `FKl12atgt9lmqxrkc9qh162fqpb` FOREIGN KEY (`history_test_id`) REFERENCES `historytest` (`id`),
  CONSTRAINT `fk_historyquestion_historytest` FOREIGN KEY (`history_test_id`) REFERENCES `historytest` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=323 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historyquestion`
--

LOCK TABLES `historyquestion` WRITE;
/*!40000 ALTER TABLE `historyquestion` DISABLE KEYS */;
INSERT INTO `historyquestion` VALUES (1,NULL,'firstQ',NULL,1,NULL,0),(2,NULL,'secondQ',NULL,1,NULL,0),(3,'iron',NULL,1,15,NULL,0),(4,'sliver',NULL,0,15,NULL,0),(5,'bird',NULL,0,15,NULL,0),(6,'iron',NULL,1,16,NULL,1),(7,'sliver',NULL,0,16,NULL,0),(8,'fire',NULL,0,16,NULL,1),(9,'water',NULL,1,16,NULL,0),(10,'bird',NULL,0,17,NULL,0),(11,'iron',NULL,1,17,NULL,0),(12,'sliver',NULL,0,17,NULL,0),(13,'water',NULL,1,18,_binary '\0',0),(14,'iron',NULL,1,18,_binary '\0',1),(15,'sliver',NULL,0,18,_binary '',0),(16,'fire',NULL,0,18,_binary '\0',1),(17,'iron',NULL,1,19,_binary '\0',1),(18,'fire',NULL,0,19,_binary '\0',1),(19,'sliver',NULL,0,19,_binary '\0',0),(20,'water',NULL,1,19,_binary '\0',0),(21,'sliver',NULL,0,20,_binary '',0),(22,'iron',NULL,1,20,_binary '',1),(23,'water',NULL,1,20,_binary '\0',0),(24,'fire',NULL,0,20,_binary '\0',1),(25,'fire',NULL,0,21,_binary '\0',1),(26,'sliver',NULL,0,21,_binary '',0),(27,'water',NULL,1,21,_binary '\0',0),(28,'iron',NULL,1,21,_binary '\0',1),(29,'sliver',NULL,0,22,_binary '\0',0),(30,'iron',NULL,1,22,_binary '',1),(31,'fire',NULL,0,22,_binary '\0',1),(32,'water',NULL,1,22,_binary '\0',0),(33,'water',NULL,1,23,_binary '\0',0),(34,'iron',NULL,1,23,_binary '\0',1),(35,'fire',NULL,0,23,_binary '\0',1),(36,'sliver',NULL,0,23,_binary '',0),(37,'bird',NULL,0,24,_binary '\0',0),(38,'iron',NULL,1,24,_binary '\0',1),(39,'sliver',NULL,0,24,_binary '',0),(40,'water',NULL,1,25,_binary '\0',0),(41,'sliver',NULL,0,25,_binary '\0',0),(42,'iron',NULL,1,25,_binary '\0',1),(43,'fire',NULL,0,25,_binary '',1),(44,'iron',NULL,1,26,_binary '\0',1),(45,'fire',NULL,0,26,_binary '',1),(46,'water',NULL,1,26,_binary '\0',0),(47,'sliver',NULL,0,26,_binary '',0),(48,'sliver',NULL,0,27,_binary '',0),(49,'iron',NULL,1,27,_binary '\0',1),(50,'bird',NULL,0,27,_binary '\0',0),(51,'fire',NULL,0,28,_binary '\0',1),(52,'water',NULL,1,28,_binary '\0',0),(53,'sliver',NULL,0,28,_binary '',0),(54,'iron',NULL,1,28,_binary '\0',1),(55,'water',NULL,1,29,_binary '\0',0),(56,'iron',NULL,1,29,_binary '\0',1),(57,'fire',NULL,0,29,_binary '\0',1),(58,'sliver',NULL,0,29,_binary '',0),(59,'sliver',NULL,0,30,_binary '',0),(60,'bird',NULL,0,30,_binary '\0',0),(61,'iron',NULL,1,30,_binary '\0',1),(62,'iron',NULL,1,31,_binary '\0',1),(63,'bird',NULL,0,31,_binary '\0',0),(64,'sliver',NULL,0,31,_binary '',0),(65,'bird',NULL,0,32,_binary '\0',0),(66,'iron',NULL,1,32,_binary '',1),(67,'sliver',NULL,0,32,_binary '\0',0),(68,'sliver',NULL,0,33,_binary '\0',0),(69,'bird',NULL,0,33,_binary '\0',0),(70,'iron',NULL,1,33,_binary '',1),(71,'iron',NULL,1,34,_binary '',1),(72,'sliver',NULL,0,34,_binary '\0',0),(73,'bird',NULL,0,34,_binary '\0',0),(74,'iron',NULL,1,35,_binary '',1),(75,'sliver',NULL,0,35,_binary '\0',0),(76,'bird',NULL,0,35,_binary '\0',0),(77,'iron',NULL,1,36,_binary '',1),(78,'sliver',NULL,0,36,_binary '\0',0),(79,'bird',NULL,0,36,_binary '\0',0),(80,'iron',NULL,1,37,_binary '',1),(81,'sliver',NULL,0,37,_binary '\0',0),(82,'bird',NULL,0,37,_binary '\0',0),(83,'iron',NULL,1,38,_binary '',1),(84,'sliver',NULL,0,38,_binary '\0',0),(85,'bird',NULL,0,38,_binary '\0',0),(86,'iron',NULL,1,39,_binary '',1),(87,'sliver',NULL,0,39,_binary '\0',0),(88,'bird',NULL,0,39,_binary '\0',0),(89,'iron',NULL,1,40,_binary '',1),(90,'sliver',NULL,0,40,_binary '\0',0),(91,'bird',NULL,0,40,_binary '\0',0),(92,'iron',NULL,1,41,_binary '',1),(93,'sliver',NULL,0,41,_binary '\0',0),(94,'bird',NULL,0,41,_binary '\0',0),(95,'iron',NULL,1,42,_binary '',1),(96,'sliver',NULL,0,42,_binary '\0',0),(97,'bird',NULL,0,42,_binary '\0',0),(98,'iron',NULL,1,43,_binary '',1),(99,'sliver',NULL,0,43,_binary '\0',0),(100,'bird',NULL,0,43,_binary '\0',0),(101,'iron',NULL,1,44,_binary '',1),(102,'sliver',NULL,0,44,_binary '\0',0),(103,'bird',NULL,0,44,_binary '\0',0),(104,'iron',NULL,1,45,_binary '',1),(105,'sliver',NULL,0,45,_binary '\0',0),(106,'bird',NULL,0,45,_binary '\0',0),(107,'iron',NULL,1,46,_binary '',1),(108,'sliver',NULL,0,46,_binary '\0',0),(109,'bird',NULL,0,46,_binary '\0',0),(110,'iron',NULL,1,47,_binary '',1),(111,'sliver',NULL,0,47,_binary '\0',0),(112,'bird',NULL,0,47,_binary '\0',0),(113,'iron',NULL,1,48,_binary '',1),(114,'sliver',NULL,0,48,_binary '\0',0),(115,'bird',NULL,0,48,_binary '\0',0),(116,'iron',NULL,1,49,_binary '',1),(117,'sliver',NULL,0,49,_binary '\0',0),(118,'bird',NULL,0,49,_binary '\0',0),(119,'iron',NULL,1,50,_binary '',1),(120,'sliver',NULL,0,50,_binary '\0',0),(121,'bird',NULL,0,50,_binary '\0',0),(122,'iron',NULL,1,51,_binary '',1),(123,'sliver',NULL,0,51,_binary '\0',0),(124,'bird',NULL,0,51,_binary '\0',0),(125,'iron',NULL,1,52,_binary '',1),(126,'sliver',NULL,0,52,_binary '\0',0),(127,'bird',NULL,0,52,_binary '\0',0),(128,'iron',NULL,1,53,_binary '',1),(129,'sliver',NULL,0,53,_binary '\0',0),(130,'bird',NULL,0,53,_binary '\0',0),(131,'iron',NULL,1,54,_binary '',1),(132,'sliver',NULL,0,54,_binary '\0',0),(133,'bird',NULL,0,54,_binary '\0',0),(134,'iron',NULL,1,55,_binary '',1),(135,'sliver',NULL,0,55,_binary '\0',0),(136,'bird',NULL,0,55,_binary '\0',0),(137,'iron',NULL,1,56,_binary '',1),(138,'sliver',NULL,0,56,_binary '\0',0),(139,'bird',NULL,0,56,_binary '\0',0),(140,'iron',NULL,1,57,_binary '',1),(141,'sliver',NULL,0,57,_binary '\0',0),(142,'bird',NULL,0,57,_binary '\0',0),(143,'iron',NULL,1,58,_binary '',1),(144,'sliver',NULL,0,58,_binary '\0',0),(145,'bird',NULL,0,58,_binary '\0',0),(146,'iron',NULL,1,59,_binary '',1),(147,'sliver',NULL,0,59,_binary '\0',0),(148,'bird',NULL,0,59,_binary '\0',0),(149,'iron',NULL,1,60,_binary '',1),(150,'sliver',NULL,0,60,_binary '\0',0),(151,'bird',NULL,0,60,_binary '\0',0),(152,'iron',NULL,1,61,_binary '',1),(153,'sliver',NULL,0,61,_binary '\0',0),(154,'bird',NULL,0,61,_binary '\0',0),(155,'iron',NULL,1,62,_binary '',1),(156,'sliver',NULL,0,62,_binary '\0',0),(157,'bird',NULL,0,62,_binary '\0',0),(158,'iron',NULL,1,63,_binary '',1),(159,'sliver',NULL,0,63,_binary '\0',0),(160,'bird',NULL,0,63,_binary '\0',0),(161,'iron',NULL,1,64,_binary '',1),(162,'sliver',NULL,0,64,_binary '\0',0),(163,'bird',NULL,0,64,_binary '\0',0),(164,'iron',NULL,1,65,_binary '',1),(165,'sliver',NULL,0,65,_binary '\0',0),(166,'bird',NULL,0,65,_binary '\0',0),(167,'iron',NULL,1,66,_binary '',1),(168,'sliver',NULL,0,66,_binary '\0',0),(169,'bird',NULL,0,66,_binary '\0',0),(170,'iron',NULL,1,67,_binary '',1),(171,'sliver',NULL,0,67,_binary '\0',0),(172,'bird',NULL,0,67,_binary '\0',0),(173,'iron',NULL,1,68,_binary '',1),(174,'sliver',NULL,0,68,_binary '\0',0),(175,'bird',NULL,0,68,_binary '\0',0),(176,'iron',NULL,1,69,_binary '',1),(177,'sliver',NULL,0,69,_binary '\0',0),(178,'bird',NULL,0,69,_binary '\0',0),(179,'iron',NULL,1,70,_binary '',1),(180,'sliver',NULL,0,70,_binary '\0',0),(181,'bird',NULL,0,70,_binary '\0',0),(182,'iron',NULL,1,71,_binary '',1),(183,'sliver',NULL,0,71,_binary '\0',0),(184,'bird',NULL,0,71,_binary '\0',0),(185,'iron',NULL,1,72,_binary '',1),(186,'sliver',NULL,0,72,_binary '\0',0),(187,'bird',NULL,0,72,_binary '\0',0),(188,'iron',NULL,1,73,_binary '',1),(189,'sliver',NULL,0,73,_binary '\0',0),(190,'bird',NULL,0,73,_binary '\0',0),(191,'iron',NULL,1,74,_binary '',1),(192,'sliver',NULL,0,74,_binary '\0',0),(193,'bird',NULL,0,74,_binary '\0',0),(194,'iron',NULL,1,75,_binary '',1),(195,'sliver',NULL,0,75,_binary '\0',0),(196,'bird',NULL,0,75,_binary '\0',0),(197,'iron',NULL,1,76,_binary '',1),(198,'sliver',NULL,0,76,_binary '\0',0),(199,'bird',NULL,0,76,_binary '\0',0),(200,'iron',NULL,1,77,_binary '',1),(201,'sliver',NULL,0,77,_binary '\0',0),(202,'bird',NULL,0,77,_binary '\0',0),(203,'iron',NULL,1,78,_binary '',1),(204,'sliver',NULL,0,78,_binary '\0',0),(205,'bird',NULL,0,78,_binary '\0',0),(206,'iron',NULL,1,79,_binary '',1),(207,'sliver',NULL,0,79,_binary '\0',0),(208,'bird',NULL,0,79,_binary '\0',0),(209,'iron',NULL,1,80,_binary '',1),(210,'sliver',NULL,0,80,_binary '\0',0),(211,'bird',NULL,0,80,_binary '\0',0),(212,'iron',NULL,1,81,_binary '',1),(213,'sliver',NULL,0,81,_binary '\0',0),(214,'bird',NULL,0,81,_binary '\0',0),(215,'iron',NULL,1,82,_binary '',1),(216,'sliver',NULL,0,82,_binary '\0',0),(217,'bird',NULL,0,82,_binary '\0',0),(218,'fire',NULL,0,83,_binary '',1),(219,'water',NULL,1,83,_binary '\0',0),(220,'iron',NULL,1,83,_binary '\0',1),(221,'sliver',NULL,0,83,_binary '\0',0),(222,'fire',NULL,0,84,_binary '',1),(223,'water',NULL,1,84,_binary '\0',0),(224,'iron',NULL,1,84,_binary '\0',1),(225,'sliver',NULL,0,84,_binary '\0',0),(226,'fire',NULL,0,85,_binary '',1),(227,'water',NULL,1,85,_binary '\0',0),(228,'iron',NULL,1,85,_binary '\0',1),(229,'sliver',NULL,0,85,_binary '\0',0),(230,'fire',NULL,0,86,_binary '',1),(231,'water',NULL,1,86,_binary '\0',0),(232,'iron',NULL,1,86,_binary '\0',1),(233,'sliver',NULL,0,86,_binary '\0',0),(234,'fire',NULL,0,87,_binary '',1),(235,'water',NULL,1,87,_binary '\0',0),(236,'iron',NULL,1,87,_binary '\0',1),(237,'sliver',NULL,0,87,_binary '\0',0),(238,'fire',NULL,0,88,_binary '',1),(239,'water',NULL,1,88,_binary '\0',0),(240,'iron',NULL,1,88,_binary '\0',1),(241,'sliver',NULL,0,88,_binary '\0',0),(242,'fire',NULL,0,89,_binary '',1),(243,'water',NULL,1,89,_binary '\0',0),(244,'iron',NULL,1,89,_binary '\0',1),(245,'sliver',NULL,0,89,_binary '\0',0),(246,'fire',NULL,0,90,_binary '',1),(247,'water',NULL,1,90,_binary '\0',0),(248,'iron',NULL,1,90,_binary '\0',1),(249,'sliver',NULL,0,90,_binary '\0',0),(250,'fire',NULL,0,91,_binary '',1),(251,'water',NULL,1,91,_binary '\0',0),(252,'iron',NULL,1,91,_binary '\0',1),(253,'sliver',NULL,0,91,_binary '\0',0),(254,'fire',NULL,0,92,_binary '',1),(255,'water',NULL,1,92,_binary '\0',0),(256,'iron',NULL,1,92,_binary '\0',1),(257,'sliver',NULL,0,92,_binary '\0',0),(258,'fire',NULL,0,93,_binary '',1),(259,'water',NULL,1,93,_binary '\0',0),(260,'iron',NULL,1,93,_binary '\0',1),(261,'sliver',NULL,0,93,_binary '\0',0),(262,'fire',NULL,0,94,_binary '',1),(263,'water',NULL,1,94,_binary '\0',0),(264,'iron',NULL,1,94,_binary '\0',1),(265,'sliver',NULL,0,94,_binary '\0',0),(266,'fire',NULL,0,95,_binary '',1),(267,'water',NULL,1,95,_binary '\0',0),(268,'iron',NULL,1,95,_binary '\0',1),(269,'sliver',NULL,0,95,_binary '\0',0),(270,'fire',NULL,0,96,_binary '',1),(271,'water',NULL,1,96,_binary '\0',0),(272,'iron',NULL,1,96,_binary '\0',1),(273,'sliver',NULL,0,96,_binary '\0',0),(274,'fire',NULL,0,97,_binary '',1),(275,'water',NULL,1,97,_binary '\0',0),(276,'iron',NULL,1,97,_binary '\0',1),(277,'sliver',NULL,0,97,_binary '\0',0),(278,'iron',NULL,1,98,_binary '',1),(279,'water',NULL,1,98,_binary '\0',0),(280,'sliver',NULL,0,98,_binary '\0',0),(281,'fire',NULL,0,98,_binary '\0',1),(282,'iron',NULL,1,99,_binary '\0',1),(283,'bird',NULL,0,99,_binary '',0),(284,'sliver',NULL,0,99,_binary '\0',0),(285,'iron',NULL,1,100,_binary '\0',1),(286,'bird',NULL,0,100,_binary '',0),(287,'sliver',NULL,0,100,_binary '\0',0),(288,'sliver',NULL,0,101,_binary '',0),(289,'bird',NULL,0,101,_binary '\0',0),(290,'iron',NULL,1,101,_binary '',1),(291,'sliver',NULL,0,102,_binary '\0',0),(292,'bird',NULL,0,102,_binary '\0',0),(293,'iron',NULL,1,102,_binary '',1),(294,'iron',NULL,1,103,_binary '\0',1),(295,'bird',NULL,0,103,_binary '\0',0),(296,'sliver',NULL,0,103,_binary '\0',0),(297,'fire',NULL,0,104,_binary '\0',1),(298,'iron',NULL,1,104,_binary '',1),(299,'sliver',NULL,0,104,_binary '\0',0),(300,'water',NULL,1,104,_binary '\0',0),(301,'fire',NULL,0,105,_binary '\0',1),(302,'iron',NULL,1,105,_binary '',1),(303,'sliver',NULL,0,105,_binary '\0',0),(304,'water',NULL,1,105,_binary '\0',0),(305,'water',NULL,1,106,_binary '\0',0),(306,'fire',NULL,0,106,_binary '\0',1),(307,'iron',NULL,1,106,_binary '',1),(308,'sliver',NULL,0,106,_binary '\0',0),(309,'sliver',NULL,0,107,_binary '\0',0),(310,'bird',NULL,0,107,_binary '',0),(311,'iron',NULL,1,107,_binary '',1),(312,'water',NULL,1,108,_binary '\0',0),(313,'fire',NULL,0,108,_binary '',1),(314,'iron',NULL,1,108,_binary '',1),(315,'sliver',NULL,0,108,_binary '',0),(316,'iron',NULL,1,109,_binary '\0',1),(317,'fire',NULL,0,109,_binary '',1),(318,'water',NULL,1,109,_binary '\0',0),(319,'sliver',NULL,0,109,_binary '\0',0),(320,'iron',NULL,1,110,_binary '',1),(321,'bird',NULL,0,110,_binary '\0',0),(322,'sliver',NULL,0,110,_binary '\0',0);
/*!40000 ALTER TABLE `historyquestion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historytest`
--

DROP TABLE IF EXISTS `historytest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `historytest` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_date` varchar(45) DEFAULT NULL,
  `delete_date` varchar(45) DEFAULT NULL,
  `deleted` tinyint(4) NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `id_user` int(11) NOT NULL DEFAULT '0',
  `is_done` tinyint(4) DEFAULT '0',
  `mark` int(11) DEFAULT '0',
  `time_start` int(11) NOT NULL DEFAULT '0',
  `duration` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historytest`
--

LOCK TABLES `historytest` WRITE;
/*!40000 ALTER TABLE `historytest` DISABLE KEYS */;
INSERT INTO `historytest` VALUES (1,NULL,NULL,0,'first',1000,0,0,0,0,NULL),(15,'2021-07-13',NULL,0,'B2',200,1,0,0,54462,NULL),(16,'2021-07-13',NULL,0,'B1',1500,1,0,0,57667,NULL),(17,'2021-07-13',NULL,0,'B2',200,1,0,0,57736,NULL),(18,'2021-07-13',NULL,0,'B1',1500,1,0,0,58044,NULL),(19,'2021-07-13',NULL,0,'B1',1500,1,0,0,58751,NULL),(20,'2021-07-13',NULL,0,'B1',1500,1,0,2,58828,NULL),(21,'2021-07-13',NULL,0,'B1',1500,1,0,1,59840,NULL),(22,'2021-07-13',NULL,0,'B1',1500,1,0,1,60059,NULL),(23,'2021-07-13',NULL,0,'B1',1500,1,0,1,60556,NULL),(24,'2021-07-14',NULL,0,'B2',200,1,0,1,36865,NULL),(25,'2021-07-14',NULL,0,'B1',1500,1,0,1,37014,NULL),(26,'2021-07-14',NULL,0,'B1',1500,1,0,2,37098,NULL),(27,'2021-07-14',NULL,0,'B2',200,1,0,1,37114,NULL),(28,'2021-07-14',NULL,0,'B1',1500,1,0,1,37138,NULL),(29,'2021-07-14',NULL,0,'B1',1500,1,0,1,37154,NULL),(30,'2021-07-14',NULL,0,'B2',200,1,0,1,37193,NULL),(31,'2021-07-14',NULL,0,'B2',20,1,0,1,50011,NULL),(32,'2021-07-14',NULL,0,'B2',20,1,0,1,50248,NULL),(33,'2021-07-14',NULL,0,'B2',20,1,0,1,50338,NULL),(34,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(35,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(36,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(37,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(38,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(39,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(40,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(41,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(42,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(43,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(44,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(45,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(46,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(47,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(48,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(49,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(50,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(51,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(52,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(53,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(54,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(55,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(56,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(57,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(58,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(59,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(60,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(61,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(62,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(63,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(64,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(65,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(66,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(67,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(68,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(69,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(70,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(71,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(72,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(73,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(74,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(75,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(76,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(77,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(78,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(79,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(80,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(81,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(82,'2021-07-14',NULL,0,'B2',10,1,0,1,51801,NULL),(83,'2021-07-14',NULL,0,'B1',150,1,0,1,51974,NULL),(84,'2021-07-14',NULL,0,'B1',150,1,0,1,51974,NULL),(85,'2021-07-14',NULL,0,'B1',150,1,0,1,51974,NULL),(86,'2021-07-14',NULL,0,'B1',150,1,0,1,51974,NULL),(87,'2021-07-14',NULL,0,'B1',150,1,0,1,51974,NULL),(88,'2021-07-14',NULL,0,'B1',150,1,0,1,51974,NULL),(89,'2021-07-14',NULL,0,'B1',150,1,0,1,51974,NULL),(90,'2021-07-14',NULL,0,'B1',150,1,0,1,51974,NULL),(91,'2021-07-14',NULL,0,'B1',150,1,0,1,51974,NULL),(92,'2021-07-14',NULL,0,'B1',150,1,0,1,51974,NULL),(93,'2021-07-14',NULL,0,'B1',150,1,0,1,51974,NULL),(94,'2021-07-14',NULL,0,'B1',150,1,0,1,51974,NULL),(95,'2021-07-14',NULL,0,'B1',150,1,0,1,51974,NULL),(96,'2021-07-14',NULL,0,'B1',150,1,0,1,51974,NULL),(97,'2021-07-14',NULL,0,'B1',150,1,0,1,51974,NULL),(98,'2021-07-14',NULL,0,'B1',150,1,0,1,53681,NULL),(99,'2021-07-14',NULL,0,'B2',10,1,0,1,54843,NULL),(100,'2021-07-14',NULL,0,'B2',10,1,0,1,54843,NULL),(101,'2021-07-14',NULL,0,'B2',10,1,0,2,54918,NULL),(102,'2021-07-14',NULL,0,'B2',10,1,0,1,55081,NULL),(103,'2021-07-14',NULL,0,'B2',10,1,0,0,55170,NULL),(104,'2021-07-14',NULL,0,'B1',150,1,0,1,57420,NULL),(105,'2021-07-14',NULL,0,'B1',150,1,0,1,57420,NULL),(106,'2021-07-14',NULL,0,'B1',150,1,0,1,57814,NULL),(107,'2021-07-14',NULL,0,'B2',10,1,0,2,58012,NULL),(108,'2021-07-14',NULL,0,'B1',150,1,0,3,58342,NULL),(109,'2021-07-19',NULL,0,'B1',150,1,0,1,39096,4),(110,'2021-07-19',NULL,0,'B2',10,1,0,1,39165,10);
/*!40000 ALTER TABLE `historytest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL,
  `text` varchar(45) NOT NULL,
  `img` varchar(45) DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `update_date` date DEFAULT NULL,
  `delete_date` date DEFAULT NULL,
  `dead_point` tinyint(4) NOT NULL DEFAULT '0',
  `deleted` tinyint(4) NOT NULL DEFAULT '0',
  `pick_one` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `type_idx` (`type_id`),
  CONSTRAINT `FKbesk0j7i5b9vsrpy50834xxlw` FOREIGN KEY (`type_id`) REFERENCES `type` (`id`),
  CONSTRAINT `fk_question_type` FOREIGN KEY (`type_id`) REFERENCES `type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,1,'fire',NULL,NULL,NULL,NULL,0,0,1),(2,1,'water',NULL,NULL,NULL,NULL,1,0,0),(3,2,'iron',NULL,NULL,NULL,NULL,1,0,1),(4,2,'sliver',NULL,NULL,NULL,NULL,0,0,0),(5,6,'bird',NULL,NULL,NULL,NULL,0,0,0);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `quiz` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_category` int(11) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `update_date` date DEFAULT NULL,
  `delete_date` date DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjh52str8crvo5l754umvs4t2k` (`id_category`),
  CONSTRAINT `FKjh52str8crvo5l754umvs4t2k` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
INSERT INTO `quiz` VALUES (1,1,'B1',150,NULL,NULL,NULL,0),(2,1,'B2',10,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz_type`
--

DROP TABLE IF EXISTS `quiz_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `quiz_type` (
  `id_quiz` int(11) NOT NULL,
  `id_type` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  KEY `FKnt2on6ns8jfj4cbext5h7qkxv` (`id_quiz`),
  KEY `FK42skl6q5t7jidg36w6u3wblxg` (`id_type`),
  CONSTRAINT `FK42skl6q5t7jidg36w6u3wblxg` FOREIGN KEY (`id_type`) REFERENCES `type` (`id`),
  CONSTRAINT `FKnt2on6ns8jfj4cbext5h7qkxv` FOREIGN KEY (`id_quiz`) REFERENCES `quiz` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz_type`
--

LOCK TABLES `quiz_type` WRITE;
/*!40000 ALTER TABLE `quiz_type` DISABLE KEYS */;
INSERT INTO `quiz_type` VALUES (1,1,2),(1,2,2),(2,2,2),(2,6,1);
/*!40000 ALTER TABLE `quiz_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_category` int(11) DEFAULT NULL,
  `type_name` varchar(45) NOT NULL,
  `create_date` date DEFAULT NULL,
  `update_date` date DEFAULT NULL,
  `delete_date` date DEFAULT NULL,
  `deleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FKfpkphn1gri9h6893j7him5222` (`id_category`),
  CONSTRAINT `FKfpkphn1gri9h6893j7him5222` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_type_category` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,1,'element',NULL,NULL,NULL,0),(2,1,'metal',NULL,NULL,NULL,0),(6,1,'animal',NULL,NULL,NULL,0),(7,2,'animal','2021-07-08',NULL,NULL,0),(8,6,'food','2021-07-08',NULL,NULL,0),(9,6,'food','2021-07-09',NULL,NULL,0),(10,6,'food','2021-07-09',NULL,NULL,0);
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_swquence`
--

DROP TABLE IF EXISTS `type_swquence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `type_swquence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_swquence`
--

LOCK TABLES `type_swquence` WRITE;
/*!40000 ALTER TABLE `type_swquence` DISABLE KEYS */;
INSERT INTO `type_swquence` VALUES (2);
/*!40000 ALTER TABLE `type_swquence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'trunghung','123456','hung','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHd4nhm7Ji3L0DMrHi3dYJ9_x0X_3zM4qkQ&usqp=CAU'),(2,'trunghung1','123456',NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-20 10:29:39
