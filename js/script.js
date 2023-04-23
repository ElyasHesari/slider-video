const images = document.querySelectorAll('img');
const li = document.querySelector('li');
const source = document.querySelector('#slider');
for (let index = 0; index < images.length; index++) {
    images[index].addEventListener('click', ()=>{
        source.src = `video/${index+1}.mp4`
    })
    
}
