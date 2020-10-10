# newCrayon

1. introduction:

    The newCrayon is a colorfull log library, which could be used both in nodejs and browser environment.

    This library will provide good-looking informations for developers.

2. usage:

    step 1: include the library into your project with npm:

    ```bash
    npm install --save newcrayon
    ```

    step 2: use log, warn or error method of crayon when necessary:

    ```javascript
    import newCrayon from 'newcrayon'

    newCrayon.log('This is a log')

    newCrayon.warn('This is a warn')

    newCrayon.error('This is a error')
    ```
