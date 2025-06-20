const basketballGame = {
    score: 0,
    foul: 0,
    boundsFoul() {
        this.foul++;
        return this;
    },
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    halfTime() {
        console.log('Halftime score is ' + this.score);
        console.log('Halftime total fouls is ' + this.foul);
        return this;
    },
    fullTime() {
        console.log('Fulltime score is ' + this.score);
        console.log('Fulltime total fouls is ' + this.foul);
        return this;
    }
}

//modify each of the above object methods to enable function chaining as below: 
basketballGame.basket().freeThrow().boundsFoul().freeThrow().basket().boundsFoul().threePointer().halfTime().boundsFoul().freeThrow().basket().fullTime(); 