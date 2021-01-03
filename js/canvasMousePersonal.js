        const canvas = document.getElementById("canvas1");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let particleArray = [];
        const numeroParticulas = 800;

        // llammar posicion mouse

        const mouse = {
            x : null,
            y : null
        }
        window.addEventListener('mousemove', function(event){
            mouse.x = event.x;
            mouse.y = event.y;
            // console.log(mouse.x, mouse.y);
        });
        setInterval(function(){
            mouse.x = undefined;
            mouse.y = undefined;
        },200);

        //crear Particulas
        class Particles{
            constructor(x, y, size, color, weight){
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                this.weight = weight; 
            }
            draw(){
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            update(){
                this.size -= 0.05;
                if(this.size < 0 ){
                    this.x = (mouse.x +((Math.random() * 20)- 10));
                    this.y = (mouse.y +((Math.random() * 20)- 10));
                    this.size = (Math.random() * 15) + 2;
                    this.weight = (Math.random() *6) - 0.5;
                }
                this.y += this.weight;
                this.weight += 0.5;

                if(this.y > canvas.height - this.size){
                    this.weight *= -0.6;
                };
            }
        }
        function init(){
            particleArray = [];
            for(let i = 0; i<numeroParticulas; i++){
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let size = (Math.random() * 5) + 2;
                let color = "#2092a4";
                let weight = 1;
                particleArray.push(new Particles(x, y, size,color, weight));
                
            }
        }
        //Funcion de llamado recurcibo
        function animate(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            // ctx.fillStyle = "rgba(0,0,0,0.1)";
            // ctx.fillRect(0, 0, canvas.width, canvas.height);
            for(let i = 0; i<particleArray.length;i++){
                particleArray[i].update();
                particleArray[i].draw();
            }
            requestAnimationFrame(animate);
        }
        init();
        animate();
