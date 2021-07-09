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
  PRIMARY KEY (`id`),
  KEY `FKtfqe9le451s2p3d6m231y6el0` (`history_question_id`),
  CONSTRAINT `FKtfqe9le451s2p3d6m231y6el0` FOREIGN KEY (`history_question_id`) REFERENCES `historyquestion` (`id`),
  CONSTRAINT `fk_historyanswer_historyquestion` FOREIGN KEY (`history_question_id`) REFERENCES `historyquestion` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historyanswer`
--

LOCK TABLES `historyanswer` WRITE;
/*!40000 ALTER TABLE `historyanswer` DISABLE KEYS */;
INSERT INTO `historyanswer` VALUES (1,'fire',NULL,1,1),(2,'water',NULL,0,1),(3,'earth',NULL,0,2),(4,'wind',NULL,1,2);
/*!40000 ALTER TABLE `historyanswer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-09 14:40:21
