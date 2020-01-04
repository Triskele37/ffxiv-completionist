const { shell } = require('electron');
const data = require('./data');

const Store = require('electron-store');
const store = new Store();


var app = new Vue({
	el: '#app',
	data: {
		groups: data,
		breadcrumbs: [],
		selectedGroup: null,
	},
	methods: {
		onGroupClick: function(group, degree) {
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

			store.set(task.name, task.complete);
			// View current tasks status if set to complete or not
			console.log(store.get('task.name'));

			// View all tasks that have had their status changed
			console.log(store.get(task));
			
			this.$forceUpdate();
		},
		gotoGamerEscape: function(name) {
			shell.openExternal('https://ffxiv.gamerescape.com/wiki/' + name.replace(/ /g, '_'));
		},
		gotoGarlandTools: function(name) {
			shell.openExternal('https://www.garlandtools.org/db/#search/' + name.replace(/ /g, '_'));
		}
	}
});
