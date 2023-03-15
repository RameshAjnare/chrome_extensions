// const getMessage= async ()=>{
//     console.log("user window...");
//     try {
//         var myData = JSON.stringify("hello javascripts....");  //  what kind of data we want show on the chrome extensions
//         const newData = document.querySelector("#myData") // html file tag id name and select area
//         newData.innerHTML = myData  // and set data json data on tag help innerHTML
//         Autofill.tool();
//     } catch (error) {




//     }
// }

const btn = document.querySelector('.button_text')
//const email = document.querySelector('.user_email')

// this function call when ever window will be reload or load
btn.addEventListener("click", async () => {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getFormData
    })

})

function getFormData() {
    console.log("====>hello");

    var randomNameString = function () {
        // let text = "";
        // let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzgdfsdfdsa";
        // for (let i = 0; i < length; i++) {
        //     text += possible.charAt(Math.floor(Math.random() * possible.length));
        // }
        // console.log("text value===>",text);

        const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'David','Aayushi','Ankit',"Ramesh",'Ayush','Ram'];
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown'];

        function getRandomName() {
            const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            return firstName + ' ' + lastName;
        }
        const randomName = getRandomName();
        return randomName
    }


    let randomEmail = function (length){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzgdfsdfdsa";
        const pattern = ['@gmail.com', 'yahoo.com', '.edu', '.org', '.info'];
        const pattern22 = pattern[Math.floor(Math.random() * pattern.length)];
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        console.log("text value===>",text);
        return text +' '+ pattern22
    }

    let randomNumber = function (length) {
        var text = "";
        var possible = "1234567890";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text
    }



    // randomly choose radio button... 
    const radioButtons = document.querySelectorAll('input[type=radio]');
    const randomIndex = Math.floor(Math.random() * radioButtons.length);
    radioButtons[randomIndex].checked = true;

    
    // randomly choose radio button...
    // const checkboxesFill = function (){
    //     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    //     const randomIndex1 = Math.floor(Math.random() * checkboxes.length);
    //     checkboxes[randomIndex1].checked = true;
    // }
    // randomly choose radio button...
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const randomIndex1 = Math.floor(Math.random() * checkboxes.length);
    checkboxes[randomIndex1].checked = true;


    let formTap = document.forms
    console.log("length====>", formTap.length);
    for (let index = 0; index < 8; index++) {
        let inputs = document.forms[index].getElementsByTagName("input");
        for (let index2 = 0; index2 <= inputs.length; index2++) {
            if (inputs[index2].type == 'text') {
                inputs[index2].value = randomNameString();
            }
            if (inputs[index2].type == 'email') {
                inputs[index2].value = randomEmail(8);
            }
            if (inputs[index2].type == 'tel') {
                inputs[index2].value = randomNumber(10);
            }
            // if (inputs[index2].type == 'checkbox') {
            //     checkboxesFill()  
            // }
        }
    }



} //getformData


