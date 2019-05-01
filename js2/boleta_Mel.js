function v_document(e) {
  //for numbers only
  var key = window.event ? e.which : e.keyCode;

  if (key < 48 || key > 57)
    e.preventDefault();

}

function v_data(){
    alert("result");
}
