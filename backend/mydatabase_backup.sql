-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: asms_dev_db
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `announcements`
--

DROP TABLE IF EXISTS `announcements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `announcements` (
  `source` varchar(100) NOT NULL,
  `info` varchar(1027) NOT NULL,
  `id` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcements`
--

LOCK TABLES `announcements` WRITE;
/*!40000 ALTER TABLE `announcements` DISABLE KEYS */;
INSERT INTO `announcements` VALUES ('Vice_Chancelor','All 100 level student should kindly assemble at the admission block by 2pm on Monday 24th March for you_examination number. please endevour to be there on time','51bc520f-4670-4ee9-bae6-02ec1dad11b3','2024-02-15 19:51:08','2024-02-15 19:57:07');
/*!40000 ALTER TABLE `announcements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bills`
--

DROP TABLE IF EXISTS `bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bills` (
  `name` varchar(50) NOT NULL,
  `amount` int NOT NULL,
  `id` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bills`
--

LOCK TABLES `bills` WRITE;
/*!40000 ALTER TABLE `bills` DISABLE KEYS */;
INSERT INTO `bills` VALUES ('Sanitation',5000,'23cd607c-214d-4b16-b100-d0e562f3b04b','2024-02-20 11:38:34','2024-02-20 11:38:34'),('Text Books',25000,'42cc0844-8b6f-41e1-8f7e-690af732095f','2024-02-20 12:04:09','2024-02-20 12:04:09'),('Work Space',11500,'66f57ddc-4587-4d09-894e-6a7489f4da94','2024-02-20 11:33:25','2024-02-20 11:33:25'),('Hostel',30000,'b5a4bc31-6f71-4f6c-a58b-ee063ea12c74','2024-02-20 11:35:43','2024-02-20 11:35:43'),('Text Books',27000,'f5159bbc-7557-4e2f-b251-279c5ce01e6e','2024-02-20 12:08:53','2024-02-20 12:08:53'),('Lessons Fee',40000,'fc5b4f2f-813b-4726-a3b2-898af69a7584','2024-02-20 11:39:33','2024-02-20 11:39:33');
/*!40000 ALTER TABLE `bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `name` varchar(128) NOT NULL,
  `code` varchar(20) DEFAULT NULL,
  `weight` int NOT NULL,
  `id` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES ('General Physics Practical 1','PHY107',1,'04f4c5d9-8e65-4d89-b921-2305046368c5','2024-02-15 18:40:45','2024-02-15 18:40:45'),('Introduction to Cyber Hygiene','CYB101',2,'40caa9a0-c159-4bdb-bd75-f925cedf460b','2024-02-15 18:26:09','2024-02-15 18:26:09'),('Descriptive Statistics','STA101',3,'4e176754-8d05-4793-b7ae-65826951ec73','2024-02-15 18:27:21','2024-02-15 18:27:21'),('Design Principle','DPN',1,'66c9ca98-beda-4234-b6df-33e2a7d1112b','2024-02-15 18:15:46','2024-02-15 18:15:46'),('Chemistry','CHM',2,'74f2406c-c23a-4fa3-8880-312e6a12b9c8','2024-02-15 18:15:53','2024-02-15 18:15:53'),('Introduction to Computer Science','CSC101',3,'755e0125-a340-4168-b9c6-0369a130439b','2024-02-15 18:16:04','2024-02-15 18:23:40'),('Microbiology','ARC101',3,'85d8d808-e6ba-4b35-bc88-0690b87d19af','2024-02-15 18:44:04','2024-02-15 18:44:04'),('Industrial Chemistry','ICH101',2,'8b27afa9-fa2b-4142-b255-f04334ee4b21','2024-02-15 18:44:38','2024-02-15 18:44:38'),('Photo Journalism','PHT101',2,'9e865bf3-6ccc-49c9-a180-2a3a10ca3f70','2024-02-15 18:45:40','2024-02-15 18:45:40'),('Communication in English','GST111',2,'a5bb7ab4-b78f-40c9-8fec-c85a8197f55d','2024-02-15 18:42:03','2024-02-15 18:42:03'),('General Mathematics 1','Mat83H',2,'b1e5e434-a77d-4f99-a3c9-96a58c502e4a','2024-02-15 18:16:13','2024-02-15 18:37:58'),('General Physics 1','PHY101',2,'c98eea29-724f-4e1c-9490-7df8c2337e7d','2024-02-15 18:15:58','2024-02-15 18:38:05'),('Architecture','MCB101',3,'e5d09dbf-1108-4d5c-8366-6f53d4535125','2024-02-15 18:42:56','2024-02-15 18:45:09'),('Fine Art','FNA10',3,'f9ad0834-1d86-4cb6-a26e-4ea470a36af2','2024-02-15 18:19:52','2024-02-15 18:19:52');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculties`
--

DROP TABLE IF EXISTS `faculties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculties` (
  `name` varchar(128) NOT NULL,
  `id` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculties`
--

LOCK TABLES `faculties` WRITE;
/*!40000 ALTER TABLE `faculties` DISABLE KEYS */;
INSERT INTO `faculties` VALUES ('Social Sciences','20f7e2f9-95e2-423b-80fa-56322782d251','2024-02-08 11:53:03','2024-02-08 11:53:03'),('Pharmacy','38c791c2-6644-4c78-8c23-074c41010c8d','2024-02-08 11:52:21','2024-02-08 11:52:21'),('Arts','50276eff-090d-48da-b11c-f63dfd020b24','2024-02-08 11:47:49','2024-02-08 11:47:49'),('Law','577c5cec-addf-4a2b-b036-3079496a6a5b','2024-02-08 11:51:45','2024-02-08 11:51:45'),('Management Sciences','726d7783-e7a1-44ec-b3e7-d5015a0799e9','2024-02-08 11:52:07','2024-02-08 11:52:07'),('Sciences','8f27944d-edfe-431d-9488-b71cbb4bba3a','2024-02-08 11:52:35','2024-02-08 11:52:35'),('Education','8fe54abd-cf7c-40c9-9429-4e1e6d274a41','2024-02-08 11:50:36','2024-02-08 11:50:36'),('Environmental Science','b5a3b78f-bb98-46a7-8c72-52b356bea8ae','2024-02-08 11:51:13','2024-02-08 11:51:13'),('Engineering','c4be970d-0429-430c-9c2d-4819ab9d308c','2024-02-08 11:50:49','2024-02-08 11:50:49'),('Dental Sciences','cdc4ca34-81d9-4f0b-8998-8fadeb619260','2024-02-08 11:50:21','2024-02-08 11:50:21'),('Basic Medical Sciences','d55f9d7f-7d06-4e9b-8e31-441f8fae2c74','2024-02-08 11:49:19','2024-02-08 11:49:19'),('Clinical Sciences','df518132-c1ca-45df-9e86-6ae606c694ba','2024-02-08 11:50:02','2024-02-08 11:50:02');
/*!40000 ALTER TABLE `faculties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fees`
--

DROP TABLE IF EXISTS `fees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fees` (
  `student_id` varchar(60) NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `level_id` varchar(60) NOT NULL,
  `semister_id` varchar(60) NOT NULL,
  `amount_paid` int NOT NULL,
  `id` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  KEY `level_id` (`level_id`),
  KEY `semister_id` (`semister_id`),
  CONSTRAINT `fees_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  CONSTRAINT `fees_ibfk_2` FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`),
  CONSTRAINT `fees_ibfk_3` FOREIGN KEY (`semister_id`) REFERENCES `semisters` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fees`
--

LOCK TABLES `fees` WRITE;
/*!40000 ALTER TABLE `fees` DISABLE KEYS */;
/*!40000 ALTER TABLE `fees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fees_bills`
--

DROP TABLE IF EXISTS `fees_bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fees_bills` (
  `fee_id` varchar(60) NOT NULL,
  `bill_id` varchar(60) NOT NULL,
  PRIMARY KEY (`fee_id`,`bill_id`),
  KEY `bill_id` (`bill_id`),
  CONSTRAINT `fees_bills_ibfk_1` FOREIGN KEY (`fee_id`) REFERENCES `fees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fees_bills_ibfk_2` FOREIGN KEY (`bill_id`) REFERENCES `bills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fees_bills`
--

LOCK TABLES `fees_bills` WRITE;
/*!40000 ALTER TABLE `fees_bills` DISABLE KEYS */;
/*!40000 ALTER TABLE `fees_bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `level_bill`
--

DROP TABLE IF EXISTS `level_bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `level_bill` (
  `level_id` varchar(60) NOT NULL,
  `bill_id` varchar(60) NOT NULL,
  PRIMARY KEY (`level_id`,`bill_id`),
  KEY `bill_id` (`bill_id`),
  CONSTRAINT `level_bill_ibfk_1` FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `level_bill_ibfk_2` FOREIGN KEY (`bill_id`) REFERENCES `bills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `level_bill`
--

LOCK TABLES `level_bill` WRITE;
/*!40000 ALTER TABLE `level_bill` DISABLE KEYS */;
INSERT INTO `level_bill` VALUES ('b7c47cb8-966f-4b2b-8cc9-6f760d20a7ff','23cd607c-214d-4b16-b100-d0e562f3b04b'),('b7c47cb8-966f-4b2b-8cc9-6f760d20a7ff','b5a4bc31-6f71-4f6c-a58b-ee063ea12c74'),('b7c47cb8-966f-4b2b-8cc9-6f760d20a7ff','fc5b4f2f-813b-4726-a3b2-898af69a7584');
/*!40000 ALTER TABLE `level_bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `levels`
--

DROP TABLE IF EXISTS `levels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `levels` (
  `number` int NOT NULL,
  `id` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `levels`
--

LOCK TABLES `levels` WRITE;
/*!40000 ALTER TABLE `levels` DISABLE KEYS */;
INSERT INTO `levels` VALUES (400,'2edb76ee-a467-43ae-ab28-a8264d8637b2','2024-02-15 15:15:13','2024-02-15 15:15:13'),(300,'4795b820-140d-4d0a-9821-9bbfc01c5ef0','2024-02-15 15:15:10','2024-02-15 15:15:10'),(200,'744eef4f-b890-4b4e-8263-12f454449500','2024-02-15 15:15:06','2024-02-15 15:15:06'),(100,'b7c47cb8-966f-4b2b-8cc9-6f760d20a7ff','2024-02-15 15:15:02','2024-02-15 15:15:02');
/*!40000 ALTER TABLE `levels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `major_bill`
--

DROP TABLE IF EXISTS `major_bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `major_bill` (
  `major_id` varchar(60) NOT NULL,
  `bill_id` varchar(60) NOT NULL,
  PRIMARY KEY (`major_id`,`bill_id`),
  KEY `bill_id` (`bill_id`),
  CONSTRAINT `major_bill_ibfk_1` FOREIGN KEY (`major_id`) REFERENCES `majors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `major_bill_ibfk_2` FOREIGN KEY (`bill_id`) REFERENCES `bills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `major_bill`
--

LOCK TABLES `major_bill` WRITE;
/*!40000 ALTER TABLE `major_bill` DISABLE KEYS */;
INSERT INTO `major_bill` VALUES ('ebf746e3-077b-4cb3-a3e9-21dfb198fb6f','42cc0844-8b6f-41e1-8f7e-690af732095f'),('ebf746e3-077b-4cb3-a3e9-21dfb198fb6f','66f57ddc-4587-4d09-894e-6a7489f4da94'),('ef0ea08b-0122-4f82-91f5-cf4f7314e417','66f57ddc-4587-4d09-894e-6a7489f4da94'),('ef0ea08b-0122-4f82-91f5-cf4f7314e417','f5159bbc-7557-4e2f-b251-279c5ce01e6e');
/*!40000 ALTER TABLE `major_bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `major_courses`
--

DROP TABLE IF EXISTS `major_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `major_courses` (
  `major_id` varchar(60) NOT NULL,
  `courses_id` varchar(60) NOT NULL,
  PRIMARY KEY (`major_id`,`courses_id`),
  KEY `courses_id` (`courses_id`),
  CONSTRAINT `major_courses_ibfk_1` FOREIGN KEY (`major_id`) REFERENCES `majors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `major_courses_ibfk_2` FOREIGN KEY (`courses_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `major_courses`
--

LOCK TABLES `major_courses` WRITE;
/*!40000 ALTER TABLE `major_courses` DISABLE KEYS */;
INSERT INTO `major_courses` VALUES ('ebf746e3-077b-4cb3-a3e9-21dfb198fb6f','04f4c5d9-8e65-4d89-b921-2305046368c5'),('ef0ea08b-0122-4f82-91f5-cf4f7314e417','04f4c5d9-8e65-4d89-b921-2305046368c5'),('ebf746e3-077b-4cb3-a3e9-21dfb198fb6f','40caa9a0-c159-4bdb-bd75-f925cedf460b'),('ebf746e3-077b-4cb3-a3e9-21dfb198fb6f','4e176754-8d05-4793-b7ae-65826951ec73'),('ef0ea08b-0122-4f82-91f5-cf4f7314e417','74f2406c-c23a-4fa3-8880-312e6a12b9c8'),('ebf746e3-077b-4cb3-a3e9-21dfb198fb6f','755e0125-a340-4168-b9c6-0369a130439b'),('ebf746e3-077b-4cb3-a3e9-21dfb198fb6f','a5bb7ab4-b78f-40c9-8fec-c85a8197f55d'),('ef0ea08b-0122-4f82-91f5-cf4f7314e417','a5bb7ab4-b78f-40c9-8fec-c85a8197f55d'),('ebf746e3-077b-4cb3-a3e9-21dfb198fb6f','b1e5e434-a77d-4f99-a3c9-96a58c502e4a'),('ef0ea08b-0122-4f82-91f5-cf4f7314e417','b1e5e434-a77d-4f99-a3c9-96a58c502e4a'),('ebf746e3-077b-4cb3-a3e9-21dfb198fb6f','c98eea29-724f-4e1c-9490-7df8c2337e7d'),('ef0ea08b-0122-4f82-91f5-cf4f7314e417','c98eea29-724f-4e1c-9490-7df8c2337e7d');
/*!40000 ALTER TABLE `major_courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `majors`
--

DROP TABLE IF EXISTS `majors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `majors` (
  `name` varchar(128) NOT NULL,
  `faculty_id` varchar(60) NOT NULL,
  `id` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `faculty_id` (`faculty_id`),
  CONSTRAINT `majors_ibfk_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `majors`
--

LOCK TABLES `majors` WRITE;
/*!40000 ALTER TABLE `majors` DISABLE KEYS */;
INSERT INTO `majors` VALUES ('Biomedical Engineering','c4be970d-0429-430c-9c2d-4819ab9d308c','033aa13c-d100-427f-aae2-cb2c31f667b4','2024-02-08 12:20:42','2024-02-08 12:20:42'),('Mass Communication','20f7e2f9-95e2-423b-80fa-56322782d251','0a9e2366-e9a6-41f2-8ad9-6d7f30ff27b0','2024-02-08 12:37:34','2024-02-08 12:37:34'),('Botany','8f27944d-edfe-431d-9488-b71cbb4bba3a','0b97d491-efb5-4608-a6fb-fa9b0a979b57','2024-02-08 12:33:45','2024-02-08 12:33:45'),('Anatomy','d55f9d7f-7d06-4e9b-8e31-441f8fae2c74','0d551b3a-bd58-40cd-8f4d-c0f4684145db','2024-02-08 12:07:29','2024-02-08 12:07:29'),('Geography','20f7e2f9-95e2-423b-80fa-56322782d251','11572f28-8200-4908-8f9d-b389c72bd77f','2024-02-08 12:37:19','2024-02-08 12:37:19'),('Child Dental Health','cdc4ca34-81d9-4f0b-8998-8fadeb619260','124f0cbe-396c-4401-a21a-5c22d9d628d3','2024-02-08 12:15:08','2024-02-08 12:15:08'),('Chemistry','8f27944d-edfe-431d-9488-b71cbb4bba3a','14b3d65a-203c-43b4-bb72-18166912c2ac','2024-02-08 12:34:29','2024-02-08 12:34:29'),('Banking & Finance','726d7783-e7a1-44ec-b3e7-d5015a0799e9','17090a40-7b0f-4183-8333-42d39a5aa26d','2024-02-08 12:28:52','2024-02-08 12:28:52'),('Creative Arts','50276eff-090d-48da-b11c-f63dfd020b24','1aad51b0-301b-4f8d-bd2f-fe9bd2d34625','2024-02-08 12:02:26','2024-02-08 12:02:26'),('Linguistics African Asian Studies','50276eff-090d-48da-b11c-f63dfd020b24','20d3b6ca-990b-4361-a18f-26f4fd172605','2024-02-08 12:04:43','2024-02-08 12:04:43'),('Estate','b5a3b78f-bb98-46a7-8c72-52b356bea8ae','2745bdb7-b71e-49f8-8fd3-23e428e7c185','2024-02-08 12:25:48','2024-02-08 12:25:48'),('Medicine','df518132-c1ca-45df-9e86-6ae606c694ba','2772c9d2-ffe3-4a08-bc4d-ae6f60aa39dd','2024-02-08 12:12:23','2024-02-08 12:12:23'),('Medical Microbiology & Parasitology','d55f9d7f-7d06-4e9b-8e31-441f8fae2c74','2bf2b92e-f593-431e-bf4a-226d86215d6f','2024-02-08 12:08:57','2024-02-08 12:08:57'),('Mechanical Engineering','c4be970d-0429-430c-9c2d-4819ab9d308c','2fb959cc-f169-4a73-ace2-a900ecf7beda','2024-02-08 12:22:35','2024-02-08 12:22:35'),('Pharmaceutics Chemistry','38c791c2-6644-4c78-8c23-074c41010c8d','34b05d45-de66-4ab8-b1ad-60e1176372b9','2024-02-08 12:32:06','2024-02-08 12:32:06'),('Physiotherapy','df518132-c1ca-45df-9e86-6ae606c694ba','36340f27-fed6-4699-ae76-98f888b1a749','2024-02-08 12:13:50','2024-02-08 12:13:50'),('Metallurgical & Materials','c4be970d-0429-430c-9c2d-4819ab9d308c','3726bad5-3932-47cf-8aab-91143fa1f2b7','2024-02-08 12:22:55','2024-02-08 12:22:55'),('Haematology & blood transfusion','df518132-c1ca-45df-9e86-6ae606c694ba','40edc218-56e1-4fc2-9691-31f0f396602d','2024-02-08 12:12:07','2024-02-08 12:12:07'),('English','50276eff-090d-48da-b11c-f63dfd020b24','4203f3bc-d38b-4545-af1c-141b324453ae','2024-02-08 12:03:15','2024-02-08 12:03:15'),('Building','b5a3b78f-bb98-46a7-8c72-52b356bea8ae','43165e94-f837-4d26-aa42-df9925142cd0','2024-02-08 12:25:41','2024-02-08 12:25:41'),('Paediatrics','df518132-c1ca-45df-9e86-6ae606c694ba','43d50453-8663-4a43-9980-c1afbd516181','2024-02-08 12:13:23','2024-02-08 12:13:23'),('Business Administration','726d7783-e7a1-44ec-b3e7-d5015a0799e9','4563271f-5bab-4230-a20d-826690af676a','2024-02-08 12:29:17','2024-02-08 12:29:17'),('Political Science','20f7e2f9-95e2-423b-80fa-56322782d251','4679ea52-e711-4923-a3e5-07b6fbd157bd','2024-02-08 12:38:02','2024-02-08 12:38:02'),('Education Administration','8fe54abd-cf7c-40c9-9429-4e1e6d274a41','49041e9b-1609-4e30-ab41-f775aecb60e8','2024-02-08 12:18:44','2024-02-08 12:18:44'),('Sociology','20f7e2f9-95e2-423b-80fa-56322782d251','49258060-f1c8-4fb3-b47f-ca0abf6afea2','2024-02-08 12:38:11','2024-02-08 12:38:11'),('Educational Foundations','8fe54abd-cf7c-40c9-9429-4e1e6d274a41','49eee4dc-bbb8-4182-94ed-30641540527a','2024-02-08 12:19:16','2024-02-08 12:19:16'),('Clinical Pharmacy & Biopharmacy','38c791c2-6644-4c78-8c23-074c41010c8d','49f89fa0-0466-409d-91c1-2c61c630e210','2024-02-08 12:32:35','2024-02-08 12:32:35'),('Biochemistry','8f27944d-edfe-431d-9488-b71cbb4bba3a','4c9ddea4-a36d-4a28-ae67-35a2129781a9','2024-02-08 12:33:35','2024-02-08 12:33:35'),('Civl & Environmental','c4be970d-0429-430c-9c2d-4819ab9d308c','4cf70d1d-2af4-4efe-b3a0-60c21f99cbfc','2024-02-08 12:21:39','2024-02-08 12:21:39'),('Mathematics','8f27944d-edfe-431d-9488-b71cbb4bba3a','527f8d33-460d-4975-a9d9-e785d8a153e8','2024-02-08 12:35:30','2024-02-08 12:35:30'),('Actuarial Science & Insurance','726d7783-e7a1-44ec-b3e7-d5015a0799e9','597ff6f2-6773-4778-95e8-d6fb8e0a18d3','2024-02-08 12:28:21','2024-02-08 12:28:21'),('Cell Biology & Genetics','8f27944d-edfe-431d-9488-b71cbb4bba3a','5aef3a05-f624-4232-8234-5a1d75ba6a50','2024-02-08 12:34:17','2024-02-08 12:34:17'),('Community Health & Primary Care','df518132-c1ca-45df-9e86-6ae606c694ba','5e072de0-079e-43a8-8b3f-876a95a17cad','2024-02-08 12:11:40','2024-02-08 12:11:40'),('Arts & Social Science Education','8fe54abd-cf7c-40c9-9429-4e1e6d274a41','5f19f690-e4f9-46f4-8d98-94f520cc4821','2024-02-08 12:18:01','2024-02-08 12:18:01'),('Physics','8f27944d-edfe-431d-9488-b71cbb4bba3a','5f647968-9b93-4ae7-9129-1e3536ccbd0f','2024-02-08 12:36:05','2024-02-08 12:36:05'),('Industrial Relations & Personnal Management','726d7783-e7a1-44ec-b3e7-d5015a0799e9','61ab775e-44ed-4467-9790-b6d0c5a578dd','2024-02-08 12:30:05','2024-02-08 12:30:05'),('Quantity Surveying','b5a3b78f-bb98-46a7-8c72-52b356bea8ae','63213cde-42f2-4f3a-b26f-f10fb2b088a5','2024-02-08 12:26:07','2024-02-08 12:26:07'),('History & Strategic Studies','50276eff-090d-48da-b11c-f63dfd020b24','678473b8-4faa-4d9f-956d-5a50f99b27cd','2024-02-08 12:04:14','2024-02-08 12:04:14'),('Microbiology','8f27944d-edfe-431d-9488-b71cbb4bba3a','6cf4c415-d384-48c0-9ce8-1556da9dca68','2024-02-08 12:35:56','2024-02-08 12:35:56'),('Biochemistry','d55f9d7f-7d06-4e9b-8e31-441f8fae2c74','6f441a6d-fd94-4223-ab4e-e9b209968630','2024-02-08 12:08:28','2024-02-08 12:08:28'),('Anaesthesia','df518132-c1ca-45df-9e86-6ae606c694ba','78b063e1-fea4-40f6-8527-d030e190a6a4','2024-02-08 12:10:43','2024-02-08 12:10:43'),('Tourism','20f7e2f9-95e2-423b-80fa-56322782d251','7b411064-c6c4-4f0a-97bc-60c3b19378e8','2024-02-08 12:38:17','2024-02-08 12:38:17'),('European Languages & Integration Studies','50276eff-090d-48da-b11c-f63dfd020b24','7c497818-bde1-482a-aa43-f22df57f3d3b','2024-02-08 12:03:47','2024-02-08 12:03:47'),('Psychiatry','df518132-c1ca-45df-9e86-6ae606c694ba','82633be6-044a-4a79-b3a1-c3f72dbebbd9','2024-02-08 12:13:36','2024-02-08 12:13:36'),('Pharmaceutics & Pharmaceutical Technology','38c791c2-6644-4c78-8c23-074c41010c8d','8757b471-d90e-4300-808b-94f67a9456ee','2024-02-08 12:31:52','2024-02-08 12:31:52'),('Accounting','726d7783-e7a1-44ec-b3e7-d5015a0799e9','8b3ad20b-67d3-4d3a-a600-0f113fd9df7c','2024-02-08 12:27:51','2024-02-08 12:27:51'),('Pharmacognosy','38c791c2-6644-4c78-8c23-074c41010c8d','8c97e5f4-b1ce-47cb-be67-85a30fae51dd','2024-02-08 12:31:17','2024-02-08 12:31:17'),('Surgery','df518132-c1ca-45df-9e86-6ae606c694ba','8f8717e6-a932-44e7-82a5-94178e752479','2024-02-08 12:14:16','2024-02-08 12:14:16'),('Restorative Dentistry','cdc4ca34-81d9-4f0b-8998-8fadeb619260','9c22fc6a-aa00-4fff-8efe-2c69b43f688d','2024-02-08 12:16:43','2024-02-08 12:16:43'),('Preventive Dentistry','cdc4ca34-81d9-4f0b-8998-8fadeb619260','a2d477fd-8890-4816-b684-1328989fdfd5','2024-02-08 12:16:23','2024-02-08 12:16:23'),('Ophthalmology','df518132-c1ca-45df-9e86-6ae606c694ba','a5b23da8-34b9-4593-afca-bb41770d7b85','2024-02-08 12:13:10','2024-02-08 12:13:10'),('Suveying & Geo-Informatics','c4be970d-0429-430c-9c2d-4819ab9d308c','a6977b1e-ff7c-40ec-b7e0-9d08c40fe37d','2024-02-08 12:23:27','2024-02-08 12:23:27'),('Oral And Maxillofacial Surgery','cdc4ca34-81d9-4f0b-8998-8fadeb619260','a9f7aa3f-5afb-4554-89bf-04497ba3bd4e','2024-02-08 12:16:06','2024-02-08 12:16:06'),('Clinical pathology','df518132-c1ca-45df-9e86-6ae606c694ba','ac93e0c7-9159-4cda-ad6d-940fda10d4ac','2024-02-08 12:11:03','2024-02-08 12:11:03'),('Medical Laboratory Science','d55f9d7f-7d06-4e9b-8e31-441f8fae2c74','ad7574c3-fdf0-4e5a-9dbc-675a559a2908','2024-02-08 12:09:15','2024-02-08 12:09:15'),('Zoology','8f27944d-edfe-431d-9488-b71cbb4bba3a','af4e5ab1-d1a9-4482-82f5-2c5c94faef27','2024-02-08 12:36:16','2024-02-08 12:36:16'),('Systems Engineering','c4be970d-0429-430c-9c2d-4819ab9d308c','af948dc3-050d-49e6-a63d-de220c797f8f','2024-02-08 12:24:12','2024-02-08 12:24:12'),('Obstetrics & Gynaecology','df518132-c1ca-45df-9e86-6ae606c694ba','b1a31897-d539-4601-b862-b6e56582089a','2024-02-08 12:12:55','2024-02-08 12:12:55'),('Nursing','df518132-c1ca-45df-9e86-6ae606c694ba','b30694af-fa58-4b56-a798-80d979178ba1','2024-02-08 12:12:35','2024-02-08 12:12:35'),('Human Kinetics & Health Education','8fe54abd-cf7c-40c9-9429-4e1e6d274a41','bddf9a07-847f-4381-9cb0-1c2327a46c13','2024-02-08 12:18:27','2024-02-08 12:18:27'),('Oral Pathology/Biology','cdc4ca34-81d9-4f0b-8998-8fadeb619260','bef539dd-7fce-4881-bc6e-f8095728d1c7','2024-02-08 12:15:31','2024-02-08 12:15:31'),('Architecture','b5a3b78f-bb98-46a7-8c72-52b356bea8ae','c1302741-6a9c-4a60-873a-211645e07468','2024-02-08 12:25:21','2024-02-08 12:25:21'),('Science Tech. Education','8fe54abd-cf7c-40c9-9429-4e1e6d274a41','c900084e-740e-4e95-b557-ce64f035c579','2024-02-08 12:19:41','2024-02-08 12:19:41'),('Geosciences','8f27944d-edfe-431d-9488-b71cbb4bba3a','c9bab625-5898-4b4f-8143-e5086e9c5db0','2024-02-08 12:35:19','2024-02-08 12:35:19'),('Marine Science','8f27944d-edfe-431d-9488-b71cbb4bba3a','d1804ab4-3eac-4c73-8980-b362c40e4ba9','2024-02-08 12:35:45','2024-02-08 12:35:45'),('Philosophy','50276eff-090d-48da-b11c-f63dfd020b24','d1ab3041-9c75-4763-ab3a-4c85d9073414','2024-02-08 12:04:57','2024-02-08 12:04:57'),('Chemical Engineering','c4be970d-0429-430c-9c2d-4819ab9d308c','d331b75b-3fd5-4c81-854b-7d50fa42f27f','2024-02-08 12:21:04','2024-02-08 12:21:04'),('Economics','20f7e2f9-95e2-423b-80fa-56322782d251','d3910faa-89d3-4f84-8306-43cd429cd910','2024-02-08 12:37:08','2024-02-08 12:37:08'),('Urban & Regional Planning','b5a3b78f-bb98-46a7-8c72-52b356bea8ae','da3f3640-ab63-4328-9ac3-bcc40f7426ab','2024-02-08 12:26:51','2024-02-08 12:26:51'),('Electrical & Electronics','c4be970d-0429-430c-9c2d-4819ab9d308c','df916bf6-0177-4c91-86ac-135a5716cf14','2024-02-08 12:21:59','2024-02-08 12:21:59'),('Adult Education','8fe54abd-cf7c-40c9-9429-4e1e6d274a41','e085b36b-bad1-4ae0-8874-df8de231a7af','2024-02-08 12:17:31','2024-02-08 12:17:31'),('Anatomic & Molecular Pathology','d55f9d7f-7d06-4e9b-8e31-441f8fae2c74','e13261c7-23cd-4bab-ade1-a0bfd2e0c3f8','2024-02-08 12:07:59','2024-02-08 12:07:59'),('Physiology','d55f9d7f-7d06-4e9b-8e31-441f8fae2c74','e26e757d-a843-468f-ba4e-2824b58a3b3c','2024-02-08 12:09:39','2024-02-08 12:09:39'),('Radiology','df518132-c1ca-45df-9e86-6ae606c694ba','e46448a8-0be5-42ee-b06e-32d2b76c6662','2024-02-08 12:14:03','2024-02-08 12:14:03'),('Psychology','20f7e2f9-95e2-423b-80fa-56322782d251','eb126337-7c39-46ed-804e-cec75c1610c8','2024-02-08 12:37:49','2024-02-08 12:37:49'),('Computer Science','8f27944d-edfe-431d-9488-b71cbb4bba3a','ebf746e3-077b-4cb3-a3e9-21dfb198fb6f','2024-02-08 12:35:01','2024-02-08 12:35:01'),('Computer Engineering','c4be970d-0429-430c-9c2d-4819ab9d308c','ef0ea08b-0122-4f82-91f5-cf4f7314e417','2024-02-08 12:24:29','2024-02-08 12:24:29');
/*!40000 ALTER TABLE `majors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `other_fees`
--

DROP TABLE IF EXISTS `other_fees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `other_fees` (
  `fees_id` varchar(60) NOT NULL,
  `bill_id` varchar(60) NOT NULL,
  PRIMARY KEY (`fees_id`,`bill_id`),
  KEY `bill_id` (`bill_id`),
  CONSTRAINT `other_fees_ibfk_1` FOREIGN KEY (`fees_id`) REFERENCES `fees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `other_fees_ibfk_2` FOREIGN KEY (`bill_id`) REFERENCES `otherbills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `other_fees`
--

LOCK TABLES `other_fees` WRITE;
/*!40000 ALTER TABLE `other_fees` DISABLE KEYS */;
/*!40000 ALTER TABLE `other_fees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `otherbills`
--

DROP TABLE IF EXISTS `otherbills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `otherbills` (
  `name` varchar(50) NOT NULL,
  `amount` int NOT NULL,
  `id` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `otherbills`
--

LOCK TABLES `otherbills` WRITE;
/*!40000 ALTER TABLE `otherbills` DISABLE KEYS */;
INSERT INTO `otherbills` VALUES ('Distroyed Laptop',10000,'40da47cf-192c-4db6-8b42-35b3503b3984','2024-02-20 20:36:20','2024-02-20 20:36:20'),('Distroyed Chairs',4000,'f8dd7222-ccd2-4182-bd0f-2015cf547728','2024-02-20 20:37:03','2024-02-20 20:37:03');
/*!40000 ALTER TABLE `otherbills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_pictures`
--

DROP TABLE IF EXISTS `profile_pictures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile_pictures` (
  `student_id` varchar(60) NOT NULL,
  `img` varchar(1025) NOT NULL,
  `name` varchar(50) NOT NULL,
  `mimetype` varchar(30) NOT NULL,
  `id` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `profile_pictures_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_pictures`
--

LOCK TABLES `profile_pictures` WRITE;
/*!40000 ALTER TABLE `profile_pictures` DISABLE KEYS */;
INSERT INTO `profile_pictures` VALUES ('d3a1d128-77f0-47c4-9794-39aafa346f39','/home/edward/ASMS/backend/website/static/uploads/default_profile_3.png','default_profile_3.png','image/png','1f1cd5dc-e004-46cf-ab86-5f04cd83930e','2024-02-16 13:24:07','2024-02-20 08:34:31');
/*!40000 ALTER TABLE `profile_pictures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `results`
--

DROP TABLE IF EXISTS `results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `results` (
  `level_id` varchar(60) NOT NULL,
  `semister_id` varchar(60) NOT NULL,
  `course_id` varchar(60) NOT NULL,
  `score` int NOT NULL,
  `id` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `level_id` (`level_id`),
  KEY `semister_id` (`semister_id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `results_ibfk_1` FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`),
  CONSTRAINT `results_ibfk_2` FOREIGN KEY (`semister_id`) REFERENCES `semisters` (`id`),
  CONSTRAINT `results_ibfk_3` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `results`
--

LOCK TABLES `results` WRITE;
/*!40000 ALTER TABLE `results` DISABLE KEYS */;
/*!40000 ALTER TABLE `results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `semisters`
--

DROP TABLE IF EXISTS `semisters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `semisters` (
  `number` int NOT NULL,
  `id` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semisters`
--

LOCK TABLES `semisters` WRITE;
/*!40000 ALTER TABLE `semisters` DISABLE KEYS */;
INSERT INTO `semisters` VALUES (2,'0cb67edc-078a-42aa-a40c-56a8e55cc6b8','2024-02-10 20:27:09','2024-02-10 20:27:09'),(1,'72fbc53c-2bf8-412b-8507-ad120e6c38a6','2024-02-10 20:27:06','2024-02-10 20:27:06');
/*!40000 ALTER TABLE `semisters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `states` (
  `name` varchar(128) NOT NULL,
  `id` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES ('Lagos','27df4456-62d3-4dd5-bcc1-bcdb686c9271','2024-02-15 15:11:14','2024-02-15 15:11:14'),('Taraba','3fb7cbcd-9a09-491a-9ff8-9fd4f482936b','2024-02-15 15:11:49','2024-02-15 15:11:49'),('Port-Harcourt','651f7742-840e-48d2-9192-60a6b660bb71','2024-02-15 15:12:20','2024-02-15 15:12:20'),('Abuja','69584a24-fe93-4c3f-bf9a-66147b9d130c','2024-02-15 15:11:38','2024-02-15 15:11:38'),('Edo','bf882416-f325-4c0f-86e7-b8d10511aed7','2024-02-15 15:11:32','2024-02-15 15:11:32'),('Anambra','e78a82a6-0503-4160-8eb5-d3474327d947','2024-02-15 15:11:59','2024-02-15 15:11:59'),('Cross River','f1b972ac-8f2a-478b-b926-40ca47bfa9a4','2024-02-15 15:11:25','2024-02-15 15:11:25');
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_bill`
--

DROP TABLE IF EXISTS `student_bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_bill` (
  `student_id` varchar(60) NOT NULL,
  `bill_id` varchar(60) NOT NULL,
  PRIMARY KEY (`student_id`,`bill_id`),
  KEY `bill_id` (`bill_id`),
  CONSTRAINT `student_bill_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `student_bill_ibfk_2` FOREIGN KEY (`bill_id`) REFERENCES `otherbills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_bill`
--

LOCK TABLES `student_bill` WRITE;
/*!40000 ALTER TABLE `student_bill` DISABLE KEYS */;
INSERT INTO `student_bill` VALUES ('d3a1d128-77f0-47c4-9794-39aafa346f39','40da47cf-192c-4db6-8b42-35b3503b3984'),('d3a1d128-77f0-47c4-9794-39aafa346f39','f8dd7222-ccd2-4182-bd0f-2015cf547728');
/*!40000 ALTER TABLE `student_bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_courses`
--

DROP TABLE IF EXISTS `student_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_courses` (
  `student_id` varchar(60) NOT NULL,
  `courses_id` varchar(60) NOT NULL,
  PRIMARY KEY (`student_id`,`courses_id`),
  KEY `courses_id` (`courses_id`),
  CONSTRAINT `student_courses_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `student_courses_ibfk_2` FOREIGN KEY (`courses_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_courses`
--

LOCK TABLES `student_courses` WRITE;
/*!40000 ALTER TABLE `student_courses` DISABLE KEYS */;
INSERT INTO `student_courses` VALUES ('d3a1d128-77f0-47c4-9794-39aafa346f39','f9ad0834-1d86-4cb6-a26e-4ea470a36af2');
/*!40000 ALTER TABLE `student_courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `first_name` varchar(70) NOT NULL,
  `last_name` varchar(70) DEFAULT NULL,
  `student_id` varchar(20) NOT NULL,
  `email` varchar(128) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `password` varchar(128) NOT NULL,
  `level_id` varchar(60) NOT NULL,
  `major_id` varchar(60) NOT NULL,
  `state_id` varchar(60) NOT NULL,
  `id` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `level_id` (`level_id`),
  KEY `major_id` (`major_id`),
  KEY `state_id` (`state_id`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`),
  CONSTRAINT `students_ibfk_2` FOREIGN KEY (`major_id`) REFERENCES `majors` (`id`),
  CONSTRAINT `students_ibfk_3` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES ('Mark','Iyaji','D9A4B486443D','markiyaji@gmail.com','Male','49ad23d1ec9fa4bd8d77d02681df5cfa','b7c47cb8-966f-4b2b-8cc9-6f760d20a7ff','1aad51b0-301b-4f8d-bd2f-fe9bd2d34625','f1b972ac-8f2a-478b-b926-40ca47bfa9a4','417bf9b8-b345-4d73-af4d-d9a4b486443d','2024-02-17 17:19:57','2024-02-17 17:19:57'),('Edward','Odey','39AAFA346F39','edwardodey00@gmail.com','Male','3f45f36f0dc58898eff207d1e3b41ce2','b7c47cb8-966f-4b2b-8cc9-6f760d20a7ff','ef0ea08b-0122-4f82-91f5-cf4f7314e417','f1b972ac-8f2a-478b-b926-40ca47bfa9a4','d3a1d128-77f0-47c4-9794-39aafa346f39','2024-02-15 15:15:38','2024-02-17 18:21:07');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students_announcement`
--

DROP TABLE IF EXISTS `students_announcement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students_announcement` (
  `student_id` varchar(60) NOT NULL,
  `announcement_id` varchar(60) NOT NULL,
  PRIMARY KEY (`student_id`,`announcement_id`),
  KEY `announcement_id` (`announcement_id`),
  CONSTRAINT `students_announcement_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `students_announcement_ibfk_2` FOREIGN KEY (`announcement_id`) REFERENCES `announcements` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students_announcement`
--

LOCK TABLES `students_announcement` WRITE;
/*!40000 ALTER TABLE `students_announcement` DISABLE KEYS */;
INSERT INTO `students_announcement` VALUES ('d3a1d128-77f0-47c4-9794-39aafa346f39','51bc520f-4670-4ee9-bae6-02ec1dad11b3');
/*!40000 ALTER TABLE `students_announcement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students_results`
--

DROP TABLE IF EXISTS `students_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students_results` (
  `student_id` varchar(60) NOT NULL,
  `result_id` varchar(60) NOT NULL,
  PRIMARY KEY (`student_id`,`result_id`),
  KEY `result_id` (`result_id`),
  CONSTRAINT `students_results_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `students_results_ibfk_2` FOREIGN KEY (`result_id`) REFERENCES `results` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students_results`
--

LOCK TABLES `students_results` WRITE;
/*!40000 ALTER TABLE `students_results` DISABLE KEYS */;
/*!40000 ALTER TABLE `students_results` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-22 16:27:22
