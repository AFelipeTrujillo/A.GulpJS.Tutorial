# A GulpJS Tutorial #

Gulp is a build system which allows automating task in common developing task, such as minification, livereload, image compression and others. In this repository, you will find a basic template to start with GulpJS and a simple file structure to get it.

![jv81.png](https://andresfelipetrujillodotcom1.files.wordpress.com/2016/07/what-is-gulpjs.jpg)

### Documentation: https://andresfelipetrujillo.com/2016/07/21/a-gulpjs-tutorial-with-example-and-repo-to-test ###


```
git clone https://github.com/AFelipeTrujillo/A.GulpJS.Tutorial.git
cd a.gulpjs.tutorial
npm install
gulp
```

## Docker ##

Finally, I created a docker container with the basic configuration for gulp. Next, I am going to show you the Dockerfile and how you can run it.

**Dockerfile**
```
FROM node:argon
RUN mkdir -p /usr/app
COPY package.json /usr/app
COPY gulpfile.js /usr/app
WORKDIR /usr/app
RUN npm install gulp -g
RUN npm install
EXPOSE 8080
CMD ["gulp"]
```

On repositorie folder, run:
```
docker build -t {{your-tag}}/gulp .
docker run -it -v /{{your-absolute-path}}/src:/usr/app/src -v /{{your-absolute-path}}/build:/usr/app/build {{your-tag}}/gulp
```

Cheers !! :beer: 
