require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    user: process.env.MONGO_USERNAME,
    pass: process.env.MONGO_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const dataSchema = new mongoose.Schema({
    name: String,
    id: Number,
    description: String,
    image: String,
    velocity: String,
    distance: String
});
const Planet = mongoose.model('planets', dataSchema);

const planets = [
    {
        id: 0,
        name: 'Sun',
        description: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core.',
        image: 'images/sun.png',
        velocity: '720,000 km/h',
        distance: '0 km'
    },
    {
        id: 1,
        name: 'Mercury',
        description: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. It has no atmosphere to retain heat, causing extreme temperature swings between day and night.',
        image: 'images/mercury.png',
        velocity: '170,503 km/h',
        distance: '77.3 million km'
    },
    {
        id: 2,
        name: 'Venus',
        description: 'Venus is the second planet from the Sun and the hottest planet in the Solar System. Its thick atmosphere of carbon dioxide traps heat in a runaway greenhouse effect.',
        image: 'images/venus.png',
        velocity: '126,074 km/h',
        distance: '261 million km'
    },
    {
        id: 3,
        name: 'Earth',
        description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of Earth\'s surface is covered with water.',
        image: 'images/earth.png',
        velocity: '107,218 km/h',
        distance: '384,400 km from Moon'
    },
    {
        id: 4,
        name: 'Mars',
        description: 'Mars is the fourth planet from the Sun and is often called the Red Planet due to its reddish appearance caused by iron oxide on its surface.',
        image: 'images/mars.png',
        velocity: '86,677 km/h',
        distance: '225 million km'
    },
    {
        id: 5,
        name: 'Jupiter',
        description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all other planets combined.',
        image: 'images/jupiter.png',
        velocity: '47,002 km/h',
        distance: '628.7 million km'
    },
    {
        id: 6,
        name: 'Saturn',
        description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System. It is a gas giant known for its stunning ring system made of ice and rock.',
        image: 'images/saturn.png',
        velocity: '34,701 km/h',
        distance: '1.2 billion km'
    },
    {
        id: 7,
        name: 'Uranus',
        description: 'Uranus is the seventh planet from the Sun. It has the coldest planetary atmosphere in the Solar System and rotates on its side with an axial tilt of about 98 degrees.',
        image: 'images/uranus.png',
        velocity: '24,477 km/h',
        distance: '2.6 billion km'
    },
    {
        id: 8,
        name: 'Neptune',
        description: 'Neptune is the eighth and farthest known planet from the Sun. It is the densest giant planet and has the strongest winds in the Solar System, reaching 2,100 km/h.',
        image: 'images/neptune.png',
        velocity: '19,566 km/h',
        distance: '4.4 billion km'
    }
];

async function seed() {
    try {
        await Planet.deleteMany({});
        await Planet.insertMany(planets);
        console.log('Seeded', planets.length, 'planets successfully.');
    } catch (err) {
        console.error('Seed error:', err);
    } finally {
        mongoose.connection.close();
    }
}

seed();
