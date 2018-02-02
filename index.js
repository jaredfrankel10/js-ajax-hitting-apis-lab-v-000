function getRepositories() {
   const username = document.getElementById('username').value
   if (username) {
     let arrOfRepos = []
     for (var i = 1, j = 1; j > 0; i++) {
       var req = new XMLHttpRequest();
       // must be sunchronus or else, j is assigned below, before the response is received from send(). while send() is going on, j is assigned the value of the empy responseText. and the loop doesn't continue.
       req.open('GET', `https://api.github.com/users/${username}/repos?page=${i}`, false)
       req.send()
       arrOfRepos = arrOfRepos.concat(JSON.parse(req.responseText))
       var j = JSON.parse(req.responseText).length
     }
     displayRepositories(arrOfRepos)
   }
 }