// custom styles for this view
import '../css/episode.scss';

var common = require("./common");
import { goToPage } from './functions';

var id = common.$_GET['id'];
console.log(id);
goToPage('episode/' + id);

console.log('in episode');


