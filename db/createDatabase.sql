DROP DATABASE IF EXISTS keyboard_practice;

CREATE DATABASE IF NOT EXISTS keyboard_practice;

USE keyboard_practice;

DROP TABLE IF EXISTS keywords;
    
CREATE TABLE keywords (
  id INTEGER AUTO_INCREMENT,
  words VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (id),
  INDEX (id)
);

DROP TABLE IF EXISTS players;
    
CREATE TABLE players (
  id INTEGER AUTO_INCREMENT,
  player VARCHAR(50) NULL DEFAULT NULL,
  score  INTEGER NULL DEFAULT 0,
  PRIMARY KEY (id),
  INDEX (id)
);

INSERT INTO keywords ( words) VALUES ( "keyboard practice words, keyboard practice words, keyboard practice words, keyboard practice words, keyboard practice words, keyboard practice words, keyboard practice words." )

