import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(({ seconds }) => {
    console.log(seconds);
    localStorage.setItem(CURRENT_TIME, JSON.stringify(seconds));
}, 1000));

player.setCurrentTime(Number(localStorage.getItem(CURRENT_TIME)));

