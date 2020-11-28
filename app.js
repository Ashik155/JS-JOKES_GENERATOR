document.getElementById("btn").addEventListener("click", getjokes)

function getjokes(e){
    const no = parseInt(document.getElementById("no").value)
    const xhr = new XMLHttpRequest();
    xhr.open("GET",`https://api.icndb.com/jokes/random/${no}`,true)
    // xhr.onprogress = function(){
    //     const btn = document.getElementById('btn')
    //     const im = document.createElement('img')
    //     im.src = "img/load.png"
    //     btn.replaceWith(im)
    // }
    xhr.onload = function(){
        if(this.status === 200 ){
            const jokes = JSON.parse(this.responseText)
            let op = ''
            if(jokes.type === "success"){
                jokes.value.forEach(joke => {
                op  += `
                <li> ${joke.joke}</li>`                   
                });
            }
            else{
                console.log("This is not a Joke ! You might have connection Problem kids")
            }
            document.getElementById("joke-list").innerHTML = op
        }
    }
    xhr.send()
    e.preventDefault()
}
