let btn = document.getElementById('btn');
console.log(form);
console.log('werkt');

btn.addEventListener('click', function(){
    console.log('click');
    let leeftijd = document.getElementById('leeftijd').value;
    let naam = document.getElementById('naam').value;
    let locatie = document.getElementById('locatie');
    let message = "";
    if (leeftijd > 18){
        message = (`Proficiat,${naam} jij bent meerderjarig.`);
    } else {
        message = (`Jammer,${naam} jij bent nog te jong.`);
    }
    locatie.innerText = message;
})