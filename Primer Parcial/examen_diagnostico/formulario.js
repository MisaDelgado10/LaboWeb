console.log("Entrando home");
$(".submitButton").on('click', function(add){
    add.preventDefault();
    console.log("Entrando");
    alert("Button working");
    let email = $("#inputEmail").val();
    console.log(`Valor de email ${email}`);
    // let password = $("#todoText").val();
    // let address = $("#todoText").val();
    // let city = $("#todoText").val();
    // let gender = $("#todoText").val();
    // let phone = $("#todoText").val();
})