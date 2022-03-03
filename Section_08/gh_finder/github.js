class GitHub {
  constructor() {
    this.client_id = "34c872c4029d984bde62";
    this.client_secret = "acff49468594b2f3ffb155c5080ea3b24658850c";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
