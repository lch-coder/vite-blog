##  el-table行合并

实现方法：
[el-table官方](https://element.eleme.io/#/zh-CN/component/table)提供span-method合并行的计算方法，可以实现行或者列的合并，这里主要提供了行合并的方法，设置需要合并的列数组，判断同一列下该行和上一行数据是否相同，执行相应的操作。

效果图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201120161829135.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDQ0MDExNg==,size_16,color_FFFFFF,t_70#pic_center)
代码：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css" />
        <title>el-table行合并</title>
    </head>
    <body>
        <div id="app">
            <el-table :span-method="arraySpanMethod" :data="tableData" border style="width: 1000px">
                <el-table-column prop="id" label="id" width="180"> </el-table-column>
                <el-table-column prop="date" label="日期" width="180"> </el-table-column>
                <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
                <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
        </div>
        <!-- 引入vue -->
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <!-- 引入组件库 -->
        <script src="https://unpkg.com/element-ui/lib/index.js"></script>
        <script>
            var app = new Vue({
                el: '#app',
                data: {
                    tableData: [
                        { id: 1, date: '2016-05-02', name: '王小龙', address: '上海市普陀区金沙江路 1 弄' },
                        { id: 2, date: '2016-05-02', name: '王小龙', address: '上海市普陀区金沙江路 2 弄' },
                        { id: 3, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 3 弄' },
                        { id: 4, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 5 弄' },
                        { id: 5, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 5 弄' },
                        { id: 6, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 4 弄' },
                    ],
                    mergeObj: {},
                    mergeArr: ['date', 'name', 'address'],
                },
                mounted() {
                    this.rowspan()
                },
                methods: {
                    rowspan() {
                        for (let key of this.mergeArr) {
                            let count = 0
                            this.mergeObj[key] = []
                            this.tableData.forEach((item, index) => {
                                if (index === 0) {
                                    this.mergeObj[key].push(1)
                                } else {
                                    if (item[key] === this.tableData[index - 1][key]) {
                                        this.mergeObj[key][count] += 1
                                        this.mergeObj[key].push(0)
                                    } else {
                                        count = index
                                        this.mergeObj[key].push(1)
                                    }
                                }
                            })
                        }
                    },
                    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
                        if (this.mergeArr.indexOf(column.property) !== -1) {
                            if (this.mergeObj[column.property][rowIndex]) {
                                return {
                                    rowspan: this.mergeObj[column.property][rowIndex],
                                    colspan: 1,
                                }
                            } else {
                                return {
                                    rowspan: 0,
                                    colspan: 0,
                                }
                            }
                        } else {
                            return {
                                rowspan: 1,
                                colspan: 1,
                            }
                        }
                    },
                },
            })
        </script>
    </body>
</html>

```

##  el-table点击选中行

```javascript
<template>
    <div>
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            highlight-current-row
            @selection-change="handleSelectionChange"
            @row-click="handleRowClick"
        >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="日期" width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
            ],
            multipleSelection: [],
        }
    },

    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row)
                })
            } else {
                this.$refs.multipleTable.clearSelection()
            }
        },
        //点击复选框触发，复选框样式的改变
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        //点击行触发，选中或不选中复选框
        handleRowClick(row) {
            this.$refs.multipleTable.toggleRowSelection(row)
            // 获取当前选中的数据
            const _selectData = this.$refs.multipleTable.selection
            console.log('当前选中的数据', _selectData)
            this.handleSelectionChange(_selectData)
        },
    },
}
</script>

```