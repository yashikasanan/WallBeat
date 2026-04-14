



const songs = [
    { id: 1, songsName: 'Shri Krishna', songArtist: 'Jubin Natyal', songImg: 'images_WallBeat/1_spot.jpg',songPath: 'audio_spot/audio_1.mp3'},
    { id: 2, songsName: 'Clara Bow', songArtist: "Taylor Swift", songImg: 'images_WallBeat/2_spot.jpg', songPath: 'audio_spot/audio_2.mp3'},
    { id: 3, songsName: 'Winning Speech', songArtist: "Karan Aujla", songImg: 'images_WallBeat/3_spot.jpg', songPath: 'audio_spot/audio_3.mp3'},
    { id: 4, songsName: 'Ordinary', songArtist: "Alex Warren", songImg: 'images_WallBeat/4_stop.png', songPath: 'audio_spot/audio_4.mp3'},
    { id: 5, songsName: 'Om Namah Shivay', songArtist: 'Om Namah Shivay', songImg: 'images_WallBeat/6_spot.jpg', songPath: 'audio_spot/audio_5.mp3'},
    { id: 6, songsName: 'Golden', songArtist: "Ejae", songImg: 'images_WallBeat/7_spot.jpg', songPath: 'audio_spot/audio_6.mp3'},
    { id: 7, songsName: 'Don', songArtist: 'Diljit Dosanjh', songImg: 'images_WallBeat/boa5.webp', songPath: 'audio_spot/audio_7.mp3'},
    { id: 8, songsName: 'Hanuman Chalisa', songArtist: 'Various', songImg: 'images_WallBeat/boa9.jpg', songPath: 'audio_spot/audio_8.mp3'}
]

const highEnergyPlaylist = [
    { id: 1, songsName: "Winning Speech", songArtist: "Karan Aujla", songImg: "images_WallBeat/3_spot.jpg", songPath: "audio_spot/audio_3.mp3" },
    { id: 2, songsName: "Don", songArtist: "Diljit Dosanjh", songImg: "images_WallBeat/boa5.webp", songPath: "audio_spot/audio_7.mp3" },
    { id: 3, songsName: "Golden", songArtist: "Ejae", songImg: "images_WallBeat/7_spot.jpg", songPath: "audio_spot/audio_6.mp3" },
    { id: 2, songsName: 'Clara Bow', songArtist: "Taylor Swift", songImg: 'images_WallBeat/2_spot.jpg', songPath: 'audio_spot/audio_2.mp3'},
    { id: 4, songsName: 'Ordinary', songArtist: "Alex Warren", songImg: 'images_WallBeat/4_stop.png', songPath: 'audio_spot/audio_4.mp3'},
];

const chillPlaylist = [
    { id: 1, songsName: "Shri Krishna", songArtist: "Jubin Natyal", songImg: "images_WallBeat/1_spot.jpg", songPath: "audio_spot/audio_1.mp3" },
    { id: 2, songsName: "Hanuman Chalisa", songArtist: "Various", songImg: "images_WallBeat/boa9.jpg", songPath: "audio_spot/audio_8.mp3" },
    { id: 3, songsName: "Om Namah Shivay", songArtist: "Hansraj Raghuwanshi", songImg: "images_WallBeat/6_spot.jpg", songPath: "audio_spot/audio_5.mp3" },
];


let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio();

const playBtn = document.getElementById("play");
const forwardBtn = document.getElementById("forward");
const backwardBtn = document.getElementById("backward");
const progressBar = document.getElementById("progressBar");
const nowImg = document.querySelector(".player-bar img");
const nowTitle = document.querySelector(".img-title-info");
const nowArtist = document.querySelector(".img-des-info");

// functions

function loadSong(index) {
    const song = songs[index];
    audio.src = song.songPath;
    nowImg.src = song.songImg;
    nowTitle.textContent = song.songsName;
    nowArtist.textContent = song.songArtist;

    progressBar.value = 0;
    progressBar.style.background = `linear-gradient(to right, #c253dc 0%, #111 0%)`
}
function playSong() {
    audio.play();
    isPlaying = true;
    playBtn.classList.replace("fa-circle-play", "fa-circle-pause");
}

function pauseSong() {
    audio.pause();
    isPlaying = false;
    playBtn.classList.replace("fa-circle-pause", "fa-circle-play");

}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 +songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}


// event listener

playBtn.addEventListener("click", () => {
    isPlaying? pauseSong() : playSong();
})

forwardBtn.addEventListener("click", nextSong);
backwardBtn.addEventListener("click", prevSong);

audio.addEventListener("timeupdate", () => {
    progressBar.value = (audio.currentTime / audio.duration)*100;
})

progressBar.addEventListener('input', function (){
    let value = this.value;
    this.style.background = `linear-gradient(to right, #c253dc ${value}%, #111 ${value}%)`
    audio.currentTime = (value/100) * audio.duration;
});

// making card buttons work
document.querySelectorAll(".playMusic").forEach((btn) => {
    btn.addEventListener("click", () => {
        const songId = parseInt(btn.id)-1;
    
        if (songId < songs.length) {
            currentSongIndex = songId;
            loadSong(currentSongIndex);
            playSong();
        }
        
    })
})
loadSong(currentSongIndex);

const artistSongs = {
    "Taylor Swift": [
        { id: "ts2", songName: "Anti-Hero", song_art: "Taylor Swift", song_img: "images_WallBeat/boa_1.webp"},
        { id: "ts1", songName: "Blank Space", song_art: "Taylor Swift", song_img: "images_WallBeat/boa_1.webp"},
        { id: "ts3", songName: "Love Story", song_art: "Taylor Swift", song_img: "images_WallBeat/boa_1.webp"},
        { id: "ts4", songName: "Cruel Summer", song_art: "Taylor Swift", song_img: "images_WallBeat/boa_1.webp"},
        { id: "ts5", songName: "The Fate of Ophelia", song_art: "Taylor Swift", song_img: "images_WallBeat/boa_1.webp"},
    ],
    "Sabrina Carpenter" : [
        { id: "sc2", songName: "Manchild", song_art: "Sabrina Carpenter", song_img: "images_WallBeat/5_spot.jpg"},
        { id: "sc1", songName: "Espresso", song_art: "Sabrina Carpenter", song_img: "images_WallBeat/5_spot.jpg"},
        { id: "sc3", songName: "Nonsense", song_art: "Sabrina Carpenter", song_img: "images_WallBeat/5_spot.jpg"},
        { id: "sc4", songName: "Feather", song_art: "Sabrina Carpenter", song_img: "images_WallBeat/5_spot.jpg"},
        { id: "sc5", songName: "Please please please", song_art: "Sabrina Carpenter", song_img: "images_WallBeat/5_spot.jpg"},
    ],
    "Weeknd" : [
        { id: "wk2", songName: "Starboy", song_art: "Weeknd", song_img:"images_WallBeat/boa_2.jpg" },
        { id: "wk1", songName: "Blinding Lights", song_art: "Weeknd", song_img:"images_WallBeat/boa_2.jpg" },
        { id: "wk3", songName: "Die For You", song_art: "Weeknd", song_img:"images_WallBeat/boa_2.jpg" },
        { id: "wk4", songName: "Timeless", song_art: "Weeknd", song_img:"images_WallBeat/boa_2.jpg" },
        { id: "wk5", songName: "Save Your Tears", song_art: "Weeknd", song_img:"images_WallBeat/boa_2.jpg" },
    ],
    "Olivia Dean" :[
        { id: "od2", songName: "Man I Need", song_art: "Olivia Dean", song_img: "images_WallBeat/boa3.webp"},
        { id: "od1", songName: "Dive", song_art: "Olivia Dean", song_img: "images_WallBeat/boa3.webp"},
        { id: "od3", songName: "So Easy(To Fall In Love)", song_art: "Olivia Dean", song_img: "images_WallBeat/boa3.webp"},
        { id: "od4", songName: "Messy", song_art: "Olivia Dean", song_img: "images_WallBeat/boa3.webp"},
        { id: "od5", songName: "Nice To Each Other", song_art: "Olivia Dean", song_img: "images_WallBeat/boa3.webp"},
    ],
    "Miley Cyrus": [
        { id: "mc1", songName: "Flowers", song_art: "Miley Cyrus", song_img: "images_WallBeat/boa4.avif" },
        { id: "mc2", songName: "Wrecking Ball", song_art: "Miley Cyrus", song_img: "images_WallBeat/boa4.avif" },
        { id: "mc3", songName: "Midnight Sky", song_art: "Miley Cyrus", song_img: "images_WallBeat/boa4.avif" },
        { id: "mc4", songName: "Party In The USA", song_art: "Miley Cyrus", song_img: "images_WallBeat/boa4.avif" },
        { id: "mc5", songName: "Angels Like You", song_art: "Miley Cyrus", song_img: "images_WallBeat/boa4.avif" },
    ],
    "Shawn Mendes": [
        { id: "sm2", songName: "Treat You Better", song_art: "Shawn Mendes", song_img: "images_WallBeat/boa7.png" },
        { id: "sm3", songName: "There's Nothing Holdin' Me Back", song_art: "Shawn Mendes", song_img: "images_WallBeat/boa7.png" },
        { id: "sm1", songName: "Stitches", song_art: "Shawn Mendes", song_img: "images_WallBeat/boa7.png" },
        { id: "sm4", songName: "Senorita", song_art: "Shawn Mendes", song_img: "images_WallBeat/boa7.png" },
        { id: "sm5", songName: "Mercy", song_art: "Shawn Mendes", song_img: "images_WallBeat/boa7.png" },
    ],
     "Lana Del Rey": [
        { id: "ld1", songName: "Diet Mountain Dew", song_art: "Lana Del Rey", song_img: "images_WallBeat/boa8.webp" },
        { id: "ld2", songName: "Young and Beautiful", song_art: "Lana Del Rey", song_img: "images_WallBeat/boa8.webp" },
        { id: "ld3", songName: "Cinnamon Girl", song_art: "Lana Del Rey", song_img: "images_WallBeat/boa8.webp" },
        { id: "ld4", songName: "Say Yes To Heaven", song_art: "Lana Del Rey", song_img: "images_WallBeat/boa8.webp" },
        { id: "ld5", songName: "Brooklyn Baby", song_art: "Lana Del Rey", song_img: "images_WallBeat/boa8.webp" },
    ],
    "Dua Lipa": [
        { id: "dl1", songName: "Levitating", song_art: "Dua Lipa", song_img: "images_WallBeat/boa10.jpg" },
        { id: "dl2", songName: "Don't Start Now", song_art: "Dua Lipa", song_img: "images_WallBeat/boa10.jpg" },
        { id: "dl3", songName: "Physical", song_art: "Dua Lipa", song_img: "images_WallBeat/boa10.jpg" },
        { id: "dl4", songName: "New Rules", song_art: "Dua Lipa", song_img: "images_WallBeat/boa10.jpg" },
        { id: "dl5", songName: "Houdini", song_art: "Dua Lipa", song_img: "images_WallBeat/boa10.jpg" },
    ],
};

const albumSongs = {
    "1989": [
        { id: "alb1s1", songsName: "Welcome To New York", song_art: "Taylor Swift", song_img: "images_WallBeat/alb1.png" },
        { id: "alb1s2", songsName: "Blank Space", song_art: "Taylor Swift", song_img: "images_WallBeat/alb1.png" },
        { id: "alb1s3", songsName: "Style", song_art: "Taylor Swift", song_img: "images_WallBeat/alb1.png" },
        { id: "alb1s4", songsName: "Bad Blood", song_art: "Taylor Swift", song_img: "images_WallBeat/alb1.png" },
        { id: "alb1s5", songsName: "Shake It Off", song_art: "Taylor Swift", song_img: "images_WallBeat/alb1.png" },
    ],
    "Midnights": [
        { id: "alb2s1", songsName: "Lavender Haze", song_art: "Taylor Swift", song_img: "images_WallBeat/alb2.png" },
        { id: "alb2s2", songsName: "Maroon", song_art: "Taylor Swift", song_img: "images_WallBeat/alb2.png" },
        { id: "alb2s3", songsName: "Anti-Hero", song_art: "Taylor Swift", song_img: "images_WallBeat/alb2.png" },
        { id: "alb2s4", songsName: "Snow On The Beach", song_art: "Taylor Swift", song_img: "images_WallBeat/alb2.png" },
        { id: "alb2s5", songsName: "Midnight Rain", song_art: "Taylor Swift", song_img: "images_WallBeat/alb2.png" },
    ],
    "Evolve": [
        { id: "alb3s1", songsName: "Whatever It Takes", song_art: "Imagine Dragons", song_img: "images_WallBeat/alb3.jpg" },
        { id: "alb3s2", songsName: "Believer", song_art: "Imagine Dragons", song_img: "images_WallBeat/alb3.jpg" },
        { id: "alb3s3", songsName: "Thunder", song_art: "Imagine Dragons", song_img: "images_WallBeat/alb3.jpg" },
        { id: "alb3s4", songsName: "Walking The Wire", song_art: "Imagine Dragons", song_img: "images_WallBeat/alb3.jpg" },
        { id: "alb3s5", songsName: "Rise Art", song_art: "Imagine Dragons", song_img: "images_WallBeat/alb3.jpg" },
    ],
     "The Life of a Showgirl": [
        { id: "alb4s1", songsName: "Wi$h Li$t", song_art: "Sabrina Carpenter", song_img: "images_WallBeat/alb4.jpg" },
        { id: "alb4s2", songsName: "The fate of Ophelia", son_art: "Sabrina Carpenter", song_img: "images_WallBeat/alb4.jpg" },
        { id: "alb4s3", songsName: "Opalite", song_art: "Sabrina Carpenter", song_img: "images_WallBeat/alb4.jpg" },
        { id: "alb4s4", songsName: "Actually Romantic", song_art: "Sabrina Carpenter", song_img: "images_WallBeat/alb4.jpg" },
        { id: "alb4s5", songsName: "Wood", song_art: "Sabrina Carpenter", song_img: "images_WallBeat/alb4.jpg" },
    ],
    "Reputation": [
        { id: "alb5s1", songsName: "...Ready For It?", song_art: "Taylor Swift", song_img: "images_WallBeat/alb5.png" },
        { id: "alb5s2", songsName: "End Game", song_art: "Taylor Swift", song_img: "images_WallBeat/alb5.png" },
        { id: "alb5s3", songsName: "Look What You Made Me Do", song_art: "Taylor Swift", song_img: "images_WallBeat/alb5.png" },
        { id: "alb5s4", songsName: "Gorgeous", song_art: "Taylor Swift", song_img: "images_WallBeat/alb5.png" },
        { id: "alb5s5", songsName: "Delicate", song_art: "Taylor Swift", song_img: "images_WallBeat/alb5.png" },
    ],
     "The Tortured Poets Department": [
        { id: "alb6s1", songsName: "Fortnight", song_art: "Taylor Swift", song_img: "images_WallBeat/alb6.jpg" },
        { id: "alb6s2", songsName: "The Tortured Poets Department", song_art: "Taylor Swift", song_img: "images_WallBeat/alb6.jpg" },
        { id: "alb6s3", songsName: "Clara Bow", song_art: "Taylor Swift", song_img: "images_WallBeat/alb6.jpg" },
        { id: "alb6s4", songsName: "Down Bad", song_art: "Taylor Swift", song_img: "images_WallBeat/alb6.jpg" },
        { id: "alb6s5", songsName: "So Long, London", song_art: "Taylor Swift", song_img: "images_WallBeat/alb6.jpg" },
    ],
    "P-POP Culture": [
        { id: "alb7s1", songsName: "KPOP", song_art: "Karan Aujla", song_img: "images_WallBeat/alb7.jpg" },
        { id: "alb7s2", songsName: "Gento", song_art: "Karan Aujla", song_img: "images_WallBeat/alb7.jpg" },
        { id: "alb7s3", songsName: "Moonlight", song_art: "Karan Aujla", song_img: "images_WallBeat/alb7.jpg" },
        { id: "alb7s4", songsName: "Wyrd", song_art: "Karan Aujla", song_img: "images_WallBeat/alb7.jpg" },
        { id: "alb7s5", songsName: "Bazinga", song_art: "Karan Aujla", song_img: "images_WallBeat/alb7.jpg" },
    ],
    "Lover": [
        { id: "alb8s1", songsName: "London Boy", song_art: "Taylor Swift", song_img: "images_WallBeat/alb8.jpg" },
        { id: "alb8s2", songsName: "Cruel Summer", song_art: "Taylor Swift", song_img: "images_WallBeat/alb8.jpg" },
        { id: "alb8s3", songsName: "Lover", song_art: "Taylor Swift", song_img: "images_WallBeat/alb8.jpg" },
        { id: "alb8s4", songsName: "The Man", song_art: "Taylor Swift", song_img: "images_WallBeat/alb8.jpg" },
        { id: "alb8s5", songsName: "You Need To Calm Down", song_art: "Taylor Swift", song_img: "images_WallBeat/alb8.jpg" },
    ],
};



const stockStories = {
    // 🎤 ARTIST SONGS
    "Anti-Hero": {
        stock: "Meta", symbol: "META", currentPrice: "175.30", change: "+2.1%", isUp: true,
        story: "Anti-Hero is about being your own worst enemy — and Meta knows that feeling. In 2022 Mark Zuckerberg bet everything on the Metaverse, burning $13 billion while users fled to TikTok. The stock crashed 70% as Meta became its own biggest threat. But like the song, it found redemption — AI investments brought it roaring back to all time highs by 2024.",
        weeklyPrices: [140, 148, 135, 152, 160, 168, 175]
    },
    "Blank Space": {
        stock: "Tesla", symbol: "TSLA", currentPrice: "242.10", change: "-2.1%", isUp: false,
        story: "Blank Space is about a lover who's exciting but dangerously unpredictable — exactly like Tesla stock. Elon Musk tweets one thing and the stock swings 20% overnight. Investors fall in love with the vision then panic at the volatility. It's the most dramatic romance on Wall Street — thrilling, chaotic, and impossible to look away from.",
        weeklyPrices: [280, 265, 270, 255, 248, 250, 242]
    },
    "Love Story": {
        stock: "Apple", symbol: "AAPL", currentPrice: "175.30", change: "+0.8%", isUp: true,
        story: "Love Story is a timeless classic that never gets old — just like Apple. Since 1976 investors have fallen in love with Apple over and over again. From near bankruptcy in 1997 to becoming the first $3 trillion company, it's the ultimate love story on Wall Street. Every time you think the story is over, Apple finds a new chapter.",
        weeklyPrices: [165, 168, 170, 172, 169, 173, 175]
    },
    "Cruel Summer": {
        stock: "Nvidia", symbol: "NVDA", currentPrice: "875.40", change: "+3.2%", isUp: true,
        story: "Cruel Summer is about waiting desperately for something amazing to happen — and Nvidia investors felt that for years. The GPU company quietly built AI chips while everyone ignored them. Then ChatGPT launched and suddenly everyone needed Nvidia — the stock went from $150 to $900 in one year. The cruel wait was absolutely worth it.",
        weeklyPrices: [820, 835, 828, 850, 860, 868, 875]
    },
    "The Fate of Ophelia": {
        stock: "Bed Bath & Beyond", symbol: "BBBY", currentPrice: "0.29", change: "-8.2%", isUp: false,
        story: "The Fate of Ophelia is a tragic story of a fall from grace — perfectly matching Bed Bath & Beyond. Once a beloved retail giant with 1500 stores, it ignored e-commerce while Amazon devoured its market. Management made desperate decisions as losses mounted. By 2023 it filed for bankruptcy, a cautionary tale of a great brand that lost its way.",
        weeklyPrices: [2.1, 1.8, 1.2, 0.8, 0.5, 0.35, 0.29]
    },
    "Manchild": {
        stock: "Snapchat", symbol: "SNAP", currentPrice: "11.20", change: "-1.8%", isUp: false,
        story: "Manchild is about someone who refuses to grow up and take responsibility — that's Snapchat in a nutshell. Despite having millions of users, Snap has never consistently made a profit. It keeps chasing trends like AR glasses instead of fixing its business model. Investors keep waiting for it to mature but like the song says — it just won't grow up.",
        weeklyPrices: [14, 13, 12.5, 12, 11.8, 11.5, 11.2]
    },
    "Espresso": {
        stock: "Starbucks", symbol: "SBUX", currentPrice: "92.40", change: "+1.5%", isUp: true,
        story: "Espresso is catchy, energizing and impossible to get out of your head — just like Starbucks. The coffee giant turned a simple cup of coffee into a $100 billion empire. Howard Schultz built a brand so addictive that people pay $7 for a drink they could make at home for 50 cents. Now with 35,000 stores worldwide, Starbucks is the espresso of Wall Street.",
        weeklyPrices: [85, 87, 88, 90, 89, 91, 92]
    },
    "Nonsense": {
        stock: "GameStop", symbol: "GME", currentPrice: "17.50", change: "+45.2%", isUp: true,
        story: "Nonsense is literally the best word to describe the GameStop saga of 2021. Reddit users decided to buy a dying video game retailer just to spite Wall Street hedge funds. The stock went from $4 to $483 in weeks for absolutely no business reason. Billions were made and lost in what became the most nonsensical financial event in modern history.",
        weeklyPrices: [8, 12, 35, 80, 40, 25, 17]
    },
    "Feather": {
        stock: "Zoom", symbol: "ZM", currentPrice: "62.30", change: "-0.9%", isUp: false,
        story: "Feather is light, gentle and floats beautifully — until it falls. Zoom was the perfect pandemic stock, soaring 500% as the world went remote. Everyone needed it, it felt weightless and unstoppable. But as offices reopened the stock floated back down just as gently as it rose, from $588 to $62. A beautiful rise and a soft inevitable fall.",
        weeklyPrices: [68, 66, 65, 64, 63, 62.8, 62.3]
    },
    "Please please please": {
        stock: "Boeing", symbol: "BA", currentPrice: "185.20", change: "-1.2%", isUp: false,
        story: "Please Please Please — that's what Boeing investors have been saying for years. After two deadly 737 MAX crashes, production scandals and quality disasters, shareholders keep begging the company to get it together. Once the pride of American manufacturing, investors are on their knees pleading for Boeing to fix itself before more disasters strike.",
        weeklyPrices: [200, 195, 192, 188, 186, 184, 185]
    },
    "Starboy": {
        stock: "SpaceX", symbol: "PRIVATE", currentPrice: "N/A", change: "+∞%", isUp: true,
        story: "Starboy is about being the biggest star in the room — and SpaceX literally shoots for the stars. Elon Musk built rockets from scratch and made NASA pay him for rides to space. Valued at over $150 billion, SpaceX is the most valuable private company in the world. The ultimate starboy of the investment world — not even publicly listed yet.",
        weeklyPrices: [140, 142, 145, 148, 150, 152, 155]
    },
    "Blinding Lights": {
        stock: "Nvidia", symbol: "NVDA", currentPrice: "875.40", change: "+3.2%", isUp: true,
        story: "Blinding Lights is about something so bright it overwhelms you — Nvidia's rise has been exactly that. The AI chip boom turned Nvidia into the third most valuable company on earth almost overnight. Jensen Huang's vision was so blinding that Wall Street couldn't see it coming. Now everyone is scrambling to get their hands on H100 chips like they're gold.",
        weeklyPrices: [820, 835, 828, 850, 860, 868, 875]
    },
    "Die For You": {
        stock: "Amazon", symbol: "AMZN", currentPrice: "178.90", change: "+0.4%", isUp: true,
        story: "Die For You is about devotion so deep you'd give everything — Amazon Prime members know exactly that feeling. People pay $139 a year and then spend thousands more because leaving feels impossible. Jeff Bezos built an empire on making customers so dependent they'd do anything to keep their Prime benefits. The most devoted relationship in retail history.",
        weeklyPrices: [170, 172, 174, 173, 175, 177, 178]
    },
    "Timeless": {
        stock: "Coca-Cola", symbol: "KO", currentPrice: "61.20", change: "+0.3%", isUp: true,
        story: "Timeless is the perfect word for Coca-Cola on Wall Street. Warren Buffett bought it in 1988 and has never sold a single share. The recipe hasn't changed in over 100 years, the brand is recognized in every country on earth and dividends have grown for 60 consecutive years. In a world of chaos Coca-Cola is the one truly timeless investment.",
        weeklyPrices: [59, 59.5, 60, 60.2, 60.8, 61, 61.2]
    },
    "Save Your Tears": {
        stock: "Peloton", symbol: "PTON", currentPrice: "4.20", change: "-2.1%", isUp: false,
        story: "Save Your Tears — because Peloton investors have cried enough. The pandemic darling sold $2,500 bikes to locked down fitness fanatics and the stock hit $167. Then gyms reopened and nobody wanted an expensive bike collecting dust. The CEO resigned, thousands were laid off and the stock crashed 97%. Save your tears because the pain is still not over.",
        weeklyPrices: [5.5, 5.2, 4.9, 4.7, 4.5, 4.3, 4.2]
    },
    "Dive": {
        stock: "Robinhood", symbol: "HOOD", currentPrice: "18.50", change: "+2.3%", isUp: true,
        story: "Dive is about taking a leap of faith into something unknown — Robinhood convinced millions of young people to dive into investing. Zero commission trading opened the stock market to an entire generation that had never bought a share before. Some dove in and made fortunes during the meme stock craze, others lost everything. A platform that changed how America invests forever.",
        weeklyPrices: [15, 16, 15.5, 17, 17.5, 18, 18.5]
    },
    "Man I Need": {
        stock: "JPMorgan", symbol: "JPM", currentPrice: "198.50", change: "+1.2%", isUp: true,
        story: "Man I Need captures that desperate feeling of needing something essential — and JPMorgan is exactly that for the global economy. When Silicon Valley Bank collapsed in 2023 everyone called Jamie Dimon. When the financial crisis hit in 2008 JPMorgan stepped in to save Bear Stearns. The bank the whole world needs when things go wrong — irreplaceable and indispensable.",
        weeklyPrices: [190, 192, 194, 193, 196, 197, 198]
    },
    "So Easy(To Fall In Love)": {
        stock: "Netflix", symbol: "NFLX", currentPrice: "628.40", change: "+1.8%", isUp: true,
        story: "So Easy To Fall In Love — nobody knows this better than Netflix subscribers. One free trial and suddenly you've watched three seasons at 2am and can't cancel. Reed Hastings built the most addictive entertainment platform on earth, growing from DVD rentals to 260 million subscribers worldwide. Falling in love with Netflix is the easiest thing in the world.",
        weeklyPrices: [600, 608, 612, 618, 622, 625, 628]
    },
    "Messy": {
        stock: "Twitter/X", symbol: "X", currentPrice: "N/A", change: "chaotic%", isUp: false,
        story: "Messy is the only word that describes what happened to Twitter after Elon Musk bought it for $44 billion. He fired half the staff on day one, changed the name to X, let chaos run wild and drove away advertisers. The platform that once hosted world leaders became a messy free for all. A $44 billion acquisition that became the most dramatic corporate disaster of the decade.",
        weeklyPrices: [50, 42, 38, 30, 25, 20, 15]
    },
    "Nice To Each Other": {
        stock: "Costco", symbol: "COST", currentPrice: "892.30", change: "+0.7%", isUp: true,
        story: "Nice To Each Other perfectly describes Costco's relationship with its customers and employees. While other retailers cut staff and raise prices, Costco pays workers $25+ an hour and sells $1.50 hot dogs that haven't changed price since 1985. This mutual respect has created the most loyal customer base in retail — members renew at 93% every single year.",
        weeklyPrices: [870, 875, 878, 882, 885, 889, 892]
    },
    "Flowers": {
        stock: "FTX/Crypto", symbol: "FTX", currentPrice: "0.00", change: "-100%", isUp: false,
        story: "Flowers is about learning to love yourself after someone destroys you — crypto investors know this pain deeply. Sam Bankman-Fried built FTX into a $32 billion empire then stole customer funds to gamble on bad investments. When it collapsed overnight millions lost their savings. But like the song says — the crypto community picked itself up, bought itself flowers and kept going.",
        weeklyPrices: [30, 25, 18, 10, 5, 2, 0]
    },
    "Wrecking Ball": {
        stock: "WeWork", symbol: "WE", currentPrice: "0.84", change: "-5.2%", isUp: false,
        story: "Wrecking Ball is about someone who destroys everything they touch — WeWork's Adam Neumann was exactly that. He convinced SoftBank to value his office rental company at $47 billion, spent money on private jets and tequila, then crashed spectacularly when the IPO failed. From $47 billion to bankruptcy in 4 years — the most destructive wrecking ball in startup history.",
        weeklyPrices: [3, 2.5, 2, 1.5, 1.2, 1, 0.84]
    },
    "Midnight Sky": {
        stock: "Palantir", symbol: "PLTR", currentPrice: "24.80", change: "+1.5%", isUp: true,
        story: "Midnight Sky is about operating in darkness away from the public eye — Palantir built its entire empire in the shadows. The CIA's favorite data company spent 15 years doing secret government work before going public. Founded by Peter Thiel, it mines data in ways most companies can't even imagine. A company that thrives in the midnight sky of classified intelligence.",
        weeklyPrices: [21, 22, 22.5, 23, 23.8, 24.2, 24.8]
    },
    "Party In The USA": {
        stock: "Walmart", symbol: "WMT", currentPrice: "68.40", change: "+0.5%", isUp: true,
        story: "Party In The USA — nobody throws a bigger American party than Walmart. With 4,700 US stores and 1.6 million American employees, Walmart IS America. From small town Arkansas Sam Walton built the largest company on earth by revenue. Every Fourth of July, Thanksgiving and Christmas, hundreds of millions of Americans celebrate at Walmart. The ultimate American party host.",
        weeklyPrices: [65, 66, 66.5, 67, 67.5, 68, 68.4]
    },
    "Angels Like You": {
        stock: "Johnson & Johnson", symbol: "JNJ", currentPrice: "158.30", change: "+0.4%", isUp: true,
        story: "Angels Like You is about someone pure and healing who makes everything better — Johnson & Johnson has been that for 130 years. From baby shampoo to cancer treatments, J&J has healed billions of people worldwide. Even through the talcum powder lawsuits and Tylenol crisis, it emerged stronger. The most angelic company on Wall Street — always there when you need healing.",
        weeklyPrices: [154, 155, 156, 157, 157.5, 158, 158.3]
    },
    "Stitches": {
        stock: "Moderna", symbol: "MRNA", currentPrice: "128.40", change: "-1.2%", isUp: false,
        story: "Stitches is about needing something to heal a deep wound — Moderna literally gave the world stitches during COVID. The mRNA vaccine pioneer went from a tiny biotech to saving millions of lives overnight. The stock exploded 1500% during the pandemic then fell 70% as COVID faded. A company that stitched the world back together when it needed it most.",
        weeklyPrices: [145, 140, 138, 135, 132, 130, 128]
    },
    "Treat You Better": {
        stock: "Microsoft", symbol: "MSFT", currentPrice: "415.20", change: "+0.9%", isUp: true,
        story: "Treat You Better is a promise to be more reliable than the competition — Microsoft made exactly that promise with cloud computing. When Satya Nadella took over in 2014 he ditched Windows obsession and built Azure into the world's second largest cloud. Enterprise customers finally had someone who treated them better than Oracle and IBM. The stock tripled in 5 years.",
        weeklyPrices: [400, 405, 408, 410, 411, 413, 415]
    },
    "There's Nothing Holdin' Me Back": {
        stock: "Alphabet/Google", symbol: "GOOGL", currentPrice: "165.40", change: "+1.5%", isUp: true,
        story: "Nothing Holding Me Back perfectly captures Google's dominance. Search, Maps, YouTube, Android, Gmail, Chrome — Google is in every corner of your digital life with nothing holding it back. Antitrust cases, competitors and regulations keep trying to slow it down but nothing sticks. The most unstoppable company in tech history keeps expanding into every market it touches.",
        weeklyPrices: [158, 160, 161, 162, 163, 164, 165]
    },
    "Senorita": {
        stock: "Airbnb", symbol: "ABNB", currentPrice: "142.60", change: "+1.8%", isUp: true,
        story: "Senorita is about traveling to find romance and adventure — Airbnb made that accessible to everyone. Brian Chesky turned spare bedrooms into a $75 billion travel empire by betting that strangers would stay in each other's homes. The pandemic nearly killed it but revenge travel brought it back stronger than ever. Now 150 million travelers chase their own Senorita story every year.",
        weeklyPrices: [134, 136, 138, 139, 140, 141, 142]
    },
    "Mercy": {
        stock: "Celsius Holdings", symbol: "CELH", currentPrice: "32.40", change: "-3.2%", isUp: false,
        story: "Mercy is about begging for relief from overwhelming pain — Celsius investors are crying for mercy right now. The energy drink darling went from $5 to $99 as health conscious consumers ditched Red Bull. Then Pepsi became its distributor and over-ordered, creating a massive inventory problem. The stock crashed 70% in months. Investors are on their knees begging for mercy.",
        weeklyPrices: [48, 44, 40, 38, 35, 33, 32]
    },
    "Summertime Sadness": {
        stock: "Peloton", symbol: "PTON", currentPrice: "4.20", change: "-2.1%", isUp: false,
        story: "Summertime Sadness is a gorgeous melancholy that hits you when the good times end — Peloton investors felt that deeply. The pandemic gave Peloton the best summer of its life with people paying $2500 for bikes and waiting months for delivery. Then summer ended, gyms reopened and the sadness set in. From $167 to $4 — the most bittersweet fall from grace on Wall Street.",
        weeklyPrices: [5.5, 5.2, 4.9, 4.7, 4.5, 4.3, 4.2]
    },
    "Young and Beautiful": {
        stock: "Rivian", symbol: "RIVN", currentPrice: "12.40", change: "-1.5%", isUp: false,
        story: "Young and Beautiful asks if love lasts beyond youth and beauty — Rivian investors ask the same about their stock. Amazon backed this gorgeous electric truck startup and it IPO'd at $172 billion — bigger than Ford on day one, young and beautiful. But making trucks is brutally hard and losses mounted. Now trading at a fraction of its peak, investors wonder if the beauty will ever return.",
        weeklyPrices: [16, 15, 14.5, 14, 13.5, 13, 12.4]
    },
    "Cinnamon Girl": {
        stock: "Whole Foods/Amazon", symbol: "AMZN", currentPrice: "178.90", change: "+0.4%", isUp: true,
        story: "Cinnamon Girl is about someone natural, organic and pure — Whole Foods was exactly that before Amazon bought it. The organic grocery pioneer charged $8 for juice and customers loved it because it felt authentic and wholesome. Amazon paid $13.7 billion in 2017 to capture that cinnamon girl energy. Now it uses Whole Foods data to understand health conscious consumers better than anyone.",
        weeklyPrices: [170, 172, 174, 173, 175, 177, 178]
    },
    "Say Yes To Heaven": {
        stock: "Nvidia", symbol: "NVDA", currentPrice: "875.40", change: "+3.2%", isUp: true,
        story: "Say Yes To Heaven — that's what every investor who bought Nvidia in 2022 did. While everyone was selling tech stocks during the rate hike panic, believers said yes to Nvidia's AI vision. Jensen Huang was building the infrastructure for an AI revolution that nobody fully understood yet. Those who said yes to that heavenly vision saw their investment grow 800% in 18 months.",
        weeklyPrices: [820, 835, 828, 850, 860, 868, 875]
    },
    "Brooklyn Baby": {
        stock: "Etsy", symbol: "ETSY", currentPrice: "58.20", change: "-0.8%", isUp: false,
        story: "Brooklyn Baby is about being artistic, indie and too cool for mainstream — Etsy built an empire on exactly that identity. The handmade marketplace connected millions of Brooklyn Baby type creators with buyers who wanted unique non-Amazon products. It boomed during COVID as everyone bought handmade masks and home decor. Now facing the post-pandemic hangover but the indie spirit never dies.",
        weeklyPrices: [65, 63, 61, 60, 59, 58.5, 58.2]
    },
    "Levitating": {
        stock: "Tesla", symbol: "TSLA", currentPrice: "242.10", change: "+4.2%", isUp: true,
        story: "Levitating is about floating on cloud nine with pure euphoria — Tesla investors felt exactly this in 2020. The stock went from $70 to $900 in one year as the world fell in love with electric vehicles and Elon Musk's vision. Retail investors were levitating, minting millionaires overnight on Reddit. It was the most euphoric stock story of the decade — pure financial levitation.",
        weeklyPrices: [220, 225, 230, 232, 235, 238, 242]
    },
    "Don't Start Now": {
        stock: "BlackBerry", symbol: "BB", currentPrice: "3.20", change: "-1.5%", isUp: false,
        story: "Don't Start Now is about moving on and not looking back — BlackBerry should have listened to this advice about smartphones. When Apple launched the iPhone in 2007 BlackBerry executives laughed and said don't start now with touchscreens. They refused to adapt, lost 95% market share and fell from $230 to $3. The ultimate cautionary tale about ignoring disruption.",
        weeklyPrices: [4, 3.8, 3.7, 3.5, 3.4, 3.3, 3.2]
    },
    "Physical": {
        stock: "Lululemon", symbol: "LULU", currentPrice: "312.40", change: "+1.2%", isUp: true,
        story: "Physical is about embracing your body and working out — Lululemon turned that into a $40 billion empire. The yoga pants company convinced people to spend $130 on leggings and built a cult following of fitness obsessed customers. From a single Vancouver store to 600 locations worldwide, Lululemon made getting physical the most fashionable thing you can do.",
        weeklyPrices: [295, 300, 303, 306, 308, 310, 312]
    },
    "New Rules": {
        stock: "Airbnb", symbol: "ABNB", currentPrice: "142.60", change: "+1.8%", isUp: true,
        story: "New Rules is about setting boundaries and changing how you operate — Airbnb literally rewrote the rules of the entire hospitality industry. Brian Chesky said forget hotels, here are the new rules: strangers can stay in your home and it'll be amazing. Cities tried to ban it, hotels lobbied against it, but the new rules stuck. Now 150 million travelers follow Airbnb's rulebook every year.",
        weeklyPrices: [134, 136, 138, 139, 140, 141, 142]
    },
    "Houdini": {
        stock: "Wirecard", symbol: "WDI", currentPrice: "0.00", change: "-100%", isUp: false,
        story: "Houdini is about a master of disappearing acts — Wirecard performed the greatest vanishing act in financial history. The German payments company was worth $28 billion and in the DAX index when auditors discovered $2.1 billion simply didn't exist. The CEO disappeared, billions vanished overnight and the stock went to zero in days. The greatest financial Houdini act of the 21st century.",
        weeklyPrices: [100, 80, 50, 20, 5, 1, 0]
    },

    // 💿 ALBUM SONGS
    "Welcome To New York": {
        stock: "JPMorgan", symbol: "JPM", currentPrice: "198.50", change: "+1.2%", isUp: true,
        story: "Welcome To New York is about arriving in the city of dreams with infinite possibility — that's exactly what Wall Street feels like. JPMorgan Chase sits at the heart of it all on Park Avenue, the ultimate symbol of New York's financial power. Every ambitious young banker arrives in New York dreaming of making it at JPM. The bank that defines what it means to make it in the greatest city on earth.",
        weeklyPrices: [190, 192, 194, 193, 196, 197, 198]
    },
    "Style": {
        stock: "LVMH", symbol: "LVMUY", currentPrice: "168.40", change: "+0.8%", isUp: true,
        story: "Style is timeless and effortless — LVMH built a $500 billion empire on exactly that idea. Bernard Arnault assembled Louis Vuitton, Dior, Givenchy and 75 other luxury brands into the most stylish company on earth. The richest person in the world at times, Arnault understood that true style never goes out of fashion. LVMH is the stock equivalent of a classic red lip and a great coat.",
        weeklyPrices: [162, 163, 165, 166, 167, 168, 168.4]
    },
    "Bad Blood": {
        stock: "Theranos", symbol: "PRIVATE", currentPrice: "0.00", change: "-100%", isUp: false,
        story: "Bad Blood — literally the title of the book about Theranos. Elizabeth Holmes promised to revolutionize healthcare with a tiny blood test that could detect 200 diseases from one drop. Investors poured in $700 million before it emerged the technology never worked. Holmes was convicted of fraud in 2022. The most notorious bad blood story in Silicon Valley history.",
        weeklyPrices: [90, 70, 50, 30, 10, 2, 0]
    },
    "Shake It Off": {
        stock: "Apple", symbol: "AAPL", currentPrice: "175.30", change: "+0.8%", isUp: true,
        story: "Shake It Off is about ignoring the haters and keep dancing — Apple has done this better than any company in history. When iPhone launched critics said nobody wants a touchscreen phone. When App Store launched they said it would fail. When Apple Watch launched they called it a toy. Apple just shook it off and kept innovating, becoming the most valuable company ever created.",
        weeklyPrices: [165, 168, 170, 172, 169, 173, 175]
    },
    "Lavender Haze": {
        stock: "Palantir", symbol: "PLTR", currentPrice: "24.80", change: "+1.5%", isUp: true,
        story: "Lavender Haze is about being so deep in something you lose track of reality — Palantir investors live in exactly this state. The secretive data company has always operated in a mysterious haze, doing classified work for the CIA and Pentagon that the public can't fully understand. Bulls believe it will power the AI surveillance state, bears think it's overvalued smoke and mirrors.",
        weeklyPrices: [21, 22, 22.5, 23, 23.8, 24.2, 24.8]
    },
    "Maroon": {
        stock: "Coca Cola", symbol: "KO", currentPrice: "61.20", change: "+0.3%", isUp: true,
        story: "Maroon evokes deep rich warmth and nostalgia — exactly what Coca Cola red represents to billions of people worldwide. Warren Buffett has held Coca Cola stock since 1988, longer than most investors have been alive. The deep maroon richness of a Coke represents 130 years of the most recognized brand on earth. A stock so classic it's practically a color of its own.",
        weeklyPrices: [59, 59.5, 60, 60.2, 60.8, 61, 61.2]
    },
    "Snow On The Beach": {
        stock: "Snowflake", symbol: "SNOW", currentPrice: "142.80", change: "+2.1%", isUp: true,
        story: "Snow On The Beach is rare, unexpected and magically beautiful — Snowflake the data cloud company is equally rare in Silicon Valley. Warren Buffett almost never invests in tech IPOs but he bought Snowflake on day one, an extremely rare move. The data warehouse company helps businesses store and analyze massive amounts of information beautifully. Like snow on a beach — an unlikely wonder.",
        weeklyPrices: [132, 135, 137, 138, 140, 141, 142]
    },
    "Midnight Rain": {
        stock: "Amazon", symbol: "AMZN", currentPrice: "178.90", change: "+0.4%", isUp: true,
        story: "Midnight Rain is about two different worlds colliding — Amazon is the ultimate collision of retail and technology. Jeff Bezos started selling books at midnight from his garage and built the everything store that destroyed traditional retail. While Walmart slept Amazon rained disruption on every industry it touched. From books to cloud computing, the midnight rain never stops falling.",
        weeklyPrices: [170, 172, 174, 173, 175, 177, 178]
    },
    "Whatever It Takes": {
        stock: "Elon Musk/Tesla", symbol: "TSLA", currentPrice: "242.10", change: "+4.2%", isUp: true,
        story: "Whatever It Takes is the defining motto of Elon Musk's entire career. He put his last $35 million into Tesla when it was nearly bankrupt in 2008 to save it from dying. He slept on the factory floor during production hell. He risked everything he had whatever it took to make electric vehicles mainstream. That whatever it takes attitude turned a failing startup into a $800 billion company.",
        weeklyPrices: [220, 225, 230, 232, 235, 238, 242]
    },
    "Believer": {
        stock: "Bitcoin", symbol: "BTC", currentPrice: "67420.00", change: "+3.8%", isUp: true,
        story: "Believer is about holding on through pain because you have faith in something bigger — Bitcoin HODLers are the ultimate believers. Through 80% crashes, government bans and exchange collapses, Bitcoin believers held on. They were mocked as crazy while Bitcoin went from $0.01 to $73,000. Being a believer in Bitcoin through all the pain made early adopters into millionaires.",
        weeklyPrices: [62000, 63000, 64500, 65000, 66000, 66800, 67420]
    },
    "Thunder": {
        stock: "Nvidia", symbol: "NVDA", currentPrice: "875.40", change: "+3.2%", isUp: true,
        story: "Thunder announces that something massive is coming — Nvidia's AI thunder has shaken the entire stock market. When ChatGPT launched the thunder of AI demand for Nvidia chips was deafening. Every tech company scrambled to buy H100 GPUs, waiting lists stretched to years. The thunder of Jensen Huang's vision announcing itself to Wall Street sent the stock from $150 to $900 in 18 months.",
        weeklyPrices: [820, 835, 828, 850, 860, 868, 875]
    },
    "Walking The Wire": {
        stock: "Robinhood", symbol: "HOOD", currentPrice: "18.50", change: "+2.3%", isUp: true,
        story: "Walking The Wire is about the terrifying thrill of balancing on the edge — Robinhood built its entire brand on this feeling. The app gamified investing so well that millions of first time traders felt the wire walking thrill of buying options and meme stocks. During the GameStop saga Robinhood itself walked the wire between user loyalty and hedge fund pressure, nearly falling off completely.",
        weeklyPrices: [15, 16, 15.5, 17, 17.5, 18, 18.5]
    },
    "Rise Art": {
        stock: "Sotheby's/Art Market", symbol: "BID", currentPrice: "N/A", change: "+∞%", isUp: true,
        story: "Rise Art is about the collision of creativity and value — the fine art market has become one of the most exclusive investment classes on earth. Sotheby's and Christie's auction houses sell Picassos for $180 million while NFT art sold for $69 million at auction. Ultra wealthy investors use art to store value away from volatile markets. The rise of art as an asset class mirrors the rise of culture itself.",
        weeklyPrices: [100, 105, 110, 108, 115, 120, 125]
    },
    "Wi$h Li$t": {
        stock: "Amazon", symbol: "AMZN", currentPrice: "178.90", change: "+0.4%", isUp: true,
        story: "Wi$h Li$t — Amazon literally invented the online wish list and built a trillion dollar company around it. Jeff Bezos understood that people want to want things almost as much as they want to have them. The Amazon wish list turned window shopping into a data goldmine, letting Amazon know exactly what to stock and advertise. Your wish list made Bezos the richest person on earth.",
        weeklyPrices: [170, 172, 174, 173, 175, 177, 178]
    },
    "Opalite": {
        stock: "Shopify", symbol: "SHOP", currentPrice: "72.40", change: "+1.5%", isUp: true,
        story: "Opalite glows with an inner light that changes color as you look at it — Shopify has that same magical quality for entrepreneurs. The Canadian e-commerce platform gave a million small businesses their own Amazon-like storefront. During COVID it became the backbone of the internet economy, glowing brighter than ever. Every independent creator selling online has Shopify's inner light powering their dream.",
        weeklyPrices: [66, 67.5, 69, 70, 71, 72, 72.4]
    },
    "Actually Romantic": {
        stock: "Match Group/Tinder", symbol: "MTCH", currentPrice: "32.40", change: "-0.8%", isUp: false,
        story: "Actually Romantic is ironic — because Tinder turned romance into a swipe. Match Group owns Tinder, Hinge, OKCupid and basically the entire dating app market. They monetized human loneliness and the desire for connection into a $10 billion business. Is it actually romantic? Millions of couples who met on these apps would say yes. Wall Street just wishes the stock would find its own love story.",
        weeklyPrices: [36, 35, 34, 33.5, 33, 32.8, 32.4]
    },
    "Wood": {
        stock: "ARK Invest", symbol: "ARKK", currentPrice: "42.80", change: "+1.2%", isUp: true,
        story: "Wood — that's Cathie Wood, the most polarizing fund manager on Wall Street. Her ARK Innovation ETF bet everything on Tesla, Coinbase and Zoom, soaring 150% in 2020. Then rising rates crushed her high growth bets and the fund fell 75%. True believers held on through the pain and are slowly being rewarded as innovation stocks recover. Cathie Wood remains the most fascinating wood on Wall Street.",
        weeklyPrices: [38, 39, 40, 41, 41.5, 42, 42.8]
    },
    "...Ready For It?": {
        stock: "OpenAI/ChatGPT", symbol: "PRIVATE", currentPrice: "N/A", change: "+∞%", isUp: true,
        story: "Ready For It? That's what Sam Altman asked the world when he launched ChatGPT in November 2022. Nobody was ready for an AI that could write code, essays and poetry better than most humans. OpenAI became the fastest growing product in history reaching 100 million users in 2 months. The world was definitely not ready but it had no choice — the AI revolution had arrived.",
        weeklyPrices: [10, 15, 25, 40, 60, 80, 100]
    },
    "End Game": {
        stock: "Microsoft", symbol: "MSFT", currentPrice: "415.20", change: "+0.9%", isUp: true,
        story: "End Game is about playing the long game for ultimate victory — Microsoft's $10 billion investment in OpenAI was the ultimate end game move. While Google panicked about ChatGPT threatening search, Microsoft had already embedded AI into every product. Satya Nadella played a 10 year end game to make Microsoft the most important AI company on earth. The patient end game player always wins.",
        weeklyPrices: [400, 405, 408, 410, 411, 413, 415]
    },
    "Look What You Made Me Do": {
        stock: "Reddit", symbol: "RDDT", currentPrice: "62.40", change: "+3.2%", isUp: true,
        story: "Look What You Made Me Do — that's what GameStop said to Wall Street hedge funds in January 2021. Reddit's WallStreetBets community organized millions of retail investors to squeeze Melvin Capital's short position. Hedge funds lost $6 billion in days as Reddit users screamed look what you made me do. The event changed finance forever and inspired Reddit to go public, now trading on the very exchange it disrupted.",
        weeklyPrices: [55, 57, 58, 60, 61, 62, 62.4]
    },
    "Gorgeous": {
        stock: "Ferrari", symbol: "RACE", currentPrice: "428.60", change: "+0.6%", isUp: true,
        story: "Gorgeous is about something so beautiful it stops you in your tracks — Ferrari is the most gorgeous brand ever created. The Italian automaker makes 14,000 cars a year on purpose to maintain exclusivity while printing $2 billion in profit. You can't just buy a Ferrari — you have to be approved by the company. The most gorgeous stock on Wall Street with a waiting list for both the cars and the shares.",
        weeklyPrices: [415, 418, 420, 422, 424, 426, 428]
    },
    "Delicate": {
        stock: "Zoom", symbol: "ZM", currentPrice: "62.30", change: "-0.9%", isUp: false,
        story: "Delicate is about something precious and fragile that needs careful handling — Zoom's pandemic success was exactly that. The video call company became essential overnight but its dominance was always delicate. Microsoft Teams, Google Meet and Slack all attacked from every angle. The delicate balance of being a one-product company in a world where giants can copy you overnight finally caught up with Zoom.",
        weeklyPrices: [68, 66, 65, 64, 63, 62.8, 62.3]
    },
    "Fortnight": {
        stock: "Roblox", symbol: "RBLX", currentPrice: "38.40", change: "+1.8%", isUp: true,
        story: "Fortnight — not the game but the word means two weeks, a blink of time. In the gaming world Roblox built a universe where 80 million daily users spend their fortnights. Children pour their pocket money into Robux virtual currency creating a real economy inside a digital world. The metaverse that actually works while Meta's burned billions failing — Roblox built it in small fortnights of focused development.",
        weeklyPrices: [35, 36, 37, 37.5, 38, 38.2, 38.4]
    },
    "Clara Bow": {
        stock: "Netflix", symbol: "NFLX", currentPrice: "628.40", change: "+1.8%", isUp: true,
        story: "Clara Bow was the original 'it girl' of Hollywood — the face everyone wanted to be. Netflix is the Clara Bow of streaming, the original 'it platform' that everyone copied. Disney+, HBO Max, Apple TV+ all tried to steal the crown but Netflix remained the face of streaming entertainment. Just like Clara Bow defined 1920s Hollywood, Netflix defined how the world watches stories in the digital age.",
        weeklyPrices: [600, 608, 612, 618, 622, 625, 628]
    },
    "Down Bad": {
        stock: "Crypto Winter 2022", symbol: "BTC", currentPrice: "67420.00", change: "+3.8%", isUp: true,
        story: "Down Bad perfectly captures the 2022 crypto winter when Bitcoin fell from $69,000 to $16,000. Investors who bought at the top were down bad — really bad. Luna collapsed to zero wiping out $40 billion, FTX stole $8 billion of customer funds and Three Arrows Capital imploded. The entire industry was down bad simultaneously. But those who held through the darkness found Bitcoin at $67,000 waiting on the other side.",
        weeklyPrices: [62000, 63000, 64500, 65000, 66000, 66800, 67420]
    },
    "So Long, London": {
        stock: "London Stock Exchange", symbol: "LSEG", currentPrice: "108.20", change: "-0.4%", isUp: false,
        story: "So Long London — that's what dozens of major companies said as they abandoned the London Stock Exchange for New York after Brexit. ARM Holdings chose Nasdaq over London, Cambridge's biggest tech success story leaving home. Shell considered moving to New York, Paddy Power merged with Flutter and listed in the US. Brexit told the world's best companies so long London, and they listened.",
        weeklyPrices: [112, 111, 110, 109, 108.8, 108.4, 108.2]
    },
    "KPOP": {
        stock: "HYBE/BTS", symbol: "352820.KS", currentPrice: "182400", change: "+2.1%", isUp: true,
        story: "KPOP became a global financial phenomenon through BTS and HYBE entertainment. When BTS announced a hiatus in 2022 HYBE stock crashed 25% in one day — losing $1 billion in market cap from one band's vacation announcement. The Korean entertainment company turned music into a global business empire with BTS merchandise, webtoons and reality shows. KPOP is now a serious asset class on the Korean stock exchange.",
        weeklyPrices: [170000, 173000, 175000, 177000, 179000, 181000, 182400]
    },
    "Gento": {
        stock: "Samsung", symbol: "005930.KS", currentPrice: "71200", change: "+1.5%", isUp: true,
        story: "Gento means 'gentle' in Filipino — Samsung built its empire with gentle but relentless innovation. From a grocery store in 1938 to making chips, phones, TVs and appliances for half the world, Samsung's gentle persistence is unmatched. The Korean giant makes the chips inside iPhones while competing against Apple with Galaxy phones. Gently dominating every electronics market it enters.",
        weeklyPrices: [68000, 69000, 70000, 70500, 71000, 71200, 71200]
    },
    "Moonlight": {
        stock: "Palantir", symbol: "PLTR", currentPrice: "24.80", change: "+1.5%", isUp: true,
        story: "Moonlight is beautiful, mysterious and illuminates things hidden in darkness — Palantir does exactly this for governments. The CIA's favorite data company shines moonlight on terrorist networks, supply chains and battlefield intelligence that would otherwise remain hidden. Operating in the shadows of classified contracts, Palantir's moonlight has guided military operations in ways the public will never fully know.",
        weeklyPrices: [21, 22, 22.5, 23, 23.8, 24.2, 24.8]
    },
    "Wyrd": {
        stock: "BlackRock", symbol: "BLK", currentPrice: "782.40", change: "+0.5%", isUp: true,
        story: "Wyrd means fate or destiny in old Norse — BlackRock controls so much of the financial world it practically decides the fate of markets. With $10 trillion in assets under management Larry Fink's firm owns pieces of almost every public company on earth. When BlackRock moves markets follow. It's not just a company — it's a force of financial destiny that shapes the wyrd of global capitalism.",
        weeklyPrices: [770, 773, 775, 778, 780, 781, 782]
    },
    "Bazinga": {
        stock: "GameStop", symbol: "GME", currentPrice: "17.50", change: "+45.2%", isUp: true,
        story: "Bazinga — the ultimate gotcha moment. That's what Reddit's WallStreetBets said to Wall Street hedge funds in January 2021. Millions of retail investors coordinated to squeeze GameStop short sellers in the biggest bazinga in financial history. Melvin Capital lost $6 billion, Citron Research quit short selling forever and a dying video game retailer became a symbol of retail investor power. Bazinga indeed.",
        weeklyPrices: [8, 12, 35, 80, 40, 25, 17]
    },
    "London Boy": {
        stock: "London Stock Exchange", symbol: "LSEG", currentPrice: "108.20", change: "-0.4%", isUp: false,
        story: "London Boy celebrates everything charming about London — but the city's financial crown is slipping. Post-Brexit London has lost dozens of major company listings to New York and Amsterdam. The pound weakened, European banks moved to Paris and Dublin, and tech companies chose Nasdaq over the London Stock Exchange. The London boy charm is still there but Wall Street has become the world's undisputed financial capital.",
        weeklyPrices: [112, 111, 110, 109, 108.8, 108.4, 108.2]
    },
    "Lover": {
        stock: "Berkshire Hathaway", symbol: "BRK.B", currentPrice: "428.60", change: "+0.4%", isUp: true,
        story: "Lover is about finding the one you want to keep forever — Warren Buffett calls his best investments his forever holdings. Coca Cola, American Express, Apple — Buffett holds his lovers through crashes, recessions and pandemics because true love doesn't sell. Berkshire Hathaway is the ultimate lover stock, a company built on the philosophy that when you find something truly wonderful you hold it forever.",
        weeklyPrices: [420, 422, 424, 425, 426, 427, 428]
    },
    "The Man": {
        stock: "JPMorgan/Jamie Dimon", symbol: "JPM", currentPrice: "198.50", change: "+1.2%", isUp: true,
        story: "The Man is about someone who gets everything because of who they are — Jamie Dimon is literally the man of Wall Street. The JPMorgan CEO survived the 2008 financial crisis, guided the bank through COVID and is called by the US Treasury when the financial system needs saving. Presidents call him, the Fed consults him, every young banker wants to work for him. In finance Jamie Dimon is simply The Man.",
        weeklyPrices: [190, 192, 194, 193, 196, 197, 198]
    },
    "You Need To Calm Down": {
        stock: "Meme Stocks", symbol: "GME", currentPrice: "17.50", change: "+45.2%", isUp: true,
        story: "You Need To Calm Down — that's what every financial analyst said to WallStreetBets during the meme stock frenzy. GameStop up 1700%, AMC up 3000%, Bed Bath & Beyond up 500% — the market had completely lost its mind. Professional investors were screaming at Reddit users to calm down while losing billions on short positions. The meme stock era proved that sometimes the market refuses to calm down.",
        weeklyPrices: [8, 12, 35, 80, 40, 25, 17]
    },
};



// render function
function renderSongs(filteredSongs, heading) {
    const musicSection = document.querySelector(".music-section");

    let cardsHTML = filteredSongs.map((song, index) => `
        <div class="song-list-item" onclick="showStockStory('${song.songName || song.songsName}', '${song.song_art}')">
            <span class="song-number">${index + 1}</span>
            <img src="${song.song_img}" alt="${song.songsName}">
            <div class="song-info">
                <div class="song-list-title">${song.songName ||song.songsName}</div>
                <div class="song-list-artist">${song.song_art}</div>
            </div>
        </div>
    `).join("");

    musicSection.innerHTML = `
        <button id="backBtn" onclick="goBack()">Back</button>
        <h2>${heading}</h2>
        <div class="song-list">${cardsHTML}</div>
    `;
}

function goBack() {
    location.reload();
}


// artist clicks
document.querySelectorAll(".songs:nth-of-type(2) .playMusic").forEach((btn) => {
    btn.addEventListener("click", () => {
        const artistName = btn.closest(".music-card").querySelector(".img-title").textContent.trim();
        const foundSongs = artistSongs[artistName];

        if (foundSongs) {
            renderSongs(foundSongs, `${artistName}`);
        }else{
            alert(`No songs found for ${artistName}`);
        }
    })
})

// album clicks
document.querySelectorAll(".songs:nth-of-type(3) .playMusic").forEach((btn) => {
    btn.addEventListener("click", () => {
        const albumName = btn.closest(".music-card").querySelector(".img-title").textContent.trim();
        const foundSongs = albumSongs[albumName];

        if (foundSongs) {
            renderSongs(foundSongs, `${albumName}`);
        } else {
            alert(`No songs found for ${albumName}`);
        }
    });
});




// STOKES GAME BEGIN

const API_KEY = "YOUR_API_KEY";
const companies = [
    { symbol: "JPM", name: "JPMorgan" },
    { symbol: "AAPL", name: "Apple" },
    { symbol: "TSLA", name: "Tesla" },
    { symbol: "GOOGL", name: "Google" },
    { symbol: "AMZN", name: "Amazon" },
    { symbol: "MSFT", name: "Microsoft" },
]

// fetch stock price
async function fetchStockPrice(symbol) {
    try{
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
    const response =await fetch(url);
    const data = await response.json();
    const quote =data["Global Quote"];

    if (!quote || !quote["05. price"]){
        console.warn(`No data for ${symbol} - API limit hit`);
        return {
            symbol: symbol,
            price: "N/A",
            change: "0",
            isUp: false,
            name: symbol
        };
    }
    return {
        symbol: symbol,
        price: parseFloat(quote["05. price"]).toFixed(2),
        change: parseFloat(quote["10. change percentage"]).toFixed(2),
        isUp: parseFloat(quote["10. change percentage"]) > 0
    };
} catch (error) {
    console.warn(`Error fetching ${symbol}:`, error);
    return {
        symbol: symbol,
        price: "N/A",
        change: "0",
        isUp: false
    };
}
}

// AI STOCK STORY
// async function showStockStory(songName, artistName) {
//     const musicSection = document.querySelector(".music-section");

//     // show loading state
//     const song = encodeURIComponent(songName);
//     const artist = encodeURIComponent(artistName);

//     musicSection.innerHTML = `
//         <button id="backBtn" onclick="goBack()">&#8592; Back</button>
//         <iframe 
//             src="wallbeat-ai.html?song=${song}&artist=${artist}"
//             style="width:100%; height:600px; border:none; border-radius:12px; margin-top:1rem;"
//         ></iframe>
//     `;

//     try{
//         // here, we are calling Claude AI API
//         const response = await fetch("https://api.anthropic.com/v1/messages", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 model: "claude-sonnet-4-20250514",
//                 max_tokens: 1000,
//                 messages: [{
//                     role: "user",
//                     content: `You are WallBeat AI - a finance meets music analyst.
//                     The user is listening to "${songName}" by ${artistName}.
//                     Your job:
//                     1. Pick ONE real stock whose story resonates with this song's vibe or theme
//                     2. Write a compelling 3-4 sentence story connecting the song to the stock
//                     3. Give realistic weekly price data (7 days) for the chart

//                     Respond ONLY in this exact JSON format, nothing else:
//                     {
//                     "stock": "Company Name",
//                     "symbol": "TICKER",
//                     "currentPrice": "000.00",
//                     "change": "+0.00%",
//                     "isUp": true,
//                     "story": "Your 3-4 sentence story here...",
//                     "weeklyPrices": [150, 155, 148, 160, 158, 165, 170]
//                     }`
//                 }]
//             })
//         });

//         const data = await response.json();
//         const rawText = data.content[0].text;
//         const result = JSON.parse(rawText);


//         // render the story
//         renderStockStory(songName, artistName, result);

//     } catch (error) {
//         console.error("AI error: ", error);
//         musicSection.innerHTML = `
//         <button id="backBtn" onclick="goBack()">BACK</button>
//         <p style="color: white; padding: 2rem">Something went wrong. Try again!</p>
//         `;
//     }
// }


function showStockStory(songName, artistName) {
    const musicSection = document.querySelector(".music-section");
    const story = stockStories[songName];

    if (!story) {
        musicSection.innerHTML = `
            <button id="backBtn" onclick="goBack()">⬅ Back</button>
            <p style="color:white; padding:2rem">No stock story found for this song yet!</p>
        `;
        return;
    }

    musicSection.innerHTML = `
        <button id="backBtn" onclick="goBack()">⬅ Back</button>
        <div class="stock-story-container">
            <h2>${songName} <span style="color:#b2b2b2; font-size:1rem">by ${artistName}</span></h2>
            <div class="stock-match-card">
                <div class="stock-match-header">
                    <div>
                        <div class="stock-name">${story.stock}</div>
                        <div class="stock-symbol">${story.symbol}</div>
                    </div>
                    <div class="stock-price-info">
                        <div class="stock-price">$${story.currentPrice}</div>
                        <div class="stock-change ${story.isUp ? 'up' : 'down'}">
                            ${story.isUp ? '▲' : '▼'} ${story.change}
                        </div>
                    </div>
                </div>
                <canvas id="stockChart" height="120"></canvas>
                <div class="stock-story">
                    <h3>Why this stock matches this song:</h3>
                    <p>${story.story}</p>
                </div>
            </div>
        </div>
    `;

    drawChart(story.weeklyPrices, story.isUp);
}




// render stock story + chart

function renderStockStory(songName, artistName, result){
    const musicSection = document.querySelector(".music-section");

    musicSection.innerHTML = `
    <button id="backBtn" onclick="goBack()">BACK</button>
    <div class="stock-story-container">
        <h2> ${songName} <span style="color: #b2b2b2; font-size: 1rem">by ${artistName}</span></h2>
        
        <div class="stock-match-card">
            <div class="stock-match-header">
                <div>
                    <div class="stock-name"> ${result.stock}</div>
                    <div class="stock-symbol"> ${result.symbol}</div>
                </div>
                <div class="stock-price-info">
                    <div class="stock-price"> $${result.currentPrice}</div>
                    <div class="stock-change ${result.isUp ? 'up': 'down'}">
                        ${result.isUp ? '▲' : '▼'} ${result.change}
                    </div>
                </div>
            </div>
            
            <canvas id="stockChart" height="120"></canvas>
            
            <div class="stock-story">
                <h3> Why this stock matches this song:</h3>
                <p>${result.story}</p>
            </div>
        </div>
    </div>
`;

    // draw chart
    drawChart(result.weeklyPrices, result.isUp);
}

function drawChart(prices, isUp) {
    const ctx = document.getElementById("stockChart").getContext("2d");
    const color = isUp ? "#23d05a" : "#e05c5c";
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    new Chart (ctx, {
        type: "line",
        data: {
            labels: days,
            datasets: [{
                label: "Price ($)",
                data: prices,
                borderColor: color,
                backgroundColor: color + "22",
                borderWidth: 2,
                pointBackgroundColor: color,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {display: false}
            },
             scales: {
                x: { ticks: { color: "#b2b2b2" }, grid: { color: "#333" } },
                y: { ticks: { color: "#b2b2b2" }, grid: { color: "#333" } }
            }
        }
    });
}



// fetch the stocks
async function fetchAllStocks() {
    const tickerBar = document.getElementById("ticker-bar");
    tickerBar.innerHTML = "Loading stocks...";

    const results = [];
    for (const company of companies) {
            const stock = await fetchStockPrice(company.symbol);
            results.push({  ...stock, name: company.name});

            await new Promise(resolve => setTimeout(resolve, 1200));
    }

    // mock data
    // const results = [
    //     { symbol: "JPM", name: "JPMorgan", price: "198.50", change: "1.2", isUp: true },
    //     { symbol: "AAPL", name: "Apple", price: "175.30", change: "0.8", isUp: true },
    //     { symbol: "TSLA", name: "Tesla", price: "242.10", change: "-2.1", isUp: false },
    //     { symbol: "GOOGL", name: "Google", price: "165.40", change: "1.5", isUp: true },
    //     { symbol: "AMZN", name: "Amazon", price: "178.90", change: "-0.4", isUp: false },
    //     { symbol: "MSFT", name: "Microsoft", price: "415.20", change: "0.9", isUp: true },
    // ];

    displayTicker(results);
    decideMood(results);
    
}

function displayTicker(stocks) {
    const tickerBar = document.getElementById("ticker-bar");

    const html = stocks.map(stock => 
        `<span class="ticker-item ${stock.isUp ? 'up' : 'down'}">
        ${stock.name} $${stock.price}
        ${stock.isUp ? '\u25B2' : '\u25BC'} ${stock.change}%
        </span>
        `).join("&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;");
    tickerBar.innerHTML = html;
}

function decideMood(stocks) {
    const upCount = stocks.filter(s => s.isUp).length;
    const moodDisplay = document.getElementById("mood-display");

    if (upCount >= 4) {
        moodDisplay.textContent = "📈 Market UP — High Energy Mode!";
        moodDisplay.style.color = "#23d05a";
        switchPlaylist(highEnergyPlaylist); 
    } else {
        moodDisplay.textContent = "📉 Market DOWN — Chill Mode!";
        moodDisplay.style.color = "#e05c5c";
        switchPlaylist(chillPlaylist); 
    }
}

function switchPlaylist(playlist) {
    // replace the current songs array with mood playlist
    songs.length = 0; // clear current songs
    playlist.forEach(s => songs.push(s)); // fill with new songs
    currentSongIndex = 0;
    loadSong(currentSongIndex); // load first song of new playlist
}

fetchAllStocks();
