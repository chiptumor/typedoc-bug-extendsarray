# Class extending array generates inarguable warning

## Search terms

<!-- Include keywords that might help others with the same problem find this issue -->

warning, warnings, 2 warnings, class, extend, extends, array, reduce,
reduceRight, param, @param, initialValue, unused, core, javascript, js,
typescript, ts

## Expected Behavior

<!-- How did you expect Typedoc to work? -->

TypeDoc should generate documentation on classes that extend `Array` without generating warnings not regarding user error.

## Actual Behavior

<!-- What does Typedoc fail to do? -->

TypeDoc generates two warnings for each class that extends an array, claiming that each of the inherited methods `reduce` and `reduceRight` have an unused parameter with the name `initialValue`.

As it's only a warning, compilation however continues as normal.

## Steps to reproduce the bug

<!--
Note: Turn off skipErrorChecks before reporting a crash. Bug reports for crashes with that option
on are out of scope.

Note: Please try to reproduce the issue WITHOUT any plugins enabled before reporting a bug.

If possible, please create a *minimal* repo reproducing your problem.
If it is more than a single small file, please submit a pull request to
https://github.com/TypeStrong/typedoc-repros
which changes the files necessary to reproduce your bug.

If this is not possible, include at least:
    1. Installed packages + versions
    2. The code TypeDoc doesn't work on
    3. tsconfig.json
    4. How you are running TypeDoc + any relevant configuration files
-->

From [my demo repo](https://github.com/chiptumor/typedoc-bug-extendsarray):

- ./index.ts:

  ```typescript
  export { Posts, type Post } from "./posts";
  ```
- ./posts.ts:

  ```typescript
  // ./posts.ts

  /** A post found on the main site. */
  export class Post { /* ... */ }

  /** An array of posts fetched from the main site. */
  export class Posts extends Array<Post> { /* ... */ }
  ```

```plain text
[warning] The signature Posts.reduce has an @param with name "initialValue", which was not used
[warning] The signature Posts.reduceRight has an @param with name "initialValue", which was not used
[info] html generated at ./docs
[warning] Found 0 errors and 2 warnings
```

- [Workflow proof](https://github.com/chiptumor/typedoc-bug-extendsarray/actions/runs/21653608521/job/62423639099#step:5:9)
- [Resulting docs](https://chiptumor.github.io/typedoc-bug-extendsarray)

## Environment

- TypeDoc version: 0.28.16
- TypeScript version: N/A
- Node.js version: 22.17.0
- OS: Windows 11 v24H2
