DROP DATABASE IF EXISTS albums;

CREATE DATABASE albums;

USE albums;

CREATE TABLE
    album (
        id INT primary key auto_increment NOT NULL,
        nom_groupe VARCHAR(255) NOT NULL,
        nom_album VARCHAR(255) NOT NULL,
        titre_chanson VARCHAR(500) NOT NULL,
        genre VARCHAR(255) NOT NULL,
        image VARCHAR(250) NOT NULL


);

CREATE TABLE user (
    id INT primary key auto_increment NOT NULL, 
    pseudo VARCHAR(80) NOT NULL, 
    email VARCHAR(80) NOT NULL, 
    hashed_password VARCHAR(250) NOT NULL, 
    image VARCHAR(250) NOT NULL, 
    favorite_artiste VARCHAR(250) NULL, 
    favorite_album VARCHAR(250) NULL
);

INSERT INTO
    user (
        pseudo, email, hashed_password, image, favorite_artiste, favorite_album
    )
VALUES (
        'Alexe', 'alexe@gmail.com', '$argon2id$v=19$m=19456,t=2,p=1$vv24RaicrmFh4xVafigIRQ$4EFnHhgFO5JEtjVHt+7XdgoUSMme0aFDsl1NtIVhtQ0', '/images/headphone.jpg', 'Slipknot', 'The End, So Far'
    ),

(
    'Vince', 'vince@gmail.com', '$argon2id$v=19$m=19456,t=2,p=1$vv24RaicrmFh4xVafigIRQ$4EFnHhgFO5JEtjVHt+7XdgoUSMme0aFDsl1NtIVhtQ0', '/images/Avatar.png', 'Metallica', 'Black Album'
);

INSERT INTO
    album (
        nom_groupe, nom_album, titre_chanson, genre, image
    )
VALUES (
        "Metallica", "Black-Album", "Nothing else matters, Enter Sandman, Sad but True, Holier than Thou, The Unforgiven", "heavymetal", "/images/black_album.jpg"
    ),
    (
        "Parkway Drive", "Deep Blue", "	Sleepwalker,Wreckage, Deadweight, 	Samsara,Pressures,Deliver Me", "MetalCore", "/images/Deep_Blue.jpg"
    ),
    (
        "Machine Head", "The Blackening", "Clenching the Fists of Dissent,Beautiful Mourning, Now I Lay Thee Down,Slanderous,Halo,Wolves,  ", "metalprogressif", "/images/the_blackening.jpg"
    ),
    (
        "Gojira", "From Mars To Sirius", "Ocean Planet, Backbone, From the Sky, Where Dragons Dwell, Flying Whales, In the Wilderness", "metalprogressif", "/images/From-mars-to-sirius.jpg"
    ),
    (
        "Slipknot", "The End, So Far", "Adderall,The Dying Song,The Chapeltown Rag,Yen,Hive Mind,Warranty  ", "numetal", "/images/the_end_so_far.jpg"
    ),
    (
        "Five Finger Death Punch", "Got Your Six", "Got Your Six,Jekyll and Hyde,Wash It All Away,My Nemesis,Hell to Pay ", "MetalCore", "/images/got_your_six.jpg"
    ),
    (
        "Guns N' Roses", "Bad Obsession", "November Rain,Welcome To The Jungle, The Godfather, Knockin' On Heaven's Door,Sweet Child O' Mine,Paradise City ", "hardrock", "/images/bad_obession.jpg"
    ),
    (
        "Iron Maiden", "Number Of The Beast", "	Invaders,	Children of the Damned,The Prisoner, The Number of the Beast,Run to the Hills ", "heavymetal", "/images/number_of_the_beast.jpg"
    );