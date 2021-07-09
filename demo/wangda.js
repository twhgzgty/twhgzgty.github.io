function wangda() {
    /* 判断网址是否为wangda */
    const hostname = "wangda.chinamobile.com"
    if (document.location.hostname == hostname) {

        // 正式脚本开始

        // 创建信息弹窗
        let test = document.getElementById("test");
        // defined a popup for infor;
        if (test == null) {
            test = document.createElement("div");
            test.id = "test";
            test.style.position="fixed";
            test.style.top="30%";
            test.style.left="70%";
            test.style.width="300px";
            test.style.minHeight="60px";
            test.style.backgroundColor="pink";
            test.style.zIndex="9";
            test.innerHTML = "0033<br />";
            document.body.appendChild(test);
        } else { test.innerHTML = "3322<br />" }


        //变量
        let idx = ""; let str; let alls; let total = [];
        let target = ["继续学习","开始学习","重新学习", "未开始","学习中","已完成"];
        str = target[5];
        alls = document.body.querySelectorAll("*");
        title = document.title;
        course = document.body.querySelectorAll("dl")

        //函数

        //从课程列表中找可以学习课程
        function testGetCourse() {
            for (each of alls) {
                if ( each.innerText == str) {
                    total.push(each); }
                switch(each.innerText) {
                case target[0]: //继续学习
                    console.log(each.tagName,each.innerHTML);
                    alert(each)
                    break;
                case target[1]: //开始学习
                    console.log(each.tagName,each.innerHTML)
                    break;
                case target[2]: //重新学习
                    console.log(each.tagName,each.innerHTML);
                    break;
                /*
                case target[3]: //未开始
                    console.log(each.tagName,each.innerHTML);
                    break;
                case target[4]: //学习中
                    console.log(each.tagName,each.innerHTML);
                    break;
                case target[5]: //已完成
                    console.log(each.tagName,each.innerHTML);
                    break;
                */
                } 
            }
        }
        //======================================

        function fn() {
            for (i = 0, len = total.length ;  i < len ; i++) {
                test.innerHTML += "已找到" + i + " " + total[i].innerHTML + "<br>";
            }

        }
        
        //获取课程列表信息
        function testGetInfo() {
            const list = new Array;
            for (each of alls) { 
                if (/script|style|form|img|^h+/i.test(each.tagName)) {continue}; 
                if (each.className.includes("required")) {
                    list.push(each); 
                    //console.log(each);
                    test.innerHTML += each + "<br>";
                }
            //return list
        }

        }


        //输出信息
        test.innerHTML = title + "<br>" + course;
        
        testGetInfo()

        //alls[idx].focus();

        //document.activeElement.click();

        // 正式脚本结束


    } else {alert("当前网站不适用！"); return} 
}


window.onload = wangda();

#================================================
//检查提示窗口
let div = document.getElementById("test");
let i = 0;

//递归调用函数检查当前窗口是否被隐藏
function meter() {
    loop = setTimeout(function() {
    if (document.hidden) {
        div.innerHTML = "";
        console.log("窗口被隐藏" + i);
    } else {
        div.innerHTML += "现在在前台显示了<br>";
    }
    i++
    meter();
    },1000)
}

meter();

//延时结束
setTimeout(function(){
    clearTimeout(loop)
    div.innerHTML = "运行结束"
    console.log("脚本运行结束")
    },60000);

