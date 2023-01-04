export class utilities {
    setChoice(choiceSelector, choiceMethod) {
        const prevChoice = document.querySelector(`${choiceSelector} span`);
        if (prevChoice !== null) prevChoice.remove();

        const createSpan = document.createElement("span");
        const choice = document.querySelector(`${choiceSelector}`);
        choice.appendChild(createSpan);
        createSpan.appendChild(document.createTextNode(choiceMethod()));
    }
}