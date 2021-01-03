         
              function changeColor(){
                let red = document.getElementById('inputRed').value;
                let green = document.getElementById('inputGreen').value;
                let blue = document.getElementById('inputBlue').value;
                let color = "rgb("+red+","+green+","+blue+")";
                document.body.style.backgroundColor = color;
                document.getElementById('colorChanging').innerHTML= color;
            }
            inputRed.addEventListener('input',changeColor);
            inputGreen.addEventListener('input',changeColor);
            inputBlue.addEventListener('input',changeColor);