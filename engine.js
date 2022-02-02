const wallet=document.querySelector('.wallet');
const color=document.querySelector('.color');
const nums=['0','1','2','3','4','5','6','7','8','A','B','C','D','E','F'];

for(let i=0;i<6;i++){
    let value=nums[Math.floor(Math.random()*nums.length)]
    color.innerHTML+=value;
}
document.body.style.backgroundColor=`#${color.innerHTML}`;