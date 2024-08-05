Event Loop

The event loop is a fundamental concept in JavaScript that allows for non-blocking I/O operations despite the single-threaded nature of JavaScript. The event loop allows JavaScript to perform tasks asynchronously by maintaining an event queue and call stack.

Example Scenario

Operations:

1. A synchronous console log.

2. A setTimeout to simulate an asynchronous task.

3. A promise to demonstrate microtasks in the event loop.

Explanation

1. Synchronous logs:

- `console.log('Start');` and `console.log('Synchronous Log');` are synchronous operations and are executed immediately.

2. setTimeout:

- `setTimeout(() => { console.log('Timeout Log'); }, 0);` schedules an asynchronous task to run after a delay of 0 milliseconds. This task is placed in the task queue.

3. Promise:

- `Promise.resolve().then(() => { console.log('Promise Log'); });` schedules a microtask. Microtasks have higher priority and run before any tasks in the task queue.

4. Synchronous Log:

- `console.log('End');` runs synchronously after scheduling the asynchronous tasks.

Order of execution

1. The synchronous code is executed first:

- `Start`
- `Synchronous Log`
- `End`

2. The event loop then processes the queue of microtasks (promises):

- `Promise Log`

3. Finally, the event loop processes the queue of tasks (setTimeout):

- `Timeout Log`

So, the output of the code will be:
Start
Synchronous Log
End
Promise Log
Timeout Log

Visualizing the event loop

To help visualize the event loop, see down the process step by step:

1. Call stack:

- Initially, the call stack contains the `console.log` calls for `Start`, `Synchronous Log`, and `End`.
- These are executed and removed from the stack immediately.

2. Microtask queue:

- The promise's `.then` callback is added to the microtask queue.
- Microtasks are processed after the current turn of the event loop, but before any tasks in the task queue.

3. Task queue:

- The `setTimeout` callback is added to the task queue.
- Tasks in the task queue are processed after the microtask queue is empty.
