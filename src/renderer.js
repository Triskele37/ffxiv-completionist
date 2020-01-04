const data = require('./data');

var app = new Vue({
	el: '#app',
	data: {
		groups: data,
		breadcrumbs: [],
		selectedGroup: null,
	},
	methods: {
		onGroupClick: function(group, degree) {
			console.log(group, degree);
			if(degree === 1) this.breadcrumbs = [group.name];
			if(degree === 2) this.breadcrumbs = [this.breadcrumbs[0], group.name];
			if(degree === 3) this.breadcrumbs = [this.breadcrumbs[0], this.breadcrumbs[1], group.name];
			
			this.selectedGroup = group;
			
			this.$forceUpdate();
		},
		onTaskCompleteClick: function(task) {
			switch(task.complete) {
				case 'Y': task.complete = 'X'; break;
				case 'X': task.complete = 'N'; break;
				default: task.complete = 'Y';
			}
			
			this.$forceUpdate();
		},
		gamerEscapeLink: function(name) {
			return 'https://ffxiv.gamerescape.com/wiki/' + name.replace(/ /g, '_');
		},
		garlondToolsLink: function(name) {
			return 'https://www.garlandtools.org/db/#search/' + name.replace(/ /g, '_');
		}
	}
});
