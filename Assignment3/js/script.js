import { deleteEmployee, editEmployee, sendDowen, sendUp } from './actions.js';
import  { generateBtn, getSelectedValues } from './utils.js';

const tBody = document.getElementById("tBody");
const name = document.getElementById("name");
const dOfBirth = document.getElementById("dOfBirth");
const skills = document.getElementById("skills");
const deleteBtn = document.getElementById("deleteBtn");
const addBtn = document.getElementById("addBtn");
const editBtn = document.getElementById("editBtn");
const emptyMsg = document.getElementById("emptyMsg");
let empArray = [];

// Get past employess
window.onload = () => {
  empArray = localStorage.getItem("empArr")
    ? JSON.parse(localStorage.getItem("empArr"))
    : [];
    showEmployees()
};

// Add new employees to tha past
const addEmployee = () => {
    const emp = {id: 0, name: "", dOfBirth: "", skills:"",};
      const selectedValues = getSelectedValues(skills)
      if (name.value && dOfBirth.value) {
        empArray.push({
          ...emp,
          name: name.value,
          dOfBirth: dOfBirth.value,
          skills: selectedValues.toString(),
          id: empArray.length + 1,
        });
        localStorage.setItem("empArr", JSON.stringify(empArray));
        addBtn.setAttribute("data-bs-dismiss","modal")
      }
      else {
        alert("Please fill all data")
      }
  showEmployees()
};
addBtn.addEventListener('click', ()=> {
  addEmployee()
})

// Show function
 const showEmployees = ()=> {
    tBody.innerText = ''
    emptyMsg.hidden = empArray.length <= 0?false:true
    let employeesArr = JSON.parse(localStorage.getItem('empArr'))
    employeesArr.forEach((element, index, arr) => {

        // Creating HTML
        const tr = document.createElement("tr")
        let td = []
        for (let i = 1; i < 6; i++) {
            td[i] = document.createElement("td")
            tr.appendChild(td[i])
        }
        td[1].innerText = index+1
        td[2].innerHTML = element.name
        td[3].innerHTML = element.dOfBirth
        td[4].innerHTML = element.skills

        // Actionns
        const edBtn = generateBtn('<i class="fa-solid fa-pen-to-square"></i>', ["btn" , "text-success", "mx-2", "fs-5"], [{key:"data-bs-target", value: "#editModal"},{key:"data-bs-toggle", value: "modal"}])
        edBtn.addEventListener('click', ()=>editEmployee(index, element, editBtn, empArray, showEmployees))

        const delBtn = generateBtn('<i class="fa-solid fa-trash"></i>', ['btn', 'text-danger', "fs-5"], [{key:"data-bs-target", value: "#deleteModal"},{key:"data-bs-toggle", value: "modal"}])
        delBtn.addEventListener('click', ()=> {
          deleteEmployee(index, deleteBtn, empArray, showEmployees)
          
        })
        
        const upBtn = generateBtn('<i class="fa-solid fa-up-long"></i>', ["btn" , "text-secondary", "me-2", "fs-5"])
        upBtn.disabled = index == 0?true:
        upBtn.addEventListener('click', ()=>sendUp(index, empArray, showEmployees))
        
        const downBtn = generateBtn('<i class="fa-solid fa-down-long"></i>', ["btn" , "text-secondary", "fs-5"])
        downBtn.disabled = index == empArray.length-1?true:
        downBtn.addEventListener('click', ()=>sendDowen(index, empArray, showEmployees))

        // Appending Actions
        td[5].appendChild(upBtn)
        td[5].appendChild(downBtn)
        td[5].appendChild(edBtn)
        td[5].appendChild(delBtn)
        tBody.appendChild(tr)
    
    }); 
       
    
}


