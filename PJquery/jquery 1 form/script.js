// 1. Pon tu nombre al atributo value del campo first name
$("[name='firstname']").val("Alan");
// 2. Pon el valor a la pregunta Favorite Day of Week a Monday
$("[name='fav_day']").val("Monday");
// 3. Cambia la etiqueta de First name a 'Tu nombre'
$("[name= 'first_name_label']").text("Tu nombre:")
// 4. Obtén el valor del atributo 'name' del campo Favorite Day of The Week
//alert($("[name='fav_day']").attr("name"));
// 5. Escoge la opción Female de la pregunta de género.
$("[name='sex'][value='male']").prop("checked",false);
$("[name='sex'][value='female']").prop("checked",true);
// 6. Encuentra la primera form del documento y pon el atributo name = personal_info
$("form:first").attr("name", "personal_info");
// 7. Encuentra la segunda form del documento y pon el atributo name = job_info
$('form').eq(1).attr("name","job_info");
// 8. Agrega un título h1 a cada una de las formas que diga 'Entrevista personal', 'Entrevista de trabajo' respectivamente
$("form:first").prepend("<h1> Entrevista Personal </h1>");
$("form:eq(1)").prepend("<h1> Entrevista de Trabajo </h1>");

// 9. Agrega un título a la pregunta Male/Female 'Gender'
$("[name='sex'][value='male']").before("<label> Gender: </label><br>");

// 10. Agrega una pregunta Email: con un input de tipo texto después de last name

$("[name='lastname']") .after("<br>¿Email?<br><input type='text' name='email'>")

// 11. Agrega la clase form a ambas formas
$("form").addClass("form");