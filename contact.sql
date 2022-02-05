
--
-- Database: `db_contact`
--

CREATE DATABASE IF NOT EXISTS `dbContact` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `dbContact`;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact`
--

DROP TABLE IF EXISTS `tblContact`;
CREATE TABLE `tblContact` (
  `ID` int(11) NOT NULL,
  `fldName` varchar(50) NOT NULL,
  `fldEmail` varchar(150) NOT NULL,
  `fldPhone` varchar(15) NOT NULL,
  `fldMessage` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_contact`
--
ALTER TABLE `tblContact`
 ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_contact`
--
ALTER TABLE `tblContact`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;