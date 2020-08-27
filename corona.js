document.addEventListener('DOMContentLoaded',function(i){
    i.preventDefault();
    javascript();});    

function javascript(){
const myForm=document.getElementById('myForm');

    myForm.addEventListener(
        'click',function(e){
            e.preventDefault();
            let country=document.getElementById('country').value
            console.log(country);
            let url="https://api.covid19api.com/dayone/country/"+country;
            fetch(url)
            .then((res)=>res.json())
            .then((res)=>{
                let length=res.length;
                let index=length-1;
                let indexx=length-2;
                let today=res[index].Confirmed;
                let yesterday=res[indexx].Confirmed;
                let current=Number(today)-Number(yesterday);
                console.log(res[index].Confirmed);
                
            let confirmed=document.getElementById('confirmed'); 
            let new_case=document.getElementById('new'); 
            let deaths=document.getElementById('deaths'); 
            let recovered=document.getElementById('recovered'); 
            
            confirmed.innerHTML='';
            new_case.innerHTML='';
            deaths.innerHTML='';
            recovered.innerHTML='';
    
    
            confirmed.append("Confirmed : "+res[index].Confirmed.toString());
            console.log(confirmed)
            console.log(res[index].Confirmed);
            deaths.append("Total Deaths : "+res[index].Deaths.toString());
            recovered.append("Recovered : "+res[index].Recovered.toString());
            new_case.append("New Cases : "+current.toString());    
                ;} )
        })
    }