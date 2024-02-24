-- prepares a MySQL server for the project

CREATE DATABASE IF NOT EXISTS asms_dev_db;
CREATE USER IF NOT EXISTS 'asms_dev'@'localhost' IDENTIFIED BY 'asms_dev_pwd';
GRANT ALL PRIVILEGES ON `asms_dev_db`.* TO 'asms_dev'@'localhost';
GRANT SELECT ON `performance_schema`.* TO 'asms_dev'@'localhost';
GRANT REPLICATION CLIENT ON *.* TO 'asms_dev'@'localhost';
FLUSH PRIVILEGES;
