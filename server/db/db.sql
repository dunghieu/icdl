-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.11.0-MariaDB - mariadb.org binary distribution
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
CREATE DATABASE IF NOT EXISTS `datn` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `datn`;

-- Dumping structure for table datn.account
CREATE TABLE IF NOT EXISTS `account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table datn.account: ~0 rows (approximately)
DELETE FROM `account`;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` (`id`, `created_at`, `updated_at`, `email`, `password`) VALUES
	(1, '2022-10-04 16:12:49', '2022-10-04 16:12:49', 'meat@gmail.com', '$2b$10$C0mvGGMzFN0tjv9G35qsyuh/bKVCbfE86qhATDHY4rDM7M4kPlagW');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;

-- Dumping structure for table datn.city
CREATE TABLE IF NOT EXISTS `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=latin1;

-- Dumping data for table datn.city: ~35 rows (approximately)
DELETE FROM `city`;
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

-- Dumping structure for table datn.ethnic
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
DELETE FROM `ethnic`;
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
CREATE TABLE IF NOT EXISTS `exam` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `name` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `code` varchar(15) NOT NULL,
  `instruction` varchar(255) DEFAULT NULL,
  `date` date NOT NULL,
  `startTime` time NOT NULL,
  `endTime` time NOT NULL,
  `series` int(11) NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table datn.exam: ~1 rows (approximately)
DELETE FROM `exam`;
/*!40000 ALTER TABLE `exam` DISABLE KEYS */;
INSERT INTO `exam` (`id`, `created_at`, `updated_at`, `name`, `type`, `code`, `instruction`, `date`, `startTime`, `endTime`, `series`) VALUES
	(1, '2022-11-08 09:54:37', '2022-11-08 09:54:38', 'IC3', 'IC3-MOS', 'ic3', 'NULL', '2022-11-08', '09:55:04', '09:55:05', 'NULL');
/*!40000 ALTER TABLE `exam` ENABLE KEYS */;

-- Dumping structure for table datn.feed
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
DELETE FROM `feed`;
/*!40000 ALTER TABLE `feed` DISABLE KEYS */;
INSERT INTO `feed` (`id`, `created_at`, `updated_at`, `title`, `content`, `category`) VALUES
	(1, '2022-11-03 09:37:23', '2022-11-03 09:37:23', 'title', 'content', 'category'),
	(2, '2022-11-03 09:38:00', '2022-11-03 09:38:00', 'title2', 'content2', 'category');
/*!40000 ALTER TABLE `feed` ENABLE KEYS */;

-- Dumping structure for table datn.payment
CREATE TABLE IF NOT EXISTS `payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `studentId` int(11) NOT NULL,
  `intentId` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_payment_student` (`studentId`),
  CONSTRAINT `FK_payment_student` FOREIGN KEY (`studentId`) REFERENCES `student` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

-- Dumping data for table datn.payment: ~6 rows (approximately)
DELETE FROM `payment`;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` (`id`, `created_at`, `updated_at`, `studentId`, `intentId`, `amount`, `status`) VALUES
	(1, '2022-11-02 10:35:43', '2022-11-02 10:55:44', 2, 'pi_3LzY3IBllFThz4em0g7SOJJu', 400000, 0),
	(2, '2022-11-02 10:35:49', '2022-11-02 10:35:49', 3, 'pi_3LzXk1BllFThz4em15oASBnz', 1000000, 0),
	(3, '2022-11-02 11:18:22', '2022-11-02 11:18:22', 5, 'pi_3LzYPCBllFThz4em0A0y9rgA', 1000000, 0),
	(4, '2022-11-02 11:18:29', '2022-11-02 11:18:29', 6, 'pi_3LzYPJBllFThz4em3CTRtNpt', 1000000, 0),
	(5, '2022-11-02 14:05:25', '2022-11-02 14:05:25', 7, 'pi_3Lzb0rBllFThz4em38n1hHjL', 1000000, 0),
	(6, '2022-11-02 14:06:16', '2022-11-02 14:06:16', 8, 'pi_3Lzb1gBllFThz4em1DrnsGEV', 1000000, 0);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;

-- Dumping structure for table datn.student
CREATE TABLE IF NOT EXISTS `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `firstName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `lastName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `citizenId` varchar(255) NOT NULL,
  `dayOfBirth` varchar(255) NOT NULL,
  `monthOfBirth` varchar(255) NOT NULL,
  `yearOfBirth` varchar(255) NOT NULL,
  `placeOfBirth` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `ethnic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `testDate` date NOT NULL,
  `certificateType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `code` varchar(50) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_student_ethnic` (`ethnic`),
  KEY `FK_student_city` (`placeOfBirth`),
  CONSTRAINT `FK_student_city` FOREIGN KEY (`placeOfBirth`) REFERENCES `city` (`name`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_student_ethnic` FOREIGN KEY (`ethnic`) REFERENCES `ethnic` (`name`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Dumping data for table datn.student: ~6 rows (approximately)
DELETE FROM `student`;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` (`id`, `created_at`, `updated_at`, `firstName`, `lastName`, `gender`, `citizenId`, `dayOfBirth`, `monthOfBirth`, `yearOfBirth`, `placeOfBirth`, `phoneNumber`, `email`, `ethnic`, `testDate`, `certificateType`, `code`, `type`, `description`) VALUES
	(2, '2022-11-02 10:35:42', '2022-11-02 10:55:45', 'meat', 'ball', 'Nam', '123123123', '22', '1', '2000', 'Ha Nội', '0963725098', 'bearngok96@gmail.com', 'Kinh', '2022-11-11', 'IC3', '0000', 'ôn', NULL),
	(3, '2022-11-02 10:35:49', '2022-11-02 10:35:49', 'meat', 'ball', 'Nam', '123123123', '22', '1', '2000', 'Hà Nội', '0963725098', 'bearngok96@gmail.com', 'Kinh', '2022-11-11', 'IC3', NULL, 'thi', NULL),
	(5, '2022-11-02 11:18:21', '2022-11-02 11:18:21', 'meat', 'ball', 'Nam', '123123123', '22', '1', '2000', 'Hà Nội', '0963725098', 'bearngok96@gmail.com', 'Kinh', '2022-11-11', 'IC3', NULL, 'thi', NULL),
	(6, '2022-11-02 11:18:29', '2022-11-02 11:18:29', 'meat', 'ball', 'Nam', '123123123', '22', '1', '2000', 'Hà Nội', '0963725098', 'bearngok96@gmail.com', 'Kinh', '2022-11-11', 'IC3', NULL, 'thi', NULL),
	(7, '2022-11-02 14:05:23', '2022-11-02 14:05:23', 'meat', 'ball', 'Nam', '123123123', '22', '1', '2000', 'Hà Nội', '0963725098', 'bearngok96@gmail.com', 'Kinh', '2022-11-11', 'IC3', NULL, 'thi', NULL),
	(8, '2022-11-02 14:06:15', '2022-11-02 14:06:15', 'meat', 'ball', 'Nam', '123123123', '22', '1', '2000', 'Hà Nội', '0963725098', 'bearngok96@gmail.com', 'Kinh', '2022-11-11', 'IC3', NULL, 'thi', NULL);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;

-- Dumping structure for table datn.student_exam_mapping
CREATE TABLE IF NOT EXISTS `student_exam_mapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `studentId` int(11) NOT NULL,
  `examId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_student_exam_mapping_student` (`studentId`),
  KEY `FK_student_exam_mapping_exam` (`examId`),
  CONSTRAINT `FK_student_exam_mapping_exam` FOREIGN KEY (`examId`) REFERENCES `exam` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_student_exam_mapping_student` FOREIGN KEY (`studentId`) REFERENCES `student` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table datn.student_exam_mapping: ~0 rows (approximately)
DELETE FROM `student_exam_mapping`;
/*!40000 ALTER TABLE `student_exam_mapping` DISABLE KEYS */;
INSERT INTO `student_exam_mapping` (`id`, `created_at`, `updated_at`, `studentId`, `examId`) VALUES
	(2, '2022-11-08 09:55:36', '2022-11-08 09:55:37', 2, 1);
/*!40000 ALTER TABLE `student_exam_mapping` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
