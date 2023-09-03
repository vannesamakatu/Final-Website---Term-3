//Remove items in purchase list

    document.addEventListener('DOMContentLoaded', function () {
        const tripsTable = document.getElementById('trips-table').getElementsByTagName('tbody')[0];
        const totalSpan = document.getElementById('totalPrice');
        const purchaseButton = document.getElementById('purchaseButton');
    })
        

        // Function to remove a row from the table
        function removeRow(button) {
            const row = button.closest('tr');
            row.remove();
            updateTotalPrice();
        }

        // Add click event listeners to Remove buttons
        const removeButtons = document.getElementsByClassName('removeButton');
        for (const button of removeButtons) {
            button.addEventListener('click', function () {
                removeRow(this);
            });
        }

        // Purchase button click event
        purchaseButton.addEventListener('click', function () {
            
            alert('Successful Purchase! Thank you!.');
            // Clear the table
            tripsTable.innerHTML = '';
            updateTotalPrice();
        });

       
