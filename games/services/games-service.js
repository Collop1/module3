class GamesService {
    async getGames() {
        const url = "https://raw.githubusercontent.com/dasingh9/public/refs/heads/main/games-data.json"
        const response = await fetch(url);
        const games = response.json();
        return games;
    }
}