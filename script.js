/* a list of the document's elements that match 
the specified group of selectors i.e. of input type 'range'. */
const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider){
    slider.addEventListener("input",calculateTip);//Adding Event Listeners to each slider
});

const billInput = document.getElementById("bill");//Fetching Bill Value Using ID
billInput.addEventListener("change",calculateTip);//Adding Event Listener to the input value of the bill.

//defining a function to Calculate The Tip and Total Per Person.
function calculateTip(){
    //Get input values for Bill Amount, Percentage Of Tip and No. Of People
    let bill = parseFloat(billInput.value);//Converting Bill Value into Float
    let tipPercent = document.getElementById("tip").value;
    let noOfPeople = document.getElementById("no-of-people").value;

    billInput.value = bill.toFixed(2);//taking Bill values upto 2 decimal Places
    try{
        if(isNaN(bill)) throw "not a number";
       bill=Number(bill);
    }
    catch(err)
    {
        alert("Bill is :"+err);
    }
    //Calculating Output Values upto 2 Decimal Places
    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));
    let tipPerPerson = (totalTip / noOfPeople).toFixed(2);
    let totalPerPerson = (total / noOfPeople).toFixed(2);

    /*Display Output Values i.e.
    Tip Amount,Total Amount,Tip Percent,Number Of People,
    Tip and Total Amount to be given by each person .
    */
    document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;
    document.getElementById("tip-percent").textContent = `${tipPercent}%`;
    document.getElementById("split-num").textContent = noOfPeople;
    document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalPerPerson}`;
        
}
calculateTip();//calling the function