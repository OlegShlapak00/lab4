
window.onload=function(){
  fun();
}

function fun(){
  let students_h = document.getElementById("Table").querySelectorAll('.row_student');
  let values_h = document.getElementById("Table").querySelectorAll('.row_value');
  let buttons_h = document.getElementById("Table").querySelectorAll('.delete');
  let students=[],values=[],buttons=[],diagram__columDeskr=[];


  for (let elem of students_h) {
    elem.setAttribute("data-student-name",elem.textContent);
    students.push(elem.dataset.studentName);
  }

  for (let elem of values_h) {
    elem.setAttribute("data-value",elem.textContent);
    values.push(elem.dataset.value);
  }

  for (let elem of buttons_h) {
    elem.addEventListener("click",  function f() {remove(elem)}, false);

  }

  let diagram__color_h = document.getElementById("diagram").querySelectorAll('.diagram_color');
  let diagram__columDeskr_h = document.getElementById("diagram").querySelectorAll('.diagram__columDeskr');

  let test=[];

  let i=0;
  for (let elem of diagram__color_h) {
    elem.addEventListener("mouseover",  function f2() {mouseOnDiagram(elem)}, false);
    elem.addEventListener("mouseout",  function f3() {mouseOutDiagram(elem)}, false);
    elem.style.height=`${values[i]}px`;
    elem.classList.add("addPading");
    elem.setAttribute("data-height",values[i]);
    i++;
  }
  i=0;

  for (let elem of diagram__columDeskr_h) {
    elem.innerText=students[i];
    i++;
    diagram__columDeskr.push(elem.textContent);

  }
}


function addRow(){
  let row=document.getElementById("row").cloneNode(true);
  row.setAttribute("class","row");
  row.setAttribute("id","");
  document.getElementById("Table").appendChild(row);
  addDiagram();
}

function addDiagram(){
  let col=document.getElementById("col_ex").cloneNode(true);
  col.setAttribute("id","");

  document.getElementById("diagram").appendChild(col);
}


function remove(elem) {

  //remove diagram
  let student = elem.parentNode.parentNode.querySelector('.row_student');
  let col_deskr = document.getElementById("diagram").querySelectorAll('.diagram__columDeskr');
    for(element of col_deskr){
      if( element.textContent===student.textContent){
        element.parentNode.remove();
      }
    }
  //remove  row
    let newElem=elem.parentNode.parentNode;//grandParentNode :)
    newElem.remove();
}

function mouseOnDiagram(elem) {
  let alt_text =document.createElement("p");
  alt_text.setAttribute("class","alt_text");
  elem.classList.remove("addPading");

  alt_text.innerText=elem.dataset.height;
  elem.parentNode.insertBefore(alt_text,elem.parentNode.firstChild);
}
function mouseOutDiagram(elem) {
  elem.parentNode.firstChild.remove();
  elem.classList.add("addPading");
}
