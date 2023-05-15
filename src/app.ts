import LordOfTheRings from '@valentinacodes/lotr-sdk-valentinacodes';

const client = new LordOfTheRings({
    apiKey: 'INSERT_API_KEY',
});

/*
client.getMovies().then(p => {
    console.log(p);
});




client.getMovieById('5cd95395de30eff6ebccde5d').then(p => {
    console.log(p);
});



client.getQuotes().then(p => {
    console.log(p);
});


client.getMovieQuotesById('5cd95395de30eff6ebccde5d').then(p => {
    console.log(p);
});
*/


client.getQuoteById('5cd96e05de30eff6ebcce84b').then(p => {
    console.log(p);
});
