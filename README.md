Install:
```bash
git clone git@github.com:npny/psjs.git
ln -s psjs/pse /usr/local/bin/pse
ln -s psjs/psc /usr/local/bin/psc
```

Direct evaluation:  
`pse 5 6 add 3 4 mul`  
`pse "helloworld" 3 chunks {"," join} each`

Compilation from standard input:  
`cat *.ps | psc > app.js`  
`nc -l 1337 | psc | node`

Contribute:  
Don't.

---
psjs is released under the MIT license. Pierre Boyer, 2016.