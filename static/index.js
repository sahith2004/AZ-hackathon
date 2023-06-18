let element = document.getElementsByClassName('platform-name')
let getcodeforces = document.getElementsByClassName('div-codeforces')
let getleetcode = document.getElementsByClassName('div-leetcode')
let getspoj = document.getElementsByClassName('div-spoj')
let iscodeforces = false
let isleetcode = false
let isspoj = false
for(let i=0;i<element.length;i++){
          element[i].addEventListener('click',function(){
          if(element[i].style.color != "green"){
            element[i].style.color = "green"
            if(element[i].innerText == 'Codeforces'){
              iscodeforces = true
            }
            if(element[i].innerText == 'Leet Code'){
              isleetcode = true
            }
            if(element[i].innerText == 'Spoj'){
              isspoj = true
            }
          }
          else{
            element[i].style.color = "crimson"
            if(element[i].innerText == 'Codeforces'){
              iscodeforces = false
            }
            if(element[i].innerText == 'Leet Code'){
              isleetcode = false
            }
            if(element[i].innerText == 'Spoj'){
              isspoj = false
            }
          }
          
          
          
          
          
          // logic for set of 1
          if(isspoj==true && iscodeforces==false && isleetcode==false){
            for(let i=0;i<getcodeforces.length;i++) {
              getcodeforces[i].style.display = 'none'
              }
            for(let i=0;i<getleetcode.length;i++) {
                getleetcode[i].style.display = 'none'
              }
            for(let i=0;i<getspoj.length;i++) {
                getspoj[i].style.display = 'block'
              }
            
          }
          
          if(isspoj==false && iscodeforces==true && isleetcode==false){
            for(let i=0;i<getcodeforces.length;i++) {
              getcodeforces[i].style.display = 'block'
              }
            for(let i=0;i<getleetcode.length;i++) {
                getleetcode[i].style.display = 'none'
              }
            for(let i=0;i<getspoj.length;i++) {
                getspoj[i].style.display = 'none'
              }
            
          }
          if(isspoj==false && iscodeforces==false && isleetcode==true){
            for(let i=0;i<getcodeforces.length;i++) {
              getcodeforces[i].style.display = 'none'
              }
            for(let i=0;i<getleetcode.length;i++) {
                getleetcode[i].style.display = 'block'
              }
            for(let i=0;i<getspoj.length;i++) {
                getspoj[i].style.display = 'none'
              }
            
          }

          // set of 2 logic

          if(isspoj==false && iscodeforces==true && isleetcode==true){
            for(let i=0;i<getcodeforces.length;i++) {
              getcodeforces[i].style.display = 'block'
              }
            for(let i=0;i<getleetcode.length;i++) {
                getleetcode[i].style.display = 'block'
              }
            for(let i=0;i<getspoj.length;i++) {
                getspoj[i].style.display = 'none'
              }
            
          }

          if(isspoj==true && iscodeforces==true && isleetcode==false){
            for(let i=0;i<getcodeforces.length;i++) {
              getcodeforces[i].style.display = 'block'
              }
            for(let i=0;i<getleetcode.length;i++) {
                getleetcode[i].style.display = 'none'
              }
            for(let i=0;i<getspoj.length;i++) {
                getspoj[i].style.display = 'block'
              }
            
          }

          if(isspoj==true && iscodeforces==false && isleetcode==true){
            for(let i=0;i<getcodeforces.length;i++) {
              getcodeforces[i].style.display = 'none'
              }
            for(let i=0;i<getleetcode.length;i++) {
                getleetcode[i].style.display = 'block'
              }
            for(let i=0;i<getspoj.length;i++) {
                getspoj[i].style.display = 'block'
              }
            
          }

          //set of three logic
          if(isspoj==true && iscodeforces==true && isleetcode==true){
            for(let i=0;i<getcodeforces.length;i++) {
              getcodeforces[i].style.display = 'block'
              }
            for(let i=0;i<getleetcode.length;i++) {
                getleetcode[i].style.display = 'block'
              }
            for(let i=0;i<getspoj.length;i++) {
                getspoj[i].style.display = 'block'
              }
            
          }
          })
          
        }