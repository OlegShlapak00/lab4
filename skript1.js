
function isNumber(elem){
  elem=elem.value;
  if( Number(elem)>0 && Number(elem)< 5000){
    return true;
  }
  else {
    return false;
  }
}
function isEnglish(elem){
  elem=elem.value;

    return !/[^a-z]/i.test(elem);
}

window.onload=function(){
  fun();
}

function fun() {
  let inputs_numbers=document.querySelectorAll('.input_n');
  inputs_numbers.forEach((element) => {
    element.addEventListener("change",  function f() { NumVal(element) });
  });

  let inputs_l=document.querySelectorAll('.input_l');
  inputs_l.forEach((element) => {
    element.addEventListener("change",  function f() { LenVal(element) });
  });

  let form =document.forms[0];
  form.onsubmit=function f(event) {
    let isValid=true;
    if (document.querySelectorAll('.red_border').length!==0) {
       isValid=false;
       event.preventDefault();
       console.log("Форма не відправилась");
    }
    else {
      let img=document.querySelector('#photo');


      let width=document.getElementById('input_width').value;
      let heigth=document.getElementById('input_height').value;
      let bd_size=document.getElementById('border_size').value;
      let bd_color=document.getElementById('border_color').value;
      let alt_text=document.getElementById('alternative_text').value;

      img.style.width =`${width}px`;
      img.style.height =`${heigth}px`;
      img.style.border =`${bd_size}px solid ${bd_color} `;
      img.setAttribute("alt",`${alt_text}`);
      console.log(img);
    }
    return false; // якщо ми замінимо false на isValid то форма відправиться і оновиться сторінка
  }

}
function NumVal(element) {

  if (isNumber(element)) {
    element.classList.add('green_border');
    element.classList.remove('red_border');
  }
  else {
    element.classList.add('red_border');
    element.classList.remove('green_border');
  }
}

function LenVal(element) {
  if (isEnglish(element)) {
    element.classList.add('green_border');
    element.classList.remove('red_border');
  }
  else {
    element.classList.add('red_border');
    element.classList.remove('green_border');
  }
}
