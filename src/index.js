import _ from 'lodash';
import './style.css';
const interact = require('interactjs');
const locationModel = require('./location');
var locations = {};
// const yanxiaLocation = [
//   {x: 251, y:103, range: 40},
//   {x: 276, y:127, range: 40},
//   {x: 319, y:114, range: 40},
//   {x: 338, y:126, range: 40},
//   {x: 194, y:156, range: 40},
//   {x: 210, y:185, range: 40},
//   {x: 138, y:360, range: 40},
//   {x: 203, y:406, range: 40},
//   {x: 382, y:213, range: 40},
//   {x: 352, y:418, range: 40},
// ];
window.onload = ()=>{
  let element = window.document.getElementById('yanxia');
  let snapRange = 40;
  locations['yanxia'] = locationModel.yanxiaLocation.map( loc =>{
    return {
      x: element.offsetLeft + loc.x,
      y: element.offsetTop + loc.y,
      range: snapRange
    }
  })
  
  element = window.document.getElementById('fringes');
  locations['fringes'] = locationModel.fringesLocation.map( loc =>{
    return {
      x: element.offsetLeft + loc.x,
      y: element.offsetTop + loc.y,
      range: snapRange
    }
  })

  element = window.document.getElementById('lochs');
  locations['lochs'] = locationModel.lochsLocation.map( loc =>{
    return {
      x: element.offsetLeft + loc.x,
      y: element.offsetTop + loc.y,
      range: snapRange
    }
  })

  element = window.document.getElementById('peaks');
  locations['peaks'] = locationModel.peaksLocation.map( loc =>{
    return {
      x: element.offsetLeft + loc.x,
      y: element.offsetTop + loc.y,
      range: snapRange
    }
  })

  element = window.document.getElementById('rubySea');
  locations['rubySea'] = locationModel.rubySeaLocation.map( loc =>{
    return {
      x: element.offsetLeft + loc.x,
      y: element.offsetTop + loc.y,
      range: snapRange
    }
  })

  element = window.document.getElementById('azim');
  locations['azim'] = locationModel.azimLocation.map( loc =>{
    return {
      x: element.offsetLeft + loc.x,
      y: element.offsetTop + loc.y,
      range: snapRange
    }
  })
}

interact('.yanxia')
  .draggable({
    snap: {
      targets: [
        function (x, y) {
          return locations.yanxia.reduce((acc, cur) =>{
            let distance1 = Math.pow((x-acc.x),2) + Math.pow((y-acc.y),2);
            let distance2 = Math.pow((x-cur.x),2) + Math.pow((y-cur.y),2);
            if(distance1 > distance2){
              acc = cur;
            }
            return acc;
          })
      },],
      relativePoints: [
        { x: 0.5  , y: 1.2}    // and to the bottom-mid
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
    onend: (event) =>{
    }
  });

  interact('.fringes')
  .draggable({
    snap: {
      targets: [
        function (x, y) {
          return locations.fringes.reduce((acc, cur) =>{
            let distance1 = Math.pow((x-acc.x),2) + Math.pow((y-acc.y),2);
            let distance2 = Math.pow((x-cur.x),2) + Math.pow((y-cur.y),2);
            if(distance1 > distance2){
              acc = cur;
            }
            return acc;
          })
      },],
      relativePoints: [
        { x: 0.5  , y: 1.2   }    // and to the bottom-mid
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
    onend: (event) =>{
    }
  });

  interact('.lochs')
  .draggable({
    snap: {
      targets: [
        function (x, y) {
          return locations.lochs.reduce((acc, cur) =>{
            let distance1 = Math.pow((x-acc.x),2) + Math.pow((y-acc.y),2);
            let distance2 = Math.pow((x-cur.x),2) + Math.pow((y-cur.y),2);
            if(distance1 > distance2){
              acc = cur;
            }
            return acc;
          })
      },],
      relativePoints: [
        { x: 0.5  , y: 1.2   }    // and to the bottom-mid
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
    onend: (event) =>{
    }
  });

  interact('.peaks')
  .draggable({
    snap: {
      targets: [
        function (x, y) {
          return locations.peaks.reduce((acc, cur) =>{
            let distance1 = Math.pow((x-acc.x),2) + Math.pow((y-acc.y),2);
            let distance2 = Math.pow((x-cur.x),2) + Math.pow((y-cur.y),2);
            if(distance1 > distance2){
              acc = cur;
            }
            return acc;
          })
      },],
      relativePoints: [
        { x: 0.5  , y: 1.2   }    // and to the bottom-mid
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
    onend: (event) =>{
    }
  });

  interact('.rubySea')
  .draggable({
    snap: {
      targets: [
        function (x, y) {
          return locations.rubySea.reduce((acc, cur) =>{
            let distance1 = Math.pow((x-acc.x),2) + Math.pow((y-acc.y),2);
            let distance2 = Math.pow((x-cur.x),2) + Math.pow((y-cur.y),2);
            if(distance1 > distance2){
              acc = cur;
            }
            return acc;
          })
      },],
      relativePoints: [
        { x: 0.5  , y: 1.2   }    // and to the bottom-mid
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
    onend: (event) =>{
    }
  });

  interact('.azim')
  .draggable({
    snap: {
      targets: [
        function (x, y) {
          return locations.azim.reduce((acc, cur) =>{
            let distance1 = Math.pow((x-acc.x),2) + Math.pow((y-acc.y),2);
            let distance2 = Math.pow((x-cur.x),2) + Math.pow((y-cur.y),2);
            if(distance1 > distance2){
              acc = cur;
            }
            return acc;
          })
      },],
      relativePoints: [
        { x: 0.5  , y: 1.2   }    // and to the bottom-mid
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
    onend: (event) =>{
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
