// var menu = document.querySelectorAll(".menu")[0];
// var items = document.querySelectorAll(".items")[0];


// menu.addEventListener("click",function(){
//     items.classList.toggle("open");
//     if (items.classList.contains("open")){
//         items.style.height = `${items.scrollHeight}px`;
//     }else{
//         items.style.height = "0px";
//     }
// });

// ----------------------------------------------------------------------------------------------end

const accordian = document.querySelectorAll(".accordian");

accordian.forEach((item,index)=>{
    let menu = item.querySelector(".menu");
    menu.addEventListener("click" , () => {
        item.classList.toggle("open");
        let mnuItems = item.querySelector(".items");
        if(item.classList.contains("open")){
            // console.log(mnuItems.scrollHeight , 'scroll')
            mnuItems.style.height = `${mnuItems.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus" , "fa-minus");
        }else{
            mnuItems.style.height = "0px" ;
            item.querySelector("i").classList.replace("fa-minus","fa-plus");
        }
        removeOpen(index);
        console.log(mnuItems);
        console.log(index , ' accordian click menu')
    });
});
3
    function removeOpen (index1){
        accordian.forEach((item2,index2) => {
            if(index1 != index2){
                item2.classList.remove("open");
                let mnuItems2 = item2.querySelector(".items");
                mnuItems2.style.height = "0px";
                item2.querySelector("i").classList.replace("fa-minus","fa-plus");
            }
        })
    }

