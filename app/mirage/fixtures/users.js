// app/mirage/fixtures/users.js

export default [
  {
    id: 1, 
    username: 'chwassme',
    numberOfChirps: 2,
    numberOfFollowing: 5,
    numberOfFollowers: 5,
     // The new data:
    aboutMe: 'I like making stuff.',
    joinedAt: new Date('2015-06-08T09:30:26'),
    chirps: [1, 2],
    followees: [1],
    followers: [1]
  }
];