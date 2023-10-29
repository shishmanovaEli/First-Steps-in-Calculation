function circleAreaAndPerimeter (input){
    let r = Number (input[0]);
    let circleArea = (Math.PI * r * r).toFixed(2);
    let perometer = (2 * Math.PI * r).toFixed(2);
    console.log (circleArea);
    console.log (perometer);
}
circleAreaAndPerimeter ([4.5])