import Phaser from 'phaser';
import { GameFont, SceneKey } from '../utils/constants';
import SceneBackgrounds from '../utils/assetsPaths/backgrounds';

class BootScene extends Phaser.Scene {

    constructor() {
        super({ key: SceneKey.BOOT })
    }

    preload() {
      //  this.load.setBaseURL('./simon-phaserjs');
        const fontPath = 'url(/simon-phaserjs/GameAssets/fonts/ArialRoundedMT.ttf)';
        this.arialRoundedFont = new window.FontFace(GameFont, fontPath);
        this.arialRoundedFont.load()
            .then(loadedFont => document.fonts.add(loadedFont))
            .catch((e) => console.log('error al cargar la fuente', e));
        Object.values(SceneBackgrounds).forEach(({ key, url }) =>
            this.load.image(key, url))
        this.load.image('icon', 'GameAssets/icon.png');
        this.load.on('complete', () => this.scene.start(SceneKey.SPLASH));
    }
}

export default BootScene;