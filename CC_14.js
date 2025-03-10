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
}