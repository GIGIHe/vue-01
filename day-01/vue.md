### 使用vue，
>1，在HTML中写一个提供操作的节点
2，使用script标签引入vue.js
3，使用vue函数实例化一个vue对象
4，el:'#app'指明渲染的DOM节点
5，对象中的data是声明值
6，写方法的时候使用methods:{}
### 一些指令
>1.v-on:click=‘xxx’ 监听DOM 简写@click='xxx'
2.v-if=‘’条件渲染
**组件中的data必须是一个函数，而实例中的data是一个对象**
**组件和实例化中的data不能互相使用**
**组件会渲染组件中的标签**
>父组件可以使用props向子组件传值，子组件需要通过``` javascript
this.$emit(event,arg)

```
来向父组件传值
>子组件可以使用$emit触发父组件的自定义事件
vm.$emit(event,arg)//触发当前实例上的事件
vm.$on(event,fn)//监听event事件后运行fn
#### 子组件向父组件传值的过程
1，首先在自组件上定义一个click事件
2，写click方法，方法中直接使用this.$emit(event,data)
3,在子组件上定义一个data
4，在DOM上监听event
5，写监听事件的方法
遇到一个问题在父组件中定义了一个props里面的传给子组件之后，子组件不能去改变它，只能通过触发
