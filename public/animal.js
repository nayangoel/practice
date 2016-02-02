'use strict';
var filt={};
var ulobj;
var f1= document.getElementById("f1");
var f2= document.getElementById("f2");
var f3= document.getElementById("f3");
var flag1=1;
var flag2=1;
var flag3=1;
var flag7=0;
var obj2= document.createElement("div");
var cookobj={};
var obj1= document.getElementById("div1");
var ar;
var xhr= new XMLHttpRequest();
var url= "http://localhost:4000/animal.json";
var typobj={};
    xhr.onreadystatechange= function(){
            if(xhr.readyState===4){
                ar= JSON.parse(xhr.responseText);
                if(document.cookie===""){
                    var names= "value="+JSON.stringify(ar);
                    console.log(names);
                    document.cookie=names;
                    dis(ar);
                }
            }
        }

    xhr.open("GET",url,true);
    xhr.send();
    var n;
    var fn1,fn2;
    if(document.cookie!==""){
        n=document.cookie;
        //console.log(m);
        var m=n.split(";");
        if(m.length===2){
        var st1= m[0].toString();
        var arr1= st1.split("=");
        var st2= m[1].toString();
        var arr2= st2.split("=");
        console.log("arr1:"+ arr1+", arr2: "+arr2);
        var fn1,fn2;
        if(arr1[0]==="value"){
        fn1=arr2[1].toString();
        fn2=arr1[1].toString();
        var pi= JSON.parse(fn2);
        dis(pi);
        if(fn1==="dog"){
            document.cookie='type=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
            dog();

        }
        else if(fn1==="cat"){
            document.cookie='type=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
            cat();

        }
        else if(fn1==="horse"){
            document.cookie='type=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
            horse();

        }
}
else{
    fn1=arr1[1].toString();
    fn2=arr2[1].toString();
    var pi= JSON.parse(fn2);
    dis(pi);
    if(fn1==="dog"){
        document.cookie='type=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
        dog();

    }
    else if(fn1==="cat"){
        document.cookie='type=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
        cat();

    }
    else if(fn1==="horse"){
        document.cookie='type=; expires=Thu, 18 Dec 2013 12:00:00 UTC';

        horse();

    }
}
        }

        else{
            console.log("not 2");
            var st1= n.split("=");
            var fn1= st1[1].toString();
            var fn2=st1[0].toString();
            var nobj=JSON.parse(fn1);
            dis(nobj);
            }

        }

    function dis(ar1){
     ulobj= document.createElement("ul");
     obj1.appendChild(ulobj);
    var sel=[];
     var size=ar1.animals.length;

    for(var i=0;i<size;i++){
        var liobj= document.createElement("li");
        sel[i]=new Object();
         sel[i]=document.createElement("p");
         sel[i].value=ar1.animals[i].type;
        sel[i].innerHTML+= "name: " + ar1.animals[i].name + " type: " + ar1.animals[i].type + "    ";
        sel[i].onclick= function(){
            if(flag7===0){
                flag7=1;
            }
            else{
            cl1();
        }
            if(this.value==="dog"){

                dog();
            }
            else if(this.value==="cat"){

                cat();
            }
            else if(this.value==="horse"){
                
                horse();
            }
        }
            liobj.appendChild(sel[i]);
            ulobj.appendChild(liobj);
        }

    }


f1.onclick = function(){
        if(flag1==1){
                flag1=0;
                flag2=1;
                flag3=1;
            this.style.color="red";
            // f2.style.color="black";
            // f3.style.color="black";
document.cookie='value=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
            textfilter(f1);
        }
        else{
            flag1=1;
            this.style.color="black";
            obj1.removeChild(obj1.children[0]);
            dis(ar);
        }
            };

f2.onclick = function(){
        if(flag2==1){
                flag2=0;
                flag1=1;
                flag3=1;
            this.style.color="red";
            // f1.style.color="black";
            // f3.style.color="black";
document.cookie='value=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
            textfilter(f2);
        }
        else{
            flag2=1;
            this.style.color="black";
            obj1.removeChild(obj1.children[0]);
            dis(ar);
        }
    };

f3.onclick = function(){
        if(flag3==1){
            flag3=0;
            flag2=1;
            flag1=1;
            this.style.color="red";
            // f2.style.color="black";
            //f1.style.color="black";
document.cookie='value=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
            textfilter(f3);
        }
        else{
            flag3=1;
            this.style.color="black";
            obj1.removeChild(obj1.children[0]);
            dis(ar);
        }
};



function textfilter(obj){
        filt.animals=[];
        obj1.removeChild(obj1.children[0]);
        var ulobj= document.createElement("ul");
        obj1.appendChild(ulobj);
        var sel=[];
        for(var i=0; i< ar.animals.length;i++)
        {
            if(ar.animals[i].type===obj.value)
            {
                var name= ar.animals[i].name;
                var type=ar.animals[i].type;
                var newobj={};
                newobj.name=name;
                newobj.type=type;
                filt.animals.push(newobj);
                var liobj= document.createElement("li");
                sel[i]= new Object();
                sel[i]=document.createElement("p");
                sel[i].value=type;

                sel[i].onclick= function(){
                    if(flag7===0){
                        flag7=1;
                    }
                    else{
                    cl1();
                }
                    if(this.value==="dog"){
                        dog();
                    }
                    else if(this.value==="cat"){
                        cat();
                    }
                    else if(this.value==="horse"){
                        horse();
                    }
                }
               sel[i].innerHTML+= "name: " + name + " type: " + type + "    ";
                   liobj.appendChild(sel[i]);
                   ulobj.appendChild(liobj);
            }
        }

        var n="value="
        n+= JSON.stringify(filt);
        document.cookie=n;
}

function cl(){
obj2.style.position="fixed";
obj2.style.right="100px";
obj2.style.top="100px";
document.body.appendChild(obj2);
}

function cl1(){
    console.log(obj2.children);
    obj2.removeChild(obj2.children[0]);
    obj2.removeChild(obj2.children[0]);
    obj2.removeChild(obj2.children[0]);
}

function dog(){

    cl();
    var bt1= document.createElement("p");
    var bt2= document.createElement("p");
    var bt3= document.createElement("p");
    bt1.innerHTML="says";
    bt2.innerHTML="fetches";
    bt3.innerHTML="plays";
    bt1.onclick= function(){
        alert("barks");
    }
    bt2.onclick= function(){
        alert("fetches the ball");
    }
    bt3.onclick= function(){
        alert("plays football");
    }
obj2.appendChild(bt1);
obj2.appendChild(bt2);
obj2.appendChild(bt3);
document.cookie="type=dog";


}
function horse(){

    cl();
    var bt1= document.createElement("p");
    var bt2= document.createElement("p");
    var bt3= document.createElement("p");
    bt1.innerHTML="says";
    bt2.innerHTML="runs";
    bt3.innerHTML="plays";
    bt1.onclick= function(){
        alert("neighs");
    }
    bt2.onclick= function(){
        alert("runs races");
    }
    bt3.onclick= function(){
        alert("plays polo");
    }
obj2.appendChild(bt1);
obj2.appendChild(bt2);
obj2.appendChild(bt3);
document.cookie="type=horse";

}

function cat(){

    cl();
    var bt1= document.createElement("p");
    var bt2= document.createElement("p");
    var bt3= document.createElement("p");
    bt1.innerHTML="says";
    bt2.innerHTML="purrs";
    bt3.innerHTML="plays";
    bt1.onclick= function(){
        alert("meow");
    }
    bt2.onclick= function(){
        alert("purrrrrr");
    }
    bt3.onclick= function(){
        alert("plays with wool");
    }
obj2.appendChild(bt1);
obj2.appendChild(bt2);
obj2.appendChild(bt3);
document.cookie="type=cat";

}
