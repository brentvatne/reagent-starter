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
Compiling "dist/main.js" from ["src"]...
Successfully compiled "dist/main.js" in 20.927 seconds.
```
- Successive changes should be much compiled much more quickly than the first run.
- Open `index.html` again, you should see the changes.

## Run tests

- `lein cljsbuild test` will run the tests once. I couldn't see how to
  make this run them each time the file changes, so I instead do `lein
  cljsbuild auto test` and then manually run `phantomjs test/runner.js
  test/runner.html`. See the existing test file for an example of how to
  test rendering components.
