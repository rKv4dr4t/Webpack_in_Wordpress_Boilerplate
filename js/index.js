import "../css/main.css";
import xss from 'xss';

// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () { };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


//// Example: package, xss ////
// let html = xss('<script>alert("xss");</script>');
// console.log(html);


//// Example: Modernizr ////
// if (Modernizr.canvas) {
//     console.log('canvas supported');
// } else {
//     console.log('canvas unsopported');
// }


//// Example: transpiling throw Babel, result will return input != null ? input : "Hello world" ////
// function greet(input) {
//     return input ?? "Hello world";
// }
// window.greet = greet;


//// Example: exposed function throw window ////
// function testFunction() {
//     document.getElementById('output').innerText = document.getElementById('test').value;
// }
// window.testFunction = testFunction;


//// Example: file importation ////
// import {testFunction} from './fileExportTest.js';
// window.testFunction = testFunction;
