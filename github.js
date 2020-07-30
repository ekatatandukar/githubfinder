class GitHub {
    constructor() {
        this.client_id = '9eaf38f5af43701eb690';
        this.client_secret = '8f2a14e13ac1b0740ff296479740e0d1f1b1183c';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // Get user method
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await reposResponse.json();
        
        return {
            // profile: profile
            profile,
            repos
        } 

    }
}