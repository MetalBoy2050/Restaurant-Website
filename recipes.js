let postari = [];

window.onload = () => {
    recipeName = document.getElementById('name');
    recipeName.value = window.localStorage.getItem('name');
    //console.log(recipeName);

    clockElement = document.getElementById('clock');
    setInterval(() => {
        const d = new Date();
        clockElement.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    }, 1000);

    recipeTomatoes = document.getElementById('tomatoes');
    //console.log(recipeTomatoes);
    recipeCucumbers = document.getElementById('cucumbers');
    //console.log(recipeCucumbers);
    recipePeppers = document.getElementById('peppers');
    // console.log(recipePeppers);
    recipeFlour = document.getElementById('flour');
    //console.log(recipeFlour);
    recipeSugar = document.getElementById('sugar');
    //console.log(recipeSugar);
    recipeEggs = document.getElementById('eggs');
    //console.log(recipeEggs);
    recipeVanilla = document.getElementById('vanilla');
    //console.log(recipeVanilla);

    recipeImage = document.getElementById('poza-recipe');
    //  console.log(recipeImage);

    recipeDescription = document.getElementById('description');
    recipeDescription.value = window.localStorage.getItem('description');
    //console.log(recipeDescription);

    recipeName.addEventListener('keydown', (event) => {
        //console.log("aidi");
        const code = event.key[0].charCodeAt(0) - '0'.charCodeAt(0);
        //console.log(code);
        recipeName.style.backgroundColor = `rgb(${code * 23 % 255}, ${code * 12 % 255}, ${code * 123 % 255})`;
        // console.log(recipeName.style.color);
        event.stopPropagation();
        console.log(getComputedStyle(recipeName));
    });

    postButton = document.getElementById('post');
    //console.log(postButton);
    postButton.onclick = () => {
        const re = /^[ a-zA-Z]+$/;

        console.log(recipeName.value);
        console.log(recipeDescription.value);
        console.log(recipeDescription.value, re.test(recipeName.value), re.test(recipeDescription.value));
        if (re.test(recipeName.value)) {
            // re.lastIndex = 0;
            if (re.test(recipeDescription.value)) {
                //console.log("aici");
                window.localStorage.setItem('name', recipeName.value);
                window.localStorage.setItem('description', recipeDescription.value);
                recipeContainerPost = document.createElement('div');
                //console.log(recipeContainerPost);
                recipeImagePost = document.createElement('img');
                recipeImagePost.src = `./images/${giveURL(recipeImage)}`;
                //console.log(recipeImagePost);
                recipeTitlePost = document.createElement('h2');
                recipeTitlePost.innerHTML = recipeName.value;
                recipeTitlePost.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
                // console.log(recipeTitlePost);
                // recipeIngredientsContainerPost = document.createElement('div');
                recipeDescriptionPost = document.createElement('p');
                recipeDescriptionPost.innerHTML = recipeDescription.value;
                recipeDeleteButton = document.createElement('button');
                recipeDeleteButton.type = 'button';
                recipeDeleteButton.innerHTML = 'DELETE';
                // console.log(recipeDescriptionPost);
                recipeContainerPost.append(recipeImagePost, recipeTitlePost, recipeDescriptionPost, recipeDeleteButton);
                //  console.log(recipeContainerPost);
                document.getElementsByClassName('fourth-div')[0].append(recipeContainerPost);

                postari.push(recipeContainerPost);

                postari[postari.length - 1].onclick = () => {
                    let x = postari[postari.length - 1];
                    console.log(x);
                    let newPostari = [];

                    for (let i = 0; i < postari.length; i++) {
                        if (postari[i] === x)
                            continue;

                        newPostari.push(postari[i]);
                    }

                    x.remove();

                    postari = newPostari;
                    console.log(postari);
                }
            } else {
                alert("Descriere nu e buna!");
            }
        } else {
            alert("Numele nu e bun!");
        }
    }
}

const giveURL = (input) => {
    console.log("Inputul este: " + input.files[0].name);
    if (input.files && input.files[0]) {
        return input.files[0].name;
    }
}