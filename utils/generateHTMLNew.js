
function testHTML(currentManager,currentEngineer,currentIntern){
    return `
    <!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>${currentManager.getTeamInfo()} Page </title>
    <style>
        .card-img-top {
            width: 23rem;
            height: 33rem;
        }

        ul {
            display: grid;
            grid-template-columns: repeat(2, auto);
            justify-content: space-around;
            gap: 0 3em;
            text-transform: capitalize;

        }

        .card-title {
            text-align: center;
        }

        .text-info {
            font-size: 30px;
        }



        /* #manager {
            display: none;
        }

        #engineer {
            display: none;
        }

        #intern {
            display: none;
        } */
    </style>
</head>

<body>


<h1> ${currentManager.getTeamInfo()} Team </h1>

    <div>
        <div class="d-flex justify-content-around align-items-center" >

            <div class="card" style="width: 35rem;" id="manager">
                <img class="card-img-top" src="./images/chyna.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title text-info">
                        <p> <b>Role:</b> Manager</p>
                    </h5>
                    <p class="card-text">

                    <ul class="text-info">
                        <li>
                            <div> <b> Name:</b> John</div>
                        </li>
                        <li>
                            <div> <b> Email:</b> john@gmail.com</div>
                        </li>
                        <li>
                            <div> <b> ID:</b> 12432</div>
                        </li>
                        <li>
                            <div> <b> Phone Number:</b> 4454454445</div>
                        </li>
                    </ul>
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>


            <div class="card" style="width: 35rem;" id="engineer">
                <img class="card-img-top" src="./images/triple-h.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title text-info">
                        <p> <b>Role:</b> Engineer</p>
                    </h5>
                    <p class="card-text">

                    <ul class="text-info">
                        <li>
                            <div> <b> Name:</b> Buster</div>
                        </li>
                        <li>
                            <div> <b> Email:</b> buster@gmail.com</div>
                        </li>
                        <li>
                            <div> <b> ID:</b> 34333</div>
                        </li>
                        <li>
                            <div> <b> GitHub Account:</b> 2454454445</div>
                        </li>
                    </ul>
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>


            <div class="card" style="width: 35rem;" id="intern">
                <img class="card-img-top" src="./images/xpac.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title text-info">
                        <p> <b>Role:</b> Intern</p>
                    </h5>
                    <p class="card-text">

                    <ul class="text-info">
                        <li>
                            <div> <b> Name:</b> Mike</div>
                        </li>
                        <li>
                            <div> <b> Email:</b> bernie@gmail.com</div>
                        </li>
                        <li>
                            <div> <b> ID:</b> 543433</div>
                        </li>
                        <li>
                            <div> <b> University:</b> 354345445</div>
                        </li>
                    </ul>
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    </div>

</body>

</html>`;}