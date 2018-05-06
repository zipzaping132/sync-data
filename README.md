# Installation
1. Install NodeJS from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. Install SailsJS: `npm install sails -g` ([https://sailsjs.com/get-started](https://sailsjs.com/get-started))
3. Install dependencies: `npm install`
4. Start project: `sails lift`

# Usage
1. After project was started:
> 1. Open the browser & navigate to: [http://localhost:1337](http://localhost:1337)
> 2. Make a request to:
>> - URL: [localhost:1337/sync](localhost:1337/sync)
>> - Method: POST
>> - Body:
>> ```
>> {
>>	"data": "<h1>Sample message</h1>"
>> }
>> ```
>>3. On browser, we should see "Sample message" immediately

# Reference
- Pre-commit hook: [https://github.com/typicode/husky](https://github.com/typicode/husky)