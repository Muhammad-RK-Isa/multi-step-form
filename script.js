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

plansPreviousBtn.addEventListener('click', () => {
    contentPlan.style.display = 'none';
    contentPersonalInfo.style.display = 'flex';
    steps[1].classList.toggle('active');
    steps[0].classList.toggle('active');
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

