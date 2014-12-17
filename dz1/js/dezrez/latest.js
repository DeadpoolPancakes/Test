    function getlatest() {
			
			$.ajax({
			  url: 'http://core-api-uat.dezrez.com/api/simplepropertyrole/search?APIKey=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1dGguZGV6cmV6LmNvbS9BcGlLZXlJc3N1ZXIiLCJhdWQiOiJodHRwczovL2FwaS5kZXpyZXouY29tL3NpbXBsZXdlYmdhdGV3YXkiLCJuYmYiOjE0MTc1MzU5ODEsImV4cCI6NDU3MzIwOTU4MSwiSXNzdWVkVG9Hcm91cElkIjoiMyIsIkFnZW5jeUlkIjoiMSIsInNjb3BlIjpbImltcGVyc29uYXRlX3dlYl91c2VyIiwiYmFzaWNfcHJvcGVydHlfcmVhZCJdfQ.1v0qDDdF27l-qPGW8YfrW33X45tlY5a02pwuxUj86jY',
			  type: 'POST',
			  data:'  {MinimumPrice: 0,  MaximumPrice:1000000,  MinimumBedrooms:0,  MaximumBedrooms:10,  BranchIdList:[1], PageSize:15}',
			  dataType: 'json',
			  success: function(latestout) {outputsrs(latestout); },
			  error: function() { alert('Aw Shitsnacks'); },
			  beforeSend: setHeadersr
			});
			
			
		}
		
		function setHeadersr(xhr) {
        xhr.setRequestHeader("Rezi-Api-Version", "1.0");
       
        xhr.setRequestHeader("Content-Type","application/json");
      
		}
		
		function outputsrs(data) {
		
			var ref=""
			var property = ""
			var street = ""
			var price = ""
			var picture = ""
			var description = ""
			var flags = ""
			$.each(data, function(){
				if(this){
					ref = this.RoleId;
					street = this.Address.BuildingName + "," + this.Address.Street + "," + this.Address.Town;
					price = this.Price.PriceValue;
					if(this.Images.length){
						picture = this.Images[0].Url;
					}
					description = this.SummaryTextDescription;
					property = property + '<div class="col-xs-3 latprop"><img src="' + picture +'&width=60"/></div>'
				}
				
			})

			$('#latest').html(property);
		
			
		}  