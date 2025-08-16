

//FOR INDIA

let runIndia=document.getElementById("runIndia");
let overIndia=document.getElementById("oversIndia");

let runsIndia=0;
let wicketIndia=0;
let oversIndia=0;

//FOR AUSTRALIA

let runAustralia=document.getElementById("runAustralia");
let overAustralia=document.getElementById("oversAustralia");

let runsAustralia=0;
let wicketAustralia=0;
let oversAustralia=0;


//FOR INDIA
function add1India(){
runsIndia+=1;
runIndia.textContent=runsIndia+"/"+wicketIndia;
}
function add4India(){
runsIndia+=4;
runIndia.textContent=runsIndia+"/"+wicketIndia;
}
function add6India(){
runsIndia+=6;
runIndia.textContent=runsIndia+"/"+wicketIndia;
}

function addWicketIndia(){
wicketIndia+=1;
runIndia.textContent=runsIndia+"/"+wicketIndia;
}

function addOversIndia(){
    oversIndia+=1;
    overIndia.textContent="Overs: "+oversIndia;
}



//FOR AUSTRALIA
function add1Australia(){
runsAustralia+=1;
runAustralia.textContent=runsAustralia+"/"+wicketAustralia;
}
function add4Australia(){
runsAustralia+=4;
runAustralia.textContent=runsAustralia+"/"+wicketAustralia;
}
function add6Australia(){
runsAustralia+=6;
runAustralia.textContent=runsAustralia+"/"+wicketAustralia;
}

function addWicketAustralia(){
wicketAustralia+=1;
runAustralia.textContent=runsAustralia+"/"+wicketAustralia;
}

function addOversAustralia(){
    oversAustralia+=1;
    overAustralia.textContent="Overs: "+oversAustralia;
}


function Reset(){
    runsIndia=0;
    wicketIndia=0;
    oversIndia=0;
    runsAustralia=0;
    wicketAustralia=0;
    oversAustralia=0;
    runIndia.textContent="0/0";
    overIndia.textContent="Overs: 0";
    runAustralia.textContent="0/0";
    overAustralia.textContent="Overs: 0";
}