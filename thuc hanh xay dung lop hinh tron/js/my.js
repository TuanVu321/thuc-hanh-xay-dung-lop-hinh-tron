let Cricle = function (radius) {
this.radius = radius;
this.getRadius = function () {
return this.radius;
};
this.getArea = function () {
return this.radius * Math.PI*this.radius;
};
this.setRadius = function (radius) {
this.radius = radius;
};
};
function display(bankinh){
    let circle = new Cricle(bankinh);
    let radius = circle.getRadius();
    let area = circle.getArea();
    alert('radius: '+radius+' area: '+area);
}
display(5);