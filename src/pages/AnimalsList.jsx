import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import AnimalCard from "../components/AnimalCard";

const animalsData = {
  hunde: [
    { name: "🐶 Bello", art: "Hund", bild: "/tierheim-webseite/images/Bello.png", rasse: "Shiba Inu", alter: 3, beschreibung: "Bello wurde als Welpe in einem Park gefunden. Er ist verspielt und liebt Spaziergänge." },
    { name: "🐶 Luna", art: "Hund", bild: "/tierheim-webseite/images/Luna.png", rasse: "Terrier-Mischling", alter: 5, beschreibung: "Luna ist sehr sozial und liebt es, mit Kindern zu spielen. Sie sucht ein liebevolles Zuhause." }
  ],
  katzen: [
    { name: "🐱 Mia", art: "Katze", bild: "/tierheim-webseite/images/mia.png", rasse: "Europäisch Kurzhaar", alter: 2, beschreibung: "Mia liebt es, auf der Fensterbank zu liegen und die Vögel zu beobachten." },
    { name: "🐱 Simba", art: "Katze", bild: "/tierheim-webseite/images/Simba.png", rasse: "Maine Coon", alter: 4, beschreibung: "Simba ist ein verschmuster Kater, der gerne mit anderen Katzen spielt." }
  ],
  kleintiere: [
    { name: "🐰 Hopsi", art: "Kaninchen", bild: "/tierheim-webseite/images/Hopsi.png", rasse: "Löwenkopfkaninchen", alter: 1, beschreibung: "Hopsi liebt es, frische Karotten zu knabbern und durch das Gehege zu hoppeln." },
    { name: "🐹 Nager", art: "Hamster", bild: "/tierheim-webseite/images/Nager.png", rasse: "Goldhamster", alter: 2, beschreibung: "Nager ist ein aktiver Hamster, der gerne in seinem Rad rennt." }
  ],
  voegel: [
    { name: "🦜 Tweety", art: "Wellensittich", bild: "/tierheim-webseite/images/Tweety.png", rasse: "Wellensittich", alter: 1, beschreibung: "Tweety singt den ganzen Tag und liebt es, auf der Schulter zu sitzen." },
    { name: "🦜 Blu und Jewel", art: "Papagei", bild: "/tierheim-webseite/images/Blu_und_Jewel.png", rasse: "Hyazinthara", alter: 5, beschreibung: "Blu und Jewel sind ein unzertrennliches Papageienpaar und lieben es, gemeinsam zu fliegen." }
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
