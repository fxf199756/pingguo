$(function () {
    //下拉菜单
    let menu=$("header a:first");
    let pushs=$(".push");
    let blurs=$(".blur");
    let search=$(".texti>input");
    let cancel=$(".cancel");
    let head=$("header");
    let focuss=$(".focus");
    let flag=0;
    console.log(blurs);
    console.log(menu);
    menu.click(function () {
       if (flag==0){
           menu.attr("class","iconfont icon-x");
           pushs.slideDown();
           blurs.css("display","block");
           flag=1;
           return;
       }
       if (flag==1){
           menu.attr("class","iconfont icon-menu");
           pushs.slideUp();
           blurs.css("display","none");
           flag=0;
           return;
       }
    })
    search.focus(function () {
        this.style.width="528px";
        blurs.css("display","none");
        focuss.css("display","block");
        head.css("display","none");
        cancel.css("display","block");
        pushs.css("top","0");
    })
    cancel.click(function () {
        this.style.display="none";
        search.css("width","585px")
        blurs.css("display","block");
        focuss.css("display","none");
        head.css("display","flex");
        cancel.css("display","none");
        pushs.css("top","44px");
    })
    //底部下拉
    let text_list=$(".text_list");
    let adds=$("footer .add ol li a i");
    let x=(".icon-x")
    console.log(adds);
    let flags=[0,0,0,0,0,0,0];
    adds.each(function (i) {
        $(this).click(function () {
            console.log(i);
            if (flags[i]==0){
                text_list.eq(i).slideDown();
                adds.eq(i).attr("class","iconfont icon-x");
                console.log(adds.eq(i));
                flags[i]=1;
                return;
            }
            if (flags[i]==1){
                text_list.eq(i).slideUp();
                adds.eq(i).attr("class","iconfont icon-jiahao");
                flags[i]=0;
                return;
            }

        })
    })
})
