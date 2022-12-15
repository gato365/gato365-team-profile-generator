const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// Which operator is being used here?
// We are using the spread operator to copy the 'songs' array into another array
const newSongs = [...songs];

// What do you expect to be logged in the console?
// ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];
console.log(newSongs);