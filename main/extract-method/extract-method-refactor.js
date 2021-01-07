function printInvoiceHeader() {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
}

function getOutstanding(invoice) {
    let outstanding = 0;
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }
    return outstanding;
}

function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
}

function printDetail(invoice, outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

function printInvoice(invoice) {
    printInvoiceHeader();
    let outstanding = getOutstanding(invoice);
    recordDueDate(invoice);
    printDetail(invoice, outstanding);
}