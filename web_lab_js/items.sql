CREATE TABLE `planes` (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  tank_volume INT UNSIGNED  NOT NULL,
  num_of_seats INT UNSIGNED  NOT NULL,
  PRIMARY KEY (id)
);

use planes;

DROP TABLE planes.planes;

SELECT * from planes.planes;