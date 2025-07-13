var buttons = document.querySelectorAll("button");
var text = document.getElementById("boxtext");
var string = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let btnValue = e.target.innerHTML;
        
        if (btnValue === "=") {
            try {
                string = eval(string); // Evaluates the expression safely
            } catch (error) {
                string = "Error"; // Handle invalid expressions
            }
            text.value = string;
            return; // Stop further execution
        }

        if (btnValue === "AC") { // Clear button logic
            string = "";
            text.value = string;
            return;
        }
        
        string += btnValue;
        text.value = string;
    });
});
