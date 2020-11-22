## Home Page

**1 - Change the Background Image**

To change the background image of the home page, go to src/app.css. Then, search for the class .roomsHero. Update the background property, and insert the url of the image you want to use.

**2 - Hero Elements**

All the infos you can see on the hero elements are located inside src/pages/Home.js . You can change the change the title and the subtitle of the banner by updating the properties of the Banner Component.

**3 - Change the default Logo (Beach Resort)**

Go to src/components/Navbar.js . Look for the div with the className of "nav-header". Inside the link element of that div, change the src of the image tag. If you want a text instead of an image, simply replace the entire image tag with your text.

**4 - Update the services section**

Go to src/components/services. The file itself is really straightforward. Inside that file, you just have to modify the services array and use the informations you want.

**5 - Update the Featured Rooms section**

Go to src/data.js . This file contains all the informations related to the different rooms. Each room is represented by a javascript object. This object has 2 main attributes: sys (for the id of the room) and fields. Everything happens inside the field attribute. Simply change the "featured" property. It can either be true or false. If true, the room will be displayed in the feature section of the homepage.

## Other Pages

All the other pages are automatically displayed, based on the informations provided by each room. These informations are all included in src/data.js . Simply follow the same architecture to add a room to your data. Since each room is an object inside an array, to remove a room, you just have to delete that object from the array.

## Run the code

Using the command line, open the directory containing your project. Type "npm start", and go to localhost:3000 to visualize the website. All updates you make to the code are automatically processed.
