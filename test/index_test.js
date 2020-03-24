describe('Random', function() {
    beforeEach(function() {
	document.body.innerHTML='<div id="app">Enter the length of character: <input type="text" id="num">  <button onclick="stringGen()">submit</button> <p id="result"></p></div>';
      
    });

    afterEach(function() {
        document.body.removeChild(document.getElementById('app'));
    });

    describe('string', function() {
         it('checking random number', function() {
	    document.getElementById("num").value=4;
	    var str1=stringGen();
            str1=str1.replace(" ", "");
	    //console.log(str1.length);
            expect(str1.length).toBe(4);

        });

	it('comparing random numbers', function() {
	    document.getElementById("num").value=4;
            var str1=stringGen();
	    var str2=stringGen();
	    var c=(str1==str2)?true:false;
	    expect(c).toBe(false);

        });
    });
});
