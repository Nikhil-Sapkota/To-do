// let icons = [
//     { element: document.querySelector('.Image1'), hover: 'SVG/Dashboard-hover.svg', default: 'SVG/Dashboard.svg' },
//     { element: document.querySelector('.Image2'), hover: 'SVG/Tasks-hover.svg', default: 'SVG/tasks.svg' },
//     { element: document.querySelector('.Image3'), hover: 'SVG/Calendar-hover.svg', default: 'SVG/Calendar.svg' },
//     { element: document.querySelector('.Image4'), hover: 'SVG/Projects-hover.svg', default: 'SVG/Projects.svg' },
//     { element: document.querySelector('.Image5'), hover: 'SVG/Bell-hover.svg', default: 'SVG/Bell.svg' },
//     { element: document.querySelector('.Image6'), hover: 'SVG/Restart-hover.svg', default: 'SVG/Restart.svg' },
//     { element: document.querySelector('.Image7'), hover: 'SVG/Setting-hover.svg', default: 'SVG/Setting.svg' }
// ];

// let Active = null;
// let ActiveDefault = null;

// function hover_color(icon, hoverSrc, defaultSrc) {
//     if (Active !== null && ActiveDefault !== null) {
//         Active.src = ActiveDefault;
//     }
//     icon.src = hoverSrc;
//     Active = icon;
//     ActiveDefault = defaultSrc;
// }

// icons.forEach(({ element, hover, default: def }) => {
//     element.addEventListener('click', () => {
//         hover_color(element, hover, def);
//     });
// });


// let TodayDiv = document.querySelector('.Today');
// let Next7DaysDiv = document.querySelector('.Next7Days');
// let Completed = document.querySelector('.Completed');
// let Trash = document.querySelector('.Trash');
// let ActiveDiv = null;

// const allDivs = [TodayDiv, Next7DaysDiv, Completed, Trash];

// function activateDiv(selectedDiv) {
//     if (ActiveDiv !== selectedDiv) {
//         allDivs.forEach(div => {
//             div.style.backgroundColor = '';
//             div.style.color = '';
//         });
//         selectedDiv.style.backgroundColor = '#3A3B40';
//         selectedDiv.style.color = '#cdcdcd';
//         ActiveDiv = selectedDiv;
//     }
// }

// TodayDiv.addEventListener("click", () => activateDiv(TodayDiv));
// Next7DaysDiv.addEventListener("click", () => activateDiv(Next7DaysDiv));
// Completed.addEventListener("click", () => activateDiv(Completed));
// Trash.addEventListener("click", () => activateDiv(Trash));


// let MoreMenuOptions = document.querySelector('.MoreMenuOption')
// let ListAdder = document.querySelector('.ListAdding')
// let Input = document.querySelector('#ListName')
// let List = document.querySelector('.List')
// let ListItems = document.querySelector('.ListItems')

// ListAdder.addEventListener('click', () => {
//     Input.style.display = 'flex';
//     Input.focus()
// })

// ListItems.classList.add('ListItems')
// Input.addEventListener('keypress', function (Key) {
//     if (Key.key === 'Enter') {

//         Key.preventDefault();

//         const ListValue = Input.value

//         if (ListValue === '' || ListValue == ' ') return;

//         const newListItem = document.createElement('div');

//         newListItem.className = 'ListItems';

//         newListItem.style.display = 'flex';

//         newListItem.innerHTML = `

//         <div class="Icon"><img src="SVG/Menu.svg" alt="00"></div>
//         <div class="Title">${ListValue}</div>
//         <div class="DotMenu"><img src="SVG/Dot Menu Hover.svg" alt="00"></div>`;

//         List.appendChild(newListItem)


//         Input.style.display = 'none';

//         Input.value = '';
//     }

// })
// Input.value = ''

// let InputTaker = document.querySelector('#TaskAdder')
// let TaskList = document.querySelector('.TasksLists')

// InputTaker.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter' && InputTaker.value !== "") {
//         let InputValue = InputTaker.value.trim()
//         let TaskListItem = document.createElement('div')
//         TaskListItem.className = 'TaskListItem'
//         TaskListItem.innerHTML = `
//             <p class = "checkbox"><input type="checkbox" name="Check" id="Check"></p>
//             <div class="TaskName">${InputValue}</div>
//             <div class="TaskStatus"><p>Today</p></div>
//         `

//         TaskList.appendChild(TaskListItem)
//         InputTaker.value = ""
//     }
// })

// let Dashboard = document.querySelector('.Image1')
// let Task = document.querySelector('.Image2')
// let Calendar = document.querySelector('.Image3')
// let Projects = document.querySelector('.Image4')
// let Bell = document.querySelector('.Image5')
// let Restart = document.querySelector('.Image6')
// let Setting = document.querySelector('.Image7')

// let Buttons = [Dashboard, Task, Calendar, Projects, Bell, Restart, Setting]

// let DashboardContent = document.querySelector('.DashboardContent');
// let CalendarContent = document.querySelector('.CalendarContent');
// let TaskContent = document.querySelector('.TaskContent');
// let ProjectsContents = document.querySelector('.ProjectsContents');
// let BellContent = document.querySelector('.BellContent');
// let UserProfile = document.querySelector('.ProfileContent');
// let RestartContent = document.querySelector('.RestartContent');
// let SettingsContent = document.querySelector('.SettingsContent');
// let Menu = document.querySelector('.Menu')

// let Contents = [DashboardContent, TaskContent, CalendarContent, ProjectsContents, BellContent, RestartContent, SettingsContent]; // removed UserProfile for alignment
// ifor (let i = 0; i < Buttons.length; i++) {
//     Buttons[i].addEventListener('click', () => {
//         // Hide all content sections
//         Contents.forEach(content => {
//             content.style.display = 'none';
//             content.style.zIndex = '0';
//         });

//         // Special logic for Dashboard (index 0)
//         if (i === 0) {
//             Menu.style.display = 'flex';
//         } else {
//             Menu.style.display = 'none';
//         }

//         // Show the selected content section
//         Contents[i].style.display = 'flex';
//         Contents[i].style.zIndex = '2';
//     });
// }


let icons = [
    { element: document.querySelector('.Image1'), hover: 'SVG/Dashboard-hover.svg', default: 'SVG/Dashboard.svg' },
    { element: document.querySelector('.Image2'), hover: 'SVG/Tasks-hover.svg', default: 'SVG/tasks.svg' },
    { element: document.querySelector('.Image3'), hover: 'SVG/Calendar-hover.svg', default: 'SVG/Calendar.svg' },
    { element: document.querySelector('.Image4'), hover: 'SVG/Projects-hover.svg', default: 'SVG/Projects.svg' },
    { element: document.querySelector('.Image5'), hover: 'SVG/Bell-hover.svg', default: 'SVG/Bell.svg' },
    { element: document.querySelector('.Image6'), hover: 'SVG/Restart-hover.svg', default: 'SVG/Restart.svg' },
    { element: document.querySelector('.Image7'), hover: 'SVG/Setting-hover.svg', default: 'SVG/Setting.svg' }
];

let Active = null;
let ActiveDefault = null;

function hover_color(icon, hoverSrc, defaultSrc) {
    if (Active !== null && ActiveDefault !== null) {
        Active.src = ActiveDefault;
    }
    icon.src = hoverSrc;
    Active = icon;
    ActiveDefault = defaultSrc;
}

icons.forEach(({ element, hover, default: def }) => {
    element.addEventListener('click', () => {
        hover_color(element, hover, def);
    });
});

// Section highlight logic
let TodayDiv = document.querySelector('.Today');
let Next7DaysDiv = document.querySelector('.Next7Days');
let Completed = document.querySelector('.Completed');
let Trash = document.querySelector('.Trash');
let ActiveDiv = null;
const allDivs = [TodayDiv, Next7DaysDiv, Completed, Trash];

function activateDiv(selectedDiv) {
    if (ActiveDiv !== selectedDiv) {
        allDivs.forEach(div => {
            div.style.backgroundColor = '';
            div.style.color = '';
        });
        selectedDiv.style.backgroundColor = '#3A3B40';
        selectedDiv.style.color = '#cdcdcd';
        ActiveDiv = selectedDiv;
    }
}

TodayDiv.addEventListener("click", () => activateDiv(TodayDiv));
Next7DaysDiv.addEventListener("click", () => activateDiv(Next7DaysDiv));
Completed.addEventListener("click", () => activateDiv(Completed));
Trash.addEventListener("click", () => activateDiv(Trash));

// List creation logic
let MoreMenuOptions = document.querySelector('.MoreMenuOption');
let ListAdder = document.querySelector('.ListAdding');
let Input = document.querySelector('#ListName');
let List = document.querySelector('.List');
let ListItems = document.querySelector('.ListItems');

ListAdder.addEventListener('click', () => {
    Input.style.display = 'flex';
    Input.focus();
});

Input.addEventListener('keypress', function (Key) {
    if (Key.key === 'Enter') {
        Key.preventDefault();
        const ListValue = Input.value.trim();

        if (ListValue === '') return;

        const newListItem = document.createElement('div');
        newListItem.className = 'ListItems';
        newListItem.style.display = 'flex';
        newListItem.innerHTML = `
            <div class="Icon"><img src="SVG/Menu.svg" alt="00"></div>
            <div class="Title">${ListValue}</div>
            <div class="DotMenu"><img src="SVG/Dot Menu Hover.svg" alt="00"></div>
        `;

        List.appendChild(newListItem);

        Input.style.display = 'none';
        Input.value = '';
    }
});

// Task adder
let InputTaker = document.querySelector('#TaskAdder');
let TaskList = document.querySelector('.TasksLists');

InputTaker.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && InputTaker.value.trim() !== "") {
        let InputValue = InputTaker.value.trim();
        let TaskListItem = document.createElement('div');
        TaskListItem.className = 'TaskListItem';
        TaskListItem.innerHTML = `
            <p class="checkbox"><input type="checkbox" name="Check" id="Check"></p>
            <div class="TaskName">${InputValue}</div>
            <div class="TaskStatus"><p>Today</p></div>
        `;

        TaskList.appendChild(TaskListItem);
        InputTaker.value = "";
    }
});

// Main navigation handling
let Dashboard = document.querySelector('.Image1');
let Task = document.querySelector('.Image2');
let Calendar = document.querySelector('.Image3');
let Projects = document.querySelector('.Image4');
let Bell = document.querySelector('.Image5');
let Restart = document.querySelector('.Image6');
let Setting = document.querySelector('.Image7');

let Buttons = [Dashboard, Task, Calendar, Projects, Bell, Restart, Setting];

let DashboardContent = document.querySelector('.DashboardContent');
let CalendarContent = document.querySelector('.CalendarContent');
let TaskContent = document.querySelector('.TaskContent');
let ProjectsContents = document.querySelector('.ProjectsContents');
let BellContent = document.querySelector('.BellContent');
let RestartContent = document.querySelector('.RestartContent');
let SettingsContent = document.querySelector('.SettingsContent');
let Menu = document.querySelector('.Menu');

let Contents = [DashboardContent, TaskContent, CalendarContent, ProjectsContents, BellContent, RestartContent, SettingsContent];

for (let i = 0; i < Buttons.length; i++) {
    Buttons[i].addEventListener('click', () => {
        // Hide all content sections
        Contents.forEach(content => {
            content.style.display = 'none';
            content.style.zIndex = '0';
        });

        // Special logic for Dashboard (index 0)
        if (i === 0) {
            Menu.style.display = 'flex';
        } else {
            Menu.style.display = 'none';
        }

        // Show the selected content section
        Contents[i].style.display = 'flex';
        Contents[i].style.zIndex = '2';
    });
}
