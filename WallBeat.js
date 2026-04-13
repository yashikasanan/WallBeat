



const songs = [
    { id: 1, songsName: 'Shri Krishna', songArtist: 'Jubin Natyal', songImg: 'images_spot/1_spot.jpg',songPath: 'audio_spot/audio_1.mp3'},
    { id: 2, songsName: 'Clara Bow', songArtist: "Taylor Swift", songImg: 'images_spot/2_spot.jpg', songPath: 'audio_spot/audio_2.mp3'},
    { id: 3, songsName: 'Winning Speech', songArtist: "Karan Aujla", songImg: 'images_spot/3_spot.jpg', songPath: 'audio_spot/audio_3.mp3'},
    { id: 4, songsName: 'Ordinary', songArtist: "Alex Warren", songImg: 'images_spot/4_stop.png', songPath: 'audio_spot/audio_4.mp3'},
    { id: 5, songsName: 'Om Namah Shivay', songArtist: 'Om Namah Shivay', songImg: 'images_spot/6_spot.jpg', songPath: 'audio_spot/audio_5.mp3'},
    { id: 6, songsName: 'Golden', songArtist: "Ejae", songImg: 'images_spot/7_spot.jpg', songPath: 'audio_spot/audio_6.mp3'},
    { id: 7, songsName: 'Don', songArtist: 'Diljit Dosanjh', songImg: 'images_spot/boa5.webp', songPath: 'audio_spot/audio_7.mp3'},
    { id: 8, songsName: 'Hanuman Chalisa', songArtist: 'Various', songImg: 'images_spot/boa9.jpg', songPath: 'audio_spot/audio_8.mp3'}
]

const highEnergyPlaylist = [
    { id: 1, songsName: "Winning Speech", songArtist: "Karan Aujla", songImg: "images_spot/3_spot.jpg", songPath: "audio_spot/audio_3.mp3" },
    { id: 2, songsName: "Don", songArtist: "Diljit Dosanjh", songImg: "images_spot/boa5.webp", songPath: "audio_spot/audio_7.mp3" },
    { id: 3, songsName: "Golden", songArtist: "Ejae", songImg: "images_spot/7_spot.jpg", songPath: "audio_spot/audio_6.mp3" },
    { id: 2, songsName: 'Clara Bow', songArtist: "Taylor Swift", songImg: 'images_spot/2_spot.jpg', songPath: 'audio_spot/audio_2.mp3'},
    { id: 4, songsName: 'Ordinary', songArtist: "Alex Warren", songImg: 'images_spot/4_stop.png', songPath: 'audio_spot/audio_4.mp3'},
];

const chillPlaylist = [
    { id: 1, songsName: "Shri Krishna", songArtist: "Jubin Natyal", songImg: "images_spot/1_spot.jpg", songPath: "audio_spot/audio_1.mp3" },
    { id: 2, songsName: "Hanuman Chalisa", songArtist: "Various", songImg: "images_spot/boa9.jpg", songPath: "audio_spot/audio_8.mp3" },
    { id: 3, songsName: "Om Namah Shivay", songArtist: "Hansraj Raghuwanshi", songImg: "images_spot/6_spot.jpg", songPath: "audio_spot/audio_5.mp3" },
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
        { id: "ts2", songName: "Anti-Hero", song_art: "Taylor Swift", song_img: "images_spot/boa_1.webp"},
        { id: "ts1", songName: "Blank Space", song_art: "Taylor Swift", song_img: "images_spot/boa_1.webp"},
        { id: "ts3", songName: "Love Story", song_art: "Taylor Swift", song_img: "images_spot/boa_1.webp"},
        { id: "ts4", songName: "Cruel Summer", song_art: "Taylor Swift", song_img: "images_spot/boa_1.webp"},
        { id: "ts5", songName: "The Fate of Ophelia", song_art: "Taylor Swift", song_img: "images_spot/boa_1.webp"},
    ],
    "Sabrina Carpenter" : [
        { id: "sc2", songName: "Manchild", song_art: "Sabrina Carpenter", song_img: "images_spot/5_spot.jpg"},
        { id: "sc1", songName: "Espresso", song_art: "Sabrina Carpenter", song_img: "images_spot/5_spot.jpg"},
        { id: "sc3", songName: "Nonsense", song_art: "Sabrina Carpenter", song_img: "images_spot/5_spot.jpg"},
        { id: "sc4", songName: "Feather", song_art: "Sabrina Carpenter", song_img: "images_spot/5_spot.jpg"},
        { id: "sc5", songName: "Please please please", song_art: "Sabrina Carpenter", song_img: "images_spot/5_spot.jpg"},
    ],
    "Weeknd" : [
        { id: "wk2", songName: "Starboy", song_art: "Weeknd", song_img:"images_spot/boa_2.jpg" },
        { id: "wk1", songName: "Blinding Lights", song_art: "Weeknd", song_img:"images_spot/boa_2.jpg" },
        { id: "wk3", songName: "Die For You", song_art: "Weeknd", song_img:"images_spot/boa_2.jpg" },
        { id: "wk4", songName: "Timeless", song_art: "Weeknd", song_img:"images_spot/boa_2.jpg" },
        { id: "wk5", songName: "Save Your Tears", song_art: "Weeknd", song_img:"images_spot/boa_2.jpg" },
    ],
    "Olivia Dean" :[
        { id: "od2", songName: "Man I Need", song_art: "Olivia Dean", song_img: "images_spot/boa3.webp"},
        { id: "od1", songName: "Dive", song_art: "Olivia Dean", song_img: "images_spot/boa3.webp"},
        { id: "od3", songName: "So Easy(To Fall In Love)", song_art: "Olivia Dean", song_img: "images_spot/boa3.webp"},
        { id: "od4", songName: "Messy", song_art: "Olivia Dean", song_img: "images_spot/boa3.webp"},
        { id: "od5", songName: "Nice To Each Other", song_art: "Olivia Dean", song_img: "images_spot/boa3.webp"},
    ],
    "Miley Cyrus": [
        { id: "mc1", songName: "Flowers", song_art: "Miley Cyrus", song_img: "images_spot/boa4.avif" },
        { id: "mc2", songName: "Wrecking Ball", song_art: "Miley Cyrus", song_img: "images_spot/boa4.avif" },
        { id: "mc3", songName: "Midnight Sky", song_art: "Miley Cyrus", song_img: "images_spot/boa4.avif" },
        { id: "mc4", songName: "Party In The USA", song_art: "Miley Cyrus", song_img: "images_spot/boa4.avif" },
        { id: "mc5", songName: "Angels Like You", song_art: "Miley Cyrus", song_img: "images_spot/boa4.avif" },
    ],
    "Shawn Mendes": [
        { id: "sm2", songName: "Treat You Better", song_art: "Shawn Mendes", song_img: "images_spot/boa7.png" },
        { id: "sm3", songName: "There's Nothing Holdin' Me Back", song_art: "Shawn Mendes", song_img: "images_spot/boa7.png" },
        { id: "sm1", songName: "Stitches", song_art: "Shawn Mendes", song_img: "images_spot/boa7.png" },
        { id: "sm4", songName: "Senorita", song_art: "Shawn Mendes", song_img: "images_spot/boa7.png" },
        { id: "sm5", songName: "Mercy", song_art: "Shawn Mendes", song_img: "images_spot/boa7.png" },
    ],
     "Lana Del Rey": [
        { id: "ld1", songName: "Diet Mountain Dew", song_art: "Lana Del Rey", song_img: "images_spot/boa8.webp" },
        { id: "ld2", songName: "Young and Beautiful", song_art: "Lana Del Rey", song_img: "images_spot/boa8.webp" },
        { id: "ld3", songName: "Cinnamon Girl", song_art: "Lana Del Rey", song_img: "images_spot/boa8.webp" },
        { id: "ld4", songName: "Say Yes To Heaven", song_art: "Lana Del Rey", song_img: "images_spot/boa8.webp" },
        { id: "ld5", songName: "Brooklyn Baby", song_art: "Lana Del Rey", song_img: "images_spot/boa8.webp" },
    ],
    "Dua Lipa": [
        { id: "dl1", songName: "Levitating", song_art: "Dua Lipa", song_img: "images_spot/boa10.jpg" },
        { id: "dl2", songName: "Don't Start Now", song_art: "Dua Lipa", song_img: "images_spot/boa10.jpg" },
        { id: "dl3", songName: "Physical", song_art: "Dua Lipa", song_img: "images_spot/boa10.jpg" },
        { id: "dl4", songName: "New Rules", song_art: "Dua Lipa", song_img: "images_spot/boa10.jpg" },
        { id: "dl5", songName: "Houdini", song_art: "Dua Lipa", song_img: "images_spot/boa10.jpg" },
    ],
};

const albumSongs = {
    "1989": [
        { id: "alb1s1", songsName: "Welcome To New York", song_art: "Taylor Swift", song_img: "images_spot/alb1.png" },
        { id: "alb1s2", songsName: "Blank Space", song_art: "Taylor Swift", song_img: "images_spot/alb1.png" },
        { id: "alb1s3", songsName: "Style", song_art: "Taylor Swift", song_img: "images_spot/alb1.png" },
        { id: "alb1s4", songsName: "Bad Blood", song_art: "Taylor Swift", song_img: "images_spot/alb1.png" },
        { id: "alb1s5", songsName: "Shake It Off", song_art: "Taylor Swift", song_img: "images_spot/alb1.png" },
    ],
    "Midnights": [
        { id: "alb2s1", songsName: "Lavender Haze", song_art: "Taylor Swift", song_img: "images_spot/alb2.png" },
        { id: "alb2s2", songsName: "Maroon", song_art: "Taylor Swift", song_img: "images_spot/alb2.png" },
        { id: "alb2s3", songsName: "Anti-Hero", song_art: "Taylor Swift", song_img: "images_spot/alb2.png" },
        { id: "alb2s4", songsName: "Snow On The Beach", song_art: "Taylor Swift", song_img: "images_spot/alb2.png" },
        { id: "alb2s5", songsName: "Midnight Rain", song_art: "Taylor Swift", song_img: "images_spot/alb2.png" },
    ],
    "Evolve": [
        { id: "alb3s1", songsName: "Whatever It Takes", song_art: "Imagine Dragons", song_img: "images_spot/alb3.jpg" },
        { id: "alb3s2", songsName: "Believer", song_art: "Imagine Dragons", song_img: "images_spot/alb3.jpg" },
        { id: "alb3s3", songsName: "Thunder", song_art: "Imagine Dragons", song_img: "images_spot/alb3.jpg" },
        { id: "alb3s4", songsName: "Walking The Wire", song_art: "Imagine Dragons", song_img: "images_spot/alb3.jpg" },
        { id: "alb3s5", songsName: "Rise Art", song_art: "Imagine Dragons", song_img: "images_spot/alb3.jpg" },
    ],
     "The Life of a Showgirl": [
        { id: "alb4s1", songsName: "Wi$h Li$t", song_art: "Sabrina Carpenter", song_img: "images_spot/alb4.jpg" },
        { id: "alb4s2", songsName: "The fate of Ophelia", son_art: "Sabrina Carpenter", song_img: "images_spot/alb4.jpg" },
        { id: "alb4s3", songsName: "Opalite", song_art: "Sabrina Carpenter", song_img: "images_spot/alb4.jpg" },
        { id: "alb4s4", songsName: "Actually Romantic", song_art: "Sabrina Carpenter", song_img: "images_spot/alb4.jpg" },
        { id: "alb4s5", songsName: "Wood", song_art: "Sabrina Carpenter", song_img: "images_spot/alb4.jpg" },
    ],
    "Reputation": [
        { id: "alb5s1", songsName: "...Ready For It?", song_art: "Taylor Swift", song_img: "images_spot/alb5.png" },
        { id: "alb5s2", songsName: "End Game", song_art: "Taylor Swift", song_img: "images_spot/alb5.png" },
        { id: "alb5s3", songsName: "Look What You Made Me Do", song_art: "Taylor Swift", song_img: "images_spot/alb5.png" },
        { id: "alb5s4", songsName: "Gorgeous", song_art: "Taylor Swift", song_img: "images_spot/alb5.png" },
        { id: "alb5s5", songsName: "Delicate", song_art: "Taylor Swift", song_img: "images_spot/alb5.png" },
    ],
     "The Tortured Poets Department": [
        { id: "alb6s1", songsName: "Fortnight", song_art: "Taylor Swift", song_img: "images_spot/alb6.jpg" },
        { id: "alb6s2", songsName: "The Tortured Poets Department", song_art: "Taylor Swift", song_img: "images_spot/alb6.jpg" },
        { id: "alb6s3", songsName: "Clara Bow", song_art: "Taylor Swift", song_img: "images_spot/alb6.jpg" },
        { id: "alb6s4", songsName: "Down Bad", song_art: "Taylor Swift", song_img: "images_spot/alb6.jpg" },
        { id: "alb6s5", songsName: "So Long, London", song_art: "Taylor Swift", song_img: "images_spot/alb6.jpg" },
    ],
    "P-POP Culture": [
        { id: "alb7s1", songsName: "KPOP", song_art: "Karan Aujla", song_img: "images_spot/alb7.jpg" },
        { id: "alb7s2", songsName: "Gento", song_art: "Karan Aujla", song_img: "images_spot/alb7.jpg" },
        { id: "alb7s3", songsName: "Moonlight", song_art: "Karan Aujla", song_img: "images_spot/alb7.jpg" },
        { id: "alb7s4", songsName: "Wyrd", song_art: "Karan Aujla", song_img: "images_spot/alb7.jpg" },
        { id: "alb7s5", songsName: "Bazinga", song_art: "Karan Aujla", song_img: "images_spot/alb7.jpg" },
    ],
    "Lover": [
        { id: "alb8s1", songsName: "London Boy", song_art: "Taylor Swift", song_img: "images_spot/alb8.jpg" },
        { id: "alb8s2", songsName: "Cruel Summer", song_art: "Taylor Swift", song_img: "images_spot/alb8.jpg" },
        { id: "alb8s3", songsName: "Lover", song_art: "Taylor Swift", song_img: "images_spot/alb8.jpg" },
        { id: "alb8s4", songsName: "The Man", song_art: "Taylor Swift", song_img: "images_spot/alb8.jpg" },
        { id: "alb8s5", songsName: "You Need To Calm Down", song_art: "Taylor Swift", song_img: "images_spot/alb8.jpg" },
    ],
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
async function showStockStory(songName, artistName) {
    const musicSection = document.querySelector(".music-section");

    // show loading state
    const song = encodeURIComponent(songName);
    const artist = encodeURIComponent(artistName);

    musicSection.innerHTML = `
        <button id="backBtn" onclick="goBack()">&#8592; Back</button>
        <iframe 
            src="wallbeat-ai.html?song=${song}&artist=${artist}"
            style="width:100%; height:600px; border:none; border-radius:12px; margin-top:1rem;"
        ></iframe>
    `;

    try{
        // here, we are calling Claude AI API
        const response = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 1000,
                messages: [{
                    role: "user",
                    content: `You are WallBeat AI - a finance meets music analyst.
                    The user is listening to "${songName}" by ${artistName}.
                    Your job:
                    1. Pick ONE real stock whose story resonates with this song's vibe or theme
                    2. Write a compelling 3-4 sentence story connecting the song to the stock
                    3. Give realistic weekly price data (7 days) for the chart

                    Respond ONLY in this exact JSON format, nothing else:
                    {
                    "stock": "Company Name",
                    "symbol": "TICKER",
                    "currentPrice": "000.00",
                    "change": "+0.00%",
                    "isUp": true,
                    "story": "Your 3-4 sentence story here...",
                    "weeklyPrices": [150, 155, 148, 160, 158, 165, 170]
                    }`
                }]
            })
        });

        const data = await response.json();
        const rawText = data.content[0].text;
        const result = JSON.parse(rawText);


        // render the story
        renderStockStory(songName, artistName, result);

    } catch (error) {
        console.error("AI error: ", error);
        musicSection.innerHTML = `
        <button id="backBtn" onclick="goBack()">BACK</button>
        <p style="color: white; padding: 2rem">Something went wrong. Try again!</p>
        `;
    }
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

    // const results = [];
    // for (const company of companies) {
    //         const stock = await fetchStockPrice(company.symbol);
    //         results.push({  ...stock, name: company.name});

    //         await new Promise(resolve => setTimeout(resolve, 1200));
    // }

    // mock data
    const results = [
        { symbol: "JPM", name: "JPMorgan", price: "198.50", change: "1.2", isUp: true },
        { symbol: "AAPL", name: "Apple", price: "175.30", change: "0.8", isUp: true },
        { symbol: "TSLA", name: "Tesla", price: "242.10", change: "-2.1", isUp: false },
        { symbol: "GOOGL", name: "Google", price: "165.40", change: "1.5", isUp: true },
        { symbol: "AMZN", name: "Amazon", price: "178.90", change: "-0.4", isUp: false },
        { symbol: "MSFT", name: "Microsoft", price: "415.20", change: "0.9", isUp: true },
    ];

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