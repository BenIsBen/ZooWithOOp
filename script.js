var animalsCreated = [];
var animalPopulation = 0;
var foodItems = ["meat", "Fish", "Marshmallow", "Leaves", "Pollen", "Flies", "Blood", "Pizza", "Rodents", "People", "That one guy from Jurassic Park", "Deer"];
var types = ["Mammals", "Reptiles", "Bugs"];
var Mammals = ["Tiger", "Bear", "Unicorn", "Giraffe"];
var Reptiles = ["Alligator", "Dragon", "Snake", "Dinosaur"];
var Bugs = ["Bee", "Spider", "Mosquito", "Fly"];
$(function(){
    $("#header").css("text-align", "center");
    populateTable();
    for(var i = 0; i < Mammals.length; i++){
        var whichMam = "#mammalZ" + i;
        var whichRep = "#reptileZ" + i;
        var whichBug = "#bugZ" + i;
        $(whichMam).click(function(){
            clicked(this.id, $("#names").val());
        });
        $(whichRep).click(function(){
            clicked(this.id, $("#names").val());
        });
        $(whichBug).click(function(){
            clicked(this.id, $("#names").val());
        });
    }
    for(var i = 0; i < foodItems.length; i++){
        $("#foods").append("<option value='" + foodItems[i] + "'>" + foodItems[i] + "</option>")
    }
    $("#log").append("Zoo activity log: <br>").css("font-family", "American Typewriter");
    animalsCreated[0] = new Tiger("Tigger");
    animalsCreated[1] = new Bear("Pooh");
    animalsCreated[2] = new Unicorn("Rarity");
    animalsCreated[3] = new Giraffe("Gemma");
    animalsCreated[4] = new Bee("Stinger");
    $("#log").append("There are 5 animals, Tigger the Tiger, Pooh the Bear, Rarity the Unicorn, Gemma the Giraffe, and Stinger the Bee<br>");
});
function populateTable(){
    $("#table").css("margin", "auto").append("<tr id='types'></tr>").css("border", "1px solid black");
    for(var  i = 0; i < types.length; i++){
        $("#types").append("<th id='type" + i + "'>" + types[i] + ":</th>");
    }
    for(var j = 0; j < Mammals.length; j++){
        var row = "#animals" + j;
        $("#table").append("<tr id='animals" + j + "'></tr>");
        $(row).append("<td id='mammalZ" + j + "'>" + Mammals[j] + "</td>").append("<td id='reptileZ" + j + "'>" + Reptiles[j] + "</td>").append("<td id='bugZ" + j + "'>" + Bugs[j] + "</td>");
    }
}
function clicked(x, name){
    var s = x.split("Z");
    console.log(x);
    var type = s[0];
    var which = s[1];
    var which2 = parseInt(which);
    switch(type){
        case "bug":
            switch(which2){
                case 0:
                    animalsCreated[animalPopulation] = new Bee(name);
                    $("#log").append("Created new Bee named " + name + "<br>");
                    break;
                case 1:
                    animalsCreated[animalPopulation] = new Spider(name);
                    $("#log").append("Created new Spider named " + name + "<br>");
                    break;
                case 2:
                    animalsCreated[animalPopulation] = new Mosquito(name);
                    $("#log").append("Created new Mosquito named " + name + "<br>");
                    break;
                case 3:
                    animalsCreated[animalPopulation] = new Fly(name);
                    $("#log").append("Created new Fly named " + name + "<br>");
                    break;
            }
            break;
        case "mammal":
            switch(which2){
                case 0:
                    animalsCreated[animalPopulation] = new Tiger(name);
                    $("#log").append("Created new Tiger named " + name + "<br>");
                    break;
                case 1:
                    animalsCreated[animalPopulation] = new Bear(name);
                    $("#log").append("Created new Bear named " + name + "<br>");
                    break;
                case 2:
                    animalsCreated[animalPopulation] = new Unicorn(name);
                    $("#log").append("Created new Unicorn named " + name + "<br>");
                    break;
                case 3:
                    animalsCreated[animalPopulation] = new Giraffe(name);
                    $("#log").append("Created new Giraffe named " + name + "<br>");
                    break;
            }
            break;
        case "reptile":
            switch(which2){
                case 0:
                    animalsCreated[animalPopulation] = new Alligator(name);
                    $("#log").append("Created new Alligator named " + name + "<br>");
                    break;
                case 1:
                    animalsCreated[animalPopulation] = new Dragon(name);
                    $("#log").append("Created new Dragon named " + name + "<br>");
                    break;
                case 2:
                    animalsCreated[animalPopulation] = new Snake(name);
                    $("#log").append("Created new Snake named " + name + "<br>");
                    break;
                case 3:
                    animalsCreated[animalPopulation] = new Dinosaur(name);
                    $("#log").append("Created new Dinosaur named " + name + "<br>");
                    break;
            }
            break;
    }
}

function list(){
    $("#log").html("Zoo activity log: <br> Click on an animal to remove it<br>");
    for(var i = 0; i < animalsCreated.length; i++){
        var temp = animalsCreated[i];
        if(temp != "Animal Removed"){
            console.log(temp);
            $("#log").append("<span id='" + i + "'>" + temp.name + " who is a " + temp.constructor.name + "</span><br>");
            var temp2 = "#" + i;
            $(temp2).click(function(){
                console.log("removed");
                removeAnimal(this.id);
                list();
            });
        }
    }
    $("#log").append("There are " + animalPopulation + " animals<br>");
}
function removeAnimal(x){
    var which = parseInt(x);
    animalsCreated[which] = "Animal Removed";
}
function feed(){
    $("#log").html("Zoo activity log: <br>");
    var what = $("#foods").val();
    console.log(what);
    for(var i = 0; i < animalsCreated.length; i++){
        if(animalsCreated[i] != "Animal Removed"){
            animalsCreated[i].eat(what);
        }
    }
}

class Animal{
    constructor(name){
        this.name = name;
        animalPopulation++
    }
    sleep(){
        $("#log").append(this.name + " sleeps for 8 hours<br>");
    }
}
class Mammal extends Animal{
    constructor(name){
        super(name);
        this.favoriteFood = "stuff";
        this.name = name;
    }
    eat(food){
        if(this.favoriteFood == food){
            $("#log").append(this.name + " eats " + food + " and would like some more<br>")
        }else{
            $("#log").append(this.name + " eats " + food + "<br>");
            this.sleep();
        }
    }
}
class Tiger extends Mammal{
    constructor(name){
        super(name);
        this.favoriteFood = "meat";
    }
}
class Bear extends Mammal{
    constructor(name){
        super(name);
        this.favoriteFood = "Fish";
    }
}
class Unicorn extends Mammal{
    constructor(name){
        super(name);
        this.favoriteFood = "Marshmallow";
    }
}
class Giraffe extends Mammal{
    constructor(name){
        super(name);
        this.favoriteFood = "Leaves";
        this.name = name;
    }
    eat(food){
        if(food != this.favoriteFood){
            $("#log").append("Yuck " + this.name + " will not eat " + food + "<br>");
            this.sleep()
        }else{
            $("#log").append("Yum " + this.name + " wants more " + food + "<br>");
        }
    }
}
class Insect extends Animal{
    constructor(name){
        super(name);
        this.favoriteFood = "Bug Stuff";
        this.name = name;
    }
    sleep(){
        $("#log").append(this.name + " never sleeps" + "<br>");
    }
    eat(food){
        if(food != this.favoriteFood){
            $("#log").append("Yuck " + this.name + " will not eat " + food + "<br>");
            this.sleep()
        }else{
            $("#log").append("Yum " + this.name + " wants more " + food + "<br>");
        }
    }
}
class Bee extends Insect{
    constructor(name){
        super(name);
        this.favoriteFood = "Pollen";
    }
}
class Spider extends Insect{
    constructor(name){
        super(name);
        this.favoriteFood = "Flies";
    }
}
class Mosquito extends Insect{
    constructor(name){
        super(name);
        this.favoriteFood = "Blood";
    }
}
class Fly extends Insect{
    constructor(name){
        super(name);
        this.favoriteFood = "Pizza";
    }
}
class Reptile extends Animal {
    constructor(name) {
        super(name);
    }

    eat(food) {
        if (this.favoriteFood == food) {
            $("#log").append(this.name + " eats " + food + " and would like some more<br>")
        } else {
            $("#log").append(this.name + " eats " + food + "<br>");
            this.sleep();
        }
    }
}

class Alligator extends Reptile{
    constructor(name){
        super(name);
        this.favoriteFood = "Deer"
    }
}
class Dragon extends Reptile{
    constructor(name){
        super(name);
        this.favoriteFood = "People"
    }
}
class Snake extends Reptile{
    constructor(name){
        super(name);
        this.favoriteFood = "Rodents"
    }
}
class Dinosaur extends Reptile{
    constructor(name){
        super(name);
        this.favoriteFood = "That one guy from Jurassic Park"
    }
}