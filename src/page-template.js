const generateEmployee = employee => {
    if (employee.getRole() === 'Engineer') {
        return `<div class="col s12 m4">
                    <div class="card">
                        <div class="card-content white-text">
                            <span class="card-title black-text"><i class="material-icons">engineering</i> ${employee.name}</span>
                            <p class="black-text">Engineer</p>
                        </div>
                        <div class="card-action">
                            <ul>
                                <li>Employee ID: ${employee.id}</li>
                                <li><a href = "mailto: ${employee.email}">${employee.email}</a></li>
                                <li>Github: ${employee.github}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
    };

    if (employee.getRole() === 'Intern') {
        return `<div class="col s12 m4">
                    <div class="card">
                        <div class="card-content white-text">
                            <span class="card-title black-text"><i class="material-icons">engineering</i> ${employee.name}</span>
                            <p class="black-text">Intern</p>
                        </div>
                        <div class="card-action">
                            <ul>
                                <li>Employee ID: ${employee.id}</li>
                                <li><a href = "mailto: ${employee.email}">${employee.email}</a></li>
                                <li>Github: ${employee.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
    };
};

const generatePage = manager => {
    return `<!DOCTYPE html>
<html class="no-js" lang="">

    <head>
        <meta charset="utf-8">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta property="og:title" content="">
        <meta property="og:type" content="">
        <meta property="og:url" content="">
        <meta property="og:image" content="">

        <link rel="manifest" href="site.webmanifest">
        <link rel="apple-touch-icon" href="icon.png">
        <!-- Place favicon.ico in the root directory -->

        <!-- LINK THE RIGHT STYLE SHEETS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="../src/style.css">
        <!-- DID YOU REMEMBER TO LINK THE RIGHT SHEETS? -->

        <meta name="theme-color" content="#fafafa">
    </head>

    <body>
        <header>
            <nav>
                <div class="nav-wrapper blue">
                    <a href="#" class="brand-logo center blue">My Team</a>
                </div>
            </nav>
        </header>

        <!-- Add your site or application content here -->
        <main class="container">
            <div class="row">
                <div class="col s12 m4">
                    <div class="card">
                        <div class="card-content white-text">
                            <span class="card-title black-text"><i class="material-icons">coffee</i>${manager.name}</span>
                            <p class="black-text">Manager</p>
                        </div>
                        <div class="card-action">
                             <ul>
                                <li>Employee ID: ${manager.id}</li>
                                <li><a href = "mailto: ${manager.email}">${manager.email}</a></li>
                                <li>Office number: ${manager.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                ${generateEmployee(manager.team[0])}
            </div>
        </main>
    </body>
</html>`
};

module.exports = generatePage;
