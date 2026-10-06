# Dev Stack : A Modern Dev Stack Builder Website

Dev Stack is a modern stack builder website. Where you select technology for your stack. After select a techonolgy, it's added to your stack. You can't add one technology twice to your stack. You can remove techonlogy from your stack using "X" button click. Also it's have dedicated feature to remove all technology from your stack. You can see beautiful toast message when add/remove technology to your stack.

## ⚙️ Technology Used In This Website
- React.js
- Tailwind CSS
- TypeScript (ES6+)
- React-Toastify
- JSON
- Vite

## 📝 Features
- You can add technology to your stack
- You can remove technology from your stack
- You can remove all technology at a time form your stack
- Technology add button disable after added it to stack

## 🤔 React Question & Answer

#### What is JSX, and why is it used in React?
JSX means JavaScript XML. It's used in react for markup component as like HTML. Basically it's a syntactic sugar.

#### What is the difference between props and state?
Props as like function arguments and It's used to pass data from parent components to child components. State is a situation of a component. React track state for re-render the component. Based on state change react re-render the component.

#### What does the useState hook do, and where did you use it in this project?
useState hook is a tracker for track state. It's used for track state & update state. In this project I use state for track stack changes.

#### What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect hook handle side effect of a component. I need this for update UI or any state change if json data change/state change.

#### Why does every item in a .map() list need a unique key prop?
React didn't update dom directly. At first it's track state change and compare before & after state in virtual dom. Then update only changed dom. So it's need a key to track which elements are change.

#### What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering is a render process based on a codition. In this project we use conditional rendering in empty state. If stack length is 0 it's show empty ui otherwise selected stack.

#### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
We can pass data from parent to child using props. And child can send data to parent using function arguments.