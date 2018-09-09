# Running the Project

## Running Frontend
To run the project, you just have to do the following...

```
npm start
```

It will run the frontend bundler and server and you can access it using `http://localhost:3474`

Note: if you are using `https://c9.io`, run the following...

```
npm run dev-c9
```

And you will need to access it using the url: `https://[name-of-container]-[username].c9users.io`

## Running Backend (Firebase functions)

To run Firebase functions, you need to do the following:

On another terminal window, use Node version 6

```
nvm use 6
```

Then run firebase functions

```
firebase serve --only functions
```

## Building Frontend for Production

To build the Frontend to production, run this command

```
npm run prod
```

## Serving Production code

To activate the server for showing production code, run this command

```
npm run server
```

## Linting

To check if you are following proper code conventions

```
npm run lint
```

If there are any errors, please fix it before pushing or asking a pull request.

## Testing

To test code, run this command

```
npm test
```

## What's Next?

Once you are done, you can now edit your files and [commit your changes to your repo](Commit.md)...


