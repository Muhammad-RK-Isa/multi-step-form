// ==========================================form control==============================================

const steps = document.getElementsByClassName('step');
const contentPersonalInfo = document.getElementsByClassName('personal-info')[0];
const contentPlans = document.getElementsByClassName('plans')[0];
const contentAddOns = document.getElementsByClassName('add-ons')[0];
const contentSummary = document.getElementsByClassName('summary')[0];
const contentFinalStage = document.getElementsByClassName('final-stage')[0];
const personalInfoNextBtn = document.getElementById('personal-info-next-btn');
const plansPreviousBtn = document.getElementById('plans-previous-btn');
const plansNextBtn = document.getElementById('plans-next-btn');
const addOnsPreviousBtn = document.getElementById('add-ons-previous-btn');
const addOnsNextBtn = document.getElementById('add-ons-next-btn');
const confirmPurchaseBtn = document.getElementById('confirm-purchase-btn');
const summaryPreviousBtn = document.getElementById('summary-previous-btn');
const summaryTotalPeriod = document.getElementById('summary__total-period');
const changePlan = document.getElementById('change-plan');

// Personal info navigation 
personalInfoNextBtn.addEventListener('click', () => {
    const personalInfoInputFields = document.getElementsByName('personal-info');
    const labelFlexGroup = document.getElementsByClassName('label-flex-group');
    const alertEmpty = document.getElementsByClassName('alert-empty');
    let input = [];

    for (let i = 0; i < personalInfoInputFields.length; i++) {
        const element = personalInfoInputFields[i];
        const empty = alertEmpty[i];
        switch (element.value == '') {
            case false:
                input.push(false);
                break;
            case true:
                input[i] = true;
                empty.style.display = 'block';
                element.style.border = 'solid 2px var(--color-danger)';
        };

        switch (input[0] && input[1] && input[2]) {
            case false:
                contentPersonalInfo.style.display = 'none';
                contentPlans.style.display = 'flex';
                steps[0].classList.toggle('active');
                steps[1].classList.toggle('active');
                break;
        };
    };
});


// Plans navigation
// Next 
plansNextBtn.addEventListener('click', () => {
    contentPlans.style.display = 'none';
    contentAddOns.style.display = 'flex';
    steps[1].classList.toggle('active');
    steps[2].classList.toggle('active');

    showSummaryProduct();
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
addOnsNextBtn.addEventListener('click', () => {
    contentAddOns.style.display = 'none';
    contentSummary.style.display = 'flex';
    steps[2].classList.toggle('active');
    steps[3].classList.toggle('active');
    setGrandTotal();
});

// Previous 
addOnsPreviousBtn.addEventListener('click', () => {
    contentAddOns.style.display = 'none';
    contentPlans.style.display = 'flex';
    steps[1].classList.toggle('active');
    steps[2].classList.toggle('active');
});

// Summary navigation 
confirmPurchaseBtn.addEventListener('click', () => {
    contentSummary.style.display = 'none';
    contentFinalStage.style.display = 'flex';
});

// Previous 
summaryPreviousBtn.addEventListener('click', () => {
    contentSummary.style.display = 'none';
    contentAddOns.style.display = 'flex';
    steps[2].classList.toggle('active');
    steps[3].classList.toggle('active');
});

// Change plan 
changePlan.addEventListener('click', () => {
    contentSummary.style.display = 'none';
    contentPlans.style.display = 'flex';
    steps[1].classList.toggle('active');
    steps[3].classList.toggle('active');
});

// Plan price tags
const planPricing1 = document.getElementsByClassName('plan__content')[0].querySelector('p');
const planPricing2 = document.getElementsByClassName('plan__content')[1].querySelector('p');
const planPricing3 = document.getElementsByClassName('plan__content')[2].querySelector('p');

// Plan input fields 
const planInputFields = document.getElementsByName('plan');

// Add-ons price tags
const addOns1 = document.getElementsByClassName('add-on__pricing')[0];
const addOns2 = document.getElementsByClassName('add-on__pricing')[1];
const addOns3 = document.getElementsByClassName('add-on__pricing')[2];

const addOnPrice1 = addOns1.querySelector('p');
const addOnPrice2 = addOns2.querySelector('p');
const addOnPrice3 = addOns3.querySelector('p');

const addOnInputFields = document.getElementsByName('add-on');

// Period selector yearly 
const periodSelectorYearly = () => {
    // Plans 
    planPricing1.innerText = "$90/yr";
    planPricing2.innerText = "$120/yr";
    planPricing3.innerText = "$150/yr";

    const planBoxes = document.getElementsByClassName('plan__content');

    for (let i = 0; i < planBoxes.length; i++) {
        const planBox = planBoxes[i];
        planBox.querySelector('h6').style.display = 'block';
    }

    // Add-ons 
    addOnPrice1.innerText = '$10/yr';
    addOnPrice2.innerText = '$20/yr';
    addOnPrice3.innerText = '$20/yr';
    summaryTotalPeriod.innerText = 'Total (per year)';

    planPriceChangerYearly();
};

// Period Selector monthly
const periodSelectorMonthly = () => {
    planPricing1.innerText = "$9/mo";
    planPricing2.innerText = "$12/mo";
    planPricing3.innerText = "$15/mo";

    const planBoxes = document.getElementsByClassName('plan__content');

    for (let i = 0; i < planBoxes.length; i++) {
        const planBox = planBoxes[i];
        planBox.querySelector('h6').style.display = 'none';
    };

    // Add-ons
    addOnPrice1.innerText = '$1/mo';
    addOnPrice2.innerText = '$2/mo';
    addOnPrice3.innerText = '$2/mo';
    summaryTotalPeriod.innerText = 'Total (per month)';

    planPriceChangerMonthly();
};


// Add-ons 
const addOnsItems = document.querySelectorAll('.add-on__item');

// Checked add-on styling 
for (let i = 0; i < addOnsItems.length; i++) {
    const addOnItem = addOnsItems[i];
    const input = addOnItem.querySelector('input');
    const addOn = addOnItem.querySelector('.add-on');
    const checkBox = addOn.querySelector('.check-box');
    addOnItem.addEventListener('click', () => {
        if (input.checked) {
            checkBox.style.backgroundColor = 'var(--color-secondary)';
        }
        else {
            checkBox.style.backgroundColor = 'transparent';
        }
    });
};

const planPriceChangerMonthly = () => {
    for (let i = 0; i < planInputFields.length; i++) {
        const planInput = planInputFields[i];

        if (planInput.value > 20) {
            planInput.value = parseInt(planInput.value) / 10;
        };
    };

    for (let i = 0; i < addOnInputFields.length; i++) {
        const addOnInput = addOnInputFields[i];

        if (addOnInput.value > 5) {
            addOnInput.value = parseInt(addOnInput.value) / 10;
        };
    };
};

const planPriceChangerYearly = () => {
    for (let i = 0; i < planInputFields.length; i++) {
        const planInput = planInputFields[i];

        if (planInput.value < 20) {
            planInput.value = parseInt(planInput.value) * 10;
        };
    };

    for (let i = 0; i < addOnInputFields.length; i++) {
        const addOnInput = addOnInputFields[i];

        if (addOnInput.value < 5) {
            addOnInput.value = parseInt(addOnInput.value) * 10;
        };
    };
};

let grandTotal = 0;


const setGrandTotal = () => {
    for (let i = 0; i < planInputFields.length; i++) {
        const planInput = planInputFields[i];
        let checkedInput;
        if (planInput.checked) {
            checkedInput = planInput;
            grandTotal = parseInt(checkedInput.value);
        };
    };
    setAddOnsValue();

    // Show grand total in summary 
    const grandTotalTag = document.getElementById('grand-total');
    if (grandTotal <= 20) {
        grandTotalTag.innerText = `$${grandTotal}/mo`
    } else {
        grandTotalTag.innerText = `$${grandTotal}/yr`
    };
};

const productAddOn1 = document.getElementsByClassName('summary__product')[1];
const productAddOn2 = document.getElementsByClassName('summary__product')[2];
const productAddOn3 = document.getElementsByClassName('summary__product')[3];

const setAddOnsValue = () => {
    for (let i = 0; i < addOnInputFields.length; i++) {
        let addOnValue = 0;
        const addOnInput = addOnInputFields[i];
        const addOnInputIsChecked = addOnInput.checked;

        switch (addOnInputIsChecked) {
            case true:
                addOnValue = 0;
                addOnValue += parseInt(addOnInput.value);
                // console.log('checked');
                // show add-ons pricing in summary 
                switch (addOnInput.id) {
                    case 'online-service':
                        productAddOn1.style.display = 'flex';
                        if (addOnInput.value <= 2) {
                            productAddOn1.querySelector('.add-on-price').innerText = `$${addOnInput.value}/mo`;
                        } else {
                            productAddOn1.querySelector('.add-on-price').innerText = `$${addOnInput.value}/yr`;
                        };
                        break;
                    case 'larger-storage':
                        productAddOn2.style.display = 'flex';
                        if (addOnInput.value <= 2) {
                            productAddOn2.querySelector('.add-on-price').innerText = `$${addOnInput.value}/mo`;
                        } else {
                            productAddOn2.querySelector('.add-on-price').innerText = `$${addOnInput.value}/yr`;
                        };
                        break;
                    case 'customizable-profile':
                        productAddOn3.style.display = 'flex';
                        if (addOnInput.value <= 2) {
                            productAddOn3.querySelector('.add-on-price').innerText = `$${addOnInput.value}/mo`;
                        } else {
                            productAddOn3.querySelector('.add-on-price').innerText = `$${addOnInput.value}/yr`;
                        };
                        break;
                };
                break;
            case false:
                switch (addOnInput.id) {
                    case 'online-service':
                        productAddOn1.style.display = 'none';
                        break;
                    case 'larger-storage':
                        productAddOn2.style.display = 'none';
                        break;
                    case 'customizable-profile':
                        productAddOn3.style.display = 'none';
                        break;
                };
                break;
        };
        grandTotal += addOnValue;
    };
};

const showSummaryProduct = () => {
    const productPlanTitle = document.getElementsByClassName('summary__product')[0].querySelector('.product-plan__title');
    const productPlan = document.getElementsByClassName('summary__product')[0];
    const productPlanPricing = document.getElementsByClassName('product-plan__pricing')[0];
    productPlan.style.display = 'flex';
    for (let i = 0; i < planInputFields.length; i++) {
        const planInput = planInputFields[i];
        if (planInput.checked) {
            const checkedInput = planInput.id;
            console.log(checkedInput);
            if (planInput.value < 20) {
                productPlanTitle.innerText = `${checkedInput} (monthly)`;
                productPlanPricing.innerText = `$${planInput.value}/mo`
            }
            else {
                productPlanTitle.innerText = `${checkedInput} (yearly)`;
                productPlanPricing.innerText = `$${planInput.value}/yr`
            }
        };
    };
};