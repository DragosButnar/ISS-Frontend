function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function choose(choices) {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

const title_first = ["Spy", "Stranger", "Visitor", "Guest", "Agents", "Rebels", "Heroes", "Impostors", "Colors",
"Spring", "War", "Angel", "Assassin", "Love", "Voice", "Rise", "Doctors", "Courage",
"Frightened", "Planet", "Death", "Dog", "Rat", "King", "Fool", "Clown", "Magicians", "Silence",
"Passion", "Vampires", "Werewolves", "Aliens", "Gods", "God", "Root", "Life", "Scourge", "Dark", "Light", "Age", "Cult", "Whisper","Nexus"]
const title_second = ["Of", "Among", "And", "By", "After", "Under", "Above", "With", "Below", "Beyond", "VS", "Before", "Between"]
const title_third = ["The Fallen", "Our Legacy", "Eternity", "Outer Space", "Us", "War", "Love", "Voiceless", "Rome",
"Aliens", "The Apes", "Earth", "The Galaxy", "A Salesman", "Me", "Adam Sandler",
"Butcher", "The Pants", "Skynet", "AI", "Halloween", "The Lambs", "Christ", "Vampires",
"Werewolves", "Aliens", "The Gods", "Dark", "Light", "Mafia", "Utopia", "Alpha", "Beta", "Delta", "Omega", "Sigma",
"Paradox", "Solitude", "Eclipse", "Time"
]
//Impostors among us: 9.5492742551566080977845683728037e-5 %
// eslint-disable-next-line no-unused-vars
const descriptions = [
"People fall in love.",
"Bloodshed.",
"Anarchy.",
"From the creators of Saw, Saw II and Saw 3D...",
"ALIENS!",
"War...War never changes...",
"Werewolves?",
"Vampires?",
"Sign me up!",
"Yes, please!",
"They were just a regular space cowboy...",
"From the darkness...",
"This historical tale is like no other...",
"That town ain't big enough for the two of 'em...",
"...",
"You know the drill:",
"Follow this wacky parent's attempt to win their family back!",
"Starring Adam Sandler.",
"This Christmas...",
"Look out!",
"It's a tale as old as time:",
"From the creators of Shark Tale...",
"Their tyranny knew no bounds...",
"They are already married?!?!",
"In this epic tale by George R.R. Martin:",
"In space, no one can hear you scream...",
"In space, no one can hear you... cream?",
"In this movie that is full of lines that have aged poorly...",
"Directed by Michael Bay.",
"Blood.",
"Honor.",
"Respect.",
"Fear is not an option.",
"Do you believe in love at first sight?",
"Do you believe in gravity?",
"They will certainly steal your heart!",
"Step into the night.",
"Live. Die. Repeat.",
"We are made by history.",
"When you're going through hell, keep going!",
"From the creators of High School Musical...",
"It's time to sing and dance!",
"Experience this classic teen drama!",
"Experience this movie in a whole new way with the Director's cut exclusive new scene.",
"That's right! We finally made a movie!",
]

const genres = ["Action", "Comedy", "Crime", "Romance", "Horror", "Drama", "Fantasy", "Historical", "SF", "Thriller",
"Western", "Family", "Holiday"]

function generate_movie_title(){
    return("" + choose(title_first) + " " + choose(title_second) + " " + choose(title_third))
}

function generate_movie_genre(){
    return("" + choose(genres))
}

function generate_movie_year(){
    return getRndInteger(1888, 2025)
}

module.exports={generate_movie_title, generate_movie_genre, generate_movie_year}
