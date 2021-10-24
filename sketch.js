var marks = [35,38,42,45,43,34,46,41,48,32];


console.log(find_number(marks,45))
function setup() 
{
  createCanvas(400,400);

}

function draw() 
{
  background(30);
}

 

function find_number(arr,x){
  for(var i = 0; i<marks.length; i++){
    if(arr[i]==x){
      return i;
    }

  }
  return -1;
}