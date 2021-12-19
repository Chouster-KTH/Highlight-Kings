# Project DH2642 - Highlight Kings
## [Highlight Kings on herokuapp](https://highlightkings.herokuapp.com/)
**1. Description:** Highlight Kings is a football application which targets football lovers who want an easy and interactive way to enjoy football highlights. The application is simply a web page where users can enjoy football highlights. What makes the application special is that highlights can be upvoted by the users. Users can watch highlights from several countries and leagues and rank them using the up/down-vote. The most upvoted highlights are saved in a leaderboard which the user can watch the highlights from, hence, the users can see if they agree or not with other users. In addition to the leaderboard, one can also choose to watch recent highlights. The website also includes features to list and watch fixtures (whole schedule of games to be played), from pre-selected leagues. With different search options for team and current match status, the user will be able to find a particular match in the current league. Another feature is to see the current standings of one of the pre-selected leagues.  
The user can navigate the site by using the fixed sidebar, to explore the different content.

**2. What we have done:** Much emphasis has been put towards ensuring that the two apis that we are using works as intended and that we can use the data received. To show that they work and test the data, views has been created. One that shows the latest highlights and one which shows the most recent finished matches in Serie A. In addition to this, a home page has been added but the views are still to be updated to include more functionality and data. Routers has also been implemented to allow navigation between the different pages in the application.

**3. What we still plan to do:**

* The upvote/downvote function

* Combine data from both API's, so that a user can find a highlight for a certain match 

* Views that allow the user to search for certain competitions and see live data from matches being played

* The presenters with state hooks

* Some minor features such as "About us" and "Standings" are still not finished 

* Interconnect components to the model

* Add (if time allows) login features to give more user control of the website

* Fix the CSS to make the site more stylish
 
**4. Your project file structure (short description/purpose of each file):**

* The home page is supposed to show the most upvoted highlights that have been uploaded

* Sidebarview is a meny that shows all the functions on the website

* The competition page is supposed to sort highlights based on country or tournament

* Latest highlights view is supposed to show the latest highlights regardless of competition

* About us will contain a short description of the project and the contributors


![home](https://gits-15.sys.kth.se/vvik/highlightkings/blob/master/src/images/home.png)
![competitions](https://gits-15.sys.kth.se/vvik/highlightkings/blob/master/src/images/competitions.png)
![about](https://gits-15.sys.kth.se/vvik/highlightkings/blob/master/src/images/about.png)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and and built using React and Node.js.

## Available Scripts

In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
