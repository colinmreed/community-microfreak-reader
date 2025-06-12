const MAX_FILE_SIZE = 10000000; // Increased to 10MB to handle large JSON files

export async function readFile(file) {
    
    // Handle case where no file is selected (user cancelled dialog)
    if (!file) {
        if (global.dev) console.log("readFile: no file selected");
        return null;
    }

    if (global.dev) console.log("readFile", file);
    let data = null;
    
    if (file.size > MAX_FILE_SIZE) {
        console.warn(`${file.name}: file too big, ${file.size} bytes. Maximum allowed: ${MAX_FILE_SIZE} bytes`);
        return null;
    }
    
    try {
        // json(): Takes a Response stream and reads it to completion. It returns a promise that resolves
        //         with the result of parsing the body text as JSON.
        data = await new Response(file).json();
    } catch (error) {
        console.error(`Error parsing JSON file ${file.name}:`, error);
        return null;
    }
    
    return data;
}