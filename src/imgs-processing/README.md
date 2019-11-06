## [Demo Basic](https://wya-team.github.io/wya-vc/dist/imgs-process/basic.html)
## 功能
图像处理(抠图、置灰、取色等等)；ColorPicker 可以基于该组件封装

## API

#### 属性

属性 | 说明 | 类型 | 默认值
---|---|---|---
dataSource | 图片地址,可以是图片网络地址，imageData, canvas | `string` | --
width | 画布的宽度 | `number` | 100
height | 画布的高度 | `number` | 100
processing | 图像的处理方法 - 可选值 `'cutout', 'gray'` | `string` | --
cutoutColor | 要扣掉的颜色rgba格式 | `array` | [0, 0, 0, 1]
tolerance | 颜色的容差 | `number` | 0
...

#### 事件

属性 | 说明 | 参数 | 返回值
---|---|---|---
- | - | `any`|---

#### Slot

属性 | 说明
---|---
- | -


## 基础用法

```jsx
<template>
	<div style="padding: 20px">
		<h1>图像处理</h1>
		<h3>原图</h3>
		<img :src="img" width="100" height="100">
		<h3>扣掉指定颜色</h3>
		<vc-imgs-processing
			:data-source="img"
			:tolerance="90"
			:cutout-color="[255, 237, 113, 1]" 
			processing="cutout"
		/>
		<h3>置灰</h3>
		<vc-imgs-processing
			:data-source="img"
			processing="gray"
		/>
		<h3>选取颜色</h3>
		<vc-imgs-processing
			:data-source="img"
			processing="cutout"
		/>
	</div>
</template>
<script>
import ImgsProcessing from '@wya/vc';

export default {
	name: "vc-tpl-basic",
	components: {
		'vc-imgs-processing': ImgsProcessing,
	},
	data() {
		return {
			img: 'https://wyatest.oss-cn-hangzhou.aliyuncs.com/image/172/20190812/112918/微信图片_20190624213255.jpg'
		};
	},
	computed: {
		
	},
	methods: {
	}
};
</script>

```