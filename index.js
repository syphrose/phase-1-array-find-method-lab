// code your solution here
const record = [
    {year: "2016", result: "N/A"},
    {year: "2015", result: "W"},
    {year: "2014", result: "N/A"},
    {year: "2013", result: "N/A"},
]
function superbowlWin(outcome){
    for(let object of outcome){
        if(object.result ==="W"){
            return object.year
        }
    }
}
record.find(superbowlWin);
