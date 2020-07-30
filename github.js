class GitHub {
    constructor() {
        this.client_id = '9eaf38f5af43701eb690';
        this.client_secret = '8f2a14e13ac1b0740ff296479740e0d1f1b1183c';
    }

    // Get user method
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`);

        const profile = await profileResponse.json();

        return {
            // profile: profile
            profile
        } 
s
    }
}