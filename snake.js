function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    this.score = 1;
    this.bestScore = localStorage.getItem('score');
    
    this.update = function(){
        if(this.total === this.tail.length){
            for(var i=0; i<this.tail.length-1; i++){
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = createVector(this.x, this.y);

        this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;
        console.log('y='+this.y);
        // this.x = constrain(this.x, 0, width-scl);
        // this.y = constrain(this.y, 0, height-scl);
        if(this.x >= window.windowWidth) this.x = 0;
        else if(this.x < 0) this.x = window.windowWidth;
        else if(this.y >= window.windowHeight) this.y = 0;
        else if(this.y < 0) this.y = window.windowHeight;
    }

    this.show = function(){
        $('.wynik').html('Score: '+this.score);
        $('.bestWynik').html('Best score: '+this.bestScore);
		$('.newWynik').html('Kejdul pozdrawia serdecznie xSvilen\'a !');
        fill(255);
        for(var i=0; i<this.tail.length; i++){
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        fill(255);
        rect(this.x, this.y, scl, scl);
    }

    this.dir = function(x, y){
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function(pos){
        var d = dist(this.x, this.y, pos.x, pos.y);
        if(d<1){
            this.total++;
            this.score++;
            if(this.score>this.bestScore) this.bestScore = this.score;
            return true;
        } 
        else return false;
    }

    this.death = function(){
        for(var i=0; i<this.tail.length; i++){
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if(d<1){
                this.total = 0;
                this.tail = [];
                this.score = 1;
                localStorage.setItem('score', this.bestScore);
            }
        }
    }
}
