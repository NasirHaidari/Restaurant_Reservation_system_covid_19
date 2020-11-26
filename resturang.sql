-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 26, 2020 at 10:43 AM
-- Server version: 8.0.18
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `resturang`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'samermn', 'samermn'),
(3, 'nasir', 'nasir'),
(4, 'Johan', 'Johan');

-- --------------------------------------------------------

--
-- Table structure for table `kl18`
--

CREATE TABLE `kl18` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `persons` tinyint(4) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `hour_id` int(11) NOT NULL,
  `day` varchar(255) NOT NULL,
  `guests` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `hour_id`, `day`, `guests`, `name`, `phone`, `email`) VALUES
(67, 1, '2020-10-20', '6', 'mr b', '2343242342', 'nasir.haidari@hotmail.com'),
(68, 1, '2020-10-19', '5', 'nasir', '0704577241', 'nasir.haidari@gmail.com'),
(69, 1, '2020-10-19', '6', 'test2', '0704577241', 'nasir.haidari@gmail.com'),
(70, 1, '2020-10-05', '5', 'dwef', '2343242342', 'nasir.haidari@gmail.com'),
(71, 2, '2020-10-20', '5', 'Nasir', '2937409237409273', 'nasir.haidari@gmail.com'),
(72, 2, '2020-10-06', '6', 'samer', '2343242342', 'samer.mnr@gmail.com'),
(73, 2, '2020-10-21', '4', 'Nasir', '0704577241', 'nasir.haidari@hotmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `reservation_time`
--

CREATE TABLE `reservation_time` (
  `id` int(11) NOT NULL,
  `clock` varchar(255) NOT NULL,
  `tables` varchar(255) NOT NULL,
  `guests_table` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reservation_time`
--

INSERT INTO `reservation_time` (`id`, `clock`, `tables`, `guests_table`) VALUES
(1, '18:00', '15', '6'),
(2, '21:00', '16', '6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kl18`
--
ALTER TABLE `kl18`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservation_time`
--
ALTER TABLE `reservation_time`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `reservation_time`
--
ALTER TABLE `reservation_time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
