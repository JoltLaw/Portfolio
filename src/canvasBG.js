
// prep the canvas on page load
window.onload = function() {
    const canvas = document.getElementById("bgCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    for(let i = 0; i < 150; i++) {
        renderStars(ctx);
    }
    renderCity(ctx);
  
}

// Render the star elements
const renderStars = (c) => {

    // Randomly generate the color of a star
    const starColorNumber = Math.floor(Math.random() * 6);

    let starColor
    let glowColor

    switch(starColorNumber) {
        // White Stars
        case 0: 
        starColor = "white";
        glowColor = "#ffffff46";
        break;

        // Yellow Stars
        case 1: 
        starColor = "#fafca7";
        glowColor = "#fafca746";
        break;

        // Blue stars
        case 2: 
        starColor = "#adf7ff";
        glowColor = "#adf7ff46";
        break;

        // Orange stars
        case 3: 
        starColor = "#ffc866";
        glowColor = "#ffc86646";
        break;
        
        // Red Stars
        case 4: 
        starColor = "#ff7070";
        glowColor = "#ff707046"
        break;

        default: 
        starColor = "white";
        glowColor = "#ffffff46";
    }
    c.strokeStyle = starColor;
    c.fillStyle = starColor;


    // array of the main buildings position and messurements 
    const centerPiecePositions = [
        {   x: window.innerWidth / 2 -100, 
            y: window.innerHeight - 850 + 14,
            width: 200 + 14
        },
        {
            x: window.innerWidth / 2 -50 ,
            y:  window.innerHeight - 1050,
            width: 100 + 14,
        }, 
        {
            x: window.innerWidth / 2 -6 ,
            y: window.innerHeight - 1150 + 14,
            width: 12 + 14,
        }
    ];
    
    // Randomly calculating the position of the new star
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight - 660;
    let validStar = true

    // Checking if position conflicts
    centerPiecePositions.forEach((posistion) => {
        if (x >= posistion.x -14 && posistion.x + posistion.width > x && y > posistion.y){
            renderStars(c);
            validStar = false
            return
        }
    })

    // Exiting function if conflicting positions 
    if (!validStar) {
        return;
    }


    // Drawing the star
    c.beginPath();
    c.arc(x, y, 2, 0, Math.PI * 2, false);
    c.stroke();
    c.fill();

    
    
    // Draw the glow of the star
    c.strokeStyle = glowColor;
    c.beginPath();
    c.arc(x, y, 4, 0, Math.PI * 2, false);
    c.stroke();
    c.fill();

    // Funtion to handle the twinkle of the star
   const twinkleHandeler = async () => {
        
        // drawing the pimary star body
        c.beginPath()
        c.clearRect(x - 4, y -4, 14, 14)
        c.strokeStyle = starColor;
        c.fillStyle = starColor;
        c.arc(x, y, 2, 0, Math.PI * 2, false);
        c.stroke();
        c.fill();
        
        // Drawing out lighter area around star to give effect of glowing
        c.beginPath()
        c.strokeStyle = glowColor;
        c.fillStyle = glowColor;
        c.arc(x, y, 4, 0, Math.PI * 2, false);
        c.stroke();
        c.fill();

        // Setting one second timer before reseting star
        setTimeout(() => {
            c.beginPath()
            c.clearRect(x - 7, y -7, 14, 14)
            c.strokeStyle = starColor;
            c.fillStyle = starColor;
            c.arc(x, y, 2, 0, Math.PI * 2, false);
            c.stroke();
            c.fill();
        
            // Setting twenty seconds * math.Random before star can twinkle again
            setTimeout(() => {
                twinkleHandeler()
            }, 20000 * Math.random());
        }, 1000)

   }

   twinkleHandeler()
};



// Create the shapes of the city skyline
const renderCity = (c) => {
    
    // setting the color to just slightly off black
    c.fillStyle = "#111";

    // Adding in baseplate to build off of
    c.fillRect(0, window.innerHeight - 30, window.innerWidth, 50);

    // Creating builds
    c.fillRect(window.innerWidth / 2 - 1350, window.innerHeight - 600, 100, 600);
    c.fillRect(window.innerWidth / 2 - 1250, window.innerHeight - 380, 100, 380);
    c.fillRect(window.innerWidth / 2 - 1150, window.innerHeight - 620, 150, 620);
    c.fillRect(window.innerWidth / 2 - 1000, window.innerHeight - 440, 100, 440);
    c.fillRect(window.innerWidth / 2 - 900, window.innerHeight - 500, 150, 500);
    c.fillRect(window.innerWidth / 2 - 750, window.innerHeight - 640, 150, 640);
    c.fillRect(window.innerWidth / 2 - 600, window.innerHeight - 550, 150, 550);
    c.fillRect(window.innerWidth / 2 - 450, window.innerHeight - 460, 150, 460);
    c.fillRect(window.innerWidth / 2 - 300, window.innerHeight - 320, 150, 320);
    c.fillRect(window.innerWidth / 2 + 150, window.innerHeight -280, 75, 280);
    c.fillRect(window.innerWidth / 2 + 225, window.innerHeight -460, 150, 460);
    c.fillRect(window.innerWidth / 2 + 375, window.innerHeight -600, 150, 600);
    c.fillRect(window.innerWidth / 2 + 525, window.innerHeight -380, 150, 380);
    c.fillRect(window.innerWidth / 2 + 675, window.innerHeight - 440, 150, 440);
    c.fillRect(window.innerWidth / 2 + 825, window.innerHeight - 620, 150, 620);
    c.fillRect(window.innerWidth / 2 + 975, window.innerHeight - 550, 150, 550);
    c.fillRect(window.innerWidth / 2 + 1125, window.innerHeight - 620, 175, 620);

    buildCenterPieceBuilding(c)
}

// Creates centet piece of the city skyline
const buildCenterPieceBuilding = (c) => {
    c.fillStyle = "#111";

c.fillRect(window.innerWidth / 2 -150, window.innerHeight - 650, 300, 650);
c.fillRect(window.innerWidth / 2 -100, window.innerHeight - 850, 200, 200);
c.fillRect(window.innerWidth / 2 -50, window.innerHeight - 1050, 100, 200);
c.fillRect(window.innerWidth / 2 -6, window.innerHeight - 1150, 12, 100);
}


// Sample code for adding in a moon cycle

// const createMoon = (c, cords) => {

//     c.strokeStyle = "green";
//     c.fillStyle = "green";
//     c.beginPath();
//     c.arc(window.innerWidth / 2 , window.innerHeight / 2 + (window.innerWidth - 200 - Math.PI * 100), window.innerWidth, 0, Math.PI * 2, false);
//     c.stroke();
  



//     // moons highest point  c.arc(window.innerWidth / 2 , window.innerHeight / 2 - 200 - Math.PI * 100, 100, 150, 0, Math.PI * 2, false);
//     // Moons first point on the left side of the left side of the page c.arc(window.innerWidth / 8 , window.innerHeight / 1.55 - 200 - Math.PI * 100, 100, 150, 0, Math.PI * 2, false);
//     // Moons final point on the right side c.arc(window.innerWidth * .87 , window.innerHeight / 1.55 - 200 - Math.PI * 100, 100, 150, 0, Math.PI * 2, false);


//     c.strokeStyle = "#fcf8b0";
//     c.fillStyle = "#fcf8b0"
//     c.beginPath();
//     c.arc(window.innerWidth * .87 , window.innerHeight / 1.55 - 200 - Math.PI * 100, 100, 150, 0, Math.PI * 2, false);
//     c.stroke();
//     c.fill();

//     c.beginPath();
//     c.arc(window.innerWidth * .13 , window.innerHeight / 1.55 - 200 - Math.PI * 100, 100, 150, 0, Math.PI * 2, false);
//     c.stroke();
//     c.fill();

//     c.beginPath();
//     c.arc(window.innerWidth / 2 , window.innerHeight / 2 - 200 - Math.PI * 100, 100, 150, 0, Math.PI * 2, false);
//     c.stroke();
//     c.fill();

//     setInterval()

//     buildCenterPieceBuilding(c)


// }