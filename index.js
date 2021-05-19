function superbowlWin (record) {
    const win = record.find(record => record.result === "W");
    if (win){
        return win.year;
    }
}

//returns a year th KC Chiefs won the superbowl
//returns undefinded if the record has no win objects
//Array.prototype.find() is a built-in function in JavaScript which is used to get the value of the first element in the array that satisfies the provided condition. With this, you can quickly check all the elements of the array and return the first match.