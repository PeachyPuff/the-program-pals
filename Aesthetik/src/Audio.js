import React from 'react';
import {Howl, Howler} from 'howler';
import ReactHowler from 'react-howler';
import * as Tone from "tone";
//import SoundJS from 'soundjs';

//document.onkeydown = handleKeyDownEvent;
//document.onkeyup = handleKeyUpEvent;
//document.onkeypress = keyHandler;
//document.onclick = clickHandler;

class Audio extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playing: false,
            loaded: false,
            loop: false,
            mute: false,
            volume: 1.0
          }
          this.handleLoopToggle = this.handleLoopToggle.bind(this)
          this.handleOnLoad = this.handleOnLoad.bind(this)
          this.handleOnPlay = this.handleOnPlay.bind(this)
          this.handleStop = this.handleStop.bind(this)
          this.handleToggle = this.handleToggle.bind(this)
          this.handleMuteToggle = this.handleMuteToggle.bind(this)

    }

    componentWillUnmount () {
        this.clearRAF()
      }
    

    handleOnPlay () {
        this.setState({
          playing: true
        })
        this.renderSeekPos()
      }

    
    handleToggle () {
        this.setState({
          playing: !this.state.playing
        })
      }
    
      handleOnLoad () {
        this.setState({
          loaded: true,
          duration: this.player.duration()
        })
      }

      handleStop () {
        this.player.stop()
        this.setState({
          playing: false // Need to update our local state so we don't immediately invoke autoplay
        })
        this.renderSeekPos()
      }

      handleMuteToggle () {
        this.setState({
          mute: !this.state.mute
        })
      }

      handleLoopToggle () {
        this.setState({
          loop: !this.state.loop
        })
      }
    
    
    
    render () {
        return (
        <div className='Audio'>
        <ReactHowler
          src={['./rain-01.mp3', './rain-02.mp3','./rain-04.mp3']}
          playing={this.state.playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          onEnd={this.handleOnEnd}
          loop={this.state.loop}
          mute={this.state.mute}
          volume={this.state.volume}
          ref={(ref) => (this.player = ref)}
        />
        <p>{(this.state.loaded) ? 'Loaded' : 'Loading'}</p>

            <div className='toggles'>
          <label>
            Loop:
            <input
              type='checkbox'
              checked={this.state.loop}
              onChange={this.handleLoopToggle}
            />
          </label>
          <label>
            Mute:
            <input
              type='checkbox'
              checked={this.state.mute}
              onChange={this.handleMuteToggle}
            />
          </label>
        </div>

         <p>
          {'Status: '}
          {(this.state.seek !== undefined) ? this.state.seek.toFixed(2) : '0.00'}
          {' / '}
          {(this.state.duration) ? this.state.duration.toFixed(2) : 'NaN'}
        </p>

                <div className='volume'>
          <label>
            Volume:
            <span className='slider-container'>
              <input
                type='range'
                min='0'
                max='1'
                step='.05'
                value={this.state.volume}
                onChange={e => this.setState({volume: parseFloat(e.target.value)})}
                style={{verticalAlign: 'bottom'}}
              />
            </span>
            {this.state.volume.toFixed(2)}
          </label>
        </div>

       

        </div>
        );
    }
}
export default Audio
        /*
        var Audio = function() {
        this.audio = new Howl({
            src: ['./rain-01.mp3'],
            sprite: {
                thunder: [19000, 13858, true],
                rain: [8000, 10000, true],
                noise:[0, 10000, true],
                music: [0, 10000]
            },
            volume: 1
        });
        this.event = new Howl({
           src: ['tik.mp3'],
        });
        //event.once('onkeypress', function(){
            //event.play();
        //});
        //event.once('onclick', function(){
            //event.play()
       // });
        this.rain();
        this.thunder();
        
    };
        Audio.prototype = {
        rain: function() {
            this._rain = this.audio.play('rain');
            this.audio.volume(10,this._rain);
        },
        thunder: function() {
            var x = Math.round(100 * (2 - (Math.random() * 4))) / 100;
            var y = Math.round(100 * (2 - (Math.random() * 4))) / 100;
            this._thunder = this.audio.play('thunder');
            this.audio.volume(1, this._thunder);
            this.thunder();
        }
    };
    */

