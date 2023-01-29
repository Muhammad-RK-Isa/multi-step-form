// ==========================================form control==============================================

const steps = document.getElementsByClassName('step');
const contentPersonalInfo = document.getElementsByClassName('personal-info')[0];
const contentPlan = document.getElementsByClassName('plans')[0];
const contentAddOns = document.getElementsByClassName('add-ons')[0];
const contentSummary = document.getElementsByClassName('summary')[0];
const personalInfoNextBtn = document.getElementById('personal-info-next-btn');
const plansPreviousBtn = document.getElementById('plans-previous-btn')


personalInfoNextBtn.addEventListener('click', () => {
    contentPersonalInfo.style.display = 'none';
    contentPlan.style.display = 'flex';
    steps[0].classList.toggle('active');
    steps[1].classList.toggle('active');
});

plansPreviousBtn.addEventListener('click', () =>{
    contentPlan.style.display = 'none';
    contentPersonalInfo.style.display = 'flex';
    steps[1].classList.toggle('active');
    steps[0].classList.toggle('active');
});
