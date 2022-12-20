let priceVisability = false;
let priceDisplay = "none";
let animationName;

function priceSectionOn(){
    priceVisability = !priceVisability;
    !priceVisability ? priceDisplay = "none" : priceDisplay = "block";
    priceVisability ? animationName = "Normal" : animationName = "Reverse";
    pricelist.style.display = priceDisplay;
    flower.style.animation = `flowerRolling${animationName} 0.5s linear 1 forwards`;
    }

let priceSectionOnHeader = function(){
    pricelist.style.display = "block";
    var position = $("#pricelist").offset().top;
        $("HTML, BODY").animate({
            scrollTop: position
        }, 1000);
}

function scrollToArts(){
    var position = $("#examples-of-arts").offset().top;
        $("HTML, BODY").animate({
            scrollTop: position
        }, 1000);
    }

