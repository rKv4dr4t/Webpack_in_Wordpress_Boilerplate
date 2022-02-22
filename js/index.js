import "../css/main.scss";
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

//// Esempio di package, xss ////
// let html = xss('<script>alert("xss");</script>');
// console.log(html);


//// Esempio di Modernizr ////
// if (Modernizr.canvas) {
//     console.log('canvas supported');
// } else {
//     console.log('canvas unsopported');
// }

//// Esempio di transpiling con Babel, il risultato diventerà return input != null ? input : "Hello world" ////
// function greet(input) {
//     return input ?? "Hello world";
// }
// window.greet = greet;

//// Esempio di funzione esposta con window ////
// function testFunction() {
//     document.getElementById('output').innerText = document.getElementById('test').value;
// }
// window.testFunction = testFunction;

//// Esempio di importazione di file ////
// import {testFunction} from './fileExportTest.js';
// window.testFunction = testFunction;
