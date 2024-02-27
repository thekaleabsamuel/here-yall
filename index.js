const songs = [
    {
        artwork: "",
        title: "01. Alka Seltz",
        MP3: "",
        artist: "Chico Mcgee",
    },
    {
        artwork: "",
        title: "02. Heddies",
        MP3: "",
        artist: "Chico Mcgee",
    },
    {
        artwork: "",
        title: "03. PRPLx2",
        MP3: "",
        artist: "Chico Mcgee",
    }
];

const main = document.querySelector("#blog-posts");

console.log(main);

songs.forEach(song => {
    console.log(song);
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const img = document.createElement("img");
    const mp3 = document.createElement("audio");
    mp3.controls = true;
    mp3.src = song.MP3;
    h1.textContent = song.title;
    p.textContent = song.artist;
    img.src = song.artwork;
    div.append(h1, p, img, mp3);
    main.append(div);
});
