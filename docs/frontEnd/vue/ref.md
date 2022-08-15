# 响应式 API：核心

## ref

接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 `.value`。

::: tip 

一般用来定义基本类型的响应式数据。注意这里说的是一般，并不是说ref就不能定义引用类型的响应式数据。

如果将一个对象赋值给 ref，那么这个对象将通过 `reactive()` 转为具有深层次响应式的对象。这也意味着如果对象中包含了嵌套的 ref，它们将被深层地解包。

若要避免这种深层次的转换，请使用 `shallowRef()` 来替代。

:::

使用ref定义的响应式数据在setup函数中使用需要加上.value，但在模板中可以直接使用。


```javascript
<template>
  <button @click="decrease">decrease</button>
  <span>count: {{ count }}</span>
  <button @click="plus">plus</button>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const count = ref(0)

    const plus = () => {
      count.value++
    }
    const decrease = () => {
      count.value--
    }

    return {
      count,
      plus,
      decrease,
    }
  },
})
</script>
```

使用ref获取组件实例
```javascript
<template>
  <div ref="root">This is a root element</div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    // 创建
    const root = ref(null)

    onMounted(() => {
      // 获取子组件
      console.log(root.value) // <div>This is a root element</div>
    })

    return {
      root,
    }
  },
}
</script>
```

在v-for中使用ref获取多个组件实例
```javascript
<template>
  <div
    v-for="(item, index) in 5"
    :key="index"
    :ref="(el) => (root[index] = el)"
  >
    This is a root element{{ item }}
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    // 创建
    const root = ref({})

    onMounted(() => {
      // 获取多个子组件
      console.log(root.value)
    })

    return {
      root,
    }
  },
}
</script>

```