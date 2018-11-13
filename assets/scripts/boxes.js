class Boxes {
    // states : marked 0:0, marked 1:x, marked -1:yet to be marked
    constructor(boxIndex) {
        this.state = -1;
        this.index = boxIndex;
        this.imgUrl = "";
        // assests/images/alpha.png
    }

    getIndex() {
        return this.index;
    }

    state() {
        return this.state;
    }

    setState(currentState) {
        this.state = currentState;
        this.setImg();
    }

    setImg() {
        if (this.state == 1) {
            this.imgUrl = 'assets/images/X.png';
        } else if (this.state == 0) {
            this.imgUrl = 'assets/images/O.png';
        } else {
            this.imgUrl = 'assets/images/tr.png';
        }
    }

    
}