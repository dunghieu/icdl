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

-- Dumping structure for table icdl.ethnic
CREATE TABLE IF NOT EXISTS `ethnic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=latin1;

-- Dumping data for table icdl.ethnic: ~24 rows (approximately)
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

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
