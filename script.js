document.addEventListener("DOMContentLoaded",function(){
  const button=document.querySelector('.d222 button');
  button.addEventListener("click",function(){
    const nameInput=document.getElementById('Name');
    const nameValue=nameInput.value.trim();
    if(nameValue===''){
      nameInput.style.border='2px solid hsl(0,100%,74%)';
      nameInput.style.margin='0';
      const errorMessage=nameInput.parentNode.querySelector('div');
      if(!errorMessage){
        const errorMessage=document.createElement('div');
        errorMessage.textContent='First Name cannot be empty';
        errorMessage.style.color='hsl(0,100%,74%)';
        errorMessage.style.fontSize='12px';
        errorMessage.style.textAlign='right';
        errorMessage.style.fontStyle='italic';
        errorMessage.style.marginBottom='15px';
        nameInput.parentNode.appendChild(errorMessage);
      }
    }else{
      nameInput.style.border='';
      const errorIcon=nameInput.parentNode.querySelector('.error-icon');
      if(errorIcon)errorIcon.remove();
      const errorMessage=nameInput.parentNode.querySelector('div');
      if(errorMessage)errorMessage.remove();
    }
    const lastInput=document.getElementById('Last');
    const lastValue=lastInput.value.trim();
    if(lastValue===''){
        lastInput.style.border='2px solid hsl(0,100%,74%)';
        lastInput.style.margin='0';
        const errorMessage=lastInput.parentNode.querySelector('div');
        if(!errorMessage){
        const errorMessage=document.createElement('div');
        errorMessage.textContent='Last Name cannot be empty';
        errorMessage.style.color='hsl(0,100%,74%)';
        errorMessage.style.fontSize='12px';
        errorMessage.style.textAlign='right';
        errorMessage.style.fontStyle='italic';
        errorMessage.style.marginBottom='15px';
        lastInput.parentNode.appendChild(errorMessage);
      }
    }else{
      lastInput.style.border='';
      const errorIcon=lastInput.parentNode.querySelector('.error-icon');
      if(errorIcon)errorIcon.remove();
      const errorMessage=lastInput.parentNode.querySelector('div');
      if(errorMessage)errorMessage.remove();
    }
    const emailInput=document.getElementById('Email');
    const emailValue=emailInput.value.trim();
    function check(emailValue){
      const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;//checks for space between @ and also if there is a '@' and a '.'
      return !regex.test(emailValue);
    }
    if(emailValue===''||check(emailValue)){
      emailInput.style.border='2px solid hsl(0,100%,74%)';
      emailInput.style.margin='0';
      const errorMessage=emailInput.parentNode.querySelector('div');
      if(!errorMessage){
        const errorMessage=document.createElement('div');
        errorMessage.textContent='Looks like this is not an email';
        errorMessage.style.color='hsl(0,100%,74%)';
        errorMessage.style.fontSize='12px';
        errorMessage.style.textAlign='right';
        errorMessage.style.fontStyle='italic';
        errorMessage.style.marginBottom='15px';
        emailInput.parentNode.appendChild(errorMessage);
      }
    }else{
      emailInput.style.border='';
      const errorIcon=emailInput.parentNode.querySelector('.error-icon');
      if(errorIcon)errorIcon.remove();
      const errorMessage=emailInput.parentNode.querySelector('div');
      if(errorMessage)errorMessage.remove();
    }
    const passInput=document.getElementById('Password');
    const passValue=passInput.value.trim();
    if(passValue===''){
      passInput.style.border='2px solid hsl(0,100%,74%)';
      passInput.style.margin='0';
      const errorMessage=passInput.parentNode.querySelector('div');
      if(!errorMessage){
        const errorMessage=document.createElement('div');
        errorMessage.textContent='Password cannot be empty';
        errorMessage.style.color='hsl(0,100%,74%)';
        errorMessage.style.fontSize='12px';
        errorMessage.style.textAlign='right';
        errorMessage.style.fontStyle='italic';
        errorMessage.style.marginBottom='15px';
        passInput.parentNode.appendChild(errorMessage);
      }
    }else{
      passInput.style.border='';
      const errorIcon=passInput.parentNode.querySelector('.error-icon');
      if(errorIcon)errorIcon.remove();
      const errorMessage=passInput.parentNode.querySelector('div');
      if(errorMessage)errorMessage.remove();
    }
  });
});
