var flag7=0;
var f1=0;
var cookobj={};
var obj1= document.getElementById("div1");
var ar;
var xhr= new XMLHttpRequest();
var url= "http://localhost:4000/animal.json";

    xhr.onreadystatechange= function(){
            if(xhr.readyState===4){
                ar= JSON.parse(xhr.responseText);
                if(document.cookie===""){
                    dis(ar);
                }
            }
        }

    xhr.open("GET",url,true);
    xhr.send();
    if(document.cookie!==""){
        var n= document.cookie;
        var m = n.split("=");
        m.shift();
        m.toString();
        var pi= JSON.parse(m);
        dis(pi);
        }

    var ulobj;
    function dis(ar1){
     ulobj= document.createElement("ul");
     obj1.appendChild(ulobj);
    var sel=[];
     var size=ar1.animals.length;

    for(var i=0;i<size;i++){
        var liobj= document.createElement("li");
        sel[i]=new Object();
         sel[i]=document.createElement("BUTTON");
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
                f1=1;
                dog();
            }
            else if(this.value==="cat"){
                f1=2;
                cat();
            }
            else if(this.value==="horse"){
                f1=3;
                horse();
            }
        }
            liobj.appendChild(sel[i]);
            ulobj.appendChild(liobj);
        }

    }

var f1= document.getElementById("f1");
var f2= document.getElementById("f2");
var f3= document.getElementById("f3");
var flag1=1;
var flag2=1;
var flag3=1;

f1.onclick = function(){
        if(flag1==1){
                flag1=0;
            f1.style.color="red";
            textfilter(f1);
        }
        else{
            flag1=1;
            f1.style.color="black";
            obj1.removeChild(obj1.children[0]);
            document.cookie='value=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
            dis(ar);
        }
            };

f2.onclick = function(){
        if(flag2==1){
                flag2=0;
            f2.style.color="red";
            textfilter(f2);
        }
        else{
            flag2=1;
            f2.style.color="black";
            obj1.removeChild(obj1.children[0]);
            document.cookie='value=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
            dis(ar);
        }
    };

f3.onclick = function(){
        if(flag3==1){
            flag3=0;
            f3.style.color="red";
            textfilter(f3);
        }
        else{
            flag3=1;
            f3.style.color="black";
            obj1.removeChild(obj1.children[0]);
            document.cookie='value=; expires=Thu, 18 Dec 2013 12:00:00 UTC';
            dis(ar);
        }
};

var filt={};

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
                sel[i]=document.createElement("BUTTON");
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
var obj2= document.createElement("div");
function cl(){
obj2.style.position="fixed";
obj2.style.right="100px";
obj2.style.top="100px";
document.body.appendChild(obj2);
}

function cl1(){
    obj2.removeChild(obj2.children[0]);
    obj2.removeChild(obj2.children[0]);
    obj2.removeChild(obj2.children[0]);
}

function dog(){
    cl();
    var bt1= document.createElement("BUTTON");
    var bt2= document.createElement("BUTTON");
    var bt3= document.createElement("BUTTON");
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
}
function horse(){
    cl();
    var bt1= document.createElement("BUTTON");
    var bt2= document.createElement("BUTTON");
    var bt3= document.createElement("BUTTON");
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

}

function cat(){
    cl();
    var bt1= document.createElement("BUTTON");
    var bt2= document.createElement("BUTTON");
    var bt3= document.createElement("BUTTON");
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

}
