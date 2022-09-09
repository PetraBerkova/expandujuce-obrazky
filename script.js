const slide = document.querySelectorAll('.slide');

slide.forEach(function(oneslide){
    oneslide.addEventListener('click',function(){
        deleteActive();
        oneslide.classList.add('active');
    })
})

function deleteActive(){
    slide.forEach(function (myslide){
        myslide.classList.remove('active')
    })
}