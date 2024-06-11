function sendEmail(){
    // var Name =document.getElementById("name").value;
    // var Email =document.getElementById("email").value;
    // var Project =document.getElementById("project").value;
    // var Number =document.getElementById("numbar").value;

    // var finalmessage= "Name " + Name + "<br/> Email "+ Email + "Project "+ Project + "Number "+ Number;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "staff.ierix@gmail.com",
        Password : "410B342D794DCAE57635946F36509E386226",
        To : 'staff.ierix@gmail.com',
        From : "staff.ierix@gmail.com",
        Subject : "This is the subject",
        Body : "this is the body"
    }).then(
      message => {
        if(message == "OK"){
            swal("Sucessful!", "You clicked the button!", "success");
        }
        else{
            swal("Error", "You clicked the button!", "error");
        }
      }
    );
}
