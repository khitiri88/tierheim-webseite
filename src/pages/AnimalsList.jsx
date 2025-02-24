import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import AnimalCard from "../components/AnimalCard";

// 📌 Lokale Bilder importieren
import Bello from "../assets/images/Bello.png";
import Luna from "../assets/images/Luna.png";
import Mia from "../assets/images/mia.png";
import Simba from "../assets/images/Simba.png";
import Hopsi from "../assets/images/Hopsi.png";
import Nager from "../assets/images/Nager.png";
import Tweety from "../assets/images/Tweety.png";
import BluJewel from "../assets/images/Blu_und_Jewel.png";

const animalsData = {
  hunde: [
    { name: "🐶 Bello", art: "Hund", bild: Bello, rasse: "Shiba Inu", alter: 3, beschreibung: "Bello wurde als Welpe in einem Park gefunden. Er ist verspielt und liebt Spaziergänge." },
    { name: "🐶 Luna", art: "Hund", bild: Luna, rasse: "Terrier-Mischling", alter: 5, beschreibung: "Luna ist sehr sozial und liebt es, mit Kindern zu spielen. Sie sucht ein liebevolles Zuhause." }
  ],
  katzen: [
    { name: "🐱 Mia", art: "Katze", bild: Mia, rasse: "Europäisch Kurzhaar", alter: 2, beschreibung: "Mia liebt es, auf der Fensterbank zu liegen und die Vögel zu beobachten." },
    { name: "🐱 Simba", art: "Katze", bild: Simba, rasse: "Maine Coon", alter: 4, beschreibung: "Simba ist ein verschmuster Kater, der gerne mit anderen Katzen spielt." }
  ],
  kleintiere: [
    { name: "🐰 Hopsi", art: "Kaninchen", bild: Hopsi, rasse: "Löwenkopfkaninchen", alter: 1, beschreibung: "Hopsi liebt es, frische Karotten zu knabbern und durch das Gehege zu hoppeln." },
    { name: "🐹 Nager", art: "Hamster", bild: Nager, rasse: "Goldhamster", alter: 2, beschreibung: "Nager ist ein aktiver Hamster, der gerne in seinem Rad rennt." }
  ],
  voegel: [
    { name: "🦜 Tweety", art: "Wellensittich", bild: Tweety, rasse: "Wellensittich", alter: 1, beschreibung: "Tweety singt den ganzen Tag und liebt es, auf der Schulter zu sitzen." },
    { name: "🦜 Blu und Jewel", art: "Papagei", bild: BluJewel, rasse: "Hyazinthara", alter: 5, beschreibung: "Blu und Jewel sind ein unzertrennliches Papageienpaar und lieben es, gemeinsam zu fliegen." }
  ]
};

const AnimalsList = ({ category }) => {
  const animals = animalsData[category] || [];

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h3" gutterBottom>{category.charAt(0).toUpperCase() + category.slice(1)}</Typography>
      <Grid container spacing={3} justifyContent="center">
        {animals.map((animal, index) => (
          <Grid item key={index}>
            <AnimalCard {...animal} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AnimalsList;
