document.addEventListener('DOMContentLoaded', function() {
    const noteForm = document.getElementById('noteForm');
    const noteText = document.getElementById('noteText');
    const notesList = document.getElementById('notesList');

    noteForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const noteContent = noteText.value.trim();

        if (noteContent !== '') {
            // Create a new note element
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.textContent = noteContent;

            // Append the note to the notes list
            notesList.appendChild(noteElement);

            // Clear the textarea
            noteText.value = '';
        } else {
            alert('Please enter a note before saving.');
        }
    });
});
