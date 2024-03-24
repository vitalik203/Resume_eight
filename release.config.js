module.exports = {
  branches: ["master"],
  repositoryUrl: "https://github.com/vitalik203/Resume_eight.git",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
