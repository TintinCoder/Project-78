console.log('Project 78');
// Defining Arrays
var images = ["./bro.png","./dad.png","./mom.png","./sis.png", "./main.png"];
var names = ["Rajat", "Pradeep", "Kirti", "Chetna", "Divyam Yadav"];
// Function
i = 0;
function update() {
    i++;
    var number_of_people_in_family = 5;
    if (i > number_of_people_in_family) {
        i = 0;
    }
    var updated_images = images[i];
    var updated_names = names[i];
    document.getElementById('image').src = updated_images;
    document.getElementById('name').innerHTML = updated_names;
}