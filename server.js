var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var art1 = {
  title:'Title one',
  heading:'Title first',
  date: '09 aug 2017',
  content: `
                     <p>
                        Hai this is my first article Hai this is my first articleHai this is my first articleHai this is my first articleHai this is my first article
                        Hai this is my first articleHai this is my first article
                        
                    </p>
                    <p>
                        Hai this is my first articleHai this is my first articleHai this is my first article
                        Hai this is my first articleHai this is my first articleHai this is my first articleHai this is my first article
                        
                    </p>
  `
 };
function createTemplate(data){
    var title = data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/ui/style.css" rel="stylesheet" />
           </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                    <hr/>
                    <h3>
                        ${heading}
                        
                    </h3>
                </div>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
</html>

`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ar1',function(req,res){
    res.send(createTemplate(art1));
});
app.get('/ar2',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'artone.html'));
});
app.get('/ar3',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'arttwo.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
