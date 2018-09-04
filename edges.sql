-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: localhost    Database: teknis
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `links`
--

DROP TABLE IF EXISTS `links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `links` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `linktype` varchar(1) DEFAULT NULL COMMENT '0:IP_Transit-Core 1:core-rodis 2 rodis-bts 3 bts-bts 4 bts-ap 5 ap-client',
  `source` varchar(200) DEFAULT NULL,
  `target` varchar(200) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `description` text,
  `createuser` varchar(50) DEFAULT NULL,
  `createdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `links`
--

LOCK TABLES `links` WRITE;
/*!40000 ALTER TABLE `links` DISABLE KEYS */;
INSERT INTO `links` VALUES (1,'0','IP_Transit','Core','IP_Transit-Core','','puji','2018-08-31 07:04:41'),(2,'1','Core','Surabaya','Core-Surabaya','','puji','2018-08-31 07:04:42'),(3,'1','Core','Jakarta','Core-Jakarta','','puji','2018-08-31 07:04:42'),(4,'1','Core','Malang','Core-Malang','','puji','2018-08-31 07:04:42'),(5,'1','Core','Bali','Core-Bali','','puji','2018-08-31 07:04:42'),(6,'2','Surabaya','Trinity','Surabaya-Trinity','','puji','2018-08-31 07:04:42'),(7,'2','Surabaya','Neo','Surabaya-Neo','','puji','2018-08-31 07:04:42'),(8,'2','Surabaya','Architect','Surabaya-Architect','','puji','2018-08-31 07:04:42'),(9,'2','Surabaya','Oracle','Surabaya-Oracle','','puji','2018-08-31 07:04:42'),(10,'2','Surabaya','Trinity_New','Surabaya-Trinity_New','','puji','2018-08-31 07:04:43'),(11,'2','Surabaya','Key_Maker','Surabaya-Key_Maker','','puji','2018-08-31 07:04:43'),(12,'2','Surabaya','Roland','Surabaya-Roland','','puji','2018-08-31 07:04:43'),(13,'2','Surabaya','Cypher','Surabaya-Cypher','','puji','2018-08-31 07:04:43'),(14,'2','Surabaya','Twins','Surabaya-Twins','','puji','2018-08-31 07:04:43'),(15,'2','Surabaya','Soren','Surabaya-Soren','','puji','2018-08-31 07:04:43'),(16,'2','Surabaya','Niobe','Surabaya-Niobe','','puji','2018-08-31 07:04:43'),(17,'2','Surabaya','Dozer','Surabaya-Dozer','','puji','2018-08-31 07:04:43'),(18,'2','Surabaya','Zee','Surabaya-Zee','','puji','2018-08-31 07:04:43'),(19,'2','Surabaya','Seraph','Surabaya-Seraph','','puji','2018-08-31 07:04:43'),(20,'2','Surabaya','Morpheus','Surabaya-Morpheus','','puji','2018-08-31 07:04:43'),(21,'2','Malang','Semeru','Malang-Semeru','','puji','2018-08-31 07:04:43'),(22,'2','Malang','Graha','Malang-Graha','','puji','2018-08-31 07:04:44'),(23,'2','Malang','Agrobatu','Malang-Agrobatu','','puji','2018-08-31 07:04:44'),(24,'2','Malang','Selokerto','Malang-Selokerto','','puji','2018-08-31 07:04:44'),(25,'2','Malang','Bumiaji','Malang-Bumiaji','','puji','2018-08-31 07:04:44'),(26,'2','Malang','BTS_Purwosari','Malang-BTS_Purwosari','','puji','2018-08-31 07:04:44'),(27,'2','Malang','POP_Punten','Malang-POP_Punten','','puji','2018-08-31 07:04:44'),(28,'2','Malang','Precet','Malang-Precet','','puji','2018-08-31 07:04:44'),(29,'2','Bali','Benoa','Bali-Benoa','','puji','2018-08-31 07:04:44'),(30,'2','Bali','Kuta','Bali-Kuta','','puji','2018-08-31 07:04:44'),(31,'2','Bali','Metro','Bali-Metro','','puji','2018-08-31 07:04:44'),(32,'2','Jakarta','Graha_MRA','Jakarta-Graha_MRA','','puji','2018-08-31 07:04:44'),(33,'2','Jakarta','Cikarang','Jakarta-Cikarang','','puji','2018-08-31 07:04:44'),(34,'2','Jakarta','Bidakara','Jakarta-Bidakara','','puji','2018-08-31 07:04:44'),(35,'2','Jakarta','Sucofindo','Jakarta-Sucofindo','','puji','2018-08-31 07:04:45'),(36,'2','Jakarta','MMR_IDC_3D','Jakarta-MMR_IDC_3D','','puji','2018-08-31 07:04:45'),(37,'2','Jakarta','SPIL_Enggano','Jakarta-SPIL_Enggano','','puji','2018-08-31 07:04:45'),(38,'2','Jakarta','Rack_245_IDC_3D','Jakarta-Rack_245_IDC_3D','','puji','2018-08-31 07:04:45'),(39,'2','Jakarta','MMR_IDC_Cyber','Jakarta-MMR_IDC_Cyber','','puji','2018-08-31 07:04:45'),(45,'1','pisang','Tomat','Tomat Ke Pisang','Pisang Tomat','undefined','2018-09-04 06:21:34'),(46,'1','pisang','Tomat','Pisang ke tomat','Pisang wal tomat','undefined','2018-09-04 06:25:32'),(47,'1','Kentang','Tomat','kentang ke tomat','Kentang dan tomat','undefined','2018-09-04 06:26:43');
/*!40000 ALTER TABLE `links` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-04 14:02:23
