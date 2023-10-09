
const projects = [{
    render: "img",
    link: "https://github.com/JoltLaw/Momento-Images",
    img: "../assets/Moment.png",
    title: "Momento",
    body: "Momento is a small digital scrap booking application built using React Native. My main thought process behind it was that well instagram is really good at allowing people to share memories there may be some memories that people would prefer a little more privacy around. So I created what I deemed the first ever unsocial social media, Momento. It takes the ease of creating and the formatting of an instagram most and then adds in editing to make sure you save memories just how you remember them."
},

 {
    render: "img",
    link: "https://github.com/JoltLaw/TheLostWeekendSite#thelostweekendsite",
    img: "../assets/TLW.png",
    title: "The Lost Weekend",
    body: "The Lost Weekend is a dummy e-comerce store built using php. It's a small program meant to simulate the exprience of an online store front. from fetching items from a databse to displaying, to allowing the user to sort through the items, to picking the color and size a user wants, to the cart and checkout page, to sending the order information to the database, this application mimics the full online store exprience"
},

 {
    render: "img",
    link: "https://github.com/JoltLaw/Btn-Clicks",
    img: "../assets/Clicks.png",
    title: "Button Clicks", 
    body: "Button clicks is a small Java android application where global users compete against eachother to see who can tap a button the most times in five seconds."
},

 {
    render: "iframe",
    link: "https://joltlaw.github.io/JRLFIT/",
    title: "J.R.L Fitness",
    body: "J.R.L Fitness is a web application meant to help users with there fitness journeys. It currently features two calculators one for helping users figure out the daily calorie intake, and the other for helping them plan pyramid set and weight schemes"

}];








projects.forEach(project => {
    createPolariod(project)
});
