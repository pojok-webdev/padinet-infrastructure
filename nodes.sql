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
-- Table structure for table `nodes`
--

DROP TABLE IF EXISTS `nodes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nodes` (
  `mysqlid` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(200) DEFAULT NULL,
  `nodetype` varchar(1) DEFAULT NULL COMMENT '1 IP_Transit 2 Core 3 BTS 4 AP 5 Client',
  `location` varchar(200) DEFAULT NULL,
  `description` text,
  `createuser` varchar(50) DEFAULT NULL,
  `createdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`mysqlid`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nodes`
--

LOCK TABLES `nodes` WRITE;
/*!40000 ALTER TABLE `nodes` DISABLE KEYS */;
INSERT INTO `nodes` VALUES (1,'IP_Transit','1','Jakarta','','puji','2018-08-31 09:30:00'),(2,'Core','2','Jakarta','','puji','2018-08-31 09:30:01'),(3,'Surabaya','3','Surabaya','','puji','2018-08-31 09:30:01'),(4,'Jakarta','3','Jakarta','','puji','2018-08-31 09:30:01'),(5,'Malang','3','Malang','','puji','2018-08-31 09:30:01'),(6,'Bali','3','Bali','','puji','2018-08-31 09:30:01'),(7,'Trinity','4','Mayjen Sungkono 83 Surabaya','','puji','2018-08-31 09:30:01'),(8,'Neo','4','Mayjen Sungkono 102','','puji','2018-08-31 09:30:01'),(9,'Architect','4','Garden','','puji','2018-08-31 09:30:01'),(10,'Oracle','4','Label Jaya','','puji','2018-08-31 09:30:01'),(11,'Trinity_New','4','Mayjen Sungkono 83','','puji','2018-08-31 09:30:01'),(12,'Key_Maker','4','Trosobo','','puji','2018-08-31 09:30:01'),(13,'Roland','4','KBIH','','puji','2018-08-31 09:30:01'),(14,'Cypher','4','Color FM','','puji','2018-08-31 09:30:02'),(15,'Twins','4','Warna FM','','puji','2018-08-31 09:30:02'),(16,'Soren','4','Soekarno-Hatta, SBY','','puji','2018-08-31 09:30:02'),(17,'Niobe','4','SPIL Perak Barat','','puji','2018-08-31 09:30:02'),(18,'Dozer','4','UnMuh','','puji','2018-08-31 09:30:02'),(19,'Zee','4','Purwosari','','puji','2018-08-31 09:30:02'),(20,'Seraph','4','Raci FM Mojokerto','','puji','2018-08-31 09:30:02'),(21,'Morpheus','4','Raci','','puji','2018-08-31 09:30:02'),(22,'Semeru','4','S. Parman 21, Mlg','','puji','2018-08-31 09:30:02'),(23,'Graha','4','Malang','','puji','2018-08-31 09:30:02'),(24,'Agrobatu','4','Malang','','puji','2018-08-31 09:30:02'),(25,'Selokerto','4','Desa Selorejo ,Kec .Dau ,Kab.Malang','','puji','2018-08-31 09:30:02'),(26,'Bumiaji','4','Desa Punten, Kota Batu','','puji','2018-08-31 09:30:02'),(27,'BTS_Purwosari','4','Purwosari','','puji','2018-08-31 09:30:02'),(28,'POP_Punten','4','Desa Punten, Kota Batu','','puji','2018-08-31 09:30:03'),(29,'Precet','4','Malang','','puji','2018-08-31 09:30:03'),(30,'Benoa','4','Bali','','puji','2018-08-31 09:30:03'),(31,'Kuta','4','Bali','','puji','2018-08-31 09:30:03'),(32,'Metro','4','Jl. Dharmawangsa 42 ( Gubug Sari ), banjar Kaja Jati , Ds. Kutuh Kec. Kuta Selatan, Kab. Badung Bali','','puji','2018-08-31 09:30:03'),(33,'Graha_MRA','4','Graha MRA Jl. TB Simatupang No.19 Jakarta','','puji','2018-08-31 09:30:03'),(34,'Cikarang','4','Cikarang Square Lt.4 ','','puji','2018-08-31 09:30:03'),(35,'Bidakara','4','Gedung Menara Bidakara Jakarta ','','puji','2018-08-31 09:30:03'),(36,'Sucofindo','4','Graha Sucofindo Lt 10 Jakarta','','puji','2018-08-31 09:30:03'),(37,'SPIL_Enggano','4','SPIL Enggano Jakarta','','puji','2018-08-31 09:30:03'),(38,'MMR_IDC_3D','4','IDC Duren Tiga Lt 3','','puji','2018-08-31 09:30:03'),(39,'Rack_245_IDC_3D','4','IDC Duren Tiga Lt 2','','puji','2018-08-31 09:30:03'),(40,'MMR_IDC_Cyber','4','IDC Duren Tiga Lt 7','','puji','2018-08-31 09:30:03'),(41,'APJII','4','IDC Duren Tiga Lt 1','','puji','2018-08-31 09:30:03'),(42,'Tomat','','Perak','','anonymous','2018-09-03 06:49:07'),(43,'Kentang','3','Manado','test saja','anonymous','2018-09-03 06:55:03'),(44,'pisang','2','Lombok','test','anonymous','2018-09-04 03:52:03'),(45,'pisang','2','Lombok','test','anonymous','2018-09-04 03:52:33');
/*!40000 ALTER TABLE `nodes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-04 14:02:07
