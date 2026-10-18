/**
 * Clase Boss que hereda de Opponent
 */
class Boss extends Opponent {
    constructor (game) {
        super(game); // Llama al constructor de la clase padre (Opponent)
        
        // propiedades del boss
        this.speed = OPPONENT_SPEED * 2;
        this.myImage = BOSS_PICTURE;
        this.myImageDead = BOSS_PICTURE_DEAD;
        
        // actualizacion de la imagen 
        this.image.src = this.myImage;
    }
}