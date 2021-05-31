
// function fetchData(){
//     fetch("https://swapi.dev/api/people")
//     .then(response => {
//         if (!response.ok) {
//             throw Error("Error");
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data.results);
//         const html = data.results.map(people => {
//             return  `<p>Name: ${people.name} </p>` ;
//         })
//         .join("");
//         console.log(html);
//         document
//         .querySelector('#app')
//         .insertAdjacentHTML("afterbegin", html);
//     })
//     .catch(error => {
//         console.log(error)
//     });
//    }

   function showinfo(){
       var selectBox = document.getElementById('Characters');
       var userInput = selectBox.options[selectBox.selectedIndex].value
       if (userInput == 'luke') {
      //  document.getElementById('lukeinfo').style.visibility = 'visible';
      
        document.getElementById('c3poinfo').innerHTML = "";
        document.getElementById('r2d2info').innerHTML = "";
        document.getElementById('darthinfo').innerHTML = "";
        document.getElementById('leiainfo').innerHTML = "";
        document.getElementById('oweninfo').innerHTML = "";
        document.getElementById('beruinfo').innerHTML = "";
        document.getElementById('r5d4info').innerHTML = "";
        document.getElementById('biggsinfo').innerHTML = "";
        document.getElementById('obiinfo').innerHTML = "";
        fetch("https://swapi.dev/api/people")
        .then(response => {
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        console.log(data.results);
        const html = data.results.map(films => {
            return  `<p>Name: ${films.films} </p>` 
        })
        .join("");
        console.log(html);
        document
        .querySelector('#lukeinfo')
        .insertAdjacentHTML("afterbegin", html);
        document.getElementById("lukeinfo").innerHTML = 
        "A New Hope, " + "Return of Jedi, " 
        + "The Phantom Menace";      
    })
    .catch(error => {
        console.log(error)
    });
// when c3po is selected
       } 
       else if 
       ((userInput == 'c3po')) {
        document.getElementById('lukeinfo').innerHTML = "";

        document.getElementById('c3poinfo').innerHTML = "";
        document.getElementById('r2d2info').innerHTML = "";
        document.getElementById('darthinfo').innerHTML = "";
        document.getElementById('leiainfo').innerHTML = "";
        document.getElementById('oweninfo').innerHTML = "";
        document.getElementById('beruinfo').innerHTML = "";
        document.getElementById('r5d4info').innerHTML = "";
        document.getElementById('biggsinfo').innerHTML = "";
        document.getElementById('obiinfo').innerHTML = "";
        fetch("https://swapi.dev/api/people")
    .then(response => {
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        console.log(data.results);
        const html = data.results.map(people => {
            return  `<p>Name: ${people.films} </p>` ;
        })
        .join("");
        console.log(html);
        document
        .querySelector('#c3poinfo')
        .insertAdjacentHTML("afterbegin", html);
        document.getElementById("c3poinfo").innerHTML = 
        "A New Hope, "+"The Empire Strikes Back, "
        +"Return of Jedi, "+"The Phantom Menace, "+"Attack of the Clones";    
    })
    .catch(error => {
        console.log(error)
    });
}
// when r2d2 is selected
else if 
       ((userInput == 'r2d2')) {
        document.getElementById('lukeinfo').innerHTML = "";
        document.getElementById('c3poinfo').innerHTML = "";
     //   document.getElementById('r2d2info').innerHTML = "";
        document.getElementById('darthinfo').innerHTML = "";
        document.getElementById('leiainfo').innerHTML = "";
        document.getElementById('oweninfo').innerHTML = "";
        document.getElementById('beruinfo').innerHTML = "";
        document.getElementById('r5d4info').innerHTML = "";
        document.getElementById('biggsinfo').innerHTML = "";
        document.getElementById('obiinfo').innerHTML = "";
        fetch("https://swapi.dev/api/people")
    .then(response => {
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        console.log(data.results);
        const html = data.results.map(people => {
            return  `<p>Name: ${people.films} </p>` ;
        })
        .join("");
        console.log(html);
        document
        .querySelector('#r2d2info')
        .insertAdjacentHTML("afterbegin", html);
        document.getElementById("r2d2info").innerHTML = 
        "A New Hope, "+"The Empire Strikes Back, "
        +"Return of Jedi, "+"The Phantom Menace, "+"Attack of the Clones"; 
    })
    .catch(error => {
        console.log(error)
    });
}
// when darth is selected
else if 
       ((userInput == 'darth')) {
        document.getElementById('lukeinfo').innerHTML = "";
        document.getElementById('c3poinfo').innerHTML = "";
        document.getElementById('r2d2info').innerHTML = "";
     //   document.getElementById('darthinfo').innerHTML = "";
        document.getElementById('leiainfo').innerHTML = "";
        document.getElementById('oweninfo').innerHTML = "";
        document.getElementById('beruinfo').innerHTML = "";
        document.getElementById('r5d4info').innerHTML = "";
        document.getElementById('biggsinfo').innerHTML = "";
        document.getElementById('obiinfo').innerHTML = "";
        fetch("https://swapi.dev/api/people")
    .then(response => {
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        console.log(data.results);
        const html = data.results.map(people => {
            return  `<p>Name: ${people.films} </p>` ;
        })
        .join("");
        console.log(html);
        document
        .querySelector('#darthinfo')
        .insertAdjacentHTML("afterbegin", html);
        document.getElementById("darthinfo").innerHTML = 
        "A New Hope, "+"The Empire Strikes Back, "
        +"Return of Jedi, "+"Revenge of the Sith"; 
    })
    .catch(error => {
        console.log(error)
    });
}
// when leia is selected
else if 
       ((userInput == 'leia')) {
        document.getElementById('lukeinfo').innerHTML = "";
        document.getElementById('c3poinfo').innerHTML = "";
        document.getElementById('r2d2info').innerHTML = "";
        document.getElementById('darthinfo').innerHTML = "";
     //   document.getElementById('leiainfo').innerHTML = "";
        document.getElementById('oweninfo').innerHTML = "";
        document.getElementById('beruinfo').innerHTML = "";
        document.getElementById('r5d4info').innerHTML = "";
        document.getElementById('biggsinfo').innerHTML = "";
        document.getElementById('obiinfo').innerHTML = "";
        fetch("https://swapi.dev/api/people")
    .then(response => {
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        console.log(data.results);
        const html = data.results.map(people => {
            return  `<p>Name: ${people.films} </p>` ;
        })
        .join("");
        console.log(html);
        document
        .querySelector('#leiainfo')
        .insertAdjacentHTML("afterbegin", html);
        document.getElementById("leiainfo").innerHTML = 
        "A New Hope, "+"The Empire Strikes Back, "
        +"Return of Jedi, "+"Attack of the Clones"; 
    })
    .catch(error => {
        console.log(error)
    });
}
// when owen is selected
else if 
       ((userInput == 'owen')) {
        document.getElementById('lukeinfo').innerHTML = "";
        document.getElementById('c3poinfo').innerHTML = "";
        document.getElementById('r2d2info').innerHTML = "";
        document.getElementById('darthinfo').innerHTML = "";
        document.getElementById('leiainfo').innerHTML = "";
     //   document.getElementById('oweninfo').innerHTML = "";
        document.getElementById('beruinfo').innerHTML = "";
        document.getElementById('r5d4info').innerHTML = "";
        document.getElementById('biggsinfo').innerHTML = "";
        document.getElementById('obiinfo').innerHTML = "";
        fetch("https://swapi.dev/api/people")
    .then(response => {
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        console.log(data.results);
        const html = data.results.map(people => {
            return  `<p>Name: ${people.films} </p>` ;
        })
        .join("");
        console.log(html);
        document
        .querySelector('#oweninfo')
        .insertAdjacentHTML("afterbegin", html);
        document.getElementById("r2d2info").innerHTML = 
        "A New Hope, "+"Attack of the Clones, "
        +"Revenge of the Sith"; 
    })
    .catch(error => {
        console.log(error)
    });
}
// when beru is selected
else if 
       ((userInput == 'beru')) {
        document.getElementById('lukeinfo').innerHTML = "";
        document.getElementById('c3poinfo').innerHTML = "";
        document.getElementById('r2d2info').innerHTML = "";
        document.getElementById('darthinfo').innerHTML = "";
        document.getElementById('leiainfo').innerHTML = "";
        document.getElementById('oweninfo').innerHTML = "";
     //   document.getElementById('beruinfo').innerHTML = "";
        document.getElementById('r5d4info').innerHTML = "";
        document.getElementById('biggsinfo').innerHTML = "";
        document.getElementById('obiinfo').innerHTML = "";
        fetch("https://swapi.dev/api/people")
    .then(response => {
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        console.log(data.results);
        const html = data.results.map(people => {
            return  `<p>Name: ${people.films} </p>` ;
        })
        .join("");
        console.log(html);
        document
        .querySelector('#beruinfo')
        .insertAdjacentHTML("afterbegin", html);
        document.getElementById("beruinfo").innerHTML = 
        "A New Hope, "+"Attack of the Clones, "
        +"Revenge of the Sith"; 
    })
    .catch(error => {
        console.log(error)
    });
}
// when r5d4 is selected
else if 
       ((userInput == 'r5d4')) {
        document.getElementById('lukeinfo').innerHTML = "";
        document.getElementById('c3poinfo').innerHTML = "";
        document.getElementById('r2d2info').innerHTML = "";
        document.getElementById('darthinfo').innerHTML = "";
        document.getElementById('leiainfo').innerHTML = "";
        document.getElementById('oweninfo').innerHTML = "";
        document.getElementById('beruinfo').innerHTML = "";
     //   document.getElementById('r5d4info').innerHTML = "";
        document.getElementById('biggsinfo').innerHTML = "";
        document.getElementById('obiinfo').innerHTML = "";
        fetch("https://swapi.dev/api/people")
    .then(response => {
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        console.log(data.results);
        const html = data.results.map(people => {
            return  `<p>Name: ${people.films} </p>` ;
        })
        .join("");
        console.log(html);
        document
        .querySelector('#r5d4info')
        .insertAdjacentHTML("afterbegin", html);
        document.getElementById("r5d4info").innerHTML = 
        "A New Hope";
    })
    .catch(error => {
        console.log(error)
    });
}
// when biggs is selected
else if 
       ((userInput == 'biggs')) {
        document.getElementById('lukeinfo').innerHTML = "";
        document.getElementById('c3poinfo').innerHTML = "";
        document.getElementById('r2d2info').innerHTML = "";
        document.getElementById('darthinfo').innerHTML = "";
        document.getElementById('leiainfo').innerHTML = "";
        document.getElementById('oweninfo').innerHTML = "";
        document.getElementById('beruinfo').innerHTML = "";
        document.getElementById('r5d4info').innerHTML = "";
     //   document.getElementById('biggsinfo').innerHTML = "";
        document.getElementById('obiinfo').innerHTML = "";
        fetch("https://swapi.dev/api/people")
    .then(response => {
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        console.log(data.results);
        const html = data.results.map(people => {
            return  `<p>Name: ${people.films} </p>` ;
        })
        .join("");
        console.log(html);
        document
        .querySelector('#biggsinfo')
        .insertAdjacentHTML("afterbegin", html);
        document.getElementById("biggsinfo").innerHTML = 
        "A New Hope";
    })
    .catch(error => {
        console.log(error)
    });
}
// when obi is selected
else if 
       ((userInput == 'obi')) {
        document.getElementById('lukeinfo').innerHTML = "";
        document.getElementById('c3poinfo').innerHTML = "";
        document.getElementById('r2d2info').innerHTML = "";
        document.getElementById('darthinfo').innerHTML = "";
        document.getElementById('leiainfo').innerHTML = "";
        document.getElementById('oweninfo').innerHTML = "";
        document.getElementById('beruinfo').innerHTML = "";
        document.getElementById('r5d4info').innerHTML = "";
        document.getElementById('biggsinfo').innerHTML = "";
     //   document.getElementById('obiinfo').innerHTML = "";
        fetch("https://swapi.dev/api/people")
    .then(response => {
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        console.log(data.results);
        const html = data.results.map(people => {
            return  `<p>Name: ${people.films} </p>` ;
        })
        .join("");
        console.log(html);
        document
        .querySelector('#obiinfo')
        .insertAdjacentHTML("afterbegin", html);
        document.getElementById("").innerHTML = 
        "A New Hope, "+"The Empire Strikes Back, "
        +"Return of Jedi, "+"The Phantom Menace, "
        +"Attack of the Clones, "+"Revenge of the Sith";
    })
    .catch(error => {
        console.log(error)
    });
}

           
       
      // return false;
   
}

//    function fetchData2(){
//     fetch("https://swapi.dev/api/people")
//     .then(response => {
//         if (!response.ok) {
//             throw Error("Error");
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data.results);
//         const html = data.results.map(people => {
//             return  `<p>Name: ${people.films} </p>` ;
//         })
//         .join("");
//         console.log(html);
//         document
//         .querySelector('#app')
//         .insertAdjacentHTML("afterbegin", html);
//     })
//     .catch(error => {
//         console.log(error)
//     });
//    }   

//    function showinfo2(){
//     var selectBox = document.getElementById('Characters');
//     var userInput = selectBox.options[selectBox.selectedIndex].value
//     if (userInput == 'c3po') {
//         document.getElementById('app').style.visibility = 'visible';
//     } else {
        
//     }
//     return fetchData2();
// }
// }
 //  fetchData();