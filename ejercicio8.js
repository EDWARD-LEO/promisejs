async function showGitHubinfo(){
  let response = await fetch(`https://api.github.com/users/EDWARD-LEO/repos`);
  let repos = await response.json();
  console.log(repos)
}

showGitHubinfo();