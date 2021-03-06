
function showItem(over, showItem){
over.addEventListener('mouseenter', function show(e){
    var x = e.clientX + pageXOffset;
    var y = e.clientY + pageYOffset;
    showItem.style.top = y;
    showItem.style.left = x;
    showItem.style.display = "flex";
})
over.addEventListener('mouseleave', function(){
   showItem.style.display="none"; 
});
}
var trainFieldIMG = document.getElementById('trainField');
var trainFieldIB = document.getElementById('trainFieldIB');

showItem(trainFieldIMG, trainFieldIB)

var barracksIMG = document.getElementById('barracks');
var barracksIB = document.getElementById('barracksIB');

showItem(barracksIMG, barracksIB);

var tacticsIMG = document.getElementById('tactics');
var tacticsIB = document.getElementById('tacticsIB');

showItem(tacticsIMG, tacticsIB);

var trainingIMG = document.getElementById('training');
var trainingIB = document.getElementById('trainingIB');

showItem(trainingIMG, trainingIB);

var equipmentIMG = document.getElementById('equipment');
var equipmentIB = document.getElementById('equipmentIB');

showItem(equipmentIMG, equipmentIB);

function showCalculateCastle(over, showItem, castleManpower, chanceDOM){
    over.addEventListener('mouseenter', function show(e){
    var chance = soldier.amount / castleManpower;
        if(chance > 1){
            chanceDOM.innerHTML = 100;
        }else{
            chance = chance * 100;
            chanceDOM.innerHTML = Number(chance.toFixed(2));
        }
    var x = e.clientX + pageXOffset;
    var y = e.clientY + pageYOffset;
    showItem.style.top = y;
    showItem.style.left = x;
    showItem.style.display = "flex";
})
over.addEventListener('mouseleave', function(){
   showItem.style.display="none"; 
});
};


showCalculateCastle(castle01DOM, castle01IB, castle01.manpower, castle01Chance);
showCalculateCastle(castle02DOM, castle02IB, castle02.manpower, castle02Chance);
showCalculateCastle(castle03DOM, castle03IB, castle03.manpower, castle03Chance);
showCalculateCastle(castle04DOM, castle04IB, castle04.manpower, castle04Chance);
showCalculateCastle(castle05DOM, castle05IB, castle05.manpower, castle05Chance);
showCalculateCastle(castle06DOM, castle06IB, castle06.manpower, castle06Chance);
showCalculateCastle(castle07DOM, castle07IB, castle07.manpower, castle07Chance);
showCalculateCastle(castle08DOM, castle08IB, castle08.manpower, castle08Chance);
showCalculateCastle(castle09DOM, castle09IB, castle09.manpower, castle09Chance);
showCalculateCastle(castle10DOM, castle10IB, castle10.manpower, castle10Chance);
showCalculateCastle(castle11DOM, castle11IB, castle11.manpower, castle11Chance);
showCalculateCastle(castle12DOM, castle12IB, castle12.manpower, castle12Chance);
showCalculateCastle(castle13DOM, castle13IB, castle13.manpower, castle13Chance);
showCalculateCastle(castle14DOM, castle14IB, castle14.manpower, castle14Chance);
showCalculateCastle(castle15DOM, castle15IB, castle15.manpower, castle15Chance);
showCalculateCastle(castle16DOM, castle16IB, castle16.manpower, castle16Chance);
showCalculateCastle(castle17DOM, castle17IB, castle17.manpower, castle17Chance);
showCalculateCastle(castle18DOM, castle18IB, castle18.manpower, castle18Chance);
showCalculateCastle(castle19DOM, castle19IB, castle19.manpower, castle19Chance);
showCalculateCastle(castle20DOM, castle20IB, castle20.manpower, castle20Chance);
showCalculateCastle(castle21DOM, castle21IB, castle21.manpower, castle21Chance);
showCalculateCastle(castle22DOM, castle22IB, castle22.manpower, castle22Chance);
showCalculateCastle(castle23DOM, castle23IB, castle23.manpower, castle23Chance);
showCalculateCastle(castle24DOM, castle24IB, castle24.manpower, castle24Chance);
showCalculateCastle(castle25DOM, castle25IB, castle25.manpower, castle25Chance);
showCalculateCastle(castle26DOM, castle26IB, castle26.manpower, castle26Chance);
showCalculateCastle(castle27DOM, castle27IB, castle27.manpower, castle27Chance);
showCalculateCastle(castle28DOM, castle28IB, castle28.manpower, castle28Chance);
showCalculateCastle(castle29DOM, castle29IB, castle29.manpower, castle29Chance);
showCalculateCastle(castle30DOM, castle30IB, castle30.manpower, castle30Chance);
