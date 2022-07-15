# SimpleNoteApp
Simple Note App , where you can add ,remove, read , or list notes through yargs command. 
This was build in node.js and data saved through JSON.

There's feature that doesnt allow notes to be added to JSON , byy checking if theres duplicate title.

# Add Note
node app.js add --title="Note Title" --body="Note Description"
* There's feature that doesnt allow notes to be added to JSON , byy checking if theres duplicate title.

# Read Note
node app.js read --title="Note Title"

# Remove Note
node app.js remove --title="Note Title"

# List Notes
node app.js list
