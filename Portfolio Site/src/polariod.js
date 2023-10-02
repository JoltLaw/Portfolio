const polaroidContainer = document.getElementById("polaroidContainer");



const createPolariod = (project) => {

    // Creating the link to the project page and main card body
    const link = document.createElement("a");
    link.href = project.link
    const polariod = document.createElement("div");
    polariod.classList = "polaroid";
    
    // Dynamically rendering an img or Iframe based upon object
    
    let polariodImg;
    switch (project.render) {
        case "iframe": 
         polariodImg = document.createElement("iframe");
         polariodImg.src = project.link;

         break;
        default:
         polariodImg = document.createElement("img")
         polariodImg.src = project.img;
    }
    
    polariodImg.classList= "polaroidImg";
    
    
    
    // Creating the rest of the elements
    const title = document.createElement("h3");
    title.classList = "polaroidTitle";
    title.textContent = project.title;
    const text = document.createElement("p");
    text.classList = "polaroidText";
    text.textContent = project.body;
    
    // Appending the the polariod
    polariod.appendChild(polariodImg);
    polariod.appendChild(title);
    polariod.appendChild(text);
    link.appendChild(polariod)
    
    // Add polariod to the document
    polaroidContainer.appendChild(link)
    }