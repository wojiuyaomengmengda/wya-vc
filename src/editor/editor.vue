<template>
	<div class="vc-quill-editor">
		<slot name="toolbar">
			<vc-editor-toolbar v-if="options.modules && options.modules.toolbar === '#toolbar'">
				<button id="img" style="outline: none; line-height: 1;" >
					<vc-upload
						v-bind="uploadOpts"
						:accept="accept" 
						@file-success="handleImgSuccess"
					>
						<vc-icon type="image" style="font-size: 15px" @click="handleUploadImg" />
					</vc-upload>
				</button>
				<slot name="extend" />
			</vc-editor-toolbar>
		</slot>
		<div ref="editor"/>
	</div>
</template>

<script>
import BasicMixin from './basic-mixin';
import EditorToolbar from './toolbar.vue';
import Upload from '../upload/index';
import Icon from '../icon/index';

export default {
	name: "vc-editor",
	components: {
		'vc-editor-toolbar': EditorToolbar,
		'vc-upload': Upload,
		'vc-icon': Icon
	},
	mixins: [BasicMixin],
	methods: {
	}

};
</script>

<style lang="scss">
.vc-quill-editor {
	color: #333 !important;
	display: flex;
	flex-direction: column;
	.vc-editor-size {
		width: 78px;
	}
	.ql-container {
		flex: 1;
		overflow: auto;
	}
}
</style>