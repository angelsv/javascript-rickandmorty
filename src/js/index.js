// custom styles for this view
import '../css/index.scss';

var common = require("./common");

// custom javascript for this view
import { goToPage } from './functions';

// functions on load
var id = typeof common.$_GET['id'] == 'undefined' ? 1 : common.$_GET['id'] ;

goToPage('character/?page=' + id, true);