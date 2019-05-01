function v_document(e) {
  var key = window.event ? e.which : e.keyCode;

  if (key < 48 || key > 57)
    e.preventDefault();

}
