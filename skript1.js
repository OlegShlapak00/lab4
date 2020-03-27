
function isNumber(elem){
  if( Number(elem)>0 && Number(elem)< 5000){
    return true;
  }
  else {
    return false;
  }
}
function isEnglish(elem){
    return /[a-z]/i.test(elem);
}

function resize(){

  let Submited=true;

  let width=document.getElementById('input_width').value;
  if(!isNumber(width)){
    document.getElementById('input_width').style="border-color: red";
    Submited=false;
  }

  let height=document.getElementById('input_height').value;
  if(!isNumber(height)){
    document.getElementById('input_height').style="border-color: red";
    Submited=false;
  }

  let b_size=document.getElementById('border_size').value;
  if(!isNumber(b_size)){
    document.getElementById('border_size').style="border-color: red";
    Submited=false;
  }

  let b_color=document.getElementById('border_color').value;
  if(!isEnglish(b_color)){
    document.getElementById('border_color').style="border-color: red";
    Submited=false;
  }

  let alt_text=document.getElementById('alternative_text').value;
  if(!isEnglish(alt_text)){
    document.getElementById('alternative_text').style="border-color: red";
    Submited=false;
  }

  let img=document.getElementById('photo');

  if (!Submited) {
  }
  else {
    img.setAttribute("style",
    `height:${height}px;
     width: ${width}px;
     border:${b_size}px solid ${b_color};`);
     img.setAttribute("alt",`${alt_text}`);
  }
  return false;

}
