let taskCards = document.querySelectorAll('.buttonLink');
// Getting all Category Cards
console.log('Hello');
for(let itr of taskCards){
    console.log(itr);
    let currText = itr.innerText;
    if(currText=='Social'){
       itr.classList.add('yellBCol');
    }
    if(currText=='Work'){
      itr.classList.add('aquaCol');
    }
}