alert("Hey! wlecome to jamalon website " )

var book = prompt("what is the book you looking for?")
function user(book){

if(book == "Harry potter books"){
document.write(
  "<div>" + "<h3>" + book+"</h3>"
+ "<img  src='https://cdn.jamalon.com/c/p/7000132_170x170.jpg' width='100' height='100'     />" + "</div>")
}
else if (book =="The rich father the poor father"){
document.write(
  "<div>" + "<h3>" + book+"</h3>"
+ "<img  src='https://cdn.jamalon.com/c/p/1014741_170x170.jpg' width='100' height='100'     />" + "</div>")
}

else{
  alert('sorry this book didnt arrive yet ')
}
}
user(book);

function days(){
  alert('How many left in the stock of' +book)
  const n = 3;
  for (let i = 1; i <= n; i++) {
    
    alert(i)
  }
}
  days();
