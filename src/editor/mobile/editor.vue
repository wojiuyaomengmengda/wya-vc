<template>
	<div class="vc-quill-editor">
		<div v-show="isFocus" class="__mobile">
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
		</div>
		<div ref="editor"/>
	</div>
</template>

<script>
import BasicMixin from '../basic-mixin';
import EditorToolbar from '../toolbar.vue';
import Upload from '../../upload/index';
import Icon from '../../icon/index';
import defaultOptinos from '../default-options';

export default {
	name: "vc-editor",
	components: {
		'vc-editor-toolbar': EditorToolbar,
		'vc-upload': Upload,
		'vc-icon': Icon
	},
	mixins: [BasicMixin],
	data() {
		return {
			isFocus: false,
		};
	},
	methods: {
		init() {
			this.initFontSize();
			this.editor = new this.Quill(this.$refs.editor, { ...defaultOptinos, ...this.options });
			
			this.editor.enable(!this.disabled);
			if (this.value) {
				this.editor.setText('zhellll');
				this.editor.clipboard.dangerouslyPasteHTML(this.value);
			}
			
			this.editor.on('selection-change', range => {
				if (!range) {
					setTimeout(() => {
						if (!this.editor.hasFocus()) {
							this.isFocus = false;
						}
					}, 0);
					this.$emit('blur', this.editor);
				} else {
					this.isFocus = true;
					this.$emit('focus', this.editor);
				}
			});

			// 监听文本内容变化
			this.editor.on('text-change', (delta, oldDelta, source) => {
				let html = this.$refs.editor.children[0].innerHTML;
				const editor = this.editor;
				const text = this.editor.getText();
				if (html === '<p><br></p>') html = '';
				this.content = html;
				this.$emit('input', this.content);
				this.$emit('change', { html, text, editor });
				this.dispatch('vc-form-item', 'form-change', this.content);
			});
			const pickers = document.getElementsByClassName('ql-picker');
			Array.prototype.slice.call(pickers).forEach(picker => {
				picker.addEventListener('click', () => {
					this.editor.focus();
				});
			});
		},
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
	.__mobile {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow-x: auto;
		padding-top: 100%;
		z-index: 1;
	}
	#toolbar {
		width: 1120px;
	}
}
</style>