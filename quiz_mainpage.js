function send(){
    no1=document.getElementById("no1").value;
    no2=document.getElementById("no2").value;
    actual_answer=parseInt(no1)* parseInt(no2);

    question_no="<h4>" + no1 + " X " + no2 + "</h4";

    input_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><button class='btn btn-info' onclick='check()'> Check </button>";

    row=question_no+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("no1").value="";
    document.getElementById("no2").value="";
}