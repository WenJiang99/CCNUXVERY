function getData(event){
    console.log(event)
    const formId = 'form'
    const form  = document.getElementById(formId)
    alert(form.elements[0].value + "" +form.elements[1].value)
    
}