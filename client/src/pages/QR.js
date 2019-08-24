import React from "react";


function QR() {
  return (
    <div>
        <div class="form-group">
      <label for="exampleTextarea">Example textarea</label>
      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
  
    <div class="form-group">
    <div class="custom-control custom-radio">
      <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" checked=""></input>
      <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
    </div>
    <div class="custom-control custom-radio">
      <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"></input>
      <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
    </div>
    <div class="custom-control custom-radio">
      <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" disabled=""></input>
      <label class="custom-control-label" for="customRadio3">Disabled custom radio</label>
    </div>
  </div>
  </div>
    
  );
}

export default QR;
