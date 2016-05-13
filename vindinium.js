var Bot = require('bot');
var PF = require('pathfinding');
//var bot = new Bot('qtu53taz', 'training', 'http://vindinium.org'); //Put your bot's code here and change training to Arena when you want to fight others.
var bot = new Bot('qtu53taz', 'arena', 'http://52.53.211.7:9000'); //Put your bot's code here and change training to Arena when you want to fight others.
var goDir;
var Promise = require('bluebird');
Bot.prototype.botBrain = function() {
    return new Promise(function(resolve, reject) {
        _this = bot;
        //////* Write your bot below Here *//////
        //////* Set `myDir` in the direction you want to go and then bot.goDir is set to myDir at the bottom *////////

        /*                                      *
         * This Code is global data!            *
         *                                      */

        // Set myDir to what you want and it will set bot.goDir to that direction at the end.  Unless it is "none"
        var myDir;
        var myPos = [bot.yourBot.pos.x, bot.yourBot.pos.y];

        // Create an array of every enemy bot
        var enemyBots = [];
        if (bot.yourBot.id != 1) enemyBots.push(bot.bot1);
        if (bot.yourBot.id != 2) enemyBots.push(bot.bot2);
        if (bot.yourBot.id != 3) enemyBots.push(bot.bot3);
        if (bot.yourBot.id != 4) enemyBots.push(bot.bot4);

        // Set the variable lowestHealth to the bot with the lowest health
        var lowestHealth = enemyBots[0];
        for (i = 0; i < enemyBots.length; i++) {
            if (lowestHealth.life > enemyBots[i].life) { 
                lowestHealth = enemyBots[i];
            }
        }

        // Set the variable closestBot to the bot that is closest to my bot
        var closestBot = enemyBots[0];
        for (i = 0; i < enemyBots.length; i++) {
            if (bot.findDistance(myPos, closestBot) > bot.findDistance(myPos, enemyBots[i])) {
                closestBot = enemyBots[i];
            }
        }

        /*                                      *
         * This Code Decides WHAT to do         *
         *                                      */
        
        /*
        *
        *
        */
        var task;
        if (bot.yourBot.life < 5) {
            task = 'goTavern'
        }
        else if (bot.yourBot.life > 40 && bot.findDistance(myPos, lowestHealth.posArray) < 4 ) {
            task = "attack lowest health"

        }
        else if (bot.yourBot.life > 40 && bot.findDistance(myPos, closestBot.posArray) < 4 ) {
            task = "attack closest bot"
        
        }
        else {
            task = "freemines";
        }


        /*                                      *
         * This Code Determines HOW to do it    *
         *                                      */

        // finds the nearest freemine and sets myDir toward that direction //
        if (task === "freemines") {
            var closestMine = bot.freeMines[0];
            for (var i = 0; i < bot.freeMines.length; i++) {
                if (bot.findDistance(myPos, closestMine) > bot.findDistance(myPos, bot.freeMines[i])) {
                    closestMine = bot.freeMines[i];
                }
            }
            console.log("Claiming a Free Mine!");
            myDir = bot.findPath(myPos, closestMine);
        }

        // finds closest tavern and sets myDir towards the tavern
        if (task === "goTavern") {
            var closestTavern = bot.taverns[0];
            for (i = 0; i < bot.taverns.length; i++) {
                if (bot.findDistance(myPos, closestTavern) > bot.findDistance(myPos, bot.freeMines[i])) {
                    closestTavern = bot.taverns[i];
                }
            }
            console.log("Drinking!");
            myDir = bot.findPath(myPos, closestTavern);
        }

        // this will allow my bot to attack another bot with the lowest health
        if (task === "attack lowest health") {
            console.log("attacking!");
            myDir = bot.findPath(myPos, lowestHealth.posArray);
        }
        
        //This if statement attacks the bot that is closest to my bot
        if (task == "attack closest bot") {
            console.log("attacking!");
            myDir = bot.findPath(myPos, closestBot.posArray);
        }

        /*                                                                                                                              *
         * This Code Sets your direction based on myDir.  If you are trying to go to a place that you can't reach, you move randomly.   *
         * Otherwise you move in the direction set by your code.  Feel free to change this code if you want.                            */
        if (myDir === "none") {
            console.log("Going Random!");
            var rand = Math.floor(Math.random() * 4);
            var dirs = ["north", "south", "east", "west"];
            bot.goDir = dirs[rand];
        }
        else {
            bot.goDir = myDir;
        }
        if (myDir === "none" || myDir === undefined) {
            console.log("Moving randomly");
            var rand = Math.floor(Math.random() * 4);
            var dirs = ["north", "south", "east", "west"];
            bot.goDir = dirs[rand];
        }
        else {
            bot.goDir = myDir;
        }



        ///////////* DON'T REMOVE ANTYTHING BELOW THIS LINE *//////////////
        resolve();
    });
}
bot.runGame();
