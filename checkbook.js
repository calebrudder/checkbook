const testData= `1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tires;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`;

const myCheckbook = checkbook(testData);
myCheckbook.balanceCheckbook();

function checkbook(input){
    let userData = removeClutter(input);
    let totalBalance = 0;
    let totalExpenses = 0;
    let expenseCounter = 0;
    let averageExpense = 0;
    function removeClutter(data){
        let cleanData = data.replace(/([^a-zA-Z0-9\s\.])/g, '');
        return cleanData.split('\n');
    }

    function addExpense(expense){
        totalExpenses += expense;
        totalBalance -= expense;
        expenseCounter++;
        averageExpense = totalExpenses / expenseCounter;
    };

    const balanceCheckbook = function(){
        for(let i = 0; i<userData.length; i++){
            if(i == 0){
                totalBalance = userData[0];
                console.log('Original_Balance: ' + totalBalance);
            }else{
                let line = userData[i].split(" ");
                addExpense(parseFloat(line[2]));
                console.log(userData[i] + " Balance: " + totalBalance.toFixed(2));
            }
        }
        console.log("Total Expenses: " + totalExpenses.toFixed(2));
        console.log("Average expense: " + averageExpense.toFixed(2));
    };

    return{
        userData: userData,
        balanceCheckbook: balanceCheckbook
    }
}