# Interactive Productivity Dashboard
This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features
## TODO: Future Enchancements
- [] Add a metric conversion tool.
- [] Integrate a task list with array storage.
- [] Add JavaScript logic for a live clock.
- [X] Add a weekly task goal calculator

## Weekly Task Goals
This provides as a Interactive dashboard tool that will capture a user's name, daily goal targets and any optional weekly bonus items. It will calculate their weekly work requirements based out of a 5-day baseline, it automatically balances the bonus loads and output the finished calculations.


## Imperial/Metric Converter
The Imperial/Metric Converter application lets users to convert measurements between Metric and Imperial units. The conversions include inches (in), feet (ft), yard (yd or yards), miles (mi), centimeters (cm), meters (m), and kilometers (km).

### Logic and Psuedocode 

function metricConverter() {
    // Prompt the user for a numeric value and parse it as a decimal
    let userValue = parseFloat(prompt("Enter the numeric value to convert:"));
    
    // Validate that the user entered a valid number
    if (isNaN(userValue)) {
        alert("Please enter a valid numeric value.");
        return;
    }

  
    let conversionType = prompt("Select conversion (in_to_cm, ft_to_m, yd_to_m, mi_to_km, cm_to_in, m_to_ft, m_to_yd, km_to_mi):");
    let result = 0;
    let isValid = true;


    if (conversionType === "in_to_cm") {
        result = userValue * 2.54;
    } else if (conversionType === "ft_to_cm") {
        result = userValue * 30.48;
    } else if (conversionType === "yd_to_m") {
        result = userValue * 0.91;
    } else if (conversionType === "mi_to_km") {
        result = userValue * 1.61;
    } else if (conversionType === "cm_to_in") {
        result = userValue * 0.39;
    } else if (conversionType === "cm_to_ft") {
        result = userValue * 0.0328;
    } else if (conversionType === "m_to_yd") {
        result = userValue * 1.09;
    } else if (conversionType === "km_to_mi") {
        result = userValue * 0.62;
    } else {
        alert("Invalid conversion selection.");
        isValid = false;
    }


    if (isValid) {
        alert("The converted value is: " + result.toFixed(2));
    }
}

// Execute the converter function
metricConverter();