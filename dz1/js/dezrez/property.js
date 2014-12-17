function getfulldetail(roleId)
  {
			$.ajax({
			  url: 'http://core-api-uat.dezrez.com/api/simplepropertyrole/' + roleId +'?APIKey='+ apikey,
			  type: 'GET',
			  dataType: 'json',
			  success: function(fulldetails){outputfd(fulldetails)},
			  error: function() { alert('Aw Shitsnacks'); },
			  beforeSend: setHeadersr,
	    });
  }
  		function setHeadersr(xhr) {
        xhr.setRequestHeader("Rezi-Api-Version", "1.0");
       
        xhr.setRequestHeader("Content-Type","application/json");
      
		}
				
		function outputfd(data){
			var ref="";
			var fulldetails = "";
			var street = "";
			var price = "";
			var picture = "";
			var description = "";
			var flags = "";
			var bed = "";
			var bath = "";
			var rec = "";
				if(data){
					ref = data.RoleId;
					street = data.Address.Street;
					price = data.Price.PriceValue;
					  bed = data.Descriptions.Bedrooms;
					  bath = data.Descriptions.Bathrooms;
				    rec = data.Descriptions.Receptions;

					if(data.Images.length){
						picture = data.Images[0].Url;
					}
					//description = data.descriptions.name('summary');
          fulldetails = fulldetails + "<div class='row prop'>"+"<div class='row icons'><div class='col-xs-2'>Back</div><div class='col-xs-2'>Like this property</div><div class='col-xs-2'>Gallery</div><div class='col-xs-2'>Map</div><div class='col-xs-2'>EPC</div><div class='col-xs-2'>Brochure</div></div><div class='row'><p class='h3'>"+ street +"</p></div><div class='row'><p class='lead'>£"+ price +"</p></div><div class='row'><div class='col-xs-12'><div class='col-xs-4'><p>"+ bed +" Bedrooms</p></div><div class='col-xs-4'><p>"+ rec +" Receptions</p></div><div class='col-xs-4'><p>"+ bath +" Bathrooms</p></div></div></div><div class='row primary'><img onclick='getfulldetail("+ ref + ")'  src='" + picture +"&width=280'/></div><div class='row'>"+ description +"</div><div class='row'><div class='col-xs-6 pull-right'><div class='col-xs-6'>Request a call</div><div class='col-xs-6'><a onclick='getfulldetail("+ ref + ")'> Read More</a></div></div></div><div class='row'>Description text to go here</div></div>";}
				
			//$('#buy').hide();
			$('#buy').html(fulldetails);
			$('#propsearch').hide();
			$('#featured').hide();
			$('html, body').animate({ scrollTop: 0 }, 'slow');
			alert(bath);
		}
