      function search(){
  
  var formData = {
    BranchIdList:[1],MinimumPrice:$('#MinimumPrice').val(),MaximumPrice:$('#MaximumPrice').val(),MinimumBedrooms:$('#MinimumBedrooms').val()
    
  };
  
  $.ajax({
			  url: 'http://core-api-uat.dezrez.com/api/simplepropertyrole/search?APIKey='+apikey,
			  type: 'POST',
			  data: JSON.stringify(formData),
			  dataType: 'json',
			  success: function(dostuff) {outputsr(dostuff); },
			  error: function() { alert('Aw Shitsnacks'); },
			  beforeSend: setHeadersr,
			});
			
			function setHeadersr(xhr) {
        xhr.setRequestHeader("Rezi-Api-Version", "1.0");
       
        xhr.setRequestHeader("Content-Type","application/json");
      
		}
		function outputsr(data) {
			var ref="";
			var property = "";
			var street = "";
			var price = "";
			var picture = "";
			var description = "";
			var flags = "";
			var bed = "";
			var bath = "";
			var rec = "";
			$.each(data, function(){
				if(this){
				  //console.log(this);
					ref = this.RoleId;
					street = this.Address.Street + "," + this.Address.Town;
					price = this.Price.PriceValue;
					if(this.RoomCountsDescription){
					  bed = this.RoomCountsDescription.Bedrooms;
					  bath = this.RoomCountsDescription.Bathrooms;
				    rec = this.RoomCountsDescription.Receptions;
					}
					if(this.Images.length){
						picture = this.Images[0].Url;
					}
					description = this.SummaryTextDescription;
          property = property + "<div class='row prop'><div class='row'><p class='h3'>"+ street +"</p></div><div class='row'><p class='lead'>£"+ price +"</p></div><div class='row'><div class='col-xs-12'><div class='col-xs-4'><p>"+ bed +" Bedrooms</p></div><div class='col-xs-4'><p>"+ rec +" Receptions</p></div><div class='col-xs-4'><p>"+ bath +" Bathrooms</p></div></div></div><div class='row primary'><img onclick='getfulldetail("+ ref + ")' src='" + picture +"&width=280'/></div><div class='row'>"+ description +"</div><div class='row'><div class='col-xs-6 pull-right'><div class='col-xs-6'>Request a call</div><div class='col-xs-6'><a onclick='getfulldetail("+ ref + ")'> Read More</a></div></div></div></div>";}
				
			});
    
    $('#propsearch').html(property);
    $('#featured').hide();
    $('#propsearch').show();
    
  
}
}
