-- prepares a MySQL server for the project

CREATE DATABASE IF NOT EXISTS asms_test_db;
CREATE USER IF NOT EXISTS 'asms_dev'@'localhost' IDENTIFIED BY 'asms_test_pwd';
GRANT ALL PRIVILEGES ON `hbnb_test_db`.* TO 'asms_test'@'localhost';
GRANT SELECT ON `performance_schema`.* TO 'asms_test'@'localhost';
FLUSH PRIVILEGES;
