import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import data from './blue_eyes.csv'
// const util =  require('./utils')
import util from './utils'

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;
  console.log(data)
  console.log(util);
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());