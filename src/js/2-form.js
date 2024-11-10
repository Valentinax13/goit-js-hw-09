const formBox = document.querySelector('.form-box'); 
const form = document.querySelector('.feedback-form');

const formData = { email: "", message: "" };
document.querySelector('.feedback-form').addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
 });

 const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
   const parsedData = JSON.parse(savedData);
   document.querySelector('input[name="email"]').value = parsedData.email;
   document.querySelector('textarea[name="message"]').value = parsedData.message;
}

document.querySelector('.feedback-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
       alert('Fill please all fields');
       return;
    }
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    event.target.reset();
 });
 document.body.style.display = 'flex'; 
 document.body.style.flexDirection = 'column'; 
 document.body.style.alignItems = 'center'; 
 document.body.style.justifyContent = 'center'; 
 document.body.style.height = '100vh'; 
 document.body.style.margin = '0';

 formBox.style.width = '408px'; 
 formBox.style.height = '296px'; 
 formBox.style.padding = '20px'; 
 formBox.style.backgroundColor = '#fff'; 
 formBox.style.borderRadius = '8px'; 
 formBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)'; 

 const labels = form.querySelectorAll('label'); 
 labels.forEach(label => { 
      label.style.display = 'block'; 
      label.style.marginBottom = '5px'; 
      label.style.fontWeight = '400'; 
      label.style.fontSize = '16px'; 
      label.style.lineHeight = '150%'; 
      label.style.letterSpacing = '0.04em'; 
      label.style.color = '#2e2f42'; 
      label.style.fontFamily = 'var(--font-family)';
}); 
const inputs = form.querySelectorAll('input, textarea'); inputs.forEach(input => {
    input.style.width = '100%'; 
    input.style.padding = '10px'; 
    input.style.marginBottom = '20px'; 
    input.style.border = '1px solid #ccc'; 
    input.style.borderRadius = '4px'; 
    input.style.boxSizing = 'border-box'; 
    input.addEventListener('mouseover', () => { 
      input.style.border = '1px solid #000'; 
      input.style.borderRadius = '4px'; 
      
   }); 
   input.addEventListener('mouseout', () => { 
      input.style.border = '1px solid #ccc'; 
      
   });
   }); 

   const textarea = form.querySelector('textarea'); 
   textarea.style.resize = 'none';
   
   const button = form.querySelector('button'); 
   button.style.width = '95px'; 
   button.style.height = '40px'; 
   button.style.backgroundColor = '#4e75ff'; 
   button.style.color = '#fff'; 
   button.style.border = 'none'; 
   button.style.borderRadius = '4px'; 
   button.style.cursor = 'pointer'; 
   button.style.fontSize = '16px'; 
   button.style.textAlign = 'center'; 
   button.style.display = 'flex'; 
   button.style.marginLeft = '0'; 
   button.style.lineHeight = '40px';  
   button.style.justifyContent = 'center';

   button.addEventListener('mouseover', () => { 
   button.style.backgroundColor = '#6c8cff'; 
}); 
button.addEventListener('mouseout', () => { 
   button.style.backgroundColor = '#4e75ff'; 
});
