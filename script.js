const billAmount=document.querySelector("#bill-amount");
const checkButton=document.querySelector("#check-button");
const cashGiven=document.querySelector("#cash-given");
const message=document.querySelector("#error-message");

checkButton.addEventListener("click",function validateBillAmountAndCashAmount(){
    message.style.display="none";
    if(billAmount.value>0){
        if(cashGiven.value>=billAmount.value){
            const amountToBeReturned=cashGiven-billAmount;
            calculateChange(amountToBeReturned);

        }else{
            showMessage(message,"Cash given is lesser than the bill amount")
        }
    }else{
       showMessage(message,"Invalid Bill amount");
    }
});
function binarySearchIndex (array, target) {
    var low=0,high=array.length;
    var ans;
    while(low<=high){
        var mid=(low+high)/2;
        if(target>=array[mid]){
            ans=mid;
            low=mid+1;
        } else{
            high=mid-1;
        }
    }
    return ans;
  }
function calculateChange(amountToBeReturned){
    const cashArray=[1,2,5,10,20,50,100,200,500,2000];
    while(amountToBeReturned!=0){
        var idx=binarySearchIndex(cashArray,amountToBeReturned);
        if(idx!=0) idx=idx-1;
        console.log(cashArray[idx]);
        amountToBeReturned=amountToBeReturned-cashArray[idx];
    }
}
function showMessage(message,messageText){
    message.style.display="block";
    message.innerText=messageText;
}