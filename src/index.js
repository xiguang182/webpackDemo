import _ from 'lodash';
import './style.css';
// import Icon from './icon.png';
import data from './blue_eyes.csv'
// const util2 =  require('./utils')
import util from './utils'
const interact = require('interactjs')

// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // snap: {
    //   targets: [
    //     // snap to the point (0, 450) if the pointer gets 50 pixels close
    //     { x: 250, y: 250, range: 100 },
    //     // snap only the y coord to 100
    //     // i.e. move horizontally at y=100
    //     // { y: 100, range: Infinity }
    //   ],
    //   relativePoints: [
    //     // { x: 0  , y: 0   },   // snap relative to the element's top-left,
    //     // { x: 0.5, y: 0.5 },   // to the center
    //     { x: 1  , y: 1   }    // and to the bottom-right
    //   ],
    //   endOnly: true,
    // },
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      console.log(event.target.getAttribute('data-x'), event.target.getAttribute('data-y'))
      console.log(event)
      // var textEl = event.target.querySelector('p');

      // textEl && (textEl.textContent =
      //   'moved a distance of '
      //   + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
      //                Math.pow(event.pageY - event.y0, 2) | 0))
      //       .toFixed(2) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;

// function component() {
//   var element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');

//   // Add the image to our existing div.
//   var myIcon = new Image();
//   util();
//   return element;
// }

// document.body.appendChild(component());