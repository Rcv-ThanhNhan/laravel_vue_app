-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 29, 2022 at 04:25 PM
-- Server version: 10.4.24-MariaDB-1:10.4.24+maria~focal-log
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_laravel_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(10) UNSIGNED NOT NULL,
  `customer_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel_num` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `customer_name`, `email`, `tel_num`, `address`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Nguyễn Văn C', 'c.nguyen@gmail.com', '0123456789', 'TP Hồ Chí Minh', 0, '2022-03-22 20:08:54', '2022-03-22 20:08:54'),
(2, 'Nguyễn Văn D', 'D.nguyen@gmail.com', '0123654789', 'Hà Nội', 0, '2022-03-22 20:16:41', '2022-03-22 20:36:21'),
(3, 'Nguyễn Văn B', 'b.nguyen@gmail.com', '031254686', 'Hà Nội', 1, '2022-03-22 20:27:32', '2022-03-27 21:20:22'),
(4, 'Nguyễn Văn E', 'e@gmail.com', '032156849', 'TP Hồ Chí Minh', 1, '2022-03-22 20:36:38', '2022-03-27 21:19:49'),
(5, 'Nguyễn Văn E1', 'e1@gmail.com', '032156849', 'TP Hồ Chí Minh', 1, '2022-03-22 20:40:11', '2022-03-27 21:19:42'),
(6, 'Nguyễn Văn B1', 'b1.nguyen@gmail.com', '031254686', 'Hà Nội', 1, '2022-03-22 20:40:11', '2022-03-23 19:26:45'),
(7, 'Manley Kovacek', 'estell.labadie@gmail.com', '0123456789', '789 Imani CoveNorth Jessie, SD 06849', 1, NULL, '2022-03-27 21:19:35'),
(8, 'Prof. Nyah Lueilwitz Jr.', 'odell.lebsack@luettgen.biz', '0123456789', '226 Esther Bridge Suite 460\nWest Laneyshire, PA 92701-2990', 1, NULL, NULL),
(9, 'Rodger Pfeffer', 'raheem.swaniawski@barton.com', '0123456789', '18923 Rosenbaum Tunnel\nNew Devonmouth, SC 22386', 1, NULL, NULL),
(10, 'Caroline Walsh', 'cschmeler@hammes.org', '0123456789', '559 Carolyn Ramp Suite 686\nBarrettberg, MS 38597-4080', 1, NULL, NULL),
(11, 'Vena Skiles', 'qwunsch@yahoo.com', '0123456789', '9677 Cali Alley Suite 475\nSouth Nelle, NY 11229-1358', 1, NULL, NULL),
(12, 'Moriah Weissnat', 'eryn.schuppe@yahoo.com', '0123456789', '717 Donna Fields\nEast Jeremie, UT 54892', 1, NULL, NULL),
(13, 'Ms. Esta Doyle', 'gerlach.kaia@kuhic.info', '0123456789', '9294 Cronin View\nLake Scottieberg, NV 35394-0185', 1, NULL, NULL),
(14, 'Lilla Ratke', 'brandyn63@wintheiser.com', '0123456789', '26530 Izaiah Divide Apt. 566\nLake Alberto, NE 24649', 1, NULL, NULL),
(15, 'Esta O\'Hara', 'nienow.delmer@reynolds.com', '0123456789', '335 Summer Loaf Suite 135\nMacejkovicmouth, MT 46638', 1, NULL, NULL),
(16, 'Dean Bergstrom', 'dare.eric@jakubowski.org', '0123456789', '2526 Danny Inlet Apt. 146\nIlatown, WA 62192', 1, NULL, NULL),
(17, 'Cedrick Crist III', 'hermann.edward@yahoo.com', '0123456789', '94972 Shania Wells Apt. 809\nWest Oliverville, OK 73347-7598', 1, NULL, NULL),
(18, 'Dr. Margot Glover IV', 'vallie42@monahan.com', '0123456789', '5456 Pfeffer Shoal\nGerryton, CO 29161-2330', 1, NULL, NULL),
(19, 'Arden Bergnaum', 'rollin.russel@anderson.com', '0123456789', '55464 Lucious Walk Suite 952\nNorth Ettie, DC 08267-8604', 1, NULL, NULL),
(20, 'Linnea Funk', 'nblanda@skiles.info', '0123456789', '433 Tevin Cliff Apt. 242\nNew Tyrique, IA 85851-6669', 1, NULL, NULL),
(21, 'Columbus Schoen', 'jazmyne.pacocha@emard.info', '0123456789', '671 Sanford Ford\nJacynthemouth, AR 46167', 1, NULL, NULL),
(22, 'Tremaine McDermott', 'helmer.bayer@gmail.com', '0123456789', '962 Mertz Station Suite 915\nHarberville, WA 39415-7141', 1, NULL, NULL),
(23, 'Delphine Reynolds', 'parker.laney@yahoo.com', '0123456789', '470 Hoppe Parkway\nMoorestad, MI 01043', 1, NULL, NULL),
(24, 'Gabriel Hirthe PhD', 'frederic.carroll@yahoo.com', '0123456789', '374 Orlando Tunnel Suite 085\nCronaton, MA 43124', 1, NULL, NULL),
(25, 'Dr. Alysha Halvorson PhD', 'gertrude.beier@dach.info', '0123456789', '541 Audreanne Prairie\nLuettgenbury, NM 67195-6833', 1, NULL, NULL),
(26, 'Lonny Hermiston', 'mills.carolina@monahan.info', '0123456789', '2623 Hank Dale Apt. 521\nSchuppeborough, VT 85154-7141', 1, NULL, NULL),
(27, 'Ephraim Goodwin', 'lysanne.mueller@yahoo.com', '0123456789', '8646 Harvey Path Apt. 866\nNorth Hanna, NE 27353-9115', 1, NULL, NULL),
(28, 'Nyah Shields', 'ecartwright@yahoo.com', '0123456789', '572 Haag Glen\nWest Velda, MA 94658', 1, NULL, NULL),
(29, 'Oliver Lubowitz', 'wnader@hotmail.com', '0123456789', '50596 Green Glen\nBartellville, IA 33785', 1, NULL, NULL),
(30, 'Shaun Pagac', 'osinski.jaden@leffler.biz', '0123456789', '93153 Turcotte Island\nGleasonfort, ID 61878-1911', 1, NULL, NULL),
(31, 'Yolanda Durgan', 'hleffler@king.biz', '0123456789', '7481 Douglas Trafficway Suite 600\nEast Ismael, MA 95740', 1, NULL, NULL),
(32, 'Dr. Kelton Witting', 'jerry.steuber@strosin.com', '0123456789', '84338 Joaquin Meadows Suite 782\nWaldofurt, LA 97526-5047', 1, NULL, NULL),
(33, 'Aimee Conn PhD', 'malachi.boehm@wilkinson.info', '0123456789', '281 Zoie Plaza Suite 080\nReingerbury, MI 76382-9915', 1, NULL, NULL),
(34, 'Walton Kunze', 'mjohnson@yahoo.com', '0123456789', '48884 Cora Meadows\nLake Roslyntown, MD 94540', 1, NULL, NULL),
(35, 'Alessandra Mills Sr.', 'triston.littel@gmail.com', '0123456789', '753 Ryder Street Apt. 036\nNew Mackmouth, TN 80023', 1, NULL, NULL),
(36, 'Josefa Waters', 'chyna99@murray.com', '0123456789', '3387 Ledner Forks Apt. 609\nBodeborough, WA 94302-8395', 1, NULL, NULL),
(37, 'Aliya Roberts', 'brianne88@gmail.com', '0123456789', '546 Joany Shoal Apt. 467\nPacochaland, MI 28747-2577', 1, NULL, NULL),
(38, 'Sydnee Fadel', 'javon.jacobson@zboncak.com', '0123456789', '47105 Kiehn Square Apt. 409\nNew Shaynaberg, WA 32032-7046', 1, NULL, NULL),
(39, 'Verona Kutch', 'isobel.torphy@dickinson.com', '0123456789', '36799 Von Route\nSouth Camila, IN 33745-9112', 1, NULL, NULL),
(40, 'Darryl Jast Jr.', 'pietro.stamm@hotmail.com', '0123456789', '39908 Kane Views Suite 491\nLangworthburgh, IN 22580', 1, NULL, NULL),
(41, 'Francesca Eichmann MD', 'marco22@gmail.com', '0123456789', '809 Volkman Valleys\nWest Porterstad, OH 86702', 1, NULL, NULL),
(42, 'Sandra Spinka', 'rachel.russel@beahan.biz', '0123456789', '60329 Kirlin Pines Apt. 929\nDeantown, PA 66374-7105', 1, NULL, NULL),
(43, 'Jaycee McGlynn', 'bernhard.ubaldo@yahoo.com', '0123456789', '282 Margot Crossing\nSouth Leonel, KY 52273', 1, NULL, NULL),
(44, 'Madisen Lebsack', 'darby08@beier.org', '0123456789', '2119 Erin Manors Suite 856\nLake Meaganborough, KY 27849-8488', 1, NULL, NULL),
(45, 'Howard Gerlach', 'roslyn.tremblay@boyle.com', '0123456789', '7791 Mills Greens Suite 908\nLake Jermaintown, MN 53958-6345', 1, NULL, NULL),
(46, 'Dr. Sylvan Hoeger I', 'ukeeling@rau.net', '0123456789', '56117 Cronin Center Suite 180\nLake Olaf, WY 59049', 1, NULL, NULL),
(47, 'Ms. Edyth Considine IV', 'bennie69@gmail.com', '0123456789', '4318 Willms Rue\nFayhaven, CT 72036-8586', 1, NULL, NULL),
(48, 'Cletus Donnelly', 'tbotsford@kunde.com', '0123456789', '5364 Angela Gateway\nPort Fanny, TN 13246-4916', 1, NULL, NULL),
(49, 'Mollie Schulist', 'king.joshua@sporer.com', '0123456789', '43054 Beahan Fork Apt. 954\nNorth Ludiefurt, TN 00136-0237', 1, NULL, NULL),
(50, 'Jayne Orn', 'iankunding@hotmail.com', '0123456789', '94252 Crist Station Suite 170\nEast Edgar, DE 82549-1649', 1, NULL, NULL),
(51, 'Allan Hodkiewicz DDS', 'cassin.audrey@gmail.com', '0123456789', '6023 Esta Shoals Suite 957\nMarksside, VA 52073-7263', 1, NULL, NULL),
(52, 'Miss Delpha Brown Jr.', 'ddaniel@blick.com', '0123456789', '78583 Ivy Meadows Suite 645\nShawnfort, NC 87873', 1, NULL, NULL),
(53, 'Oceane Bednar Sr.', 'kylee66@quigley.com', '0123456789', '605 Beatty Creek\nZemlakview, MD 80869-0120', 1, NULL, NULL),
(54, 'Mitchell Hessel MD', 'jermain32@gmail.com', '0123456789', '5148 Kovacek Gardens\nSouth Aubreeborough, KY 37827', 1, NULL, NULL),
(55, 'Pearline Moore PhD', 'fvandervort@hotmail.com', '0123456789', '7750 Green Estates Apt. 332\nLake Alysaville, WY 68403', 1, NULL, NULL),
(56, 'Omama', 'evalyn29@yahoo.com', '0123456789', '11369 Felicia PassNorth Ernie, MN 89945-8402', 1, NULL, '2022-03-27 21:41:02'),
(57, 'Nguyễn Thành Thức', 'admin@gmail.com', '0883254355', '1336h', 1, '2022-03-27 21:30:00', '2022-03-27 23:04:18'),
(58, 'Michael', 'b@gmail.com', '0123456792', 'home', 0, '2022-03-27 23:05:23', '2022-03-27 23:05:23'),
(59, 'Prof. Maxwell Howell III', 'Maxwell@gmail.com', '013254678', '109 Perry PortRempelburgh, DC 88855', 0, '2022-03-27 23:05:23', '2022-03-27 23:05:23'),
(60, 'Dolly Rice Sr.', 'pouros.elwin@hansen.org', '0123456789', '1612 Gerard Parkways\nLake Braulioburgh, ID 10547', 0, '2022-03-27 23:05:23', '2022-03-27 23:05:23'),
(61, 'Prof. Violette Baumbach MD', 'leopold.heathcote@klein.com', '0123456789', '851 Harrison Parkways Apt. 179\nPort Marielachester, AZ 34483', 0, '2022-03-27 23:05:23', '2022-03-27 23:05:23'),
(62, 'Laney Thompson', 'violet.cassin@simonis.com', '0123456789', '8363 Huels Forest\nMarlenhaven, KY 20642', 0, '2022-03-27 23:05:23', '2022-03-27 23:05:23'),
(63, 'Antoinette Hettinger', 'kattie.reinger@herman.info', '0123456789', '184 Cormier Plains\nGoodwinstad, MO 90721', 0, '2022-03-27 23:05:23', '2022-03-27 23:05:23'),
(64, 'Rosalee Stehr', 'lindsey.feeney@yahoo.com', '0123456789', '2409 Murray Unions Apt. 657\nLake Vilma, UT 08432', 0, '2022-03-27 23:05:23', '2022-03-27 23:05:23'),
(65, 'Marisa Von Sr.', 'nfriesen@gmail.com', '0123456789', '5027 Tiara Ports Apt. 443\nEast Sylvesterberg, AR 01685', 0, '2022-03-27 23:05:23', '2022-03-27 23:05:23'),
(66, 'Dereck Donnelly', 'morton81@hintz.org', '0123456789', '6780 Annamae Stravenue Apt. 677\nWest Bufordburgh, MA 31006', 0, '2022-03-27 23:05:23', '2022-03-27 23:05:23'),
(67, 'Alexandro Prosacco', 'grady.krista@yahoo.com', '0123456789', '386 Kohler Keys Suite 084\nConnellyland, FL 23352-0321', 0, '2022-03-27 23:05:23', '2022-03-27 23:05:23');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1),
(9, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(10, '2022_03_14_033944_create_columns_to_users', 1),
(11, '2022_03_14_034659_create_product_table', 1),
(12, '2022_03_14_035144_create_shop_table', 1),
(13, '2022_03_14_035244_create_customer_table', 1),
(14, '2022_03_14_035424_create_order_table', 1),
(15, '2022_03_14_040005_create_order_detail_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(10) UNSIGNED NOT NULL,
  `order_shop` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_id` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `payment_method` int(11) NOT NULL COMMENT '1: COD, 2: Paypal, 3: GMO',
  `ship_charge` int(11) NOT NULL,
  `tax` int(11) NOT NULL,
  `order_date` datetime NOT NULL,
  `shipment_date` datetime NOT NULL,
  `order_status` int(11) NOT NULL,
  `cancel_date` datetime NOT NULL,
  `note_customer` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `error_code_api` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders_detail`
--

CREATE TABLE `orders_detail` (
  `order_id` int(10) UNSIGNED NOT NULL,
  `detail_line` int(11) NOT NULL,
  `product_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_buy` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `shop_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_price` decimal(11,0) NOT NULL,
  `is_sale` int(11) NOT NULL DEFAULT 1 COMMENT '0: Dừng bán hoặc dừng sản xuất, 1: có hàng bán',
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_image`, `product_price`, `is_sale`, `description`, `created_at`, `updated_at`) VALUES
('A000000021', 'Agustina Hegmann', 'https://via.placeholder.com/100x100.png/0088dd?text=quas', '550978', 1, 'Qui tempore iusto iste ut. Eligendi ea nihil quibusdam fugiat quo voluptatem. Saepe et quod rerum nihil.', '2022-03-28 02:30:55', NULL),
('A000000022', 'Amaya Friesen', 'https://via.placeholder.com/100x100.png/002233?text=ducimus', '340016', 1, 'Praesentium pariatur quia quam doloremque explicabo maiores alias. Repellat in temporibus sint aut nemo aliquid. Est architecto voluptas incidunt voluptas.', '2022-03-28 02:30:56', NULL),
('A000000033', 'Alexandria Daniel', 'https://via.placeholder.com/100x100.png/0000bb?text=alias', '619493', 1, 'Minima et quibusdam in quos est quibusdam. Ex aliquam est magnam. Rerum dolorem aut eaque rerum omnis quibusdam. Molestias minus voluptas eum quia veritatis reprehenderit delectus.', '2022-03-28 02:31:07', NULL),
('B000000006', 'Brennon Runte', 'https://via.placeholder.com/100x100.png/0099ee?text=corrupti', '468952', 1, 'Porro quod ratione commodi quis rerum. Aut optio sapiente rerum delectus. Et qui amet consectetur necessitatibus et voluptate.', '2022-03-28 02:30:40', NULL),
('B000000034', 'Bella Cummings II', 'https://via.placeholder.com/100x100.png/00bb88?text=qui', '850287', 1, 'Sit voluptate animi ullam. Est incidunt ab ex sunt expedita recusandae. Occaecati corporis sed molestiae quia.', '2022-03-28 02:31:08', NULL),
('C000000016', 'Cleta Runte I', 'https://via.placeholder.com/100x100.png/0011dd?text=in', '589803', 1, 'Minus tempora accusamus esse rerum nam. Quibusdam non molestiae molestias natus. Veritatis id labore dolor animi veniam. Eveniet nisi autem deleniti consequuntur provident.', '2022-03-28 02:30:50', NULL),
('C000000051', 'Consuelo Gaylord V', 'https://via.placeholder.com/100x100.png/00eeff?text=recusandae', '293382', 1, 'Accusantium laudantium iusto est labore. Aliquid occaecati dolorem quaerat ducimus fuga voluptate non nisi. Sit ipsum sint praesentium ut. Consequuntur cum et sed laborum sunt.', '2022-03-28 02:31:26', NULL),
('D000000007', 'Devante Bosco', 'https://via.placeholder.com/100x100.png/0077dd?text=velit', '178831', 1, 'Incidunt odit magnam sed esse dolores exercitationem qui. Rerum dolores sit laborum dolores.', '2022-03-28 02:30:41', NULL),
('D000000012', 'Dr. Pete Lueilwitz DDS', 'https://via.placeholder.com/100x100.png/00aa77?text=animi', '567483', 1, 'Sed nihil quo iure aut unde. Ipsum nesciunt aspernatur consequuntur aspernatur consequatur. Consectetur reprehenderit quos laboriosam nihil iure et est dolor. Eos architecto nihil aperiam iste.', '2022-03-28 02:30:46', NULL),
('D000000014', 'Dr. Kristopher Fadel DVM', 'https://via.placeholder.com/100x100.png/005599?text=aspernatur', '701676', 1, 'Odio sit at aut rerum voluptas. Quasi consequatur rem qui eligendi laborum. Culpa voluptatem quibusdam rerum.', '2022-03-28 02:30:48', NULL),
('D000000020', 'Dr. Blake Zulauf DDS', 'https://via.placeholder.com/100x100.png/0044ee?text=ut', '733713', 1, 'Quia accusantium iste reiciendis sapiente. Libero nisi consequatur id nobis pariatur. Aliquam dolorum est sunt tempora ducimus.', '2022-03-28 02:30:54', NULL),
('D000000045', 'Dr. Abbey Lind III', 'https://via.placeholder.com/100x100.png/003388?text=enim', '67452', 1, 'Mollitia sapiente velit omnis. Illo temporibus quia sed aut. Laudantium vitae ut repudiandae. Sunt sunt perspiciatis laudantium commodi minus sed. Non qui harum unde.', '2022-03-28 02:31:20', NULL),
('E000000037', 'Ezequiel Strosin', 'https://via.placeholder.com/100x100.png/001155?text=atque', '630051', 1, 'Beatae maxime qui sed optio. Nulla distinctio exercitationem molestiae vitae ut quia ratione. Consequuntur laboriosam tenetur debitis pariatur voluptatem.', '2022-03-28 02:31:12', NULL),
('F000000023', 'Fletcher Farrell PhD', 'https://via.placeholder.com/100x100.png/00dd77?text=dicta', '445594', 1, 'Unde dolorem quisquam dolor excepturi. Laboriosam quae ut officiis dolores iusto molestiae. Magni rerum ut asperiores error saepe fugiat voluptas. Velit possimus eos sed animi et.', '2022-03-28 02:30:57', NULL),
('F000000036', 'Fabian Stroman Sr.', 'https://via.placeholder.com/100x100.png/000044?text=omnis', '159111', 1, 'Veniam qui molestiae sit quasi. Aspernatur dicta eligendi et similique. Porro repellendus quo omnis asperiores quisquam consequatur autem.', '2022-03-28 02:31:10', NULL),
('G000000025', 'Giles Bechtelar', 'https://via.placeholder.com/100x100.png/003377?text=molestiae', '658517', 1, 'Est et perferendis occaecati quia est et. Rerum aut est consequatur quasi unde.', '2022-03-28 02:30:59', NULL),
('G000000039', 'Gabrielle Dooley', 'https://via.placeholder.com/100x100.png/0066ee?text=optio', '506599', 1, 'Nesciunt quia ipsam sit. Vero illo repellat aut minima. Voluptas suscipit distinctio esse quae. Qui quisquam quisquam et repudiandae. Nesciunt et placeat inventore debitis porro officiis in dicta.', '2022-03-28 02:31:14', NULL),
('I000000008', 'Imelda Pollich', 'https://via.placeholder.com/100x100.png/0099dd?text=consequatur', '201920', 1, 'Quae assumenda non aspernatur. Consequatur qui dolor nisi deserunt est vero necessitatibus. Iusto maiores repellat rerum rem reprehenderit dolorum.', '2022-03-28 02:30:42', NULL),
('J000000013', 'Johan Homenick DVM', 'https://via.placeholder.com/100x100.png/0044ee?text=vel', '819643', 1, 'Ut quam voluptatem eum ut laborum reiciendis. Consequuntur necessitatibus corrupti hic quia. Dolore et dolorum maiores dolorem et corporis velit. Vel unde temporibus ut pariatur assumenda ipsam.', '2022-03-28 02:30:47', NULL),
('J000000031', 'Jayson Koelpin', 'https://via.placeholder.com/100x100.png/00cc11?text=ipsam', '797929', 1, 'Nobis commodi voluptates cum quia soluta. Ea sapiente quod ipsum quas sunt. Non distinctio vel eos. Enim sequi iste corporis consectetur maxime vel.', '2022-03-28 02:31:05', NULL),
('L000000005', 'Laron Altenwerth', 'https://via.placeholder.com/100x100.png/00cc11?text=modi', '772028', 1, 'Architecto deleniti ut pariatur consequatur. Nemo non nobis quia soluta fugit velit minima. Minus fuga quam nam optio alias. Corporis fuga quis quos quaerat occaecati est quas.', '2022-03-28 02:30:39', NULL),
('L000000018', 'Lemuel Roberts', 'https://via.placeholder.com/100x100.png/0066cc?text=voluptate', '839012', 1, 'Architecto et reiciendis quam et. Qui aut modi quis enim illum velit ratione eius. Ut animi ut et tempore. Eum ipsum molestiae perspiciatis ut.', '2022-03-28 02:30:52', NULL),
('M000000004', 'Margarett Keebler II', 'https://via.placeholder.com/100x100.png/0088cc?text=repellat', '503697', 1, 'Accusamus est nulla nam suscipit incidunt sit. Aut aut maiores nisi porro molestiae quisquam. Voluptas eveniet quod dicta quia praesentium et.', '2022-03-28 02:30:38', NULL),
('M000000010', 'Mr. Gaylord Smitham', 'https://via.placeholder.com/100x100.png/00ee66?text=qui', '156819', 1, 'Et et dolores consequuntur consectetur voluptatem harum. In tempora et perferendis dicta dolorem commodi. Inventore voluptas veniam saepe et.', '2022-03-28 02:30:44', NULL),
('M000000015', 'Margarette Koelpin', 'https://via.placeholder.com/100x100.png/0088ff?text=similique', '777064', 1, 'Totam quis cupiditate dolor non ex quia animi. Aperiam incidunt autem est et est nulla. Tempore temporibus cumque ad distinctio et odit. Corrupti quos voluptatem nihil est ipsam.', '2022-03-28 02:30:49', NULL),
('M000000026', 'Mrs. Kaela Wolf', 'https://via.placeholder.com/100x100.png/0044aa?text=veritatis', '544271', 1, 'Voluptatum saepe placeat non sint dolorem voluptates. Minima temporibus molestias vel exercitationem. Error dignissimos eos qui et aut accusantium itaque assumenda.', '2022-03-28 02:31:00', NULL),
('M000000027', 'Mr. Luis Hackett', 'https://via.placeholder.com/100x100.png/00eecc?text=qui', '538732', 1, 'Harum debitis minus ad dolorum asperiores error. Et eligendi itaque animi ea dicta. Minima excepturi nam possimus velit officiis delectus perspiciatis.', '2022-03-28 02:31:01', NULL),
('M000000028', 'Mr. Graham Armstrong', 'https://via.placeholder.com/100x100.png/0088ff?text=labore', '38371', 1, 'Quidem similique et temporibus. Ipsa repudiandae exercitationem ut nihil dolorum nemo dolorum. Sed cumque repellat recusandae maiores nemo magnam autem repellendus.', '2022-03-28 02:31:02', NULL),
('M000000030', 'Mr. Devonte Russel', 'https://via.placeholder.com/100x100.png/009999?text=architecto', '829892', 1, 'Accusantium vel molestiae qui quam repellendus. Fugiat ut est molestiae sed error in.', '2022-03-28 02:31:04', NULL),
('M000000040', 'Marvin Fahey', 'https://via.placeholder.com/100x100.png/00cc44?text=eum', '208019', 1, 'Ipsa in commodi sint accusantium ipsum quia. Autem laborum quis illum sit. Quam eum perspiciatis veritatis. Nostrum quas facere veniam sint consequuntur.', '2022-03-28 02:31:15', NULL),
('M000000044', 'Miracle Nikolaus', 'https://via.placeholder.com/100x100.png/00dd11?text=ipsa', '98397', 1, 'Nobis consequatur consectetur rerum sed dicta. Dolorem consequatur doloribus assumenda qui debitis.', '2022-03-28 02:31:19', NULL),
('M000000047', 'Mr. Jess Kozey', 'https://via.placeholder.com/100x100.png/006699?text=itaque', '479990', 1, 'Odio eius facilis dignissimos nisi. Sequi occaecati ab hic facere et est corporis cum. Et debitis sint velit ut amet doloremque. Est vero quis commodi a facere assumenda a eaque.', '2022-03-28 02:31:22', NULL),
('M000000049', 'Mr. Micheal Murphy I', 'https://via.placeholder.com/100x100.png/00aacc?text=eum', '42549', 1, 'Eos doloremque nesciunt similique necessitatibus est enim qui. Rerum nostrum minus reprehenderit maxime. Blanditiis voluptas doloribus voluptatem ducimus similique odit dolores cupiditate.', '2022-03-28 02:31:24', NULL),
('N000000043', 'Nannie Weber', 'https://via.placeholder.com/100x100.png/00aa55?text=cupiditate', '868078', 1, 'In quod omnis explicabo eum blanditiis explicabo nam. Ducimus assumenda nisi perferendis ratione nostrum consequuntur. Quam et quos veniam est quo.', '2022-03-28 02:31:18', NULL),
('O000000041', 'Ona Mante', 'https://via.placeholder.com/100x100.png/00bb77?text=quidem', '320493', 1, 'Voluptas reiciendis et minima harum. Iure itaque distinctio fugiat soluta consectetur quis.', '2022-03-28 02:31:16', NULL),
('P000000009', 'Prof. Ewald Anderson', 'https://via.placeholder.com/100x100.png/0099dd?text=qui', '407859', 1, 'Laborum excepturi facilis ea aliquid dolor. Quod iusto neque tempore officiis reprehenderit omnis. Sit fugit architecto magnam autem quidem.', '2022-03-28 02:30:43', NULL),
('P000000011', 'Prof. Ansel Effertz', 'https://via.placeholder.com/100x100.png/0033cc?text=ut', '809275', 1, 'Consequatur voluptatem qui ab. Et tempora omnis praesentium eaque quibusdam et saepe. Commodi non sint non recusandae. Ipsum deserunt officia magni voluptatem consectetur tempora est.', '2022-03-28 02:30:45', NULL),
('P000000017', 'Prof. Braeden Fritsch', 'https://via.placeholder.com/100x100.png/0033aa?text=expedita', '160896', 1, 'Laborum voluptatem numquam et sint cupiditate est esse. Dolor vel id aut dolorum fuga impedit. Dolor inventore est facilis inventore fugit et dolore rerum. Alias dolores saepe et nisi.', '2022-03-28 02:30:51', NULL),
('P000000024', 'Petra D\'Amore', 'https://via.placeholder.com/100x100.png/002233?text=sunt', '715347', 1, 'Consectetur quia quia quia ut quo a. Enim officiis qui odio sunt aut. Aut dolores molestias esse laboriosam officia et.', '2022-03-28 02:30:58', NULL),
('P000000035', 'Prof. Demond Graham', 'https://via.placeholder.com/100x100.png/00ff66?text=laborum', '637500', 1, 'Voluptatum praesentium iste laboriosam sunt deserunt. Voluptates iste est ut a perspiciatis porro. Hic et temporibus sint incidunt explicabo odit dolore.', '2022-03-28 02:31:09', NULL),
('P000000042', 'Prof. Jaydon Rice MD', 'https://via.placeholder.com/100x100.png/00bbdd?text=repellendus', '469617', 1, 'Odio corporis dolores tenetur sit sit hic ratione. Qui molestiae dolor occaecati ut. Aut sed at exercitationem consequatur quibusdam maxime.', '2022-03-28 02:31:17', NULL),
('P000000048', 'Prof. Sarai Schimmel', 'https://via.placeholder.com/100x100.png/006655?text=consequatur', '375828', 1, 'Sed optio architecto libero omnis voluptatem. Et aspernatur et fugiat. Dolores maxime odio rerum beatae quas consequatur praesentium.', '2022-03-28 02:31:23', NULL),
('R000000029', 'Roy Swift', 'https://via.placeholder.com/100x100.png/006677?text=nobis', '750548', 1, 'Minus ut reprehenderit eveniet at commodi explicabo provident. Eum hic neque libero omnis modi. Eveniet enim laboriosam voluptate numquam harum. Velit sint dolores sed possimus ut sit labore.', '2022-03-28 02:31:03', NULL),
('R000000038', 'Rozella Berge MD', 'https://via.placeholder.com/100x100.png/001111?text=quasi', '105851', 1, 'Velit expedita maiores consequatur ex neque cum cupiditate. Eius omnis provident explicabo nihil necessitatibus ut eum. Accusantium iure blanditiis non sunt.', '2022-03-28 02:31:13', NULL),
('S000000001', 'Sản phẩm 1', '2022-03-24-03-52-55-face5.jpg', '124342', 1, 'rưgrthe', '2022-03-23 20:24:02', '2022-03-23 20:52:55'),
('S000000002', 'Sản phẩm test 2', '2022-03-25-04-39-16-2022-02-26 (7).png', '120000', 1, 'mota', '2022-03-23 20:57:55', '2022-03-24 21:39:16'),
('S000000003', 'Sarai Altenwerth MD', 'https://via.placeholder.com/100x100.png/007733?text=magni', '41613', 1, 'Qui sapiente voluptas excepturi saepe qui nihil molestiae. Fugiat aut dolores laboriosam quam. Quibusdam repudiandae asperiores fuga voluptatem debitis atque.', '2022-03-28 02:30:37', NULL),
('S000000046', 'Sandrine Nolan II', 'https://via.placeholder.com/100x100.png/0077ff?text=qui', '731038', 1, 'Incidunt est ab ipsam nemo dignissimos voluptatem. Repellendus in voluptatem ut quisquam voluptatem quaerat. Consequatur dolor enim fuga.', '2022-03-28 02:31:21', NULL),
('S000000050', 'Shanna Heaney DVM', 'https://via.placeholder.com/100x100.png/004455?text=deserunt', '152187', 1, 'Assumenda minus dolor magni quibusdam possimus iste. Modi vitae ipsa qui accusamus in. Enim recusandae molestiae est.', '2022-03-28 02:31:25', NULL),
('V000000019', 'Vincent Bradtke V', 'https://via.placeholder.com/100x100.png/00bb33?text=voluptas', '22597', 1, 'Odit qui mollitia debitis voluptate voluptatem totam. Beatae sed et voluptas sed eligendi similique. Nobis dolores est sit voluptates autem ut.', '2022-03-28 02:30:53', NULL),
('Y000000032', 'Yasmeen Runte', 'https://via.placeholder.com/100x100.png/005533?text=eius', '338914', 1, 'Hic consequatur necessitatibus et autem cumque voluptas. Eligendi esse et optio facere numquam. Omnis est qui harum. Quia itaque iusto est et itaque rem quis.', '2022-03-28 02:31:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `shops`
--

CREATE TABLE `shops` (
  `shop_id` int(10) UNSIGNED NOT NULL,
  `shop_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_login_ip` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_login_at` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `group_role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_delete` int(11) NOT NULL DEFAULT 0 COMMENT '0: bình thường, 1: đã xóa',
  `is_active` int(11) NOT NULL DEFAULT 1 COMMENT '0: Không hoạt động, 1: hoạt động',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `last_login_ip`, `last_login_at`, `group_role`, `is_delete`, `is_active`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Nguyễn văn admin', 'admin@gmail.com', NULL, '$2y$10$g/sjyhymQCvGbkqQuY6tZONFw6XmknfCDv8tTfQZbTkxuExfbwm0C', NULL, NULL, '', 0, 1, NULL, NULL, '2022-03-22 21:07:39'),
(2, 'Nguyễn Văn B1', 'b.nguyen@gmail.com', NULL, '$2y$10$lZ2lzaG7ZCPdQtGa3J.VleZjkrbBhy8R6SmT6CFoaK1g/gIK.AvxO', NULL, NULL, 'Admin', 0, 0, NULL, '2022-03-22 20:07:53', '2022-03-22 20:08:07'),
(3, 'Nguyễn văn a12', 'a12@gmail.com', NULL, '$2y$10$TA9/9pxB2OqO41w8f/XrEOKmlKZeeqfKFFnlZKGiuZEaIN4SkWYmK', NULL, NULL, 'Admin', 0, 0, NULL, '2022-03-23 18:02:43', '2022-03-23 18:42:41'),
(4, 'Nguyễn văn admin', 'nguyen.thuc.rcvn2012@gmail.com', NULL, '$2y$10$XVnaOv1AfEErYgW/5j07Z.CO22riIccH6pav5Gopscf0JblJEN5rC', NULL, NULL, 'Admin', 0, 1, NULL, '2022-03-23 18:20:51', '2022-03-23 19:27:29'),
(5, 'admin', 'admin@admin.com', NULL, '$2y$10$3M4/7SQJBL1CS98UtnP1FutC2gLmDMHqVWItDy4JcNiO/hSVK1zqy', NULL, NULL, 'Nhân viên', 0, 1, NULL, '2022-03-23 18:43:32', '2022-03-23 19:27:23'),
(6, 'admin', 'admin@gmail.com', NULL, '$2y$10$EPIbX2ZpOl5Zp5WtnWpvlOHlLDZD7XndlxGCF6UCdi2srfQgIovQu', NULL, NULL, 'Admin', 0, 1, NULL, '2022-03-23 18:44:02', '2022-03-23 19:27:20'),
(7, 'Nguyễn văn a', 'a@gmail.com', NULL, '$2y$10$BkP0jEI/dlysj62efrmahegKcwtywZriVNTY8MSg.DbEcbuU6hcU6', NULL, NULL, 'Admin', 0, 1, NULL, '2022-03-24 01:09:04', '2022-03-24 01:09:04'),
(8, 'test', 'test@gmail.com', NULL, '$2y$10$A9P4qx3ujor7z09AGhasnelR6ce6XaNBplYoW8CgzDmHBn4CtQ8qO', NULL, NULL, 'Nhân viên', 0, 0, NULL, '2022-03-24 01:13:24', '2022-03-24 01:14:44'),
(9, 'test', 'test@gmail.com', NULL, '$2y$10$Yzo8HQyGvn4CfV7XoGqEx.IdF6gobtKDs26x0S40AaiB5aWgnsZfG', NULL, NULL, 'Admin', 0, 0, NULL, '2022-03-24 01:15:06', '2022-03-28 21:44:05'),
(10, 'Nguyễn văn a', 'a1@gmail.com', NULL, '$2y$10$qokFPSGoop1VSr3gY1MGEeEe6tm8hEYFao73WmvcR.fQyNDU/FfPq', NULL, NULL, 'Admin', 0, 1, NULL, '2022-03-24 01:19:52', '2022-03-24 01:19:52'),
(11, 'Nguyễn văn a2', 'a2@gmail.com', NULL, '$2y$10$DdiY0g55CLQLOhV1aYeakuXtOk4A5RVffXoBHs6PGX7T0swQMdIXK', NULL, NULL, 'Admin', 0, 1, NULL, '2022-03-24 01:20:20', '2022-03-24 01:20:20'),
(12, 'Nguyễn văn a3', 'a3@gmail.com', NULL, '$2y$10$.kuHMzCSH5yjp232UMwYKeihlxDPzd1deds.PNYxGFgpPkqjpIg7e', NULL, NULL, 'Nhân viên', 0, 1, NULL, '2022-03-24 01:20:52', '2022-03-24 01:20:52'),
(13, 'Nguyễn văn a4', 'a4@gmail.com', NULL, '$2y$10$ShllAPPY.MysxjtHaIKluujbb85wd2u.cNRqEHpVIERamGny8EVfS', NULL, NULL, 'Nhân viên', 0, 1, NULL, '2022-03-24 01:21:09', '2022-03-24 01:21:09'),
(14, 'Mrs. Makenzie Hauck V', 'raegan.oconner@jacobson.com', NULL, '4*q9u~KuZ', NULL, NULL, 'Accusamus qui et in enim neque et fuga iusto laboriosam.', 0, 1, NULL, NULL, NULL),
(15, 'Dr. Hallie Towne', 'xstehr@gmail.com', NULL, '\"[4;Ucp4z(Yh', NULL, NULL, 'Id sint enim eligendi perferendis omnis adipisci sint voluptates.', 0, 1, NULL, NULL, NULL),
(16, 'Prof. Dexter Muller', 'mosciski.raphaelle@klocko.com', NULL, '*Qh\"2zg*i07', NULL, NULL, 'Nisi ea et quam cum omnis nihil deserunt beatae provident nihil eum.', 0, 1, NULL, NULL, NULL),
(17, 'Marco Donnelly', 'angelo57@gmail.com', NULL, 'O2|Tq0_*Q\"D', NULL, NULL, 'Voluptatem nulla ut exercitationem eum nostrum ipsum qui aperiam unde.', 0, 1, NULL, NULL, NULL),
(18, 'Ethel Dibbert', 'damore.belle@gmail.com', NULL, 'Y&X{Ju(_w55', NULL, NULL, 'Odio eos sunt est quisquam iste sed repudiandae nesciunt vel.', 0, 1, NULL, NULL, NULL),
(19, 'Keira Kuphal Jr.', 'armstrong.mertie@yahoo.com', NULL, '/$><HZO', NULL, NULL, 'Maiores corporis totam fugit quisquam omnis est.', 0, 1, NULL, NULL, NULL),
(20, 'Bella Stark Jr.', 'upagac@gmail.com', NULL, 'b.QM$TX', NULL, NULL, 'Culpa qui in saepe ut nihil nesciunt.', 0, 1, NULL, NULL, NULL),
(21, 'Dr. Ed Ziemann', 'lucienne02@schultz.com', NULL, 'isFNlvimg1@r:Urj)ut', NULL, NULL, 'Quisquam vel quas possimus quas nobis et.', 0, 1, NULL, NULL, NULL),
(22, 'Mr. Soledad Schuster', 'beahan.osvaldo@schuster.com', NULL, '6n+*9X~N9_c=]', NULL, NULL, 'Possimus aut quia inventore eaque voluptatum quod tempore inventore architecto ullam rem consectetur.', 0, 1, NULL, NULL, NULL),
(23, 'Alejandrin Zieme', 'esmeralda.howell@gmail.com', NULL, '\'}jt`f0fo', NULL, NULL, 'Totam assumenda sit est saepe asperiores aliquam occaecati cumque non quod non nam.', 0, 1, NULL, NULL, NULL),
(24, 'Vivianne Padberg', 'dickens.aric@gmail.com', NULL, '@5^^4]vuYw6ru`_C3-~', NULL, NULL, 'Ad eos voluptatum ratione exercitationem inventore sit ipsam.', 0, 1, NULL, NULL, NULL),
(25, 'Prof. Felicita Abshire III', 'quentin.heathcote@yahoo.com', NULL, '3O\\8km:Q8I*wAH8xC', NULL, NULL, 'Ut ullam aut quaerat velit sequi nulla quam quo aliquid enim fuga fugit.', 0, 1, NULL, NULL, NULL),
(26, 'Al Considine', 'karl.champlin@yahoo.com', NULL, '1l@58=]u|L', NULL, NULL, 'Cum sunt nostrum qui eum commodi nam alias.', 0, 1, NULL, NULL, NULL),
(27, 'Mr. Grayson Grady', 'santino.wolff@dooley.com', NULL, 'Uyb$2DB', NULL, NULL, 'Aliquam nam facilis placeat minima velit iure ducimus rerum aperiam ab sit aut voluptatum officia.', 0, 1, NULL, NULL, NULL),
(28, 'Prof. Lottie Heaney', 'pfannerstill.alek@hilpert.org', NULL, 's\\fu4E:_gqc`', NULL, NULL, 'Aut officiis hic veniam ab non qui aut labore maiores voluptas quam fugiat doloremque.', 0, 1, NULL, NULL, NULL),
(29, 'Edwin Bernhard', 'satterfield.nayeli@ferry.com', NULL, 'u0ep?pAt]=zRr', NULL, NULL, 'Fugit incidunt accusantium aut enim dicta minus explicabo et quod ratione tenetur.', 0, 1, NULL, NULL, NULL),
(30, 'Mr. Jadon Smith IV', 'kwatsica@hotmail.com', NULL, '9E^RVh~+Y.&8', NULL, NULL, 'Rerum ut eligendi distinctio sapiente suscipit est debitis error velit qui.', 0, 1, NULL, NULL, NULL),
(31, 'Jerrell Ruecker', 'minerva.effertz@gmail.com', NULL, '<rb<JK*3=/X#5JBx4E.e', NULL, NULL, 'Quod asperiores pariatur et quos illum aperiam odit sit exercitationem sint voluptatem.', 0, 1, NULL, NULL, NULL),
(32, 'Alanna Tromp', 'nico10@kessler.com', NULL, 'fR6d5n73Ar$', NULL, NULL, 'Est eveniet sint ducimus tempora iusto soluta eaque vitae ut sed fuga consequatur quam.', 0, 1, NULL, NULL, NULL),
(33, 'Devan Leannon DDS', 'mkoelpin@lindgren.info', NULL, '|;-bQ&Qn*\\!6B_;vfs', NULL, NULL, 'Inventore sit sint pariatur ipsa enim consequatur eius animi incidunt reprehenderit consequatur quasi.', 0, 1, NULL, NULL, NULL),
(34, 'Dr. Akeem Jacobi', 'davion.stoltenberg@hotmail.com', NULL, 'PxF5MB&8n%6&_]\'w\'9\"', NULL, NULL, 'Repellat adipisci eum reiciendis totam expedita voluptatem veniam quas quod consequatur cupiditate.', 0, 1, NULL, NULL, NULL),
(35, 'Cassandre Fritsch', 'samantha.considine@hotmail.com', NULL, '{m5*mi\\nP?iu', NULL, NULL, 'Error error qui at expedita non at.', 0, 1, NULL, NULL, NULL),
(36, 'Kip Flatley', 'zdurgan@schimmel.net', NULL, '*12s-&abPf>lGnR', NULL, NULL, 'Numquam praesentium qui voluptas nemo quidem molestias.', 0, 1, NULL, NULL, NULL),
(37, 'Myrtice Macejkovic', 'abagail.parker@predovic.com', NULL, 'FV$lH~lA}f\\E', NULL, NULL, 'Magnam quam dignissimos non dolorem qui ut est.', 0, 1, NULL, NULL, NULL),
(38, 'Anne Konopelski III', 'bweber@gmail.com', NULL, '>%Z.JYFa', NULL, NULL, 'Dolores unde pariatur consectetur eum commodi ut aut nobis enim magnam laboriosam dolores.', 0, 1, NULL, NULL, NULL),
(39, 'Lillian Gleason', 'uswift@jast.com', NULL, 'o$i}puJg/FV', NULL, NULL, 'Magni similique rerum quae facilis id quae velit beatae accusantium dolor officiis.', 0, 1, NULL, NULL, NULL),
(40, 'Deja Hahn', 'marvin.cletus@graham.biz', NULL, 'D0njl>', NULL, NULL, 'Nam et eaque doloremque autem quasi labore non qui culpa occaecati sunt.', 0, 1, NULL, NULL, NULL),
(41, 'Prof. Jaclyn Armstrong', 'bechtelar.esta@hotmail.com', NULL, 'D&D2C`WDe`', NULL, NULL, 'Temporibus facere dolores perferendis quos sed adipisci quasi dignissimos vero nulla vitae aut omnis pariatur.', 0, 1, NULL, NULL, NULL),
(42, 'Dr. Adela Jaskolski', 'rchamplin@morissette.com', NULL, 'hzhb?62-gEi:ZJ*j', NULL, NULL, 'Iusto sunt nam pariatur repudiandae eum sit iure sed.', 0, 1, NULL, NULL, NULL),
(43, 'Genoveva Lang', 'waelchi.doug@yahoo.com', NULL, 'cE~akn:fIEh`5$]!', NULL, NULL, 'A molestiae ullam ex molestiae adipisci assumenda odio ea animi ducimus placeat qui.', 0, 1, NULL, NULL, NULL),
(44, 'Krystal Kunde III', 'alphonso58@schulist.biz', NULL, 'i@rxZH', NULL, NULL, 'Amet qui officiis ea et sit asperiores vero iure pariatur.', 0, 1, NULL, NULL, NULL),
(45, 'Dr. Carmela Collins V', 'christine68@yahoo.com', NULL, 'C^~ywH7oiV', NULL, NULL, 'Pariatur sed dolorem facere provident consequatur praesentium aut.', 0, 0, NULL, NULL, '2022-03-24 21:35:49'),
(46, 'Gerry Prohaska', 'lavon.muller@reichert.com', NULL, '+WR9pe!F\\&s_', NULL, NULL, 'Eligendi nobis vero quisquam labore fugit provident eius perspiciatis deleniti atque.', 0, 1, NULL, NULL, NULL),
(47, 'Jadon Lebsack', 'rae.runolfsdottir@gmail.com', NULL, 'lBVyB_%Rs,nx?wV=R]!K', NULL, NULL, 'Laudantium quia nulla sint minus consectetur adipisci qui sit quisquam.', 0, 0, NULL, NULL, '2022-03-24 23:09:51'),
(48, 'Sister Marvin', 'murray.jessyca@hotmail.com', NULL, '[WD`nY(~d~0Gl>EiW9', NULL, NULL, 'Beatae veniam velit quia est ea accusantium ut.', 0, 1, NULL, NULL, NULL),
(49, 'Carlo Leuschke', 'elmo23@kuhn.org', NULL, '7qJ0Sk', NULL, NULL, 'Aut exercitationem in dolorum eligendi reprehenderit quibusdam amet illum tempore nobis.', 0, 1, NULL, NULL, NULL),
(50, 'Glennie Turner', 'kristina41@dach.com', NULL, 'T%Bdv*D3WIp|I+(WN', NULL, NULL, 'Consequatur fuga quo sint voluptas numquam doloremque perspiciatis beatae et dolores facere.', 0, 1, NULL, NULL, NULL),
(51, 'Carmelo Feeney', 'maddison.pouros@stamm.com', NULL, '7zbLb)]YHx>jZ5&', NULL, NULL, 'Natus laboriosam molestiae totam distinctio aut repellendus distinctio labore fugit totam dicta nam.', 0, 1, NULL, NULL, NULL),
(52, 'Ludie Kulas DVM', 'becker.justus@bartoletti.net', NULL, 'f}6{-sGn$`>', NULL, NULL, 'Perferendis expedita omnis quasi quia voluptatem aperiam pariatur ab tempore aut et omnis animi.', 0, 1, NULL, NULL, NULL),
(53, 'Dr. Ulises Mayert Sr.', 'acummerata@gerlach.org', NULL, 'AXYf3E`nIIp', NULL, NULL, 'Ad rerum eaque asperiores rerum cupiditate autem ipsa deleniti.', 0, 1, NULL, NULL, NULL),
(54, 'Jaylin Hahn', 'myrtice.howell@hilpert.biz', NULL, 'F-,8wX]F_A($1', NULL, NULL, 'Voluptatem aut in dolorem laudantium sit qui esse incidunt.', 0, 1, NULL, NULL, NULL),
(55, 'Kayden Wisozk', 'smitham.kory@skiles.org', NULL, '>Pk_=b+or;', NULL, NULL, 'Sequi omnis corrupti molestias quo iste facere aut.', 0, 1, NULL, NULL, NULL),
(56, 'Dr. Jean Lind', 'portiz@stiedemann.com', NULL, '$xxYO#o[R]9tCwdCbnV', NULL, NULL, 'Non quia officia ratione deserunt quis rerum numquam sit qui iste ea dignissimos quasi.', 0, 1, NULL, NULL, NULL),
(57, 'Mr. Darwin Swaniawski II', 'everett81@hotmail.com', NULL, '6d{91,sTf7N7F.g6', NULL, NULL, 'Magni et delectus aut id excepturi voluptatem ad optio.', 1, 1, NULL, NULL, '2022-03-24 23:04:12'),
(58, 'Miss Ines Lowe IV', 'nschulist@gmail.com', NULL, 'T;MyAo$^r18@N\\Ruu$', NULL, NULL, 'Inventore ipsa reiciendis aut est non facilis saepe provident error culpa nam voluptas.', 0, 1, NULL, NULL, NULL),
(59, 'Dr. Vito Robel I', 'ernser.wilfrid@hotmail.com', NULL, ';PPif]h%@LZH', NULL, NULL, 'Rerum sed qui inventore unde voluptatem nulla quod accusantium veritatis consequatur animi inventore.', 0, 1, NULL, NULL, NULL),
(60, 'Gretchen Hintz', 'luz.rodriguez@emard.com', NULL, '4y6fx_N\"qfC^', NULL, NULL, 'Admin', 0, 1, NULL, NULL, '2022-03-28 02:22:49'),
(61, 'Prof. Marcellus Leffler', 'lemke.brant@mosciski.info', NULL, 'm&43Q_kan', NULL, NULL, 'Dolor adipisci delectus nesciunt sint tempora tempore adipisci accusantium et et libero pariatur.', 0, 1, NULL, NULL, NULL),
(62, 'Adelia Kautzer', 'nrice@gmail.com', NULL, 'p1[A!sU\'d', NULL, NULL, 'Qui nemo minus dicta dignissimos est quia nam omnis dignissimos.', 0, 1, NULL, NULL, NULL),
(63, 'Maybell Kuphal', 'klocko.bill@hotmail.com', NULL, 'Y$M<=n-y/l18Vd@t', NULL, NULL, 'Doloribus magni recusandae non debitis debitis sit fugiat soluta impedit nesciunt sed.', 0, 1, NULL, NULL, NULL),
(64, 'Cleta Witting', 'felipa66@emard.com', NULL, '!zJ9Yw)%uU}-C>8', NULL, NULL, 'Hic impedit rem ad eos autem assumenda ipsam ut aut consequatur voluptatum.', 0, 1, NULL, NULL, NULL),
(65, 'Rylee Cronin', 'gregorio.kautzer@hotmail.com', NULL, 'Bor$?EiyaEoq+s8D', NULL, NULL, 'Admin', 1, 1, NULL, NULL, '2022-03-24 21:38:47'),
(66, 'Dr. Rusty Hill', 'ubeatty@yahoo.com', NULL, 't7p$UBuhgyIt@sF', NULL, NULL, 'Et voluptas fugiat voluptates earum atque aut voluptatem.', 0, 1, NULL, NULL, NULL),
(67, 'Ms. Misty Mertz', 'grimes.jaylen@deckow.com', NULL, 'FH7&C+theq', NULL, NULL, 'Voluptatum eos error molestiae vitae eos et.', 0, 1, NULL, NULL, NULL),
(68, 'Amely Hirthe', 'harber.dana@mante.com', NULL, '~Chf5rS!;d', NULL, NULL, 'Voluptatem totam necessitatibus optio ut voluptas reprehenderit commodi autem blanditiis temporibus veritatis est.', 0, 1, NULL, NULL, NULL),
(69, 'Prof. Yasmeen Sanford DVM', 'evert18@yahoo.com', NULL, 'h4$V\'\\!!$/YJ~4', NULL, NULL, 'Ullam corporis ipsam deserunt enim nihil recusandae cum et repudiandae praesentium.', 0, 1, NULL, NULL, NULL),
(70, 'Crawford McGlynn', 'ckassulke@bartoletti.com', NULL, '7SN>GN~ayg\"4,A=q,', NULL, NULL, 'Nesciunt ipsam eum ut mollitia ut beatae velit voluptas et.', 1, 1, NULL, NULL, '2022-03-24 21:34:56'),
(71, 'Shad Bode I', 'lawrence.sporer@yahoo.com', NULL, ')0aPcd@Q.Ot', NULL, NULL, 'Et adipisci ea tempora qui qui officiis.', 0, 1, NULL, NULL, NULL),
(72, 'Mohammad Kuhicsadffádfádfádfádfqẻagvaẻhgvsaebh5èbhjw5 nbưevteăcrvtbưe 6uhevbt', 'hamill.linnie@lueilwitz.info', NULL, '#,d3H3}<4kLNYnoN', NULL, NULL, 'Admin', 0, 0, NULL, NULL, '2022-03-29 01:33:25'),
(73, 'Cecil Pfannerstill', 'esanford@hotmail.com', NULL, 'lqs#<qqx9#bt\'K~0', NULL, NULL, 'Est voluptatem reprehenderit cumque quos beatae nihil quisquam explicabo.', 1, 1, NULL, NULL, '2022-03-24 21:39:59'),
(74, 'admin@gmail.com', 'hamill.linnie@caothang.edu.vn', NULL, '$2y$10$PcfvXkG6gMyERsLptfVu7.9VBilfzQVTbtMmOPX9bf01t9mG.HAqe', NULL, NULL, 'Admin', 1, 0, NULL, '2022-03-24 21:36:55', '2022-03-24 21:38:09'),
(75, 'Phú IT testing A B', 'trminhphu79@gmail.com', NULL, '$2y$10$oJNEpRxXG/4DFOLiT0tV1OGLefxhMhU5oV1P0loAWVS02I48XLSEa', NULL, NULL, 'Admin', 0, 0, NULL, '2022-03-29 01:32:57', '2022-03-29 01:33:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`),
  ADD UNIQUE KEY `customers_customer_id_unique` (`customer_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD UNIQUE KEY `orders_order_id_unique` (`order_id`);

--
-- Indexes for table `orders_detail`
--
ALTER TABLE `orders_detail`
  ADD PRIMARY KEY (`order_id`),
  ADD UNIQUE KEY `orders_detail_order_id_unique` (`order_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `products_product_id_unique` (`product_id`);

--
-- Indexes for table `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`shop_id`),
  ADD UNIQUE KEY `shops_shop_id_unique` (`shop_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders_detail`
--
ALTER TABLE `orders_detail`
  MODIFY `order_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `shop_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
