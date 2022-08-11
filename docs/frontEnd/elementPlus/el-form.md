##  el-form验证失败，滚动到第一个错误的地方

```html
//el-form绑定ref
<el-form ref="form" :model="formData" :rules="rules">
    <el-form-item label="联系电话：" prop="tel">
        <el-input v-model="tel" placeholder="请输入" />
    </el-form-item>
</el-form>
```

```javascript
// 数据
data() {
     return {
         tel: '',
         formData: {
             tel: '',
         },
         rules: {
             tel: [{ required: true, message: '请输入手机号码', trigger: ['change', 'blur'] }],
         },
      }
 },
```

```javascript
//在js方法中校验
this.$refs['form'].validate(valid => {
    if (valid) {
        // 验证通过
    } else {
        this.$nextTick(() => {
            let isError = document.getElementsByClassName('is-error')
            isError[0].scrollIntoView({
                // 滚动到指定节点
                // 值有start,center,end，nearest，当前显示在视图区域中间
                block: 'center',
                // 值有auto、instant,smooth，缓动动画（当前是慢速的）
                behavior: 'smooth',
            })
        })
        return
    }
})
```
