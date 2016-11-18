## Getting Started:
1. <code>git clone</code> this repo on your local machine <br>
2. <code>npm install</code> <br>
2. <code>npm start</code> <br>
3. If you want hot reloading feature, skip #3 and type <code>npm run dev</code> instead of <code>npm start</code><br />
4. <code>http://localhost:8080</code>


##  Some notes on reactjs:
1. Components in react generally follow a `parent-child` relationship, where `child` components can be nested inside of other components.
2.  In the background your HTML gets bundled together inside of the components you create, through what is called JSX syntax. At runtime your JSX is converted to true HTML markup and placed into the document.
3.  In JSX syntax when creating a class for an element you need to set a class with `className` because the `class` is a reserved word in javascript.
4.  `State` in react is what is used to provide the dynamic interaction in your application. It affects how your UI components will render. State keeps track of the data that flows through the components in the app. The state, or data, changes when different events happen within the app. Only specific components should be in charge of handling state.
5.  Typically, you choose specific parent components to manage a portion of state in the application.
6.  State gets passed to child components through props.
7.  For a very basic example, typically your application will have some type of "default" state when it is first loaded. This default data loads into the parent components and is also passed down to child components via props. This initial state is subject to change as a user goes through and uses your application.
8.  Lets say we have a `parent component` that holds the state and passes down props to `children components`, the child components, which are considered stateless,can alter the state of the application when specific events are triggered by the user. Therefore it may be helpful to visualize that child components can "tell" their parent component to update the state to reflect a change in the application.
9.  Keeping specific components in charge of a portion of state makes your app more maintainable and easier to reason about when adding new features, or fixing when something goes wrong.
10. React utilizes a feature called the `Virtual DOM`. Instead of interacting heavily with the actual HTML DOM like jQuery, React uses the virtual approach to increase performance and efficiency. How it works is React will keep a virtual snapshot of the current HTML DOM, and when an event in the application requests a change to the user interface, the Virtual DOM technique goes into full effect.
11. A basic overview of the process of the Virtual DOM is: an event in the application requires a change in the UI (Requested changes to the DOM), then the proposed changes are compared to the most recent virtual snapshot of the real DOM through a process called `diffing`, and finally only the minimal changes needed are applied to the real DOM.
12. Inside the return statements of the render function you can also insert regular javascript expressions by interpolating the expression with curly braces.
13. Since react is only used to build UI layouts, so we are using `axios` to handle our javascript promises. [axios](https://github.com/mzabriskie/axios)
14. Whats different about functional components when you use the arrow function, the `this` variable automatically points to the correct object, so instead of accessing the `props` with `this.props.example` you can just access the props `props.example`.


## some CSS notes:
1.  When we do <code>margin: 40px auto;</code> for our `App component`, what it's saying is we are creating 40px of space at the top and bottom of our container and the `auto` will automatically center the left and right margins of the container.
2.  In our code <code>.app > h1 </code> the `>` symbol mean that the css-code will not bleed onto other elements outside of the `.app` class.
