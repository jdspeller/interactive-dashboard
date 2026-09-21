document.addEventListener("DOMContentLoaded", () => {
    
    const convertBtn=document.getElementById("convert-btn");
    
    convertBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const inputField = document.getElementById("conversion-value");
        let inputValue = parseFloat(inputField.value);

        const outputDiv = document.getElementById("conversion-output");

        if (isNaN(inputValue)) {
            outputDiv.innerHTML = "Please enter a valid numeric value.";
            return;
        }
            const selectElement =document.getElementById("conversion-type");
            const conversionType = selectElement.value;

            let result = 0
            let unitFrom = "";
            let unitTo = "";

            switch (conversionType) {
                case "in-to-cm":
                    result = inputValue * 2.54;
                    unitFrom = "inches";
                    unitTo = "centimeters";
                    break;
                case "cm-to-in":
                    result = inputValue / 2.54;
                    unitFrom = "centimeters";
                    unitTo = "inches";
                    break;
                case "ft-to-m":
                    result = inputValue * 0.3048;
                    unitFrom = "feet";
                    unitTo = "meters";
                    break;     
                case "m-to-ft":
                    result = inputValue / 0.3048;
                    unitFrom = "meters";
                    unitTo = "feet";
                    break;  
                case "yd-to-m":
                    result = inputValue * 0.9144;
                    unitFrom = "yards";
                    unitTo = "meters";
                    break;  
                case "m-to-yd":
                    result = inputValue / 0.9144;
                    unitFrom = "meters";
                    unitTo = "yards";
                    break;
                case "mi-to-km":
                    result = inputValue * 1.60934;
                    unitFrom = "miles";
                    unitTo = "kilometers";
                    break;  
                case "km-to-mi":
                    result = inputValue / 1.60934;
                    unitFrom = "kilometers";
                    unitTo = "miles";
                    break;
            }
            outputDiv.innerHTML = `${inputValue} ${unitFrom} is equal to ${result.toFixed(2)} ${unitTo}.`;
    });

});