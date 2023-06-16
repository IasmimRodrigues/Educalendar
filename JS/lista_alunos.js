
    const filterInput = document.getElementById('filter');

    filterInput.addEventListener('input', function() {
        const filterValue = filterInput.value.toLowerCase();
        const contacts = document.querySelectorAll('.contacts li');
        const letters = document.querySelectorAll('.letter');

        contacts.forEach(function(contact) {
            const name = contact.querySelector('h3').textContent.toLowerCase();

            if (name.includes(filterValue)) {
                contact.style.display = 'block';
            } else {
                contact.style.display = 'none';
            }
        });

        letters.forEach(function(letter) {
            const letterText = letter.textContent.toLowerCase();
            const associatedContacts = letter.nextElementSibling.querySelectorAll('li');

            let hasVisibleContacts = false;

            associatedContacts.forEach(function(contact) {
                if (contact.style.display !== 'none') {
                    hasVisibleContacts = true;
                }
            });

            if (letterText.includes(filterValue) || hasVisibleContacts) {
                letter.classList.remove('hidden');
            } else {
                letter.classList.add('hidden');
            }
        });

        
    });
    
    function toggleMode() {
        const html = document.documentElement
        html.classList.toggle("dark-mode")
      }
      
      function addFontSize(amountToAdd) {
        const style = window.getComputedStyle(document.body)
        let percent = Number(style.getPropertyValue("--font-size").split("%")[0])
        percent += amountToAdd
        document.documentElement.style.setProperty("--font-size", percent + "%")
      }
      
      function dimFontSize(amountToAdd) {
        const style = window.getComputedStyle(document.body)
        let percent = Number(style.getPropertyValue("--font-size").split("%")[0])
        percent -= amountToAdd
        document.documentElement.style.setProperty("--font-size", percent + "%")
      }
      

    