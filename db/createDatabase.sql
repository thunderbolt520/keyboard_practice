DROP DATABASE IF EXISTS keyboard_practice;

CREATE DATABASE IF NOT EXISTS keyboard_practice;

USE keyboard_practice;

DROP TABLE IF EXISTS keywords;

DROP TABLE IF EXISTS keywords;
    
CREATE TABLE keywords (
  id INTEGER AUTO_INCREMENT,
  words VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (id),
  INDEX (id)
);

INSERT INTO keywords ( words) VALUES ( "keyboard practice words, keyboard practice words, keyboard practice words, keyboard practice words, keyboard practice words, keyboard practice words, keyboard practice words." )

