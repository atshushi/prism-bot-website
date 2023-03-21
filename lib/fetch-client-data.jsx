import axios from 'axios';

export const fetchClientData = async() => {
  const currentPlayersResult = await axios.get('https://prismsite.discloud.app/api/current-players');
  const topTracksResult = await axios.get('https://prismsite.discloud.app/api/top-tracks');
  const uptimeResult = await axios.get('https://prismsite.discloud.app/api/uptime');

  return {
    currentPlayers: currentPlayersResult.data.body,
    topTracks: topTracksResult.data.body,
    uptime: uptimeResult.data.body,
  };
};

/*
const date = new Date(uptimeResult);
setUptime(`${date.getHours()}h ${date.getMinutes()}m ${date.getSeconds()}s`);

const [currentPlayers, setCurrentPlayers] = React.useState(0);
const [topTracks, setTopTracks] = React.useState([]);
const [uptime, setUptime] = React.useState(0);

React.useEffect(() => {
  async function fetchData() {

  }

  fetchData();
}, [setCurrentPlayers, setTopTracks, setUptime]);
*/
