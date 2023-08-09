var movies = [
    {
        Id: 1,
        Titre: "Beetlejuice",
        Annee: "1988",
        Duree: "92",
        Genre: ["Comedy", "Fantasy"],
        Producteur: "Tim Burton",
        Acteurs: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
        Description:
            'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg",
    },
    {
        Id: 2,
        Titre: "The Cotton Club",
        Annee: "1984",
        Duree: "127",
        Genre: ["Crime", "Drama", "Music"],
        Producteur: "Francis Ford Coppola",
        Acteurs: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
        Description:
            "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
    },
    {
        Id: 3,
        Titre: "The Shawshank Redemption",
        Annee: "1994",
        Duree: "142",
        Genre: ["Crime", "Drama"],
        Producteur: "Frank Darabont",
        Acteurs: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
        Description:
            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
    },
    {
        Id: 4,
        Titre: "Crocodile Dundee",
        Annee: "1986",
        Duree: "97",
        Genre: ["Adventure", "Comedy"],
        Producteur: "Peter Faiman",
        Acteurs: "Paul Hogan, Linda Kozlowski, John Meillon, DavId Gulpilil",
        Description:
            "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
    },
    {
        Id: 5,
        Titre: "Valkyrie",
        Annee: "2008",
        Duree: "121",
        Genre: ["Drama", "History", "Thriller"],
        Producteur: "Bryan Singer",
        Acteurs: "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
        Description:
            "A dramatization of the 20 July assassination and political coup Description by desperate renegade German Army officers against Hitler during World War II.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg",
    },
    {
        Id: 6,
        Titre: "Ratatouille",
        Annee: "2007",
        Duree: "111",
        Genre: ["Animation", "Comedy", "Family"],
        Producteur: "Brad Bird, Jan Pinkava",
        Acteurs: "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
        Description:
            "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
    },
    {
        Id: 7,
        Titre: "City of God",
        Annee: "2002",
        Duree: "130",
        Genre: ["Crime", "Drama"],
        Producteur: "Fernando Meirelles, Kátia Lund",
        Acteurs:
            "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
        Description:
            "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg",
    },
    {
        Id: 8,
        Titre: "Memento",
        Annee: "2000",
        Duree: "113",
        Genre: ["Mystery", "Thriller"],
        Producteur: "Christopher Nolan",
        Acteurs: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
        Description:
            "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNThiYjM3MzktMDg3Yy00ZWQ3LTk3YWEtN2M0YmNmNWEwYTE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
        Id: 9,
        Titre: "The Intouchables",
        Annee: "2011",
        Duree: "112",
        Genre: ["Biography", "Comedy", "Drama"],
        Producteur: "Olivier Nakache, Eric Toledano",
        Acteurs: "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot",
        Description:
            "After he becomes a quadriplegic from a paraglIding accIdent, an aristocrat hires a young man from the projects to be his caregiver.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg",
    },
    {
        Id: 10,
        Titre: "Stardust",
        Annee: "2007",
        Duree: "127",
        Genre: ["Adventure", "Family", "Fantasy"],
        Producteur: "Matthew Vaughn",
        Acteurs: "Ian McKellen, Bimbo Hart, Alastair MacIntosh, DavId Kelly",
        Description:
            "In a countrysIde town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg",
    },
    {
        Id: 11,
        Titre: "Apocalypto",
        Annee: "2006",
        Duree: "139",
        Genre: ["Action", "Adventure", "Drama"],
        Producteur: "Mel Gibson",
        Acteurs:
            "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
        Description:
            "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoId his fate.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg",
    },
    {
        Id: 12,
        Titre: "Taxi Driver",
        Annee: "1976",
        Duree: "113",
        Genre: ["Crime", "Drama"],
        Producteur: "Martin Scorsese",
        Acteurs: "Diahnne Abbott, Frank Adu, Victor Argo, Gino Ardito",
        Description:
            "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
        Id: 13,
        Titre: "No Country for Old Men",
        Annee: "2007",
        Duree: "122",
        Genre: ["Crime", "Drama", "Thriller"],
        Producteur: "Ethan Coen, Joel Coen",
        Acteurs: "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
        Description:
            "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
    },
    {
        Id: 14,
        Titre: "Planet 51",
        Annee: "2009",
        Duree: "91",
        Genre: ["Animation", "Adventure", "Comedy"],
        Producteur: "Jorge Blanco, Javier Abad, Marcos Martínez",
        Acteurs: "Jessica Biel, John Cleese, Gary Oldman, Dwayne Johnson",
        Description:
            "An alien civilization is invaded by Astronaut Chuck Baker, who believes that the planet was uninhabited. Wanted by the military, Baker must get back to his ship before it goes into orbit without him.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTUyOTAyNTA5Ml5BMl5BanBnXkFtZTcwODU2OTM0Mg@@._V1_SX300.jpg",
    },
    {
        Id: 15,
        Titre: "Looper",
        Annee: "2012",
        Duree: "119",
        Genre: ["Action", "Crime", "Drama"],
        Producteur: "Rian Johnson",
        Acteurs: "Joseph Gordon-Levitt, Bruce Willis, Emily Blunt, Paul Dano",
        Description:
            "In 2074, when the mob wants to get rId of someone, the target is sent into the past, where a hired gun awaits - someone like Joe - who one day learns the mob wants to 'close the loop' by sending back Joe's future self for assassination.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTY3NTY0MjEwNV5BMl5BanBnXkFtZTcwNTE3NDA1OA@@._V1_SX300.jpg",
    },
    {
        Id: 16,
        Titre: "Corpse BrIde",
        Annee: "2005",
        Duree: "77",
        Genre: ["Animation", "Drama", "Family"],
        Producteur: "Tim Burton, Mike Johnson",
        Acteurs: "Johnny Depp, Helena Bonham Carter, Emily Watson, Tracey Ullman",
        Description:
            "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_SX300.jpg",
    },
    {
        Id: 17,
        Titre: "The Third Man",
        Annee: "1949",
        Duree: "93",
        Genre: ["Film-Noir", "Mystery", "Thriller"],
        Producteur: "Carol Reed",
        Acteurs: "Joseph Cotten, AlIda Valli, Orson Welles, Trevor Howard",
        Description:
            "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg",
    },
    {
        Id: 18,
        Titre: "The Beach",
        Annee: "2000",
        Duree: "119",
        Genre: ["Adventure", "Drama", "Romance"],
        Producteur: "Danny Boyle",
        Acteurs:
            "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
        Description:
            "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Id: 19,
        Titre: "Scarface",
        Annee: "1983",
        Duree: "170",
        Genre: ["Crime", "Drama"],
        Producteur: "Brian De Palma",
        Acteurs:
            "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
        Description:
            "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg",
    },
    {
        Id: 20,
        Titre: "SId and Nancy",
        Annee: "1986",
        Duree: "112",
        Genre: ["Biography", "Drama", "Music"],
        Producteur: "Alex Cox",
        Acteurs: "Gary Oldman, Chloe Webb, DavId Hayman, Debby Bishop",
        Description:
            "MorbId biographical story of SId Vicious, bassist with British punk group the Sex Pistols, and his girlfriend Nancy Spungen. When the Sex Pistols break up after their fateful US tour, ...",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjA5NzY4M15BMl5BanBnXkFtZTcwNjQ2NzI5NA@@._V1_SX300.jpg",
    },
    {
        Id: 21,
        Titre: "Black Swan",
        Annee: "2010",
        Duree: "108",
        Genre: ["Drama", "Thriller"],
        Producteur: "Darren Aronofsky",
        Acteurs: "Natalie Portman, Mila Kunis, Vincent Cassel, Barbara Hershey",
        Description:
            'A committed dancer wins the lead role in a production of Tchaikovsky\'s "Swan Lake" only to find herself struggling to maintain her sanity.',
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg",
    },
    {
        Id: 22,
        Titre: "Inception",
        Annee: "2010",
        Duree: "148",
        Genre: ["Action", "Adventure", "Sci-Fi"],
        Producteur: "Christopher Nolan",
        Acteurs: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        Description:
            "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an Idea into the mind of a CEO.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    },
    {
        Id: 23,
        Titre: "The Deer Hunter",
        Annee: "1978",
        Duree: "183",
        Genre: ["Drama", "War"],
        Producteur: "Michael Cimino",
        Acteurs: "Robert De Niro, John Cazale, John Savage, Christopher Walken",
        Description:
            "An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzYmRmZTQtYjk2NS00MDdlLTkxMDAtMTE2YTM2ZmNlMTBkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
        Id: 24,
        Titre: "Chasing Amy",
        Annee: "1997",
        Duree: "113",
        Genre: ["Comedy", "Drama", "Romance"],
        Producteur: "Kevin Smith",
        Acteurs: "Ethan Suplee, Ben Affleck, Scott Mosier, Jason Lee",
        Description:
            "Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's gay.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM3MTg2MGUtZDM0MC00NzMwLWE5NjItOWFjNjA2M2I4YzgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
        Id: 25,
        Titre: "Django Unchained",
        Annee: "2012",
        Duree: "165",
        Genre: ["Drama", "Western"],
        Producteur: "Quentin Tarantino",
        Acteurs: "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington",
        Description:
            "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg",
    },
    {
        Id: 26,
        Titre: "The Silence of the Lambs",
        Annee: "1991",
        Duree: "118",
        Genre: ["Crime", "Drama", "Thriller"],
        Producteur: "Jonathan Demme",
        Acteurs:
            "Jodie Foster, Lawrence A. Bonney, Kasi Lemmons, Lawrence T. Wrentz",
        Description:
            "A young F.B.I. cadet must confIde in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg",
    },
    {
        Id: 27,
        Titre: "American Beauty",
        Annee: "1999",
        Duree: "122",
        Genre: ["Drama", "Romance"],
        Producteur: "Sam Mendes",
        Acteurs: "Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
        Description:
            "A sexually frustrated suburban father has a mId-life crisis after becoming infatuated with his daughter's best friend.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM4NTI5NzYyNV5BMl5BanBnXkFtZTgwNTkxNTYxMTE@._V1_SX300.jpg",
    },
    {
        Id: 28,
        Titre: "Snatch",
        Annee: "2000",
        Duree: "102",
        Genre: ["Comedy", "Crime"],
        Producteur: "Guy Ritchie",
        Acteurs: "Benicio Del Toro, Dennis Farina, Vinnie Jones, Brad Pitt",
        Description:
            "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Id: 29,
        Titre: "MIdnight Express",
        Annee: "1978",
        Duree: "121",
        Genre: ["Crime", "Drama", "Thriller"],
        Producteur: "Alan Parker",
        Acteurs: "Brad Davis, Irene Miracle, Bo Hopkins, Paolo Bonacelli",
        Description:
            "Billy Hayes, an American college student, is caught smuggling drugs out of Turkey and thrown into prison.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDA5MzkyOF5BMl5BanBnXkFtZTgwOTYwNTcxMTE@._V1_SX300.jpg",
    },
    {
        Id: 30,
        Titre: "Pulp Fiction",
        Annee: "1994",
        Duree: "154",
        Genre: ["Crime", "Drama"],
        Producteur: "Quentin Tarantino",
        Acteurs: "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
        Description:
            "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg",
    },
    {
        Id: 31,
        Titre: "Lock, Stock and Two Smoking Barrels",
        Annee: "1998",
        Duree: "107",
        Genre: ["Comedy", "Crime"],
        Producteur: "Guy Ritchie",
        Acteurs: "Jason Flemyng, Dexter Fletcher, Nick Moran, Jason Statham",
        Description:
            "A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collIde with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Id: 32,
        Titre: "Lucky Number Slevin",
        Annee: "2006",
        Duree: "110",
        Genre: ["Crime", "Drama", "Mystery"],
        Producteur: "Paul McGuigan",
        Acteurs: "Josh Hartnett, Bruce Willis, Lucy Liu, Morgan Freeman",
        Description:
            "A case of mistaken Identity lands Slevin into the mIddle of a war being Descriptionted by two of the city's most rival crime bosses: The Rabbi and The Boss. Slevin is under constant surveillance by relentless Detective Brikowski as well as the infamous assassin Goodkat and finds himself having to hatch his own ingenious Description to get them before they get him.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMzc1OTEwMTk4OF5BMl5BanBnXkFtZTcwMTEzMDQzMQ@@._V1_SX300.jpg",
    },
    {
        Id: 33,
        Titre: "Rear Window",
        Annee: "1954",
        Duree: "112",
        Genre: ["Mystery", "Thriller"],
        Producteur: "Alfred Hitchcock",
        Acteurs: "James Stewart, Grace Kelly, Wendell Corey, Thelma Ritter",
        Description:
            "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
        Id: 34,
        Titre: "Pan's Labyrinth",
        Annee: "2006",
        Duree: "118",
        Genre: ["Drama", "Fantasy", "War"],
        Producteur: "Guillermo del Toro",
        Acteurs: "Ivana Baquero, Sergi López, Maribel Verdú, Doug Jones",
        Description:
            "In the falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
        ImageUrl: "",
    },
    {
        Id: 35,
        Titre: "Shutter Island",
        Annee: "2010",
        Duree: "138",
        Genre: ["Mystery", "Thriller"],
        Producteur: "Martin Scorsese",
        Acteurs: "Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley, Max von Sydow",
        Description:
            "In 1954, a U.S. marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_SX300.jpg",
    },
    {
        Id: 36,
        Titre: "Reservoir Dogs",
        Annee: "1992",
        Duree: "99",
        Genre: ["Crime", "Drama", "Thriller"],
        Producteur: "Quentin Tarantino",
        Acteurs: "Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn",
        Description:
            "After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNjE5ZDJiZTQtOGE2YS00ZTc5LTk0OGUtOTg2NjdjZmVlYzE2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
    },
    {
        Id: 37,
        Titre: "The Shining",
        Annee: "1980",
        Duree: "146",
        Genre: ["Drama", "Horror"],
        Producteur: "Stanley Kubrick",
        Acteurs: "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers",
        Description:
            "A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BODMxMjE3NTA4Ml5BMl5BanBnXkFtZTgwNDc0NTIxMDE@._V1_SX300.jpg",
    },
    {
        Id: 38,
        Titre: "MIdnight in Paris",
        Annee: "2011",
        Duree: "94",
        Genre: ["Comedy", "Fantasy", "Romance"],
        Producteur: "Woody Allen",
        Acteurs: "Owen Wilson, Rachel McAdams, Kurt Fuller, Mimi Kennedy",
        Description:
            "While on a trip to Paris with his fiancée's family, a nostalgic screenwriter finds himself mysteriously going back to the 1920s everyday at mIdnight.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_SX300.jpg",
    },
    {
        Id: 39,
        Titre: "Les Misérables",
        Annee: "2012",
        Duree: "158",
        Genre: ["Drama", "Musical", "Romance"],
        Producteur: "Tom Hooper",
        Acteurs: "Hugh Jackman, Russell Crowe, Anne Hathaway, Amanda Seyfried",
        Description:
            "In 19th-century France, Jean Valjean, who for decades has been hunted by the ruthless policeman Javert after breaking parole, agrees to care for a factory worker's daughter. The decision changes their lives forever.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_SX300.jpg",
    },
    {
        Id: 40,
        Titre: "L.A. ConfIdential",
        Annee: "1997",
        Duree: "138",
        Genre: ["Crime", "Drama", "Mystery"],
        Producteur: "Curtis Hanson",
        Acteurs: "Kevin Spacey, Russell Crowe, Guy Pearce, James Cromwell",
        Description:
            "As corruption grows in 1950s LA, three policemen - one strait-laced, one brutal, and one sleazy - investigate a series of murders with their own brand of justice.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNWEwNDhhNWUtYWMzNi00ZTNhLWFiZDAtMjBjZmJhMTU0ZTY2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Id: 41,
        Titre: "Moneyball",
        Annee: "2011",
        Duree: "133",
        Genre: ["Biography", "Drama", "Sport"],
        Producteur: "Bennett Miller",
        Acteurs: "Brad Pitt, Jonah Hill, Philip Seymour Hoffman, Robin Wright",
        Description:
            "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg",
    },
    {
        Id: 42,
        Titre: "The Hangover",
        Annee: "2009",
        Duree: "100",
        Genre: ["Comedy"],
        Producteur: "Todd Phillips",
        Acteurs: "Bradley Cooper, Ed Helms, Zach Galifianakis, Justin Bartha",
        Description:
            "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_SX300.jpg",
    },
    {
        Id: 43,
        Titre: "The Great Beauty",
        Annee: "2013",
        Duree: "141",
        Genre: ["Drama"],
        Producteur: "Paolo Sorrentino",
        Acteurs: "Toni Servillo, Carlo Verdone, Sabrina Ferilli, Carlo Buccirosso",
        Description:
            "Jep Gambardella has seduced his way through the lavish nightlife of Rome for decades, but after his 65th birthday and a shock from the past, Jep looks past the nightclubs and parties to find a timeless landscape of absurd, exquisite beauty.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODg1OTQ2Nl5BMl5BanBnXkFtZTgwNTc2MDY1MDE@._V1_SX300.jpg",
    },
    {
        Id: 44,
        Titre: "Gran Torino",
        Annee: "2008",
        Duree: "116",
        Genre: ["Drama"],
        Producteur: "Clint Eastwood",
        Acteurs: "Clint Eastwood, Christopher Carley, Bee Vang, Ahney Her",
        Description:
            "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTQyMTczMTAxMl5BMl5BanBnXkFtZTcwOTc1ODE0Mg@@._V1_SX300.jpg",
    },
    {
        Id: 45,
        Titre: "Mary and Max",
        Annee: "2009",
        Duree: "92",
        Genre: ["Animation", "Comedy", "Drama"],
        Producteur: "Adam Elliot",
        Acteurs:
            "Toni Collette, Philip Seymour Hoffman, Barry Humphries, Eric Bana",
        Description:
            "A tale of friendship between two unlikely pen pals: Mary, a lonely, eight-Annee-old girl living in the suburbs of Melbourne, and Max, a forty-four-Annee old, severely obese man living in New York.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1NDIyNTA1Nl5BMl5BanBnXkFtZTcwMjc2Njk3OA@@._V1_SX300.jpg",
    },
    {
        Id: 46,
        Titre: "Flight",
        Annee: "2012",
        Duree: "138",
        Genre: ["Drama", "Thriller"],
        Producteur: "Robert Zemeckis",
        Acteurs:
            "Nadine Velazquez, Denzel Washington, Carter Cabassa, Adam C. Edwards",
        Description:
            "An airline pilot saves almost all his passengers on his malfunctioning airliner which eventually crashed, but an investigation into the accIdent reveals something troubling.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjI1OTMxNl5BMl5BanBnXkFtZTcwNjc3NTY1OA@@._V1_SX300.jpg",
    },
    {
        Id: 47,
        Titre: "One Flew Over the Cuckoo's Nest",
        Annee: "1975",
        Duree: "133",
        Genre: ["Drama"],
        Producteur: "Milos Forman",
        Acteurs: "Michael Berryman, Peter Brocco, Dean R. Brooks, Alonzo Brown",
        Description:
            "A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BYmJkODkwOTItZThjZC00MTE0LWIxNzQtYTM3MmQwMGI1OWFiXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    },
    {
        Id: 48,
        Titre: "Requiem for a Dream",
        Annee: "2000",
        Duree: "102",
        Genre: ["Drama"],
        Producteur: "Darren Aronofsky",
        Acteurs: "Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans",
        Description:
            "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODMzODYwOF5BMl5BanBnXkFtZTcwODM2NjA2NQ@@._V1_SX300.jpg",
    },
    {
        Id: 49,
        Titre: "The Truman Show",
        Annee: "1998",
        Duree: "103",
        Genre: ["Comedy", "Drama", "Sci-Fi"],
        Producteur: "Peter Weir",
        Acteurs: "Jim Carrey, Laura Linney, Noah Emmerich, Natascha McElhone",
        Description:
            "An insurance salesman/adjuster discovers his entire life is actually a television show.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Id: 50,
        Titre: "The Artist",
        Annee: "2011",
        Duree: "100",
        Genre: ["Comedy", "Drama", "Romance"],
        Producteur: "Michel Hazanavicius",
        Acteurs: "Jean Dujardin, Bérénice Bejo, John Goodman, James Cromwell",
        Description:
            "A silent movie star meets a young dancer, but the arrival of talking pictures sends their careers in opposite directions.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMzk0NzQxMTM0OV5BMl5BanBnXkFtZTcwMzU4MDYyNQ@@._V1_SX300.jpg",
    },
    {
        Id: 51,
        Titre: "Forrest Gump",
        Annee: "1994",
        Duree: "142",
        Genre: ["Comedy", "Drama"],
        Producteur: "Robert Zemeckis",
        Acteurs:
            "Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys",
        Description:
            "Forrest Gump, while not intelligent, has accIdentally been present at many historic moments, but his true love, Jenny Curran, eludes him.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BYThjM2MwZGMtMzg3Ny00NGRkLWE4M2EtYTBiNWMzOTY0YTI4XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    },
    {
        Id: 52,
        Titre: "The Hobbit: The Desolation of Smaug",
        Annee: "2013",
        Duree: "161",
        Genre: ["Adventure", "Fantasy"],
        Producteur: "Peter Jackson",
        Acteurs: "Ian McKellen, Martin Freeman, Richard Armitage, Ken Stott",
        Description:
            "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_SX300.jpg",
    },
    {
        Id: 53,
        Titre: "Vicky Cristina Barcelona",
        Annee: "2008",
        Duree: "96",
        Genre: ["Drama", "Romance"],
        Producteur: "Woody Allen",
        Acteurs:
            "Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina",
        Description:
            "Two girlfriends on a summer holIday in Spain become enamored with the same painter, unaware that his ex-wife, with whom he has a tempestuous relationship, is about to re-enter the picture.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NDQ4MTg2MV5BMl5BanBnXkFtZTcwNDUzNjU3MQ@@._V1_SX300.jpg",
    },
    {
        Id: 54,
        Titre: "Slumdog Millionaire",
        Annee: "2008",
        Duree: "120",
        Genre: ["Drama", "Romance"],
        Producteur: "Danny Boyle, Loveleen Tandan",
        Acteurs: "Dev Patel, Saurabh Shukla, Anil Kapoor, Rajendranath Zutshi",
        Description:
            'A Mumbai teen reflects on his upbringing in the slums when he is accused of cheating on the Indian Version of "Who Wants to be a Millionaire?"',
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTU2NTA5NzI0N15BMl5BanBnXkFtZTcwMjUxMjYxMg@@._V1_SX300.jpg",
    },
    {
        Id: 55,
        Titre: "Lost in Translation",
        Annee: "2003",
        Duree: "101",
        Genre: ["Drama"],
        Producteur: "Sofia Coppola",
        Acteurs:
            "Scarlett Johansson, Bill Murray, Akiko Takeshita, Kazuyoshi Minamimagoe",
        Description:
            "A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2NDI5ODk4N15BMl5BanBnXkFtZTYwMTI3NTE3._V1_SX300.jpg",
    },
    {
        Id: 56,
        Titre: "Match Point",
        Annee: "2005",
        Duree: "119",
        Genre: ["Drama", "Romance", "Thriller"],
        Producteur: "Woody Allen",
        Acteurs:
            "Jonathan Rhys Meyers, Alexander Armstrong, Paul Kaye, Matthew Goode",
        Description:
            "At a turning point in his life, a former tennis pro falls for an actress who happens to be dating his friend and soon-to-be brother-in-law.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzNzY4MzE5NF5BMl5BanBnXkFtZTcwMzQ1MDMzMQ@@._V1_SX300.jpg",
    },
    {
        Id: 57,
        Titre: "Psycho",
        Annee: "1960",
        Duree: "109",
        Genre: ["Horror", "Mystery", "Thriller"],
        Producteur: "Alfred Hitchcock",
        Acteurs: "Anthony Perkins, Vera Miles, John Gavin, Janet Leigh",
        Description:
            "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMDI3OWRmOTEtOWJhYi00N2JkLTgwNGItMjdkN2U0NjFiZTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
        Id: 58,
        Titre: "North by Northwest",
        Annee: "1959",
        Duree: "136",
        Genre: ["Action", "Adventure", "Crime"],
        Producteur: "Alfred Hitchcock",
        Acteurs: "Cary Grant, Eva Marie Saint, James Mason, Jessie Royce Landis",
        Description:
            "A hapless New York advertising executive is mistaken for a government agent by a group of foreign spies, and is pursued across the country while he looks for a way to survive.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMjQwMTQ0MzgwNl5BMl5BanBnXkFtZTgwNjc4ODE4MzE@._V1_SX300.jpg",
    },
    {
        Id: 59,
        Titre: "Madagascar: Escape 2 Africa",
        Annee: "2008",
        Duree: "89",
        Genre: ["Animation", "Action", "Adventure"],
        Producteur: "Eric Darnell, Tom McGrath",
        Acteurs: "Ben Stiller, Chris Rock, DavId Schwimmer, Jada Pinkett Smith",
        Description:
            "The animals try to fly back to New York City, but crash-land on an African wildlife refuge, where Alex is reunited with his parents.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExMDA4NDcwMl5BMl5BanBnXkFtZTcwODAxNTQ3MQ@@._V1_SX300.jpg",
    },
    {
        Id: 60,
        Titre: "Despicable Me 2",
        Annee: "2013",
        Duree: "98",
        Genre: ["Animation", "Adventure", "Comedy"],
        Producteur: "Pierre Coffin, Chris Renaud",
        Acteurs: "Steve Carell, Kristen Wiig, Benjamin Bratt, Miranda Cosgrove",
        Description:
            "When Gru, the world's most super-bad turned super-dad has been recruited by a team of officials to stop lethal muscle and a host of Gru's own, He has to fight back with new gadgetry, cars, and more minion madness.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjAyNTcyMF5BMl5BanBnXkFtZTgwODQzMjQ3MDE@._V1_SX300.jpg",
    },
    {
        Id: 61,
        Titre: "Downfall",
        Annee: "2004",
        Duree: "156",
        Genre: ["Biography", "Drama", "History"],
        Producteur: "Oliver Hirschbiegel",
        Acteurs:
            "Bruno Ganz, Alexandra Maria Lara, Corinna Harfouch, Ulrich Matthes",
        Description:
            "Traudl Junge, the final secretary for Adolf Hitler, tells of the Nazi dictator's final days in his Berlin bunker at the end of WWII.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1OTI1MjE2Nl5BMl5BanBnXkFtZTcwMTEwMzc4NA@@._V1_SX300.jpg",
    },
    {
        Id: 62,
        Titre: "Madagascar",
        Annee: "2005",
        Duree: "86",
        Genre: ["Animation", "Adventure", "Comedy"],
        Producteur: "Eric Darnell, Tom McGrath",
        Acteurs: "Ben Stiller, Chris Rock, DavId Schwimmer, Jada Pinkett Smith",
        Description:
            "Spoiled by their upbringing with no Idea what wild life is really like, four animals from New York Central Zoo escape, unwittingly assisted by four absconding penguins, and find themselves in Madagascar, among a bunch of merry lemurs",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NDUwMzQxMF5BMl5BanBnXkFtZTcwMDgwNjgyMQ@@._V1_SX300.jpg",
    },
    {
        Id: 63,
        Titre: "Madagascar 3: Europe's Most Wanted",
        Annee: "2012",
        Duree: "93",
        Genre: ["Animation", "Adventure", "Comedy"],
        Producteur: "Eric Darnell, Tom McGrath, Conrad Vernon",
        Acteurs: "Ben Stiller, Chris Rock, DavId Schwimmer, Jada Pinkett Smith",
        Description:
            "Alex, Marty, Gloria and Melman are still fighting to get home to their beloved Big Apple. Their journey takes them through Europe where they find the perfect cover: a traveling circus, which they reinvent - Madagascar style.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTIzNzk2MF5BMl5BanBnXkFtZTcwMDcwMzQxNw@@._V1_SX300.jpg",
    },
    {
        Id: 64,
        Titre: "God Bless America",
        Annee: "2011",
        Duree: "105",
        Genre: ["Comedy", "Crime"],
        Producteur: "Bobcat Goldthwait",
        Acteurs:
            "Joel Murray, Tara Lynne Barr, Melinda Page Hamilton, Mackenzie Brooke Smith",
        Description:
            "On a mission to rId society of its most repellent citizens, terminally ill Frank makes an unlikely accomplice in 16-Annee-old Roxy.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMTc1MzA4NF5BMl5BanBnXkFtZTcwNzQwMTgzNw@@._V1_SX300.jpg",
    },
    {
        Id: 65,
        Titre: "The Social Network",
        Annee: "2010",
        Duree: "120",
        Genre: ["Biography", "Drama"],
        Producteur: "DavId Fincher",
        Acteurs: "Jesse Eisenberg, Rooney Mara, Bryan Barter, Dustin Fitzsimons",
        Description:
            "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their Idea, and the co-founder who was later squeezed out of the business.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2ODk0NDAwMF5BMl5BanBnXkFtZTcwNTM1MDc2Mw@@._V1_SX300.jpg",
    },
    {
        Id: 66,
        Titre: "The Pianist",
        Annee: "2002",
        Duree: "150",
        Genre: ["Biography", "Drama", "War"],
        Producteur: "Roman Polanski",
        Acteurs: "Adrien Brody, Emilia Fox, Michal Zebrowski, Ed Stoppard",
        Description:
            "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTc4OTkyOTA3OF5BMl5BanBnXkFtZTYwMDIxNjk5._V1_SX300.jpg",
    },
    {
        Id: 67,
        Titre: "Alive",
        Annee: "1993",
        Duree: "120",
        Genre: ["Adventure", "Biography", "Drama"],
        Producteur: "Frank Marshall",
        Acteurs: "Ethan Hawke, Vincent Spano, Josh Hamilton, Bruce Ramsay",
        Description:
            "Uruguayan rugby team stranded in the snow swept Andes are forced to use desperate measures to survive after a plane crash.",
        ImageUrl: "",
    },
    {
        Id: 68,
        Titre: "Casablanca",
        Annee: "1942",
        Duree: "102",
        Genre: ["Drama", "Romance", "War"],
        Producteur: "Michael Curtiz",
        Acteurs: "Humphrey Bogart, IngrId Bergman, Paul HenreId, Claude Rains",
        Description:
            "In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwNDYyNTk2N15BMl5BanBnXkFtZTgwMjQ0OTMyMjE@._V1_SX300.jpg",
    },
    {
        Id: 69,
        Titre: "American Gangster",
        Annee: "2007",
        Duree: "157",
        Genre: ["Biography", "Crime", "Drama"],
        Producteur: "RIdley Scott",
        Acteurs: "Denzel Washington, Russell Crowe, Chiwetel Ejiofor, Josh Brolin",
        Description:
            "In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNzY5MDA5MV5BMl5BanBnXkFtZTcwMjg4MzI3MQ@@._V1_SX300.jpg",
    },
    {
        Id: 70,
        Titre: "Catch Me If You Can",
        Annee: "2002",
        Duree: "141",
        Genre: ["Biography", "Crime", "Drama"],
        Producteur: "Steven Spielberg",
        Acteurs: "Leonardo DiCaprio, Tom Hanks, Christopher Walken, Martin Sheen",
        Description:
            "The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg",
    },
    {
        Id: 71,
        Titre: "American History X",
        Annee: "1998",
        Duree: "119",
        Genre: ["Crime", "Drama"],
        Producteur: "Tony Kaye",
        Acteurs: "Edward Norton, Edward Furlong, Beverly D'Angelo, Jennifer Lien",
        Description:
            "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he dId.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    },
    {
        Id: 72,
        Titre: "Casino",
        Annee: "1995",
        Duree: "178",
        Genre: ["Biography", "Crime", "Drama"],
        Producteur: "Martin Scorsese",
        Acteurs: "Robert De Niro, Sharon Stone, Joe Pesci, James Woods",
        Description:
            "Greed, deception, money, power, and murder occur between two best friends, a mafia underboss and a casino owner, for a trophy wife over a gambling empire.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    },
    {
        Id: 73,
        Titre: "Pirates of the Caribbean: At World's End",
        Annee: "2007",
        Duree: "169",
        Genre: ["Action", "Adventure", "Fantasy"],
        Producteur: "Gore Verbinski",
        Acteurs: "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
        Description:
            "Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg",
    },
    {
        Id: 74,
        Titre: "Pirates of the Caribbean: On Stranger TIdes",
        Annee: "2011",
        Duree: "136",
        Genre: ["Action", "Adventure", "Fantasy"],
        Producteur: "Rob Marshall",
        Acteurs: "Johnny Depp, Penélope Cruz, Geoffrey Rush, Ian McShane",
        Description:
            "Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard and his daughter are after it too.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg",
    },
    {
        Id: 75,
        Titre: "Crash",
        Annee: "2004",
        Duree: "112",
        Genre: ["Crime", "Drama", "Thriller"],
        Producteur: "Paul Haggis",
        Acteurs: "Karina Arroyave, Dato Bakhtadze, Sandra Bullock, Don Cheadle",
        Description:
            "Los Angeles citizens with vastly separate lives collIde in interweaving stories of race, loss and redemption.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BOTk1OTA1MjIyNV5BMl5BanBnXkFtZTcwODQxMTkyMQ@@._V1_SX300.jpg",
    },
    {
        Id: 76,
        Titre: "Pirates of the Caribbean: The Curse of the Black Pearl",
        Annee: "2003",
        Duree: "143",
        Genre: ["Action", "Adventure", "Fantasy"],
        Producteur: "Gore Verbinski",
        Acteurs: "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
        Description:
            "Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyNDM4MTc2N15BMl5BanBnXkFtZTYwNDk0Mjc3._V1_SX300.jpg",
    },
    {
        Id: 77,
        Titre: "The Lord of the Rings: The Return of the King",
        Annee: "2003",
        Duree: "201",
        Genre: ["Action", "Adventure", "Drama"],
        Producteur: "Peter Jackson",
        Acteurs: "Noel Appleby, Ali Astin, Sean Astin, DavId Aston",
        Description:
            "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4MjA1NTAyMV5BMl5BanBnXkFtZTcwNzM1NDQyMQ@@._V1_SX300.jpg",
    },
    {
        Id: 78,
        Titre: "Oldboy",
        Annee: "2003",
        Duree: "120",
        Genre: ["Drama", "Mystery", "Thriller"],
        Producteur: "Chan-wook Park",
        Acteurs: "Min-sik Choi, Ji-tae Yu, Hye-jeong Kang, Dae-han Ji",
        Description:
            "After being kIdnapped and imprisoned for 15 years, Oh Dae-Su is released, only to find that he must find his captor in 5 days.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg",
    },
    {
        Id: 79,
        Titre: "Chocolat",
        Annee: "2000",
        Duree: "121",
        Genre: ["Drama", "Romance"],
        Producteur: "Lasse Hallström",
        Acteurs:
            "Alfred Molina, Carrie-Anne Moss, Aurelien Parent Koenig, Antonio Gil",
        Description:
            "A woman and her daughter open a chocolate shop in a small French village that shakes up the rigId morality of the community.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4MDI3NTQwMV5BMl5BanBnXkFtZTcwNjIzNDcyMQ@@._V1_SX300.jpg",
    },
    {
        Id: 80,
        Titre: "Casino Royale",
        Annee: "2006",
        Duree: "144",
        Genre: ["Action", "Adventure", "Thriller"],
        Producteur: "Martin Campbell",
        Acteurs: "Daniel Craig, Eva Green, Mads Mikkelsen, Judi Dench",
        Description:
            "Armed with a licence to kill, Secret Agent James Bond sets out on his first mission as 007 and must defeat a weapons dealer in a high stakes game of poker at Casino Royale, but things are not what they seem.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5MjI4NDExNF5BMl5BanBnXkFtZTcwMDM1MjMzMQ@@._V1_SX300.jpg",
    },
    {
        Id: 81,
        Titre: "WALL·E",
        Annee: "2008",
        Duree: "98",
        Genre: ["Animation", "Adventure", "Family"],
        Producteur: "Andrew Stanton",
        Acteurs: "Ben Burtt, Elissa Knight, Jeff Garlin, Fred Willard",
        Description:
            "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decIde the fate of mankind.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczOTA3MzY2N15BMl5BanBnXkFtZTcwOTYwNjE2MQ@@._V1_SX300.jpg",
    },
    {
        Id: 82,
        Titre: "The Wolf of Wall Street",
        Annee: "2013",
        Duree: "180",
        Genre: ["Biography", "Comedy", "Crime"],
        Producteur: "Martin Scorsese",
        Acteurs:
            "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
        Description:
            "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
    },
    {
        Id: 83,
        Titre: "Hellboy II: The Golden Army",
        Annee: "2008",
        Duree: "120",
        Genre: ["Action", "Adventure", "Fantasy"],
        Producteur: "Guillermo del Toro",
        Acteurs: "Ron Perlman, Selma Blair, Doug Jones, John Alexander",
        Description:
            "The mythical world starts a rebellion against humanity in order to rule the Earth, so Hellboy and his team must save the world from the rebellious creatures.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NzgyMjc2Nl5BMl5BanBnXkFtZTcwOTU3MDI3MQ@@._V1_SX300.jpg",
    },
    {
        Id: 84,
        Titre: "Sunset Boulevard",
        Annee: "1950",
        Duree: "110",
        Genre: ["Drama", "Film-Noir", "Romance"],
        Producteur: "Billy Wilder",
        Acteurs: "William Holden, Gloria Swanson, Erich von Stroheim, Nancy Olson",
        Description:
            "A hack screenwriter writes a screenplay for a former silent-film star who has faded into Hollywood obscurity.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTc3NDYzODAwNV5BMl5BanBnXkFtZTgwODg1MTczMTE@._V1_SX300.jpg",
    },
    {
        Id: 85,
        Titre: "I-See-You.Com",
        Annee: "2006",
        Duree: "92",
        Genre: ["Comedy"],
        Producteur: "Eric Steven Stahl",
        Acteurs: "Beau BrIdges, Rosanna Arquette, Mathew Botuchis, Shiri Appleby",
        Description:
            "A 17-Annee-old boy buys mini-cameras and displays the footage online at I-see-you.com. The cash rolls in as the site becomes a major hit. Everyone seems to have fun until it all comes crashing down....",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMDUzNzA5Nl5BMl5BanBnXkFtZTcwMjQ2Njk3MQ@@._V1_SX300.jpg",
    },
    {
        Id: 86,
        Titre: "The Grand Budapest Hotel",
        Annee: "2014",
        Duree: "99",
        Genre: ["Adventure", "Comedy", "Crime"],
        Producteur: "Wes Anderson",
        Acteurs: "Ralph Fiennes, F. Murray Abraham, Mathieu Amalric, Adrien Brody",
        Description:
            "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg",
    },
    {
        Id: 87,
        Titre: "The Hitchhiker's GuIde to the Galaxy",
        Annee: "2005",
        Duree: "109",
        Genre: ["Adventure", "Comedy", "Sci-Fi"],
        Producteur: "Garth Jennings",
        Acteurs: "Bill Bailey, Anna Chancellor, Warwick Davis, Yasiin Bey",
        Description:
            'Mere seconds before the Earth is to be demolished by an alien construction crew, journeyman Arthur Dent is swept off the planet by his friend Ford Prefect, a researcher penning a new edition of "The Hitchhiker\'s GuIde to the Galaxy."',
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMjEwOTk4NjU2MF5BMl5BanBnXkFtZTYwMDA3NzI3._V1_SX300.jpg",
    },
    {
        Id: 88,
        Titre: "Once Upon a Time in America",
        Annee: "1984",
        Duree: "229",
        Genre: ["Crime", "Drama"],
        Producteur: "Sergio Leone",
        Acteurs: "Robert De Niro, James Woods, Elizabeth McGovern, Joe Pesci",
        Description:
            "A former Prohibition-era Jewish gangster returns to the Lower East SIde of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
        Id: 89,
        Titre: "Oblivion",
        Annee: "2013",
        Duree: "124",
        Genre: ["Action", "Adventure", "Mystery"],
        Producteur: "Joseph Kosinski",
        Acteurs: "Tom Cruise, Morgan Freeman, Olga Kurylenko, Andrea Riseborough",
        Description:
            "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDY0MTA4MF5BMl5BanBnXkFtZTcwNzI3MDgxOQ@@._V1_SX300.jpg",
    },
    {
        Id: 90,
        Titre: "V for Vendetta",
        Annee: "2005",
        Duree: "132",
        Genre: ["Action", "Drama", "Thriller"],
        Producteur: "James McTeigue",
        Acteurs: "Natalie Portman, Hugo Weaving, Stephen Rea, Stephen Fry",
        Description:
            'In a future British tyranny, a shadowy freedom fighter, known only by the alias of "V", Descriptions to overthrow it with the help of a young woman.',
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg",
    },
    {
        Id: 91,
        Titre: "Gattaca",
        Annee: "1997",
        Duree: "106",
        Genre: ["Drama", "Sci-Fi", "Thriller"],
        Producteur: "Andrew Niccol",
        Acteurs: "Ethan Hawke, Uma Thurman, Gore VIdal, Xander Berkeley",
        Description:
            "A genetically inferior man assumes the Identity of a superior one in order to pursue his lifelong dream of space travel.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNDQxOTc0MzMtZmRlOS00OWQ5LWI2ZDctOTAwNmMwOTYxYzlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
        Id: 92,
        Titre: "Silver Linings Playbook",
        Annee: "2012",
        Duree: "122",
        Genre: ["Comedy", "Drama", "Romance"],
        Producteur: "DavId O. Russell",
        Acteurs: "Bradley Cooper, Jennifer Lawrence, Robert De Niro, Jacki Weaver",
        Description:
            "After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when Pat meets Tiffany, a mysterious girl with problems of her own.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_SX300.jpg",
    },
    {
        Id: 93,
        Titre: "Alice in Wonderland",
        Annee: "2010",
        Duree: "108",
        Genre: ["Adventure", "Family", "Fantasy"],
        Producteur: "Tim Burton",
        Acteurs: "Johnny Depp, Mia Wasikowska, Helena Bonham Carter, Anne Hathaway",
        Description:
            "Nineteen-Annee-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNjAxMTc0Nl5BMl5BanBnXkFtZTcwODc3ODk5Mg@@._V1_SX300.jpg",
    },
    {
        Id: 94,
        Titre: "Gandhi",
        Annee: "1982",
        Duree: "191",
        Genre: ["Biography", "Drama"],
        Producteur: "Richard Attenborough",
        Acteurs: "Ben Kingsley, Candice Bergen, Edward Fox, John Gielgud",
        Description:
            "Gandhi's character is fully explained as a man of nonviolence. Through his patience, he is able to drive the British out of the subcontinent. And the stubborn nature of Jinnah and his commitment towards Pakistan is portrayed.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMzJiZDRmOWUtYjE2MS00Mjc1LTg1ZDYtNTQxYWJkZTg1OTM4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    },
    {
        Id: 95,
        Titre: "Pacific Rim",
        Annee: "2013",
        Duree: "131",
        Genre: ["Action", "Adventure", "Sci-Fi"],
        Producteur: "Guillermo del Toro",
        Acteurs: "Charlie Hunnam, Diego Klattenhoff, Idris Elba, Rinko Kikuchi",
        Description:
            "As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_SX300.jpg",
    },
    {
        Id: 96,
        Titre: "Kiss Kiss Bang Bang",
        Annee: "2005",
        Duree: "103",
        Genre: ["Comedy", "Crime", "Mystery"],
        Producteur: "Shane Black",
        Acteurs: "Robert Downey Jr., Val Kilmer, Michelle Monaghan, Corbin Bernsen",
        Description:
            "A murder mystery brings together a private eye, a struggling actress, and a thief masquerading as an actor.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTY5NDExMDA3M15BMl5BanBnXkFtZTYwNTc2MzA3._V1_SX300.jpg",
    },
    {
        Id: 97,
        Titre: "The Quiet American",
        Annee: "2002",
        Duree: "101",
        Genre: ["Drama", "Mystery", "Romance"],
        Producteur: "Phillip Noyce",
        Acteurs: "Michael Caine, Brendan Fraser, Do Thi Hai Yen, Rade Serbedzija",
        Description:
            "An older British reporter vies with a young U.S. doctor for the affections of a beautiful Vietnamese woman.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMjE2NTUxNTE3Nl5BMl5BanBnXkFtZTYwNTczMTg5._V1_SX300.jpg",
    },
    {
        Id: 98,
        Titre: "Cloud Atlas",
        Annee: "2012",
        Duree: "172",
        Genre: ["Drama", "Sci-Fi"],
        Producteur: "Tom Tykwer, Lana Wachowski, Lilly Wachowski",
        Acteurs: "Tom Hanks, Halle Berry, Jim Broadbent, Hugo Weaving",
        Description:
            "An exploration of how the actions of indivIdual lives impact one another in the past, present and future, as one soul is shaped from a killer into a hero, and an act of kindness ripples across centuries to inspire a revolution.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SX300.jpg",
    },
    {
        Id: 99,
        Titre: "The Impossible",
        Annee: "2012",
        Duree: "114",
        Genre: ["Drama", "Thriller"],
        Producteur: "J.A. Bayona",
        Acteurs: "Naomi Watts, Ewan McGregor, Tom Holland, Samuel Joslin",
        Description:
            "The story of a tourist family in Thailand caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NTA3NzQ5Nl5BMl5BanBnXkFtZTcwOTYxNjY0OA@@._V1_SX300.jpg",
    },
    {
        Id: 100,
        Titre: "All Quiet on the Western Front",
        Annee: "1930",
        Duree: "136",
        Genre: ["Drama", "War"],
        Producteur: "Lewis Milestone",
        Acteurs: "Louis Wolheim, Lew Ayres, John Wray, Arnold Lucy",
        Description:
            "A young soldier faces profound disillusionment in the soul-destroying horror of World War I.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM5OTg2NDY1NF5BMl5BanBnXkFtZTcwNTQ4MTMwNw@@._V1_SX300.jpg",
    },
    {
        Id: 101,
        Titre: "The English Patient",
        Annee: "1996",
        Duree: "162",
        Genre: ["Drama", "Romance", "War"],
        Producteur: "Anthony Minghella",
        Acteurs:
            "Ralph Fiennes, Juliette Binoche, Willem Dafoe, Kristin Scott Thomas",
        Description:
            "At the close of WWII, a young nurse tends to a badly-burned plane crash victim. His past is shown in flashbacks, revealing an involvement in a fateful love affair.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNDg2OTcxNDE0OF5BMl5BanBnXkFtZTgwOTg2MDM0MDE@._V1_SX300.jpg",
    },
    {
        Id: 102,
        Titre: "Dallas Buyers Club",
        Annee: "2013",
        Duree: "117",
        Genre: ["Biography", "Drama"],
        Producteur: "Jean-Marc Vallée",
        Acteurs: "Matthew McConaughey, Jennifer Garner, Jared Leto, Denis O'Hare",
        Description:
            "In 1985 Dallas, electrician and hustler Ron Woodroof works around the system to help AIdS patients get the medication they need after he is diagnosed with the disease.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMTA4MzgyNF5BMl5BanBnXkFtZTgwMjEyMjE0MDE@._V1_SX300.jpg",
    },
    {
        Id: 103,
        Titre: "FrIda",
        Annee: "2002",
        Duree: "123",
        Genre: ["Biography", "Drama", "Romance"],
        Producteur: "Julie Taymor",
        Acteurs: "Salma Hayek, Mía Maestro, Alfred Molina, Antonio Banderas",
        Description:
            "A biography of artist FrIda Kahlo, who channeled the pain of a crippling injury and her tempestuous marriage into her work.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTMyODUyMDY1OV5BMl5BanBnXkFtZTYwMDA2OTU3._V1_SX300.jpg",
    },
    {
        Id: 104,
        Titre: "Before Sunrise",
        Annee: "1995",
        Duree: "105",
        Genre: ["Drama", "Romance"],
        Producteur: "Richard Linklater",
        Acteurs: "Ethan Hawke, Julie Delpy, Andrea Eckert, Hanno Pöschl",
        Description:
            "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMTM3MTQxMl5BMl5BanBnXkFtZTcwMDAzNjQ4Mg@@._V1_SX300.jpg",
    },
    {
        Id: 105,
        Titre: "The Rum Diary",
        Annee: "2011",
        Duree: "120",
        Genre: ["Comedy", "Drama"],
        Producteur: "Bruce Robinson",
        Acteurs: "Johnny Depp, Aaron Eckhart, Michael Rispoli, Amber Heard",
        Description:
            "American journalist Paul Kemp takes on a freelance job in Puerto Rico for a local newspaper during the 1960s and struggles to find a balance between island culture and the expatriates who live there.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5ODA4MjYxM15BMl5BanBnXkFtZTcwMTM3NTE5Ng@@._V1_SX300.jpg",
    },
    {
        Id: 106,
        Titre: "The Last Samurai",
        Annee: "2003",
        Duree: "154",
        Genre: ["Action", "Drama", "History"],
        Producteur: "Edward Zwick",
        Acteurs: "Ken Watanabe, Tom Cruise, William Atherton, Chad Lindberg",
        Description:
            "An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_SX300.jpg",
    },
    {
        Id: 107,
        Titre: "Chinatown",
        Annee: "1974",
        Duree: "130",
        Genre: ["Drama", "Mystery", "Thriller"],
        Producteur: "Roman Polanski",
        Acteurs: "Jack Nicholson, Faye Dunaway, John Huston, Perry Lopez",
        Description:
            "A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption and murder.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyNDE5NzItMjAwNC00MGQxLTllNjktZGIzMWFkZjA3OWQ0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Id: 108,
        Titre: "Calvary",
        Annee: "2014",
        Duree: "102",
        Genre: ["Comedy", "Drama"],
        Producteur: "John Michael McDonagh",
        Acteurs: "Brendan Gleeson, Chris O'Dowd, Kelly Reilly, AIdan Gillen",
        Description:
            "After he is threatened during a confession, a good-natured priest must battle the dark forces closing in around him.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MjQ1MjE2M15BMl5BanBnXkFtZTgwNTMzNjE4MTE@._V1_SX300.jpg",
    },
    {
        Id: 109,
        Titre: "Before Sunset",
        Annee: "2004",
        Duree: "80",
        Genre: ["Drama", "Romance"],
        Producteur: "Richard Linklater",
        Acteurs:
            "Ethan Hawke, Julie Delpy, Vernon Dobtcheff, Louise Lemoine Torrès",
        Description:
            "Nine years after Jesse and Celine first met, they encounter each other again on the French leg of Jesse's book tour.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_SX300.jpg",
    },
    {
        Id: 110,
        Titre: "Spirited Away",
        Annee: "2001",
        Duree: "125",
        Genre: ["Animation", "Adventure", "Family"],
        Producteur: "Hayao Miyazaki",
        Acteurs: "Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naitô",
        Description:
            "During her family's move to the suburbs, a sullen 10-Annee-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjYxMDcyMzIzNl5BMl5BanBnXkFtZTYwNDg2MDU3._V1_SX300.jpg",
    },
    {
        Id: 111,
        Titre: "Indochine",
        Annee: "1992",
        Duree: "159",
        Genre: ["Drama", "Romance"],
        Producteur: "Régis Wargnier",
        Acteurs: "Catherine Deneuve, Vincent Perez, Linh Dan Pham, Jean Yanne",
        Description:
            "This story is set in 1930, at the time when French colonial rule in Indochina is ending. A wIdowed French woman who works in the rubber fields, raises a Vietnamese princess as if she was ...",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1MTkzNzA3NF5BMl5BanBnXkFtZTYwNTI2MzU5._V1_SX300.jpg",
    },
    {
        Id: 112,
        Titre: "Birdman or (The Unexpected Virtue of Ignorance)",
        Annee: "2014",
        Duree: "119",
        Genre: ["Comedy", "Drama", "Romance"],
        Producteur: "Alejandro G. Iñárritu",
        Acteurs: "Michael Keaton, Emma Stone, Kenny Chin, Jamahl Garrison-Lowe",
        Description:
            "Illustrated upon the progress of his latest Broadway play, a former popular actor's struggle to cope with his current life as a wasted actor is shown.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_SX300.jpg",
    },
    {
        Id: 113,
        Titre: "Boyhood",
        Annee: "2014",
        Duree: "165",
        Genre: ["Drama"],
        Producteur: "Richard Linklater",
        Acteurs:
            "Ellar Coltrane, Patricia Arquette, Elijah Smith, Lorelei Linklater",
        Description:
            "The life of Mason, from early childhood to his arrival at college.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzNDc2MDc0N15BMl5BanBnXkFtZTgwOTcwMDQ5MTE@._V1_SX300.jpg",
    },
    {
        Id: 114,
        Titre: "12 Angry Men",
        Annee: "1957",
        Duree: "96",
        Genre: ["Crime", "Drama"],
        Producteur: "SIdney Lumet",
        Acteurs: "Martin Balsam, John Fiedler, Lee J. Cobb, E.G. Marshall",
        Description:
            "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsIder the evIdence.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SX300.jpg",
    },
    {
        Id: 115,
        Titre: "The Imitation Game",
        Annee: "2014",
        Duree: "114",
        Genre: ["Biography", "Drama", "Thriller"],
        Producteur: "Morten Tyldum",
        Acteurs:
            "Benedict Cumberbatch, Keira Knightley, Matthew Goode, Rory Kinnear",
        Description:
            "During World War II, mathematician Alan Turing tries to crack the enigma code with help from fellow mathematicians.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNDkwNTEyMzkzNl5BMl5BanBnXkFtZTgwNTAwNzk3MjE@._V1_SX300.jpg",
    },
    {
        Id: 116,
        Titre: "Interstellar",
        Annee: "2014",
        Duree: "169",
        Genre: ["Adventure", "Drama", "Sci-Fi"],
        Producteur: "Christopher Nolan",
        Acteurs: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        Description:
            "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    },
    {
        Id: 117,
        Titre: "Big Nothing",
        Annee: "2006",
        Duree: "86",
        Genre: ["Comedy", "Crime", "Thriller"],
        Producteur: "Jean-Baptiste Andrea",
        Acteurs: "DavId Schwimmer, Simon Pegg, Alice Eve, Natascha McElhone",
        Description:
            "A frustrated, unemployed teacher joining forces with a scammer and his girlfriend in a blackmailing scheme.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NTc2NjYwOV5BMl5BanBnXkFtZTcwMzk5OTY0MQ@@._V1_SX300.jpg",
    },
    {
        Id: 118,
        Titre: "Das Boot",
        Annee: "1981",
        Duree: "149",
        Genre: ["Adventure", "Drama", "Thriller"],
        Producteur: "Wolfgang Petersen",
        Acteurs:
            "Jürgen Prochnow, Herbert Grönemeyer, Klaus Wennemann, Hubertus Bengsch",
        Description:
            "The claustrophobic world of a WWII German U-boat; boredom, filth, and sheer terror.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5Mzk5OTQ0Nl5BMl5BanBnXkFtZTYwNzUwMTQ5._V1_SX300.jpg",
    },
    {
        Id: 119,
        Titre: "Shrek 2",
        Annee: "2004",
        Duree: "93",
        Genre: ["Animation", "Adventure", "Comedy"],
        Producteur: "Andrew Adamson, Kelly Asbury, Conrad Vernon",
        Acteurs: "Mike Myers, Eddie Murphy, Cameron Diaz, Julie Andrews",
        Description:
            "Princess Fiona's parents invite her and Shrek to dinner to celebrate her marriage. If only they knew the newlyweds were both ogres.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@._V1_SX300.jpg",
    },
    {
        Id: 120,
        Titre: "Sin City",
        Annee: "2005",
        Duree: "124",
        Genre: ["Crime", "Thriller"],
        Producteur: "Frank Miller, Robert Rodriguez, Quentin Tarantino",
        Acteurs: "Jessica Alba, Devon Aoki, Alexis Bledel, Powers Boothe",
        Description:
            "A film that explores the dark and miserable town, Basin City, and tells the story of three different people, all caught up in violent corruption.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BODZmYjMwNzEtNzVhNC00ZTRmLTk2M2UtNzE1MTQ2ZDAxNjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
        Id: 121,
        Titre: "Nebraska",
        Annee: "2013",
        Duree: "115",
        Genre: ["Adventure", "Comedy", "Drama"],
        Producteur: "Alexander Payne",
        Acteurs: "Bruce Dern, Will Forte, June Squibb, Bob Odenkirk",
        Description:
            "An aging, booze-addled father makes the trip from Montana to Nebraska with his estranged son in order to claim a million-dollar Mega Sweepstakes Marketing prize.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2Mjk2NDkyMl5BMl5BanBnXkFtZTgwNTk0NzcyMDE@._V1_SX300.jpg",
    },
    {
        Id: 122,
        Titre: "Shrek",
        Annee: "2001",
        Duree: "90",
        Genre: ["Animation", "Adventure", "Comedy"],
        Producteur: "Andrew Adamson, Vicky Jenson",
        Acteurs: "Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow",
        Description:
            "After his swamp is filled with magical creatures, an ogre agrees to rescue a princess for a villainous lord in order to get his land back.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTE1NTE0M15BMl5BanBnXkFtZTgwNjY4NTYxMTE@._V1_SX300.jpg",
    },
    {
        Id: 123,
        Titre: "Mr. & Mrs. Smith",
        Annee: "2005",
        Duree: "120",
        Genre: ["Action", "Comedy", "Crime"],
        Producteur: "Doug Liman",
        Acteurs: "Brad Pitt, Angelina Jolie, Vince Vaughn, Adam Brody",
        Description:
            "A bored married couple is surprised to learn that they are both assassins hired by competing agencies to kill each other.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_SX300.jpg",
    },
    {
        Id: 124,
        Titre: "Original Sin",
        Annee: "2001",
        Duree: "116",
        Genre: ["Drama", "Mystery", "Romance"],
        Producteur: "Michael Cristofer",
        Acteurs: "Antonio Banderas, Angelina Jolie, Thomas Jane, Jack Thompson",
        Description:
            "A woman along with her lover, plan to con a rich man by marrying him and on earning his trust running away with all his money. Everything goes as planned until she actually begins to fall in love with him.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BODg3Mjg0MDY4M15BMl5BanBnXkFtZTcwNjY5MDQ2NA@@._V1_SX300.jpg",
    },
    {
        Id: 125,
        Titre: "Shrek Forever After",
        Annee: "2010",
        Duree: "93",
        Genre: ["Animation", "Adventure", "Comedy"],
        Producteur: "Mike Mitchell",
        Acteurs: "Mike Myers, Eddie Murphy, Cameron Diaz, Antonio Banderas",
        Description:
            "Rumpelstiltskin tricks a mId-life crisis burdened Shrek into allowing himself to be erased from existence and cast in a dark alternate timeline where Rumpel rules supreme.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTY0OTU1NzkxMl5BMl5BanBnXkFtZTcwMzI2NDUzMw@@._V1_SX300.jpg",
    },
    {
        Id: 126,
        Titre: "Before MIdnight",
        Annee: "2013",
        Duree: "109",
        Genre: ["Drama", "Romance"],
        Producteur: "Richard Linklater",
        Acteurs:
            "Ethan Hawke, Julie Delpy, Seamus Davey-Fitzpatrick, Jennifer Prior",
        Description:
            "We meet Jesse and Celine nine years on in Greece. Almost two decades have passed since their first meeting on that train bound for Vienna.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMjA5NzgxODE2NF5BMl5BanBnXkFtZTcwNTI1NTI0OQ@@._V1_SX300.jpg",
    },
    {
        Id: 127,
        Titre: "Despicable Me",
        Annee: "2010",
        Duree: "95",
        Genre: ["Animation", "Adventure", "Comedy"],
        Producteur: "Pierre Coffin, Chris Renaud",
        Acteurs: "Steve Carell, Jason Segel, Russell Brand, Julie Andrews",
        Description:
            "When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_SX300.jpg",
    },
    {
        Id: 128,
        Titre: "Troy",
        Annee: "2004",
        Duree: "163",
        Genre: ["Adventure"],
        Producteur: "Wolfgang Petersen",
        Acteurs: "Julian Glover, Brian Cox, Nathan Jones, Adoni Maropis",
        Description:
            "An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_SX300.jpg",
    },
    {
        Id: 129,
        Titre: "The Hobbit: An Unexpected Journey",
        Annee: "2012",
        Duree: "169",
        Genre: ["Adventure", "Fantasy"],
        Producteur: "Peter Jackson",
        Acteurs: "Ian McKellen, Martin Freeman, Richard Armitage, Ken Stott",
        Description:
            "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg",
    },
    {
        Id: 130,
        Titre: "The Great Gatsby",
        Annee: "2013",
        Duree: "143",
        Genre: ["Drama", "Romance"],
        Producteur: "Baz Luhrmann",
        Acteurs: "Lisa Adam, Frank AldrIdge, Amitabh Bachchan, Steve Bisley",
        Description:
            "A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg",
    },
    {
        Id: 131,
        Titre: "Ice Age",
        Annee: "2002",
        Duree: "81",
        Genre: ["Animation", "Adventure", "Comedy"],
        Producteur: "Chris Wedge, Carlos Saldanha",
        Acteurs: "Ray Romano, John Leguizamo, Denis Leary, Goran Visnjic",
        Description:
            "Set during the Ice Age, a sabertooth tiger, a sloth, and a wooly mammoth find a lost human infant, and they try to return him to his tribe.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNzI1ODA0MF5BMl5BanBnXkFtZTYwODIxODY3._V1_SX300.jpg",
    },
    {
        Id: 132,
        Titre: "The Lord of the Rings: The Fellowship of the Ring",
        Annee: "2001",
        Duree: "178",
        Genre: ["Action", "Adventure", "Drama"],
        Producteur: "Peter Jackson",
        Acteurs: "Alan Howard, Noel Appleby, Sean Astin, Sala Baker",
        Description:
            "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save MIddle Earth from the Dark Lord Sauron.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNTEyMjAwMDU1OV5BMl5BanBnXkFtZTcwNDQyNTkxMw@@._V1_SX300.jpg",
    },
    {
        Id: 133,
        Titre: "The Lord of the Rings: The Two Towers",
        Annee: "2002",
        Duree: "179",
        Genre: ["Action", "Adventure", "Drama"],
        Producteur: "Peter Jackson",
        Acteurs: "Bruce Allpress, Sean Astin, John Bach, Sala Baker",
        Description:
            "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divIded fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SX300.jpg",
    },
    {
        Id: 134,
        Titre: "Ex Machina",
        Annee: "2015",
        Duree: "108",
        Genre: ["Drama", "Mystery", "Sci-Fi"],
        Producteur: "Alex Garland",
        Acteurs: "Domhnall Gleeson, Corey Johnson, Oscar Isaac, Alicia Vikander",
        Description:
            "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoId A.I.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg",
    },
    {
        Id: 135,
        Titre: "The Theory of Everything",
        Annee: "2014",
        Duree: "123",
        Genre: ["Biography", "Drama", "Romance"],
        Producteur: "James Marsh",
        Acteurs: "Eddie Redmayne, Felicity Jones, Tom Prior, Sophie Perry",
        Description:
            "A look at the relationship between the famous physicist Stephen Hawking and his wife.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_SX300.jpg",
    },
    {
        Id: 136,
        Titre: "Shogun",
        Annee: "1980",
        Duree: "60",
        Genre: ["Adventure", "Drama", "History"],
        Producteur: "N/A",
        Acteurs: "Richard Chamberlain, Toshirô Mifune, Yôko Shimada, Furankî Sakai",
        Description:
            "A English navigator becomes both a player and pawn in the complex political games in feudal Japan.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1ODI4NzYxMl5BMl5BanBnXkFtZTcwNDA4MzUxMQ@@._V1_SX300.jpg",
    },
    {
        Id: 137,
        Titre: "Spotlight",
        Annee: "2015",
        Duree: "128",
        Genre: ["Biography", "Crime", "Drama"],
        Producteur: "Tom McCarthy",
        Acteurs: "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber",
        Description:
            "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_SX300.jpg",
    },
    {
        Id: 138,
        Titre: "Vertigo",
        Annee: "1958",
        Duree: "128",
        Genre: ["Mystery", "Romance", "Thriller"],
        Producteur: "Alfred Hitchcock",
        Acteurs: "James Stewart, Kim Novak, Barbara Bel Geddes, Tom Helmore",
        Description:
            "A San Francisco detective suffering from acrophobia investigates the strange activities of an old friend's wife, all the while becoming dangerously obsessed with her.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BNzY0NzQyNzQzOF5BMl5BanBnXkFtZTcwMTgwNTk4OQ@@._V1_SX300.jpg",
    },
    {
        Id: 139,
        Titre: "Whiplash",
        Annee: "2014",
        Duree: "107",
        Genre: ["Drama", "Music"],
        Producteur: "Damien Chazelle",
        Acteurs: "Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist",
        Description:
            "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4OTQ3MDUyMV5BMl5BanBnXkFtZTgwOTA2MjU0MjE@._V1_SX300.jpg",
    },
    {
        Id: 140,
        Titre: "The Lives of Others",
        Annee: "2006",
        Duree: "137",
        Genre: ["Drama", "Thriller"],
        Producteur: "Florian Henckel von Donnersmarck",
        Acteurs: "Martina Gedeck, Ulrich Mühe, Sebastian Koch, Ulrich Tukur",
        Description:
            "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BNDUzNjYwNDYyNl5BMl5BanBnXkFtZTcwNjU3ODQ0MQ@@._V1_SX300.jpg",
    },
    {
        Id: 141,
        Titre: "Hotel Rwanda",
        Annee: "2004",
        Duree: "121",
        Genre: ["Drama", "History", "War"],
        Producteur: "Terry George",
        Acteurs: "Xolani Mali, Don Cheadle, Desmond Dube, Hakeem Kae-Kazim",
        Description:
            "Paul Rusesabagina was a hotel manager who housed over a thousand Tutsi refugees during their struggle against the Hutu militia in Rwanda.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2MzQyNTc1M15BMl5BanBnXkFtZTYwMjExNjc3._V1_SX300.jpg",
    },
    {
        Id: 142,
        Titre: "The Martian",
        Annee: "2015",
        Duree: "144",
        Genre: ["Adventure", "Drama", "Sci-Fi"],
        Producteur: "RIdley Scott",
        Acteurs: "Matt Damon, Jessica Chastain, Kristen Wiig, Jeff Daniels",
        Description:
            "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg",
    },
    {
        Id: 143,
        Titre: "To Kill a Mockingbird",
        Annee: "1962",
        Duree: "129",
        Genre: ["Crime", "Drama"],
        Producteur: "Robert Mulligan",
        Acteurs: "Gregory Peck, John Megna, Frank Overton, Rosemary Murphy",
        Description:
            "Atticus Finch, a lawyer in the Depression-era South, defends a black man against an undeserved rape charge, and his kIds against prejudice.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMjA4MzI1NDY2Nl5BMl5BanBnXkFtZTcwMTcyODc5Mw@@._V1_SX300.jpg",
    },
    {
        Id: 144,
        Titre: "The Hateful Eight",
        Annee: "2015",
        Duree: "187",
        Genre: ["Crime", "Drama", "Mystery"],
        Producteur: "Quentin Tarantino",
        Acteurs:
            "Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh, Walton Goggins",
        Description:
            "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg",
    },
    {
        Id: 145,
        Titre: "A Separation",
        Annee: "2011",
        Duree: "123",
        Genre: ["Drama", "Mystery"],
        Producteur: "Asghar Farhadi",
        Acteurs: "Peyman Moaadi, Leila Hatami, Sareh Bayat, Shahab Hosseini",
        Description:
            "A married couple are faced with a difficult decision - to improve the life of their child by moving to another country or to stay in Iran and look after a deteriorating parent who has Alzheimer's disease.",
        ImageUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTYzMzU4NDUwOF5BMl5BanBnXkFtZTcwMTM5MjA5Ng@@._V1_SX300.jpg",
    },
    {
        Id: 146,
        Titre: "The Big Short",
        Annee: "2015",
        Duree: "130",
        Genre: ["Biography", "Comedy", "Drama"],
        Producteur: "Adam McKay",
        Acteurs: "Ryan Gosling, Rudy Eisenzopf, Casey Groves, Charlie Talbert",
        Description:
            "Four denizens in the world of high-finance predict the credit and housing bubble collapse of the mId-2000s, and decIde to take on the big banks for their greed and lack of foresight.",
        ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
];


const categories = [
    "Comedy",
    "Fantasy",
    "Crime",
    "Drama",
    "Music",
    "Adventure",
    "History",
    "Thriller",
    "Animation",
    "Family",
    "Mystery",
    "Biography",
    "Action",
    "Film-Noir",
    "Romance",
    "Sci-Fi",
    "War",
    "Western",
    "Horror",
    "Musical",
    "Sport",
    "Sport",
];