import Phaser from 'phaser';
import { SceneKey } from '../utils/constants';
import SceneBackgrounds from '../utils/assetsPaths/backgrounds';

class SplashScene extends Phaser.Scene {

    constructor() {
        super({ key: SceneKey.SPLASH })
    }

    init() {
        const { width, height } = this.game.canvas;
        const key = SceneBackgrounds.GREEN_LANDSCAPE.key;
        this.background = this.add.image(0, 0, key)
            .setOrigin(0)
            .setDisplaySize(width, height);
        this.add.image(width / 2, height / 2, 'icon');
    }
}

export default SplashScene;