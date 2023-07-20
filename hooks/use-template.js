const useTemplate = ({ name, course, date }) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            @page{
                margin: 10px;
            }
            body {
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 100vh;
            }
            .center {
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
            .outer-border{
                width: 60%;
                height: auto;
                border: 5px solid rgb(2, 61, 88);
            }
            .inner-border {
                border: 5px solid rgb(2, 61, 88);
                width: 100%;
                height: 100%;
                padding:2px;
            }
            #border-box {
                background-color: white;
                border: 15px solid rgb(2, 61, 88);
                margin: 10px;
                padding: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            div.Name {
                font-size: 2rem;
                font-family: "Google Sans", Roboto, Arial, sans-serif;
            }
        </style>
    </head>
    <body>
        <div class="outer-border">
            <div id="border-box">
                <div class="inner-border">
                    <p>
                        <img src="logo_iem.png" alt="logo_iem" class="center" style="width:auto;height:100px;text-align:center">
                    </p>
                    <div style="text-align: center;">
                    <h1>CERTIFICATE</h1>
                </div>
                <div style="text-align: center;">
                    <h2>Of Completion</h2>
                    <div style="text-align: center;">
                        <h3>This certificate is presented to</h3><br />
                        <div style="text-align: center;">
                        <h2><div class="Name">${name}</h2>
                    </div>
                    <br />
                    <p>For com</p>
                    <p>We are delighted in providing this certificate to you.</p>
                    <br>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p2>______________________</p2>
                    <br />
                    <p1><strong>Head Of the Department</strong></p1>
                </div>
            </div>
        </div>
    </body>
    </html>
    `
    return html
}

export default useTemplate