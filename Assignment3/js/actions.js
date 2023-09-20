import { getSelectedValues } from "./utils.js";

 const editEmployee = (index, element, btn, array,fun) => {
    const newName = document.getElementById("newName");
    const newDate = document.getElementById("newDate");
    const newSkills = document.getElementById("newSkills");
    newName.value = element.name

    btn.addEventListener('click', ()=>{
     const selectedValues = getSelectedValues(newSkills)
     let emp = array[index]
     emp.name = newName.value
     emp.dOfBirth = newDate.value
     emp.skills = selectedValues.toString()
     localStorage.setItem("empArr", JSON.stringify(array));
    fun()
    })
}

const deleteEmployee = (index, btn, array, fun)=> {
    btn.addEventListener('click', ()=>{
        array.splice(index,1)
        localStorage.setItem("empArr", JSON.stringify(array));
        fun()
    })
    
}

const sendUp =(index, array,fun)=> {
    const temp = array[index-1]
    array[index-1] = array[index]
    array[index] = temp
    localStorage.setItem("empArr", JSON.stringify(array));
    fun()
}

const sendDowen =(index, array,fun)=> {
    const temp = array[index+1]
    array[index+1] = array[index]
    array[index] = temp
    localStorage.setItem("empArr", JSON.stringify(array));
    fun()
}
// export default editEmployee
export {
    editEmployee,
    deleteEmployee,
    sendUp,
    sendDowen,
}