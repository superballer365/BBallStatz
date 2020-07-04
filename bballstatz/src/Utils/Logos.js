import _76ers from "../Images/Logos/76ers.png";
import Bucks from "../Images/Logos/Bucks.png";
import Bulls from "../Images/Logos/Bulls.png";
import Cavaliers from "../Images/Logos/Cavaliers.png";
import Celtics from "../Images/Logos/Celtics.png";
import Clippers from "../Images/Logos/Clippers.png";
import Grizzlies from "../Images/Logos/Grizzlies.png";
import Hawks from "../Images/Logos/Hawks.png";
import Heat from "../Images/Logos/Heat.gif";
import Hornets from "../Images/Logos/Hornets.png";
import Jazz from "../Images/Logos/Jazz.png";
import Kings from "../Images/Logos/Kings.png";
import Knicks from "../Images/Logos/Knicks.gif";
import Lakers from "../Images/Logos/Lakers.png";
import Magic from "../Images/Logos/Magic.gif";
import Mavericks from "../Images/Logos/Mavericks.png";
import Nets from "../Images/Logos/Nets.png";
import Nuggets from "../Images/Logos/Nuggets.png";
import Pacers from "../Images/Logos/Pacers.png";
import Pelicans from "../Images/Logos/Pelicans.png";
import Pistons from "../Images/Logos/Pistons.png";
import Raptors from "../Images/Logos/Raptors.png";
import Rockets from "../Images/Logos/Rockets.png";
import Spurs from "../Images/Logos/Spurs.png";
import Suns from "../Images/Logos/Suns.png";
import Thunder from "../Images/Logos/Thunder.png";
import Timberwolves from "../Images/Logos/Timberwolves.png";
import TrailBlazers from "../Images/Logos/TrailBlazers.png";
import Warriors from "../Images/Logos/Warriors.png";
import Wizards from "../Images/Logos/Wizards.png";

export function getTeamLogo(teamName) {
  switch (teamName) {
    case "76ers":
      return _76ers;
    case "Bucks":
      return Bucks;
    case "Bulls":
      return Bulls;
    case "Cavaliers":
      return Cavaliers;
    case "Celtics":
      return Celtics;
    case "Clippers":
      return Clippers;
    case "Grizzlies":
      return Grizzlies;
    case "Hawks":
      return Hawks;
    case "Heat":
      return Heat;
    case "Hornets":
      return Hornets;
    case "Jazz":
      return Jazz;
    case "Kings":
      return Kings;
    case "Knicks":
      return Knicks;
    case "Lakers":
      return Lakers;
    case "Magic":
      return Magic;
    case "Mavericks":
      return Mavericks;
    case "Nets":
      return Nets;
    case "Nuggets":
      return Nuggets;
    case "Pacers":
      return Pacers;
    case "Pelicans":
      return Pelicans;
    case "Pistons":
      return Pistons;
    case "Raptors":
      return Raptors;
    case "Rockets":
      return Rockets;
    case "Spurs":
      return Spurs;
    case "Suns":
      return Suns;
    case "Thunder":
      return Thunder;
    case "Timberwolves":
      return Timberwolves;
    case "Trail Blazers":
      return TrailBlazers;
    case "Warriors":
      return Warriors;
    case "Wizards":
      return Wizards;
    default:
      return Hawks;
  }
}
