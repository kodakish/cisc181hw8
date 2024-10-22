import {
    WebzComponent,
    BindValue,
    BindValueToNumber,
    Input,
    ValueEvent,
    Click,
    Change,
} from "@boots-edu/webz";
import html from "./simple-calculator.component.html";
import css from "./simple-calculator.component.css";

export class SimpleCalculatorComponent extends WebzComponent {
    @BindValueToNumber("first-number")
    private firstNumber: number = 7;
    @BindValueToNumber("second-number")
    private secondNumber: number = 3;
    @BindValue("operation-select")
    private operationSelect: string = "add";
    @BindValueToNumber("result")
    private result: number = 0;
    constructor() {
        super(html, css);
    }
    @Input("first-number")
    onFirstNumberChange(event: ValueEvent) {
        this.firstNumber = +event.value;
    }
    @Input("second-number")
    onSecondNumberChange(event: ValueEvent) {
        this.secondNumber = +event.value;
    }
    @Change("operation-select")
    onOperationChange(event: ValueEvent) {
        this.operationSelect = event.value;
    }
    @Click("calculate-button")
    calculate() {
        const firstNumber = this.firstNumber;
        const secondNumber = this.secondNumber;
        switch (this.operationSelect) {
            case "add":
                this.result = firstNumber + secondNumber;
                break;
            case "subtract":
                this.result = firstNumber - secondNumber;
                break;
            case "multiply":
                this.result = firstNumber * secondNumber;
                break;
            case "divide":
                this.result = firstNumber / secondNumber;
                break;
        }
    }
}
