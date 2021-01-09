function printInvoice(invoice) {
    //print header
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");

    //calculate outstanding
    let outstanding = 0;
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }

    //record due date
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    //print invoice detail
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}