-- --------------------------------------------------------
-- Host:                         localhost
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
CREATE DATABASE IF NOT EXISTS `datn` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
USE `datn`;

-- Dumping structure for table datn.city
CREATE TABLE IF NOT EXISTS `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=latin1;

-- Dumping data for table datn.city: ~63 rows (approximately)
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

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
