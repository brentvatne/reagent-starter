# Base Reagent Project

I had a lot of trouble just getting something set up and running, so
this is intended to be a starting point for cljs/reagent work.

## How to use it

- Clone it
- Go to the directory, open index.html - that should work
- Run `lein cljsbuild auto` and leave it running
- Open `src/myproject/core.cljs` and change something, go back and check
  on the build script we just ran and it should say something like
```
Compiling "dist/app.js" from ["src"]...
Successfully compiled "dist/app.js" in 5.927 seconds.
```
- Open `index.html` again, you should see the changes.
