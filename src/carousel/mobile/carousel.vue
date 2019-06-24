<template>
	<div
		:class="`is-${direction}`"
		class="vcm-carousel"
		@touchstart="handleTouchStart"
		@touchend="handleTouchEnd"
	>
		<div
			:style="{ height: height ? `${height}px` : 'auto' }"
			class="vcm-carousel__wrapper"
		>
			<slot/>
		</div>
		<ul
			v-if="dots"
			:class="dotsClasses"
			class="vcm-carousel__dots"
		>
			<li
				v-for="(item, index) in items"
				:key="index"
				:class="[
					'vcm-carousel__dot',
					'is-' + direction,
					{ 'is-active': index === activeIndex }
				]"
				@click.stop="handleDotClick(index)"
			>
				<button class="vcm-carousel__button">
					<span v-if="hasLabel">{{ item.label }}</span>
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
import CarouselMixin from '../carousel-mixin';

export default {
	name: 'vcm-carousel',
	mixins: [CarouselMixin],
	methods: {
		handleTouchStart() {
			this.pauseTimer();
		},

		handleTouchEnd() {
			this.startTimer();
		},
	}
};
</script>

<style lang="scss">
@import '../../style/index.scss';

@include block(vcm-carousel) {
	position: relative;

	@include when(horizontal) {
		overflow-x: hidden;
	}

	@include when(vertical) {
		overflow-y: hidden;
	}

	@include element(wrapper) {
		position: relative;
		height: 300px;
	}

	@include element(dots) {
		position: absolute;
		list-style: none;
		margin: 0;
		padding: 0;
		z-index: 2;

		@include when(horizontal) {
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
		}

		@include when(vertical) {
			right: 0;
			top: 50%;
			transform: translateY(-50%);
		}

		@include when(outside) {
			bottom: 26px;
			text-align: center;
			position: static;
			transform: none;
			.vcm-carousel__dot:hover button {
				opacity: 0.64;
			}
			button {
				background-color: #C0C4CC;
				opacity: 0.24;
			}
		}

		@include when(labels) {
			left: 0;
			right: 0;
			transform: none;
			text-align: center;

			.vcm-carousel__button {
				height: auto;
				width: auto;
				padding: 2px 18px;
				font-size: 12px;
			}

			.vcm-carousel__dot {
				padding: 6px 4px;
			}
		}
	}

	@include element(dot) {
		background-color: transparent;
		cursor: pointer;

		&:hover button {
			opacity: 0.72;
		}

		@include when(horizontal) {
			display: inline-block;
			padding: 12px 4px;
		}

		@include when(vertical) {
			padding: 4px 12px;
			.vcm-carousel__button {
				width: 2px;
				height: 15px;
			}
		}

		@include when(active) {
			button {
				opacity: 1;
			}
		}
	}

	@include element(button) {
		display: block;
		opacity: 0.48;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: #fff;
		border: none;
		outline: none;
		padding: 0;
		margin: 0 2px;
		cursor: pointer;
		transition: .3s;
	}
}
</style>