function calculateavg(){
  var msg=""
  var mark1= parseFloat(document.getElementById("mark1").value);
  var mark2= parseFloat(document.getElementById("mark2").value);
  var mark3= parseFloat(document.getElementById("mark3").value);
  var mark4= parseFloat(document.getElementById("mark4").value);
  var mark5= parseFloat(document.getElementById("mark5").value);
  
  if(isNaN(mark1)){mark1=0;msg=msg+"mark1 is an empty value.\n"}
  if(isNaN(mark2)){mark2=0;msg=msg+"mark2 is an empty value.\n"}
  if(isNaN(mark3)){mark3=0;msg=msg+"mark3 is an empty value.\n"}
  if(isNaN(mark4)){mark4=0;msg=msg+"mark4 is an empty value.\n"}
  if(isNaN(mark5)){mark5=0;msg=msg+"mark5 is an empty value.\n"}
  
  var total= mark1+mark2+mark3+mark4+mark5;
  var avg=Math.ceil(total/5);
  
  document.getElementById('average').value='The average mark is:' + avg + '\n' + msg
}
