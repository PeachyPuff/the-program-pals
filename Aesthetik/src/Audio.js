import React from 'react';
import {Howl, Howler} from 'howler';
import * as Tone from "tone";
import SoundJS from 'soundjs';

document.onkeydown = handleKeyDownEvent;
document.onkeyup = handleKeyUpEvent;
document.onkeypress = keyHandler;
document.onclick = clickHandler;

export class Audio extends React.Component {
    var Audio = function() {
        this.background = new Howl({
            src: ['/Users/someonesomeone/repos/the-program-pals/Aesthetik/src/aesthetikBackground.svg', './assets/sprite.mp3'],
            sprite: {
                thunder: [19000, 13858, true],
                rain: [0, 100000, true],
                noise:[0, 10000, true],
                music: [0, 10000]
            },
            volume: 0
        });
        this.event = new Howl({
            src: ['tik.mp3'],
        });
        event.once('onkeypress', function(){
            event.play();
        });
        event.once('onc;lick', function(){
            event.play()
        });
    };
    Audio.prototype = {
        rain: function() {
            this.rain = this.background.play('rain');
            this.background.volume(.64,this.rain);
        },
        thunder: function() {
            var x = Math.round(100 * (2 - (Math.random() * 4))) / 100;
            var y = Math.round(100 * (2 - (Math.random() * 4))) / 100;
            this._thunder = this.background.play('thunder');
            this.background.pos(x, y, -0.5, this._thunder);
            this.background.volume(1, this._thunder);
            this.thunder();
        }
    },
};