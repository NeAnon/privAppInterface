function initializePage(){
	// Get the element with id="defaultOpen" and click on it  
	document.getElementById('defaultOpen').click();

    addAnimations();
}

function openTab(tabName) {
	// Declare all variables
	let tabcontent, tabs;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tabs" and remove the class "active" from all except the active one
	tabs = document.getElementsByClassName("tabs");
	for (let i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove("active");
        if(tabs[i].innerHTML == tabName){tabs[i].classList.add("active");}
	}

	// Show the current tab
	document.getElementById(tabName).style.display = "block";
}

function startFill(){
    document.getElementById("Design").style.display = "none";
    document.getElementById("Fill").style.display = "block";
}

function stopFill(){
    document.getElementById("Fill").style.display = "none";
    document.getElementById("Design").style.display = "block";
}

function addField(type){
    let message = "Pressing this will create a ";
    switch (type){
        case 0:
            message += "textbox field";
            break;
        case 1:
            message += "checkbox field";
            break;
        case 2:
            message += "label";
            break;
        case 3:
            message += "multiple choice (drop-down) field";
            break;
    }
    alert(message);
}

function addCardStats(){
    let element = document.getElementById("cardSection");
}

function downloadAllCardSrc(){
    alert('Downloads all data files. This may act as if clicking all card variable dowload buttons, but it may also combine everything into one file.');
}

function addNewCardStats(){
    alert('Creates a new card design file. See the existing ones for how they may differ.');
}

function addDesignSubTab(){
    alert('Adds another subtab.');
}

function openDesignSubTab(tab){
    let message = "Switches to the ";
    switch(tab){
        case 0:
            message += "1st subtab.";
            break;
        case 1:
            message += "2nd subtab. This one would have different graphics, fonts, layout etc. (things which are shared between all cards, such as back art, background, decor and such).";
            break;
    }
    alert(message);
}

function openDataSubTab(tab){
    let message = "Switches to the ";
    switch(tab){
        case 0:
            message += "1st subtab. This contains some code which is usually card-dependant.";
            break;
        case 1:
            message += "2nd subtab. This contains different card-dependant code, such as exclusive functions.";
            break;
    }
    alert(message);
}

function addAnimations(){
    // console.log(document.getElementsByClassName("tabs"));
    for(let tab of document.getElementsByClassName("tabs")){    
        //Design
        if(tab.innerHTML == "Design"){
            document.getElementById("design_icon").style.left = '4px';
            tab.addEventListener('mouseover', ()=>{
                if(tab.classList.contains("active")){return;}
                document.getElementById("design_icon").setAttribute("src", "./img/design_hover.gif");
            }); 
            tab.addEventListener('mouseout', ()=>{
                if(tab.classList.contains("active")){return;}
                document.getElementById("design_icon").setAttribute("src", "./img/design_empty.png");
            });
            tab.addEventListener('mousedown', ()=>{
                if(tab.classList.contains("active")){return;}
                document.getElementById("design_icon").setAttribute("src", "./img/design_active.gif");
                document.getElementById("data_icon").setAttribute("src", "./img/data_initial.png");
                document.getElementById("settings_icon").setAttribute("src", "./img/settings.png");
            }) 
        }
        if(tab.innerHTML == "Data"){
            document.getElementById("data_icon").style.left = '154px';
            tab.addEventListener('mouseover', ()=>{
                if(tab.classList.contains("active")){return;}
                document.getElementById("data_icon").setAttribute("src", "./img/data_hover.gif");
            }); 
            tab.addEventListener('mouseout', ()=>{
                if(tab.classList.contains("active")){return;}
                document.getElementById("data_icon").setAttribute("src", "./img/data_initial.png");
            });
            tab.addEventListener('mousedown', ()=>{
                if(tab.classList.contains("active")){return;}
                document.getElementById("design_icon").setAttribute("src", "./img/design_empty.png");
                document.getElementById("data_icon").setAttribute("src", "./img/data_active.gif");
                document.getElementById("settings_icon").setAttribute("src", "./img/settings.png");
            }) 
        }
        if(tab.innerHTML == "Settings"){
            document.getElementById("settings_icon").style.left = '304px';
            tab.addEventListener('mouseover', ()=>{
                if(tab.classList.contains("active")){return;}
                document.getElementById("settings_icon").setAttribute("src", "./img/settings_hover.gif");
            }); 
            tab.addEventListener('mouseout', ()=>{
                if(tab.classList.contains("active")){return;}
                document.getElementById("settings_icon").setAttribute("src", "./img/settings.png");
            });
            tab.addEventListener('mousedown', ()=>{
                if(tab.classList.contains("active")){return;}
                document.getElementById("design_icon").setAttribute("src", "./img/design_empty.png");
                document.getElementById("data_icon").setAttribute("src", "./img/data_initial.png");
                document.getElementById("settings_icon").setAttribute("src", "./img/settings.png");
            }) 
        }
    }
}