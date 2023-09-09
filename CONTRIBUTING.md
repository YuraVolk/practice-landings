# Contributing Guidelines for the Repository

Thank you for your interest in contributing to this repository! Your contributions are highly appreciated. To ensure a smooth and efficient collaboration, please follow these guidelines when contributing to the project.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Submitting Issues](#submitting-issues)
3. [Submitting Pull Requests](#submitting-pull-requests)
4. [Additional Labels](#additional-labels)
5. [Code Style and Conventions](#code-style-and-conventions)

### Getting Started <a name="getting-started"></a>
This is a catalog of practice landings showcasing HTML & CSS techniques, and as such should feature only single-page landings.
Please note that this catalog is meant to only showcase websites that are built mainly through HTML & CSS, without JavaScript as much as possible. The things that are allowed to be done through JavaScript are:
* User Experience improvements with little JavaScript.
* Performance improvements.
* Polyfills for required CSS features for the landing but that are not widely supported.

Unless you're confident you've found a more-than-average complex landing and have implemented it in performant and clean way, it may be better to open an issue that attaches the concrete landing. However you may wish to contribute to the repository by adding a landing yourself.

1. Fork the repository to your own GitHub account.
2. Clone the forked repository to your local machine.
    ```
    git clone https://github.com/YuraVolk/practice-landings.git
    ```
3. Make the necessary changes and improvements to your local copy. All of the single-page landings are located in the docs folder. When working on a project in real-time in your forked repository, it may be comfortable to work with it in the root folder. Create base HTML file, all required assets (images, fonts, SCSS files, JS only if absolutely needed). To ensure consistency, you may use the following base ``package.json`` configuration:
    ```
    {
        "name": "Practice Landings: Betting Template",
        "private": true,
        "version": "1.0.0",
        "type": "module",
        "scripts": {
            "dev": "vite src/",
            "build": "vite build src/ --outDir ../build --emptyOutDir",
            "preview": "vite preview --outDir build"
        },
        "devDependencies": {
            "sass": "^1.63.6",
            "vite": "^4.3.9"
        }
    }
    ```
    With this configuration, your code will be placed in ``src/`` folder.
4. When you've finished working on the landing, run:
    ```
    npm run build
    npm run preview
    ```
    And make sure that the build is working alright. In docs folder create a new folder with the name of the landing, which must have two folders with appropriate files inside: ``src`` and ``build``. Place all the source code in the ``src`` folder with all the files and folders at root except ``build``, ``docs``, and ``.gitignore`` and configuration files that are local to repository. You may configure Vite and PostCSS however you like.

    The finished website must be similar enough to the original landing, and must work up from 320px to 2800px resolutions, and in all modern browsers as defined by Browserslist defaults query.
5. Open a pull request from your forked repository to the original repository. Please provide a link to the original landing.

### Submitting Issues <a name="submitting-issues"></a>
If you encounter any issues or bugs while using the repository, please submit an issue.
If you have any ideas for new appropriate single-page landings that would suit this repository, please submit an issue.
Follow these guidelines when submitting an issue:

#### Reporting A Bug
1. Before submitting an issue, please check if a similar issue already exists.
2. Clearly describe the problem you are experiencing, including steps to reproduce it.
3. Provide any relevant information such as browser version, operating system, or screenshots.
4. Assign the appropriate label(s) to the issue (e.g., ``compatibility``, ``performance``, ``visual-mismatch``).

#### Proposing A Landing
1. Before submitting a landing, please make sure it is in free domain for anyone to reproduce through HTML & CSS.
2. Check if a similar landing or a landing using same techniques already exists. Submitting a landing that is similar to an existing one is more likely to be declined and closed.
3. Provide relevant information, as either:
    1. Landing file that has all texts, fonts and images (i.e. in Photoshop or Figma) is the most preferred option.
    2. A high quality image in which text is clearly visible. In case the image is generated via a neural network, you may (and are encouraged to) use neural networks to enhance the image quality.
4. Assign the ``landing-proposal`` label to the issue only.

### Submitting Pull Requests <a name="submitting-pull-requests"></a>
Pull requests for bug fixes, feature enhancements, or other improvements are welcomed. The instructions to contribute via creating a new landing are described in Getting Started section. Please follow those instructions for submitting a new landing. To submit a pull request that does not contain, please follow these guidelines:

1. Fork the repository and create a new branch for your changes.
2. Make your changes and ensure they adhere to the project's coding conventions.
3. Commit your changes with a descriptive commit message.
4. Push your branch to your forked repository.
5. Open a pull request, providing a clear description of your changes and their purpose.

When making a change, it is suggested you test the overall appearance across all alive browsers. This repository does not target older browsers like Internet Explorer, however your changes (ideally) must not break anything on any browser deemed modern by default Browserslist query. Nothing must be broken from 320px to 2800px resolutions. Please test thoroughly across all browsers and do at least some basic tests via changing screen resolution in developer tools. Websites are not required to be maximally simple to use on phones with opened keyboard as this would largely increase complexity and has better fixes that are not done through CSS.

### Additional Labels <a name="additional-labels"></a>
To help organize and categorize issues and pull requests, the following labels exist:

* compatibility: Use this label for issues related to browser compatibility.
* landing-proposal: Use this label to propose a new landing idea or showcase a finished landing.
* performance: Use this label for issues related to performance optimization or pull requests optimizing performance.
* visual-mismatch: Use this label for issues related to visual inconsistencies or design mismatches and their fixes.

### Code Style and Conventions <a name="code-style-and-conventions"></a>
To maintain a consistent codebase, please adhere to the following code style and conventions:

* Use SCSS for styling and ensure a clean and modular architecture. You're highly advised to avoid the following issues:
    * Unused CSS rules are a bad practice, as they increase file size and decrease code readability without doing anything. This applies to styles which are always overridden and never take place or just code which has no effect at all.
    * Duplicate code. You should frown when you see a duplicate code, but it's okay when it's only repeated no more than two times and is at small chunks. In all other cases, creating a placeholder or a mixin or a class is a good solution. In rare cases you may write a function to help manage states and code, but it is better to have a complex SCSS function that makes code management very easy and is performant than preferring the easy and fast way. There are no deadlines, and as such no need to rush writing the code.
    * Specificity wars. Generally once you see that you're overriding specificity in selectors, that is one of the fastest ways to obtain a dirty, hard to manage SCSS code. Split SCSS files to keep some styles more modular as a first solution, but when a lot of styles interfere you're encouraged to use @layer at-rule to manage specificity and pre-process it via PostCSS. Unless the above two issues could have already took place, if this occurs first of all you may need to reconsider your approach.
* **Follow best practices for writing clean, readable, and maintainable code.** The code should be maximally simple and readable, however this does not mean that the design must be simplified. Hard to understand code must be limited only to cases where doing so is absolutely inevitable, such as with some particularly complex clip-path and masks, or cutting out inner parts of shapes through transformations - all kinds of things that are commonly done through ``<canvas></canvas>`` and JavaScript but can be done in this case through pure CSS. Comment your code to provide clarity and context where necessary in these places. Please remember that this catalog is largely to demonstrate
* Keep code formatting consistent throughout the project.
* Write meaningful commit messages that describe the purpose of your changes.
* Adhering to the BEM methodology is highly preferred, unless the project is somehow highly exceptional in terms of its design approach and required implementations, but you should never see such kind of landing unless you specifically try to make it up.

Thank you for your contributions and happy coding!
