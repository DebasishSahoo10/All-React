## Tree Shaking

- Tree shaking is a term commonly used in the JavaScript context, especially with modern module bundlers like Webpack and Rollup. It refers to the process of eliminating dead or unused code from the final bundled file. It's not specific to React, but can be used with any JavaScript-based technology, including React.

- The term "tree shaking" is inspired by the metaphor of shaking a physical tree to drop the dead leaves. Similarly, in the coding context, the process involves "shaking" the dependency tree of your project to "drop" the unused code. 

- Here's a high-level overview of how tree shaking works:

1. You write your code, importing various modules where you need them.
2. A module bundler like Webpack or Rollup goes through your code, building a dependency graph which maps out every module that your code needs to function.
3. The bundler then traverses this graph, looking at each imported module to see if its exports are used anywhere in your code.
4. If the bundler finds exports from a module that are not used anywhere in your code, it will not include those exports in the final bundle.

- It's important to note that tree shaking only works with `import` and `export` statements. It doesn't work with CommonJS `require` statements. Therefore, to take advantage of tree shaking, you should structure your project to use ECMAScript modules (`import` and `export`). So when someone asks you why is ES6, why not ES5, this will be a great point.