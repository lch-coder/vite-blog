# vue3+vite使用monaco-editor编辑器      



## 1.安装

`"monaco-editor": "^0.34.0",`这个是package.json中的版本

```
npm install monaco-editor
```

## 2.在vite.config.js中配置

```js
   // 强制预构建插件包
   optimizeDeps: {
    include: [
      `monaco-editor/esm/vs/language/json/json.worker`,
      `monaco-editor/esm/vs/language/css/css.worker`,
      `monaco-editor/esm/vs/language/html/html.worker`,
      `monaco-editor/esm/vs/language/typescript/ts.worker`,
      `monaco-editor/esm/vs/editor/editor.worker`
    ], 
  },
```

## 3.组件封装与使用

1. monacoEditor.vue组件

   ```vue
   <template>
     <div ref="codeEditBox" class="codeEditBox"></div>
   </template>
   
   <script lang="ts">
   import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue'
   import { editorProps } from './monacoEditorType'
   import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
   import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
   import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
   import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
   import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
   import * as monaco from 'monaco-editor'
   
   export default defineComponent({
     name: 'monacoEditor',
     props: editorProps,
     emits: ['update:modelValue', 'change', 'editor-mounted'],
     setup(props, { emit }) {
       self.MonacoEnvironment = {
         getWorker(_: string, label: string) {
           if (label === 'json') {
             return new jsonWorker()
           }
           if (['css', 'scss', 'less'].includes(label)) {
             return new cssWorker()
           }
           if (['html', 'handlebars', 'razor'].includes(label)) {
             return new htmlWorker()
           }
           if (['typescript', 'javascript'].includes(label)) {
             return new tsWorker()
           }
           return new EditorWorker()
         },
       }
       let editor: monaco.editor.IStandaloneCodeEditor
       const codeEditBox = ref()
   
       const init = () => {
         monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
           noSemanticValidation: true,
           noSyntaxValidation: false,
         })
         monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
           target: monaco.languages.typescript.ScriptTarget.ES2020,
           allowNonTsExtensions: true,
         })
   
         editor = monaco.editor.create(codeEditBox.value, {
           value: props.modelValue,
           language: props.language,
           theme: props.theme,
           ...props.options,
         })
   
         // 监听值的变化
         editor.onDidChangeModelContent(() => {
           const value = editor.getValue() //给父组件实时返回最新文本
           emit('update:modelValue', value)
           emit('change', value)
         })
   
         emit('editor-mounted', editor)
       }
       watch(
         () => props.modelValue,
         newValue => {
           if (editor) {
             const value = editor.getValue()
             if (newValue !== value) {
               editor.setValue(newValue)
             }
           }
         }
       )
   
       watch(
         () => props.options,
         newValue => {
           editor.updateOptions(newValue)
         },
         { deep: true }
       )
   
       watch(
         () => props.language,
         newValue => {
           monaco.editor.setModelLanguage(editor.getModel()!, newValue)
         }
       )
   
       onBeforeUnmount(() => {
         editor.dispose()
       })
   
       onMounted(() => {
         init()
       })
   
       return { codeEditBox }
     },
   })
   </script>
   
   <style lang="scss" scoped>
   .codeEditBox {
     width: v-bind(width);
     height: v-bind(height);
   }
   </style>
   
   ```

   

2. monacoEditorType.ts类型定义文件

   ```js
   import { PropType } from 'vue'
   
   export type Theme = 'vs' | 'hc-black' | 'vs-dark'
   export type FoldingStrategy = 'auto' | 'indentation'
   export type RenderLineHighlight = 'all' | 'line' | 'none' | 'gutter'
   export interface Options {
     automaticLayout: boolean // 自适应布局
     foldingStrategy: FoldingStrategy // 折叠方式  auto | indentation
     renderLineHighlight: RenderLineHighlight // 行亮
     selectOnLineNumbers: boolean // 显示行号
     minimap: {
       // 关闭小地图
       enabled: boolean
     }
     readOnly: boolean // 只读
     fontSize: number // 字体大小
     scrollBeyondLastLine: boolean // 取消代码后面一大段空白
     overviewRulerBorder: boolean // 不要滚动条的边框
   }
   
   export const editorProps = {
     modelValue: {
       type: String as PropType<string>,
       default: null,
     },
     width: {
       type: [String, Number] as PropType<string | number>,
       default: '100%',
     },
     height: {
       type: [String, Number] as PropType<string | number>,
       default: '100%',
     },
     language: {
       type: String as PropType<string>,
       default: 'javascript',
     },
     theme: {
       type: String as PropType<Theme>,
       validator(value: string): boolean {
         return ['vs', 'hc-black', 'vs-dark'].includes(value)
       },
       default: 'vs-dark',
     },
     options: {
       type: Object as PropType<Options>,
       default: function () {
         return {
           automaticLayout: true,
           foldingStrategy: 'indentation',
           renderLineHighlight: 'all',
           selectOnLineNumbers: true,
           minimap: {
             enabled: true,
           },
           readOnly: false,
           fontSize: 16,
           scrollBeyondLastLine: false,
           overviewRulerBorder: false,
         }
       },
     },
   }
   
   ```

   

3. 在父组件中使用

   ```vue
   <script lang="ts" setup>
   import * as monaco from 'monaco-editor'
   const value = ref('let a = 234')
   const language = ref('javascript')
   const editorMounted = (editor: monaco.editor.IStandaloneCodeEditor) => {
     console.log('editor实例加载完成', editor)
   }
   </script>
   
   <template>
     <div class="container">
       <monacoEditor
         v-model="value"
         :language="language"
         width="800px"
         height="500px"
         @editor-mounted="editorMounted"
       ></monacoEditor>
     </div>
   </template>
   
   ```

   