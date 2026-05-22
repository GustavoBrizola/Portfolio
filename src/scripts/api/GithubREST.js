import { Octokit } from "@octokit/rest"

/**
 * HTTP GET request on repositories
 * W.I.P.
 */
export
async function GET_GithubRepo()
{
    const token = process.env.VITE_GITHUB_TOKEN;

    // Octokit.js
    // https://github.com/octokit/core.js#readme
    const octokit = new Octokit({auth: token})

    await octokit.request('GET /repos/{owner}/{repo}/pages', 
    {
        owner: 'OWNER',
        repo: 'REPO',
        headers: {'X-GitHub-Api-Version': '2026-03-10'}
    })
}