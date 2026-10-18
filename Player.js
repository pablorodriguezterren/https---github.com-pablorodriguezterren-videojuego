/**
 * Main character of the game. Inherits from the Character class
 * @extends Character
 */
class Player extends Character {
    /**
    * Initializes a player
    * @param game {Game} The instance of the game to which the player belongs
    */

    constructor (game) {
        const height = PLAYER_HEIGHT * game.width / 100,
            width = PLAYER_WIDTH * game.width / 100,
            x = game.width / 2 - width / 2,
            y = game.height - height,
            speed = PLAYER_SPEED,
            myImage = PLAYER_PICTURE,
            myImageDead = PLAYER_PICTURE_DEAD;

        super(game, width, height, x, y, speed, myImage, myImageDead);
        this.lives=3; // Atributo para llevar las vidas del jugador
    }

    /**
     * Update the position attributes of the player and the shots based on the keys pressed
     */
    update () {
        if (!this.dead) {
            switch (this.game.keyPressed) {
            case KEY_LEFT:
                if (this.x > this.speed) {
                    this.x -= this.speed;
                }
                break;
            case KEY_RIGHT:
                if (this.x < this.game.width - this.width - this.speed) {
                    this.x += this.speed;
                }
                break;
            case KEY_SHOOT:
                this.game.shoot(this);
                break;
            }
        }
    }

    /**
     * Kill the player
     */
    collide() {
        if (!this.dead) {
            this.lives = this.lives - 1; // Restamos una vida
            super.collide(); // Llama al método del padre para morir temporalmente (cambia la imagen y pone dead a true)
            
            if (this.lives > 0) {
                // Si le quedan vidas, revive a los 2 segundos usando un temporizador
                setTimeout(() => {
                    this.image.src = this.myImage; // Recupera la imagen original
                    this.dead = false; // Vuelve a estar vivo
                }, 2000);
            } else {
                // Si las vidas llegan a cero, muere definitivamente y termina la partida
                setTimeout(() => {
                    this.game.endGame();
                }, 2000);
            }
        }
    }
}