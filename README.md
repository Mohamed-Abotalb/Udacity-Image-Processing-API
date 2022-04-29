# **Udacity Image Processing API**

## **Overview**
This is an API that can be used in two different ways. The first, as a simple placeholder API that allows us to place images into our frontend with the size set via url parameters. The second use case is as a library to serve properly scaled versions of our images to the frontend to reduce page load size.

## **Requirements**
Here, I will list all the dependencies used in this project and how to install them.

1. TypeScript
`npm i -D typescript ts-node @types/node`

2. express and type express(Typescript support for express)
```
npm i express
npm i -D @types/express
```

3. nodemon
`npm i -D nodemon`

4. eslint
`npm i -D eslint`

5. prettier
`npm i -D prettier`

6. set up prettier and eslint
`npm install -D eslint-config-prettier eslint-plugin-prettier`

7. TypeScript with eslint plugin
`npm i -D @typescript-eslint/eslint-plugin`

8. jasmine with type definition and jasmine spec reporter
`npm i -D jasmine @types/jasmine jasmine-spec-reporter`

9. SuperTest with type definition 
`npm i -D supertest @types/supertest`

10. sharp and type definition
```
npm i sharp
npm i -D @types/sharp
```

## **How to build and start the server**
The project can be built and run in the following ways

1. Install all dependencies
`npm i`

2. Build
`npm run build`

This command will build the typeScript code into JavaScript and save them in the (./build) folder.

3. Start the Server
`npm start`

This command will start the server running on port (3000). And the front end homepage will be accessible at (http://localhost:3000) with status code of 200

## **Testing and Linting**
Here, I will show you how to run the test and also how to check that our code respects all the eslint rules.

1. Linting
`npm run lint`

2. Testing
`npm run test`

## **Endpoints and Functionality**
After installing the dependencies, building and executing the project, the endpoint will be available as demonstrated below:

### **Resizing Endpoint**
(http://localhost:3000/api/images/resize?imageName=<imageName>&width=<width>&height=<height>)

### **Query string parameters**

imageName is about the name of any available image in the (/images) folder
width is about custom image width
height is about custom image height

Using the endpoint above, we can provide our width and height value that we want our images to be resized. Check the example below

write the image name without the file extension like this snow not snow.jpg

(localhost:3000/api/images/resize?imageName=snow&width=200&height=200)

This endpoint is used to resize image with name of snow.jpg found in the ./images directory and saving it in the ./images/thumbnails directory. Then, it will serve this image to the frontend to be viewed.

If a dimension is given that has all images already resized to that dimension, no futher resizing will take place. Instead, the already resized images with the appropriate dimensions will be pushed to the frontend.

## **Handling Uncertainties**

This API handles situations where there are no images to resize or parameters are not provided to resize the images.

- **No image name or parameter is provided**
This API uses the directory ./images to get images when resizing. If we are accessing the resizing endpoint, we should also provide the dimension that will be used to resize the images. If no parameter is provided, a warning message will be shown on the frontend as seen above