/* ================================================= */
/* PIE VISUAL LAB — SQL ENGINE */
/* ================================================= */


/* ================================================= */
/* HELPER FUNCTIONS */
/* ================================================= */

function makeUserResult(usersArray) {
    if (!usersArray || usersArray.length === 0) {
        return `
            <div class="result-row">
                <span>0</span>
                <span>ROWS</span>
                <span>FOUND</span>
            </div>
        `;
    }
    
    return usersArray.map(user => `
        <div class="result-row">
            <span>${user.id}</span>
            <span>${user.name}</span>
            <span>${user.city}</span>
        </div>
    `).join("");
}

const commands = [

    /* ================= CREATE ================= */

    {
        name: "CREATE TABLE",

        sql:
`CREATE TABLE users (
    id INT,
    name VARCHAR(50),
    city VARCHAR(50)
);`,

        explanation:
            "CREATE TABLE creates a new table inside the database.",

        execute() {

            databaseState.usersCreated = true;

        },

        result() {

            return `
                <div class="result-row">
                    <span>TABLE</span>
                    <span>users</span>
                    <span>CREATED ✓</span>
                </div>
            `;
        }
    },


    /* ================= INSERT ================= */

    {
        name: "INSERT",

        sql:
`INSERT INTO users VALUES
(1, 'Rahul', 'Delhi'),
(2, 'Priya', 'Mumbai'),
(3, 'Aman', 'Delhi');`,

        explanation:
            "INSERT adds a new row into an existing table.",

        execute() {

            if (!databaseState.usersCreated)
                databaseState.usersCreated = true;

            databaseState.users = [
                { id: 1, name: "Rahul", city: "Delhi" },
                { id: 2, name: "Priya", city: "Mumbai" },
                { id: 3, name: "Aman", city: "Delhi" }
            ];

        },

        result() {

            return makeUserResult([
                { id: 1, name: "Rahul", city: "Delhi" },
                { id: 2, name: "Priya", city: "Mumbai" },
                { id: 3, name: "Aman", city: "Delhi" }
            ]);

        }
    },


    /* ================= SELECT ================= */

    {
        name: "SELECT",

        sql:
`SELECT *
FROM users;`,

        explanation:
            "SELECT reads data from the database.",

        execute() {

            databaseState.lastSelected =
                [...databaseState.users];

        },

        result() {

            return makeUserResult(
                databaseState.users
            );
        }
    },


    /* ================= WHERE ================= */

    {
        name: "WHERE",

        sql:
`SELECT *
FROM users
WHERE city = 'Delhi';`,

        explanation:
            "WHERE filters rows according to a condition.",

        execute() {

            databaseState.filtered =
                databaseState.users.filter(
                    user => user.city === "Delhi"
                );

        },

        result() {

            return makeUserResult(
                databaseState.filtered
            );
        }
    },


    /* ================= UPDATE ================= */

    {
        name: "UPDATE",

        sql:
`UPDATE users
SET city = 'Noida'
WHERE id = 1;`,

        explanation:
            "UPDATE changes existing data inside the database.",

        execute() {

            databaseState.users =
                databaseState.users.map(user => {

                    if (user.id === 1) {

                        return {
                            ...user,
                            city: "Noida"
                        };

                    }

                    return user;

                });

        },

        result() {

            const user =
                databaseState.users.find(
                    user => user.id === 1
                );

            return `
                <div class="result-row">
                    <span>${user.id}</span>
                    <span>${user.name}</span>
                    <span>${user.city}</span>
                </div>
            `;
        }
    },


    /* ================= DELETE ================= */

    {
        name: "DELETE",

        sql:
`DELETE FROM users
WHERE id = 3;`,

        explanation:
            "DELETE removes a selected row from the database.",

        execute() {

            databaseState.users =
                databaseState.users.filter(
                    user => user.id !== 3
                );

        },

        result() {

            return `
                <div class="result-row">
                    <span>ROW</span>
                    <span>ID 3</span>
                    <span>DELETED ✓</span>
                </div>
            `;
        }
    },


    /* ================= ORDER BY ================= */

    {
        name: "ORDER BY",

        sql:
`SELECT *
FROM users
ORDER BY name ASC;`,

        explanation:
            "ORDER BY sorts the rows according to a column.",

        execute() {

            databaseState.users.sort(
                (a, b) =>
                    a.name.localeCompare(b.name)
            );

        },

        result() {

            return makeUserResult(
                databaseState.users
            );
        }
    },


    /* ================= GROUP BY ================= */

    {
        name: "GROUP BY",

        sql:
`SELECT city, COUNT(*)
FROM users
GROUP BY city;`,

        explanation:
            "GROUP BY combines rows having the same value.",

        execute() {

            databaseState.groups = {};

            databaseState.users.forEach(user => {

                if (!databaseState.groups[user.city]) {

                    databaseState.groups[user.city] = 0;

                }

                databaseState.groups[user.city]++;

            });

        },

        result() {

            return `
                <div class="group-result">

                    ${Object.entries(
                        databaseState.groups
                    ).map(([city, count]) => `

                        <div class="group">

                            <span>${city}</span>

                            <b>${count} users</b>

                        </div>

                    `).join("")}

                </div>
            `;
        }
    },


    /* ================= JOIN ================= */

    {
        name: "JOIN",

        sql:
`SELECT users.name, orders.amount
FROM users
JOIN orders
ON users.id = orders.user_id;`,

        explanation:
            "JOIN connects related data from two different tables.",

        execute() {

            databaseState.joined =
                databaseState.users.map(user => {

                    const order =
                        databaseState.orders.find(
                            order =>
                                order.user_id === user.id
                        );

                    return {

                        name: user.name,

                        amount:
                            order
                                ? order.amount
                                : "—"

                    };

                });

        },

        result() {

            return databaseState.joined.map(item => `

                <div class="result-row">

                    <span>${item.name}</span>

                    <span>${item.amount}</span>

                    <span>JOINED</span>

                </div>

            `).join("");
        }
    },


    /* ================= COUNT ================= */

    {
        name: "COUNT",

        sql:
`SELECT COUNT(*)
FROM users;`,

        explanation:
            "COUNT calculates how many rows are currently inside the table.",

        execute() {

            databaseState.count =
                databaseState.users.length;

        },

        result() {

            return `

                <div class="count-result">

                    <div
                        id="countNumber"
                        class="count-number">
                        0
                    </div>

                    <div class="count-label">
                        TOTAL USERS
                    </div>

                </div>

            `;
        }
    }

];


/* ================================================= */
/* DATABASE STATE */
/* ================================================= */


let databaseState = {

    usersCreated: false,

    users: [],

    filtered: [],

    groups: {},

    joined: [],

    count: 0,

    orders: [

        {
            user_id: 1,
            amount: "₹30"
        },

        {
            user_id: 2,
            amount: "₹45"
        },

        {
            user_id: 3,
            amount: "₹60"
        }

    ]

};


/* ================================================= */
/* ELEMENTS */
/* ================================================= */


const commandElements =
    document.querySelectorAll(".command");

const databaseContent =
    document.getElementById(
        "databaseContent"
    );

const database =
    document.getElementById(
        "database"
    );

const result =
    document.getElementById(
        "result"
    );

const resultBox =
    document.querySelector(
        ".result-box"
    );

const successCheck =
    document.querySelector(
        ".success"
    );

const sqlCode =
    document.getElementById(
        "sqlCode"
    );

const explanation =
    document.getElementById(
        "explanation"
    );

const queryTitle =
    document.getElementById(
        "queryTitle"
    );

const editorCommand =
    document.getElementById(
        "editorCommand"
    );

const progress =
    document.getElementById(
        "progress"
    );

const requestPacket =
    document.getElementById(
        "requestPacket"
    );

const responsePacket =
    document.getElementById(
        "responsePacket"
    );

const ordersTable =
    document.createElement("div");

ordersTable.id = "orders";


let currentIndex = -1;

let playing = false;

let timer;


/* ================================================= */
/* MAIN EXECUTION */
/* ================================================= */


function runCommand(index) {

    currentIndex = index;

    const command =
        commands[index];


    /* --------------------------- */
    /* LEFT COMMAND STATE */
    /* --------------------------- */

    commandElements.forEach(
        (element, i) => {

            element.classList.remove(
                "active"
            );

            if (i < index) {

                element.classList.add(
                    "completed"
                );

            } else {

                element.classList.remove(
                    "completed"
                );

            }

        }
    );


    commandElements[index]
        .classList.add("active");


    /* --------------------------- */
    /* HEADER */
    /* --------------------------- */

    progress.textContent =
        `${index + 1} / ${commands.length}`;

    queryTitle.textContent =
        command.name;

    editorCommand.textContent =
        command.name;


    /* --------------------------- */
    /* SQL */
    /* --------------------------- */

    typeSQL(command.sql);


    /* --------------------------- */
    /* EXPLANATION */
    /* --------------------------- */

    explanation.textContent =
        command.explanation;


    /* --------------------------- */
    /* REQUEST */
    /* --------------------------- */

    animatePacket(
        requestPacket
    );


    /* --------------------------- */
    /* DATABASE */
    /* --------------------------- */

    setTimeout(() => {

        database.classList.add(
            "processing"
        );

        command.execute();

        renderDatabase(index);

    }, 900);


    /* --------------------------- */
    /* RESPONSE */
    /* --------------------------- */

    setTimeout(() => {

        database.classList.remove(
            "processing"
        );

        animatePacket(
            responsePacket
        );

    }, 1500);


    /* --------------------------- */
    /* RESULT */
    /* --------------------------- */

    // Reset animations
    successCheck.classList.remove("show");
    resultBox.classList.remove("updated");

    setTimeout(() => {

        result.innerHTML =
            command.result();
            
        successCheck.classList.add("show");
        
        resultBox.classList.remove("updated");
        void resultBox.offsetWidth;
        resultBox.classList.add("updated");

        animateResult(index);

    }, 2400);

}


/* ================================================= */
/* DATABASE RENDER */
/* ================================================= */


function renderDatabase(index) {


    /* ================================= */
    /* BEFORE CREATE */
    /* ================================= */

    if (
        !databaseState.usersCreated
    ) {

        databaseContent.innerHTML = `

            <div class="database-empty">

                <div class="empty-icon">
                    ▣
                </div>

                <strong>
                    Database is empty
                </strong>

                <span>
                    CREATE TABLE to begin
                </span>

            </div>

        `;

        return;

    }


    /* ================================= */
    /* USERS TABLE */
    /* ================================= */


    const usersHTML = `

        <div class="table">

            <div class="table-title">

                ▦

                users

            </div>


            <div class="table-head">

                <span>id</span>

                <span>name</span>

                <span>city</span>

            </div>


            <div id="userRows">

                ${
                    databaseState.users
                        .map(user => `

                        <div
                            class="table-row"
                            data-id="${user.id}"
                        >

                            <span>
                                ${user.id}
                            </span>

                            <span>
                                ${user.name}
                            </span>

                            <span>
                                ${user.city}
                            </span>

                        </div>

                    `)
                    .join("")
                }

            </div>

        </div>

    `;


    /* ================================= */
    /* ORDERS TABLE */
    /* ================================= */


    let ordersHTML = "";


    if (index >= 8) {

        ordersHTML = `

            <div class="table orders show">

                <div class="table-title">

                    ▦

                    orders

                </div>


                <div class="table-head">

                    <span>
                        user_id
                    </span>

                    <span>
                        amount
                    </span>

                </div>


                ${
                    databaseState.orders
                        .map(order => `

                        <div class="table-row">

                            <span>
                                ${order.user_id}
                            </span>

                            <span>
                                ${order.amount}
                            </span>

                        </div>

                    `)
                    .join("")
                }

            </div>

        `;

    }


    databaseContent.innerHTML =
        usersHTML + ordersHTML;


    /* ================================= */
    /* SPECIAL VISUAL EFFECTS */
    /* ================================= */


    if (index === 1) {

        const row =
            document.querySelector(
                "#userRows .table-row:last-child"
            );

        if (row) {

            row.classList.add("new");

        }

    }


    if (index === 3) {

        const rows =
            document.querySelectorAll(
                "#userRows .table-row"
            );

        rows.forEach(row => {

            const city =
                row.children[2]
                    .textContent
                    .trim();

            if (
                city !== "Delhi"
            ) {

                row.classList.add(
                    "filter-out"
                );

            } else {

                row.classList.add(
                    "new"
                );

            }

        });

    }


    if (index === 4) {

        const row =
            document.querySelector(
                '[data-id="1"]'
            );

        if (row) {

            row.classList.add(
                "updated"
            );

        }

    }


    if (index === 5) {

        const rows =
            document.querySelectorAll(
                "#userRows .table-row"
            );

        rows.forEach(row => {

            const id =
                row.children[0]
                    .textContent
                    .trim();

            if (id === "1") {

                row.classList.add(
                    "deleted"
                );

            }

        });

    }


    if (index === 6) {

        const rows =
            document.querySelectorAll(
                "#userRows .table-row"
            );

        rows.forEach((row, i) => {

            setTimeout(() => {

                row.classList.add(
                    "new"
                );

            }, i * 150);

        });

    }


    if (index === 7) {

        const rows =
            document.querySelectorAll(
                "#userRows .table-row"
            );

        rows.forEach(row => {

            row.classList.add(
                "new"
            );

        });

    }


    if (index === 8) {

        showJoinAnimation();

    }

}


/* ================================================= */
/* JOIN VISUAL */
/* ================================================= */


function showJoinAnimation() {

    const tables =
        document.querySelectorAll(
            ".table"
        );


    if (tables.length < 2)
        return;


    const users =
        tables[0];

    const orders =
        tables[1];


    users.style.boxShadow =
        "0 0 25px rgba(59,130,246,.2)";


    orders.style.boxShadow =
        "0 0 25px rgba(34,211,238,.2)";


    setTimeout(() => {

        users.style.boxShadow =
            "";

        orders.style.boxShadow =
            "";

    }, 1300);

}


/* ================================================= */
/* SQL TYPEWRITER */
/* ================================================= */


function typeSQL(text) {

    sqlCode.textContent = "";

    let i = 0;


    const typing =
        setInterval(() => {

            sqlCode.textContent =
                text.substring(0, i);

            i++;

            if (i > text.length) {

                clearInterval(
                    typing
                );

            }

        }, 12);

}


/* ================================================= */
/* PACKET */
/* ================================================= */


function animatePacket(packet) {

    packet.classList.remove(
        "go"
    );

    void packet.offsetWidth;

    packet.classList.add(
        "go"
    );

}


/* ================================================= */
/* RESULT ANIMATION */
/* ================================================= */


function animateResult(index) {

    if (index !== 9)
        return;


    const number =
        document.getElementById(
            "countNumber"
        );

    if (!number)
        return;


    let current = 0;

    const target =
        databaseState.count;


    const counter =
        setInterval(() => {

            current++;

            number.textContent =
                current;


            if (
                current >= target
            ) {

                clearInterval(
                    counter
                );

            }

        }, 180);

}


/* ================================================= */
/* CLICK COMMAND */
/* ================================================= */


commandElements.forEach(
    element => {

        element.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        element.dataset.index
                    );

                stopPlay();

                resetDatabase();

                /*
                 * Run all previous commands
                 * first so the database reaches
                 * the correct state.
                 */

                for (
                    let i = 0;
                    i <= index;
                    i++
                ) {

                    commands[i].execute();

                }


                /*
                 * Re-render final state.
                 */

                currentIndex =
                    index;

                commandElements.forEach(
                    (el, i) => {

                        el.classList.remove(
                            "active",
                            "completed"
                        );

                        if (i < index) {

                            el.classList.add(
                                "completed"
                            );

                        }

                    }
                );


                element.classList.add(
                    "active"
                );


                progress.textContent =
                    `${index + 1} / 10`;

                queryTitle.textContent =
                    commands[index].name;

                editorCommand.textContent =
                    commands[index].name;

                sqlCode.textContent =
                    commands[index].sql;

                explanation.textContent =
                    commands[index].explanation;


                renderDatabase(index);

                result.innerHTML =
                    commands[index].result();

            }

        );

    }
);


/* ================================================= */
/* PLAY ALL */
/* ================================================= */


document
    .getElementById("playBtn")
    .addEventListener(
        "click",
        () => {

            if (playing) {

                stopPlay();

            } else {

                startPlay();

            }

        }
    );


function startPlay() {

    playing = true;

    document.getElementById(
        "playBtn"
    ).textContent =
        "Ⅱ PAUSE";


    resetDatabase();

    currentIndex = -1;

    playNext();

}


function playNext() {

    currentIndex++;


    if (
        currentIndex >=
        commands.length
    ) {

        playing = false;

        document.getElementById(
            "playBtn"
        ).textContent =
            "↻ REPLAY";

        return;

    }


    runCommand(
        currentIndex
    );


    timer =
        setTimeout(
            playNext,
            4000
        );

}


function stopPlay() {

    playing = false;

    clearTimeout(timer);

    document.getElementById(
        "playBtn"
    ).textContent =
        "▶ PLAY";

}


/* ================================================= */
/* RESET DATABASE */
/* ================================================= */


function resetDatabase() {

    databaseState = {

        usersCreated: false,

        users: [],

        filtered: [],

        groups: {},

        joined: [],

        count: 0,

        orders: [

            {
                user_id: 1,
                amount: "₹30"
            },

            {
                user_id: 2,
                amount: "₹45"
            },

            {
                user_id: 3,
                amount: "₹60"
            }

        ]

    };


    databaseContent.innerHTML = `

        <div class="database-empty">

            <div class="empty-icon">
                ▣
            </div>

            <strong>
                Database is empty
            </strong>

            <span>
                CREATE TABLE to begin
            </span>

        </div>

    `;


    result.innerHTML = `

        <div class="result-empty">
            Waiting...
        </div>

    `;
    
    if (successCheck && resultBox) {
        successCheck.classList.remove("show");
        resultBox.classList.remove("updated");
    }


    commandElements.forEach(
        element => {

            element.classList.remove(
                "active",
                "completed"
            );

        }
    );


    progress.textContent =
        "0 / 10";

}


/* ================================================= */
/* INITIAL */
/* ================================================= */


resetDatabase();