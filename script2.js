
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

    elem.style.height=`${values[i]}px`;

    i++;
  }
  i=0;


  for (let elem of diagram__columDeskr_h) {
    elem.innerText=students[i];
    i++;
    diagram__columDeskr.push(elem.textContent);
    /////////
  }

console.log(students);
console.log(values);

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
  //remove  row
    let newElem=elem.parentNode.parentNode;//grandParentNode :)
    while (newElem.firstChild) {
    newElem.removeChild(newElem.firstChild);
  }
  //remove diagram
  let col_desk = document.getElementById("Table").querySelectorAll('.diagram__columDeskr');

  removeDiagram();
}

function removeDiagram() {

}
