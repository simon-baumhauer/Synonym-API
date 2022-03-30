class BottlesBar extends MovableObject {

    

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png'

    ];

    precentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
        this.x = 20;
        this.y = 100;
        this.width = 200;
        this.height = 60;
        
     
    }

 
    setPercentage(percentage) {
        this.percentage = percentage; 
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
            
        } else if (this.percentage >= 80) {
            return 4;
        
        } else if (this.percentage >= 60) {
            return 3;
        
        } else if (this.percentage >= 40) {
            return 2;
        
        } else if (this.percentage >= 20) {
            return 1;

        } else {
            return 0;


        }
    

    }


}