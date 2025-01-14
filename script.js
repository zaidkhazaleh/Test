document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('commandInput');
    const output = document.getElementById('output');
    const teamDropdown = document.getElementById('teamDropdown');

    commandInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const command = commandInput.value.trim();
            commandInput.value = '';
            handleCommand(command);
        }
    });

    function handleCommand(command) {
        let response = '';
        switch (command) {
            case 'help':
                response = `
                    <p>Available commands:</p>
                    <ul>
                        <li><span class="highlight">'team'</span> - Show team members</li>
                        <li><span class="highlight">'clear'</span> - Clear the terminal</li>
                    </ul>
                `;
                break;
            case 'team':
                teamDropdown.style.display = 'flex';
                response = '<p>Displaying team members...</p>';
                break;
            case 'clear':
                output.innerHTML = '';
                break;
            default:
                response = `<p>Command not found: <span class="highlight">${command}</span></p>`;
                break;
        }
        output.innerHTML += response;
    }
});
