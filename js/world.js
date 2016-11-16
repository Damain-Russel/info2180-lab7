window.onload = function() {
	var request = document.getElementById("lookup");
	var httpRequest;
    var result = document.getElementById("result");
    var search = document.getElementById("country");
	request.addEventListener("click", function(e) {
	    e.preventDefault();
	    var country = search.value
		if(country != ""){
			httpRequest = new XMLHttpRequest();
			httpRequest.onreadystatechange = getInformation;
			var url = "world.php?all=false&country=" + country;
	    	httpRequest.open("GET", url);
	    	httpRequest.send();
		}
		else{
			var checked = document.getElementById("squaredFour").checked;
			console.log(checked);
			if(checked){
				httpRequest = new XMLHttpRequest();
				httpRequest.onreadystatechange = getInformation;
				var url = "world.php?all=true&country=all";
		    	httpRequest.open("GET", url);
		    	httpRequest.send();
			}
			else{
				result.innerHTML = "<h2>Search Result</h2><p>Please enter a country<p>";
			}
		}
	});
	function getInformation() {
	    if (httpRequest.readyState === XMLHttpRequest.DONE){
			if (httpRequest.status === 200) {
				var responseText = httpRequest.responseText;
				if(responseText == "FALSE"){
					result.innerHTML = "<h2>Search Result</h2><p>Sorry. Could not find anything with your query.<p>";
				}
				else {
					result.innerHTML = "<h2>Search Result</h2>"+responseText;
				}
			}
		}
	}
    
};