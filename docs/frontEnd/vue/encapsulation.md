
# vue3+tsx封装组件

## 子组件（selectTab.tsx）


```javascript
import { defineComponent } from 'vue'
import { tabsProps, Tab } from './selectTabType'
import './selectTab.scss'
export default defineComponent({
    name: 'selectTab',
    props: tabsProps,
    emits: ['update:modelValue', 'tab-click'],
    setup(props, { emit, slots }) {
        const tabClick = (item: Tab) => {
            if (props.modelValue === item.name) return
            emit('update:modelValue', item.name)
            emit('tab-click', item)
        }
        return () => (
            <div class="select_tab">
                <div class="tab_con_l"></div>
                <div class="tab_con">
                    {props.tabList.map((item: Tab) => {
                        return (
                            <div
                                class={[props.modelValue === item.name ? 'tab_active' : '', 'tab_con_item']}
                                key={item.name}
                                onClick={() => tabClick(item)}
                            >
                                {item.label}
                            </div>
                        )
                    })}
                </div>
                {slots['right'] ? (
                    <div class="tab_right">
                        {/* <slot name="right"></slot> */}
                        {slots['right']?.()}
                    </div>
                ) : null}
            </div>
        )
    },
})

```

## 类型定义（selectTabType）

```javascript
import { PropType } from 'vue'

export interface Tab {
    label: string | number
    name: string | number
}

export const tabsProps = {
    modelValue: {
        type: [String, Number] as PropType<string | number>,
        default: null,
    },
    tabList: {
        type: Array as PropType<Array<Tab>>,
        default: function() {
            return []
        },
    },
}

```

## 样式文件（selectTab.scss）

```javascript
.select_tab {
    display: flex;
    margin-bottom: 10px;
    height: 36px;
    border-bottom: 1px solid #e4e7ed;
    .tab_con {
        display: flex;
    }
    .tab_con_l {
        width: 20px;
    }
    .tab_con_item {
        cursor: pointer;
        padding: 0 20px;
        height: 36px;
        box-sizing: border-box;
        line-height: 36px;
        list-style: none;
        font-size: 14px;
        font-weight: 500;
        border-bottom: 1px solid #e4e7ed;
        width: 110px;
        text-align: center;
        &:hover {
            color: #4f6bff;
        }
    }
    .tab_active {
        color: #4f6bff;
        background-color: #fff;
        border: 1px solid #e4e7ed;
        border-bottom: none;
        border-radius: 4px 4px 0 0;
    }
    .tab_right {
        height: 36px;
        line-height: 36px;
        margin-left: auto;
    }
}

```

## 父组件使用

```javascript
// template
<selectTab v-model="activeTab" :tabList="tabList">
    <template #right>
        <div>右侧插槽</div>
    </template>
</selectTab>

// data
tabList: [
    { label: '整体数据', name: 'all' },
    { label: '详细数据', name: 'detail' },
],
activeTab: 'all',
```



## 实现效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/7aa633b8fd4d4cb3b64ee93164bd4acc.png)

## 子组件另一种写法(render)

```javascript
import { defineComponent } from 'vue'
import { tabsProps, Tab } from './selectTabType'
import './selectTab.scss'
export default defineComponent({
    name: 'selectTab',
    props: tabsProps,
    emits: ['update:modelValue', 'tab-click'],
    setup(props, { emit, slots }) {
        const tabClick = (item: Tab) => {
            if (props.modelValue === item.name) return
            emit('update:modelValue', item.name)
            emit('tab-click', item)
        }
        return { slots, tabClick }
    },
    render() {
        return (
            <div class="select_tab">
                <div class="tab_con_l"></div>
                <div class="tab_con">
                    {this.tabList.map((item: Tab) => {
                        return (
                            <div
                                class={[this.modelValue === item.name ? 'tab_active' : '', 'tab_con_item']}
                                key={item.name}
                                onClick={() => this.tabClick(item)}
                            >
                                {item.label}
                            </div>
                        )
                    })}
                </div>
                {this.slots['right'] ? (
                    <div class="tab_right">
                        {/* <slot name="right"></slot> */}
                        {this.slots['right']?.()}
                    </div>
                ) : null}
            </div>
        )
    },
})

```

