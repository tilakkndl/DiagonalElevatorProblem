//this function take n(John's floor), m(elevator's floor) and time(array of time)
function shortestPathFunction(n, m, time){
if(n === 0){
    return 0;
}
let shortestPath;
if(m>n){
    let walk = (n)*time[3];
    let elevator = (m)*time[0] + 2*time[1]+time[2];
    let walkElevator = (m-n)*time[3] + (m)*time[0] + 2*time[1] + time[2];
    let elevatorWalk = (m-n)*time[0] + (n)*time[3];
    shortestPath = Math.min(walk, elevator, walkElevator, elevatorWalk);
}
else if(n>m){
    let walk = (n)*time[3];
    let elevator = (n+n-m)*time[0] + 2*time[1] + time[2];
    let walkElevator = (n-m)*time[3] + m*time[0] + 2*time[1] + time[2];
    let elevatorWalk = 2*(n-m)*time[0] + 2*time[1] + time[2] + m*time[3];
    shortestPath = Math.min(walk, elevator, walkElevator, elevatorWalk);
}
else{
    let walk = n*time[3];
    let elevator = n*time[0] + 2*time[1] + time[2];
    shortestPath = Math.min(walk, elevator);
}
return shortestPath;
}

let n = 4      //john's floor
let m = 5       //elevator's floor
let arr = [1,2,3,10]     //array of time

console.log(shortestPathFunction(n, m, arr));
