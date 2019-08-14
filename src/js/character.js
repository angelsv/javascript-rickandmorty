// custom styles for this view
import '../css/character.scss';

var common = require("./common");
import { goToPage } from './functions';

var id = common.$_GET['id'];
goToPage( 'character/' + id );

console.log('in char');


