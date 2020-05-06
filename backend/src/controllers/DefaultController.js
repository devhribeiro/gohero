module.exports = {
    index(req, res) {
        res.send(`
            <style type="text/css">
                #center {
                    position:absolute;
                    left:50%;
                    top:50%;
                    margin-left:-170px;
                    margin-top:-40px;
                    }
            </style>
            <h1 id="center" width="220px" height="80px">Backend Application</h1>`)
    }
}