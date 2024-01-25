import './App.css';
import EventCard from './Components/EventCard.JSX';
import Header from './Components/Header.JSX';

const App = () => {
  return (
    <div>
      <Header />
      <div className="App">
        <EventCard gameImage="../FAU-Arena.jpg" gameTitle="North Texas vs FAU" gameLocation="Boca Raton, Florida" gameDate="01/28/2024" gameTime="1PM EST" gameLink="https://www.espn.com/mens-college-basketball/game/_/gameId/401602104/north-texas-fau" />
        <EventCard gameImage="../FAU-Arena.jpg" gameTitle="Tulsa vs FAU" gameLocation="Boca Raton, Florida" gameDate="02/03/2024" gameTime="6PM EST" gameLink="https://www.espn.com/mens-college-basketball/game/_/gameId/401602113/tulsa-fau" />
        <EventCard gameImage="../UAB-Arena.jpg" gameTitle="FAU vs UAB" gameLocation="Birmingham, Alabama" gameDate="02/08/2024" gameTime="9PM EST" gameLink="https://www.espn.com/mens-college-basketball/game/_/gameId/401602124/fau-uab" />
        <EventCard gameImage="../WichitaState-Arena.jpg" gameTitle="FAU vs Wichita State" gameLocation="Wichita, Kansas" gameDate="02/11/2024" gameTime="12PM EST" gameLink="https://www.espn.com/mens-college-basketball/game/_/gameId/401602131/fau-wichita-st" />
        <EventCard gameImage="../FAU-Arena.jpg" gameTitle="Temple vs FAU" gameLocation="Boca Raton, Florida" gameDate="02/15/2024" gameTime="7PM EST" gameLink="https://www.espn.com/mens-college-basketball/game/_/gameId/401602135/temple-fau" />
        <EventCard gameImage="../USF-Arena.jpg" gameTitle="FAU vs USF" gameLocation="Tampa, Florida" gameDate="02/18/2024" gameTime="12PM EST" gameLink="https://www.espn.com/mens-college-basketball/game/_/gameId/401602142/fau-south-florida" />
        <EventCard gameImage="../FAU-Arena.jpg" gameTitle="SMU vs FAU" gameLocation="Boca Raton, Florida" gameDate="02/22/2024" gameTime="7PM EST" gameLink="https://www.espn.com/mens-college-basketball/game/_/gameId/401602149/smu-fau" />
        <EventCard gameImage="../Memphis-Arena.jpg" gameTitle="FAU vs Memphis" gameLocation="Memphis, Tennessee" gameDate="02/25/2024" gameTime="2PM EST" gameLink="https://www.espn.com/mens-college-basketball/game/_/gameId/401602153/fau-memphis" />
        <EventCard gameImage="../FAU-Arena.jpg" gameTitle="Tulane vs FAU" gameLocation="Boca Raton, Florida" gameDate="03/02/2024" gameTime="12PM EST" gameLink="https://www.espn.com/mens-college-basketball/game/_/gameId/401602163/tulane-fau" />
        <EventCard gameImage="../UNT-Arena.jpg" gameTitle="FAU vs UNT" gameLocation="Denton, Texas" gameDate="03/06/2024" gameTime="8PM EST" gameLink="https://www.espn.com/mens-college-basketball/game/_/gameId/401602171/fau-north-texas" />
        <EventCard gameImage="../FAU-Arena.jpg" gameTitle="Memphis vs FAU" gameLocation="Boca Raton, Florida" gameDate="03/09/2024" gameTime="12PM EST" gameLink="https://www.espn.com/mens-college-basketball/game/_/gameId/401602176/memphis-fau" />
        <EventCard gameImage="../Basketball.jpg" gameTitle="TBD vs FAU" gameLocation="Fort Worth, Texas" gameDate="03/13/2024" gameTime="TBD" gameLink="https://www.espn.com/mens-college-basketball/standings/_/group/62" buttonText="Current Standings" />
      </div>
    </div>
  )
}

export default App;
