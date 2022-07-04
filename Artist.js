class Artist {
  constructor(name, currency) {
    this.name = name;
    this.currency = currency;
    this.songs = [];
    this.amount = 0;
    this.balance = 0;
  }
  intro() {
    return `Hi, my name is ${this.name} and I am a musician `;
  }
  songPrice(songPrice) {
    this.amount = songPrice / 100;
    return `${this.name}'s price per song is ${this.amount} ${this.currency}`;
  }

  addSong(songName) {
    let newSong = {};
    newSong.name = songName;
    newSong.playCount = 0;
    this.songs.push(newSong);
  }
  playlist() {
    let plist = `${this.name}'s playlist:\n====================\n`;

    for (let i = 0; i < this.songs.length; i++) {
      plist += `${i + 1}. ${this.songs[i].name} (${this.songs[i].playCount})\n`;
    }
    return plist;
  }
  playSong(song) {
    this.songs[song].playCount++;
    this.balance += this.amount;
    return `Playing song: ${this.songs[song].name}.`;
  }
  fortune() {
    return `Total lifetime wealth of ${this.name} is ${this.balance.toFixed(
      2
    )} ${this.currency} right now!`;
  }
}

export { Artist };
