import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import AnimalCard from "../components/AnimalCard"; 

const animalsData = {
  hunde: [
    { name: "🐶 Bello", art: "Hund", bild: "https://i0.wp.com/lottesabenteuer.de/wp-content/uploads/2021/02/Hundetrick-Ma%CC%88nnchen-1.jpg?resize=1000%2C667&ssl=1", rasse: "Shiba Inu", alter: 3, beschreibung: "Bello wurde als Welpe in einem Park gefunden. Er ist verspielt und liebt Spaziergänge." },
    { name: "🐶 Luna", art: "Hund", bild: "https://img-tiervermittlung.tierschutzverein-muenchen.de/213066-1.gross.JPG", rasse: "Terrier-Mischling", alter: 5, beschreibung: "Luna ist sehr sozial und liebt es, mit Kindern zu spielen. Sie sucht ein liebevolles Zuhause." }
  ],
  katzen: [
    { name: "🐱 Mia", art: "Katze", bild: "https://tierschutz-chemnitz.de/wp-content/uploads/katze_pixabay-NanaCola.jpg", rasse: "Europäisch Kurzhaar", alter: 2, beschreibung: "Mia liebt es, auf der Fensterbank zu liegen und die Vögel zu beobachten." },
    { name: "🐱 Simba", art: "Katze", bild: "https://tierheim-solingen.de/wp-content/uploads/2022/08/Vermisst-05.08.2022-Maincoon-scaled.jpeg", rasse: "Maine Coon", alter: 4, beschreibung: "Simba ist ein verschmuster Kater, der gerne mit anderen Katzen spielt." }
  ],
  kleintiere: [
    { name: "🐰 Hopsi", art: "Kaninchen", bild: "https://tierheim-moers.de/Wordpress/wp-content/uploads/2020/06/fk-sonnenblume-kaninchen-vom-26.06.2020.jpg", rasse: "Löwenkopfkaninchen", alter: 1, beschreibung: "Hopsi liebt es, frische Karotten zu knabbern und durch das Gehege zu hoppeln." },
    { name: "🐹 Nager", art: "Hamster", bild: "https://www.tierheim-bad-kreuznach.de/sites/default/files/styles/large/public/tiere/8006_Hamster%20%283%29.JPG?itok=Be8nyKxh", rasse: "Goldhamster", alter: 2, beschreibung: "Nager ist ein aktiver Hamster, der gerne in seinem Rad rennt." }
  ],
  voegel: [
    { name: "🦜 Tweety", art: "Wellensittich", bild: "https://www.vogelbund.de/wp-content/uploads/2022/03/wellensittich-sittiche-exoten-dkb.jpg", rasse: "Wellensittich", alter: 1, beschreibung: "Tweety singt den ganzen Tag und liebt es, auf der Schulter zu sitzen." },
    { name: "🦜 Blu und Jewel", art: "Papagei", bild: "https://aisvox-a.akamaihd.net/masters/74062/26-1/27-1yk13p/2540x1429/43/spix-aras-im-loro-parque.jpg", rasse: "Hyazinthara", alter: 5, beschreibung: "Blu und Jewel sind ein unzertrennliches Papageienpaar und lieben es, gemeinsam zu fliegen." }
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
