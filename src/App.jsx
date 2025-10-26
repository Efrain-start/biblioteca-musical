import React, { Component } from "react";
import Header from "./components/Header.jsx"; // <-- .jsx si renombraste
import Song from "./components/Song.jsx";     // <-- .jsx si renombraste
import "./components/App.css";

class App extends Component {
  songs = [
  { id: 1, title: "Maldito Duende", artist: "Héroes del Silencio", album: "Senderos de traición", duration: 259 }, // 4:19
  { id: 2, title: "Lamento Boliviano", artist: "Enanitos Verdes", album: "Big Bang", duration: 223 }, // 3:43
  { id: 3, title: "En algún Lugar", artist: "Duncan Dhu", album: "El grito del tiempo", duration: 236 }, // 3:56
];


  componentDidMount() {
    console.log("✅ Biblioteca Musical cargada correctamente");
  }

  render() {
    return (
      <div className="app">
        <Header title="Biblioteca Musical" subtitle="Mí playlist de prueba - by Efrain Aguilar" />
        <main className="content">
          <section className="song-list" aria-label="Lista de canciones">
            {this.songs.map((song) => (
              <Song
                key={song.id}
                title={song.title}
                artist={song.artist}
                album={song.album}
                duration={song.duration}
              />
            ))}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
