const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")

const center = document.querySelector(".center")
const getBGcolor = (slectedElement) => {
  return window.getComputedStyle(slectedElement).backgroundColor;
};
//this is for simple event!
/*let color = getBGcolor(pink)
pink.addEventListener('dblclick',() =>{
  center.style.background = color;
})*/

const colorChanger = (element,color) =>{
   return element.addEventListener('mouseenter',()=>{
    center.style.background = color;
  })
}
colorChanger(red, getBGcolor(red));
colorChanger(cyan, getBGcolor(cyan));
colorChanger(pink, getBGcolor(pink));
colorChanger(orange, getBGcolor(orange));
colorChanger(violet, getBGcolor(violet));






