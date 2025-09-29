// //console.log("HELLO WORLD");
// var a = 10;
// if(a>10){
//     let a = 50;
//     console.log("a inside value ="+a);
// }
// else{
//     console.log("Inside else Statement")+
// }
// console.log("a outside value:"+a);

// const data=(msg)=>{
//     return"hello " +msg;
// }
// console.log(data("Good Morning"));

// (()=>{
//     console.log("Helooo...Hii!!!... ")
// })(

// setTimeout(()=>(console.log("HeLLO")),1000)

// setInterval(()=>(console.log("heyyy...")),);


// function greetingd(msg="Hii") {
//     console.log("Hello "+msg);
// }
// greetingd('Welcome to Abes');

function selectLanguage(lang) {
    let data;
    if (lang == 'java') {
        function javaCompiler() {
            return "Java compiler is calling";
        }
        data = javaCompiler();
    }
        elseif(lang == 'c');{
            function Ccompiler() {
                return "Hey C compiler is calling";
            }
            data = Ccompiler();
        }

    else{
        data = "No Compiler available";
    }
            
        

        return data;
    }
