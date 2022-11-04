
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
// console.log(jsondata);


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
        console.log(jsondata[`user${userCount}`].date);
    }
}

// const datas = `{"user1": { "name":"prashanth", "age":"20", "city":"hyderabad"}, "success":true, "error":""}`;


// console.log(JSON.parse(datas)); */