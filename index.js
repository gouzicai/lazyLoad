
//获取图片地址img[i].dataset.src
// window.getBoundingClientRect()可以获得元素的宽高和离html顶部，底部，左边框，有边框的距离
function imgonload(){
    let img = document.querySelectorAll('img');
    for(let i = 0; i < img.length;i++){
        if(img[i].getBoundingClientRect().top < window.innerHeight){
            // console.log(img[i].getBoundingClientRect().top)
            // console.log(img[i].dataset.src);
            img[i].src=img[i].dataset.src;
        }
        
    }
    // console.log(img);
}


function scollImg(){
    let timer = null;
    let _this = this;
    let args = arguments;
    return function(){
        // fn.apply(_this);
        clearTimeout(timer);
        timer = setTimeout(()=>{
            this.imgonload.apply(_this,args);
        },500)
    }
}
