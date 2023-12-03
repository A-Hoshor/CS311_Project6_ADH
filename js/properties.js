

function showCurrentAssets() {
    const inputs = document.getElementById('cAssets');
    inputs.style.display = 'none';
    const outputs = document.getElementById('cAssetsAdd');
    outputs.style.display = 'inline-block';
}

function showInvProp() {
    const inputs = document.getElementById('iProp');
    inputs.style.display = 'none';
    const outputs = document.getElementById('iPropAdd');
    outputs.style.display = 'inline-block';
}

function showInt() {
    const inputs = document.getElementById('int');
    inputs.style.display = 'none';
    const outputs = document.getElementById('intAdd');
    outputs.style.display = 'inline-block';
}

function showcLiab() {
    const inputs = document.getElementById('cLiab');
    inputs.style.display = 'none';
    const outputs = document.getElementById('liabAdd');
    outputs.style.display = 'inline-block';
}

function showltLiab() {
    const inputs = document.getElementById('ltLiab');
    inputs.style.display = 'none';
    const outputs = document.getElementById('ltLiabAdd');
    outputs.style.display = 'inline-block';
}



function addAll() {
    let currentAssets = addCurrentAssets();
    let investmentProperty = addInvestmentProperty();
    let intangibles = addIntangibles();
    let totalCurrentA= currentAssets + investmentProperty + intangibles;
    document.getElementById('tAssets').innerHTML=totalCurrentA;

    let currentLiabilities = addCurrentLiabilities();
    let  longTermLiabilities =addLongTermLiabilities();
    let totalCurrentL = currentLiabilities + longTermLiabilities;
    document.getElementById("tLiabilities").innerHTML=totalCurrentL;

    let position = totalCurrentA - totalCurrentL;
    document.getElementById("position").innerHTML=position;
}

function addCurrentAssets() {
    let cashI=document.getElementById("cashI");
    let invI = document.getElementById("invI");
    let suppI = document.getElementById("suppI");
    let tempI= document.getElementById("tempI");
 
    let total =parseFloat(cashI.value) + parseFloat(invI.value) + 
    parseFloat(suppI.value) + parseFloat(tempI.value);
    
    document.getElementById('tcAssets').innerHTML=total;
    return total;
}

function addInvestmentProperty() {
    let landI2=document.getElementById("landI2");
    let invI2 =document.getElementById("invI2")
    let suppI2 = document.getElementById("suppI2");
    let tempI2= document.getElementById("tempI2");

    let ipTotal=parseFloat(landI2.value) + parseFloat(invI2.value)
    + parseFloat(suppI2.value) + parseFloat(tempI2.value);
    document.getElementById('tiProp').innerHTML=ipTotal;
    return ipTotal;
}

function addIntangibles() {
    let tradeI=document.getElementById("tradeI");
    let invI3 =document.getElementById("invI3");
    let intan = parseInt(tradeI.value) + parseInt(invI3.value);
    document.getElementById("tInt").innerHTML= intan;
    return intan;
}

function addCurrentLiabilities() {
    let accPay = document.getElementById("accPay");
    let notePay = document.getElementById("notePay");
    let intPay = document.getElementById("intPay");
    let wagePay = document.getElementById("wagePay");
    let accExp = document.getElementById("accExp");

    let cLiabilities = parseFloat(accPay.value) + parseFloat(notePay.value) 
    + parseFloat(intPay.value) + parseFloat(wagePay.value) + parseFloat(accExp.value);
    document.getElementById("tcLiab").innerHTML = cLiabilities;
    return cLiabilities;
}

function addLongTermLiabilities() {
    let notePay2= document.getElementById("notePay2");
    let bondPay= document.getElementById("bondPay");

    let ltL = parseFloat(notePay2.value) + parseFloat(bondPay.value);
    document.getElementById("longTerm").innerHTML=ltL;
    return ltL;
}