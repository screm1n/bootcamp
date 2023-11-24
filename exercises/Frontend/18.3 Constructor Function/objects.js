
function HouseKeeper (name, experience, repertorie) {
    this.name = name; 
    this.experience = experience; 
    this.repertorie = repertorie; 
    this.clean = function () {
        return "Cleaning in progress..."
    }
}

var houseKeeper1 = new HouseKeeper ("Rachel", 4, ["lobby", "room"]);
console.log(houseKeeper1.clean());


