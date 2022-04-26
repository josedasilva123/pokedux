export function getPowerLevel(stats){
    const statsValueList = stats.map((stat) => stat.base_stat);
    const powerLevel = statsValueList.reduce((a,b) => a + b);
    return powerLevel;    
}

export function getTeamPower(team){
    if(team.length > 0){
        console.log('Tem time');
        const powerList = team.map(pokemon =>  getPowerLevel(pokemon.stats)); 
        const teamPower = powerList.reduce((a,b) => a + b);  
        return teamPower;         
    } else {
        return 0;
    }
}

export function getTierRank(powerLevel){
    if(powerLevel > 579){
        return 'S';
    } else if (powerLevel > 499 && powerLevel < 580) {
        return 'A';
    } else if (powerLevel > 419 && powerLevel < 500 ){
        return 'B';
    } else if (powerLevel > 349 && powerLevel < 420){
        return 'C';        
    } else if (powerLevel > 280 && powerLevel < 350){
        return 'D';
    } else {
        return 'E';
    }
}

export function getBattleStats(stats, iv, level){
    const baseEv = 50;

    function HPFormula(number){    
        const formulaA = 2 * number + iv + (baseEv/4);
        const formulaB = formulaA * (level/100);
        const newValue = Math.round(formulaB + 10 + level);        
        return newValue;
    }


    function StatsFormula(number){
        const formulaA = 2 * number + iv + (baseEv/4);
        const formulaB = formulaA * (level/100);
        const newValue = Math.round(formulaB + 5); 
        return newValue;
    }

    const battleStatusList = stats.map(stat => {
        if(stat.stat.name === "hp"){
                        return {
                name: stat.stat.name,
                value: HPFormula(stat.base_stat),
            }
        } else {            
            return {
                name: stat.stat.name,
                value: StatsFormula(stat.base_stat),
            }
        }        
    })
    
    return battleStatusList;
}