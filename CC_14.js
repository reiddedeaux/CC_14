// Task 2 Support Tickets Dynamic Addition
function addTicket(customerName, issueDescription, priorityLevel){
    const ticketContainer = document.getElementById(`ticketContainer`);

    const ticket = document.createElement(`div`);
    ticket.setAttribute(`class`, `ticket`);
    //for the customers name
    const nameHeading = document.createElement(`h2`);
    nameHeading.textContent = issueDescription;
    //for the issue description
    const issueText = document.createElement(`p`);
    issueText.textContent = issueDescription;
    //for priority level
    const priorityState = document.createElement(`span`);
    priorityState.textContent = `Priority: ${priorityLevel}`;
    priorityState.setAttribute(`class`, priorityLevel.toLowerCase());
    //created a resolve ticket button
    const resolveButton = document.createElement(`button`);
    resolveButton.textContent = `Resolve`;
    resolveButton.setAttribute(`class`, `resolve-button`);
    //created a edit button
    const editButton = document.createElement(`button`)
    editButton.textContent = `Edit Ticket`;
    editButton.setAttribute(`class`, `edit-button`)

    //Task 4 Support Ticket Resolution with Event Bubbling
    resolveButton.addEventListener(`click`, function(event){
        const nameInput = document.createElement(`input`);
        nameInput.setAttribute(`type`, `text`);
        nameInput.value = nameHeading.textContent

        const issueInput = document.createElement(`input`);
        issueInput.setAttribute(`type`, `text`);
        issueInput.value = issueText.textContent;

        const priorityInput = document.createElement(`input`);
        priorityInput.setAttribute(`type`, `text`);
        priorityInput.value = priorityState.textContent.split(": ")[1]
    })
    
    //Section for element tickets

    ticket.appendChild(nameHeading);
    ticket.appendChild(issueText);
    ticket.appendChild(priorityState);
    ticket.appendChild(resolveButton);
    ticket.appendChild(editButton);
    ticketContainer.appendChild(ticket);

    //Task 5 Inline Editing for Support Tickets
    ticket.addEventListener(`dblclick`, function(){
        const nameInput = document.createElement(`input`);
        nameInput.setAttribute(`type`,`text`);
        nameInput.value = nameHeading.textContent;

        const issueInput = document.createElement(`input`);
        issueInput.setAttribute(`type`,`text`);
        issueInput.value = issueText.textContent;

        const priorityInput = document.createElement(`input`);
        priorityInput.setAttribute(`type`,`text`);
        priorityInput.value = priorityState.textContent.split(": ")[1];
        //save button
        const saveButton = document.createElement(`button`);
        saveButton.textContent = `Save`;
        //clear content
        ticket.innerHTML = ``;
        //append again
        ticket.appendChild(nameInput);
        ticket.appendChild(issueInput);
        ticket.appendChild(priorityInput);
        ticket.appendChild(saveButton);

        saveButton.addEventListener(`click`, function(){ //save button
            //new values
            nameHeading.textContent = nameInput.value;
            issueText.textContent = issueInput.value;
            priorityState.textContent = `Priority : ${priorityInput.value}`;
            priorityState.setAttribute(`class`, priorityInput.value.toLowerCase());
            //revert back fields to static texts
            ticket.innerHTML = ``;
            ticket.appendChild(nameHeading);
            ticket.appendChild(issueText);
            ticket.appendChild(priorityState);
            ticket.appendChild(resolveButton);
            ticket.appendChild(editButton);
        })
    })
}
//Task 3 Highlighting High Priority Tickets
//function to highlight tickets
function highlightingHighPriorityTickets(){
    const highlightingHighPriorityTickets = document.querySelectorAll(`.high`);
    const highPriorityArray = Array.from(highlightingHighPriorityTickets);

    highPriorityArray.forEach(ticket => {
        ticket.style.backgroundColor = `yellow`; // highlight color
        ticket.style.border = `2px solid green`;// border
    });
}
highlightingHighPriorityTickets()

const ticketContainer = document.getElementById(`ticketContainer`);
ticketContainer.addEventListener(`click`, function(){
    console.log(`Ricket Was Clicked`)
});
//Examples of tickets
addTicket(`James Harden`, `Cannot Delete Account`, `High`);
addTicket(`Jonny Test`, `Page Not Showing`, `Low`);