# Grid 布局

**1.什么是 Grid 布局**

`Grid` 布局即网格布局，是一种新的 css 模型，一般是将一个页面划分成几个主要的区域，定义这些区域的大小、位置和层次等关系，是目前唯一一种 css 二维布局。

**2.和 flex 布局的区别**

Grig 布局和 flex 布局时有实质性的区别的，`flex` **布局是一维布局**，只能处理一个维度上的布局，一行或者是一列，但是 `Grid` **布局是二维布局**，将容器划分成了 “行” 和” 列”，产生了一个个的网格，可以将网格元素放在行和列相关的位置上，从而达到了布局的目的。

flex 布局示例：

grid 布局示例：

**3.Grid 布局的基本概念**

首先我们先看一个小例子，通过这个例子演示一些基础概念

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .wrapper {
        margin: 50px;
        /* 声明一个容器 */
        display: grid;
        /* 声明列的宽度，数字3表示重复次数，即有3列宽度为200px */
        grid-template-columns: repeat(3, 200px);
        /* 声明行间距和列间距 */
        grid-gap: 20px;
        /* 分别表示两行的高度 */
        grid-template-rows: 100px 200px;
      }

      .one {
        background: #19caad;
      }

      .two {
        background: #8cc7b5;
      }

      .three {
        background: #d1ba74;
      }

      .four {
        background: #bee7e9;
      }

      .five {
        background: #e6ceac;
      }

      .six {
        background: #ecad9e;
      }
    </style>
  </head>

  <body>
    <div class="wrapper">
      <div class="one item">One</div>
      <div class="two item">Two</div>
      <div class="three item">Three</div>
      <div class="four item">Four</div>
      <div class="five item">Five</div>
      <div class="six item">Six</div>
    </div>
  </body>
</html>
```

运行结果：

**4.容器属性**

display:grid;　　　　　　　　　　　　//默认是块元素

display:inline-grid;　　　　　　　　//行内块元素

::: tip
设置为 grid 后，子元素的 float,display: inline-block,display: table-cell、vertical-align 和 column-\*等设置都将失效。
:::

grid-template-columns：定义每一列的列宽;

grid-template-columns：100px 100px 100px;　　　　　　//总共三列，每列列宽是 100px

grid-template-rows：定义每一行的行高;

grid-template-rows：100px 100px 100px;　　　　　　　　//从上至下，每行高度为 100px

//除了使用像素，还可以使用百分比；

拓展：

重复写值很麻烦，可以用 repeat 函数

repeat(次数，大小)

例如：repeat(3,100px);　　　　　　　　　　　　//重复 3 次，每次 100px

repeat 写法：

grid-template-columns：repeat(3,100px);

grid-template-rows：repeat(3,100px);

也可以重复某一种不固定大小模式；

例如：

grid-template-columns：100px 80px 100px;

改写成：

grid-template-columns：repeat(2,100px 80px);　　　　//代表重复 2 次 100px 80px 的模式；也就是 4 列；

等同于：

grid-template-columns：100px 80px 100px 80px;

**5.关键字**

auto-fill：如果容器大小不固定，项目大小固定，可以用 auto-fill 关键字自动填充；

```
.wrapper {
     display: grid;
     grid-template-columns: repeat(auto-fill, 100px);
}
```

fr：如果两列的宽度分别为 1fr 和 2fr，就表示后者是前者的两倍。

```
.wrapper {
     display: grid;
     grid-template-columns: 1fr 2fr;
     grid-template-rows: repeat(3, 100px 80px);
}
```

minmax：第一个参数就是最小值,第二个参数是最大值

```
.wrapper {
     display: grid;
     grid-template-columns: 1fr 5fr minmax(100px, 1fr);
}
```

auto：自适应

```
.wrapper {
     display: grid;
     grid-template-columns: 100px auto 100px;
}
```

间距

row-gap:行间距；colum-gap:列间距；

简写：

gap:20px 20px;

row-gap 和 column-gap 简写形式；

gap 省略了第二个值，浏览器认为第二个值等于第一个值。
