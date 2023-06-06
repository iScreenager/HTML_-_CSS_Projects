# HTML_-_CSS_Projects

 <div class="card shadow p-3 mb-4 bg-white rounded" style="width: 45rem;">
                    <img class="card-img-top" src="Images/images.jpg" alt="Card image cap">
                    <div class="card-body text-center">
                        <h4><b>Sattva Park Cubix</b></h4>
                        <p>DEvanahali, Benguular</p>
                        <h5><b>Rs. 43.63 L</b></h5>
                        <div>
                            <button type="button" class="btn btn-danger mt-3">Proceed</button>
                        </div>
                    </div>
                </div>
                
                
                
<div class="slider-container">
  <div class="card shadow p-3 mb-4 bg-white rounded">
    <img class="card-img-top" src="Images/images.jpg" alt="Card image cap">
    <div class="card-body text-center">
      <h4><b>Sattva Park Cubix</b></h4>
      <p>DEvanahali, Benguular</p>
      <h5><b>Rs. 43.63 L</b></h5>
      <div>
        <button type="button" class="btn btn-danger mt-3">Proceed</button>
      </div>
    </div>
  </div>
  
  <!-- Repeat the card HTML as many times as needed -->
  
</div>

.slider-container {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 20px 0;
}

.card {
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: 45rem;
  margin-right: 20px;
}

/* Add any additional styles for the card as needed */
