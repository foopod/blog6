---
title: Learning useReducer for React from a stranger live on stream
date: "2023-09-02"
description: A kind stranger drops in on my stream to teach me how to use the useReducer hook
image: /img/jono-stream.png
tags:
  - codingwithjono
---

> Note: If you want to watch it for your self you can find the link [here](https://www.twitch.tv/videos/1913689246?t=2h6m45s).

![](/img/jono-stream.png)

Recently I had fun streaming myself making a simple habit tracking app. The intention was to go in with some basic wireframes and see what happens.

And wow, did I learn a lot!

## The App

I made a quick mock-up of the habit tracker app in Miro (highly recommend for whiteboarding and wireframing - not sponsored).

![](/img/wireframes-habit.png)

The goal is to allow a user to add a habit and keep track of it over time. Set a name, a daily goal and an emoji. Then each day you can add to your count for that habit. Eventually you will be able to see how you are tracking for that habit over time in a calendar view.

## My Learning Experience

I want to share my experience of using `useReducer()` for the first time.

I had got to a point in making my react app where I had the habits set up, you could add a habit and see them in your list. But I needed to add the feature where you can increment the count of that habit for today. This was complex to say the least. I was currently using `useState()` to keep all my habits in an array.

It looked something like this...

```js
[
  {
    name: "Drink Water",
    goal: 3,
    icon: "🍸",
    id: 1,
    data: [
      {
        date: "2023-09-01",
        count: 2,
      },
      {
        date: "2023-09-02",
        count: 3,
      },
      ...
    ],
  },
  ...
];
```

I was psyching myself into doing this when a lovely human in chat commented "Sounds like a good useReducer use case!". Shout out to WozzyBoop!

And what better time to learn than with someone in chat cheering me on.

I have been put off of Redux before in the past by others and never even looked into it or `useReducer()`. It probably doesn't help that most of the react apps I have worked on are simple in nature, not really needed anything complex in terms of state management.

But it really isn't so bad (at least `useReducer()`), I won't speak for Redux.

The gist of it is that it is that it is very similar to `useState()`, at least when similar to when you pass a function to a setter. Consider you have something like this in your app...

```js
const MyComponent = () => {
  const [count, setCount] = useState(0);

  const addToCount = () => {
    setCount((previous) => previous + 1);
  };
};
```

Here we pass a function to our setter that updates the internal state based on the previous state. The is essentially the method `useReducer()` uses for all updates. Let's take a look at the same example, but set using `useReducer()`.

```js
const reducer = (state, action) => {
  if (action.type === "add_to_count") {
    return state + 1;
  }
};

const MyComponent = () => {
  const [count, dispatch] = useState(reducer, 0);

  const addToCount = () => {
    dispatch({ type: "add_to_count" });
  };
};
```

You will notice that in this set up we have a function called `reducer`, this gets called automatically on your state when you dispatch a state change.

This may look overkill for something like incrementing a count. But consider using `useState` to perform an update like change the values on some object in an array. Now your `addToCount()` function will have to handle copying the current state of the array. This and more will become logic that needs to go somewhere, the choice we make is where to put it. In our reducer function that can be reused all over our app, or in a function in this component.

From what I can tell below are some of the situations where I would go for one or the other.

Use `useState()` if...

- You are using primitive data types (number, string, boolean)
- Properties aren't tied together (ie you will be mostly updating them separately)
- The logic you are using to update state is simple

Use `useReducer()` if...

- You are using arrays or objects
- You are updating multiple properties of your array/object in the same update
- You have complex logic surrounding updates

If you are curious and want to see more, have a look at the way we used `useReducer()` in [the app](https://github.com/foopod/habit-tracker/blob/main/src/context/ActivityContext.jsx) I made on stream.

And check out the habit tracker [here](https://habits-tracked.netlify.app/) (note, it is designed for mobile and doesn't have any desktop styling yet).
