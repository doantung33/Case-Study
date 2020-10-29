let thamsoThanh = {
    marginTop: 30, //lề
    width: 70,
    height: 12,
    speed: 35,  //tốc độ
};
let ThanhDoBall = function () {
    this.w = thamsoThanh.width; //rộng
    this.h = thamsoThanh.height;  //dài
    this.x = canvas.width/3-this.w/2;  //tọa độ đầu
    this.y = canvas.height - this.h - thamsoThanh.marginTop; //tọa độ sau
    this.speed = thamsoThanh.speed;
    this.drawThanh = function() { //vẽ thanh đỡ
        context.beginPath();
        context.rect(this.x, this.y, this.w, this.h);
        context.fillStyle = 'blue';
        context.fill();

        context.closePath();
    };
    this.moveLeft = function () { //thanh di chuyển sang trái
        this.x -= this.speed;
        if (this.x<0) {
            this.x = 0;
        }
    };
    this.moveRight = function () { //thanh di chuyen sang phải
        this.x += this.speed;
        if (this.x> canvas.width - this.w) {
            this.x= canvas.width - this.w;
        }
    };
    this.doBall = function (ball) {
        if (ball.x + ball.radius >= this.x && ball.x + ball.radius <= this.x + this.w
            && ball.y + ball.radius >= this.y && ball.y - ball.radius <= this.y + this.h) {
            ball.dy = -ball.dy;
        }
    }
};