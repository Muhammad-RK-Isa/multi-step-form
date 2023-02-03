const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);
const themeColor = rootStyles.getPropertyValue('--color-white');
const themeChanger = () => {
    root.style.setProperty('--color-white', 'black');
};
// themeChanger();
// console.log(themeColor);