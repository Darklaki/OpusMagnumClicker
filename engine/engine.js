/*
OpusMagnumClicker 0.3
--**--
Authors:
#Łukasz Szulborski - programming/ideas/graphic/SocialMedia;
#Filip Sasinowski - graphic/ideas;
--**--

Łukasz Szulborski All Rights Reserved. 2016
*/

/*MEANS_OF_PAYMENT*/
var food = 0;
var foodDOM = document.getElementById('foodAmount');
var clickFoodDOM = document.getElementById('clickFood');
var foodPS = 0;
var foodPSDOM = document.getElementById('foodPersec');
foodPSDOM.innerHTML = foodPS;

var gold = 0;//Gold
var goldDOM = document.getElementById('goldAmount');
var clickGoldDOM = document.getElementById('clickGold');
var goldPS = 0;
var goldPSDOM = document.getElementById('goldPersec');
/*END_MEANS_OF_PAYMENT*/

/*CLICK_FOOs*/
function clickFood() { //Click foo for food
    food++;
    foodDOM.innerHTML = food.toFixed(0);
}
clickFoodDOM.addEventListener('click', clickFood);

function clickGold(){
    gold++;
    goldDOM.innerHTML = gold.toFixed(0);
}
clickGoldDOM.addEventListener('click', clickGold);
/*END_CLICK_FOOs*/

function castleAlertBox(text){ 
    var boxContainer = document.getElementById('warInfoBoxContainer');
    var box = document.createElement("div");

    box.innerHTML = text;
    box.setAttribute("id", "info-box-displayed");
    boxContainer.appendChild(box);
    setTimeout(function(){
        boxContainer.removeChild(document.getElementById("info-box-displayed"));
    }, 8000);
    setTimeout(function(){
        if (document.getElementById('warInfoBoxContainer').length >= 5){
        boxContainer.removeChild(boxContainer.childNodes[0]);
    } 
    }, 500);
}

/*BUY_FOO*/
function buy(){
    if(food >= this.foodPrice && gold >= this.goldPrice) {
        gold = gold - this.goldPrice;
        goldDOM.innerHTML = gold.toFixed(0); 
        food = food - this.foodPrice;
        foodDOM.innerHTML = food.toFixed(0);
        
        this.amount++;
        
        foodPS = foodPS + this.foodPS;
        foodPSDOM.innerHTML = foodPS.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
        goldPS = goldPS + this.goldPS;
        goldPSDOM.innerHTML = goldPS.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
        
        this.foodPrice = Math.floor(this.foodPrice * 1.5);
        this.goldPrice =Math.floor(this.goldPrice * 1.5);
        
    } else{
        
    }
}
/*END_BUY_FOO*/

/*PS_INCOME*/
var interval;

function perSecIncome(){
    food = food + foodPS * 0.01 * 1.4;
    foodDOM.innerHTML = food.toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                        });
    gold = gold + goldPS * 0.01 * 1.4;
    goldDOM.innerHTML = gold.toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                        });
    clearInterval(interval);
}
setInterval(perSecIncome, 10);
/*END_PS_INCOME*/

/*FOOD_ITEMS*/
var bakery = {
    amount: 0,
    foodPrice: 20,
    goldPrice: 10,
    foodPS: 1,
    goldPS: 0,
};
var bakeryDOM = document.getElementById('buyBakery');
var bakeryFoodPrice = document.getElementById('bakeryCostFood');
var bakeryGoldPrice = document.getElementById('bakeryCostGold');
var bakeryAmount = document.getElementById('bakeryAmount');
document.getElementById('bakeryPS').innerHTML = bakery.foodPS;
document.getElementById('bakeryCostFood').innerHTML = bakery.foodPrice;
document.getElementById('bakeryCostGold').innerHTML = bakery.goldPrice;

var cornFields = {
    amount: 0,
    foodPrice: 150,
    goldPrice: 40,
    foodPS: 5,
    goldPS: 0,
};
var cornFieldsDOM = document.getElementById('buyCornFields');
var cornFieldsFoodPrice = document.getElementById('cornFieldsCostFood');
var cornFieldsGoldPrice = document.getElementById('cornFieldsCostGold');
var cornFieldsAmount = document.getElementById('cornFieldsAmount');
document.getElementById('cornFieldsPS').innerHTML = cornFields.foodPS;
document.getElementById('cornFieldsCostFood').innerHTML = cornFields.foodPrice;
document.getElementById('cornFieldsCostGold').innerHTML = cornFields.goldPrice;

function cornFieldsShowCheck(){
if( (food < 100) && (cornFields.amount < 1) ){
    document.getElementById('cornFields').style.display='none';
}else{
    document.getElementById('cornFields').style.display='flex';
}
    clearInterval(cornFieldsShowCheck);
};
setInterval(cornFieldsShowCheck, 400);

var cattle = {
    amount: 0,
    foodPrice: 800,
    goldPrice: 200,
    foodPS: 10,
    goldPS: 0,
};
var cattleDOM = document.getElementById('buyCattle');
var cattleFoodPrice = document.getElementById('cattleCostFood');
var cattleGoldPrice = document.getElementById('cattleCostGold');
var cattleAmount = document.getElementById('cattleAmount');
document.getElementById('cattlePS').innerHTML = cattle.foodPS;
document.getElementById('cattleCostFood').innerHTML = cattle.foodPrice;
document.getElementById('cattleCostGold').innerHTML = cattle.goldPrice;

function cattleShowCheck(){
if( (food < 400) && (cattle.amount < 1) ){
    document.getElementById('cattle').style.display='none';
}else{
    document.getElementById('cattle').style.display='flex';
}
    clearInterval(cattleShowCheck);
};
setInterval(cattleShowCheck, 400);

var hunting = {
    amount: 0,
    foodPrice: 5000,
    goldPrice: 1400,
    foodPS: 50,
    goldPS: 0,
};
var huntingDOM = document.getElementById('buyHunting');
var huntingFoodPrice = document.getElementById('huntingCostFood');
var huntingGoldPrice = document.getElementById('huntingCostGold');
var huntingAmount = document.getElementById('huntingAmount');
document.getElementById('huntingPS').innerHTML = hunting.foodPS;
document.getElementById('huntingCostFood').innerHTML = hunting.foodPrice;
document.getElementById('huntingCostGold').innerHTML = hunting.goldPrice;

function huntingShowCheck(){
if( (food < 3500) && (hunting.amount < 1) ){
    document.getElementById('hunting').style.display='none';
}else{
    document.getElementById('hunting').style.display='flex';
}
    clearInterval(huntingShowCheck);
};
setInterval(huntingShowCheck, 400);


var serfdom = {
    amount: 0,
    foodPrice: 30000,
    goldPrice: 9000,
    foodPS: 150,
    goldPS: 0,
    
};
var serfdomDOM = document.getElementById('buySerfodom');
var serfdomFoodPrice = document.getElementById('serfodomCostFood');
var serfdomGoldPrice = document.getElementById('serfodomCostGold');
var serfdomAmount = document.getElementById('serfodomAmount');
document.getElementById('serfdomPS').innerHTML = serfdom.foodPS;
document.getElementById('serfodomCostFood').innerHTML = serfdom.foodPrice;
document.getElementById('serfodomCostGold').innerHTML = serfdom.goldPrice;

function serfdomShowCheck(){
if( (food < 20000) && (serfdom.amount < 1) ){
    document.getElementById('serfdom').style.display='none';
}else{
    document.getElementById('serfdom').style.display='flex';
}
    clearInterval(serfdomShowCheck);
};
setInterval(serfdomShowCheck, 400);

var vegetables = {
    amount: 0,
    foodPrice: 120000,
    goldPrice: 27000,
    foodPS: 700,
    goldPS: 0
}

var vegetablesDOM = document.getElementById('buyVegetables');
var vegetablesFoodPrice = document.getElementById('vegetablesCostFood');
var vegetablesGoldPrice = document.getElementById('vegetablesCostGold');
var vegetablesAmount = document.getElementById('vegetablesAmount');
document.getElementById('vegetablesPS').innerHTML = vegetables.foodPS;
document.getElementById('vegetablesCostFood').innerHTML = vegetables.foodPrice;
document.getElementById('vegetablesCostGold').innerHTML = vegetables.goldPrice;

function vegetablesShowCheck(){
if( (food < 80000) && (vegetables.amount < 1) ){
    document.getElementById('vegetables').style.display='none';
}else{
    document.getElementById('vegetables').style.display='flex';
}
    clearInterval(vegetablesShowCheck);
};
setInterval(vegetablesShowCheck, 400);

var dairy = {
    amount: 0,
    foodPrice: 600000,
    goldPrice: 80000,
    foodPS: 1500,
    goldPS: 0
}
var dairyDOM = document.getElementById('buyDairy');
var dairyFoodPrice = document.getElementById('dairyCostFood');
var dairyGoldPrice = document.getElementById('dairyCostGold');
var dairyAmount = document.getElementById('dairyAmount');
document.getElementById('dairyPS').innerHTML = dairy.foodPS;
document.getElementById('dairyCostFood').innerHTML = dairy.foodPrice;
document.getElementById('dairyCostGold').innerHTML = dairy.goldPrice;

function dairyShowCheck(){
if( (food < 450000) && (dairy.amount < 1) ){
    document.getElementById('dairy').style.display='none';
}else{
    document.getElementById('dairy').style.display='flex';
}
    clearInterval(dairyShowCheck);
};
setInterval(dairyShowCheck, 400);

var tools = {
    amount: 0,
    foodPrice: 3000000,
    goldPrice: 240000,
    foodPS: 5000,
    goldPS: 0
}
var toolsDOM = document.getElementById('buyTools');
var toolsFoodPrice = document.getElementById('toolsCostFood');
var toolsGoldPrice = document.getElementById('toolsCostGold');
var toolsAmount = document.getElementById('toolsAmount');
document.getElementById('toolsPS').innerHTML = tools.foodPS;
document.getElementById('toolsCostFood').innerHTML = tools.foodPrice;
document.getElementById('toolsCostGold').innerHTML = tools.goldPrice;

function toolsShowCheck(){
if( (food < 2000000) && (tools.amount < 1) ){
    document.getElementById('tools').style.display='none';
}else{
    document.getElementById('tools').style.display='flex';
}
    clearInterval(toolsShowCheck);
};
setInterval(toolsShowCheck, 400);

var fisherman = {
    amount: 0,
    foodPrice: 6500000,
    goldPrice: 320000,
    foodPS: 9000,
    goldPS: 0
}
var fishermanDOM = document.getElementById('buyFishermans');
var fishermanFoodPrice = document.getElementById('fishermansCostFood');
var fishermanGoldPrice = document.getElementById('fishermansCostGold');
var fishermanAmount = document.getElementById('fishermansAmount');
document.getElementById('fishermansPS').innerHTML = fisherman.foodPS;
document.getElementById('fishermansCostFood').innerHTML = fisherman.foodPrice;
document.getElementById('fishermansCostGold').innerHTML = fisherman.goldPrice;

function fishermanShowCheck(){
if( (food < 4000000) && (fisherman.amount < 1) ){
    document.getElementById('fisherman').style.display='none';
}else{
    document.getElementById('fisherman').style.display='flex';
}
    clearInterval(fishermanShowCheck);
};
setInterval(fishermanShowCheck, 400);

var educatedFarmers = {
    amount: 0,
    foodPrice: 10000000,
    goldPrice: 500000,
    foodPS: 12000,
    goldPS: 0
}
var educatedFarmersDOM = document.getElementById('buyEducatedFarmers');
var educatedFarmersFoodPrice = document.getElementById('educatedFarmersCostFood');
var educatedFarmersGoldPrice = document.getElementById('educatedFarmersCostGold');
var educatedFarmersAmount = document.getElementById('educatedFarmersAmount');
document.getElementById('educatedFarmersPS').innerHTML = educatedFarmers.foodPS;
document.getElementById('educatedFarmersCostFood').innerHTML = educatedFarmers.foodPrice;
document.getElementById('educatedFarmersCostGold').innerHTML = educatedFarmers.goldPrice;

function educatedFarmersShowCheck(){
if( (food < 7000000) && (educatedFarmers.amount < 1) ){
    document.getElementById('educatedFarmers').style.display='none';
}else{
    document.getElementById('educatedFarmers').style.display='flex';
}
    clearInterval(educatedFarmersShowCheck);
};
setInterval(educatedFarmersShowCheck, 400);
/*END_FOOD_ITEMS*/

/*GOLD_ITEMS*/
var money = {
    amount: 0,
    foodPrice: 0,
    goldPrice: 20,
    foodPS: 0,
    goldPS: 1,
}
var moneyDOM = document.getElementById('buyMoney');
var moneyFoodPrice = document.getElementById('moneyCostFood');
var moneyGoldPrice = document.getElementById('moneyCostGold');
var moneyAmount = document.getElementById('moneyAmount');
document.getElementById('moneyPS').innerHTML = money.goldPS;
document.getElementById('moneyCostFood').innerHTML = money.foodPrice;
document.getElementById('moneyCostGold').innerHTML = money.goldPrice;

var town = {
    amount: 0,
    foodPrice: 20,
    goldPrice: 100,
    foodPS: 0,
    goldPS: 5,
}
var townDOM = document.getElementById('buyTown');
var townFoodPrice = document.getElementById('townCostFood');
var townGoldPrice = document.getElementById('townCostGold');
var townAmount = document.getElementById('townAmount');
document.getElementById('townPS').innerHTML = town.goldPS;
document.getElementById('townCostFood').innerHTML = town.foodPrice;
document.getElementById('townCostGold').innerHTML = town.goldPrice;

function townShowCheck(){
if( (gold < 70) && (town.amount < 1) ){
    document.getElementById('town').style.display='none';
}else{
    document.getElementById('town').style.display='flex';
}
    clearInterval(townShowCheck);
};
setInterval(townShowCheck, 400);

var trade = {
    amount: 0,
    foodPrice: 0,
    goldPrice: 600,
    foodPS: 0,
    goldPS: 10,
}
var tradeDOM = document.getElementById('buyTrade');
var tradeFoodPrice = document.getElementById('tradeCostFood');
var tradeGoldPrice = document.getElementById('tradeCostGold');
var tradeAmount = document.getElementById('tradeAmount');
document.getElementById('tradePS').innerHTML = trade.goldPS;
document.getElementById('tradeCostFood').innerHTML = trade.foodPrice;
document.getElementById('tradeCostGold').innerHTML = trade.goldPrice;

function tradeShowCheck(){
if( (gold < 400) && (trade.amount < 1) ){
    document.getElementById('trade').style.display='none';
}else{
    document.getElementById('trade').style.display='flex';
}
    clearInterval(tradeShowCheck);
};
setInterval(tradeShowCheck, 400);

var tavern = {
    amount: 0,
    foodPrice: 0,
    goldPrice: 4000,
    foodPS: 0,
    goldPS: 50,
}
var tavernDOM = document.getElementById('buyTavern');
var tavernFoodPrice = document.getElementById('tavernCostFood');
var tavernGoldPrice = document.getElementById('tavernCostGold');
var tavernAmount = document.getElementById('tavernAmount');
document.getElementById('tavernPS').innerHTML = tavern.goldPS;
document.getElementById('tavernCostFood').innerHTML = tavern.foodPrice;
document.getElementById('tavernCostGold').innerHTML = tavern.goldPrice;

function tavernShowCheck(){
if( (gold < 3000) && (tavern.amount < 1) ){
    document.getElementById('tavern').style.display='none';
}else{
    document.getElementById('tavern').style.display='flex';
}
    clearInterval(tavernShowCheck);
};
setInterval(tavernShowCheck, 400);

var entertainment = {
    amount: 0,
    foodPrice: 0,
    goldPrice: 16000,
    foodPS: 0,
    goldPS: 150,
}
var entertainmentDOM = document.getElementById('buyEntertainment');
var entertainmentFoodPrice = document.getElementById('entertainmentCostFood');
var entertainmentGoldPrice = document.getElementById('entertainmentCostGold');
var entertainmentAmount = document.getElementById('entertainmentAmount');
document.getElementById('entertainmentPS').innerHTML = entertainment.goldPS;
document.getElementById('entertainmentCostFood').innerHTML = entertainment.foodPrice;
document.getElementById('entertainmentCostGold').innerHTML = entertainment.goldPrice;

function entertainmentShowCheck(){
if( (gold < 11000) && (entertainment.amount < 1) ){
    document.getElementById('entertainment').style.display='none';
}else{
    document.getElementById('entertainment').style.display='flex';
}
    clearInterval(entertainmentShowCheck);
};
setInterval(entertainmentShowCheck, 400);
 
var betterEconomy = {
    amount: 0,
    foodPrice: 0,
    goldPrice: 100000,
    foodPS: 0,
    goldPS: 500,
}
var betterEconomyDOM = document.getElementById('buyBetterEconomy');
var betterEconomyFoodPrice = document.getElementById('betterEconomyCostFood');
var betterEconomyGoldPrice = document.getElementById('betterEconomyCostGold');
var betterEconomyAmount = document.getElementById('betterEconomyAmount');
document.getElementById('betterEconomyPS').innerHTML = betterEconomy.goldPS;
document.getElementById('betterEconomyCostFood').innerHTML = betterEconomy.foodPrice;
document.getElementById('betterEconomyCostGold').innerHTML = betterEconomy.goldPrice;

function betterEconomyShowCheck(){
if( (gold < 110000) && (betterEconomy.amount < 1) ){
    document.getElementById('betterEconomy').style.display='none';
}else{
    document.getElementById('betterEconomy').style.display='flex';
}
    clearInterval(betterEconomyShowCheck);
};
setInterval(betterEconomyShowCheck, 400);

var taxes = {
    amount: 0,
    foodPrice: 0,
    goldPrice: 500000,
    foodPS: 0,
    goldPS: 1500,
}
var taxesDOM = document.getElementById('buyTaxes');
var taxesFoodPrice = document.getElementById('taxesCostFood');
var taxesGoldPrice = document.getElementById('taxesCostGold');
var taxesAmount = document.getElementById('taxesAmount');
document.getElementById('taxesPS').innerHTML = taxes.goldPS;
document.getElementById('taxesCostFood').innerHTML = taxes.foodPrice;
document.getElementById('taxesCostGold').innerHTML = taxes.goldPrice;

function taxesShowCheck(){
if( (gold < 450000) && (taxes.amount < 1) ){
    document.getElementById('taxes').style.display='none';
}else{
    document.getElementById('taxes').style.display='flex';
}
    clearInterval(taxesShowCheck);
};
setInterval(taxesShowCheck, 400);

var education = {
    amount: 0,
    foodPrice: 0,
    goldPrice: 1800000,
    foodPS: 0,
    goldPS: 5000,
}
var educationDOM = document.getElementById('buyEducation');
var educationFoodPrice = document.getElementById('educationCostFood');
var educationGoldPrice = document.getElementById('educationsCostGold');
var educationAmount = document.getElementById('educationAmount');
document.getElementById('educationPS').innerHTML = education.goldPS;
document.getElementById('educationCostFood').innerHTML = education.foodPrice;
document.getElementById('educationsCostGold').innerHTML = education.goldPrice;

function educationShowCheck(){
if( (gold < 1400000) && (education.amount < 1) ){
    document.getElementById('education').style.display='none';
}else{
    document.getElementById('education').style.display='flex';
}
    clearInterval(educationShowCheck);
};
setInterval(educationShowCheck, 400);

var weaponIndustry = {
    amount: 0,
    foodPrice: 0,
    goldPrice: 4000000,
    foodPS: 0,
    goldPS: 10000
}
var weaponIndustryDOM = document.getElementById('buyWeaponIndustry');
var weaponIndustryFoodPrice = document.getElementById('weaponIndustryCostFood');
var weaponIndustryGoldPrice = document.getElementById('weaponIndustryCostGold');
var weaponIndustryAmount = document.getElementById('weaponIndustryAmount');
document.getElementById('weaponIndustryPS').innerHTML = weaponIndustry.goldPS;
document.getElementById('weaponIndustryCostFood').innerHTML = weaponIndustry.foodPrice;
document.getElementById('weaponIndustryCostGold').innerHTML = weaponIndustry.goldPrice;

function weaponIndustryShowCheck(){
if( (gold < 3500000) && (weaponIndustry.amount < 1) ){
    document.getElementById('weaponIndustry').style.display='none';
}else{
    document.getElementById('weaponIndustry').style.display='flex';
}
    clearInterval(weaponIndustryShowCheck);
};
setInterval(weaponIndustryShowCheck, 400);

var bank = {
    amount: 0,
    foodPrice: 0,
    goldPrice: 10000000,
    foodPS: 0,
    goldPS: 30000,
}
var bankDOM = document.getElementById('buyBank');
var bankFoodPrice = document.getElementById('bankCostFood');
var bankGoldPrice = document.getElementById('bankCostGold');
var bankAmount = document.getElementById('bankAmount');
document.getElementById('bankPS').innerHTML = bank.goldPS;
document.getElementById('bankCostFood').innerHTML = bank.foodPrice;
document.getElementById('bankCostGold').innerHTML = bank.goldPrice;

function bankShowCheck(){
if( (gold < 7000000) && (bank.amount < 1) ){
    document.getElementById('bank').style.display='none';
}else{
    document.getElementById('bank').style.display='flex';
}
    clearInterval(bankShowCheck);
};
setInterval(bankShowCheck, 400);
/*END_GOLD_ITEMS*/

/*CALL_BUY_FOO*/
function callBuy(foo, item,itemFoodPriceDOM,itemGoldPriceDOM,itemAmountDOM) {
    foo.call(item);
    itemFoodPriceDOM.innerHTML = item.foodPrice.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
    itemGoldPriceDOM.innerHTML = item.goldPrice.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
    itemAmountDOM.textContent = item.amount;
}
/*END_CALL_BUY_FOO*/
function greyButton(item, DOM){
    DOM.style.backgroundColor = "grey";
    setTimeout(function(){
        DOM.style.backgroundColor = "white";
    }, 100);
};
/*FOOD_ITEMS_CALL*/
bakeryDOM.addEventListener('click', function(){
    callBuy(buy, bakery, bakeryFoodPrice, bakeryGoldPrice, bakeryAmount);
    greyButton(bakery, bakeryDOM);
});

cornFieldsDOM.addEventListener('click', function(){
    callBuy(buy, cornFields, cornFieldsFoodPrice, cornFieldsGoldPrice, cornFieldsAmount);
    greyButton(cornFields, cornFieldsDOM);
});

cattleDOM.addEventListener('click', function(){
   callBuy(buy, cattle, cattleFoodPrice,cattleGoldPrice, cattleAmount);
    greyButton(cattle, cattleDOM);
});

huntingDOM.addEventListener('click', function(){
   callBuy(buy, hunting, huntingFoodPrice, huntingGoldPrice, huntingAmount);
    greyButton(hunting, huntingDOM);
});

serfdomDOM.addEventListener('click', function(){
   callBuy(buy, serfdom, serfdomFoodPrice, serfdomGoldPrice, serfdomAmount);
    greyButton(serfdom, serfdomDOM);
});

vegetablesDOM.addEventListener('click', function(){
   callBuy(buy, vegetables, vegetablesFoodPrice, vegetablesGoldPrice, vegetablesAmount);
    greyButton(vegetables, vegetablesDOM);
});

dairyDOM.addEventListener('click', function(){
   callBuy(buy, dairy, dairyFoodPrice, dairyGoldPrice, dairyAmount);
    greyButton(dairy, dairyDOM);
});

toolsDOM.addEventListener('click', function(){
   callBuy(buy, tools, toolsFoodPrice, toolsGoldPrice, toolsAmount);
    greyButton(tools, toolsDOM);
});

fishermanDOM.addEventListener('click', function(){
   callBuy(buy, fisherman, fishermanFoodPrice, fishermanGoldPrice, fishermanAmount);
    greyButton(fisherman, fishermanDOM);
});

educatedFarmersDOM.addEventListener('click', function(){
    callBuy(buy, educatedFarmers, educatedFarmersFoodPrice, educatedFarmersGoldPrice, educatedFarmersAmount);
    greyButton(educatedFarmers, educatedFarmersDOM);
});
/*END_FOOD_ITEMS_CALL*/

/*MONEY_ITEMS_CALL*/
moneyDOM.addEventListener('click', function(){
   callBuy(buy, money, moneyFoodPrice, moneyGoldPrice, moneyAmount) ;
    greyButton(money, moneyDOM);
});

townDOM.addEventListener('click', function(){
    callBuy(buy, town, townFoodPrice, townGoldPrice, townAmount);
    greyButton(town, townDOM);
});

tradeDOM.addEventListener('click', function(){
    callBuy(buy, trade, tradeFoodPrice, tradeGoldPrice, tradeAmount);
    greyButton(trade, tradeDOM);
});

tavernDOM.addEventListener('click', function(){
    callBuy(buy, tavern, tavernFoodPrice, tavernGoldPrice, tavernAmount) ;
    greyButton(tavern, tavernDOM);
});

entertainmentDOM.addEventListener('click', function(){
    callBuy(buy, entertainment, entertainmentFoodPrice,entertainmentGoldPrice, entertainmentAmount);
    greyButton(entertainment, entertainmentDOM);
});

betterEconomyDOM.addEventListener('click', function(){
    callBuy(buy, betterEconomy, bakeryFoodPrice, betterEconomyGoldPrice, betterEconomyAmount);
    greyButton(betterEconomy, betterEconomyDOM);
});

taxesDOM.addEventListener('click', function(){
    callBuy(buy, taxes, taxesFoodPrice, taxesGoldPrice, taxesAmount);
    greyButton(taxes, taxesDOM);
});

educationDOM.addEventListener('click', function(){
    callBuy(buy, education, educationFoodPrice, educationGoldPrice, educationAmount);
    greyButton(education, educationDOM);
});

weaponIndustryDOM.addEventListener('click', function(){
    callBuy(buy, weaponIndustry, weaponIndustryFoodPrice, weaponIndustryGoldPrice, weaponIndustryAmount);
    greyButton(weaponIndustry, weaponIndustryDOM);
});

bankDOM.addEventListener('click', function(){
    callBuy(buy, bank, bankFoodPrice, bankGoldPrice, bankAmount);
    greyButton(bank, bankDOM);
});
/*END_MONEY_ITEMS_CALL*/

/*WAR_BUILDINGS*/
function buyWarBuilding(building, buildingDOM){
if ( gold >= building.cost ){    
    building.isBought = "true";
    soldier.price = soldier.price - building.soldierPrice;
    soldierGoldPrice.innerHTML = soldier.price;
    
    
    soldier.eatFoodPS = soldier.eatFoodPS - building.soldierEatsPS;
    soldierEatsPS.innerHTML = soldier.eatFoodPS.toFixed(0);
    buildingDOM.style.display = "none";
    gold = gold - building.cost;
}else{
    
    }
}

var trainingField = {
    cost: 100000,
    soldierPrice: 30,
    soldierEatsPS: 0,
    isBought: false
}
var trainingFieldDOM = document.getElementById('buyTrainingField');
var trainingFieldCost = document.getElementById('trainingFieldCost');
var trainingFieldItem = document.getElementById('trainingFieldItem');
trainingFieldCost.innerHTML = trainingField.cost.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
trainingFieldDOM.addEventListener('click', function(){
    buyWarBuilding(trainingField, trainingFieldItem);
     if ( gold >= trainingField.cost ){
        localStorage.trainingFieldIB = true;
    }else{
        greyButton(trainingField, trainingFieldDOM);
    }
})

var barracks = {
    cost: 250000,
    soldierPrice: 0,
    soldierEatsPS: 0.1,
    isBought: false
}
var barracksDOM = document.getElementById('buyBarracks');
var barracksCost = document.getElementById('barracksCost');
var barracksItem = document.getElementById('barracksItem');
barracksCost.innerHTML = barracks.cost.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
barracksDOM.addEventListener('click', function(){
    buyWarBuilding(barracks, barracksItem);
    if ( gold >= barracks.cost ){
        localStorage.barracksIB = true;
    }else{
        greyButton(barracks, barracksDOM);
    }
});

var tactics = {
    cost: 750000,
    soldierPrice: 50,
    soldierEatsPS: 0,
    isBought: false
}
var tacticsDOM = document.getElementById('buyTactics');
var tacticsCost = document.getElementById('tacticsCost');
var tacticsItem = document.getElementById('tacticsItem');
tacticsCost.innerHTML = tactics.cost.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
tacticsDOM.addEventListener('click', function(){
    buyWarBuilding(tactics, tacticsItem);
    if ( gold >= tactics.cost ){
        localStorage.tacticsIB = true;
    }else{
        greyButton(tactics, tacticsDOM);
    }
});
function tacticsShowCheck(){
if( (gold < 500000) || (tactics.isBought === "true") ){
    document.getElementById('tacticsItem').style.display='none';
}else{
    document.getElementById('tacticsItem').style.display='flex';
}
    clearInterval(tacticsShowCheck);
};
setInterval(tacticsShowCheck, 400);


var training = {
    cost: 1250000,
    soldierPrice: 0,
    soldierEatsPS: 0.2,
    isBought: false
}
var trainingDOM = document.getElementById('buyTraining');
var trainingCost = document.getElementById('trainingCost');
var trainingItem = document.getElementById('trainingItem');
trainingCost.innerHTML = training.cost.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
trainingDOM.addEventListener('click', function(){
    buyWarBuilding(training, trainingItem);
    if ( gold >= training.cost ){
        localStorage.trainingIB = true;
    }else{
        greyButton(training, trainingDOM);
    }
});
function trainingShowCheck(){
if( (gold < 900000) || (training.isBought === "true") ){
    document.getElementById('trainingItem').style.display='none';
}else{
    document.getElementById('trainingItem').style.display='flex';
}
    clearInterval(trainingShowCheck);
};
setInterval(trainingShowCheck, 400);


var equipment = {
    cost: 2000000,
    soldierPrice: 20,
    soldierEatsPS: 0,
    isBought: false
}
var equipmentDOM = document.getElementById('buyEquipment');
var equipmentCost = document.getElementById('equipmentCost');
var equipmentItem = document.getElementById('equipmentItem');
equipmentCost.innerHTML = equipment.cost.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });

equipmentDOM.addEventListener('click', function(){
    buyWarBuilding(equipment, equipmentItem);
    if ( gold >= equipment.cost ){
        localStorage.equipmentIB = true;
    }else{
        greyButton(equipment, equipmentDOM);
    }
});
function equipmentShowCheck(){
if( (gold < 1500000) || (equipment.isBought === "true") ){
    document.getElementById('equipmentItem').style.display='none';
}else{
    document.getElementById('equipmentItem').style.display='flex';
}
    clearInterval(equipmentShowCheck);
};
setInterval(equipmentShowCheck, 400);
/*END_WAR_BUILDINGS*/

/*SOLDIERS*/
var soldier = {
    amount: 0,
    price: 400,
    eatFoodPS: 1
};
var soldierAmount = document.getElementById('soldiersAmount');
var soldierGoldPrice = document.getElementById('soldierCost');
var soldierBuyOne = document.getElementById('buyOneSoldier');
var soldierBuyMax = document.getElementById('buyMaxSoldier');
var soldierEatsPS = document.getElementById('soldierEatsPS');
soldierGoldPrice.innerHTML = soldier.price;
soldierEatsPS.innerHTML = soldier.eatFoodPS;

function buyOneSoldier(){
    if(gold >= soldier.price){
        gold = gold - soldier.price;
        goldDOM.innerHTML = gold;
        
        foodPS = foodPS - soldier.eatFoodPS;
        foodPSDOM.innerHTML = foodPS;
        
        soldier.amount++;
        soldierAmount.innerHTML = soldier.amount;
    }else{
        greyButton(soldier,soldierBuyOne )
    }
}
soldierBuyOne.addEventListener('click', buyOneSoldier);

function buyMaxSoldier(){
    if(gold >= soldier.price){
        if ( foodPS > (gold / soldier.price).toFixed(0) ) {
            
            var howManySoldiers = Math.floor(gold / soldier.price);
            soldier.amount = soldier.amount + howManySoldiers;
            soldierAmount.innerHTML = soldier.amount;
        
            foodPS = foodPS - (howManySoldiers * soldier.eatFoodPS);
            foodPSDOM.innerHTML = foodPS;
        
            gold = gold - (howManySoldiers * soldier.price);
            goldDOM.innerHTML = gold;
            
        }else{
            var howManySoldiers = Math.floor(foodPS / soldier.eatFoodPS);
            soldier.amount = soldier.amount + howManySoldiers;
            soldierAmount.innerHTML = soldier.amount;
        
            foodPS = foodPS - (howManySoldiers * soldier.eatFoodPS);
            foodPSDOM.innerHTML = foodPS;
        
            gold = gold - (howManySoldiers * soldier.price);
            goldDOM.innerHTML = gold;
        }
       
    }else{
        greyButton(soldier,soldierBuyMax )
    }
}
soldierBuyMax.addEventListener('click', buyMaxSoldier);

var starvingSoldiersINT;
function starvingSoldierdInterval() {
    if ( food < 0 ) {
        food = 0;
        soldier.amount = soldier.amount - 1;
        soldierAmount.innerHTML = soldier.amount;
        defSoldier.amount = defSoldier.amount -1;
        defSoldierAmount.innerHTML = defSoldier.amount-1;
        
        foodPS = foodPS + soldier.eatFoodPS;
        foodPSDOM.innerHTML = foodPS.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
    };
    if (soldier.amount < 0) {
        soldier.amount = 0;
        soldierAmount.innerHTML = soldier.amount;
    }
     if (defSoldier.amount < 0) {
        defSoldier.amount = 0;
        defSoldierAmount.innerHTML = defSoldier.amount;
    }
    clearInterval(starvingSoldiersINT);
}
setInterval(starvingSoldierdInterval, 1000);

var howManyToBuyDOM = document.getElementById('howManyToBuy');
var warningBuyMaxINT;
function warningBuyMaxInterval(){
    var howManySoldiers;
    if ( foodPS > (gold / soldier.price).toFixed(0) ) {
        howManySoldiers = Math.floor(gold / soldier.price);
        howManyToBuyDOM.innerHTML = howManySoldiers; 
    }else{
        howManySoldiers = Math.floor(foodPS / soldier.eatFoodPS);
        howManyToBuyDOM.innerHTML = howManySoldiers;
    };
    
    clearInterval(warningBuyMaxINT);
}
setInterval(warningBuyMaxInterval, 400);
/*END_SOLDIERS*/

/*DEF_SOLDIERS*/
var defSoldier = {
    amount: 0,
    price: 1000,
    eatFoodPS: 1
}

var defSoldierAmount = document.getElementById('defSoldiersAmount');
var defSoldierGoldPrice = document.getElementById('defSoldierCost');
var defSoldierBuyOne = document.getElementById('buyOneDefSoldier');
var defSoldierBuyMax = document.getElementById('buyMaxDefSoldier');
var defSoldierEatsPS = document.getElementById('defSoldierEatsPS');
defSoldierGoldPrice.innerHTML = defSoldier.price;
defSoldierEatsPS.innerHTML = defSoldier.eatFoodPS;

function buyOneDefSoldier(){
    if ( gold >= defSoldier.price ){
        gold = gold - defSoldier.price;
        goldDOM.innerHTML = gold;
        
        foodPS = foodPS - defSoldier.eatFoodPS;
        foodPSDOM.innerHTML = foodPS;
        
        defSoldier.amount++;
        defSoldierAmount.innerHTML = defSoldier.amount;
    }else{
        greyButton(defSoldier, defSoldierBuyOne);
    }
};
defSoldierBuyOne.addEventListener('click', function(){
    buyOneDefSoldier();
});

function buyMaxDefSoldier() {
    if(gold >= defSoldier.price){
        if ( foodPS > (gold / defSoldier.price).toFixed(0) ) {
            
            var howManyDefSoldiers = Math.floor(gold / defSoldier.price);
            defSoldier.amount = defSoldier.amount + howManyDefSoldiers;
            defSoldierAmount.innerHTML = defSoldier.amount;
        
            foodPS = foodPS - (howManyDefSoldiers * defSoldier.eatFoodPS);
            foodPSDOM.innerHTML = foodPS;
        
            gold = gold - (howManyDefSoldiers * defSoldier.price);
            goldDOM.innerHTML = gold;
            
        }else{
            var howManyDefSoldiers = Math.floor(foodPS / defSoldier.eatFoodPS);
            defSoldier.amount = defSoldier.amount + howManyDefSoldiers;
            defSoldierAmount.innerHTML = defSoldier.amount;
        
            foodPS = foodPS - (howManyDefSoldiers * defSoldier.eatFoodPS);
            foodPSDOM.innerHTML = foodPS;
        
            gold = gold - (howManyDefSoldiers * defSoldier.price);
            goldDOM.innerHTML = gold;
        }
       
    }else{
        greyButton(soldier,defSoldierBuyMax)
    }
}
defSoldierBuyMax.addEventListener('click', function(){
    buyMaxDefSoldier();
});

var howManyDefToBuy = document.getElementById('howManyDefToBuy');
var warningDefBuyMaxINT;
function warningDefBuyMaxInterval(){
    var howManyDefSoldiers;
    if ( foodPS > (gold / defSoldier.price).toFixed(0) ) {
        howManyDefSoldiers = Math.floor(gold / defSoldier.price);
        howManyDefToBuy.innerHTML = howManyDefSoldiers; 
    }else{
        howManyDefSoldiers = Math.floor(foodPS / defSoldier.eatFoodPS);
        howManyDefToBuy.innerHTML = howManyDefSoldiers;
    };
    
    clearInterval(warningDefBuyMaxINT);
}
setInterval(warningDefBuyMaxInterval, 400);


/*END_DEF_SOLDIERS*/

/*DOM_ACTIONS*/
var armyCardDOM = document.getElementById('armyCardDOM');
var armyCard = document.getElementById('armyCard');

var mapCardDOM = document.getElementById('mapCardDOM');
var mapCard = document.getElementById('mapCard');


function cardSwitch(show, hide){
    show.style.display = 'flex';
    hide.style.display = 'none';
}

armyCardDOM.addEventListener('click', function(){
    cardSwitch(armyCard, mapCard)
});

mapCardDOM.addEventListener('click', function(){
    cardSwitch(mapCard, armyCard)
});


var enterBox = {
    is: false
};
var enterBoxDOM = document.getElementById('startButton');

enterBoxDOM.addEventListener('click', function(){
    enterBox.is = true;
    localStorage.enterLocal = enterBox.is;
    document.getElementById('enter').style.display="none";
});

var barbariansLessDOM = document.getElementById('predictLess');
var barbariansMoreDOM = document.getElementById('predictMore');

function checkBarbarians(less, more) {
    var power_ = 0
    for (i = 1; i<=30; i++){
        if ( this["castle" + i].isDef ){
            power_ = power_ + 1;
        }
        
    }
    power_ = power_ * 10 + Math.floor(goldPS * 0.05);

    if (power_ - 50 < 0){
        less.innerHTML = 0;
        more.innerHTML = power_ + 50;
        power_ = 0;
    }else{
        less.innerHTML = power_ - 50;
        more.innerHTML = power_ + 50;
        power_ = 0;
    };
}
document.getElementById('barbariansShow').addEventListener('mouseover', function(){
    checkBarbarians(barbariansLessDOM, barbariansMoreDOM);
});
/*END_DOM_ACTIONS*/

/*CASTLES*/
function attackCastle(castle, castleManpower, castleDOM){
    var chance = soldier.amount / castleManpower;
    var shoot = Number(Math.random().toFixed(2));
    if (chance < shoot){
        var killHolder = Math.floor((shoot - chance) * soldier.amount);
        soldier.amount = soldier.amount - killHolder;
        soldierAmount.innerHTML = soldier.amount;
        
        foodPS = foodPS + (killHolder * soldier.eatFoodPS);
        foodPSDOM.innerHTML = foodPS;
        
        castleAlertBox("YOU LOST! " + killHolder + " soldiers died...");
    } else{
        var killHolder = Math.floor(castleManpower / 10);
        if (killHolder > soldier.amount) {
            food = food + (soldier.eatFoodPS * soldier.amount) 
            soldier.amount = 0;
            soldierAmount.innerHTML = soldier.amount;
             soldier.amount = soldier.amount - killHolder;
            soldierAmount.innerHTML = soldier.amount;
        
            foodPS = foodPS + (killHolder * soldier.eatFoodPS);
            foodPSDOM.innerHTML = foodPS;
        
            castle.isDef = true;
        
            foodPS = foodPS + castle.addFoodPS;
            foodPSDOM.innerHTML = foodPS;
        
            goldPS = goldPS + castle.addGoldPS;
            goldPSDOM.innerHTML = goldPS;
        
            castleAlertBox("YOU WON! " + killHolder + " soldiers died... you gained " + castle.addFoodPS + " food per second and " + castle.addGoldPS + " gold per second")
            castleDOM.style.opacity = 0.5;
            castleDOM.style.pointerEvents = "none";
        } else{
            soldier.amount = soldier.amount - killHolder;
            soldierAmount.innerHTML = soldier.amount;
        
            foodPS = foodPS + (killHolder * soldier.eatFoodPS);
            foodPSDOM.innerHTML = foodPS;
        
            castle.isDef = true;
        
            foodPS = foodPS + castle.addFoodPS;
            foodPSDOM.innerHTML = foodPS;
        
            goldPS = goldPS + castle.addGoldPS;
            goldPSDOM.innerHTML = goldPS;
        
            castleAlertBox("YOU WON! " + killHolder + " soldiers died... you gained " + castle.addFoodPS + " food per second and " + castle.addGoldPS + " gold per second")
            castleDOM.style.opacity = 0.5;
            castleDOM.style.pointerEvents = "none";
        }
        
    }
}


var castle1 = {
    manpower: 20,
    isDef: false,
    addFoodPS: 10,
    addGoldPS: 3
};
var castle1DOM = document.getElementById('castle01');
var castle1IB = document.getElementById('castle01IB');
var castle1Chance = document.getElementById('castle01chance');
castle1DOM.addEventListener('click', function(){
    attackCastle(castle1, castle1.manpower, castle1DOM);
});

var castle2 = {
    manpower: 60,
    isDef: false,
    addFoodPS: 20,
    addGoldPS: 10
}
var castle2DOM = document.getElementById('castle02');
var castle2IB = document.getElementById('castle02IB');
var castle2Chance = document.getElementById('castle02chance');
castle2DOM.addEventListener('click', function(){
    attackCastle(castle2, castle2.manpower, castle2DOM);
});

var castle3 = {
    manpower: 140,
    isDef: false,
    addFoodPS: 25,
    addGoldPS: 18
}
var castle3DOM = document.getElementById('castle03');
var castle3IB = document.getElementById('castle03IB');
var castle3Chance = document.getElementById('castle03chance');
castle3DOM.addEventListener('click', function(){
    attackCastle(castle3, castle3.manpower, castle3DOM);
});

var castle4 = {
    manpower: 250,
    isDef: false,
    addFoodPS: 35,
    addGoldPS: 20
}
var castle4DOM = document.getElementById('castle04');
var castle4IB = document.getElementById('castle04IB');
var castle4Chance = document.getElementById('castle04chance');
castle4DOM.addEventListener('click', function(){
    attackCastle(castle4, castle4.manpower, castle4DOM);
});

var castle5 = {
    manpower: 360,
    isDef: false,
    addFoodPS: 50,
    addGoldPS: 25
}
var castle5DOM = document.getElementById('castle05');
var castle5IB = document.getElementById('castle05IB');
var castle5Chance = document.getElementById('castle05chance');
castle5DOM.addEventListener('click', function(){
    attackCastle(castle5, castle5.manpower, castle5DOM);
});

var castle6 = {
    manpower: 500,
    isDef: false,
    addFoodPS: 65,
    addGoldPS: 35
}
var castle6DOM = document.getElementById('castle06');
var castle6IB = document.getElementById('castle06IB');
var castle6Chance = document.getElementById('castle06chance');
castle6DOM.addEventListener('click', function(){
    attackCastle(castle6, castle6.manpower, castle6DOM);
});

var castle7 = {
    manpower: 700,
    isDef: false,
    addFoodPS: 90,
    addGoldPS: 38
}
var castle7DOM = document.getElementById('castle07');
var castle7IB = document.getElementById('castle07IB');
var castle7Chance = document.getElementById('castle07chance');
castle7DOM.addEventListener('click', function(){
    attackCastle(castle7, castle7.manpower, castle7DOM);
});

var castle8 = {
    manpower: 1050,
    isDef: false,
    addFoodPS: 100,
    addGoldPS: 40
}
var castle8DOM = document.getElementById('castle08');
var castle8IB = document.getElementById('castle08IB');
var castle8Chance = document.getElementById('castle08chance');
castle8DOM.addEventListener('click', function(){
    attackCastle(castle8, castle8.manpower, castle8DOM);
});

var castle9 = {
    manpower: 1450,
    isDef: false,
    addFoodPS: 115,
    addGoldPS: 50
}
var castle9DOM = document.getElementById('castle09');
var castle9IB = document.getElementById('castle09IB');
var castle9Chance = document.getElementById('castle09chance');
castle9DOM.addEventListener('click', function(){
    attackCastle(castle9, castle9.manpower, castle9DOM);
});

var castle10 = {
    manpower: 1900,
    isDef: false,
    addFoodPS: 150,
    addGoldPS: 55
}
var castle10DOM = document.getElementById('castle10');
var castle10IB = document.getElementById('castle10IB');
var castle10Chance = document.getElementById('castle10chance');
castle10DOM.addEventListener('click', function(){
    attackCastle(castle10, castle10.manpower, castle10DOM);
});

var castle11 = {
    manpower: 2500,
    isDef: false,
    addFoodPS: 175,
    addGoldPS: 57
}
var castle11DOM = document.getElementById('castle11');
var castle11IB = document.getElementById('castle11IB');
var castle11Chance = document.getElementById('castle11chance');
castle11DOM.addEventListener('click', function(){
    attackCastle(castle11, castle11.manpower, castle11DOM);
});

var castle12 = {
    manpower: 3050,
    isDef: false,
    addFoodPS: 200,
    addGoldPS: 60
}
var castle12DOM = document.getElementById('castle12');
var castle12IB = document.getElementById('castle12IB');
var castle12Chance = document.getElementById('castle12chance');
castle12DOM.addEventListener('click', function(){
    attackCastle(castle12, castle12.manpower, castle12DOM);
});

var castle13 = {
    manpower: 3550,
    isDef: false,
    addFoodPS: 230,
    addGoldPS: 65
}
var castle13DOM = document.getElementById('castle13');
var castle13IB = document.getElementById('castle13IB');
var castle13Chance = document.getElementById('castle13chance');
castle13DOM.addEventListener('click', function(){
    attackCastle(castle13, castle13.manpower, castle13DOM);
});

var castle14 = {
    manpower: 4100,
    isDef: false,
    addFoodPS: 265,
    addGoldPS: 80
}
var castle14DOM = document.getElementById('castle14');
var castle14IB = document.getElementById('castle14IB');
var castle14Chance = document.getElementById('castle14chance');
castle14DOM.addEventListener('click', function(){
    attackCastle(castle14, castle14.manpower, castle14DOM);
});

var castle15 = {
    manpower: 4800,
    isDef: false,
    addFoodPS: 350,
    addGoldPS: 100
}
var castle15DOM = document.getElementById('castle15');
var castle15IB = document.getElementById('castle15IB');
var castle15Chance = document.getElementById('castle15chance');
castle15DOM.addEventListener('click', function(){
    attackCastle(castle15, castle15.manpower, castle15DOM);
});

var castle16 = {
    manpower: 5400,
    isDef: false,
    addFoodPS: 450,
    addGoldPS: 120
}
var castle16DOM = document.getElementById('castle16');
var castle16IB = document.getElementById('castle16IB');
var castle16Chance = document.getElementById('castle16chance');
castle16DOM.addEventListener('click', function(){
    attackCastle(castle16, castle16.manpower, castle16DOM);
});

var castle17 = {
    manpower: 5800,
    isDef: false,
    addFoodPS: 560,
    addGoldPS: 140
}
var castle17DOM = document.getElementById('castle17');
var castle17IB = document.getElementById('castle17IB');
var castle17Chance = document.getElementById('castle17chance');
castle17DOM.addEventListener('click', function(){
    attackCastle(castle17, castle17.manpower, castle17DOM);
});

var castle18 = {
    manpower: 6400,
    isDef: false,
    addFoodPS: 700,
    addGoldPS: 160
}
var castle18DOM = document.getElementById('castle18');
var castle18IB = document.getElementById('castle18IB');
var castle18Chance = document.getElementById('castle18chance');
castle18DOM.addEventListener('click', function(){
    attackCastle(castle18, castle18.manpower, castle18DOM);
});

var castle19 = {
    manpower: 7100,
    isDef: false,
    addFoodPS: 900,
    addGoldPS: 175
}
var castle19DOM = document.getElementById('castle19');
var castle19IB = document.getElementById('castle19IB');
var castle19Chance = document.getElementById('castle19chance');
castle19DOM.addEventListener('click', function(){
    attackCastle(castle19, castle19.manpower, castle19DOM);
});

var castle20 = {
    manpower: 8000,
    isDef: false,
    addFoodPS: 1200,
    addGoldPS: 195
}
var castle20DOM = document.getElementById('castle20');
var castle20IB = document.getElementById('castle20IB');
var castle20Chance = document.getElementById('castle20chance');
castle20DOM.addEventListener('click', function(){
    attackCastle(castle20, castle20.manpower, castle20DOM);
});

var castle21 = {
    manpower: 9000,
    isDef: false,
    addFoodPS: 1350,
    addGoldPS: 205
}
var castle21DOM = document.getElementById('castle21');
var castle21IB = document.getElementById('castle21IB');
var castle21Chance = document.getElementById('castle21chance');
castle21DOM.addEventListener('click', function(){
    attackCastle(castle21, castle21.manpower, castle21DOM);
});

var castle22 = {
    manpower: 10100,
    isDef: false,
    addFoodPS: 1450,
    addGoldPS: 125
}
var castle22DOM = document.getElementById('castle22');
var castle22IB = document.getElementById('castle22IB');
var castle22Chance = document.getElementById('castle22chance');
castle22DOM.addEventListener('click', function(){
    attackCastle(castle22, castle22.manpower, castle22DOM);
});

var castle23 = {
    manpower: 11000,
    isDef: false,
    addFoodPS: 500,
    addGoldPS: 200
}
var castle23DOM = document.getElementById('castle23');
var castle23IB = document.getElementById('castle23IB');
var castle23Chance = document.getElementById('castle23chance');
castle23DOM.addEventListener('click', function(){
    attackCastle(castle23, castle23.manpower, castle23DOM);
});

var castle24 = {
    manpower: 12200,
    isDef: false,
    addFoodPS: 700,
    addGoldPS: 210
}
var castle24DOM = document.getElementById('castle24');
var castle24IB = document.getElementById('castle24IB');
var castle24Chance = document.getElementById('castle24chance');
castle24DOM.addEventListener('click', function(){
    attackCastle(castle24, castle24.manpower, castle24DOM);
});

var castle25 = {
    manpower: 13500,
    isDef: false,
    addFoodPS: 750,
    addGoldPS: 215
}
var castle25DOM = document.getElementById('castle25');
var castle25IB = document.getElementById('castle25IB');
var castle25Chance = document.getElementById('castle25chance');
castle25DOM.addEventListener('click', function(){
    attackCastle(castle25, castle25.manpower, castle25DOM);
});

var castle26 = {
    manpower: 15000,
    isDef: false,
    addFoodPS: 900,
    addGoldPS: 220
}
var castle26DOM = document.getElementById('castle26');
var castle26IB = document.getElementById('castle26IB');
var castle26Chance = document.getElementById('castle26chance');
castle26DOM.addEventListener('click', function(){
    attackCastle(castle26, castle26.manpower, castle26DOM);
});

var castle27 = {
    manpower: 17000,
    isDef: false,
    addFoodPS: 1050,
    addGoldPS: 210
}
var castle27DOM = document.getElementById('castle27');
var castle27IB = document.getElementById('castle27IB');
var castle27Chance = document.getElementById('castle27chance');
castle27DOM.addEventListener('click', function(){
    attackCastle(castle27, castle27.manpower, castle27DOM);
});

var castle28 = {
    manpower: 19000,
    isDef: false,
    addFoodPS: 1050,
    addGoldPS: 260
}
var castle28DOM = document.getElementById('castle28');
var castle28IB = document.getElementById('castle28IB');
var castle28Chance = document.getElementById('castle28chance');
castle28DOM.addEventListener('click', function(){
    attackCastle(castle28, castle28.manpower, castle28DOM);
});

var castle29 = {
    manpower: 21500,
    isDef: false,
    addFoodPS: 1150,
    addGoldPS: 290
}
var castle29DOM = document.getElementById('castle29');
var castle29IB = document.getElementById('castle29IB');
var castle29Chance = document.getElementById('castle29chance');
castle29DOM.addEventListener('click', function(){
    attackCastle(castle29, castle29.manpower, castle29DOM);
});

var castle30 = {
    manpower: 24000,
    isDef: false,
    addFoodPS: 1200,
    addGoldPS: 330
}
var castle30DOM = document.getElementById('castle30');
var castle30IB = document.getElementById('castle30IB');
var castle30Chance = document.getElementById('castle30chance');
castle30DOM.addEventListener('click', function(){
    attackCastle(castle30, castle30.manpower, castle30DOM);
});

/*RESET_GAME*/
function reset(){
    window.clearInterval();
    window.localStorage.clear();
    window.clearInterval();
    location.reload();
};
document.getElementById('resetGame').addEventListener('click', function(){
    reset();
});
/*END_RESET_GAME*/

/*END_CASTLES*/

/*BARBARIANS*/
var power = 0;
function barbarianChance() {
    power = 0;
    for (i = 1; i<=30; i++){
        if ( this["castle" + i].isDef ){
            power = power + 1;
        }
        console.log(power);
    }
};

function barbarianAttack(){
    power = power * 10 + Math.floor(goldPS * 0.05);
    var chance = Number(defSoldier.amount) / Number(power);
    var szut = Number(Math.random().toFixed(2));
    if (chance < szut) {
        var killHolder =  Math.floor(defSoldier.amount * (Math.random() * 0.50) + 0.20);
        defSoldier.amount = defSoldier.amount - killHolder;
        defSoldierAmount.innerHTML = defSoldier.amount;
        
        foodPS = foodPS + (defSoldier.eatFoodPS * killHolder);
        foodPSDOM.innerHTML = foodPS;
        
        var stealFood = Math.floor(food * (Math.random() * 0.20) + 0.10);
        food = food - stealFood;
        foodDOM.innerHTML = food;
        
        var stealGold =  Math.floor(gold * (Math.random() * 0.20) + 0.10);
        gold = gold - stealGold;
        goldDOM.innerHTML = gold;
        
        castleAlertBox( "Barbarians WON! You lost " + killHolder.toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                }) + " defensive soldiers, " + stealFood.toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                }) + " food and " + stealGold.toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                }) + " gold."); 
    }else{
        var killHolder = Math.ceil(defSoldier.amount * 0.2);
        defSoldier.amount = defSoldier.amount - killHolder;
        defSoldierAmount.innerHTML = defSoldier.amount;
        
        foodPS = foodPS + (defSoldier.eatFoodPS * killHolder);
        foodPSDOM.innerHTML = foodPS;
        
        castleAlertBox("Barbarians LOST, but " + killHolder + " defensive soldiers died...");
    }
    
}

var timer;
function timerF(sec, display) {
  timer = sec;
  setInterval(function(){
  	var minutes = parseInt( timer / 60, 10 );
  	var seconds = parseInt( timer % 60, 10 );
    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    display.innerHTML = minutes + ":" + seconds;
    
    if ( --timer < 0 ){
        barbarianChance();
        barbarianAttack();
        timer = Math.floor(Math.random() * 180) + 180 ;
    }
  }, 1000)
}

timerF(360, document.getElementById("timer"));


/*END_BARBARIANS*/

/*LOCAL_STORAGE_SECTION!*/

    /*FOOD_LOCAL*/
        if (localStorage.foodCookie >= food) {
            food = Number(localStorage.foodCookie);
            foodDOM.innerHTML = food.toFixed(0);
        }
    /*END_FOOD_LOCAL*/

    /*GOLD_LOCAL*/
        if(localStorage.goldCookie >= gold){
            gold = Number(localStorage.goldCookie);
            goldDOM.innerHTML = gold;
        }
    /*END_GOLD_LOCAL*/
    
    /*meansOfPayment_LOCAL_INTERVAL*/

        var cookieINT;
        function cookieInterval(){
            localStorage.foodCookie = food;
            foodDOM.innerHTML = food.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                                });
            localStorage.goldCookie = gold;
            goldDOM.innerHTML = gold.toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                                });
            clearInterval(cookieINT);
        };
        setInterval(cookieInterval, 1000);
    /*END_meansOfPayment_LOCAL_INTERVAL*/

    /*FOOD_PS_LOCAL*/
        if(localStorage.foodPS >= foodPS){
            foodPS = Number(localStorage.foodPS);
            foodPSDOM.innerHTML = foodPS;
        }
        
        var foodPSINT;
        function foodPSInterval(){
            localStorage.foodPS = foodPS;
            foodPSDOM.innerHTML = foodPS.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(foodPSINT);
        }
        setInterval(foodPSInterval, 1000);
    /*END_FOOD_PS_LOCAL*/

    /*GOLD_PS_LOCAL*/
        if( localStorage.goldPS >= goldPS ){
            goldPS = Number(localStorage.goldPS);
            goldPSDOM.innerHTML = goldPS;
        }
    
        var goldPSINT;
        function goldPSInterval(){
            localStorage.goldPS = goldPS;
            goldPSDOM.innerHTML = goldPS.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(goldPSINT);
        }
        setInterval(goldPSInterval, 1000);
    /*END_GOLD_PS_LOCAL*/
    
    /*SOLDIERS_LOCAL*/
        if( localStorage.soldierAmount >= soldier.amount ){
            soldier.amount = Number(localStorage.soldierAmount);
            soldierAmount.innerHTML = soldier.amount;
        }

        var soldierINT;
        function soldierInterval(){
            localStorage.soldierAmount = soldier.amount;
            soldierAmount.innerHTML = soldier.amount;
            clearInterval(soldierINT);
        }
        setInterval(soldierInterval, 1000);
    /*END_SOLDIERS_LOCAL*/

/*SOLDIER_COST_LOCAL*/
    if( localStorage.soldierCost <= soldier.price){
        soldier.price = Number(localStorage.soldierCost);
        soldierGoldPrice.innerHTML = soldier.price;
    }
    
    var soldierCostINT;
    function soldierCostInterval(){
        localStorage.soldierCost = soldier.price;
        soldierGoldPrice.innerHTML = soldier.price;
        clearInterval(soldierCostINT);
    }
    setInterval(soldierCostInterval, 1000);
/*END_SOLDIER_COST_LOCAL*/

    /*SOLDIER_EATS_PS_LOCAL*/
        if ( localStorage.soldierEatsPS <= soldier.eatFoodPS ){
            soldier.eatFoodPS = Number(localStorage.soldierEatsPS);
            soldierEatsPS.innerHTML = soldier.eatFoodPS;
        }
        
        var soldierEatsPSINT;
        function soldierEatsPSInterval(){
            localStorage.soldierEatsPS = soldier.eatFoodPS;
            soldierEatsPS.innerHTML = soldier.eatFoodPS;
            clearInterval(soldierEatsPSINT);
        }
        setInterval(soldierEatsPSInterval, 1000);
    /*END_SOLDIER_EATS_PS_LOCAL*/

    /*DEF_SOLDIERS_LOCAL*/
        if ( localStorage.defSoldiersAmount >= defSoldier.amount ){
            defSoldier.amount = Number(localStorage.defSoldiersAmount);
            defSoldierAmount.innerHTML = defSoldier.amount;
        }

        var defSoldiersINT;
        function defSoldiersInterval() {
            localStorage.defSoldiersAmount = defSoldier.amount;
            defSoldierAmount.innerHTML = defSoldier.amount;
            clearInterval(defSoldiersINT);
        }
        setInterval(defSoldiersInterval, 1000);
    /*END_DEF_SOLDIERS_LOCAL*/

    /*DEF_SOLDIER_COST_LOCAL*/
        if ( localStorage.defSoldierCost <= defSoldier.price ){
            defSoldier.price = Number(localStorage.defSoldierCost);
            defSoldierGoldPrice.innerHTML = defSoldier.price;
        }

        var defSoldierINT;
        function defSoldierInterval(){
            localStorage.defSoldierCost = defSoldier.price;
            defSoldierGoldPrice.innerHTML = defSoldier.price;
            clearInterval(defSoldierINT);
        }
        setInterval(defSoldierInterval, 1000);
    /*END_DEF_SOLDIER_COST_LOCAL*/

    /*DEF_SOLDIER_EATS_PS_LOCAL*/
        if ( localStorage.defSoldierEatsPS <= defSoldier.eatFoodPS ){
            defSoldier.eatFoodPS = Number(localStorage.defSoldierEatsPS);
            defSoldierEatsPS.innerHTML = defSoldier.eatFoodPS;
        }

        var defSoldierEatsPSINT;
        function defSoldierEatsPSInterval(){
            localStorage.defSoldierEatsPS = defSoldier.eatFoodPS;
            defSoldierEatsPS.innerHTML = defSoldier.eatFoodPS;
            clearInterval(defSoldierEatsPSINT);
        }
        setInterval(defSoldierEatsPSInterval, 1000);
    /*END_DEF_SOLDIER_EATS_PS_LOCAL*/

    /*BAKERY_LOCAL*/
        if ( (localStorage.bakeryAmount >= bakery.amount) || (localStorage.bakeryFoodPrice >= bakery.foodPrice) || (localStorage.bakeryGoldPrice >= bakery.goldPrice) )  {
            
        bakery.amount = Number(localStorage.bakeryAmount);
        bakeryAmount.innerHTML = bakery.amount;
            
        bakery.foodPrice = Number(localStorage.bakeryFoodPrice);
        bakeryFoodPrice.innerHTML = bakery.foodPrice;
            
        bakery.goldPrice = Number(localStorage.bakeryGoldPrice);
        bakeryGoldPrice.innerHTML = bakery.goldPrice;

        }

        var bakeryINT;
        function bakeryInterval(){
            localStorage.bakeryAmount = bakery.amount;
            bakeryAmount.innerHTML = bakery.amount;
            
            localStorage.bakeryFoodPrice = bakery.foodPrice;
            bakeryFoodPrice.innerHTML = bakery.foodPrice.toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.bakeryGoldPrice = bakery.goldPrice;
            bakeryGoldPrice.innerHTML = bakery.goldPrice.toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(bakeryINT);
        }
        setInterval(bakeryInterval, 1000);
    /*END_BAKERY_LOCAL*/

    /*CORN_FIELDS_LOCAL*/
        if ( (localStorage.cornFieldsAmount >= cornFields.amount) || (localStorage.cornFieldsFoodPrice >= cornFields.foodPrice) || (localStorage.cornFieldsGoldPrice >= cornFields.goldPrice) ) {
        
        cornFields.amount = Number(localStorage.cornFieldsAmount);    
        cornFieldsAmount.innerHTML = cornFields.amount;
            
        cornFields.foodPrice = Number(localStorage.cornFieldsFoodPrice);
        cornFieldsFoodPrice.innerHTML = cornFields.foodPrice.toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
        cornFields.goldPrice = Number(localStorage.cornFieldsGoldPrice);
        cornFieldsGoldPrice.innerHTML = cornFields.goldPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
        }
        
        var cornFieldsINT;
        function cornFieldsInterval(){
            localStorage.cornFieldsAmount = cornFields.amount;
            cornFieldsAmount.innerHTML = cornFields.amount;
            
            localStorage.cornFieldsFoodPrice = cornFields.foodPrice;
            cornFieldsFoodPrice.innerHTML = cornFields.foodPrice.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });;
            
            localStorage.cornFieldsGoldPrice = cornFields.goldPrice;
            cornFieldsGoldPrice.innerHTML = cornFields.goldPrice.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });;
            clearInterval(cornFieldsINT);
        }
        setInterval(cornFieldsInterval, 1000);
    /*END_CORN_FIELDS_LOCAL*/

    /*CATTLE_LOCAL*/
        if ( (localStorage.cattleAmount >= cattle.amount) || (localStorage.cattleFoodPrice >= cattle.foodPrice) || (localStorage.cattleGoldPrice >= cattle.goldPrice) ){
        
        cattle.amount = Number(localStorage.cattleAmount);
        cattleAmount.innerHTML = cattle.amount;
            
        cattle.foodPrice = Number(localStorage.cattleFoodPrice);
        cattleFoodPrice.innerHTML = cattle.foodPrice;
            
        cattle.goldPrice = Number(localStorage.cattleGoldPrice);
        cattleGoldPrice.innerHTML = cattle.goldPrice;
        }
    
        var cattleINT;
        function cattleInterval(){
            localStorage.cattleAmount = cattle.amount;
            cattleAmount.innerHTML = cattle.amount;
            
            localStorage.cattleFoodPrice = cattle.foodPrice;
            cattleFoodPrice.innerHTML = cattle.foodPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });;
            
            localStorage.cattleGoldPrice = cattle.goldPrice;
            cattleGoldPrice.innerHTML = cattle.goldPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });;
            clearInterval(cattleINT);
        }
        setInterval(cattleInterval, 1000);
    /*END_CATTLE_LOCAL*/

    /*HUNTING_LOCAL*/
        if ( (localStorage.huntingAmount >= hunting.amount) || (localStorage.huntingFoodPrice >= hunting.foodPrice) || (localStorage.huntingGoldPrice >= hunting.goldPrice) ) {
        
        hunting.amount = Number(localStorage.huntingAmount);    
        huntingAmount.innerHTML = hunting.amount;
            
        hunting.foodPrice = Number(localStorage.huntingFoodPrice);
        huntingFoodPrice.innerHTML = hunting.foodPrice;;
            
        hunting.goldPrice = Number(localStorage.huntingGoldPrice);
        huntingGoldPrice.innerHTML = hunting.goldPrice;
        }

        var huntingINT;
        function huntingInterval(){
            localStorage.huntingAmount = hunting.amount;
            huntingAmount.innerHTML = hunting.amount;
            
            localStorage.huntingFoodPrice = hunting.foodPrice;
            huntingFoodPrice.innerHTML = hunting.foodPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.huntingGoldPrice = hunting.goldPrice;
            huntingGoldPrice.innerHTML = hunting.goldPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(huntingINT);
        }
        setInterval(huntingInterval, 1000);
    /*END_HUNTING_LOCAL*/

    /*SERFDOM_LOCAL*/
        if ( (localStorage.serfdomAmount >= serfdom.amount) || (localStorage.serfdomFoodPrice >= serfdom.foodPrice) || (localStorage.serfdomGoldPrice >= serfdom.goldPrice) ){
            
        serfdom.amount = Number(localStorage.serfdomAmount);
        serfdomAmount.innerHTML = serfdom.amount;
            
        serfdom.foodPrice = Number(localStorage.serfdomFoodPrice); 
        serfdomFoodPrice.innerHTML = serfdom.foodPrice;
            
        serfdom.goldPrice = Number(localStorage.serfdomGoldPrice);
        serfdomGoldPrice.innerHTML = serfdom.goldPrice;
        }
    
        var serfdomINT;
        function serfdomInterval(){
            localStorage.serfdomAmount = serfdom.amount;
            serfdomAmount.innerHTML = serfdom.amount;
            
            localStorage.serfdomFoodPrice = serfdom.foodPrice;
            serfdomFoodPrice.innerHTML = serfdom.foodPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.serfdomGoldPrice = serfdom.goldPrice;
            serfdomGoldPrice.innerHTML = serfdom.goldPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(serfdomINT);
        }
        setInterval(serfdomInterval, 1000);
    /*END_SERFDOM_LOCAL*/

    /*VEGETABLES_LOCAL*/
        if ( (localStorage.vegetablesAmount >= vegetables.amount) || (localStorage.vegetablesFoodPrice >= vegetables.foodPrice) || (localStorage.vegetablesGoldPrice >= vegetables.goldPrice) ){
            
            vegetables.amount = Number(localStorage.vegetablesAmount);
            vegetablesAmount.innerHTML = vegetables.amount;
            
            vegetables.foodPrice = Number(localStorage.vegetablesFoodPrice);
            vegetablesFoodPrice.innerHTML = vegetables.foodPrice;
            
            vegetables.goldPrice = Number(localStorage.vegetablesGoldPrice);
            vegetablesGoldPrice.innerHTML = vegetables.goldPrice;
        }

        var vegetablesINT;
        function vegetablesInterval(){
            localStorage.vegetablesAmount = vegetables.amount;
            vegetablesAmount.innerHTML = vegetables.amount;
            
            localStorage.vegetablesFoodPrice = vegetables.foodPrice;
            vegetablesFoodPrice.innerHTML = vegetables.foodPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.vegetablesGoldPrice = vegetables.goldPrice;
            vegetablesGoldPrice.innerHTML = vegetables.goldPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(vegetablesINT);
        }
        setInterval(vegetablesInterval, 1000);
    /*END_VEGETABLES_LOCAL*/

    /*DAIRY_LOCAL*/
        if( (localStorage.dairyAmount >= dairy.amount) || (localStorage.dairyFoodPrice >= dairy.foodPrice) || (localStorage.dairyGoldPrice >= dairy.goldPrice) ){
            
            dairy.amount = Number(localStorage.dairyAmount);
            dairyAmount.innerHTML = dairy.amount;
            
            dairy.foodPrice = Number(localStorage.dairyFoodPrice);
            dairyFoodPrice.innerHTML = dairy.foodPrice;
            
            dairy.goldPrice = Number(localStorage.dairyGoldPrice);
            dairyGoldPrice.innerHTML = dairy.goldPrice;
        }
    
        var dairyINT;
        function dairyInterval(){
            localStorage.dairyAmount = dairy.amount;
            dairyAmount.innerHTML = dairy.amount;
            
            localStorage.dairyFoodPrice = dairy.foodPrice;
            dairyFoodPrice.innerHTML = dairy.foodPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.dairyGoldPrice = dairy.goldPrice;
            dairyGoldPrice.innerHTML = dairy.goldPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(dairyINT);
        }
        setInterval(dairyInterval, 1000);
    /*END_DAIRY_LOCAL*/

    /*TOOLS_LOCAL*/
        if( (localStorage.toolsAmount >= tools.amount) || (localStorage.toolsFoodPrice >= tools.foodPrice) || (localStorage.toolsGoldPrice >= tools.goldPrice) ){
            
            tools.amount = Number(localStorage.toolsAmount);
            toolsAmount.innerHTML = tools.amount;
            
            tools.foodPrice = Number(localStorage.toolsFoodPrice);
            toolsFoodPrice.innerHTML = tools.foodPrice;
            
            tools.goldPrice = Number(localStorage.toolsGoldPrice);
            toolsGoldPrice.innerHTML = tools.goldPrice;
        }
        
        var toolsINT;
        function toolsInterval(){
            
            localStorage.toolsAmount = tools.amount;
            toolsAmount.innerHTML = tools.amount;
            
            localStorage.toolsFoodPrice = tools.foodPrice;
            toolsFoodPrice.innerHTML = tools.foodPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.toolsGoldPrice = tools.goldPrice;
            toolsGoldPrice.innerHTML = tools.goldPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(toolsINT);
        }
        setInterval(toolsInterval, 1000);
    /*END_TOOLS_LOCAL*/

    /*FISHERMAN_LOCAL*/
        if( (localStorage.fishermanAmount >= fisherman.amount) || (localStorage.fishermanFoodPrice >= fisherman.foodPrice) || (localStorage.fishermanGoldPrice >= fisherman.goldPrice) ){
            
            fisherman.amount = Number(localStorage.fishermanAmount);
            fishermanAmount.innerHTML = fisherman.amount;
            
            fisherman.foodPrice = Number(localStorage.fishermanFoodPrice);
            fishermanFoodPrice.innerHTML = fisherman.foodPrice;
            
            fisherman.goldPrice = Number(localStorage.fishermanGoldPrice);
            fishermanGoldPrice.innerHTML = fisherman.goldPrice;
        }

        var fishermanINT;
        function fishermanInterval(){
            
            localStorage.fishermanAmount = fisherman.amount;
            fishermanAmount.innerHTML = fisherman.amount;
            
            localStorage.fishermanFoodPrice = fisherman.foodPrice;
            fishermanFoodPrice.innerHTML = fisherman.foodPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.fishermanGoldPrice = fisherman.goldPrice;
            fishermanGoldPrice.innerHTML = fisherman.goldPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(fishermanINT);
        }
        setInterval(fishermanInterval, 1000);
    /*END_FISHERMAN_LOCAL*/

    /*EDUCATED_FARMERS_LOCAL*/
        if( (localStorage.educatedFarmersAmount >= educatedFarmers.amount) || (localStorage.educatedFarmersFoodPrice >= educatedFarmers.foodPrice) || (localStorage.educatedFarmersGoldPrice >= educatedFarmers.goldPrice) ){
            
            educatedFarmers.amount = Number(localStorage.educatedFarmersAmount);
            educatedFarmersAmount.innerHTML = educatedFarmers.amount;
            
            educatedFarmers.foodPrice = Number(localStorage.educatedFarmersFoodPrice);
            educatedFarmersFoodPrice.innerHTML = educatedFarmers.foodPrice;
            
            educatedFarmers.goldPrice = Number(localStorage.educatedFarmersGoldPrice);
            educatedFarmersGoldPrice.innerHTML = educatedFarmers.goldPrice;
        }
        
        var educatedFarmersINT;
        function educatedFarmersInterval(){
            
            localStorage.educatedFarmersAmount = educatedFarmers.amount;
            educatedFarmersAmount.innerHTML = educatedFarmers.amount;
            
            localStorage.educatedFarmersFoodPrice = educatedFarmers.foodPrice;
            educatedFarmersFoodPrice.innerHTML = educatedFarmers.foodPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.educatedFarmersGoldPrice = educatedFarmers.goldPrice;
            educatedFarmersGoldPrice.innerHTML = educatedFarmers.goldPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(educatedFarmersINT);
        }
        setInterval(educatedFarmersInterval, 1000);
    /*END_EDUCATED_FARMERS_LOCAL*/

    /*MONEY_LOCAL*/
        if ( (localStorage.moneyAmount >= money.amount) || (localStorage.moneyFoodPrice >= money.foodPrice) || (localStorage.moneyGoldPrice >= money.goldPrice) ){
        
        money.amount = Number(localStorage.moneyAmount); 
        moneyAmount.innerHTML = money.amount;
        
        money.foodPrice = Number(localStorage.moneyFoodPrice);
        moneyFoodPrice.innerHTML = money.foodPrice;
        
        money.goldPrice = Number(localStorage.moneyGoldPrice);
        moneyGoldPrice.innerHTML = money.goldPrice;
        }

        var moneyINT;
        function moneyInterval(){
            localStorage.moneyAmount = money.amount;
            moneyAmount.innerHTML = money.amount;
            
            localStorage.moneyFoodPrice = money.foodPrice;
            moneyFoodPrice.innerHTML = money.foodPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.moneyGoldPrice = money.goldPrice;
            moneyGoldPrice.innerHTML = money.goldPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(moneyINT);
        }  
        setInterval(moneyInterval, 1000);
    /*END_MONEY_LOCAL*/
    
    /*TOWN_LOCAL*/
        if ( (localStorage.townAmount >= town.amount) || (localStorage.townFoodPrice >= town.foodPrice) || (localStorage.townGoldPrice >= town.goldPrice)){
            
        town.amount = Number(localStorage.townAmount);
        townAmount.innerHTML = town.amount;
            
        town.foodPrice = Number(localStorage.townFoodPrice);  
        townFoodPrice.innerHTML = town.foodPrice;
            
        town.goldPrice = Number(localStorage.townGoldPrice);
        townGoldPrice.innerHTML = town.goldPrice;
        }

        var townINT;
        function townInterval(){
            localStorage.townAmount = town.amount;
            townAmount.innerHTML = town.amount;
            
            localStorage.townFoodPrice = town.foodPrice;
            townFoodPrice.innerHTML = town.foodPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.townGoldPrice = town.goldPrice;
            townGoldPrice.innerHTML = town.goldPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(townINT);
        }
        setInterval(townInterval, 1000);
    /*END_TOWN_LOCAL*/

    /*TRADE_LOCAL*/
        if ( (localStorage.tradeAmount >= trade.amount) || (localStorage.tradeFoodPrice >= trade.foodPrice) || (localStorage.tradeGoldPrice >= trade.goldPrice) ){

        trade.amount = Number(localStorage.tradeAmount);
        tradeAmount.innerHTML = trade.amount;
            
        trade.foodPrice = Number(localStorage.tradeFoodPrice);
        tradeFoodPrice.innerHTML = trade.foodPrice;
            
        trade.goldPrice = Number(localStorage.tradeGoldPrice);
        tradeGoldPrice.innerHTML = trade.goldPrice;
        }

        var tradeINT;
        function tradeInterval(){
            localStorage.tradeAmount = trade.amount;
            tradeAmount.innerHTML = trade.amount;
            
            localStorage.tradeFoodPrice = trade.foodPrice;
            tradeFoodPrice.innerHTML = trade.foodPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.tradeGoldPrice = trade.goldPrice;
            tradeGoldPrice.innerHTML = trade.goldPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(tradeINT);
        }
        setInterval(tradeInterval, 1000);
    /*END_TRADE_LOCAL*/

    /*TAVERN_LOCAL*/
        if ( (localStorage.tavernAmount >= tavern.amount) || (localStorage.tavernFoodPrice >= tavern.foodPrice) || (localStorage.tavernGoldPrice >= tavern.goldPrice) ){
        
        tavern.amount = Number(localStorage.tavernAmount);
        tavernAmount.innerHTML = tavern.amount;
            
        tavern.foodPrice = Number(localStorage.tavernFoodPrice);
        tavernFoodPrice.innerHTML = tavern.foodPrice;
            
        tavern.goldPrice = Number(localStorage.tavernGoldPrice);
        tavernGoldPrice.innerHTML = tavern.goldPrice;
        }

        var tavernINT;
        function tavernInterval(){
            localStorage.tavernAmount = tavern.amount;
            tavernAmount.innerHTML = tavern.amount;
            
            localStorage.tavernFoodPrice = tavern.foodPrice;
            tavernFoodPrice.innerHTML = tavern.foodPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.tavernGoldPrice = tavern.goldPrice;
            tavernGoldPrice.innerHTML = tavern.goldPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(tavernINT);
        }
        setInterval(tavernInterval, 1000);
    /*END_TAVERN_LOCAL*/

    /*ENTERTAINMENT_LOCAL*/
        if ( (localStorage.entertainmentAmount >= entertainment.amount) || (localStorage.entertainmentFoodPrice >= entertainment.foodPrice) || (localStorage.entertainmentGoldPrice >= entertainment.goldPrice) ){
        
        entertainment.amount = Number(localStorage.entertainmentAmount);
        entertainmentAmount.innerHTML = entertainment.amount;
        
        entertainment.foodPrice = Number(localStorage.entertainmentFoodPrice);
        entertainmentFoodPrice.innerHTML = entertainment.foodPrice;
            
        entertainment.goldPrice = Number(localStorage.entertainmentGoldPrice);
        entertainmentGoldPrice.innerHTML = entertainment.goldPrice;
        }

        var entertainmentINT;
        function entertainmentInterval(){
            localStorage.entertainmentAmount = entertainment.amount;
            entertainmentAmount.innerHTML = entertainment.amount;
            
            localStorage.entertainmentFoodPrice = entertainment.foodPrice;
            entertainmentFoodPrice.innerHTML = entertainment.foodPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.entertainmentGoldPrice = entertainment.goldPrice;
            entertainmentGoldPrice.innerHTML = entertainment.goldPrice.toLocaleString(undefined ,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(entertainmentINT);
        }
        setInterval(entertainmentInterval, 1000);
    /*END_ENTERTAINMENT_LOCAL*/

    /*BETTER_ECONOMY_LOCAL*/
        if( (localStorage.betterEconomyAmount >= betterEconomy.amount) || (localStorage.betterEconomyFoodPrice >= betterEconomy.foodPrice) || (localStorage.betterEconomyGoldPrice >= betterEconomy.goldPrice) ){
            
            betterEconomy.amount = Number(localStorage.betterEconomyAmount);
            betterEconomyAmount.innerHTML = betterEconomy.amount;
            
            betterEconomy.foodPrice = Number(localStorage.betterEconomyFoodPrice);
            betterEconomyFoodPrice.innerHTML = betterEconomy.foodPrice;
            
            betterEconomy.goldPrice = Number(localStorage.betterEconomyGoldPrice);
            betterEconomyGoldPrice.innerHTML = betterEconomy.goldPrice;
        }

        var betterEconomyINT;
        function betterEconomyInterval(){
            
            localStorage.betterEconomyAmount = betterEconomy.amount;
            betterEconomyAmount.innerHTML = betterEconomy.amount;
            
            localStorage.betterEconomyFoodPrice = betterEconomy.foodPrice;
            betterEconomyFoodPrice.innerHTML = betterEconomy.foodPrice.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.betterEconomyGoldPrice = betterEconomy.goldPrice;
            betterEconomyGoldPrice.innerHTML = betterEconomy.goldPrice.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(betterEconomyINT);
        }
        setInterval(betterEconomyInterval, 1000);
    /*END_BETTER_ECONOMY_LOCAL*/

    /*TAXES_LOCAL*/
        if( (localStorage.taxesAmount >= taxes.amount) || (localStorage.taxesFoodPrice >= taxes.foodPrice) || (localStorage.taxesGoldPrice >= taxes.goldPrice) ){
            
            taxes.amount = Number(localStorage.taxesAmount);
            taxesAmount.innerHTML = taxes.amount;
            
            taxes.foodPrice = Number(localStorage.taxesFoodPrice);
            taxesFoodPrice.innerHTML = taxes.foodPrice;
            
            taxes.goldPrice = Number(localStorage.taxesGoldPrice);
            taxesGoldPrice.innerHTML = taxes.goldPrice;
        }

        var taxesINT;
        function taxesInterval(){
            localStorage.taxesAmount = taxes.amount;
            taxesAmount.innerHTML = taxes.amount;
            
            localStorage.taxesFoodPrice = taxes.foodPrice;
            taxesFoodPrice.innerHTML = taxes.foodPrice.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.taxesGoldPrice = taxes.goldPrice;
            taxesGoldPrice.innerHTML = taxes.goldPrice.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(taxesINT);
        }
        setInterval(taxesInterval, 1000);
    /*END_TAXES_LOCAL*/

    /*EDUCATION_LOCAL*/
        if( (localStorage.educationAmount >= education.amount) || (localStorage.educationFoodPrice >= education.foodPrice) || (localStorage.educationGoldPrice >= education.goldPrice) ){
            
            education.amount = Number(localStorage.educationAmount);
            educationAmount.innerHTML = education.amount;
            
            education.foodPrice = Number(localStorage.educationFoodPrice);
            educationFoodPrice.innerHTML = education.foodPrice;
            
            education.goldPrice = Number(localStorage.educationGoldPrice);
            educationGoldPrice.innerHTML = education.goldPrice;
        }

        var educationINT;
        function educationInterval(){
            
            localStorage.educationAmount = education.amount;
            educatedFarmersAmount.innerHTML = education.amount;
            
            localStorage.educationFoodPrice = education.foodPrice;
            educationFoodPrice.innerHTML = education.foodPrice.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.educationGoldPrice = education.goldPrice;
            educationGoldPrice.innerHTML = education.goldPrice.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(educationINT);
        }
        setInterval(educationInterval, 1000);
    /*END_EDUCATION_LOCAL*/

    /*WEAPON_INDUSTRY_LOCAL*/
        if( (localStorage.weaponIndustryAmount >= weaponIndustry.amount) || (localStorage.weaponIndustryFoodPrice >= weaponIndustry.foodPrice) || (localStorage.weaponIndustryGoldPrice >= weaponIndustry.goldPrice) ){
            
            weaponIndustry.amount = Number(localStorage.weaponIndustryAmount);
            weaponIndustryAmount.innerHTML = weaponIndustry.amount;
            
            weaponIndustry.foodPrice = Number(localStorage.weaponIndustryFoodPrice);
            weaponIndustryFoodPrice.innerHTML = weaponIndustry.foodPrice;
            
            weaponIndustry.goldPrice = Number(localStorage.weaponIndustryGoldPrice);
            weaponIndustryGoldPrice.innerHTML = weaponIndustry.goldPrice;
        }

        var weaponIndustryINT;
        function weaponIndustryInterval(){
            
            localStorage.weaponIndustryAmount = weaponIndustry.amount;
            weaponIndustryAmount.innerHTML = weaponIndustry.amount;
            
            localStorage.weaponIndustryFoodPrice = weaponIndustry.foodPrice;
            weaponIndustryFoodPrice.innerHTML = weaponIndustry.foodPrice.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.weaponIndustryGoldPrice = weaponIndustry.goldPrice;
            weaponIndustryGoldPrice.innerHTML = weaponIndustry.goldPrice.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(weaponIndustryINT);
        }
        setInterval(weaponIndustryInterval, 1000);
    /*END_WEAPON_INDUSTRY_LOCAL*/
 /*G3T_JP2GMD*/
    /*BANK_LOCAL*/
        if( (localStorage.bankAmount >= bank.amount) || (localStorage.bankFoodPrice >= bank.foodPrice) || (localStorage.bankGoldPrice >= bank.goldPrice) ){
            
            bank.amount = Number(localStorage.bankAmount);
            bankAmount.innerHTML = bank.amount;
            
            bank.foodPrice = Number(localStorage.bankFoodPrice);
            bankFoodPrice.innerHTML = bank.foodPrice;
            
            
            bank.goldPrice = Number(localStorage.bankGoldPrice);
            bankGoldPrice.innerHTML = bank.goldPrice;
        }
    
        var bankINT;
        function bankInterval(){
            
            localStorage.bankAmount = bank.amount;
            bankAmount.innerHTML = bank.amount;
            
            localStorage.bankFoodPrice = bank.foodPrice;
            bankFoodPrice.innerHTML = bank.foodPrice.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            
            localStorage.bankGoldPrice = bank.goldPrice;
            bankGoldPrice.innerHTML = bank.goldPrice.toLocaleString(undefined,{
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                                });
            clearInterval(bankINT);
        }
        setInterval(bankInterval, 1000);
    /*END_BANK_LOCAL*/

    /*TRAINING_FIELD_LOCAL*/
        if( localStorage.trainingFieldIB === "true" ){
            trainingField.isBought = localStorage.trainingFieldIB;
            trainingFieldItem.style.display = "none";
        }
        
        var trainingFieldINT;
        function trainingFieldInterval(){
            localStorage.trainingFieldIB = trainingField.isBought;
            clearInterval(trainingFieldINT);
        };
        setInterval(trainingFieldInterval, 500);
    /*END_TRAINING_FIELD_LOCAL*/

    /*BARRACKS_LOCAL*/
        if (localStorage.barracksIB === "true") {
            barracks.isBought = localStorage.barracksIB;
            barracksItem.style.display = "none";
        }

        var barracksINT;
        function barracksInterval(){
            localStorage.barracksIB = barracks.isBought;
            clearInterval(barracksINT);
        }
        setInterval(barracksInterval, 1000);
    /*END_BARRACKS_LOCAL*/

    /*TACTICS_LOCAL*/
        if( localStorage.tacticsIB === "true" ) {
            tactics.isBought = localStorage.tacticsIB;
            tacticsItem.style.display = "none";
        }

        var tacticsINT;
        function tacticsInterval() {
            localStorage.tacticsIB = tactics.isBought;
            clearInterval(tacticsINT);
        }
        setInterval(tacticsInterval, 1000);
    /*END_TACTICS_LOCAL*/

    /*TRAINING_LOCAL*/
        if( localStorage.trainingIB === "true" ){
            training.isBought = localStorage.trainingIB;
            trainingItem.style.display = "none";
        }

        var trainingINT;
        function trainingIntreval(){
            localStorage.trainingIB = training.isBought;
            clearInterval(trainingINT);
        }
        setInterval(trainingIntreval, 1000);
    /*END_TRAINING_LOCAL*/

    /*EQUIPMENT_LOCAL*/
        if ( localStorage.equipmentIB === "true" ) {
            equipment.isBought = localStorage.equipmentIB;
            equipmentItem.style.display = "none";
        }

        var equipmentINT;
        function equipmentIntreval(){
            localStorage.equipmentIB = equipment.isBought;
            clearInterval(equipmentINT);
        }
        setInterval(equipmentIntreval, 1000);
    /*END_EQUIPMENT_LOCAL*/


    /*castle1_LOCAL*/
        if (localStorage.castle1 === "true"){
            castle1.isDef = localStorage.castle1;
            castle1DOM.style.opacity = 0.5;
            castle1DOM.style.pointerEvents = "none";
        }

        var castle1INT;
        function castle1Interval(){
            localStorage.castle1 = castle1.isDef;
            clearInterval(castle1INT);
        }
        setInterval(castle1Interval, 1000);
    /*END_castle1_LOCAL*/
    
    /*castle2_LOCAL*/
        if (localStorage.castle2 === "true"){
            castle2.isDef = localStorage.castle2;
            castle2DOM.style.opacity = 0.5;
            castle2DOM.style.pointerEvents = "none";
        }

        var castle2INT;
        function castle2Interval(){
            localStorage.castle2 = castle2.isDef;
            clearInterval(castle2INT);
        }
        setInterval(castle2Interval, 1000);
    /*END_castle2_LOCAL*/

    /*castle3_LOCAL*/
        if (localStorage.castle3 === "true"){
            castle3.isDef = localStorage.castle3;
            castle3DOM.style.opacity = 0.5;
            castle3DOM.style.pointerEvents = "none";
        }

        var castle3INT;
        function castle3Interval(){
            localStorage.castle3 = castle3.isDef;
            clearInterval(castle3INT);
        }
        setInterval(castle3Interval, 1000);
    /*END_castle3_LOCAL*/

    /*castle4_LOCAL*/
        if (localStorage.castle4 === "true"){
            castle4.isDef = localStorage.castle4;
            castle4DOM.style.opacity = 0.5;
            castle4DOM.style.pointerEvents = "none";
        }

        var castle4INT;
        function castle4Interval(){
            localStorage.castle4 = castle4.isDef;
            clearInterval(castle4INT);
        }
        setInterval(castle4Interval, 1000);
    /*END_castle4_LOCAL*/

    /*castle5_LOCAL*/
        if (localStorage.castle5 === "true"){
            castle5.isDef = localStorage.castle5;
            castle5DOM.style.opacity = 0.5;
            castle5DOM.style.pointerEvents = "none";
        }

        var castle5INT;
        function castle5Interval(){
            localStorage.castle5 = castle5.isDef;
            clearInterval(castle5INT);
        }
        setInterval(castle5Interval, 1000);
    /*END_castle5_LOCAL*/

    /*castle6_LOCAL*/
        if (localStorage.castle6 === "true"){
            castle6.isDef = localStorage.castle6;
            castle6DOM.style.opacity = 0.5;
            castle6DOM.style.pointerEvents = "none";
        }

        var castle6INT;
        function castle6Interval(){
            localStorage.castle6 = castle6.isDef;
            clearInterval(castle6INT);
        }
        setInterval(castle6Interval, 1000);
    /*END_castle6_LOCAL*/

    /*castle7_LOCAL*/
        if (localStorage.castle7 === "true"){
            castle7.isDef = localStorage.castle7;
            castle7DOM.style.opacity = 0.5;
            castle7DOM.style.pointerEvents = "none";
        }

        var castle7INT;
        function castle7Interval(){
            localStorage.castle7 = castle7.isDef;
            clearInterval(castle7INT);
        }
        setInterval(castle7Interval, 1000);
    /*END_castle7_LOCAL*/

    /*castle8_LOCAL*/
        if (localStorage.castle8 === "true"){
            castle8.isDef = localStorage.castle8;
            castle8DOM.style.opacity = 0.5;
            castle8DOM.style.pointerEvents = "none";
        }

        var castle8INT;
        function castle8Interval(){
            localStorage.castle8 = castle8.isDef;
            clearInterval(castle8INT);
        }
        setInterval(castle8Interval, 1000);
    /*END_castle8_LOCAL*/

    /*castle9_LOCAL*/
        if (localStorage.castle9 === "true"){
            castle9.isDef = localStorage.castle9;
            castle9DOM.style.opacity = 0.5;
            castle9DOM.style.pointerEvents = "none";
        }

        var castle9INT;
        function castle9Interval(){
            localStorage.castle9 = castle9.isDef;
            clearInterval(castle9INT);
        }
        setInterval(castle9Interval, 1000);
    /*END_castle9_LOCAL*/

    /*CASTLE10_LOCAL*/
        if (localStorage.castle10 === "true"){
            castle10.isDef = localStorage.castle10;
            castle10DOM.style.opacity = 0.5;
            castle10DOM.style.pointerEvents = "none";
        }

        var castle10INT;
        function castle10Interval(){
            localStorage.castle10 = castle10.isDef;
            clearInterval(castle10INT);
        }
        setInterval(castle10Interval, 1000);
    /*END_CASTLE10_LOCAL*/

    /*CASTLE11_LOCAL*/
        if (localStorage.castle11 === "true"){
            castle11.isDef = localStorage.castle11;
            castle11DOM.style.opacity = 0.5;
            castle11DOM.style.pointerEvents = "none";
        }

        var castle11INT;
        function castle11Interval(){
            localStorage.castle11 = castle11.isDef;
            clearInterval(castle11INT);
        }
        setInterval(castle11Interval, 1000);
    /*END_CASTLE11_LOCAL*/

    /*CASTLE12_LOCAL*/
        if (localStorage.castle12 === "true"){
            castle12.isDef = localStorage.castle12;
            castle12DOM.style.opacity = 0.5;
            castle12DOM.style.pointerEvents = "none";
        }

        var castle12INT;
        function castle12Interval(){
            localStorage.castle12 = castle12.isDef;
            clearInterval(castle12INT);
        }
        setInterval(castle12Interval, 1000);
    /*END_CASTLE12_LOCAL*/

    /*CASTLE13_LOCAL*/
        if (localStorage.castle13 === "true"){
            castle13.isDef = localStorage.castle13;
            castle13DOM.style.opacity = 0.5;
            castle13DOM.style.pointerEvents = "none";
        }

        var castle13INT;
        function castle13Interval(){
            localStorage.castle13 = castle13.isDef;
            clearInterval(castle13INT);
        }
        setInterval(castle13Interval, 1000);
    /*END_CASTLE13_LOCAL*/

    /*CASTLE14_LOCAL*/
        if (localStorage.castle14 === "true"){
            castle14.isDef = localStorage.castle14;
            castle14DOM.style.opacity = 0.5;
            castle14DOM.style.pointerEvents = "none";
        }

        var castle14INT;
        function castle14Interval(){
            localStorage.castle14 = castle14.isDef;
            clearInterval(castle14INT);
        }
        setInterval(castle14Interval, 1000);
    /*END_CASTLE14_LOCAL*/

    /*CASTLE15_LOCAL*/
        if (localStorage.castle15 === "true"){
            castle15.isDef = localStorage.castle15;
            castle15DOM.style.opacity = 0.5;
            castle15DOM.style.pointerEvents = "none";
        }

        var castle15INT;
        function castle15Interval(){
            localStorage.castle15 = castle15.isDef;
            clearInterval(castle15INT);
        }
        setInterval(castle15Interval, 1000);
    /*END_CASTLE15_LOCAL*/

    /*CASTLE16_LOCAL*/
        if (localStorage.castle16 === "true"){
            castle16.isDef = localStorage.castle16;
            castle16DOM.style.opacity = 0.5;
            castle16DOM.style.pointerEvents = "none";
        }

        var castle16INT;
        function castle16Interval(){
            localStorage.castle16 = castle16.isDef;
            clearInterval(castle16INT);
        }
        setInterval(castle16Interval, 1000);
    /*END_CASTLE16_LOCAL*/

    /*CASTLE17_LOCAL*/
        if (localStorage.castle17 === "true"){
            castle17.isDef = localStorage.castle17;
            castle17DOM.style.opacity = 0.5;
            castle17DOM.style.pointerEvents = "none";
        }

        var castle17INT;
        function castle17Interval(){
            localStorage.castle17 = castle17.isDef;
            clearInterval(castle17INT);
        }
        setInterval(castle17Interval, 1000);
    /*END_CASTLE17_LOCAL*/

    /*CASTLE18_LOCAL*/
        if (localStorage.castle18 === "true"){
            castle18.isDef = localStorage.castle18;
            castle18DOM.style.opacity = 0.5;
            castle18DOM.style.pointerEvents = "none";
        }

        var castle18INT;
        function castle18Interval(){
            localStorage.castle18 = castle18.isDef;
            clearInterval(castle18INT);
        }
        setInterval(castle18Interval, 1000);
    /*END_CASTLE18_LOCAL*/

    /*CASTLE19_LOCAL*/
        if (localStorage.castle19 === "true"){
            castle19.isDef = localStorage.castle19;
            castle19DOM.style.opacity = 0.5;
            castle19DOM.style.pointerEvents = "none";
        }

        var castle19INT;
        function castle19Interval(){
            localStorage.castle19 = castle19.isDef;
            clearInterval(castle19INT);
        }
        setInterval(castle19Interval, 1000);
    /*END_CASTLE19_LOCAL*/

    /*CASTLE20_LOCAL*/
        if (localStorage.castle20 === "true"){
            castle20.isDef = localStorage.castle20;
            castle20DOM.style.opacity = 0.5;
            castle20DOM.style.pointerEvents = "none";
        }

        var castle20INT;
        function castle20Interval(){
            localStorage.castle20 = castle20.isDef;
            clearInterval(castle20INT);
        }
        setInterval(castle20Interval, 1000);
    /*END_CASTLE20_LOCAL*/

    /*CASTLE21_LOCAL*/
        if (localStorage.castle21 === "true"){
            castle21.isDef = localStorage.castle21;
            castle21DOM.style.opacity = 0.5;
            castle21DOM.style.pointerEvents = "none";
        }

        var castle21INT;
        function castle21Interval(){
            localStorage.castle21 = castle21.isDef;
            clearInterval(castle21INT);
        }
        setInterval(castle21Interval, 1000);
    /*END_CASTLE21_LOCAL*/

    /*CASTLE22_LOCAL*/
        if (localStorage.castle22 === "true"){
            castle22.isDef = localStorage.castle22;
            castle22DOM.style.opacity = 0.5;
            castle22DOM.style.pointerEvents = "none";
        }

        var castle22INT;
        function castle22Interval(){
            localStorage.castle22 = castle22.isDef;
            clearInterval(castle22INT);
        }
        setInterval(castle22Interval, 1000);
    /*END_CASTLE22_LOCAL*/

    /*CASTLE23_LOCAL*/
        if (localStorage.castle23 === "true"){
            castle23.isDef = localStorage.castle23;
            castle23DOM.style.opacity = 0.5;
            castle23DOM.style.pointerEvents = "none";
        }

        var castle23INT;
        function castle23Interval(){
            localStorage.castle23 = castle23.isDef;
            clearInterval(castle23INT);
        }
        setInterval(castle23Interval, 1000);
    /*END_CASTLE23_LOCAL*/

    /*CASTLE24_LOCAL*/
        if (localStorage.castle24 === "true"){
            castle24.isDef = localStorage.castle24;
            castle24DOM.style.opacity = 0.5;
            castle24DOM.style.pointerEvents = "none";
        }

        var castle24INT;
        function castle24Interval(){
            localStorage.castle24 = castle24.isDef;
            clearInterval(castle24INT);
        }
        setInterval(castle24Interval, 1000);
    /*END_CASTLE24_LOCAL*/

    /*CASTLE25_LOCAL*/
        if (localStorage.castle25 === "true"){
            castle25.isDef = localStorage.castle25;
            castle25DOM.style.opacity = 0.5;
            castle25DOM.style.pointerEvents = "none";
        }

        var castle25INT;
        function castle25Interval(){
            localStorage.castle25 = castle25.isDef;
            clearInterval(castle25INT);
        }
        setInterval(castle25Interval, 1000);
    /*END_CASTLE25_LOCAL*/

    /*CASTLE26_LOCAL*/
        if (localStorage.castle26 === "true"){
            castle26.isDef = localStorage.castle26;
            castle26DOM.style.opacity = 0.5;
            castle26DOM.style.pointerEvents = "none";
        }

        var castle26INT;
        function castle26Interval(){
            localStorage.castle26 = castle26.isDef;
            clearInterval(castle26INT);
        }
        setInterval(castle26Interval, 1000);
    /*END_CASTLE26_LOCAL*/

    /*CASTLE27_LOCAL*/
        if (localStorage.castle27 === "true"){
            castle27.isDef = localStorage.castle27;
            castle27DOM.style.opacity = 0.5;
            castle27DOM.style.pointerEvents = "none";
        }

        var castle27INT;
        function castle27Interval(){
            localStorage.castle27 = castle27.isDef;
            clearInterval(castle27INT);
        }
        setInterval(castle27Interval, 1000);
    /*END_CASTLE27_LOCAL*/

    /*CASTLE28_LOCAL*/
        if (localStorage.castle28 === "true"){
            castle28.isDef = localStorage.castle28;
            castle28DOM.style.opacity = 0.5;
            castle28DOM.style.pointerEvents = "none";
        }

        var castle28INT;
        function castle28Interval(){
            localStorage.castle28 = castle28.isDef;
            clearInterval(castle28INT);
        }
        setInterval(castle28Interval, 1000);
    /*END_CASTLE28_LOCAL*/

    /*CASTLE29_LOCAL*/
        if (localStorage.castle29 === "true"){
            castle29.isDef = localStorage.castle29;
            castle29DOM.style.opacity = 0.5;
            castle29DOM.style.pointerEvents = "none";
        }

        var castle29INT;
        function castle29Interval(){
            localStorage.castle29 = castle29.isDef;
            clearInterval(castle29INT);
        }
        setInterval(castle29Interval, 1000);
    /*END_CASTLE29_LOCAL*/

    /*CASTLE30_LOCAL*/
        if (localStorage.castle30 === "true"){
            castle30.isDef = localStorage.castle30;
            castle30DOM.style.opacity = 0.5;
            castle30DOM.style.pointerEvents = "none";
        }

        var castle30INT;
        function castle30Interval(){
            localStorage.castle30 = castle30.isDef;
            clearInterval(castle30INT);
        }
        setInterval(castle30Interval, 1000);
    /*END_CASTLE30_LOCAL*/
    /*armyCard_LOCAL*/

    if( localStorage.enterLocal === "true" ){
        document.getElementById('enter').style.display="none";
    };
    
    if ( localStorage.timerLocal <= timer ){
        timer = Number(localStorage.timerLocal);
        
    }

    var timerINT;
    function timerInterval(){
        localStorage.timerLocal = timer;
        
        clearInterval(timerINT);
    }
    setInterval(timerInterval, 100);
/*END_LOCAL_STORAGE_SECTION!*/