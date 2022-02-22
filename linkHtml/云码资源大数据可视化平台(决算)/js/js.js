$(document).ready(function () {
	$(".loading").fadeOut();
	var whei = $(window).width()
	$("html").css({
		fontSize: whei / 20
	})
	$(window).resize(function () {
		var whei = $(window).width()
		$("html").css({
			fontSize: whei / 20
		})
	});


	var html = $(".wrap ul").html()
	$(".wrap ul").append(html)
	var ls = $(".wrap li").length / 2 + 1
	i = 0
	ref = setInterval(function () {
		i++
		if (i == ls) {
			i = 1
			$(".wrap ul").css({
				marginTop: 0
			})
			$(".wrap ul").animate({
				marginTop: -'.52' * i + 'rem'
			}, 1000)
		}
		$(".wrap ul").animate({
			marginTop: -'.52' * i + 'rem'
		}, 1000)


	}, 2400);



	var html2 = $(".adduser ul").html()
	$(".adduser ul").append(html2)
	var ls2 = $(".adduser li").length / 2 + 1
	a = 0
	ref = setInterval(function () {
		a++
		if (a == ls2) {
			a = 1
			$(".adduser ul").css({
				marginTop: 0
			})
			$(".adduser ul").animate({
				marginTop: -'.5' * a + 'rem'
			}, 800)
		}
		$(".adduser ul").animate({
			marginTop: -'.5' * a + 'rem'
		}, 800)


	}, 4300);


	search();
	dialogTopTab();
	dialogBottomTab();
	myChart1();
	myChart2();
	myChart4();
	myChart6();
	myChart7();
	myChart8();
	onclick();
	// documentClick();
	// myChart1.resize();
	// myChart2.resize();
	// myChart4.resize();
	// myChart6.resize();
	// myChart7.resize();
	// myChart8.resize();
});


//  window.addEventListener("resize", function () {
// });

function documentClick() {
	body.onclick = function() {
		hideDialog();
	}
}

function dialogTopTab() {
	var dialogToptTab = document.querySelectorAll('.dialog-top-tab');
	var dialogTopcontent = document.querySelectorAll('.dialog-top-content');
	selectTab(dialogToptTab, dialogTopcontent, 'dialog-top-tab', 'dialog-top-content');
}

function dialogBottomTab() {
	var dialogBottomtTab = document.querySelectorAll('.dialog-bottom-tab');
	var dialogBottomcontent = document.querySelectorAll('.dialog-bottom-content');
	selectTab(dialogBottomtTab, dialogBottomcontent, 'dialog-bottom-tab', 'dialog-bottom-content');
}

function selectTab(objTits, objContents, titleClass, contentClass) {
	var objTitsLength = objTits.length;
	var titleActive =  titleClass + '-active';
	var contentActive = contentClass + '-active';

	for(let i = 0; i < objTitsLength; i++){
		objTits[i].onclick = function(e) {
			removeClassForEles(objTits, titleActive);
			objTits[i].classList.add(titleActive);
			removeClassForEles(objContents, contentActive);
			objContents[i].classList.add(contentActive);
			stopPropagation(e);
		}
	}
}

function removeClassForEles(objs, reCls) {
	var objsLength = objs.length;
	for(let i = 0 ; i < objsLength; i++){
		objs[i].classList.remove(reCls);
	}
}

function search() {
	var searchInput = document.querySelector(".search-wrap input");
	var searchTips = document.querySelector(".search-tips");
	var searchTipsLi = document.querySelectorAll(".search-tips li");
	var searchTipsLiLength = searchTipsLi.length;
	var searchBtn = document.querySelectorAll(".search-btn");

	searchInput.onfocus = function () {
		searchTips.style.display = 'block';
	}
	searchInput.oninput = function () {
		if ('山西省太原市'.indexOf(searchInput.value) > -1) {
			searchTips.style.display = 'block';
		} else {
			searchTips.style.display = 'none';
		}
	}
	for (let i = 0; i < searchTipsLiLength; i++) {
		searchTipsLi[i].onclick = function (e) {
			searchInput.value = searchTipsLi[i].innerHTML;
			searchTips.style.display = 'none';
			$('.mainbox').css('opacity', 1);
			stopPropagation(e);
		}
	}

	searchBtn.onclick = function (e){
		$('.mainbox').css('opacity', 1);
		stopPropagation(e);
	}

}

function myChart1() {
	var myChart1 = echarts.init(document.getElementById('echarts1'));
	var v1 = 15375.07 //财政补助拨款
	var v2 = 6000 //非税收入
	var option1 = {

		//animation: false,
		series: [{
			type: 'pie',
			radius: ['70%', '80%'],
			color: '#0088cc',
			label: {
				normal: {
					position: 'center'
				}
			},
			data: [{
					value: v1,
					name: '财政补助拨款',
					label: {
						normal: {
							formatter: '{b0}\n{c0}',
							textStyle: {
								fontSize: 14,
								color: '#fff',
							}
						}
					},

				},
				{
					value: v2,
					name: '非税收入',
					label: {
						normal: {
							formatter: '{b0}\n{c0}',
							textStyle: {
								fontSize: 12,
								color: '#aaa'
							}
						}
					},
					itemStyle: {
						normal: {
							color: 'rgba(255,255,255,.2)'
						},
						emphasis: {
							color: '#fff'
						}
					},
				}
			]
		}]
	};

	setTimeout(() => {
		myChart1.setOption(option1);
	}, 500);

	myChart1.on('click', function (params) {
		showDialog(params.data.name);
		stopPropagation(params);
	});
}

function myChart2() {
	var myChart2 = echarts.init(document.getElementById('echarts2'));
	var option2 = {
		series: [{

			type: 'pie',
			radius: ['70%', '80%'],
			color: '#62b62f',
			label: {
				normal: {
					position: 'center'
				}
			},
			data: [{
				name: '人员经费',
				value: 11128.18,
				label: {
					normal: {
						formatter: '{b}\n{c}',
						textStyle: {
							fontSize: 14,
							color: '#fff',
						}
					}
				}
			}, {
				name: '公用经费',
				value: 4375.39,
				label: {
					normal: {
						formatter: '{b}\n{c}',
						textStyle: {
							color: '#aaa',
							fontSize: 12
						}
					}
				},
				itemStyle: {
					normal: {
						color: 'rgba(255,255,255,.2)'
					},
					emphasis: {
						color: '#fff'
					}
				},
			}]
		}]
	};

	setTimeout(() => {
		myChart2.setOption(option2);
	}, 500);
	

	myChart2.on('click', function (params) {
		showDialog(params.data.name);
		stopPropagation(params);
	});
}

function myChart4() {
	var myChart4 = echarts.init(document.getElementById('echarts4'));
	var money = ['3500万元','2500万元','1500万元','1000万元','800万元','600万元'];
	var plantCap = [{
		name: '201',
		value: '一般服务公共支出'
	}, {
		name: '110',
		value: '转移性收入'
	}, {
		name: '205',
		value: '教育支出'
	}, {
		name: '206',
		value: '科学教育支出'
	}, {
		name: '207',
		value: '文化体育与传媒支出'
	}, {
		name: '208',
		value: '社会保障和就业支出'
	}];
	var datalist = [{
		offset: [56, 48],
		symbolSize: 110,
		// opacity: .95,
		color: 'rgba(73,188,247,.14)',

	}, {

		offset: [30, 70],
		symbolSize: 70,
		color: 'rgba(73,188,247,.14)'
	}, {
		offset: [0, 43],
		symbolSize: 60,
		color: 'rgba(73,188,247,.14)'

	}, {
		offset: [93, 30],
		symbolSize: 70,
		color: 'rgba(73,188,247,.14)'
	}, {
		offset: [26, 19],
		symbolSize: 65,
		color: 'rgba(73,188,247,.14)'
	}, {
		offset: [75, 75],
		symbolSize: 60,
		color: 'rgba(73,188,247,.14)'

	}];

	var datas = [];
	for (var i = 0; i < plantCap.length; i++) {
		var item = plantCap[i];
		var itemToStyle = datalist[i];
		datas.push({
			name: item.value + ' \n' + item.name + '\n' + money[i],
			value: itemToStyle.offset,
			symbolSize: itemToStyle.symbolSize,
			label: {
				normal: {
					textStyle: {
						fontSize: 14,
						lineHeight: 56
					}
				}
			},

			itemStyle: {
				normal: {
					color: itemToStyle.color,
					opacity: itemToStyle.opacity
				}
			},
		})
	}
	var option4 = {
		grid: {
			show: false,
			top: 10,
			bottom: 10
		},

		xAxis: [{
			gridIndex: 0,
			type: 'value',
			show: false,
			min: 0,
			max: 100,
			nameLocation: 'middle',
			nameGap: 5
		}],

		yAxis: [{
			gridIndex: 0,
			min: 0,
			show: false,
			max: 100,
			nameLocation: 'middle',
			nameGap: 30
		}],
		series: [{
			type: 'scatter',
			symbol: 'circle',
			symbolSize: 120,
			label: {
				normal: {
					show: true,
					formatter: '{b}',
					color: '#FFF',
					textStyle: {
						fontSize: '30'
					}
				},
			},
			itemStyle: {
				normal: {
					color: '#F30'
				}
			},
			data: datas
		}]

	};

	setTimeout(() => {
		myChart4.setOption(option4);
	}, 500);

	

	myChart4.on('click', function (params) {
		showDialog(params.data.name.split(' ')[0]);
		stopPropagation(params);
	});
}

function myChart6() {
	var myChart6 = echarts.init(document.getElementById('echarts6'));
	var option6 = {
		tooltip: {
			trigger: "item",
			show: true,
			extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",
			extStyle: {
				fontFamily: "MicrosoftYahei"
			}
		},
		grid: {
			left: "2%",
			right: "2%",
			bottom: "2%",
			top: "2%",
			containLabel: true
		},
		color: [
			"#fccb00",
			"#1c65d6",
			"#4179ff",
			"#ff6a3a",
			"#1cd6b5",
			"#0e3fa0",
			"#1cd6b5",
			"#0b297a",
			"#077b73",
			"#007d70",
			"#006968"
		],
		series: [{
			name: "预算收入分类",
			type: "pie",
			radius: ['70%', '80%'],
			center: ["50%", "50%"],
			selectedMode: true,
			avoidLabelOverlap: false,
			minAngle: 20,
			label: {
				normal: {
					show: false,
					position: "center"
				},
				emphasis: {
					formatter: "{b|{b}}\n{c|{c}}{b|亿}",
					show: true,
					rich: {
						b: {
							color: "#fff",
							fontSize: 12,
							lineHeight: 20,
							fontWeight: "bold"
						},
						c: {
							color: "rgb(238, 176, 62)",
							lineHeight: 14,
							fontSize: 20,
							fontFamily: 'number'
						}
					}
				}
			},
			labelLine: {
				normal: {
					show: true
				}
			},
			data: [{
				name: '一般公共预算财政拨款',
				value: 21375.07,
				label: {
					normal: {
						formatter: '{b}',
						textStyle: {
							color: '#aaa',
							fontSize: 12
						}
					}
				},
			}, {
				name: '政府性基金预算财政拨款',
				value: 0
			}, {
				name: '事业收入',
				value: 439.00
			}, {
				name: '经营收入',
				value: 0
			}, {
				name: '其他收入',
				value: 1229.01
			}]
		}]
	};
	setTimeout(() => {
		myChart6.setOption(option6);
	}, 500);

	myChart6.on('click', function (params) {
		showDialog(params.data.name);
		stopPropagation(params);
	});
}

function myChart7() {
	var myChart7 = echarts.init(document.getElementById('echarts7'));
	var option7 = {
		tooltip: {
			trigger: "item",
			show: true,
			extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",
			extStyle: {
				fontFamily: "MicrosoftYahei"
			}
		},
		grid: {
			left: "2%",
			right: "2%",
			bottom: "2%",
			top: "2%",
			containLabel: true
		},
		color: [
			"#fccb00",
			"#1c65d6",
			"#4179ff",
			"#ff6a3a",
			"#1cd6b5",
			"#0e3fa0",
			"#1cd6b5",
			"#0b297a",
			"#077b73",
			"#007d70",
			"#006968"
		],
		series: [{
			name: "预算收入分类",
			type: "pie",
			radius: ['70%', '80%'],
			center: ["50%", "50%"],
			selectedMode: true,
			avoidLabelOverlap: false,
			minAngle: 20,
			label: {
				normal: {
					show: false,
					position: "center"
				},
				emphasis: {
					formatter: "{b|{b}}\n{c|{c}}{b|亿}",
					show: true,
					rich: {
						b: {
							color: "#fff",
							fontSize: 12,
							lineHeight: 20,
							fontWeight: "bold"
						},
						c: {
							color: "rgb(238, 176, 62)",
							lineHeight: 14,
							fontSize: 20,
							fontFamily: 'number'
						}
					}
				}
			},
			labelLine: {
				normal: {
					show: true
				}
			},
			data: [{
				name: '人员经费',
				value: 11128.18,
			}, {
				name: '日常公用经费',
				value: 4375.39
			}, {
				name: '项目支出',
				value: 7431.60
			}, {
				name: '经营支出',
				value: 0
			}]
		}]
	};
	setTimeout(() => {
		myChart7.setOption(option7);
	}, 500);

	myChart7.on('click', function (params) {
		showDialog(params.data.name);
		stopPropagation(params);
	});
}

function myChart8() {
	var myChart8 = echarts.init(document.getElementById('echarts8'));
	var option8 = {
		tooltip: {
			trigger: "item",
			show: true,
			extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",
			extStyle: {
				fontFamily: "MicrosoftYahei"
			}
		},
		grid: {
			left: "2%",
			right: "2%",
			bottom: "2%",
			top: "2%",
			containLabel: true
		},
		color: [
			"#fccb00",
			"#1c65d6",
			"#4179ff",
			"#ff6a3a",
			"#1cd6b5",
			"#0e3fa0",
			"#1cd6b5",
			"#0b297a",
			"#077b73",
			"#007d70",
			"#006968"
		],
		series: [{
			name: "预算收入分类",
			type: "pie",
			radius: ['70%', '80%'],
			center: ["50%", "50%"],
			selectedMode: true,
			avoidLabelOverlap: false,
			minAngle: 20,
			label: {
				normal: {
					show: false,
					position: "center"
				},
				emphasis: {
					formatter: "{b|{b}}\n{c|{c}}{b|亿}",
					show: true,
					rich: {
						b: {
							color: "#fff",
							fontSize: 12,
							lineHeight: 20,
							fontWeight: "bold"
						},
						c: {
							color: "rgb(238, 176, 62)",
							lineHeight: 14,
							fontSize: 20,
							fontFamily: 'number'
						}
					}
				}
			},
			labelLine: {
				normal: {
					show: true
				}
			},
			data: [{
				name: '一般公共预算财政拨款',
				value: 104.08,
			}]
		}]
	};
	setTimeout(() => {
		myChart8.setOption(option8);
	}, 500);

	myChart8.on('click', function (params) {
		showDialog(params.data.name);
		stopPropagation(params);
	});
}

function myChart9() {
	var myChart9 = echarts.init(document.getElementById('echarts9'));

	var data = [
		[
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '山西省太原市', '山西省'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '山西省石家庄', '山西省']
		],
		[
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '上海', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '北京', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '重庆', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '湖南', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '江苏', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '杭州', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '宁波', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '澳门', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '香港', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '哈尔冰', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '齐齐哈尔', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '拉萨', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '贵阳', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '成都', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '昆明', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '深圳', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '岳阳', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '襄阳', '其他'],
			[Math.random()*10000, Math.random()*100, Math.random()*10000, '天津', '其他']
		]
	];

	var option9 = {
		tooltip: {
			type: 'item'
		},
		legend: {
			top: 20,
			right: 50,
			textStyle: {
				color: "#a9f9fd",
				fontSize: 12
			},
		},
		xAxis: {
			splitLine: {
				show: false,
				lineStyle: {
					type: 'dashed'
				}
			},
			axisLine: {
				lineStyle: {
					color: "#3984b3"
				}
			},
		},
		yAxis: {
			splitLine: {
				show: false,
				lineStyle: {
					type: 'dashed'
				}
			},
			axisLine: {
				lineStyle: {
					color: "#3984b3"
				}
			},
			scale: true
		},
		series: [{
			name: '山西省',
			data: data[0],
			type: 'scatter',
			symbolSize: 40,
			label: {
				emphasis: {
					show: true,
					formatter: function (param) {
						return param.data[3];
					},
					position: 'top'
				}
			},
			itemStyle: {
				normal: {
					shadowBlur: 10,
					shadowColor: 'rgba(120, 36, 50, 0.5)',
					shadowOffsetY: 5,
					color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
						offset: 0,
						color: 'rgb(251, 118, 123)'
					}, {
						offset: 1,
						color: 'rgb(204, 46, 72)'
					}])
				}
			}
		}, {
			name: '其他',
			data: data[1],
			type: 'scatter',
			symbolSize: 20,
			label: {
				emphasis: {
					show: true,
					formatter: function (param) {
						return param.data[3];
					},
					position: 'top'
				}
			},
			itemStyle: {
				normal: {
					shadowBlur: 10,
					shadowColor: 'rgba(25, 100, 150, 0.5)',
					shadowOffsetY: 5,
					color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
						offset: 0,
						color: 'rgb(129, 227, 238)'
					}, {
						offset: 1,
						color: 'rgb(25, 183, 207)'
					}])
				}
			}
		}]
	};
	setTimeout(() => {
		myChart9.setOption(option9);
	}, 500);
}

function myChart10() {
	var myChart10 = echarts.init(document.getElementById('echarts10'));
	var option10 = {
		tooltip: {
			trigger: "axis",
			axisPointer: {
				// 坐标轴指示器，坐标轴触发有效
				type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
			},
			// formatter: "{a}{b}：<span style='font-weight: bold'>{c}</span>亿<br>"
		},
		grid: {
			left: "5%",
			right: "5%",
			bottom: "5%",
			top: "30%",
			containLabel: true
		},
		legend: {
			
			right: 'center',
			top: 12,
			textStyle: {
				color: "#1cd6b5",
				fontSize: 18
			},
			itemWidth: 12,
			itemHeight: 10
			// itemGap: 35
		},
		xAxis: {
			type: "category",
			data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
			axisLine: {
				lineStyle: {
					color: "#3984b3"
				}
			},
			axisLabel: {
				// interval: 0,
				// rotate: 40,
				textStyle: {
					fontFamily: "Microsoft YaHei"
				}
			}
		},

		yAxis: [{
				name: "亿元",
				type: "value",
				axisLine: {
					show: false,
					lineStyle: {
						color: "#3984b3"
					}
				},
				splitLine: {
					show: false,
					lineStyle: {
						color: "rgba(255,255,255,0.3)"
					}
				}
			},
			{
				name: "亿元",
				type: "value",
				axisLine: {
					show: false,
					lineStyle: {
						color: "#3984b3"
					}
				},
				splitLine: {
					show: false,
					lineStyle: {
						color: "rgba(255,255,255,0.3)"
					}
				},
			}
		],

		series: [{
				name: "今年",
				type: "bar",
				barWidth: "30%",
				itemStyle: {
					normal: {
						color: "#3984b3"
					}
				},
				data: [Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,
					Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10]
			},
			{
				name: "去年",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: "#fccb05"
					}
				},
				data: [Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,
					Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10]
			}
		]
	};
	setTimeout(() => {
		myChart10.setOption(option10);
	}, 500);
}

function myChart11() {
	var myChart11 = echarts.init(document.getElementById('echarts11'));

	
	var totalCost = [100, 100, 100, 100, 100]; //背景色比例
	var visits = [(Math.random() * 100).toFixed(2), (Math.random() * 100).toFixed(2), (Math.random() * 100).toFixed(2), 
				  (Math.random() * 100).toFixed(2), (Math.random() * 100).toFixed(2)]; //数值
	var grade = ['现代职业教育', '日常公用经费', '项目经费','财政拨款','学生资助补助经费'];
	var result = ['增加' + Math.round((Math.random() * 10000)), '增加' + Math.round((Math.random() * 10000)), '增加' + Math.round((Math.random() * 10000)), 
				  '增加' + Math.round((Math.random() * 10000)), '增加' + Math.round((Math.random() * 10000))];
    var data = {
        grade: grade,
        totalCost: totalCost,
        visits: visits,
    };

	var option11 = {
        grid: {
        	top: "1%",
            left: "1%",
            right: "1%",
            bottom: "1%",
            containLabel: true

        },
        tooltip: {
            show: false
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            type: 'category',
            
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    fontSize: 14,
                    color: '#a9f9fd'
                },
            },
            data: data.grade
        }, {
            type: 'category',

            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
				formatter: function (value, index) {
					return '     ' + value + '%           '+ result[index];
				},
                textStyle: {
                    fontSize: 14,
                    color: '#54AFEE',
                },
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: data.visits
        }, ],
        series: [{

                type: 'bar',
                yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        show: true,
                        color: 'rgba(255,255,255,0.2)',
                        barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                barWidth: '30%',

                data: data.totalCost
            },
            {

                type: 'bar',
                
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#6390F0'

                        }, {
                            offset: 1,
                            color: '#25EBE9'

                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                label: {
                    normal: {
                        show: false,
                    }
                },
                barWidth: '30%',

                data: data.visits
            }

        ]
	};

	setTimeout(() => {
		myChart11.setOption(option11);
	}, 500);
}

function myChart12() {
	var myChart12 = echarts.init(document.getElementById('echarts12'));


	
	var totalCost = [100, 100, 100, 100, 100]; //背景色比例
	var visits = [(Math.random() * 100).toFixed(2), (Math.random() * 100).toFixed(2), (Math.random() * 100).toFixed(2), 
		(Math.random() * 100).toFixed(2), (Math.random() * 100).toFixed(2)]; //数值
	var grade = ['现代职业教育', '日常公用经费', '项目经费','财政拨款','学生资助补助经费'];
	var result = ['降低' + Math.round((Math.random() * 10000)), '降低' + Math.round((Math.random() * 10000)), '降低' + Math.round((Math.random() * 10000)), 
			 	  '降低' + Math.round((Math.random() * 10000)), '降低' + Math.round((Math.random() * 10000))];
    var data = {
        grade: grade,
        totalCost: totalCost,
        visits: visits,
    };
	var option12 = {
        grid: {
        	top: "1%",
            left: "1%",
            right: "1%",
            bottom: "1%",
            containLabel: true

        },
        tooltip: {
            show: false
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            type: 'category',
            
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    fontSize: 14,
                    color: '#a9f9fd'
                },
            },
            data: data.grade
        }, {
            type: 'category',

            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
				formatter: function (value, index) {
					return '     ' + value + '%           '+ result[index];
				},
                textStyle: {
                    fontSize: 14,
                    color: '#54AFEE',
                },
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: data.visits
        }, ],
        series: [{

                type: 'bar',
                yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        show: true,
                        color: 'rgba(255,255,255,0.2)',
                        barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                barWidth: '30%',

                data: data.totalCost
            },
            {

                type: 'bar',
                
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#6390F0'

                        }, {
                            offset: 1,
                            color: '#25EBE9'

                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                label: {
                    normal: {
                        show: false,
                    }
                },
                barWidth: '30%',

                data: data.visits
            }

        ]
	};
	setTimeout(() => {
		myChart12.setOption(option12);
	}, 500);
}

function showDialog(title){
	var dialog = document.querySelector('.dialog');
	var dialogTopTitle = document.querySelector('.dialog-top-title');
	dialogTopTitle.innerHTML = title;
	dialog.style.opacity = 1;
	myChart9();
	myChart10();
	myChart11();
	myChart12();
}

function hideDialog(){
	$('.dialog').css('opacity', 0);
}

function stopPropagation(e){
    e=window.event||e;
    if(document.all){  //只有ie识别
        e.cancelBubble=true;
    }else{
        e.stopPropagation();
    }
}


function onclick() {
	var sycm = document.querySelectorAll('.sycm ul li');
	var sycmLength = sycm.length;
	for(let i = 0 ; i < sycmLength; i++){
		sycm[i].onclick = function(e) {
			var title = sycm[i].querySelector('span').innerHTML;
			showDialog(title);
			stopPropagation(e);
		}
	}

	var financialIndex = document.querySelectorAll('.financialIndex ul li');
	var financialIndexLength = financialIndex.length;
	for(let i = 0 ; i < financialIndexLength; i++){
		financialIndex[i].onclick = function(e) {
			var title = financialIndex[i].querySelector('span').innerHTML;
			showDialog(title);
			stopPropagation(e);
		}
	}

	var dialogTopClose = document.querySelector('.dialog-top-close');
	dialogTopClose.onclick = function() {
		hideDialog();
	}

	var barbox = document.querySelectorAll('.barbox ul li');
	var barbox2 = document.querySelectorAll('.barbox2 ul li');
	var barboxLength = barbox.length;

	for(let i = 0; i < barboxLength; i++){
		barbox[i].onclick = function() {
			showDialog(barbox2[i].innerHTML);
		}
	}

	for(let i = 0; i < barboxLength; i++){
		barbox2[i].onclick = function() {
			showDialog(this.innerHTML);
		}
	}

}