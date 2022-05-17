// Presents the document picker prompting you to pick a file. The contents of the selected file is then imported into Bear as a new note.
// Because the script uses the CallbackURL bridge, Bear will return to Scriptable.
let utis = [ "public.plain-text" ]
let fileURLs = await DocumentPicker.open(utis)
let fileURL = fileURLs[0]
let baseURL = "editorial://new//command?=saveincoming"
let fm = FileManager.local()
let txt = fm.readString(fileURL)
let cb = new CallbackURL(baseURL)
cb.addParameter("input", txt)
await cb.open()