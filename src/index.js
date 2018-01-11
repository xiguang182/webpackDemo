import _ from 'lodash';
import './style.css';
// import Icon from './icon.png';
import data from './blue_eyes.csv'
// const util2 =  require('./utils')
import util from './utils'
const interact = require('interactjs')

// interact(element)
//   .draggable({
//     snap: {
//       targets: [{

//         },
//       ],
//       range: Infinity,
//       relativePoints: [ { x: 0, y: 0 } ]
//     },
//     inertia: true,
//     restrict: {
//       restriction: element.parentNode,
//       elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
//       endOnly: true
//     }
//   })
//   .on('dragmove', function (event) {
//     x += event.dx;
//     y += event.dy;

//     event.target.style.webkitTransform =
//     event.target.style.transform =
//         'translate(' + x + 'px, ' + y + 'px)';
//   });
// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    snap: {
      targets: [
        function (x, y) {
          let element = window.document.getElementById('map');
          return { x: element.offsetLeft + 251,
                   y: element.offsetTop + 103,
                   range: 40 };
        },
        function (x, y) {
          let element = window.document.getElementById('map');
          return { x: element.offsetLeft + 276,
                   y: element.offsetTop + 127,
                   range: 40 };
        },
        function (x, y) {
          let element = window.document.getElementById('map');
          return { x: element.offsetLeft + 319,
                   y: element.offsetTop + 114,
                   range: 40 };
        },
        function (x, y) {
          let element = window.document.getElementById('map');
          return { x: element.offsetLeft + 338,
                   y: element.offsetTop + 126,
                   range: 40 };
        },
        function (x, y) {
          let element = window.document.getElementById('map');
          return { x: element.offsetLeft + 194,
                   y: element.offsetTop + 156,
                   range: 40 };
        },
        function (x, y) {
          let element = window.document.getElementById('map');
          return { x: element.offsetLeft + 210,
                   y: element.offsetTop + 185,
                   range: 40 };
        },
        function (x, y) {
          let element = window.document.getElementById('map');
          return { x: element.offsetLeft + 138,
                   y: element.offsetTop + 360,
                   range: 40 };
        },
        function (x, y) {
          let element = window.document.getElementById('map');
          return { x: element.offsetLeft + 203,
                   y: element.offsetTop + 406,
                   range: 40 };
        },
        function (x, y) {
          let element = window.document.getElementById('map');
          return { x: element.offsetLeft + 382,
                   y: element.offsetTop + 213,
                   range: 40 };
        },
        function (x, y) {
          let element = window.document.getElementById('map');
          return { x: element.offsetLeft + 352,
                   y: element.offsetTop + 418,
                   range: 40 };
        },
      ],
      relativePoints: [
        { x: 1  , y: 0   },   // snap relative to the element's top-left,
        // { x: 0.5, y: 0.5 },   // to the center
        { x: 1  , y: 1   }    // and to the bottom-right
      ],
      endOnly: true,
    },
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
      let element = window.document.getElementById('map');
      console.log(element.offsetLeft, element.offsetTop, element.offsetParent);
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