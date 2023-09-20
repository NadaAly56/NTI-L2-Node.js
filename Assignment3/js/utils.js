const generateBtn = (name='', classList = [''], attrList = [{key:'',value:''}]) => {
    const btn = document.createElement("Button");
    btn.innerHTML = name;
    
    if (classList[0] != '')
    classList = [1,2,3]
    btn.classList.add(...classList);

    if (attrList[0].key != '') {
        for (const attr of attrList) {
            btn.setAttribute(attr.key, attr.value);
          }
    }
    return btn; 
  };
  
const getSelectedValues = (array)=> {
    const selectedValues = [];
    // array.options.forEach((opt)=> {
    //   if (opt.selected) {
    //     selectedValues.push(opt.value);
    //   }
    // })
      for (let i = 0; i < array.options.length; i++) {
        if (array.options[i].selected) {
          selectedValues.push(array.options[i].value);
        }
      }
      return selectedValues
}

  export {
    generateBtn,
    getSelectedValues,
  }
 
  