window.onload = function() {
	var request = document.getElementById("lookup");
	var httpRequest;
    var result = document.getElementById("result");
    var search = document.getElementById("country");
	request.addEventListener("click", function(e) {
	    e.preventDefault();
	    var country = search.value;
		if(country != ""){
			httpRequest = new XMLHttpRequest();
			httpRequest.onreadystatechange = getInformation;
			var url = "world.php?country=" + country;
	    	httpRequest.open("GET", url);
	    	httpRequest.send();
		}
		else{
			result.innerHTML = "<h2>Search Result</h2><p>Please enter a country<p>";
		}
	});
	function getInformation() {
	    if (httpRequest.readyState === XMLHttpRequest.DONE){
			if (httpRequest.status === 200) {
				result.innerHTML = "<h2>Search Result</h2>"+httpRequest.responseText;
			}
		}
	}
    
};