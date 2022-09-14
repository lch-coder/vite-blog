#### lodash数组根据另一个数组顺序进行排序

```js
import { sortBy, findIndex } from 'lodash-es'

const users = [
    { user: 'fred', age: 48 },
    { user: 'barney', age: 36 },
    { user: 'fred', age: 40 },
    { user: 'barney', age: 34 },
]
const array = [36, 40, 48, 34]
const res = sortBy(users, x => findIndex(array, y => x.age === y))
console.log(res)
```

