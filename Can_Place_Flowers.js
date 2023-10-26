var canPlaceFlowers = function(flowerbed, n) {
    let flowers = n;
    for(let i = 0; i < flowerbed.length; i++){
        if(i === 0){
            if(flowerbed.length > 1){
                if(flowerbed[1] === 0 && flowerbed[0] === 0){
                    flowerbed[0] = 1; 
                    flowers--;
                }
            }
            else {if(flowerbed[0] === 0) flowers--; }
        }else if(i === flowerbed.length -1){
            if(flowerbed[i-1] === 0 && flowerbed[i] === 0){
                flowerbed[i] = 1; 
                flowers--;
            }
        }else
            if(flowerbed[i-1] === 0 && flowerbed[i+1] === 0 && flowerbed[i] === 0){
                flowerbed[i] = 1; 
                flowers--;
            }
    }

    if(flowers <= 0) return true;
    return false;

    
};