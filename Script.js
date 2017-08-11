            var start = new Date().getTime(); 
            
            
            var allTimes = [];
            
            /*
            
            Makes Shape Appear, either Square or Circle
            Initializes variables top, left, and size to dictate area of game and size of shape
            Random Background color of shape and arena
            
            */

            function shapeAppear() {
                
                sqOrCr();
                var top = Math.random() * 450;
                var left = Math.random() * 400;
                var size = Math.random() * 300;
                
                document.getElementById("body").style.backgroundColor = getRandColor();
                document.getElementById("shape").style.backgroundColor = getRandColor();
                document.getElementById("shape").style.width = size + "px";
                document.getElementById("shape").style.height = size + "px";
                document.getElementById("shape").style.top = top + "px";
                document.getElementById("shape").style.left = left + "px";
                document.getElementById("shape").style.display = "block";
                start = new Date().getTime();
                
            }

            /*
            Creates random hexadecimal values
            */
            
            function getRandColor() {
                
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                    }
                return color;
                
                }

            /*
            Waits anywhere from 0-2.5 seconds before new shape appears
            */

            function delayAppear() {
                
                setTimeout(shapeAppear, Math.random() * 2500);
                
            }

            /*
            Randomly decides whether it is square or circle
            */
            
            function sqOrCr() {
                
                var dice = Math.random() * 11;
                if( dice > 5) {
                    
                    document.getElementById("shape").style.borderRadius = "50%";
                    
                }
                else {
                    
                    document.getElementById("shape").style.borderRadius = "0%";
                    
                }
            
            }
            
            delayAppear();
            
            var start = new Date().getTime();
            
            document.getElementById("shape").onclick = function() {
                
                document.getElementById("shape").style.display = "none";
                
                var end = new Date().getTime();
                var timeTaken = (end - start)/1000;
                document.getElementById("timeTaken").innerHTML = timeTaken;
                delayAppear();
                
                
                
                
            }