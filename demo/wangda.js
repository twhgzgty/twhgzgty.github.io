//检查是否已经有提示窗口，没有则新建
    function init() {
        let test = document.getElementById("test");

        if (test == null) {
            test = document.createElement("div");
            ;
        }
//设置提示窗口样式属性等
        test.id = "test";
        test.style.position="fixed";
        test.style.top="30%";
        test.style.left="70%";
        test.style.width="300px";
        test.style.minHeight="50px";
        test.style.backgroundColor="pink";
        test.style.zIndex="9";
        test.innerHTML = "0033<br />";
        document.body.appendChild(test);

//初始化变量，设置搜索关键字
        let idx = ""; let str; let alls; let total = [];
        //let target = ["开始学习","重新学习"]
        str = "重新学习";

//根据关键字在页面中获取元素
        alls = document.querySelectorAll("div")

//循环查找所需对象
        for (let each in alls) {
            if (alls[each].innerHTML == str) {
                //idx = each;
                total.push(each);
                //break;
            } else {
                idx = "";
            }
        }

//遍历已找到项
        for (let i = 0; i < total.length;i++) {
            test.innerHTML += "已找到" + total[i] + "<br>";
        }
    }

    setTimeout(()=> {
        init()
    },1000)

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

