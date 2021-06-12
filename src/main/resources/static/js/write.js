$(document).ready(function(){

	var htmlTitle = "";
	htmlTitle += '<label type="text" id="txtbytetitle" style="width:150px">/최대 글자수 : 100</label>';
	$("#titleValue").append(htmlTitle);
	
	var htmlWriter = "";
	htmlWriter += '<label type="text" id="txtbytewriter" style="width:150px">/최대 글자수 : 20</label>';
	$("#writerValue").append(htmlWriter);
	
	var htmlContent = "";
	htmlContent += '<label type="text" id="txtbytecontent" style="width:150px">/최대 글자수 : 3000 </label>';
	$("#contentValue").append(htmlContent);
	
});

function OntextCheck(obj, type) {

	console.log(obj.value);

	var str = new String(obj.value);
	var _byte = 0;
	if (str.length != 0) {
		for (var i = 0; i < str.length; i++) {
/*			var str2 = str.charAt(i);
			if (escape(str2).length > 4) {
				_byte += 2;
			}
			else {
				_byte++;
			}*/
			_byte++;
		}
	}
	/*document.getElementById("txtbyte").value = _byte;*/

	$("#txtbyte"+type).remove();
	
	var htmlStr = "";
		htmlStr += '<label type="text" id="txtbyte' + type + '"';
		/*console.log(htmlStr);*/
		htmlStr += 'style="width:150px;">' + _byte;
	
	if(type == "title") {
		htmlStr += '/최대 글자수 : 100 '; 
		if(_byte >= 100){
			
			alert("제목 용량 초과");
		}
	} else if(type == "writer") {
		htmlStr += '/ 최대 글자수 : 20';
		if(_byte >= 20){
			alert("이름 용량 초과");
		}
	} else if(type == "content") {
		htmlStr += '/ 최대 글자수 : 3000';
		if(_byte >= 3000){
			alert("내용 용량 초과");
		}
	}
	
	htmlStr += '</label>';
	
	if(type== "title") {
		$("#titleValue").append(htmlStr);
	} else if(type == "writer") {
		$("#writerValue").append(htmlStr);
	} else if(type == "content") {
		$("#contentValue").append(htmlStr);
	}
}
