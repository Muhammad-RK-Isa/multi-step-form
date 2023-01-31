// ==========================================form control==============================================

const steps = document.getElementsByClassName('step');
const contentPersonalInfo = document.getElementsByClassName('personal-info')[0];
const contentPlans = document.getElementsByClassName('plans')[0];
const contentAddOns = document.getElementsByClassName('add-ons')[0];
const contentSummary = document.getElementsByClassName('summary')[0];
const personalInfoNextBtn = document.getElementById('personal-info-next-btn');
const plansPreviousBtn = document.getElementById('plans-previous-btn');
const plansNextBtn = document.getElementById('plans-next-btn');
const addOnsPreviousBtn = document.getElementById('add-ons-previous-btn');


// Personal info navigation 
personalInfoNextBtn.addEventListener('click', () => {
    contentPersonalInfo.style.display = 'none';
    contentPlans.style.display = 'flex';
    steps[0].classList.toggle('active');
    steps[1].classList.toggle('active');
});


// Plans navigation
// Next 
plansNextBtn.addEventListener('click', () => {
    contentPlans.style.display = 'none';
    contentAddOns.style.display = 'flex';
    steps[1].classList.toggle('active');
    steps[2].classList.toggle('active');
});

// Previous 
plansPreviousBtn.addEventListener('click', () => {
    contentPlans.style.display = 'none';
    contentPersonalInfo.style.display = 'flex';
    steps[1].classList.toggle('active');
    steps[0].classList.toggle('active');
});

// Add-ons navigation 
// Next 

// Previous 
addOnsPreviousBtn.addEventListener('click', () => {
    contentAddOns.style.display = 'none';
    contentPlans.style.display = 'flex';
    steps[1].classList.toggle('active');
    steps[2].classList.toggle('active');
});


// Plans container
const periodSelectorYearly = () => {
    const planBox1 = document.getElementsByClassName('plan-name-flex-box')[0];
    const planBox2 = document.getElementsByClassName('plan-name-flex-box')[1];
    const planBox3 = document.getElementsByClassName('plan-name-flex-box')[2];

    planBox1.querySelector('p').innerText = "$90/yr";
    planBox2.querySelector('p').innerText = "$120/yr";
    planBox3.querySelector('p').innerText = "$150/yr";

    const planBoxes = document.getElementsByClassName('plan-name-flex-box');

    for (let i = 0; i < planBoxes.length; i++) {
        const planBox = planBoxes[i];
        planBox.querySelector('h6').style.display = 'block';
    }
};

// Period Selector 
const periodSelectorMonthly = () => {
    const planBox1 = document.getElementsByClassName('plan-name-flex-box')[0];
    const planBox2 = document.getElementsByClassName('plan-name-flex-box')[1];
    const planBox3 = document.getElementsByClassName('plan-name-flex-box')[2];

    planBox1.querySelector('p').innerText = "$9/mo";
    planBox2.querySelector('p').innerText = "$12/mo";
    planBox3.querySelector('p').innerText = "$15/mo";

    const planBoxes = document.getElementsByClassName('plan-name-flex-box');

    for (let i = 0; i < planBoxes.length; i++) {
        const planBox = planBoxes[i];
        planBox.querySelector('h6').style.display = 'none';
    };
};

// Add-on 

const addOnsItems = document.querySelectorAll('.add-on__item');

for (let i = 0; i < addOnsItems.length; i++) {
    const addOnItem = addOnsItems[i];
    const input = addOnItem.querySelector('input');
    const addOn = addOnItem.querySelector('.add-on');
    const checkBox = addOn.querySelector('.check-box');
    addOnItem.addEventListener('click', () => {
        if (input.checked) {
            checkBox.style.backgroundColor = 'var(--color-secondary)';
        }
        else{
            checkBox.style.backgroundColor = 'transparent';
        }
    });
};
