$stations = document.getElementById("stations");
var count = 0;
for(var i=88; i <= 108; i++){
  $stations.innerHTML += '<li class="radio-station"><span>'+i+'</span></li>';
  count++;
}
$stations.style.width = (count * 50) + 'px';

$station = document.getElementById("station");
function showVal(val){
  var min = 88;
  var max = 108;
  var diff = max - min;
  var distance = (val - min) * 50; //the "index" of this station * width
  console.log(distance)
  $stations.style.transform = 'translateX(-'+distance+'px)';
  $station.innerText = parseFloat(val).toFixed(1);
}