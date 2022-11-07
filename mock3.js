

//  ------ All content loaders --------
const apiData = `{

    "user1": {
        "username" : "Prashanth",
        "subject" : "Some notes:",
        "message" : "what are you soing ",
        "date" : "17 Oct, 2021"
    },

    "user2": {
        "username" : "Harish",
        "subject" : "(No Subject)",
        "message ": "lorem",
        "date" : "18 Oct, 2021" 
    },
    
    "user3": {
        "username" : "Theresa Webb",
        "subject" : "The results to our user testing",
        "message" : "lorem",
        "date" : "19 Oct, 2021" 
    },
    
    "user4": {
        "username" : "Kathryn Murphy",
        "subject" : "Account Information for new users",
        "message" : "lorem",
        "date" : "20 Oct, 2021" 
    },
    
    "user5": {
        "username" : "Ariene McCoy",
        "subject" : "(No subject)",
        "message" : "lorem",
        "date" : "21 Oct, 2021" 
    },

    "user6": {
        "username" : "Ariene McCoy",
        "subject" : "Singing",
        "message" : "lorem",
        "date" : "22 Oct, 2021" 
    },

    "user7": {
        "username" : "Ariene McCoy",
        "subject" : "Singing",
        "message" : "lorem",
        "date" : "23 Oct, 2021" 
    },

    "user8": {
        "username" : "Ariene McCoy",
        "subject" : "Singing",
        "message" : "lorem",
        "date" : "23 Oct, 2021" 
    },

    "user9": {
        "username" : "Ariene McCoy",
        "subject" : "Singing",
        "message" : "lorem",
        "date" : "24 Oct, 2021" 
    }
}`;

const jsondata = JSON.parse(apiData);

(function loader(){

    sender();
    subject()
    message()
    date();

})();

function sender (){

    let userCount = 0;
    const arr = document.querySelectorAll('.senders');
    for(let ele of arr)
    {
        userCount++;
        ele.innerHTML = jsondata[`user${userCount}`].username;  
    }
}


function subject ()
{
    let userCount = 0;
    const arr = document.querySelectorAll('.subjects');

    for(let ele of arr)
    {
        userCount++;
        ele.innerHTML = jsondata[`user${userCount}`].subject;
    }
}

function message(){

    let userCount = 0;
    const arr = document.querySelectorAll('.message');

    for(let ele of arr)
    {
        userCount++;
        ele.innerHTML = jsondata[`user${userCount}`].message;
    }
}

function date ()
{
    let userCount = 0;
    const arr = document.querySelectorAll('.date');
    for(let ele of arr)
    {
        userCount++;
        ele.innerHTML = jsondata[`user${userCount}`].date;
    }
}


// ------ content loader ends -----------------


// ------ color star - starts -----------------
const unread = document.querySelectorAll('tr');

for(let ele of unread)
{
    ele.addEventListener('click', function(){
        this.classList.remove("unread");
    })
};

const stars = document.querySelectorAll('.star_color');

for(let star of stars)
{
    star.addEventListener('click', function(){
        
        if(star.classList.contains('stars'))
        {
            star.classList.remove('stars');
        }
        else
        {
            star.classList.add('stars');
        }
    });
}

// ----------- color star - ends ---------------

// ----------- all check - starts --------------

const allCheck = document.querySelector('.all_checker');
const checking = document.querySelectorAll('.check');

allCheck.addEventListener('click', function(){

    checker(checking);
    console.log(allCheck.checked);
});

function checker (check)
{
    if(allCheck.checked)
    {
        for(let x of check)
        {
            x.checked = true;
        }
    }
    else
    {
        for(let x of check)
        {
            x.checked = false;
        }
    }
}
// ----------- all check - ends ----------------

// ----------- search input - starts -----------

const searchInput = document.querySelector('.search_input');

searchInput.addEventListener('keypress', function(e)
{
    if(e.key === "Enter")
    {
        search(searchInput.value);
        // let temp = searchInput.value;
        // unread[userCount].classList.remove('search_identify');
    }
})

function search(value)
{
    const arr = [];
    let userCount = 0
    let found = false;

    for(let x in jsondata)
    {
        userCount++;
        if(jsondata[x].username === value)
        {
            found = true;
            unread[userCount].classList.add('search_identify');
            console.log(unread[userCount]);
            // unread[userCount].classList.remove('search_identify');
            arr.push(userCount);
        }
    }
    if(!found)
    {
        alert("User Not found");
    }
    classRemover(arr);
}

function classRemover(arr)
{
    let count = 0;

    for(let x of arr)
    {
        count++;
    }

    let temp = 0;

    setInterval(() => {
        if(temp < count)
        {
            if(unread[arr[temp]].classList.contains('search_identify'))
            {
                unread[arr[temp]].classList.remove('search_identify');
                console.log("Entered");
            }
            temp++;
            console.log(temp);
        }      
        // if(temp == count)
        // {
        //     sentint();
        // }
    }, 500);

    // function sentint()
    // {
    //     clearInterval(interval);
    // }

    setTimeout(() => {
        arr.splice(0, arr.length);
        console.log(arr);
    }, (500*count));
    temp = 1;
}


// ----------- search input - ends -------------