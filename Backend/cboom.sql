-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-10-2023 a las 23:45:27
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cboom`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cities`
--

CREATE TABLE `cities` (
  `id_city` int(10) UNSIGNED NOT NULL,
  `id_region` int(10) UNSIGNED NOT NULL,
  `id_country` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cities`
--

INSERT INTO `cities` (`id_city`, `id_region`, `id_country`, `name`) VALUES
(1, 1, 1, 'Arica'),
(2, 1, 1, 'Camarones'),
(3, 1, 1, 'Putre'),
(4, 1, 1, 'General Lagos'),
(5, 2, 1, 'Iquique'),
(6, 2, 1, 'Alto Hospicio'),
(7, 2, 1, 'Pozo Almonte'),
(8, 2, 1, 'Camiña'),
(9, 2, 1, 'Colchane'),
(10, 2, 1, 'Huara'),
(11, 2, 1, 'Pica'),
(12, 3, 1, 'Antofagasta'),
(13, 3, 1, 'Mejillones'),
(14, 3, 1, 'Sierra Gorda'),
(15, 3, 1, 'Taltal'),
(16, 3, 1, 'Calama'),
(17, 3, 1, 'Ollagüe'),
(18, 3, 1, 'San Pedro de Atacama'),
(19, 3, 1, 'Tocopilla'),
(20, 3, 1, 'María Elena'),
(21, 4, 1, 'Copiapó'),
(22, 4, 1, 'Caldera'),
(23, 4, 1, 'Tierra Amarilla'),
(24, 4, 1, 'Chañaral'),
(25, 4, 1, 'Diego de Almagro'),
(26, 4, 1, 'Vallenar'),
(27, 4, 1, 'Alto del Carmen'),
(28, 4, 1, 'Freirina'),
(29, 4, 1, 'Huasco'),
(30, 5, 1, 'La Serena'),
(31, 5, 1, 'Coquimbo'),
(32, 5, 1, 'Andacollo'),
(33, 5, 1, 'La Higuera'),
(34, 5, 1, 'Paihuano'),
(35, 5, 1, 'Vicuña'),
(36, 5, 1, 'Illapel'),
(37, 5, 1, 'Canela'),
(38, 5, 1, 'Los Vilos'),
(39, 5, 1, 'Salamanca'),
(40, 5, 1, 'Ovalle'),
(41, 5, 1, 'Combarbalá'),
(42, 5, 1, 'Monte Patria'),
(43, 5, 1, 'Punitaqui'),
(44, 5, 1, 'Río Hurtado'),
(45, 6, 1, 'Valparaíso'),
(46, 6, 1, 'Casablanca'),
(47, 6, 1, 'Concón'),
(48, 6, 1, 'Juan Fernández'),
(49, 6, 1, 'Puchuncaví'),
(50, 6, 1, 'Quintero'),
(51, 6, 1, 'Viña del Mar'),
(52, 6, 1, 'Isla de Pascua'),
(53, 6, 1, 'Los Andes'),
(54, 6, 1, 'Calle Larga'),
(55, 6, 1, 'Rinconada'),
(56, 6, 1, 'San Esteban'),
(57, 6, 1, 'La Ligua'),
(58, 6, 1, 'Cabildo'),
(59, 6, 1, 'Papudo'),
(60, 6, 1, 'Petorca'),
(61, 6, 1, 'Zapallar'),
(62, 6, 1, 'Quillota'),
(63, 6, 1, 'La Calera'),
(64, 6, 1, 'Hijuelas'),
(65, 6, 1, 'La Cruz'),
(66, 6, 1, 'Nogales'),
(67, 6, 1, 'San Antonio'),
(68, 6, 1, 'Algarrobo'),
(69, 6, 1, 'Cartagena'),
(70, 6, 1, 'El Quisco'),
(71, 6, 1, 'El Tabo'),
(72, 6, 1, 'Santo Domingo'),
(73, 6, 1, 'San Felipe'),
(74, 6, 1, 'Catemu'),
(75, 6, 1, 'Llay-Llay'),
(76, 6, 1, 'Panquehue'),
(77, 6, 1, 'Putaendo'),
(78, 6, 1, 'Santa María'),
(79, 6, 1, 'Quilpué'),
(80, 6, 1, 'Limache'),
(81, 6, 1, 'Olmué'),
(82, 6, 1, 'Villa Alemana'),
(83, 8, 1, 'Rancagua'),
(84, 8, 1, 'Codegua'),
(85, 8, 1, 'Coinco'),
(86, 8, 1, 'Coltauco'),
(87, 8, 1, 'Doñihue'),
(88, 8, 1, 'Graneros'),
(89, 8, 1, 'Las Cabras'),
(90, 8, 1, 'Machalí'),
(91, 8, 1, 'Malloa'),
(92, 8, 1, 'Mostazal'),
(93, 8, 1, 'Olivar'),
(94, 8, 1, 'Peumo'),
(95, 8, 1, 'Pichidegua'),
(96, 8, 1, 'Quinta de Tilcoco'),
(97, 8, 1, 'Rengo'),
(98, 8, 1, 'Requínoa'),
(99, 8, 1, 'San Vicente'),
(100, 8, 1, 'Pichilemu'),
(101, 8, 1, 'La Estrella'),
(102, 8, 1, 'Litueche'),
(103, 8, 1, 'Marchihue'),
(104, 8, 1, 'Navidad'),
(105, 8, 1, 'Paredones'),
(106, 8, 1, 'San Fernando'),
(107, 8, 1, 'Chépica'),
(108, 8, 1, 'Chimbarongo'),
(109, 8, 1, 'Lolol'),
(110, 8, 1, 'Nancagua'),
(111, 8, 1, 'Palmilla'),
(112, 8, 1, 'Peralillo'),
(113, 8, 1, 'Placilla'),
(114, 8, 1, 'Pumanque'),
(115, 8, 1, 'Santa Cruz'),
(116, 9, 1, 'Talca'),
(117, 9, 1, 'Constitución'),
(118, 9, 1, 'Curepto'),
(119, 9, 1, 'Empedrado'),
(120, 9, 1, 'Maule'),
(121, 9, 1, 'Pelarco'),
(122, 9, 1, 'Pencahue'),
(123, 9, 1, 'Río Claro'),
(124, 9, 1, 'San Clemente'),
(125, 9, 1, 'San Rafael'),
(126, 9, 1, 'Cauquenes'),
(127, 9, 1, 'Chanco'),
(128, 9, 1, 'Pelluhue'),
(129, 9, 1, 'Curicó'),
(130, 9, 1, 'Hualañé'),
(131, 9, 1, 'Licantén'),
(132, 9, 1, 'Molina'),
(133, 9, 1, 'Rauco'),
(134, 9, 1, 'Romeral'),
(135, 9, 1, 'Sagrada Familia'),
(136, 9, 1, 'Teno'),
(137, 9, 1, 'Vichuquén'),
(138, 9, 1, 'Linares'),
(139, 9, 1, 'Colbún'),
(140, 9, 1, 'Longaví'),
(141, 9, 1, 'Parral'),
(142, 9, 1, 'Retiro'),
(143, 9, 1, 'San Javier'),
(144, 9, 1, 'Villa Alegre'),
(145, 9, 1, 'Yerbas Buenas'),
(146, 10, 1, 'Chillán'),
(147, 10, 1, 'Bulnes'),
(148, 10, 1, 'Chillán Viejo'),
(149, 10, 1, 'El Carmen'),
(150, 10, 1, 'Pemuco'),
(151, 10, 1, 'Pinto'),
(152, 10, 1, 'Quillón'),
(153, 10, 1, 'San Ignacio'),
(154, 10, 1, 'Yungay'),
(155, 10, 1, 'Quirihue'),
(156, 10, 1, 'Cobquecura'),
(157, 10, 1, 'Coelemu'),
(158, 10, 1, 'Ninhue'),
(159, 10, 1, 'Portezuelo'),
(160, 10, 1, 'Ránquil'),
(161, 10, 1, 'Treguaco'),
(162, 10, 1, 'San Carlos'),
(163, 10, 1, 'Coihueco'),
(164, 10, 1, 'Ñiquén'),
(165, 10, 1, 'San Fabián'),
(166, 10, 1, 'San Nicolás'),
(167, 11, 1, 'Concepción'),
(168, 11, 1, 'Coronel'),
(169, 11, 1, 'Chiguayante'),
(170, 11, 1, 'Florida'),
(171, 11, 1, 'Hualqui'),
(172, 11, 1, 'Lota'),
(173, 11, 1, 'Penco'),
(174, 11, 1, 'San Pedro de La Paz'),
(175, 11, 1, 'Santa Juana'),
(176, 11, 1, 'Talcahuano'),
(177, 11, 1, 'Tomé'),
(178, 11, 1, 'Hualpén'),
(179, 11, 1, 'Lebu'),
(180, 11, 1, 'Arauco'),
(181, 11, 1, 'Cañete'),
(182, 11, 1, 'Contulmo'),
(183, 11, 1, 'Curanilahue'),
(184, 11, 1, 'Los Álamos'),
(185, 11, 1, 'Tirúa'),
(186, 11, 1, 'Los Ángeles'),
(187, 11, 1, 'Antuco'),
(188, 11, 1, 'Cabrero'),
(189, 11, 1, 'Laja'),
(190, 11, 1, 'Mulchén'),
(191, 11, 1, 'Nacimiento'),
(192, 11, 1, 'Negrete'),
(193, 11, 1, 'Quilaco'),
(194, 11, 1, 'Quilleco'),
(195, 11, 1, 'San Rosendo'),
(196, 11, 1, 'Santa Bárbara'),
(197, 11, 1, 'Tucapel'),
(198, 11, 1, 'Yumbel'),
(199, 11, 1, 'Alto Biobío'),
(200, 12, 1, 'Temuco'),
(201, 12, 1, 'Carahue'),
(202, 12, 1, 'Cunco'),
(203, 12, 1, 'Curarrehue'),
(204, 12, 1, 'Freire'),
(205, 12, 1, 'Galvarino'),
(206, 12, 1, 'Gorbea'),
(207, 12, 1, 'Lautaro'),
(208, 12, 1, 'Loncoche'),
(209, 12, 1, 'Melipeuco'),
(210, 12, 1, 'Nueva Imperial'),
(211, 12, 1, 'Padre Las Casas'),
(212, 12, 1, 'Perquenco'),
(213, 12, 1, 'Pitrufquén'),
(214, 12, 1, 'Pucón'),
(215, 12, 1, 'Saavedra'),
(216, 12, 1, 'Teodoro Schmidt'),
(217, 12, 1, 'Toltén'),
(218, 12, 1, 'Vilcún'),
(219, 12, 1, 'Villarrica'),
(220, 12, 1, 'Cholchol'),
(221, 12, 1, 'Angol'),
(222, 12, 1, 'Collipulli'),
(223, 12, 1, 'Curacautín'),
(224, 12, 1, 'Ercilla'),
(225, 12, 1, 'Lonquimay'),
(226, 12, 1, 'Los Sauces'),
(227, 12, 1, 'Lumaco'),
(228, 12, 1, 'Purén'),
(229, 12, 1, 'Renaico'),
(230, 12, 1, 'Traiguén'),
(231, 12, 1, 'Victoria'),
(232, 13, 1, 'Valdivia'),
(233, 13, 1, 'Corral'),
(234, 13, 1, 'Lanco'),
(235, 13, 1, 'Los Lagos'),
(236, 13, 1, 'Máfil'),
(237, 13, 1, 'Mariquina'),
(238, 13, 1, 'Paillaco'),
(239, 13, 1, 'Panguipulli'),
(240, 13, 1, 'La Unión'),
(241, 13, 1, 'Futrono'),
(242, 13, 1, 'Lago Ranco'),
(243, 13, 1, 'Río Bueno'),
(244, 14, 1, 'Puerto Montt'),
(245, 14, 1, 'Calbuco'),
(246, 14, 1, 'Cochamó'),
(247, 14, 1, 'Fresia'),
(248, 14, 1, 'Frutillar'),
(249, 14, 1, 'Los Muermos'),
(250, 14, 1, 'Llanquihue'),
(251, 14, 1, 'Maullín'),
(252, 14, 1, 'Puerto Varas'),
(253, 14, 1, 'Castro'),
(254, 14, 1, 'Ancud'),
(255, 14, 1, 'Chonchi'),
(256, 14, 1, 'Curaco de Vélez'),
(257, 14, 1, 'Dalcahue'),
(258, 14, 1, 'Puqueldón'),
(259, 14, 1, 'Queilén'),
(260, 14, 1, 'Quellón'),
(261, 14, 1, 'Quemchi'),
(262, 14, 1, 'Quinchao'),
(263, 14, 1, 'Osorno'),
(264, 14, 1, 'Puerto Octay'),
(265, 14, 1, 'Purranque'),
(266, 14, 1, 'Puyehue'),
(267, 14, 1, 'Río Negro'),
(268, 14, 1, 'San Juan de la Costa'),
(269, 14, 1, 'San Pablo'),
(270, 14, 1, 'Chaitén'),
(271, 14, 1, 'Futaleufú'),
(272, 14, 1, 'Hualaihué'),
(273, 14, 1, 'Palena'),
(274, 15, 1, 'Coyhaique'),
(275, 15, 1, 'Lago Verde'),
(276, 15, 1, 'Aysén'),
(277, 15, 1, 'Cisnes'),
(278, 15, 1, 'Guaitecas'),
(279, 15, 1, 'Cochrane'),
(280, 15, 1, 'O\'Higgins'),
(281, 15, 1, 'Tortel'),
(282, 15, 1, 'Chile Chico'),
(283, 15, 1, 'Río Ibáñez'),
(284, 16, 1, 'Punta Arenas'),
(285, 16, 1, 'Laguna Blanca'),
(286, 16, 1, 'Río Verde'),
(287, 16, 1, 'San Gregorio'),
(288, 16, 1, 'Cabo de Hornos'),
(289, 16, 1, 'Antártica'),
(290, 16, 1, 'Porvenir'),
(291, 16, 1, 'Primavera'),
(292, 16, 1, 'Timaukel'),
(293, 16, 1, 'Natales'),
(294, 16, 1, 'Torres del Paine'),
(295, 7, 1, 'Santiago'),
(296, 7, 1, 'Cerrillos'),
(297, 7, 1, 'Cerro Navia'),
(298, 7, 1, 'Conchalí'),
(299, 7, 1, 'El Bosque'),
(300, 7, 1, 'Estación Central'),
(301, 7, 1, 'Huechuraba'),
(302, 7, 1, 'Independencia'),
(303, 7, 1, 'La Cisterna'),
(304, 7, 1, 'La Florida'),
(305, 7, 1, 'La Granja'),
(306, 7, 1, 'La Pintana'),
(307, 7, 1, 'La Reina'),
(308, 7, 1, 'Las Condes'),
(309, 7, 1, 'Lo Barnechea'),
(310, 7, 1, 'Lo Espejo'),
(311, 7, 1, 'Lo Prado'),
(312, 7, 1, 'Macul'),
(313, 7, 1, 'Maipú'),
(314, 7, 1, 'Ñuñoa'),
(315, 7, 1, 'Pedro Aguirre Cerda'),
(316, 7, 1, 'Peñalolén'),
(317, 7, 1, 'Providencia'),
(318, 7, 1, 'Pudahuel'),
(319, 7, 1, 'Quilicura'),
(320, 7, 1, 'Quinta Normal'),
(321, 7, 1, 'Recoleta'),
(322, 7, 1, 'Renca'),
(323, 7, 1, 'San Joaquín'),
(324, 7, 1, 'San Miguel'),
(325, 7, 1, 'San Ramón'),
(326, 7, 1, 'Vitacura'),
(327, 7, 1, 'Puente Alto'),
(328, 7, 1, 'Pirque'),
(329, 7, 1, 'San José de Maipo'),
(330, 7, 1, 'Colina'),
(331, 7, 1, 'Lampa'),
(332, 7, 1, 'Til Til'),
(333, 7, 1, 'San Bernardo'),
(334, 7, 1, 'Buin'),
(335, 7, 1, 'Calera de Tango'),
(336, 7, 1, 'Paine'),
(337, 7, 1, 'Melipilla'),
(338, 7, 1, 'Alhué'),
(339, 7, 1, 'Curacaví'),
(340, 7, 1, 'María Pinto'),
(341, 7, 1, 'San Pedro'),
(342, 7, 1, 'Talagante'),
(343, 7, 1, 'El Monte'),
(344, 7, 1, 'Isla de Maipo'),
(345, 7, 1, 'Padre Hurtado'),
(346, 7, 1, 'Peñaflor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countries`
--

CREATE TABLE `countries` (
  `id_country` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `countries`
--

INSERT INTO `countries` (`id_country`, `name`) VALUES
(1, 'Chile');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diets`
--

CREATE TABLE `diets` (
  `id_diet` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `diets`
--

INSERT INTO `diets` (`id_diet`, `name`, `description`) VALUES
(1, 'Keto', 'Una dieta que se basa en consumir alimentos ricos en grasas y bajos en carbohidratos.'),
(2, 'Mediterránea', 'Una dieta que se basa en consumir alimentos como frutas, verduras, pescados y granos enteros.'),
(3, 'Vegana', 'Una dieta que excluye todos los productos de origen animal.'),
(4, 'Paleo', 'Una dieta que se basa en consumir alimentos que estaban disponibles para los humanos durante la era Paleolítica, como carnes magras, pescados, frutas, vegetales, nueces y semillas.'),
(5, 'Atkins', 'Una dieta baja en carbohidratos que se basa en consumir proteínas y grasas saludables.'),
(6, 'Dieta de Zona', 'Una dieta que se basa en consumir una proporción específica de carbohidratos, proteínas y grasas en cada comida.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diets_foods`
--

CREATE TABLE `diets_foods` (
  `id_diet` int(10) UNSIGNED NOT NULL,
  `id_food` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `diets_foods`
--

INSERT INTO `diets_foods` (`id_diet`, `id_food`) VALUES
(1, 2),
(1, 4),
(2, 1),
(2, 5),
(3, 3),
(3, 6),
(4, 7),
(5, 9),
(6, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `exercises`
--

CREATE TABLE `exercises` (
  `id_exercise` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `exercises`
--

INSERT INTO `exercises` (`id_exercise`, `name`, `description`) VALUES
(1, 'Sentadillas', 'Realiza 3 series de 10 repeticiones. Párate derecho, baja el cuerpo hasta que tus muslos estén paralelos al suelo y luego vuelve a subir.'),
(2, 'Flexiones', 'Realiza 3 series de 10 repeticiones. Colócate en posición de plancha y baja el cuerpo hasta que tu pecho casi toque el suelo, luego vuelve a subir.'),
(3, 'Burpees', 'Realiza 3 series de 10 repeticiones. Comienza de pie, baja a una posición de sentadilla, coloca las manos en el suelo, salta hacia atrás a una posición de plancha, vuelve a la posición de sentadilla y salta hacia arriba.'),
(4, 'Estocadas', 'Realiza 3 series de 10 repeticiones. Da un paso adelante con una pierna, baja el cuerpo hasta que tu rodilla trasera casi toque el suelo y luego vuelve a subir.'),
(5, 'Plancha', 'Mantén la posición durante 30 segundos. Colócate en posición de plancha con los codos en el suelo y mantén la posición.'),
(6, 'Saltos de tijera', 'Realiza 3 series de 20 repeticiones. Comienza de pie, salta y separa las piernas en el aire mientras juntas las manos por encima de la cabeza, luego vuelve a la posición inicial.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foods`
--

CREATE TABLE `foods` (
  `id_food` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `foods`
--

INSERT INTO `foods` (`id_food`, `name`, `description`) VALUES
(1, 'Manzana', 'Una fruta dulce y crujiente. Lava bien la manzana antes de comerla.'),
(2, 'Pollo', 'Una fuente de proteína magra. Cocina el pollo a una temperatura interna de al menos 165 grados Fahrenheit para matar cualquier bacteria potencialmente dañina.'),
(3, 'Brócoli', 'Un vegetal rico en vitaminas K y C. Puedes comerlo crudo o cocido.'),
(4, 'Fideos con Salsa', 'Un plato clásico de pasta. Cocina los fideos hasta que estén al dente, luego mézclalos con tu salsa favorita.'),
(5, 'Ensalada Griega', 'Una ensalada fresca y saludable. Combina tomates, pepinos, aceitunas negras, queso feta y un aderezo a base de aceite de oliva.'),
(6, 'Tofu Salteado', 'Un plato vegano lleno de sabor. Saltea el tofu con tus vegetales favoritos y condimentos.'),
(7, 'Ensalada César', 'Una ensalada clásica. Combina lechuga romana con un aderezo a base de aceite de oliva, jugo de limón, huevo y queso parmesano. Agrega crutones y pollo a la parrilla para completarla.'),
(8, 'Hamburguesa Keto', 'Una hamburguesa baja en carbohidratos. Usa una hamburguesa de carne de res y sírvela sobre una cama de lechuga en lugar de un pan. Agrega queso, tomate, cebolla y pepinillos para darle más sabor.'),
(9, 'Pollo a la Zona', 'Un plato equilibrado. Cocina un pechuga de pollo a la parrilla y sírvela con una porción de arroz integral y verduras al vapor.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `height`
--

CREATE TABLE `height` (
  `id_user` int(11) UNSIGNED NOT NULL,
  `height` decimal(3,2) UNSIGNED NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `height`
--

INSERT INTO `height` (`id_user`, `height`, `date`) VALUES
(4, 1.75, '2017-07-19'),
(5, 1.77, '2019-07-20'),
(4, 1.80, '2020-01-01'),
(4, 1.84, '2023-10-20'),
(5, 1.78, '2023-09-11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regions`
--

CREATE TABLE `regions` (
  `id_region` int(10) UNSIGNED NOT NULL,
  `id_country` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `regions`
--

INSERT INTO `regions` (`id_region`, `id_country`, `name`) VALUES
(1, 1, 'Región de Arica y Parinacota'),
(2, 1, 'Región de Tarapacá'),
(3, 1, 'Región de Antofagasta'),
(4, 1, 'Región de Atacama'),
(5, 1, 'Región de Coquimbo'),
(6, 1, 'Región de Valparaíso'),
(7, 1, 'Región Metropolitana de Santiago'),
(8, 1, 'Región del Libertador General Bernardo O\'Higgins'),
(9, 1, 'Región del Maule'),
(10, 1, 'Región de Ñuble'),
(11, 1, 'Región del Biobío'),
(12, 1, 'Región de La Araucanía'),
(13, 1, 'Región de Los Ríos'),
(14, 1, 'Región de Los Lagos'),
(15, 1, 'Región Aysén del General Carlos Ibáñez del Campo'),
(16, 1, 'Región de Magallanes y de la Antártica Chilena');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `routines`
--

CREATE TABLE `routines` (
  `id_routine` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `routines`
--

INSERT INTO `routines` (`id_routine`, `name`, `description`) VALUES
(1, 'Rutina de pérdida de peso', 'Esta rutina está diseñada para ayudar a perder peso mediante ejercicios cardiovasculares y de fuerza'),
(2, 'Rutina de ganancia muscular', 'Esta rutina está diseñada para ayudar a ganar masa muscular mediante ejercicios de resistencia y pes'),
(3, 'Rutina de resistencia', 'Esta rutina está diseñada para aumentar la resistencia mediante ejercicios cardiovasculares y de alt'),
(4, 'Rutina de flexibilidad', 'Esta rutina está diseñada para mejorar la flexibilidad mediante estiramientos y yoga.'),
(5, 'Rutina de tonificación', 'Esta rutina está diseñada para tonificar el cuerpo mediante ejercicios de fuerza y resistencia.'),
(6, 'Rutina de cardio', 'Esta rutina está diseñada para mejorar la salud cardiovascular mediante ejercicios aeróbicos.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `routines_exercises`
--

CREATE TABLE `routines_exercises` (
  `id_routine` int(10) UNSIGNED NOT NULL,
  `id_exercise` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `routines_exercises`
--

INSERT INTO `routines_exercises` (`id_routine`, `id_exercise`) VALUES
(1, 2),
(2, 1),
(3, 3),
(4, 5),
(5, 4),
(6, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(11) UNSIGNED NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `rut` char(10) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `password` varchar(32) NOT NULL,
  `id_diet` int(10) UNSIGNED NOT NULL,
  `id_routine` int(10) UNSIGNED NOT NULL,
  `id_city` int(10) UNSIGNED NOT NULL,
  `role` enum('admin','normal') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `firstName`, `lastName`, `email`, `rut`, `status`, `dateOfBirth`, `password`, `id_diet`, `id_routine`, `id_city`, `role`) VALUES
(1, 'Vicente', 'Herrera', 'vicensito@uwu.com', '20483861-5', 0, '2000-09-05', 'Vicentito123.', 1, 1, 82, 'admin'),
(2, 'Dorian', 'Canales', 'dorian.canales.g@mail.pucv.cl', '20963471-6', 0, '2002-02-06', 'Dorian123.', 3, 2, 330, 'admin'),
(3, 'Ignacio', 'Villalobos', 'nachobnb3llako@yahoo.cl', '20484286-8', 0, '2001-10-06', 'nachokpaza123A.', 5, 3, 45, 'admin'),
(4, 'pepito', 'lopez', 'pepito@gmail.com', '12345678-9', 0, '2013-06-03', 'Pepito123.', 6, 4, 327, 'normal'),
(5, 'pepita', NULL, 'pepa@gmail.com', '98765432-1', 0, '2004-12-16', '123Pepa.', 4, 5, 284, 'normal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `weight`
--

CREATE TABLE `weight` (
  `id_user` int(11) UNSIGNED NOT NULL,
  `weight` decimal(5,2) UNSIGNED NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `weight`
--

INSERT INTO `weight` (`id_user`, `weight`, `date`) VALUES
(4, 70.00, '2023-10-01'),
(4, 70.20, '2023-10-02'),
(4, 80.00, '2023-10-04'),
(4, 90.00, '2023-10-20'),
(5, 65.92, '2023-10-17'),
(5, 68.00, '2023-10-19');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id_city`),
  ADD KEY `FK_cities_regions` (`id_region`),
  ADD KEY `FK_cities_countries` (`id_country`) USING BTREE;

--
-- Indices de la tabla `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id_country`);

--
-- Indices de la tabla `diets`
--
ALTER TABLE `diets`
  ADD PRIMARY KEY (`id_diet`);

--
-- Indices de la tabla `diets_foods`
--
ALTER TABLE `diets_foods`
  ADD PRIMARY KEY (`id_diet`,`id_food`),
  ADD UNIQUE KEY `id_diet` (`id_diet`,`id_food`),
  ADD KEY `id_food` (`id_food`);

--
-- Indices de la tabla `exercises`
--
ALTER TABLE `exercises`
  ADD PRIMARY KEY (`id_exercise`);

--
-- Indices de la tabla `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`id_food`);

--
-- Indices de la tabla `height`
--
ALTER TABLE `height`
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`id_region`),
  ADD KEY `FK_regions_countries` (`id_country`);

--
-- Indices de la tabla `routines`
--
ALTER TABLE `routines`
  ADD PRIMARY KEY (`id_routine`);

--
-- Indices de la tabla `routines_exercises`
--
ALTER TABLE `routines_exercises`
  ADD PRIMARY KEY (`id_routine`,`id_exercise`),
  ADD UNIQUE KEY `id_routine` (`id_routine`,`id_exercise`),
  ADD KEY `id_exercise` (`id_exercise`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `FK_users_cities` (`id_city`) USING BTREE,
  ADD KEY `FK_id_diet` (`id_diet`) USING BTREE,
  ADD KEY `FK_id_routine` (`id_routine`) USING BTREE;

--
-- Indices de la tabla `weight`
--
ALTER TABLE `weight`
  ADD KEY `id_user` (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cities`
--
ALTER TABLE `cities`
  MODIFY `id_city` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=347;

--
-- AUTO_INCREMENT de la tabla `countries`
--
ALTER TABLE `countries`
  MODIFY `id_country` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `diets`
--
ALTER TABLE `diets`
  MODIFY `id_diet` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `exercises`
--
ALTER TABLE `exercises`
  MODIFY `id_exercise` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `foods`
--
ALTER TABLE `foods`
  MODIFY `id_food` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `regions`
--
ALTER TABLE `regions`
  MODIFY `id_region` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `routines`
--
ALTER TABLE `routines`
  MODIFY `id_routine` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `FK_cities_countries` FOREIGN KEY (`id_country`) REFERENCES `countries` (`id_country`),
  ADD CONSTRAINT `FK_cities_regions` FOREIGN KEY (`id_region`) REFERENCES `regions` (`id_region`);

--
-- Filtros para la tabla `diets_foods`
--
ALTER TABLE `diets_foods`
  ADD CONSTRAINT `diets_foods_ibfk_1` FOREIGN KEY (`id_diet`) REFERENCES `diets` (`id_diet`),
  ADD CONSTRAINT `diets_foods_ibfk_2` FOREIGN KEY (`id_food`) REFERENCES `foods` (`id_food`);

--
-- Filtros para la tabla `height`
--
ALTER TABLE `height`
  ADD CONSTRAINT `height_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`);

--
-- Filtros para la tabla `regions`
--
ALTER TABLE `regions`
  ADD CONSTRAINT `FK_regions_countries` FOREIGN KEY (`id_country`) REFERENCES `countries` (`id_country`);

--
-- Filtros para la tabla `routines_exercises`
--
ALTER TABLE `routines_exercises`
  ADD CONSTRAINT `routines_exercises_ibfk_1` FOREIGN KEY (`id_routine`) REFERENCES `routines` (`id_routine`),
  ADD CONSTRAINT `routines_exercises_ibfk_2` FOREIGN KEY (`id_exercise`) REFERENCES `exercises` (`id_exercise`),
  ADD CONSTRAINT `routines_exercises_ibfk_3` FOREIGN KEY (`id_routine`) REFERENCES `routines` (`id_routine`),
  ADD CONSTRAINT `routines_exercises_ibfk_4` FOREIGN KEY (`id_exercise`) REFERENCES `exercises` (`id_exercise`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_diet`) REFERENCES `diets` (`id_diet`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`id_routine`) REFERENCES `routines` (`id_routine`),
  ADD CONSTRAINT `users_ibfk_3` FOREIGN KEY (`id_city`) REFERENCES `cities` (`id_city`);

--
-- Filtros para la tabla `weight`
--
ALTER TABLE `weight`
  ADD CONSTRAINT `weight_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
