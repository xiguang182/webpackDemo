import _ from 'lodash';
import './style.css';
// import './dark.css';
const interact = require('interactjs');
const locationModel = require('./location');
var locations = {};
var hunts = {};
var maps = {};
window.onload = ()=>{
  let element = window.document.getElementById('yanxia');
  maps.yanxia = element;
  let snapRange = 40;
  locations['yanxia'] = locationModel.yanxiaLocation.map( loc =>{
    return {
      x: element.offsetLeft + loc.x,
      y: element.offsetTop + loc.y,
      range: snapRange
    }
  })
  
  element = window.document.getElementById('fringes');
  maps.fringes = element;
  locations['fringes'] = locationModel.fringesLocation.map( loc =>{
    return {
      x: element.offsetLeft + loc.x,
      y: element.offsetTop + loc.y,
      range: snapRange
    }
  })

  element = window.document.getElementById('lochs');
  maps.lochs = element;
  locations['lochs'] = locationModel.lochsLocation.map( loc =>{
    return {
      x: element.offsetLeft + loc.x,
      y: element.offsetTop + loc.y,
      range: snapRange
    }
  })

  element = window.document.getElementById('peaks');
  maps.peaks = element;
  locations['peaks'] = locationModel.peaksLocation.map( loc =>{
    return {
      x: element.offsetLeft + loc.x,
      y: element.offsetTop + loc.y,
      range: snapRange
    }
  })

  element = window.document.getElementById('rubySea');
  maps.rubySea = element;
  locations['rubySea'] = locationModel.rubySeaLocation.map( loc =>{
    return {
      x: element.offsetLeft + loc.x,
      y: element.offsetTop + loc.y,
      range: snapRange
    }
  })

  element = window.document.getElementById('azim');
  maps.azim = element;
  locations['azim'] = locationModel.azimLocation.map( loc =>{
    return {
      x: element.offsetLeft + loc.x,
      y: element.offsetTop + loc.y,
      range: snapRange
    }
  })
  hunts.erle = {
    element: window.document.getElementById('erle'),
    map: 'fringes'
  };
  hunts.orcus = {
    element: window.document.getElementById('orcus'),
    map: 'fringes'
  };

  hunts.voch = {
    element: window.document.getElementById('vochstein'),
    map: 'peaks'
  };

  hunts.aqra = {
    element: window.document.getElementById('aqrabuamelu'),
    map: 'peaks'
  };

  hunts.mahi = {
    element: window.document.getElementById('mahisha'),
    map: 'lochs'
  };

  hunts.lumi = {
    element: window.document.getElementById('luminare'),
    map: 'lochs'
  };
  
  hunts.gaja = {
    element: window.document.getElementById('gajasura'),
    map: 'yanxia'
  };

  hunts.anga = {
    element: window.document.getElementById('angada'),
    map: 'yanxia'
  };

  hunts.oni = {
    element: window.document.getElementById('oni'),
    map: 'rubySea'
  };

  hunts.funa = {
    element: window.document.getElementById('funa'),
    map: 'rubySea'
  };

  hunts.giri = {
    element: window.document.getElementById('girimekhala'),
    map: 'azim'
  };

  hunts.sum = {
    element: window.document.getElementById('sum'),
    map: 'azim'
  };
  

  for(let hunt in hunts){
    delegation(hunts[hunt].element, locations[hunts[hunt].map]);
  }
  
}

function delegation(ele, loc){
  let interac = interact(ele)
  .draggable({
    snap: {
      targets: [
        function (x, y) {
          return loc.reduce((acc, cur) =>{
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
  }).on('hold', function (event) {
    event.currentTarget.classList.toggle('redBorder');
    console.log(event.target)
    interac.options.drag.enabled = !interac.options.drag.enabled;
    // event.currentTarget.classList.remove('large');
  });
  return interac;
}

window.toggleBrightness = function() {
  for(let map in maps){
    maps[map].classList.toggle('darkMap')
  }
  window.document.body.classList.toggle('dark');

}
// interact('.yanxia')
//   .draggable({
//     snap: {
//       targets: [
//         function (x, y) {
//           return locations.yanxia.reduce((acc, cur) =>{
//             let distance1 = Math.pow((x-acc.x),2) + Math.pow((y-acc.y),2);
//             let distance2 = Math.pow((x-cur.x),2) + Math.pow((y-cur.y),2);
//             if(distance1 > distance2){
//               acc = cur;
//             }
//             return acc;
//           })
//       },],
//       relativePoints: [
//         { x: 0.5  , y: 1.2}    // and to the bottom-mid
//       ],
//       endOnly: true,
//     },
//     // enable inertial throwing
//     inertia: true,
//     // keep the element within the area of it's parent
//     restrict: {
//       restriction: "parent",
//       endOnly: true,
//       elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
//     },
//     // enable autoScroll
//     autoScroll: true,

//     // call this function on every dragmove event
//     onmove: dragMoveListener,
//     // call this function on every dragend event
//     onend: (event) =>{
//     }
//   }).on('hold', function (event) {
//     event.currentTarget.classList.toggle('redBorder');
//     console.log(event.target)
//     interac.options.drag.enabled = !interac.options.drag.enabled;
//     // event.currentTarget.classList.remove('large');
//   });

  // interact('.fringes')
  // .draggable({
  //   snap: {
  //     targets: [
  //       function (x, y) {
  //         return locations.fringes.reduce((acc, cur) =>{
  //           let distance1 = Math.pow((x-acc.x),2) + Math.pow((y-acc.y),2);
  //           let distance2 = Math.pow((x-cur.x),2) + Math.pow((y-cur.y),2);
  //           if(distance1 > distance2){
  //             acc = cur;
  //           }
  //           return acc;
  //         })
  //     },],
  //     relativePoints: [
  //       { x: 0.5  , y: 1.2   }    // and to the bottom-mid
  //     ],
  //     endOnly: true,
  //   },
  //   // enable inertial throwing
  //   inertia: true,
  //   // keep the element within the area of it's parent
  //   restrict: {
  //     restriction: "parent",
  //     endOnly: true,
  //     elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
  //   },
  //   // enable autoScroll
  //   autoScroll: true,

  //   // call this function on every dragmove event
  //   onmove: dragMoveListener,
  //   // call this function on every dragend event
  //   onend: (event) =>{
  //   }
  // });

  // interact('.lochs')
  // .draggable({
  //   snap: {
  //     targets: [
  //       function (x, y) {
  //         return locations.lochs.reduce((acc, cur) =>{
  //           let distance1 = Math.pow((x-acc.x),2) + Math.pow((y-acc.y),2);
  //           let distance2 = Math.pow((x-cur.x),2) + Math.pow((y-cur.y),2);
  //           if(distance1 > distance2){
  //             acc = cur;
  //           }
  //           return acc;
  //         })
  //     },],
  //     relativePoints: [
  //       { x: 0.5  , y: 1.2   }    // and to the bottom-mid
  //     ],
  //     endOnly: true,
  //   },
  //   // enable inertial throwing
  //   inertia: true,
  //   // keep the element within the area of it's parent
  //   restrict: {
  //     restriction: "parent",
  //     endOnly: true,
  //     elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
  //   },
  //   // enable autoScroll
  //   autoScroll: true,

  //   // call this function on every dragmove event
  //   onmove: dragMoveListener,
  //   // call this function on every dragend event
  //   onend: (event) =>{
  //   }
  // });

  // interact('.peaks')
  // .draggable({
  //   snap: {
  //     targets: [
  //       function (x, y) {
  //         return locations.peaks.reduce((acc, cur) =>{
  //           let distance1 = Math.pow((x-acc.x),2) + Math.pow((y-acc.y),2);
  //           let distance2 = Math.pow((x-cur.x),2) + Math.pow((y-cur.y),2);
  //           if(distance1 > distance2){
  //             acc = cur;
  //           }
  //           return acc;
  //         })
  //     },],
  //     relativePoints: [
  //       { x: 0.5  , y: 1.2   }    // and to the bottom-mid
  //     ],
  //     endOnly: true,
  //   },
  //   // enable inertial throwing
  //   inertia: true,
  //   // keep the element within the area of it's parent
  //   restrict: {
  //     restriction: "parent",
  //     endOnly: true,
  //     elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
  //   },
  //   // enable autoScroll
  //   autoScroll: true,

  //   // call this function on every dragmove event
  //   onmove: dragMoveListener,
  //   // call this function on every dragend event
  //   onend: (event) =>{
  //   }
  // });

  // interact('.rubySea')
  // .draggable({
  //   snap: {
  //     targets: [
  //       function (x, y) {
  //         return locations.rubySea.reduce((acc, cur) =>{
  //           let distance1 = Math.pow((x-acc.x),2) + Math.pow((y-acc.y),2);
  //           let distance2 = Math.pow((x-cur.x),2) + Math.pow((y-cur.y),2);
  //           if(distance1 > distance2){
  //             acc = cur;
  //           }
  //           return acc;
  //         })
  //     },],
  //     relativePoints: [
  //       { x: 0.5  , y: 1.2   }    // and to the bottom-mid
  //     ],
  //     endOnly: true,
  //   },
  //   // enable inertial throwing
  //   inertia: true,
  //   // keep the element within the area of it's parent
  //   restrict: {
  //     restriction: "parent",
  //     endOnly: true,
  //     elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
  //   },
  //   // enable autoScroll
  //   autoScroll: true,

  //   // call this function on every dragmove event
  //   onmove: dragMoveListener,
  //   // call this function on every dragend event
  //   onend: (event) =>{
  //   }
  // });

  // interact('.azim')
  // .draggable({
  //   snap: {
  //     targets: [
  //       function (x, y) {
  //         return locations.azim.reduce((acc, cur) =>{
  //           let distance1 = Math.pow((x-acc.x),2) + Math.pow((y-acc.y),2);
  //           let distance2 = Math.pow((x-cur.x),2) + Math.pow((y-cur.y),2);
  //           if(distance1 > distance2){
  //             acc = cur;
  //           }
  //           return acc;
  //         })
  //     },],
  //     relativePoints: [
  //       { x: 0.5  , y: 1.2   }    // and to the bottom-mid
  //     ],
  //     endOnly: true,
  //   },
  //   // enable inertial throwing
  //   inertia: true,
  //   // keep the element within the area of it's parent
  //   restrict: {
  //     restriction: "parent",
  //     endOnly: true,
  //     elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
  //   },
  //   // enable autoScroll
  //   autoScroll: true,

  //   // call this function on every dragmove event
  //   onmove: dragMoveListener,
  //   // call this function on every dragend event
  //   onend: (event) =>{
  //   }
  // });





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
  // window.dragMoveListener = dragMoveListener;
