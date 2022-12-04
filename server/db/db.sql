-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.7.3-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for datn
DROP DATABASE IF EXISTS `datn`;
CREATE DATABASE IF NOT EXISTS `datn` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `datn`;

-- Dumping structure for table datn.account
DROP TABLE IF EXISTS `account`;
CREATE TABLE IF NOT EXISTS `account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table datn.account: ~0 rows (approximately)
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` (`id`, `created_at`, `updated_at`, `email`, `password`) VALUES
	(1, '2022-10-04 16:12:49', '2022-10-04 16:12:49', 'meat@gmail.com', '$2b$10$C0mvGGMzFN0tjv9G35qsyuh/bKVCbfE86qhATDHY4rDM7M4kPlagW');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;

-- Dumping structure for table datn.certificate
DROP TABLE IF EXISTS `certificate`;
CREATE TABLE IF NOT EXISTS `certificate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table datn.certificate: ~3 rows (approximately)
/*!40000 ALTER TABLE `certificate` DISABLE KEYS */;
INSERT INTO `certificate` (`id`, `created_at`, `updated_at`, `name`) VALUES
	(1, '2022-11-22 22:04:53', '2022-11-22 22:04:53', 'Công nghệ thông tin cơ bản'),
	(2, '2022-11-22 22:05:12', '2022-11-22 22:05:12', 'Công nghệ thông tin nâng cao'),
	(3, '2022-11-22 22:05:29', '2022-11-22 22:05:29', 'IC3, MOS');
/*!40000 ALTER TABLE `certificate` ENABLE KEYS */;

-- Dumping structure for table datn.city
DROP TABLE IF EXISTS `city`;
CREATE TABLE IF NOT EXISTS `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=latin1;

-- Dumping data for table datn.city: ~59 rows (approximately)
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` (`id`, `created_at`, `updated_at`, `name`) VALUES
	(1, '2022-10-04 10:48:25', '2022-10-04 10:48:25', 'An Giang'),
	(2, '2022-10-04 10:48:38', '2022-10-04 10:48:38', 'Bà Rịa – Vũng Tàu'),
	(3, '2022-10-04 10:48:46', '2022-10-04 10:48:46', 'Bạc Liêu'),
	(4, '2022-10-04 10:48:50', '2022-10-04 10:48:50', 'Bắc Giang'),
	(5, '2022-10-04 10:49:01', '2022-10-04 10:49:01', 'Bắc Kạn'),
	(6, '2022-10-04 10:49:05', '2022-10-04 10:49:05', 'Bắc Ninh'),
	(7, '2022-10-04 10:49:09', '2022-10-04 10:49:09', 'Bến Tre'),
	(8, '2022-10-04 10:49:15', '2022-10-04 10:49:15', 'Bình Dương'),
	(9, '2022-10-04 10:49:18', '2022-10-04 10:49:18', 'Bình Định'),
	(10, '2022-10-04 10:49:30', '2022-10-04 10:49:30', 'Bình Phước'),
	(11, '2022-10-04 10:49:56', '2022-10-04 10:49:56', 'Bình Thuận'),
	(12, '2022-10-04 10:50:00', '2022-10-04 10:50:00', 'Cà Mau'),
	(13, '2022-10-04 10:50:04', '2022-10-04 10:50:04', 'Cao Bằng'),
	(14, '2022-10-04 10:50:07', '2022-10-04 10:50:07', 'Cần Thơ'),
	(15, '2022-10-04 10:50:11', '2022-10-04 10:50:11', 'Đà Nẵng'),
	(16, '2022-10-04 10:50:20', '2022-10-04 10:50:20', 'Đắk Lắk'),
	(17, '2022-10-04 10:50:24', '2022-10-04 10:50:24', 'Đắk Nông'),
	(18, '2022-10-04 10:50:28', '2022-10-04 10:50:28', 'Điện Biên'),
	(19, '2022-10-04 10:50:32', '2022-10-04 10:50:32', 'Đồng Nai'),
	(20, '2022-10-04 10:50:37', '2022-10-04 10:50:37', 'Đồng Tháp'),
	(21, '2022-10-04 10:50:40', '2022-10-04 10:50:40', 'Gia Lai'),
	(22, '2022-10-04 10:50:43', '2022-10-04 10:50:43', 'Hà Giang'),
	(23, '2022-10-04 10:51:01', '2022-10-04 10:51:01', 'Hà Nam'),
	(24, '2022-10-04 10:51:08', '2022-10-04 10:51:08', 'Hà Nội'),
	(25, '2022-10-04 10:51:10', '2022-10-04 10:51:10', 'Hà Tĩnh'),
	(26, '2022-10-04 10:51:19', '2022-10-04 10:51:19', 'Hải Dương'),
	(27, '2022-10-04 10:51:23', '2022-10-04 10:51:23', 'Hải Phòng'),
	(28, '2022-10-04 10:51:29', '2022-10-04 10:51:29', 'Hậu Giang'),
	(29, '2022-10-04 10:51:33', '2022-10-04 10:51:33', 'Hòa Bình'),
	(30, '2022-10-04 10:51:39', '2022-10-04 10:51:39', 'Thành phố Hồ Chí Minh'),
	(31, '2022-10-04 10:51:43', '2022-10-04 10:51:43', 'Hưng Yên'),
	(32, '2022-10-04 10:51:46', '2022-10-04 10:51:46', 'Khánh Hòa'),
	(33, '2022-10-04 10:51:49', '2022-10-04 10:51:49', 'Kiên Giang'),
	(34, '2022-10-04 10:51:52', '2022-10-04 10:51:52', 'Kon Tum'),
	(35, '2022-10-04 10:52:00', '2022-10-04 10:52:00', 'Lai Châu'),
	(36, '2022-10-04 10:52:04', '2022-10-04 10:52:04', 'Lạng Sơn'),
	(37, '2022-10-04 10:52:08', '2022-10-04 10:52:08', 'Lào Cai'),
	(38, '2022-10-04 10:52:11', '2022-10-04 10:52:11', 'Lâm Đồng'),
	(39, '2022-10-04 10:52:15', '2022-10-04 10:52:15', 'Long An'),
	(40, '2022-10-04 10:52:19', '2022-10-04 10:52:19', 'Nam Định'),
	(41, '2022-10-04 10:52:22', '2022-10-04 10:52:22', 'Nghệ An'),
	(42, '2022-10-04 10:52:25', '2022-10-04 10:52:25', 'Ninh Bình'),
	(43, '2022-10-04 10:52:29', '2022-10-04 10:52:29', 'Ninh Thuận'),
	(44, '2022-10-04 10:52:36', '2022-10-04 10:52:36', 'Phú Thọ'),
	(45, '2022-10-04 10:52:45', '2022-10-04 10:52:45', 'Phú Yên'),
	(46, '2022-10-04 10:52:56', '2022-10-04 10:52:56', 'Quảng Bình'),
	(47, '2022-10-04 10:52:59', '2022-10-04 10:52:59', 'Quảng Nam'),
	(48, '2022-10-04 10:53:02', '2022-10-04 10:53:02', 'Quảng Ngãi'),
	(49, '2022-10-04 10:53:04', '2022-10-04 10:53:04', 'Quảng Ninh'),
	(50, '2022-10-04 10:53:08', '2022-10-04 10:53:08', 'Quảng Trị'),
	(51, '2022-10-04 10:53:12', '2022-10-04 10:53:12', 'Sóc Trăng'),
	(52, '2022-10-04 10:53:15', '2022-10-04 10:53:15', 'Sơn La'),
	(53, '2022-10-04 10:53:19', '2022-10-04 10:53:19', 'Tây Ninh'),
	(54, '2022-10-04 10:53:38', '2022-10-04 10:53:38', 'Thái Bình'),
	(55, '2022-10-04 10:53:42', '2022-10-04 10:53:42', 'Thái Nguyên'),
	(56, '2022-10-04 10:53:45', '2022-10-04 10:53:45', 'Thanh Hóa'),
	(57, '2022-10-04 10:53:50', '2022-10-04 10:53:50', 'Thừa Thiên Huế'),
	(58, '2022-10-04 10:53:59', '2022-10-04 10:53:59', 'Tiền Giang'),
	(59, '2022-10-04 10:54:02', '2022-10-04 10:54:02', 'Trà Vinh'),
	(60, '2022-10-04 10:54:05', '2022-10-04 10:54:05', 'Tuyên Quang'),
	(61, '2022-10-04 10:54:09', '2022-10-04 10:54:09', 'Vĩnh Long'),
	(62, '2022-10-04 10:54:13', '2022-10-04 10:54:13', 'Vĩnh Phúc'),
	(63, '2022-10-04 10:54:16', '2022-10-04 10:54:16', 'Yên Bái');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;

-- Dumping structure for table datn.course
DROP TABLE IF EXISTS `course`;
CREATE TABLE IF NOT EXISTS `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `day` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `start` time DEFAULT NULL,
  `end` time DEFAULT NULL,
  `open` date DEFAULT NULL,
  `certificateId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_course_certificate` (`certificateId`),
  CONSTRAINT `FK_course_certificate` FOREIGN KEY (`certificateId`) REFERENCES `certificate` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table datn.course: ~1 rows (approximately)
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` (`id`, `created_at`, `updated_at`, `name`, `day`, `start`, `end`, `open`, `certificateId`) VALUES
	(1, '2022-11-13 13:32:00', '2022-11-13 13:32:01', 'CNTT Cơ bản', '2, 4, 6', '13:00:00', '16:00:00', '2022-12-31', 1),
	(2, '2022-11-27 16:19:53', '2022-11-27 16:19:53', 'Test CNTT Cơ bản 1', '2, 3, 4', '00:00:00', '22:00:00', '2022-01-01', 1);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;

-- Dumping structure for table datn.ethnic
DROP TABLE IF EXISTS `ethnic`;
CREATE TABLE IF NOT EXISTS `ethnic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=latin1;

-- Dumping data for table datn.ethnic: ~54 rows (approximately)
/*!40000 ALTER TABLE `ethnic` DISABLE KEYS */;
INSERT INTO `ethnic` (`id`, `created_at`, `updated_at`, `name`, `description`) VALUES
	(1, '2022-10-04 09:18:32', '2022-10-04 09:18:32', 'Kinh', 'Việt'),
	(2, '2022-10-04 09:18:48', '2022-10-04 09:18:48', 'Tày', 'Thổ, Ngạn, Phén, Thù Lao, Pa Dí, Tày Khao'),
	(3, '2022-10-04 09:19:02', '2022-10-04 09:19:02', 'Thái', 'Tày Đăm, Tày Mười, Tày Thanh, Mán Thanh, Hàng Bông, Tày Mường, Pa Thay, Thổ Đà Bắc'),
	(4, '2022-10-04 09:19:13', '2022-10-04 09:19:13', 'Hoa', 'Hán, Triều Châu, Phúc Kiến, Quảng Đông, Hải Nam, Hạ, Xạ Phạng'),
	(5, '2022-10-04 09:19:24', '2022-10-04 09:19:24', 'Khơ-me', 'Cur, Cul, Cu, Thổ, Việt gốc Miên, Krôm'),
	(6, '2022-10-04 09:19:35', '2022-10-04 09:19:35', 'Mường', 'Mol, Mual, Mọi, Mọi Bi, Ao Tá, Ậu Tá'),
	(7, '2022-10-04 09:19:45', '2022-10-04 09:19:45', 'Nùng', 'Xuồng, Giang, Nùng An, Phàn Sinh, Nùng Cháo, Nùng Lòi, Quý Rim, Khèn Lài'),
	(8, '2022-10-04 09:19:56', '2022-10-04 09:19:56', 'HMông', 'Mèo, Hoa, Mèo Xanh, Mèo Đỏ, Mèo Đen, Ná Mẻo, Mán Trắng'),
	(9, '2022-10-04 09:20:13', '2022-10-04 09:20:13', 'Dao', 'Mán, Động, Trại, Xá, Dìu, Miên, Kiềm, Miền, Quần Trắng, Dao Đỏ, Quần Chẹt, Lô Giang, Dao Tiền, Thanh Y, Lan Tẻn, Đại Bản, Tiểu Bản, Cóc Ngáng, Cóc Mùn, Sơn Đầu'),
	(10, '2022-10-04 09:20:32', '2022-10-04 09:20:32', 'Gia-rai', 'Giơ-rai, Tơ-buăn, Chơ-rai, Hơ-bau, Hđrung, Chor'),
	(11, '2022-10-04 09:20:42', '2022-10-04 09:20:42', 'Ngái', 'Xín, Lê, Đản, Khách Gia'),
	(12, '2022-10-04 09:20:51', '2022-10-04 09:20:51', 'Ê-đê', 'Ra-đê, Đê, Kpạ, A-đham, Krung, Ktul, Đliê Ruê, Blô, Epan, Mđhur, Bih'),
	(13, '2022-10-04 09:21:02', '2022-10-04 09:21:02', 'Ba na', 'Giơ-lar. Tơ-lô, Giơ-lâng, Y-lăng, Rơ-ngao, Krem, Roh, ConKđe, A-la Công, Kpăng Công, Bơ-nâm'),
	(14, '2022-10-04 09:21:14', '2022-10-04 09:21:14', 'Xơ-Đăng', 'Xơ-teng, Hđang, Tơ-đra, Mơ-nâm, Ha-lăng, Ca-dong, Kmrâng, ConLan, Bri-la, Tang'),
	(15, '2022-10-04 09:21:27', '2022-10-04 09:21:27', 'Sán Chay', 'Cao Lan, Sán Chỉ, Mán Cao Lan, Hờn Bạn, Sơn Tử'),
	(16, '2022-10-04 09:21:50', '2022-10-04 09:21:50', 'Cơ-ho', 'Xrê, Nốp, Tu-lốp, Cơ-don, Chil, Lat, Lach, Trinh'),
	(17, '2022-10-04 09:22:01', '2022-10-04 09:22:01', 'Chăm', 'Chàm, Chiêm Thành, Hroi'),
	(18, '2022-10-04 09:22:14', '2022-10-04 09:22:14', 'Sán Dìu', 'Sán Dẻo, Trại, Trại Đất, Mán, Quần Cộc'),
	(19, '2022-10-04 09:22:31', '2022-10-04 09:22:31', 'Hrê', 'Chăm Rê, Chom, Krẹ Luỹ'),
	(20, '2022-10-04 09:22:42', '2022-10-04 09:22:42', 'Mnông', 'Pnông, Nông, Pré, Bu-đâng, ĐiPri, Biat, Gar, Rơ-lam, Chil'),
	(21, '2022-10-04 09:22:57', '2022-10-04 09:22:57', 'Ra-glai', 'Ra-clây, Rai, Noang, La-oang'),
	(22, '2022-10-04 09:23:08', '2022-10-04 09:23:08', 'Xtiêng', 'Xa-điêng'),
	(23, '2022-10-04 09:23:21', '2022-10-04 09:23:21', 'Bru-Vân Kiều', 'Bru, Vân Kiều, Măng Coong, Tri Khùa'),
	(24, '2022-10-04 09:23:32', '2022-10-04 09:23:32', 'Thổ', 'Kẹo, Mọn, Cuối, Họ, Đan Lai, Ly Hà, Tày Pọng, Con Kha, Xá Lá Vàng'),
	(25, '2022-10-04 09:25:08', '2022-10-04 09:25:08', 'Giáy', 'Nhắng, Dẩng, Pầu Thìn Nu Nà, Cùi Chu, Xa'),
	(26, '2022-10-04 09:25:23', '2022-10-04 09:25:23', 'Cơ-tu', 'Ca-tu, Cao, Hạ, Phương, Ca-tang'),
	(27, '2022-10-04 09:25:34', '2022-10-04 09:25:34', 'Gié Triêng', 'Đgiéh, Tareb, Giang Rẫy Pin, Triêng, Treng, Ta-riêng, Ve, Veh, La-ve, Ca-tang'),
	(28, '2022-10-04 09:25:45', '2022-10-04 09:25:45', 'Mạ', 'Châu Mạ, Mạ Ngăn, Mạ Xóp, Mạ Tô, Mạ Krung'),
	(29, '2022-10-04 09:25:59', '2022-10-04 09:25:59', 'Khơ-mú', 'Xá Cẩu, Mứn Xen, Pu Thênh, Tềnh, Tày Hay'),
	(30, '2022-10-04 09:26:11', '2022-10-04 09:26:11', 'Co', 'Cor, Col, Cùa, Trầu'),
	(31, '2022-10-04 09:26:34', '2022-10-04 09:26:34', 'Tà-ôi', 'Tôi-ôi, Pa-co, Pa-hi, Ba-hi'),
	(32, '2022-10-04 09:26:48', '2022-10-04 09:26:48', 'Chơ-ro', 'Dơ-ro, Châu-ro'),
	(33, '2022-10-04 09:27:01', '2022-10-04 09:27:01', 'Kháng', 'Xá Khao, Xá Súa, Xá Dón, Xá Dẩng, Xá Hốc, Xá Ái, Xá Bung, Quảng Lâm'),
	(34, '2022-10-04 09:27:13', '2022-10-04 09:27:13', 'Xinh-mun', 'Puộc, Pụa'),
	(35, '2022-10-04 09:27:31', '2022-10-04 09:27:31', 'Hà Nhì', 'U Ni, Xá U Ni'),
	(36, '2022-10-04 09:27:43', '2022-10-04 09:27:43', 'Chu ru', 'Chơ-ru, Chu'),
	(37, '2022-10-04 09:27:53', '2022-10-04 09:27:53', 'Lào', 'Là Bốc, Lào Nọi'),
	(38, '2022-10-04 09:28:05', '2022-10-04 09:28:05', 'La Chí', 'Cù Tê, La Quả'),
	(39, '2022-10-04 09:28:17', '2022-10-04 09:28:17', 'La Ha', 'Xá Khao, Khlá Phlạo'),
	(40, '2022-10-04 09:28:31', '2022-10-04 09:28:31', 'Phù Lá', 'Bồ Khô Pạ, Mu Di Pạ Xá, Phó, Phổ, Va Xơ'),
	(41, '2022-10-04 09:28:46', '2022-10-04 09:28:46', 'La Hủ', 'Lao, Pu Đang, Khù Xung, Cò Xung, Khả Quy'),
	(42, '2022-10-04 09:28:57', '2022-10-04 09:28:57', 'Lự', 'Lừ, Nhuồn, Duôn'),
	(43, '2022-10-04 09:29:07', '2022-10-04 09:29:07', 'Lô Lô', 'Mun Di'),
	(44, '2022-10-04 09:29:18', '2022-10-04 09:29:18', 'Chứt', 'Sách, Máy, Rục, Mã-liêng, A-rem, Tu vang, Pa-leng, Xơ-Lang, Tơ-hung, Chà-củi, Tắc-củi, U-mo, Xá Lá Vàng'),
	(45, '2022-10-04 09:29:28', '2022-10-04 09:29:28', 'Mảng', 'Mảng Ư, Xá Lá Vàng'),
	(46, '2022-10-04 09:29:41', '2022-10-04 09:29:41', 'Pà Thẻn', 'Pà Hưng, Tống'),
	(47, '2022-10-04 09:29:51', '2022-10-04 09:29:51', 'Co Lao', NULL),
	(48, '2022-10-04 09:30:05', '2022-10-04 09:30:05', 'Cống', 'Xắm Khống, Mấng Nhé, Xá Xeng'),
	(49, '2022-10-04 09:30:21', '2022-10-04 09:30:21', 'Bố Y', 'Chủng Chá, Trọng Gia, Tu Di, Tu Din'),
	(50, '2022-10-04 09:30:37', '2022-10-04 09:30:37', 'Si La', 'Cù Dề Xừ, Khả pẻ'),
	(51, '2022-10-04 09:30:54', '2022-10-04 09:30:54', 'Pu Péo', 'Ka Pèo, Pen Ti Lô Lô'),
	(52, '2022-10-04 09:31:01', '2022-10-04 09:31:01', 'Brâu', 'Brao'),
	(53, '2022-10-04 09:31:13', '2022-10-04 09:31:13', 'Ơ Đu', 'Tày Hạt'),
	(54, '2022-10-04 09:31:22', '2022-10-04 09:31:22', 'Rơ măm', NULL);
/*!40000 ALTER TABLE `ethnic` ENABLE KEYS */;

-- Dumping structure for table datn.exam
DROP TABLE IF EXISTS `exam`;
CREATE TABLE IF NOT EXISTS `exam` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `name` varchar(50) DEFAULT NULL,
  `certificateId` int(11) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `code` varchar(15) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `series` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_exam_certificate` (`certificateId`),
  CONSTRAINT `FK_exam_certificate` FOREIGN KEY (`certificateId`) REFERENCES `certificate` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table datn.exam: ~4 rows (approximately)
/*!40000 ALTER TABLE `exam` DISABLE KEYS */;
INSERT INTO `exam` (`id`, `created_at`, `updated_at`, `name`, `certificateId`, `type`, `code`, `date`, `series`) VALUES
	(1, '2022-11-13 14:14:19', '2022-11-25 22:37:43', 'Công nghệ thông tin cơ bản', 1, 'Lý thuyết', NULL, '2022-07-13', 1),
	(2, '2022-11-13 20:41:55', '2022-11-24 20:51:36', 'Công nghệ thông tin cơ bản', 1, 'Thực hành', NULL, '2022-11-13', 1),
	(4, '2022-11-27 16:30:45', '2022-11-27 16:30:45', 'Test CNTT Cơ bản 1', 1, 'Lý thuyết', NULL, '2022-01-01', 2),
	(7, '2022-11-27 16:33:18', '2022-11-27 16:33:18', 'Test CNTT Cơ bản 3', 1, 'Thực hành', NULL, '2024-04-01', 2);
/*!40000 ALTER TABLE `exam` ENABLE KEYS */;

-- Dumping structure for table datn.feed
DROP TABLE IF EXISTS `feed`;
CREATE TABLE IF NOT EXISTS `feed` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table datn.feed: ~2 rows (approximately)
/*!40000 ALTER TABLE `feed` DISABLE KEYS */;
INSERT INTO `feed` (`id`, `created_at`, `updated_at`, `title`, `content`, `category`) VALUES
	(1, '2022-11-03 09:37:23', '2022-11-03 09:37:23', 'title', 'content', 'category'),
	(2, '2022-11-03 09:38:00', '2022-11-03 09:38:00', 'title2', 'content2', 'category');
/*!40000 ALTER TABLE `feed` ENABLE KEYS */;

-- Dumping structure for table datn.payment
DROP TABLE IF EXISTS `payment`;
CREATE TABLE IF NOT EXISTS `payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `intentId` varchar(255) DEFAULT NULL,
  `secret` varchar(255) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table datn.payment: ~2 rows (approximately)
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` (`id`, `created_at`, `updated_at`, `intentId`, `secret`, `amount`, `status`) VALUES
	(1, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(2, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(3, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(4, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(5, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(6, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(7, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(8, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(9, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(10, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(11, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(12, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(13, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(14, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(15, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(16, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(17, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(18, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(19, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(20, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(21, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(22, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(23, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(24, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(25, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(26, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(27, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(28, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(29, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(30, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(31, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(32, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(33, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(34, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(35, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(36, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(37, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(38, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(39, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(40, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(41, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(42, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(43, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(44, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(45, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(46, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(47, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(48, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(49, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(50, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(51, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(52, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(53, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(54, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(55, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(56, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(57, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(58, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(59, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(60, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(61, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(62, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(63, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(64, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(65, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(66, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(67, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(68, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(69, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(70, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(71, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(72, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(73, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(74, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(75, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(76, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(77, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(78, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(79, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(80, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(81, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(82, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(83, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(84, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(85, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(86, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(87, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(88, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(89, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(90, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(91, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(92, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(93, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(94, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(95, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(96, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(97, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(98, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(99, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(100, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(101, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(102, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1),
	(103, current_timestamp(), current_timestamp(), NULL, NULL, NULL, 1);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;

-- Dumping structure for table datn.registration
DROP TABLE IF EXISTS `registration`;
CREATE TABLE IF NOT EXISTS `registration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `studentId` int(11) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `certificateId` int(11) DEFAULT NULL,
  `paymentId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_registration_student` (`studentId`),
  KEY `FK_registration_certificate` (`certificateId`),
  KEY `FK_registration_payment` (`paymentId`),
  CONSTRAINT `FK_registration_certificate` FOREIGN KEY (`certificateId`) REFERENCES `certificate` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_registration_payment` FOREIGN KEY (`paymentId`) REFERENCES `payment` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_registration_student` FOREIGN KEY (`studentId`) REFERENCES `student` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=latin1;

-- Dumping data for table datn.registration: ~2 rows (approximately)
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` (`id`, `created_at`, `updated_at`, `studentId`, `type`, `status`, `certificateId`, `paymentId`) VALUES
	(1, current_timestamp(), current_timestamp(), 1, 'thi', 0, 3, 1),
	(2, current_timestamp(), current_timestamp(), 2, 'ôn', 0, 2, 2),
	(3, current_timestamp(), current_timestamp(), 3, 'ôn', 0, 2, 3),
	(4, current_timestamp(), current_timestamp(), 4, 'ôn', 0, 2, 4),
	(5, current_timestamp(), current_timestamp(), 5, 'thi', 0, 3, 5),
	(6, current_timestamp(), current_timestamp(), 6, 'ôn', 0, 2, 6),
	(7, current_timestamp(), current_timestamp(), 7, 'thi', 0, 1, 7),
	(8, current_timestamp(), current_timestamp(), 8, 'ôn', 0, 1, 8),
	(9, current_timestamp(), current_timestamp(), 8, 'thi', 0, 1, 8),
	(10, current_timestamp(), current_timestamp(), 9, 'ôn', 0, 2, 9),
	(11, current_timestamp(), current_timestamp(), 10, 'thi', 0, 2, 10),
	(12, current_timestamp(), current_timestamp(), 11, 'thi', 0, 2, 11),
	(13, current_timestamp(), current_timestamp(), 12, 'ôn', 0, 1, 12),
	(14, current_timestamp(), current_timestamp(), 12, 'thi', 0, 1, 12),
	(15, current_timestamp(), current_timestamp(), 13, 'thi', 0, 1, 13),
	(16, current_timestamp(), current_timestamp(), 14, 'ôn', 0, 2, 14),
	(17, current_timestamp(), current_timestamp(), 15, 'thi', 0, 3, 15),
	(18, current_timestamp(), current_timestamp(), 16, 'ôn', 0, 1, 16),
	(19, current_timestamp(), current_timestamp(), 16, 'thi', 0, 1, 16),
	(20, current_timestamp(), current_timestamp(), 17, 'ôn', 0, 3, 17),
	(21, current_timestamp(), current_timestamp(), 17, 'thi', 0, 3, 17),
	(22, current_timestamp(), current_timestamp(), 18, 'ôn', 0, 1, 18),
	(23, current_timestamp(), current_timestamp(), 18, 'thi', 0, 1, 18),
	(24, current_timestamp(), current_timestamp(), 19, 'ôn', 0, 3, 19),
	(25, current_timestamp(), current_timestamp(), 19, 'thi', 0, 3, 19),
	(26, current_timestamp(), current_timestamp(), 20, 'ôn', 0, 2, 20),
	(27, current_timestamp(), current_timestamp(), 21, 'ôn', 0, 1, 21),
	(28, current_timestamp(), current_timestamp(), 21, 'thi', 0, 1, 21),
	(29, current_timestamp(), current_timestamp(), 22, 'ôn', 0, 1, 22),
	(30, current_timestamp(), current_timestamp(), 22, 'thi', 0, 1, 22),
	(31, current_timestamp(), current_timestamp(), 23, 'thi', 0, 1, 23),
	(32, current_timestamp(), current_timestamp(), 24, 'thi', 0, 2, 24),
	(33, current_timestamp(), current_timestamp(), 25, 'ôn', 0, 1, 25),
	(34, current_timestamp(), current_timestamp(), 25, 'thi', 0, 1, 25),
	(35, current_timestamp(), current_timestamp(), 26, 'thi', 0, 2, 26),
	(36, current_timestamp(), current_timestamp(), 27, 'thi', 0, 1, 27),
	(37, current_timestamp(), current_timestamp(), 28, 'thi', 0, 2, 28),
	(38, current_timestamp(), current_timestamp(), 29, 'ôn', 0, 3, 29),
	(39, current_timestamp(), current_timestamp(), 29, 'thi', 0, 3, 29),
	(40, current_timestamp(), current_timestamp(), 30, 'ôn', 0, 1, 30),
	(41, current_timestamp(), current_timestamp(), 31, 'thi', 0, 2, 31),
	(42, current_timestamp(), current_timestamp(), 32, 'ôn', 0, 3, 32),
	(43, current_timestamp(), current_timestamp(), 32, 'thi', 0, 3, 32),
	(44, current_timestamp(), current_timestamp(), 33, 'thi', 0, 3, 33),
	(45, current_timestamp(), current_timestamp(), 34, 'thi', 0, 2, 34),
	(46, current_timestamp(), current_timestamp(), 35, 'ôn', 0, 2, 35),
	(47, current_timestamp(), current_timestamp(), 35, 'thi', 0, 2, 35),
	(48, current_timestamp(), current_timestamp(), 36, 'thi', 0, 3, 36),
	(49, current_timestamp(), current_timestamp(), 37, 'thi', 0, 1, 37),
	(50, current_timestamp(), current_timestamp(), 38, 'ôn', 0, 3, 38),
	(51, current_timestamp(), current_timestamp(), 38, 'thi', 0, 3, 38),
	(52, current_timestamp(), current_timestamp(), 39, 'ôn', 0, 1, 39),
	(53, current_timestamp(), current_timestamp(), 40, 'ôn', 0, 1, 40),
	(54, current_timestamp(), current_timestamp(), 41, 'ôn', 0, 2, 41),
	(55, current_timestamp(), current_timestamp(), 42, 'ôn', 0, 3, 42),
	(56, current_timestamp(), current_timestamp(), 42, 'thi', 0, 3, 42),
	(57, current_timestamp(), current_timestamp(), 43, 'ôn', 0, 2, 43),
	(58, current_timestamp(), current_timestamp(), 44, 'ôn', 0, 3, 44),
	(59, current_timestamp(), current_timestamp(), 44, 'thi', 0, 3, 44),
	(60, current_timestamp(), current_timestamp(), 45, 'ôn', 0, 1, 45),
	(61, current_timestamp(), current_timestamp(), 45, 'thi', 0, 1, 45),
	(62, current_timestamp(), current_timestamp(), 46, 'ôn', 0, 2, 46),
	(63, current_timestamp(), current_timestamp(), 47, 'thi', 0, 3, 47),
	(64, current_timestamp(), current_timestamp(), 48, 'thi', 0, 1, 48),
	(65, current_timestamp(), current_timestamp(), 49, 'ôn', 0, 3, 49),
	(66, current_timestamp(), current_timestamp(), 49, 'thi', 0, 3, 49),
	(67, current_timestamp(), current_timestamp(), 50, 'thi', 0, 1, 50),
	(68, current_timestamp(), current_timestamp(), 51, 'ôn', 0, 3, 51),
	(69, current_timestamp(), current_timestamp(), 52, 'ôn', 0, 2, 52),
	(70, current_timestamp(), current_timestamp(), 53, 'ôn', 0, 1, 53),
	(71, current_timestamp(), current_timestamp(), 54, 'thi', 0, 1, 54),
	(72, current_timestamp(), current_timestamp(), 55, 'ôn', 0, 1, 55),
	(73, current_timestamp(), current_timestamp(), 56, 'ôn', 0, 1, 56),
	(74, current_timestamp(), current_timestamp(), 57, 'ôn', 0, 2, 57),
	(75, current_timestamp(), current_timestamp(), 57, 'thi', 0, 2, 57),
	(76, current_timestamp(), current_timestamp(), 58, 'ôn', 0, 2, 58),
	(77, current_timestamp(), current_timestamp(), 59, 'ôn', 0, 1, 59),
	(78, current_timestamp(), current_timestamp(), 59, 'thi', 0, 1, 59),
	(79, current_timestamp(), current_timestamp(), 60, 'thi', 0, 3, 60),
	(80, current_timestamp(), current_timestamp(), 61, 'ôn', 0, 2, 61),
	(81, current_timestamp(), current_timestamp(), 61, 'thi', 0, 2, 61),
	(82, current_timestamp(), current_timestamp(), 62, 'thi', 0, 1, 62),
	(83, current_timestamp(), current_timestamp(), 63, 'ôn', 0, 3, 63),
	(84, current_timestamp(), current_timestamp(), 63, 'thi', 0, 3, 63),
	(85, current_timestamp(), current_timestamp(), 64, 'ôn', 0, 1, 64),
	(86, current_timestamp(), current_timestamp(), 64, 'thi', 0, 1, 64),
	(87, current_timestamp(), current_timestamp(), 65, 'ôn', 0, 3, 65),
	(88, current_timestamp(), current_timestamp(), 66, 'ôn', 0, 2, 66),
	(89, current_timestamp(), current_timestamp(), 67, 'thi', 0, 3, 67),
	(90, current_timestamp(), current_timestamp(), 68, 'ôn', 0, 3, 68),
	(91, current_timestamp(), current_timestamp(), 69, 'ôn', 0, 3, 69),
	(92, current_timestamp(), current_timestamp(), 70, 'ôn', 0, 1, 70),
	(93, current_timestamp(), current_timestamp(), 71, 'ôn', 0, 3, 71),
	(94, current_timestamp(), current_timestamp(), 71, 'thi', 0, 3, 71),
	(95, current_timestamp(), current_timestamp(), 72, 'ôn', 0, 2, 72),
	(96, current_timestamp(), current_timestamp(), 73, 'ôn', 0, 2, 73),
	(97, current_timestamp(), current_timestamp(), 73, 'thi', 0, 2, 73),
	(98, current_timestamp(), current_timestamp(), 74, 'ôn', 0, 2, 74),
	(99, current_timestamp(), current_timestamp(), 75, 'ôn', 0, 2, 75),
	(100, current_timestamp(), current_timestamp(), 76, 'thi', 0, 1, 76),
	(101, current_timestamp(), current_timestamp(), 77, 'ôn', 0, 3, 77),
	(102, current_timestamp(), current_timestamp(), 77, 'thi', 0, 3, 77),
	(103, current_timestamp(), current_timestamp(), 78, 'ôn', 0, 2, 78),
	(104, current_timestamp(), current_timestamp(), 78, 'thi', 0, 2, 78),
	(105, current_timestamp(), current_timestamp(), 79, 'thi', 0, 2, 79),
	(106, current_timestamp(), current_timestamp(), 80, 'ôn', 0, 2, 80),
	(107, current_timestamp(), current_timestamp(), 80, 'thi', 0, 2, 80),
	(108, current_timestamp(), current_timestamp(), 81, 'ôn', 0, 3, 81),
	(109, current_timestamp(), current_timestamp(), 81, 'thi', 0, 3, 81),
	(110, current_timestamp(), current_timestamp(), 82, 'thi', 0, 1, 82),
	(111, current_timestamp(), current_timestamp(), 83, 'thi', 0, 3, 83),
	(112, current_timestamp(), current_timestamp(), 84, 'thi', 0, 2, 84),
	(113, current_timestamp(), current_timestamp(), 85, 'thi', 0, 3, 85),
	(114, current_timestamp(), current_timestamp(), 86, 'ôn', 0, 2, 86),
	(115, current_timestamp(), current_timestamp(), 86, 'thi', 0, 2, 86),
	(116, current_timestamp(), current_timestamp(), 87, 'ôn', 0, 3, 87),
	(117, current_timestamp(), current_timestamp(), 88, 'thi', 0, 2, 88),
	(118, current_timestamp(), current_timestamp(), 89, 'thi', 0, 3, 89),
	(119, current_timestamp(), current_timestamp(), 90, 'ôn', 0, 2, 90),
	(120, current_timestamp(), current_timestamp(), 91, 'thi', 0, 2, 91),
	(121, current_timestamp(), current_timestamp(), 92, 'ôn', 0, 3, 92),
	(122, current_timestamp(), current_timestamp(), 93, 'ôn', 0, 3, 93),
	(123, current_timestamp(), current_timestamp(), 94, 'ôn', 0, 2, 94),
	(124, current_timestamp(), current_timestamp(), 95, 'thi', 0, 1, 95),
	(125, current_timestamp(), current_timestamp(), 96, 'thi', 0, 2, 96),
	(126, current_timestamp(), current_timestamp(), 97, 'thi', 0, 1, 97),
	(127, current_timestamp(), current_timestamp(), 98, 'thi', 0, 1, 98),
	(128, current_timestamp(), current_timestamp(), 99, 'ôn', 0, 3, 99),
	(129, current_timestamp(), current_timestamp(), 100, 'thi', 0, 2, 100),
	(130, current_timestamp(), current_timestamp(), 101, 'ôn', 0, 1, 101),
	(131, current_timestamp(), current_timestamp(), 102, 'ôn', 0, 1, 102),
	(132, current_timestamp(), current_timestamp(), 102, 'thi', 0, 1, 102),
	(133, current_timestamp(), current_timestamp(), 103, 'ôn', 0, 2, 103);
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;

-- Dumping structure for table datn.student
DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `firstName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `lastName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `citizenId` varchar(255) DEFAULT NULL,
  `dayOfBirth` varchar(255) DEFAULT NULL,
  `monthOfBirth` varchar(255) DEFAULT NULL,
  `yearOfBirth` varchar(255) DEFAULT NULL,
  `placeOfBirth` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `ethnic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `code` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_student_ethnic` (`ethnic`),
  KEY `FK_student_city` (`placeOfBirth`),
  CONSTRAINT `FK_student_city` FOREIGN KEY (`placeOfBirth`) REFERENCES `city` (`name`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_student_ethnic` FOREIGN KEY (`ethnic`) REFERENCES `ethnic` (`name`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table datn.student: ~1 rows (approximately)
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` (`id`, `created_at`, `updated_at`, `firstName`, `lastName`, `gender`, `citizenId`, `dayOfBirth`, `monthOfBirth`, `yearOfBirth`, `placeOfBirth`, `phoneNumber`, `email`, `ethnic`, `code`, `description`) VALUES
	(1, current_timestamp, current_timestamp, 'Nguyễn Tuấn', 'Anh', 'Nam', '000002486', '24', '04', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(2, current_timestamp, current_timestamp, 'Phạm Tuấn', 'Anh', 'Nam', '000000609', '03', '06', '2000', 'Thái Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(3, current_timestamp, current_timestamp, 'Phùng Quang', 'Anh', 'Nam', '000001586', '17', '09', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(4, current_timestamp, current_timestamp, 'Nguyễn Xuân', 'Canh', 'Nam', '000001689', '09', '03', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(5, current_timestamp, current_timestamp, 'Phạm Văn', 'Chương', 'Nam', '000001358', '25', '06', '2000', 'Nam Định', NULL, NULL, 'Kinh', '0000', NULL),
	(6, current_timestamp, current_timestamp, 'Nguyễn Văn', 'Dũng', 'Nam', '000001434', '05', '07', '2000', 'Nghệ An', NULL, NULL, 'Kinh', '0000', NULL),
	(7, current_timestamp, current_timestamp, 'Vũ Tuấn', 'Dương', 'Nam', '000001378', '01', '05', '2000', 'Ninh Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(8, current_timestamp, current_timestamp, 'Lương Hoàng', 'Đạt', 'Nam', '000001879', '10', '05', '2000', 'Hà Nam', NULL, NULL, 'Kinh', '0000', NULL),
	(9, current_timestamp, current_timestamp, 'Ngô Xuân', 'Đạt', 'Nam', '000001428', '26', '10', '2000', 'Thanh Hóa', NULL, NULL, 'Kinh', '0000', NULL),
	(10, current_timestamp, current_timestamp, 'Tạ Thành', 'Đạt', 'Nam', '000001282', '14', '09', '2000', 'Hưng Yên', NULL, NULL, 'Kinh', '0000', NULL),
	(11, current_timestamp, current_timestamp, 'Nguyễn Đức', 'Đông', 'Nam', '000001650', '07', '03', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(12, current_timestamp, current_timestamp, 'Đào Minh', 'Đức', 'Nam', '000001882', '29', '10', '2000', 'Thái Nguyên', NULL, NULL, 'Kinh', '0000', NULL),
	(13, current_timestamp, current_timestamp, 'Đào Văn', 'Hải', 'Nam', '000001809', '22', '06', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(14, current_timestamp, current_timestamp, 'Đỗ Ngọc', 'Hải', 'Nam', '000001648', '28', '08', '2000', 'Hưng Yên', NULL, NULL, 'Kinh', '0000', NULL),
	(15, current_timestamp, current_timestamp, 'Vũ Tiến', 'Hiệu', 'Nam', '000001310', '09', '11', '2000', 'Thái Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(16, current_timestamp, current_timestamp, 'Lê Công', 'Huy', 'Nam', '000000174', '12', '09', '2000', 'Hà Giang', NULL, NULL, 'Kinh', '0000', NULL),
	(17, current_timestamp, current_timestamp, 'Trần Trọng', 'Hòa', 'Nam', '000001878', '25', '02', '2000', 'Hòa Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(18, current_timestamp, current_timestamp, 'Tạ Văn', 'Hoàng', 'Nam', '000001781', '13', '07', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(19, current_timestamp, current_timestamp, 'Trần Phúc', 'Hưng', 'Nam', '000001460', '10', '09', '2000', 'Nam Định', NULL, NULL, 'Kinh', '0000', NULL),
	(20, current_timestamp, current_timestamp, 'Vũ Việt', 'Hưng', 'Nam', '000001488', '16', '09', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(21, current_timestamp, current_timestamp, 'Nguyễn Quang', 'Khải', 'Nam', '000001527', '14', '08', '2000', 'Thái Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(22, current_timestamp, current_timestamp, 'Trần Ngọc', 'Khánh', 'Nam', '000000516', '07', '02', '2000', 'Hà Nam', NULL, NULL, 'Kinh', '0000', NULL),
	(23, current_timestamp, current_timestamp, 'Nguyễn Phan', 'Linh', 'Nam', '000000013', '31', '08', '2000', 'Nghệ An', NULL, NULL, 'Kinh', '0000', NULL),
	(24, current_timestamp, current_timestamp, 'Bùi Đào Đức', 'Long', 'Nam', '000001507', '23', '09', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(25, current_timestamp, current_timestamp, 'Đoàn Hải', 'Long', 'Nam', '000001680', '20', '03', '2000', 'Nam Định', NULL, NULL, 'Kinh', '0000', NULL),
	(26, current_timestamp, current_timestamp, 'Nguyễn Đức', 'Long', 'Nam', '000001775', '06', '11', '2000', 'Thái Nguyên', NULL, NULL, 'Kinh', '0000', NULL),
	(27, current_timestamp, current_timestamp, 'Nguyễn Thành', 'Long', 'Nam', '000001482', '13', '06', '2000', 'Hưng Yên', NULL, NULL, 'Kinh', '0000', NULL),
	(28, current_timestamp, current_timestamp, 'Vũ Đức', 'Mạnh', 'Nam', '000001448', '30', '12', '2000', 'Nam Định', NULL, NULL, 'Kinh', '0000', NULL),
	(29, current_timestamp, current_timestamp, 'Bùi Ngọc', 'Minh', 'Nam', '000001646', '05', '04', '2000', 'Thanh Hóa', NULL, NULL, 'Kinh', '0000', NULL),
	(30, current_timestamp, current_timestamp, 'Vũ Đức', 'Nhật', 'Nam', '000001688', '31', '10', '2000', 'Nam Định', NULL, NULL, 'Kinh', '0000', NULL),
	(31, current_timestamp, current_timestamp, 'Nguyễn Nhật', 'Minh', 'Nam', '000001757', '31', '08', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(32, current_timestamp, current_timestamp, 'Nguyễn Quang', 'Minh', 'Nam', '000001622', '02', '04', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(33, current_timestamp, current_timestamp, 'Nguyễn Tuấn', 'Minh', 'Nam', '000001872', '02', '01', '2000', 'Ninh Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(34, current_timestamp, current_timestamp, 'Lê Trọng', 'Ninh', 'Nam', '000001290', '15', '03', '2000', 'Thái Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(35, current_timestamp, current_timestamp, 'Nguyễn Ngọc', 'Phan', 'Nam', '000000034', '12', '09', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(36, current_timestamp, current_timestamp, 'Trần Văn Quang', '', 'Nam', '000001308', '11', '02', '2000', 'Nam Định', NULL, NULL, 'Kinh', '0000', NULL),
	(37, current_timestamp, current_timestamp, 'Vũ Trường', 'Sơn', 'Nam', '000001947', '01', '10', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(38, current_timestamp, current_timestamp, 'Ngô Tiến', 'Thành', 'Nam', '000001330', '20', '03', '2000', 'Bắc Ninh', NULL, NULL, 'Kinh', '0000', NULL),
	(39, current_timestamp, current_timestamp, 'Trần Bá', 'Thánh', 'Nam', '000001676', '12', '12', '2000', 'Thanh Hóa', NULL, NULL, 'Kinh', '0000', NULL),
	(40, current_timestamp, current_timestamp, 'Từ Việt', 'Thảo', 'Nam', '000000076', '02', '04', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(41, current_timestamp, current_timestamp, 'Nguyễn Trọng', 'Thủy', 'Nam', '000001554', '21', '02', '2000', 'Hà Tĩnh', NULL, NULL, 'Kinh', '0000', NULL),
	(42, current_timestamp, current_timestamp, 'Hoàng Anh', 'Tiến', 'Nam', '000001291', '21', '08', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(43, current_timestamp, current_timestamp, 'Trần Văn', 'Tú', 'Nam', '000001814', '29', '05', '2000', 'Thái Nguyên', NULL, NULL, 'Kinh', '0000', NULL),
	(44, current_timestamp, current_timestamp, 'Nguyễn Minh', 'Vương', 'Nam', '000001379', '22', '08', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(45, current_timestamp, current_timestamp, 'Bùi Văn', 'Tuân', 'Nam', '000001667', '07', '10', '2000', 'Bắc Ninh', NULL, NULL, 'Kinh', '0000', NULL),
	(46, current_timestamp, current_timestamp, 'Đàm Quang', 'Tuấn', 'Nam', '000001762', '01', '09', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(47, current_timestamp, current_timestamp, 'Trương Danh', 'Tuấn', 'Nam', '000000008', '15', '11', '2000', 'Thanh Hóa', NULL, NULL, 'Kinh', '0000', NULL),
	(48, current_timestamp, current_timestamp, 'Trần Ngọc', 'Tuyến', 'Nam', '000001608', '01', '01', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(49, current_timestamp, current_timestamp, 'Vũ Đình', 'Anh', 'Nam', '000000909', '11', '11', '2000', 'Hưng Yên', NULL, NULL, 'Kinh', '0000', NULL),
	(50, current_timestamp, current_timestamp, 'Nguyễn Ngọc Minh', 'Châm', 'Nữ', '000000151', '25', '11', '2000', 'Hưng Yên', NULL, NULL, 'Kinh', '0000', NULL),
	(51, current_timestamp, current_timestamp, 'Triệu Kim', 'Cúc', 'Nữ', '000000859', '27', '03', '2000', 'Tuyên Quang', NULL, NULL, 'Kinh', '0000', NULL),
	(52, current_timestamp, current_timestamp, 'Trần Thị Thu', 'Hiền', 'Nữ', '000001924', '18', '09', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(53, current_timestamp, current_timestamp, 'Nguyễn Thị', 'Huệ', 'Nữ', '000001677', '26', '05', '2000', 'Bắc Ninh', NULL, NULL, 'Kinh', '0000', NULL),
	(54, current_timestamp, current_timestamp, 'Bùi Thị Ngọc', 'Linh', 'Nữ', '000001317', '22', '08', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(55, current_timestamp, current_timestamp, 'Nguyễn Diệu', 'Linh', 'Nữ', '000003276', '05', '05', '2000', 'Phú Thọ', NULL, NULL, 'Kinh', '0000', NULL),
	(56, current_timestamp, current_timestamp, 'Nguyễn Thị', 'Mến', 'Nữ', '000000112', '18', '03', '2000', 'Thái Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(57, current_timestamp, current_timestamp, 'Lê Thị Ngọc', 'Minh', 'Nữ', '000001472', '06', '03', '2000', 'Ninh Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(58, current_timestamp, current_timestamp, 'Lê Thị Bích', 'Ngọc', 'Nữ', '000001625', '04', '10', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(59, current_timestamp, current_timestamp, 'Nguyễn Thị', 'Nhung', 'Nữ', '000001756', '31', '10', '2000', 'Hưng Yên', NULL, NULL, 'Kinh', '0000', NULL),
	(60, current_timestamp, current_timestamp, 'Đỗ Thị', 'Phương', 'Nữ', '000001461', '10', '12', '2000', 'Thái Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(61, current_timestamp, current_timestamp, 'Lê Thị Mai', 'Phương', 'Nữ', '000000138', '03', '10', '2000', 'Ninh Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(62, current_timestamp, current_timestamp, 'Phạm Thị', 'Quyên', 'Nữ', '000000588', '14', '04', '2000', 'Tuyên Quang', NULL, NULL, 'Kinh', '0000', NULL),
	(63, current_timestamp, current_timestamp, 'Vương Thị', 'Quyến', 'Nữ', '000001969', '23', '02', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(64, current_timestamp, current_timestamp, 'Nguyễn Diễm', 'Quỳnh', 'Nữ', '000001900', '09', '12', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(65, current_timestamp, current_timestamp, 'Đỗ Thu', 'Thảo', 'Nữ', '000001594', '13', '09', '2000', 'Tuyên Quang', NULL, NULL, 'Kinh', '0000', NULL),
	(66, current_timestamp, current_timestamp, 'Mai Anh', 'Thúy', 'Nữ', '000001720', '29', '05', '2000', 'Nam Định', NULL, NULL, 'Kinh', '0000', NULL),
	(67, current_timestamp, current_timestamp, 'Dương Thị Thu', 'Trang', 'Nữ', '000001573', '01', '10', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(68, current_timestamp, current_timestamp, 'Lương Thị Hải', 'Yến', 'Nữ', '000000907', '25', '10', '2000', 'Thanh Hóa', NULL, NULL, 'Kinh', '0000', NULL),
	(69, current_timestamp, current_timestamp, 'Dương Lan', 'Anh', 'Nữ', '000000060', '13', '11', '2000', 'Nam Định', NULL, NULL, 'Kinh', '0000', NULL),
	(70, current_timestamp, current_timestamp, 'Trần Thị', 'Anh', 'Nữ', '000001337', '01', '01', '2000', 'Thái Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(71, current_timestamp, current_timestamp, 'Nguyễn Thị Phương', 'Chyền', 'Nữ', '000001610', '15', '02', '2000', 'Bắc Giang', NULL, NULL, 'Kinh', '0000', NULL),
	(72, current_timestamp, current_timestamp, 'Đỗ Thi Mai', 'Duyên', 'Nữ', '000001342', '10', '08', '2000', 'Nam Định', NULL, NULL, 'Kinh', '0000', NULL),
	(73, current_timestamp, current_timestamp, 'Vũ Thị', 'Hải', 'Nữ', '000001655', '02', '07', '2000', 'Ninh Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(74, current_timestamp, current_timestamp, 'Lê Thị', 'Hoa', 'Nữ', '000001368', '10', '04', '2000', 'Thanh Hóa', NULL, NULL, 'Kinh', '0000', NULL),
	(75, current_timestamp, current_timestamp, 'Lê Thị Thùy', 'Linh', 'Nữ', '000001338', '21', '03', '2000', 'Hà Tĩnh', NULL, NULL, 'Kinh', '0000', NULL),
	(76, current_timestamp, current_timestamp, 'Cao Thị Mai', 'Phương', 'Nữ', '000001495', '24', '01', '2000', 'Hải Phòng', NULL, NULL, 'Kinh', '0000', NULL),
	(77, current_timestamp, current_timestamp, 'Nguyễn Bích', 'Phương', 'Nữ', '000001353', '08', '11', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(78, current_timestamp, current_timestamp, 'Đỗ Thị Ngọc', 'Phượng', 'Nữ', '000001684', '12', '03', '2000', 'Hưng Yên', NULL, NULL, 'Kinh', '0000', NULL),
	(79, current_timestamp, current_timestamp, 'Nguyễn Thị Lan', 'Quỳnh', 'Nữ', '000001536', '22', '09', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(80, current_timestamp, current_timestamp, 'Nguyễn Thị Thu', 'Trang', 'Nữ', '000001592', '25', '12', '2000', 'Thanh Hóa', NULL, NULL, 'Kinh', '0000', NULL),
	(81, current_timestamp, current_timestamp, 'Phạm Thị', 'Tươi', 'Nữ', '000001440', '28', '11', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(82, current_timestamp, current_timestamp, 'Nguyễn Cẩm', 'Vy', 'Nữ', '000001735', '25', '03', '2000', 'Phú Thọ', NULL, NULL, 'Kinh', '0000', NULL),
	(83, current_timestamp, current_timestamp, 'Nguyễn Thị Phương', 'Thanh', 'Nữ', '000000160', '24', '11', '2000', 'Nam Định', NULL, NULL, 'Kinh', '0000', NULL),
	(84, current_timestamp, current_timestamp, 'Vũ Phúc Trường', 'An', 'Nam', '000001328', '21', '08', '2000', 'Nam Định', NULL, NULL, 'Kinh', '0000', NULL),
	(85, current_timestamp, current_timestamp, 'Phạm Duy', 'Anh', 'Nam', '000001771', '21', '03', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(86, current_timestamp, current_timestamp, 'Phan Quốc', 'Anh', 'Nam', '000001769', '17', '08', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(87, current_timestamp, current_timestamp, 'Ngô Xuân', 'Chinh', 'Nam', '000001691', '05', '10', '2000', 'Thái Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(88, current_timestamp, current_timestamp, 'Nguyễn Việt', 'Cường', 'Nam', '000001751', '22', '01', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(89, current_timestamp, current_timestamp, 'Trần Trung', 'Dũng', 'Nam', '000000109', '09', '08', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(90, current_timestamp, current_timestamp, 'Nguyễn Văn', 'Duy', 'Nam', '000001831', '19', '11', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(91, current_timestamp, current_timestamp, 'Trần Quang', 'Duyệt', 'Nam', '000001381', '21', '12', '2000', 'Hà Nam', NULL, NULL, 'Kinh', '0000', NULL),
	(92, current_timestamp, current_timestamp, 'Ngô Xuân', 'Đạt', 'Nam', '000001683', '29', '10', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(93, current_timestamp, current_timestamp, 'Nguyễn Tiến', 'Đạt', 'Nam', '000001489', '12', '07', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(94, current_timestamp, current_timestamp, 'Nguyễn Minh', 'Đức', 'Nam', '000001653', '11', '05', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(95, current_timestamp, current_timestamp, 'Nguyễn Quang', 'Hải', 'Nam', '000001552', '03', '02', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(96, current_timestamp, current_timestamp, 'Đặng Tuấn', 'Hiệp', 'Nam', '000001890', '16', '02', '2000', 'Ninh Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(97, current_timestamp, current_timestamp, 'Nguyễn Dũng', 'Hiếu', 'Nam', '000001662', '22', '01', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL),
	(98, current_timestamp, current_timestamp, 'Nguyễn Trung', 'Hiếu', 'Nam', '000000158', '29', '12', '2000', 'Bắc Giang', NULL, NULL, 'Kinh', '0000', NULL),
	(99, current_timestamp, current_timestamp, 'Tô Việt', 'Hoàng', 'Nam', '000001893', '08', '03', '2000', 'Thái Bình', NULL, NULL, 'Kinh', '0000', NULL),
	(100, current_timestamp, current_timestamp, 'Trần Như', 'Hoàng', 'Nam', '000001587', '16', '07', '2000', 'Nam Định', NULL, NULL, 'Kinh', '0000', NULL),
	(101, current_timestamp, current_timestamp, 'Nguyễn Hữu', 'Hợp', 'Nam', '000000624', '13', '01', '2000', 'Yên Bái', NULL, NULL, 'Kinh', '0000', NULL),
	(102, current_timestamp, current_timestamp, 'Nguyễn Mạnh', 'Hùng', 'Nam', '000001411', '25', '12', '2000', 'Hà Giang', NULL, NULL, 'Kinh', '0000', NULL),
	(103, current_timestamp, current_timestamp, 'Bùi Trung', 'Kiên', 'Nam', '000001473', '16', '01', '2000', 'Hà Nội', NULL, NULL, 'Kinh', '0000', NULL);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;

-- Dumping structure for table datn.student_course_mapping
DROP TABLE IF EXISTS `student_course_mapping`;
CREATE TABLE IF NOT EXISTS `student_course_mapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `studentId` int(11) DEFAULT NULL,
  `courseId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_student_course_mapping_student` (`studentId`),
  KEY `FK_student_course_mapping_course` (`courseId`),
  CONSTRAINT `FK_student_course_mapping_course` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_student_course_mapping_student` FOREIGN KEY (`studentId`) REFERENCES `student` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table datn.student_course_mapping: ~0 rows (approximately)
/*!40000 ALTER TABLE `student_course_mapping` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_course_mapping` ENABLE KEYS */;

-- Dumping structure for table datn.student_exam_mapping
DROP TABLE IF EXISTS `student_exam_mapping`;
CREATE TABLE IF NOT EXISTS `student_exam_mapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `examId` int(11) DEFAULT NULL,
  `studentId` int(11) DEFAULT NULL,
  `room` varchar(50) DEFAULT NULL,
  `sbd` varchar(50) DEFAULT NULL,
  `start` time DEFAULT NULL,
  `end` time DEFAULT NULL,
  `theoreticalScore` int(11) DEFAULT NULL,
  `practicalScore` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_student_exam_mapping_exam` (`examId`),
  KEY `FK_student_exam_mapping_student` (`studentId`),
  CONSTRAINT `FK_student_exam_mapping_exam` FOREIGN KEY (`examId`) REFERENCES `exam` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_student_exam_mapping_student` FOREIGN KEY (`studentId`) REFERENCES `student` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table datn.student_exam_mapping: ~2 rows (approximately)
/*!40000 ALTER TABLE `student_exam_mapping` DISABLE KEYS */;
INSERT INTO `student_exam_mapping` (`id`, `created_at`, `updated_at`, `examId`, `studentId`, `room`, `sbd`, `start`, `end`, `theoreticalScore`, `practicalScore`, `status`) VALUES
	(1, '2022-11-27 20:16:42', '2022-11-27 20:16:42', 4, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(2, '2022-11-27 20:16:42', '2022-11-27 20:16:42', 7, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `student_exam_mapping` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
