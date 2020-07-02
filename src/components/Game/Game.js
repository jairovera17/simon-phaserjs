import React, { Component } from 'react';
import Phaser from 'phaser';
import BaseGame from './utils/classes/BaseGame'
import BootScene from './scenes/boot';
import SplashScene from './scenes/splash';

class SimonGame extends Component {

    componentDidMount() {
        const DPR = window.devicePixelRatio;
        this.game = new BaseGame({
            scene: [BootScene, SplashScene],
            backgroundColor: '#000000',
            type: Phaser.AUTO,
            scale: {
                parent: 'phaser-game',
                mode: Phaser.Scale.NONE,
                height: document.documentElement.clientHeight * DPR,
                width: document.documentElement.clientWidth * DPR,
                zoom: 1 / DPR
            }
        });
        this.resizeEvent = () => this.resizeGame();
        window.addEventListener('resize', this.resizeEvent);
    }

    render() {
        return <div id="phaser-game" />;
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeEvent);
    }

    resizeGame() {
        const DPR = window.devicePixelRatio;
        const { clientWidth, clientHeight } = document.documentElement;
        this.game.scale.resize(clientWidth * DPR, clientHeight * DPR);
    }

}

export default SimonGame;