<template>
	<view class="my">
		<!-- logo -->
		<view class="my_logo">
			<view class="logo"></view>
			<view class="AccountName">
				<text>黄小名</text>
			</view>
		</view>

		<!-- 总运动 -->
		<view class="my_exercise">
			<view class="exercise">
				<text class="exercise_blod">总运动</text><br />
				<text>0分钟</text>
			</view>
			<view class="exercise">
				<text class="exercise_blod">今日运动</text><br />
				<text>0分钟</text>
			</view>
		</view>

		<!-- 列表 -->
		<view class="my-box">
			<view class="my_list">
				<view class="list_left">
					<view class="icon_left">
						<uni-icons custom-prefix="iconfont" type="icon-mimasuo" size="20" color="#d4237a"></uni-icons>
					</view>
					<view class="title_left">
						修改密码
					</view>
				</view>
				<view class="list_right">
					<uni-icons custom-prefix="iconfont" type="icon-right" size="20" color="#d4237a"></uni-icons>
				</view>
			</view>
			<view class="my_list">
				<view class="list_left">
					<view class="icon_left">
						<uni-icons custom-prefix="iconfont" type="icon-qingjia" size="20" color="#d4237a"></uni-icons>
					</view>
					<view class="title_left">
						学生请假
					</view>
				</view>
				<view class="list_right">
					<uni-icons custom-prefix="iconfont" type="icon-right" size="20" color="#d4237a"></uni-icons>
				</view>
			</view>
			<view class="my_list">
				<view class="list_left">
					<view class="icon_left">
						<uni-icons custom-prefix="iconfont" type="icon-shezhi" size="20" color="#d4237a"></uni-icons>
					</view>
					<view class="title_left">
						设置中心
					</view>
				</view>
				<view class="list_right">
					<uni-icons custom-prefix="iconfont" type="icon-right" size="20" color="#d4237a"></uni-icons>
				</view>
			</view>
			<view class="my_list">
				<view class="list_left">
					<view class="icon_left">
						<uni-icons custom-prefix="iconfont" type="icon-tuichu" size="20" color="#d4237a"></uni-icons>
					</view>
					<view class="title_left">
						退出登录
					</view>
				</view>
				<view class="list_right">
					<uni-icons custom-prefix="iconfont" type="icon-right" size="20" color="#d4237a"></uni-icons>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import '@/static/css/my.scss';

	// 容器
	.my {
		display: flex;
		flex-direction: column;

		// logo
		.my_logo {
			display: flex;
			flex-direction: row;

			.logo {
				width: $uni-height-70px;
				height: $uni-height-70px;
				border-radius: 50%;
				margin-left: $uni-margin-25px;
				margin-top: $uni-margin-25px;
				border: 1px solid #000;
				// background: url('../../static/logo.webp') no-repeat center;
				background-size: $uni-height-70px, $uni-height-70px;
			}

			.AccountName {
				margin-left: $uni-margin-25px;
				margin-top: $uni-margin-25px;
				height: $uni-height-70px;
				line-height: $uni-height-70px;
				overflow: hidden;

				text {
					font-weight: bold;
					font-style: normal;
					font-family: "楷体";
					overflow: hidden;
					font-size: $uni-size-25px;
				}
			}
		}


		// 总运动量,每日运动量
		.my_exercise {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-top: $uni-margin-25px;

			.exercise {
				margin-left: $uni-margin-10px;
				margin-right: $uni-margin-10px;
				height: $uni-height-70px;
				width: $uni-width-150px;
				border-radius: 15px;
				box-shadow: 2px 3px 5px #ccc;
				text-align: center;

				.exercise_blod {
					font-weight: bold;
				}

				text {
					margin-top: $uni-margin-10px;
					margin-left: $uni-margin-10px;
					margin-right: $uni-margin-10px;
					display: inline-block;
					font-size: $uni-size-16px;
				}
			}
		}

		.my-box {
			display: flex;
			flex-direction: column;

			// 列表
			.my_list {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-top: $uni-margin-25px;
				// background: $uni-bg-skyblue;

				.list_left {
					margin-left: $uni-margin-10px;
					display: flex;
					flex-direction: row;

					.icon_left {
						width: $uni-height-20px;
						height: $uni-height-20px;

						image {
							width: $uni-height-20px;
							height: $uni-height-20px;
						}
					}

					.title_left {
						width: $uni-width-150px;
						height: $uni-height-20px ;
						line-height: $uni-height-20px ;
						margin-left: $uni-margin-10px;
						font-size: $uni-size-16px;
					}
				}

				.list_right {
					width: $uni-height-20px;
					height: $uni-height-20px;
					margin-right: $uni-margin-10px;
				}
			}
		}

	}
</style>