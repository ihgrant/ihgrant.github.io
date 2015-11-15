/* scripts for blog.chenghiz.net */

var themer = (function () {
    var nightDay = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.toggle('night');
    };
    var rando = function (v, n, x) {
        'use strict';
        v += Math.floor(Math.random() * (x - n + 1) + n);
        if (v > 235) {
            return 235;
        } else if (v < 0) {
            return 0;
        } else {
            return v;
        }
    };
    return {
        initialise: function () {
            var d = new Date();
            if (d.getHours() < 6 || d.getHours() > 18) {
                nightDay();
            }
            window.setInterval(function () {
                'use strict';
                try {
                    var y = document.getElementsByClassName('colors')[0];
                    var c = window.getComputedStyle(y).getProperty('background-color');
                    c = c.substring(c.indexOf('(') + 1, c.indexOf(')')).split(',');
                    var r = rando(+c[0], -5, 5),
                        g = rando(+c[1], -5, 5),
                        b = rando(+c[2], -2, 2),
                        newColor = 'rgb(' + r + ',' + g + ',' + b + ')',
                        colors = document.getElementsByClassName('colors');

                    for (var x=0, l=colors.length; x<l; x++) {
                        colors[x].style.backgroundColor = newColor;
                    }
                } catch (e) {
                    console.log(e.message);
                }
            }, 800);
        }
    };
})();

document.addEventListener('DOMCOntentLoaded', themer.initialise);
